import { useParams, useLocation } from "wouter";
import { useGetSurvey, useSubmitSurveyResponse } from "@workspace/api-client-react";
import { useState } from "react";
import { Loader2, ArrowLeft, Send } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function SurveyDetail() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const { data: survey, isLoading, isError } = useGetSurvey(Number(id));
  const submitMutation = useSubmitSurveyResponse();

  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleOptionChange = (questionId: number, val: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!survey) return;

    // Validation
    const unanswered = survey.questions.filter(q => !answers[q.id]);
    if (unanswered.length > 0) {
      toast({
        title: "Incomplete Survey",
        description: "Please answer all questions before submitting.",
        variant: "destructive"
      });
      return;
    }

    const payload = {
      answers: Object.entries(answers).map(([qId, val]) => ({
        questionId: Number(qId),
        value: val
      }))
    };

    try {
      await submitMutation.mutateAsync({ surveyId: Number(id), data: payload });
      toast({
        title: "Thank you!",
        description: "Your response has been recorded."
      });
      setLocation(`/surveys/${id}/results`);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to submit survey. Please try again.",
        variant: "destructive"
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !survey) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-destructive font-bold">Survey not found</h2>
        <Link href="/surveys" className="text-primary mt-4 inline-block hover:underline">Back to Surveys</Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-muted/30 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/surveys" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to surveys
        </Link>
        
        <div className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
          <div className="bg-primary p-8 text-white">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">{survey.title}</h1>
            <p className="text-white/80 text-lg">{survey.description}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-10">
              {survey.questions.sort((a, b) => a.orderIndex - b.orderIndex).map((q, idx) => (
                <div key={q.id} className="space-y-4">
                  <label className="block text-lg font-bold text-foreground">
                    <span className="text-accent mr-2">{idx + 1}.</span>
                    {q.text}
                  </label>
                  
                  {q.type === 'multiple_choice' && (
                    <div className="grid gap-3">
                      {q.options.map(opt => (
                        <label key={opt} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${answers[q.id] === opt ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border hover:border-primary/40 hover:bg-muted'}`}>
                          <input 
                            type="radio" 
                            name={`q_${q.id}`} 
                            value={opt}
                            checked={answers[q.id] === opt}
                            onChange={() => handleOptionChange(q.id, opt)}
                            className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                          />
                          <span className="ml-3 font-medium">{opt}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {q.type === 'scale' && (
                    <div className="px-4 py-8 bg-muted rounded-xl border border-border">
                      <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        value={answers[q.id] || 5}
                        onChange={(e) => handleOptionChange(q.id, e.target.value)}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                      <div className="flex justify-between text-sm mt-4 font-semibold text-muted-foreground">
                        <span>1 - Strongly Disagree</span>
                        <span className="text-primary text-xl">{answers[q.id] || 5}</span>
                        <span>10 - Strongly Agree</span>
                      </div>
                    </div>
                  )}

                  {q.type === 'text' && (
                    <textarea 
                      rows={4}
                      value={answers[q.id] || ""}
                      onChange={(e) => handleOptionChange(q.id, e.target.value)}
                      placeholder="Share your thoughts..."
                      className="w-full p-4 border-2 border-border rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-y"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border flex justify-end">
              <button 
                type="submit" 
                disabled={submitMutation.isPending}
                className="px-8 py-4 bg-destructive text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-destructive/90 transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitMutation.isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                Submit Response
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
