import { useParams, Link } from "wouter";
import { useGetSurveyResults } from "@workspace/api-client-react";
import { Loader2, ArrowLeft, Users } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";

const COLORS = ['#012169', '#C8102E', '#F1B434', '#00703C', '#4B1248', '#00B2A9', '#8A1538'];

export default function SurveyResults() {
  const { id } = useParams();

  // Poll for live results every 5 seconds
  const { data: survey, isLoading, isError } = useGetSurveyResults(Number(id), {
    query: { refetchInterval: 5000 }
  });

  if (isLoading && !survey) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !survey) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-destructive font-bold">Failed to load results</h2>
        <Link href="/surveys" className="text-primary mt-4 inline-block hover:underline">Back to Surveys</Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-background min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/surveys" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to surveys
          </Link>
          
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            Live Results
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{survey.title}</h1>
          <div className="flex items-center justify-center gap-2 text-xl text-muted-foreground">
            <Users className="w-6 h-6 text-accent" />
            <span className="font-bold text-foreground">{survey.totalResponses}</span> total responses
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {survey.results.map((result, idx) => (
            <div key={result.questionId} className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-6 line-clamp-2" title={result.questionText}>
                <span className="text-muted-foreground mr-2">{idx + 1}.</span>
                {result.questionText}
              </h3>

              {result.type === 'multiple_choice' && (
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={Object.entries(result.tally).map(([name, value]) => ({ name, value }))}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => percent > 0.05 ? `${name} ${(percent * 100).toFixed(0)}%` : ''}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {Object.entries(result.tally).map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip formatter={(value: number) => [value, 'Votes']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}

              {result.type === 'scale' && (
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={Object.entries(result.tally).map(([score, count]) => ({ score, count })).sort((a, b) => Number(a.score) - Number(b.score))}>
                      <XAxis dataKey="score" label={{ value: 'Rating', position: 'insideBottom', offset: -5 }} />
                      <YAxis allowDecimals={false} />
                      <RechartsTooltip cursor={{fill: 'rgba(0,0,0,0.05)'}} />
                      <Bar dataKey="count" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}

              {result.type === 'text' && (
                <div className="h-72 overflow-y-auto space-y-3 pr-2">
                  {result.textResponses.length > 0 ? (
                    result.textResponses.map((text, i) => (
                      <div key={i} className="p-4 bg-muted rounded-lg text-sm border border-border/50">
                        "{text}"
                      </div>
                    ))
                  ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground italic">
                      No text responses yet.
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
