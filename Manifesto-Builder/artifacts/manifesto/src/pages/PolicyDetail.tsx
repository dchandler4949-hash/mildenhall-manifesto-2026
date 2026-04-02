import { useParams, Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PolicyDetail() {
  const params = useParams();
  const id = params.id || "economy";

  const titles: Record<string, string> = {
    "economy": "The Economy & Growth",
    "nhs": "Our National Health Service",
    "housing": "Housing & Infrastructure",
    "justice": "Law, Order & Justice",
    "environment": "Environment & Energy",
    "education": "Education & Skills"
  };

  return (
    <div className="w-full bg-background min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/policies" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all policies
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
          {titles[id] || "Policy Area"}
        </h1>

        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary">
          <p className="lead text-xl text-muted-foreground mb-8">
            This is a detailed sub-page for our commitments regarding {titles[id]}. In a full production environment, this content would be driven by a CMS detailing specific pledges, costings, and delivery timelines.
          </p>
          
          <div className="bg-primary/5 border-l-4 border-destructive p-6 mb-8 rounded-r-lg">
            <h3 className="mt-0 text-2xl">Our Key Pledges</h3>
            <ul>
              <li>Deliver immediate reform within the first 100 days of government.</li>
              <li>Ensure all spending commitments are fully costed by the OBR.</li>
              <li>Focus on long-term structural changes, not short-term political gimmicks.</li>
            </ul>
          </div>

          <p>
            Detailed implementation strategy goes here. The people of the UK deserve transparency on exactly how we intend to achieve these goals, which ministers will be responsible, and the timeline by which success will be judged.
          </p>
        </div>
      </div>
    </div>
  );
}
