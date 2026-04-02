import { pgTable, text, serial, integer, timestamp, jsonb, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const questionTypeEnum = pgEnum("question_type", ["multiple_choice", "scale", "text"]);

export const surveysTable = pgTable("surveys", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull().default(""),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const surveyQuestionsTable = pgTable("survey_questions", {
  id: serial("id").primaryKey(),
  surveyId: integer("survey_id").notNull().references(() => surveysTable.id, { onDelete: "cascade" }),
  text: text("text").notNull(),
  type: questionTypeEnum("type").notNull().default("multiple_choice"),
  options: jsonb("options").$type<string[]>().notNull().default([]),
  orderIndex: integer("order_index").notNull().default(0),
});

export const surveyResponsesTable = pgTable("survey_responses", {
  id: serial("id").primaryKey(),
  surveyId: integer("survey_id").notNull().references(() => surveysTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const surveyAnswersTable = pgTable("survey_answers", {
  id: serial("id").primaryKey(),
  responseId: integer("response_id").notNull().references(() => surveyResponsesTable.id, { onDelete: "cascade" }),
  questionId: integer("question_id").notNull().references(() => surveyQuestionsTable.id, { onDelete: "cascade" }),
  value: text("value").notNull(),
});

export const insertSurveySchema = createInsertSchema(surveysTable).omit({ id: true, createdAt: true });
export const insertQuestionSchema = createInsertSchema(surveyQuestionsTable).omit({ id: true });
export const insertResponseSchema = createInsertSchema(surveyResponsesTable).omit({ id: true, createdAt: true });
export const insertAnswerSchema = createInsertSchema(surveyAnswersTable).omit({ id: true });

export type Survey = typeof surveysTable.$inferSelect;
export type SurveyQuestion = typeof surveyQuestionsTable.$inferSelect;
export type SurveyResponse = typeof surveyResponsesTable.$inferSelect;
export type SurveyAnswer = typeof surveyAnswersTable.$inferSelect;
export type InsertSurvey = z.infer<typeof insertSurveySchema>;
