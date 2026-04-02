import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { imageMapsTable, imageHotspotsTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import multer from "multer";
import path from "path";
import fs from "fs";

const router: IRouter = Router();

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, unique + path.extname(file.originalname));
  },
});
const upload = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } });

async function getImageMapWithHotspots(id: number) {
  const map = await db.query.imageMapsTable.findFirst({
    where: eq(imageMapsTable.id, id),
  });
  if (!map) return null;
  const hotspots = await db
    .select()
    .from(imageHotspotsTable)
    .where(eq(imageHotspotsTable.imageMapId, id));
  return { ...map, hotspots };
}

router.get("/image-maps", async (_req, res) => {
  const maps = await db.select().from(imageMapsTable).orderBy(imageMapsTable.id);
  const result = await Promise.all(maps.map((m) => getImageMapWithHotspots(m.id)));
  res.json(result.filter(Boolean));
});

router.get("/image-maps/:imageMapId", async (req, res) => {
  const id = parseInt(req.params.imageMapId);
  const data = await getImageMapWithHotspots(id);
  if (!data) {
    res.status(404).json({ error: "Image map not found" });
    return;
  }
  res.json(data);
});

const imageMapInputSchema = z.object({
  title: z.string().min(1),
  imageUrl: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

router.post("/image-maps", async (req, res) => {
  const parsed = imageMapInputSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }
  const [map] = await db.insert(imageMapsTable).values(parsed.data).returning();
  res.status(201).json({ ...map, hotspots: [] });
});

router.delete("/image-maps/:imageMapId", async (req, res) => {
  const id = parseInt(req.params.imageMapId);
  await db.delete(imageMapsTable).where(eq(imageMapsTable.id, id));
  res.json({ success: true, message: "Deleted" });
});

const hotspotInputSchema = z.object({
  label: z.string().min(1),
  linkUrl: z.string().min(1),
  x: z.number(),
  y: z.number(),
  width: z.number().positive(),
  height: z.number().positive(),
});

router.post("/image-maps/:imageMapId/hotspots", async (req, res) => {
  const imageMapId = parseInt(req.params.imageMapId);
  const parsed = hotspotInputSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }
  const [hotspot] = await db
    .insert(imageHotspotsTable)
    .values({ ...parsed.data, imageMapId })
    .returning();
  res.status(201).json(hotspot);
});

router.delete("/image-maps/:imageMapId/hotspots/:hotspotId", async (req, res) => {
  const hotspotId = parseInt(req.params.hotspotId);
  await db.delete(imageHotspotsTable).where(eq(imageHotspotsTable.id, hotspotId));
  res.json({ success: true, message: "Deleted" });
});

router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const url = `/api/uploads/${req.file.filename}`;
  res.json({ url, filename: req.file.filename });
});

export default router;
