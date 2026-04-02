import { useState, useCallback } from "react";
import { useGetSurveys, useGetSurvey, useGetSurveyResults, useSubmitSurveyResponse } from "@workspace/api-client-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Loader2, Send, BarChart2, Users, ChevronRight, CheckCircle2, MapPin, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const COLORS = ["hsl(222,80%,18%)", "hsl(350,85%,40%)", "hsl(43,96%,42%)", "hsl(160,60%,35%)", "hsl(280,50%,40%)", "hsl(190,70%,35%)"];

const VILLAGE_CENTRES: { name: string; lat: number; lon: number }[] = [
  { name: "Mildenhall", lat: 52.356, lon: 0.510 },
  { name: "Beck Row", lat: 52.374, lon: 0.499 },
  { name: "West Row", lat: 52.382, lon: 0.443 },
  { name: "Barton Mills", lat: 52.343, lon: 0.553 },
  { name: "Worlington", lat: 52.360, lon: 0.421 },
  { name: "Freckenham", lat: 52.312, lon: 0.470 },
  { name: "Herringswell", lat: 52.317, lon: 0.527 },
  { name: "Tuddenham", lat: 52.320, lon: 0.464 },
];

const MAX_VILLAGE_RADIUS_KM = 8;

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function coordsToVillage(lat: number, lon: number): string {
  let nearest = { name: "", dist: Infinity };
  for (const v of VILLAGE_CENTRES) {
    const d = haversineKm(lat, lon, v.lat, v.lon);
    if (d < nearest.dist) nearest = { name: v.name, dist: d };
  }
  if (nearest.dist <= MAX_VILLAGE_RADIUS_KM) return nearest.name;
  return "Other — West Suffolk";
}

const LOCATION_QUESTION_TEXT = "Which area do you live in?";

function isLocationQuestion(text: string): boolean {
  return text.startsWith(LOCATION_QUESTION_TEXT);
}

function isDemographicQuestion(orderIndex: number): boolean {
  return orderIndex < 3;
}

function ResultsBlock({ surveyId }: { surveyId: number }) {
  const { data: results, isLoading } = useGetSurveyResults(surveyId, {
    query: { refetchInterval: 15000 },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8 gap-3 text-muted-foreground">
        <Loader2 className="w-5 h-5 animate-spin text-primary" />
        <span>Loading live results…</span>
      </div>
    );
  }

  if (!results) return null;

  const demographicResults = results.results.filter((r) => {
    const q = results.results.indexOf(r);
    return q < 3;
  });
  const policyResults = results.results.slice(3);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
        <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
        Live results updating automatically
        <span className="ml-auto flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          {results.totalResponses} {results.totalResponses === 1 ? "response" : "responses"}
        </span>
      </div>

      {demographicResults.length > 0 && (
        <div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Who responded</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {demographicResults.map((result) => {
              const total = Object.values(result.tally).reduce((a: number, b) => a + (b as number), 0);
              return (
                <div key={result.questionId} className="bg-card border border-border rounded-xl p-4">
                  <p className="font-semibold text-xs text-foreground mb-3 leading-snug">
                    {result.questionText.split("(")[0].trim()}
                  </p>
                  <div className="space-y-1.5">
                    {Object.entries(result.tally)
                      .sort(([, a], [, b]) => (b as number) - (a as number))
                      .slice(0, 5)
                      .map(([opt, count], i) => {
                        const pct = total > 0 ? Math.round(((count as number) / total) * 100) : 0;
                        return (
                          <div key={opt}>
                            <div className="flex justify-between text-xs mb-0.5">
                              <span className="text-foreground truncate pr-1">{opt}</span>
                              <span className="text-muted-foreground font-medium shrink-0">{pct}%</span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{ width: `${pct}%`, backgroundColor: COLORS[i % COLORS.length] }}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {policyResults.length > 0 && (
        <div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Policy questions</p>
          <div className="space-y-4">
            {policyResults.map((result, idx) => {
              const total = Object.values(result.tally).reduce((a: number, b) => a + (b as number), 0);
              return (
                <div key={result.questionId} className="bg-card border border-border rounded-xl p-5">
                  <p className="font-semibold text-sm text-foreground mb-4 leading-snug">
                    <span className="text-accent font-bold mr-1.5">{idx + 1}.</span>
                    {result.questionText}
                  </p>

                  {result.type === "multiple_choice" && (
                    <div className="space-y-2.5">
                      {Object.entries(result.tally).map(([opt, count], i) => {
                        const pct = total > 0 ? Math.round(((count as number) / total) * 100) : 0;
                        return (
                          <div key={opt}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-foreground">{opt}</span>
                              <span className="text-muted-foreground font-medium">
                                {count as number} <span className="text-muted-foreground/60">({pct}%)</span>
                              </span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{ width: `${pct}%`, backgroundColor: COLORS[i % COLORS.length] }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {result.type === "scale" && (
                    <div className="h-36">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={Object.entries(result.tally)
                            .map(([score, count]) => ({ score, count }))
                            .sort((a, b) => Number(a.score) - Number(b.score))}
                          margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                        >
                          <XAxis dataKey="score" tick={{ fontSize: 11 }} />
                          <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                          <Tooltip
                            formatter={(v: number) => [v, "Responses"]}
                            labelFormatter={(l) => `Rating: ${l}`}
                          />
                          <Bar dataKey="count" fill="hsl(222,80%,18%)" radius={[3, 3, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {result.type === "text" && (
                    <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                      {result.textResponses.length > 0 ? (
                        result.textResponses.map((t, i) => (
                          <div key={i} className="text-sm text-muted-foreground bg-muted rounded-lg p-3 italic">
                            "{t}"
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground italic">No written responses yet.</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

interface Props {
  surveyTitle: string;
}

export function PolicySurveyBlock({ surveyTitle }: Props) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [gpsLoading, setGpsLoading] = useState(false);

  const { data: surveys, isLoading: surveysLoading } = useGetSurveys();
  const survey = surveys?.find((s) => s.title === surveyTitle);
  const surveyId = survey?.id ?? 0;

  const { data: fullSurvey, isLoading: surveyLoading } = useGetSurvey(surveyId, {
    query: { enabled: !!survey },
  });

  const submitMutation = useSubmitSurveyResponse();

  const handleGpsLocation = useCallback(
    (questionId: number) => {
      if (!navigator.geolocation) {
        toast({ title: "GPS not available", description: "Please select your area manually.", variant: "destructive" });
        return;
      }
      setGpsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const village = coordsToVillage(pos.coords.latitude, pos.coords.longitude);
          setAnswers((p) => ({ ...p, [questionId]: village }));
          setGpsLoading(false);
          toast({ title: `Location set to: ${village}`, description: "Your exact address is never recorded." });
        },
        () => {
          setGpsLoading(false);
          toast({ title: "Could not get location", description: "Please select your area manually.", variant: "destructive" });
        },
        { timeout: 8000, maximumAge: 60000 }
      );
    },
    [toast]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullSurvey) return;

    const required = fullSurvey.questions.filter((q) => q.type !== "text");
    const unanswered = required.filter((q) => !answers[q.id]);
    if (unanswered.length > 0) {
      toast({
        title: "Please answer all required questions",
        description: "All questions marked * need an answer before you can submit.",
        variant: "destructive",
      });
      return;
    }

    try {
      await submitMutation.mutateAsync({
        surveyId: fullSurvey.id,
        data: {
          answers: Object.entries(answers).map(([qId, val]) => ({
            questionId: Number(qId),
            value: val,
          })),
        },
      });
      setSubmitted(true);
      setShowResults(true);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again in a moment.", variant: "destructive" });
    }
  };

  const isLoading = surveysLoading || (!!survey && surveyLoading);

  if (isLoading) {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex items-center justify-center gap-3">
        <Loader2 className="w-5 h-5 animate-spin text-primary" />
        <span className="text-muted-foreground text-sm">Loading survey…</span>
      </div>
    );
  }

  if (!survey || !fullSurvey) return null;

  const sortedQuestions = [...fullSurvey.questions].sort((a, b) => a.orderIndex - b.orderIndex);
  const demographicQuestions = sortedQuestions.filter((q) => isDemographicQuestion(q.orderIndex));
  const policyQuestions = sortedQuestions.filter((q) => !isDemographicQuestion(q.orderIndex));

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-2xl overflow-hidden" id="survey">
      <div className="bg-primary px-6 py-5 flex items-start gap-4">
        <BarChart2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
        <div>
          <h3 className="text-white font-bold font-serif text-xl leading-tight">Have Your Say</h3>
          <p className="text-white/70 text-sm mt-1">
            Your answers update the live results in real time. You do not need to register or give your name.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {!showResults ? (
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Demographic section */}
            <div className="space-y-6">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">About you — helps us understand local views</p>
              {demographicQuestions.map((q) => (
                <div key={q.id} className="space-y-3">
                  <label className="block font-semibold text-foreground leading-snug text-sm">
                    {q.text.split("(")[0].trim()}
                    <span className="text-destructive ml-1 text-sm" aria-label="required">*</span>
                  </label>

                  {isLocationQuestion(q.text) ? (
                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={() => handleGpsLocation(q.id)}
                        disabled={gpsLoading}
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold rounded-lg hover:bg-primary/15 transition-colors disabled:opacity-50"
                      >
                        {gpsLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Navigation className="w-4 h-4" />
                        )}
                        {gpsLoading ? "Finding your location…" : "Use my location (GPS)"}
                      </button>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Only your village or town is recorded — never your street or address.
                      </p>
                      <div className="grid gap-1.5">
                        {q.options.map((opt) => (
                          <label
                            key={opt}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border cursor-pointer transition-all text-sm ${
                              answers[q.id] === opt
                                ? "border-primary bg-primary/5 ring-1 ring-primary text-foreground"
                                : "border-border hover:border-primary/40 hover:bg-muted bg-background text-foreground"
                            }`}
                          >
                            <input
                              type="radio"
                              name={`q_${q.id}`}
                              value={opt}
                              checked={answers[q.id] === opt}
                              onChange={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
                              className="w-4 h-4 text-primary shrink-0"
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-1.5" role="radiogroup" aria-label={q.text}>
                      {q.options.map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border cursor-pointer transition-all text-sm ${
                            answers[q.id] === opt
                              ? "border-primary bg-primary/5 ring-1 ring-primary text-foreground"
                              : "border-border hover:border-primary/40 hover:bg-muted bg-background text-foreground"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`q_${q.id}`}
                            value={opt}
                            checked={answers[q.id] === opt}
                            onChange={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
                            className="w-4 h-4 text-primary shrink-0"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <hr className="border-border" />

            {/* Policy questions */}
            <div className="space-y-8">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Your views</p>
              {policyQuestions.map((q, idx) => (
                <div key={q.id} className="space-y-3">
                  <label className="block font-semibold text-foreground leading-snug">
                    <span className="text-accent font-bold mr-1.5">{idx + 1}.</span>
                    {q.text}
                    {q.type !== "text" && (
                      <span className="text-destructive ml-1 text-sm" aria-label="required">*</span>
                    )}
                  </label>

                  {q.type === "multiple_choice" && (
                    <div className="grid gap-2" role="radiogroup" aria-label={q.text}>
                      {q.options.map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all text-sm leading-snug ${
                            answers[q.id] === opt
                              ? "border-primary bg-primary/5 ring-1 ring-primary text-foreground"
                              : "border-border hover:border-primary/40 hover:bg-muted bg-background text-foreground"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`q_${q.id}`}
                            value={opt}
                            checked={answers[q.id] === opt}
                            onChange={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
                            className="w-4 h-4 text-primary shrink-0"
                            aria-checked={answers[q.id] === opt}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  )}

                  {q.type === "scale" && (
                    <div className="bg-background border border-border rounded-xl px-4 py-5">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        value={answers[q.id] || "5"}
                        onChange={(e) => setAnswers((p) => ({ ...p, [q.id]: e.target.value }))}
                        className="w-full accent-primary"
                        aria-label={q.text}
                        aria-valuemin={1}
                        aria-valuemax={10}
                        aria-valuenow={Number(answers[q.id] || 5)}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>1 — Strongly disagree / Poor</span>
                        <span className="text-primary font-bold text-lg">{answers[q.id] || "5"}</span>
                        <span>10 — Strongly agree / Excellent</span>
                      </div>
                    </div>
                  )}

                  {q.type === "text" && (
                    <textarea
                      rows={3}
                      value={answers[q.id] || ""}
                      onChange={(e) => setAnswers((p) => ({ ...p, [q.id]: e.target.value }))}
                      placeholder="Share your thoughts in your own words — no wrong answers…"
                      className="w-full p-3.5 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
                      aria-label={q.text}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={submitMutation.isPending}
                className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                Submit My View
              </button>
              <button
                type="button"
                onClick={() => setShowResults(true)}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                <BarChart2 className="w-4 h-4" />
                See current results without voting
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-muted-foreground">
              Anonymous — no login required. Location is recorded at village level only, never your street or address.
              Responses are stored securely and used only to shape campaign policy.
            </p>
          </form>
        ) : (
          <div className="space-y-6">
            {submitted && (
              <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-800 font-semibold text-sm">Thank you — your response has been counted.</p>
                  <p className="text-green-700 text-xs mt-0.5">Results update automatically below. Every response shapes the campaign.</p>
                </div>
              </div>
            )}

            <ResultsBlock surveyId={surveyId} />

            {!submitted && (
              <button
                onClick={() => setShowResults(false)}
                className="text-sm text-primary font-semibold hover:underline flex items-center gap-1"
              >
                ← Take the survey
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
