import { Router } from "express";
import { db } from "@workspace/db";
import { contactMessagesTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const router = Router();

const contactInputSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  subject: z.string().optional().default(""),
  message: z.string().min(1),
});

// POST /contact — submit a message
router.post("/", async (req, res) => {
  try {
    const data = contactInputSchema.parse(req.body);
    await db.insert(contactMessagesTable).values({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    });
    res.json({ success: true, message: "Message received. Thank you for getting in touch!" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid input", details: err.errors });
    }
    console.error("Contact form error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /contact/messages — admin: retrieve all messages
router.get("/messages", async (_req, res) => {
  try {
    const messages = await db
      .select()
      .from(contactMessagesTable)
      .orderBy(contactMessagesTable.createdAt);
    res.json(messages.reverse());
  } catch (err) {
    console.error("Get messages error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /contact/messages/:id/read — mark as read
router.post("/messages/:id/read", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });
  try {
    await db
      .update(contactMessagesTable)
      .set({ isRead: true })
      .where(eq(contactMessagesTable.id, id));
    res.json({ success: true, message: "Marked as read" });
  } catch (err) {
    console.error("Mark read error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
