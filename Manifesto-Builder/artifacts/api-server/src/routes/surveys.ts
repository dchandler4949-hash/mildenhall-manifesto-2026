import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import {
  surveysTable,
  surveyQuestionsTable,
  surveyResponsesTable,
  surveyAnswersTable,
} from "@workspace/db/schema";
import { eq, count, sql } from "drizzle-orm";
import { z } from "zod";

const router: IRouter = Router();

async function buildSurveyWithResults(surveyId: number) {
  const survey = await db.query.surveysTable.findFirst({
    where: eq(surveysTable.id, surveyId),
  });
  if (!survey) return null;

  const questions = await db
    .select()
    .from(surveyQuestionsTable)
    .where(eq(surveyQuestionsTable.surveyId, surveyId))
    .orderBy(surveyQuestionsTable.orderIndex);

  const [totalResult] = await db
    .select({ count: count() })
    .from(surveyResponsesTable)
    .where(eq(surveyResponsesTable.surveyId, surveyId));
  const totalResponses = totalResult?.count ?? 0;

  const results = await Promise.all(
    questions.map(async (q) => {
      if (q.type === "text") {
        const answers = await db
          .select({ value: surveyAnswersTable.value })
          .from(surveyAnswersTable)
          .where(eq(surveyAnswersTable.questionId, q.id));
        return {
          questionId: q.id,
          questionText: q.text,
          type: q.type,
          tally: {} as Record<string, number>,
          textResponses: answers.map((a) => a.value),
        };
      } else {
        const tallies = await db
          .select({
            value: surveyAnswersTable.value,
            count: sql<number>`cast(count(*) as int)`,
          })
          .from(surveyAnswersTable)
          .where(eq(surveyAnswersTable.questionId, q.id))
          .groupBy(surveyAnswersTable.value);

        const tally: Record<string, number> = {};
        for (const t of tallies) {
          tally[t.value] = t.count;
        }
        return {
          questionId: q.id,
          questionText: q.text,
          type: q.type,
          tally,
          textResponses: [] as string[],
        };
      }
    })
  );

  return {
    ...survey,
    questions: questions.map((q) => ({
      ...q,
      options: (q.options as string[]) ?? [],
    })),
    results,
    totalResponses: Number(totalResponses),
  };
}

router.get("/surveys", async (_req, res) => {
  const surveys = await db.select().from(surveysTable).orderBy(surveysTable.id);
  const surveysWithQuestions = await Promise.all(
    surveys.map(async (s) => {
      const questions = await db
        .select()
        .from(surveyQuestionsTable)
        .where(eq(surveyQuestionsTable.surveyId, s.id))
        .orderBy(surveyQuestionsTable.orderIndex);
      return {
        ...s,
        questions: questions.map((q) => ({ ...q, options: (q.options as string[]) ?? [] })),
      };
    })
  );
  res.json(surveysWithQuestions);
});

router.get("/surveys/:surveyId", async (req, res) => {
  const surveyId = parseInt(req.params.surveyId);
  const data = await buildSurveyWithResults(surveyId);
  if (!data) {
    res.status(404).json({ error: "Survey not found" });
    return;
  }
  res.json(data);
});

router.get("/surveys/:surveyId/results", async (req, res) => {
  const surveyId = parseInt(req.params.surveyId);
  const data = await buildSurveyWithResults(surveyId);
  if (!data) {
    res.status(404).json({ error: "Survey not found" });
    return;
  }
  res.json(data);
});

const answerInputSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.number(),
      value: z.string(),
    })
  ),
});

router.post("/surveys/:surveyId/respond", async (req, res) => {
  const surveyId = parseInt(req.params.surveyId);
  const parsed = answerInputSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  const [response] = await db
    .insert(surveyResponsesTable)
    .values({ surveyId })
    .returning();

  await db.insert(surveyAnswersTable).values(
    parsed.data.answers.map((a) => ({
      responseId: response.id,
      questionId: a.questionId,
      value: a.value,
    }))
  );

  const data = await buildSurveyWithResults(surveyId);
  res.json(data);
});

export default router;
