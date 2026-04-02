import { db } from "@workspace/db";
import { surveysTable, surveyQuestionsTable, surveyResponsesTable, surveyAnswersTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";

type QuestionInput = {
  text: string;
  type: "multiple_choice" | "scale" | "text";
  options: string[];
  orderIndex: number;
};

const AREA_OPTIONS = [
  "Mildenhall",
  "Beck Row",
  "West Row",
  "Barton Mills",
  "Worlington",
  "Freckenham",
  "Herringswell",
  "Tuddenham",
  "Other — West Suffolk",
  "Outside West Suffolk",
];

const DEMOGRAPHIC_QUESTIONS: QuestionInput[] = [
  {
    text: "Which area do you live in? (Village or town only — your street and address are never recorded)",
    type: "multiple_choice",
    options: AREA_OPTIONS,
    orderIndex: 0,
  },
  {
    text: "What is your age group?",
    type: "multiple_choice",
    options: ["Under 18", "18–24", "25–34", "35–44", "45–54", "55–64", "65–74", "75 or over", "Prefer not to say"],
    orderIndex: 1,
  },
  {
    text: "How do you identify?",
    type: "multiple_choice",
    options: ["Male", "Female", "Non-binary", "Prefer to self-describe", "Prefer not to say"],
    orderIndex: 2,
  },
];

function withDemographics(policyQuestions: QuestionInput[]): QuestionInput[] {
  const reindexed = policyQuestions.map((q, i) => ({ ...q, orderIndex: i + 3 }));
  return [...DEMOGRAPHIC_QUESTIONS, ...reindexed];
}

async function clearAndSeedSurvey(title: string, description: string, questions: QuestionInput[]) {
  const existing = await db.select().from(surveysTable).where(eq(surveysTable.title, title));
  if (existing.length > 0) {
    const surveyId = existing[0].id;
    const responses = await db.select().from(surveyResponsesTable).where(eq(surveyResponsesTable.surveyId, surveyId));
    for (const r of responses) {
      await db.delete(surveyAnswersTable).where(eq(surveyAnswersTable.responseId, r.id));
    }
    await db.delete(surveyResponsesTable).where(eq(surveyResponsesTable.surveyId, surveyId));
    await db.delete(surveyQuestionsTable).where(eq(surveyQuestionsTable.surveyId, surveyId));
    await db.delete(surveysTable).where(eq(surveysTable.id, surveyId));
    console.log(`🗑️  Cleared existing survey: "${title}"`);
  }

  const [survey] = await db.insert(surveysTable).values({ title, description }).returning();
  await db.insert(surveyQuestionsTable).values(
    questions.map((q) => ({
      surveyId: survey.id,
      text: q.text,
      type: q.type,
      options: JSON.stringify(q.options),
      orderIndex: q.orderIndex,
    }))
  );
  console.log(`✅ Created survey: "${title}" (ID: ${survey.id}, ${questions.length} questions)`);
  return survey;
}

async function seed() {
  console.log("🌱 Seeding all surveys (10 questions each)...\n");

  // --- 1. Policy Priorities ---
  await clearAndSeedSurvey(
    "Policy Priorities Survey 2024",
    "Help us understand what matters most to you. Your responses directly shape our campaign priorities and manifesto commitments.",
    withDemographics([
      { text: "What is the most important issue facing your local area?", type: "multiple_choice", options: ["Housing affordability", "NHS & healthcare", "Cost of living", "Local transport", "Crime & safety", "Schools & education", "Environment & climate", "Jobs & economy"], orderIndex: 0 },
      { text: "How satisfied are you with NHS services in your area?", type: "multiple_choice", options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"], orderIndex: 0 },
      { text: "Which area of public spending should be the top priority?", type: "multiple_choice", options: ["NHS & social care", "Education & skills", "Housing & infrastructure", "Police & justice", "Environment & net zero", "Defence & security"], orderIndex: 0 },
      { text: "Do you believe the UK is heading in the right direction?", type: "multiple_choice", options: ["Yes, definitely", "Yes, mostly", "Not sure", "No, mostly not", "No, definitely not"], orderIndex: 0 },
      { text: "How important is it to tackle climate change? (1 = Not at all important, 10 = Extremely important)", type: "scale", options: [], orderIndex: 0 },
      { text: "How satisfied are you with the quality of local roads and infrastructure?", type: "multiple_choice", options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"], orderIndex: 0 },
      { text: "What one change would most improve your daily life? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  // --- 2. Education ---
  await clearAndSeedSurvey(
    "Education Survey — Mildenhall Division",
    "Tell us about education in your area. Every response — whether you have children or not — helps shape our commitment to better schools and lifelong learning.",
    withDemographics([
      { text: "How satisfied are you with local school provision in the Mildenhall area?", type: "multiple_choice", options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied", "My children have left school / I have no school-age children"], orderIndex: 0 },
      { text: "What is the biggest educational challenge in our area?", type: "multiple_choice", options: ["Limited sixth-form subject range — students travel 18+ miles for courses not at MCA6", "Not enough SEND support", "Large class sizes and underfunding", "Transport costs to school", "Lack of vocational training locally", "After-school childcare"], orderIndex: 0 },
      { text: "How important is it to expand further education options in Mildenhall? (1 = Not important, 10 = Essential)", type: "scale", options: [], orderIndex: 0 },
      { text: "Should the council fund free school bus travel for all students under 19?", type: "multiple_choice", options: ["Yes — it should be free for all", "Yes — for low-income families only", "It should be subsidised but not free", "No — families should pay", "Not sure"], orderIndex: 0 },
      { text: "How well does the local school system support children with additional needs?", type: "multiple_choice", options: ["Very well", "Well", "Adequately", "Poorly", "Very poorly", "I have no direct experience"], orderIndex: 0 },
      { text: "Rate the overall quality of education in the Mildenhall area (1 = Very poor, 10 = Excellent)", type: "scale", options: [], orderIndex: 0 },
      { text: "What one change would most improve education outcomes in our area? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  // --- 3. Transport ---
  await clearAndSeedSurvey(
    "Transport Survey — Mildenhall Division",
    "Tell us how you travel and what you find difficult. Your experience matters whether you drive, use the bus, walk, or cycle.",
    withDemographics([
      { text: "How do you most often travel within the local area?", type: "multiple_choice", options: ["I drive (no real alternative)", "I use the bus", "I walk or cycle", "I rely on lifts from others", "I use a mobility vehicle / adapted transport", "I work from home and rarely travel"], orderIndex: 0 },
      { text: "What is the biggest transport problem facing our community?", type: "multiple_choice", options: ["Infrequent or cancelled bus services", "No evening or weekend buses", "Unaffordable fares", "Dangerous roads (A1101 / A11)", "No rail link nearby", "Not enough cycling infrastructure"], orderIndex: 0 },
      { text: "Rate the current quality of bus services in the Mildenhall area (1 = Very poor, 10 = Excellent)", type: "scale", options: [], orderIndex: 0 },
      { text: "Should the council restore and fully fund evening and weekend bus routes? (1 = Strongly oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "Have you ever been unable to get to work, medical appointments, or education because of poor transport?", type: "multiple_choice", options: ["Yes — regularly", "Yes — occasionally", "No, but I worry it could happen", "No", "Prefer not to say"], orderIndex: 0 },
      { text: "How important is a demand-responsive bus service (book-a-bus) for rural areas? (1 = Not important, 10 = Essential)", type: "scale", options: [], orderIndex: 0 },
      { text: "What transport change would make the biggest difference to your life? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  // --- 4. Policing ---
  await clearAndSeedSurvey(
    "Policing & Safety Survey — Mildenhall Division",
    "We want to know how safe you feel and what concerns you. All voices matter — including people who have had difficult experiences with the justice system.",
    withDemographics([
      { text: "How safe do you feel in your local area day-to-day?", type: "multiple_choice", options: ["Very safe", "Safe", "Sometimes uneasy", "Unsafe", "Very unsafe"], orderIndex: 0 },
      { text: "What type of crime or antisocial behaviour concerns you most?", type: "multiple_choice", options: ["Rural theft and farm crime", "Burglary and home security", "Drug-related crime", "Speeding and dangerous driving", "Antisocial behaviour by young people", "Domestic abuse support", "Online fraud and scams"], orderIndex: 0 },
      { text: "Rate your confidence in police response times in rural areas (1 = No confidence, 10 = Full confidence)", type: "scale", options: [], orderIndex: 0 },
      { text: "Do you think our area has enough visible police officers and PCSOs? (1 = Far too few, 10 = Enough)", type: "scale", options: [], orderIndex: 0 },
      { text: "Have you reported a crime or incident to the police in the last two years?", type: "multiple_choice", options: ["Yes — and I was satisfied with the response", "Yes — but the response was poor", "No — I didn't bother because I didn't think it would help", "No — I didn't need to", "Prefer not to say"], orderIndex: 0 },
      { text: "How important is neighbourhood policing (dedicated local officers) to you? (1 = Not important, 10 = Essential)", type: "scale", options: [], orderIndex: 0 },
      { text: "What one change would most improve safety in our community? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  // --- 5. Taxation ---
  await clearAndSeedSurvey(
    "Taxation & Public Spending Survey — Mildenhall Division",
    "Your views on how money is raised and spent locally. There are no wrong answers — this is about fairness.",
    withDemographics([
      { text: "Do you think Council Tax offers fair value for the services you receive?", type: "multiple_choice", options: ["Very good value", "Good value", "Acceptable", "Poor value", "Very poor value — I pay more and get less"], orderIndex: 0 },
      { text: "Rural residents often pay the same Council Tax as town residents but receive fewer services. How strongly do you agree? (1 = Disagree, 10 = Strongly agree)", type: "scale", options: [], orderIndex: 0 },
      { text: "Which additional service would justify a modest increase in Council Tax?", type: "multiple_choice", options: ["Better road maintenance", "Restored bus routes", "More local youth services", "Improved elderly care support", "More visible community policing", "Better mental health services"], orderIndex: 0 },
      { text: "Should wealthy landowners pay fairer taxes to fund rural services? (1 = Strongly oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "How do you feel about the 13.5% Council Tax increase for 2025/26?", type: "multiple_choice", options: ["It was necessary to maintain services", "It was too high but I understand it", "It was unjustified", "I wasn't aware of it", "Prefer not to say"], orderIndex: 0 },
      { text: "Should large energy companies operating in West Suffolk (e.g. Sunnica solar) pay a community benefit levy? (1 = Strongly oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "What one change to local spending would most improve life here? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  // --- 6. Health ---
  await clearAndSeedSurvey(
    "Health & NHS Survey — Mildenhall Division",
    "Tell us about your experience of NHS and health services. Whether you use them often or rarely, your experience shapes what we fight for.",
    withDemographics([
      { text: "How easy is it to get a GP appointment when you need one?", type: "multiple_choice", options: ["Easy — I can usually get seen quickly", "Manageable — it takes a few days", "Difficult — I often wait 2+ weeks", "Very difficult — I've given up trying", "I use A&E as I can't get a GP appointment"], orderIndex: 0 },
      { text: "What is the biggest health or care problem in our area?", type: "multiple_choice", options: ["Long GP waiting times", "No NHS dentist locally", "Mental health support gaps", "Elderly and dementia care", "Children's and young people's services", "Ambulance response times in rural areas"], orderIndex: 0 },
      { text: "Rate your overall NHS experience in the Mildenhall area (1 = Very poor, 10 = Excellent)", type: "scale", options: [], orderIndex: 0 },
      { text: "How important is a dedicated rural health hub for Mildenhall? (1 = Not important, 10 = Essential)", type: "scale", options: [], orderIndex: 0 },
      { text: "Have you or a family member been affected by long NHS waiting lists?", type: "multiple_choice", options: ["Yes — significantly affected", "Yes — somewhat affected", "Not yet but I'm concerned", "No", "Prefer not to say"], orderIndex: 0 },
      { text: "Should West Suffolk Council lobby for a local NHS dental practice? (1 = Strongly oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "What health service change would most improve your life? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  // --- 7. Environment ---
  await clearAndSeedSurvey(
    "Environment Survey — Mildenhall Division",
    "Tell us how you see the local environment and what you'd like protected. Everyone lives in this landscape — your views matter.",
    withDemographics([
      { text: "How concerned are you about the local environment?", type: "multiple_choice", options: ["Very concerned — it's a top priority", "Concerned", "Somewhat concerned", "Not very concerned", "Not concerned at all"], orderIndex: 0 },
      { text: "What is the most pressing environmental issue in our area?", type: "multiple_choice", options: ["River Lark water quality (pollution)", "Aircraft noise and air pollution from RAF bases", "Pesticide use on farmland", "Loss of wildlife habitats and hedgerows", "Flooding risk from climate change", "Lack of accessible green spaces"], orderIndex: 0 },
      { text: "How important is investing in renewable energy for West Suffolk? (1 = Not important, 10 = Essential)", type: "scale", options: [], orderIndex: 0 },
      { text: "Should Mildenhall and parishes have a community-owned green energy scheme? (1 = Oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "What is your view on the Sunnica solar energy project near Freckenham?", type: "multiple_choice", options: ["I strongly support it", "I support it with conditions", "I'm neutral", "I have concerns about it", "I strongly oppose it", "I wasn't aware of it"], orderIndex: 0 },
      { text: "How well does the council currently protect local green spaces and habitats? (1 = Very poorly, 10 = Excellently)", type: "scale", options: [], orderIndex: 0 },
      { text: "What environmental change would most improve our area? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  // --- 8. Housing ---
  await clearAndSeedSurvey(
    "Housing Survey — Mildenhall Division",
    "Tell us your experience of housing — whether you own, rent, are on a waiting list, or are sofa-surfing. Every housing situation matters.",
    withDemographics([
      { text: "How would you describe your current housing situation?", type: "multiple_choice", options: ["Homeowner — settled", "Homeowner — struggling with costs", "Private renter", "Social housing tenant", "On the housing waiting list", "Living with family due to costs", "Facing housing insecurity or homelessness", "Prefer not to say"], orderIndex: 0 },
      { text: "What is the biggest housing problem in our area?", type: "multiple_choice", options: ["House prices too high for local wages", "Not enough social / council housing", "Poor quality or unsafe homes", "Unsuitable homes for disabled or elderly", "Too much speculative development", "Young people unable to get on the ladder"], orderIndex: 0 },
      { text: "Rate how affordable housing is for people on an average local wage (1 = Very affordable, 10 = Completely unaffordable)", type: "scale", options: [], orderIndex: 0 },
      { text: "Should all new developments include at least 30% genuinely affordable homes? (1 = Strongly oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "How many years have you lived in this area?", type: "multiple_choice", options: ["Less than 1 year", "1–5 years", "5–10 years", "10–20 years", "More than 20 years", "I grew up here"], orderIndex: 0 },
      { text: "Should the council prioritise local residents on housing waiting lists over people from outside the area? (1 = Strongly oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "What housing change would most improve life in our area? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  // --- 9. Poverty ---
  await clearAndSeedSurvey(
    "Poverty & Cost of Living Survey — Mildenhall Division",
    "These questions are about difficult realities. We ask them with respect — you do not have to identify yourself. Your answers help us fight for change.",
    withDemographics([
      { text: "In the past year, have you or anyone you know struggled to afford food, heating, or essentials?", type: "multiple_choice", options: ["Yes — myself directly", "Yes — someone I know", "I've worried about it", "No", "Prefer not to say"], orderIndex: 0 },
      { text: "What do you think is the main driver of poverty in our area?", type: "multiple_choice", options: ["Low wages — work doesn't pay enough", "High cost of living and fuel bills", "Lack of affordable housing", "Poor transport making jobs inaccessible", "Benefits system failures and delays", "Zero-hours contracts and unstable work", "Disability and ill health barriers"], orderIndex: 0 },
      { text: "How visible is poverty and hardship in our local communities? (1 = Not visible, 10 = Highly visible)", type: "scale", options: [], orderIndex: 0 },
      { text: "Should the council do more to fund local food banks, warm spaces, and crisis support? (1 = Oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "Have you ever used a food bank, warm space, or community crisis service?", type: "multiple_choice", options: ["Yes — I use or have used one", "No — but I know someone who has", "No", "Prefer not to say"], orderIndex: 0 },
      { text: "Should the Real Living Wage (currently £13.45/hr) be mandatory for all employers in West Suffolk? (1 = Strongly oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "What one policy would make the biggest difference to people struggling financially? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  // --- 10. Employment ---
  await clearAndSeedSurvey(
    "Employment Survey — Mildenhall Division",
    "Tell us about work — whether you're employed, seeking work, a carer, retired, or anything in between. All experiences are valid here.",
    withDemographics([
      { text: "Which best describes your current situation?", type: "multiple_choice", options: ["Full-time employed", "Part-time employed", "Self-employed", "On a zero-hours or casual contract", "Seeking work", "Retired", "Full-time carer or homemaker", "Long-term sick or disabled", "Student"], orderIndex: 0 },
      { text: "What is the biggest employment challenge in our area?", type: "multiple_choice", options: ["Low wages — not enough to live on", "Not enough local jobs", "Poor transport to workplaces", "Lack of skills training and apprenticeships", "Childcare costs making work unviable", "Age discrimination", "Disability or health barriers", "Zero-hours contracts with no security"], orderIndex: 0 },
      { text: "Rate how fairly local workers are treated by employers overall (1 = Very unfairly, 10 = Very fairly)", type: "scale", options: [], orderIndex: 0 },
      { text: "Should West Suffolk Council require all contractors to pay the Real Living Wage? (1 = Strongly oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "Is childcare availability or cost a barrier to you or people you know working?", type: "multiple_choice", options: ["Yes — a significant barrier", "Yes — a partial barrier", "No", "Not applicable to me", "Prefer not to say"], orderIndex: 0 },
      { text: "How important are local apprenticeships and vocational training to you? (1 = Not important, 10 = Essential)", type: "scale", options: [], orderIndex: 0 },
      { text: "What would most improve employment prospects in our area? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  // --- 11. U.S. Military ---
  await clearAndSeedSurvey(
    "U.S. Military Presence Survey — Mildenhall Division",
    "The American air bases at RAF Mildenhall and Lakenheath are a unique part of our community. We want honest views — there is no politically correct answer here.",
    withDemographics([
      { text: "Overall, how do you feel about the U.S. military presence at RAF Mildenhall and Lakenheath?", type: "multiple_choice", options: ["Very positive — vital for the area", "Mostly positive", "Mixed feelings — pros and cons", "Mostly negative", "Very negative — it should close", "I've never really thought about it"], orderIndex: 0 },
      { text: "What is the biggest issue related to the U.S. military bases for local people?", type: "multiple_choice", options: ["Aircraft noise and night flights", "Road traffic and congestion", "Housing pressure from base personnel", "Environmental concerns", "Lack of community engagement from the base", "Economic over-dependence on the base", "Security concerns"], orderIndex: 0 },
      { text: "Rate how well the U.S. military engages with our local community (1 = Very poorly, 10 = Very well)", type: "scale", options: [], orderIndex: 0 },
      { text: "Should local residents have a formal voice in decisions about noise, flights, and base operations? (1 = Oppose, 10 = Strongly support)", type: "scale", options: [], orderIndex: 0 },
      { text: "Has aircraft noise from the base directly affected your quality of life?", type: "multiple_choice", options: ["Yes — severely", "Yes — noticeably", "Occasionally", "Rarely", "No", "I live too far from the base to be affected"], orderIndex: 0 },
      { text: "How important is it that the base pays a community benefit contribution to local services? (1 = Not important, 10 = Essential)", type: "scale", options: [], orderIndex: 0 },
      { text: "What one change would most improve the relationship between the base and local community? (Optional)", type: "text", options: [], orderIndex: 0 },
    ])
  );

  console.log("\n✅ All 11 surveys seeded with 10 questions each!");
  process.exit(0);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
