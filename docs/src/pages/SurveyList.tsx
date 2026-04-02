import { Link } from "wouter";
import { useGetSurveys } from "@workspace/api-client-react";
import { Vote, Calendar, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { format } from "date-fns";

export default function SurveyList() {
  const { data: surveys, isLoading, isError } = useGetSurveys();

  return (
    <div className="w-full bg-background min-h-screen py-16">
      <PageSEO
        title="Have Your Say | David Chandler — Mildenhall Division Surveys"
        description="Share your views on local issues with David Chandler. 11 surveys covering housing, transport, policing, environment and more for residents of Mildenhall High Town, Barton Mills, Worlington and Freckenham."
        path="/surveys"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Have Your Say</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our campaign is driven by the people. Participate in our live national surveys to help shape our policy priorities. Your voice matters.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Loader2 className="w-12 h-12 animate-spin mb-4 text-primary" />
            <p>Loading surveys...</p>
          </div>
        ) : isError ? (
          <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded text-destructive flex items-start gap-4">
            <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-lg mb-1">Failed to load surveys</h3>
              <p>Please try again later. If the problem persists, the API may be unreachable.</p>
            </div>
          </div>
        ) : surveys?.length === 0 ? (
          <div className="text-center py-20 bg-muted rounded-xl border border-border border-dashed">
            <Vote className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">No Active Surveys</h3>
            <p className="text-muted-foreground">Check back later for new opportunities to have your say.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {surveys?.map((survey) => (
              <div 
                key={survey.id} 
                className="bg-card p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl border border-border/60 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Added {format(new Date(survey.createdAt), "MMMM d, yyyy")}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-2 group-hover:text-destructive transition-colors">
                    {survey.title}
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    {survey.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Link 
                    href={`/surveys/${survey.id}/results`}
                    className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-center"
                  >
                    View Results
                  </Link>
                  <Link 
                    href={`/surveys/${survey.id}`}
                    className="px-6 py-3 rounded-lg bg-destructive text-white font-bold hover:bg-destructive/90 shadow-lg shadow-destructive/20 transition-colors flex items-center justify-center gap-2"
                  >
                    Take Survey <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
