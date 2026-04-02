import { pgTable, text, serial, integer, timestamp, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const imageMapsTable = pgTable("image_maps", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  width: integer("width").notNull().default(800),
  height: integer("height").notNull().default(600),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const imageHotspotsTable = pgTable("image_hotspots", {
  id: serial("id").primaryKey(),
  imageMapId: integer("image_map_id").notNull().references(() => imageMapsTable.id, { onDelete: "cascade" }),
  label: text("label").notNull(),
  linkUrl: text("link_url").notNull(),
  x: real("x").notNull(),
  y: real("y").notNull(),
  width: real("width").notNull().default(10),
  height: real("height").notNull().default(5),
});

export const insertImageMapSchema = createInsertSchema(imageMapsTable).omit({ id: true, createdAt: true });
export const insertHotspotSchema = createInsertSchema(imageHotspotsTable).omit({ id: true });

export type ImageMap = typeof imageMapsTable.$inferSelect;
export type ImageHotspot = typeof imageHotspotsTable.$inferSelect;
export type InsertImageMap = z.infer<typeof insertImageMapSchema>;
export type InsertHotspot = z.infer<typeof insertHotspotSchema>;
