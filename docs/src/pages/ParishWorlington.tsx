import { Link } from "wouter";
import { MapPin, ArrowLeft, Users, Wheat, Home, TreePine } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

const BASE = import.meta.env.BASE_URL;

const facts = [
  { icon: Users, label: "Population", value: "~650", note: "Small but cohesive rural community" },
  { icon: Wheat, label: "Character", value: "Agricultural", note: "Breckland farming heartland" },
  { icon: Home, label: "Housing tier", value: "Tier 5", note: "Most protected from speculative development" },
  { icon: TreePine, label: "Landscape", value: "Breckland", note: "Adjacent to Breckland SAC protected habitat" },
];

const issues = [
  { title: "Rural Isolation", body: "With fewer than 650 residents and limited bus services, Worlington is one of the most transport-isolated communities in the division. Residents without a car depend entirely on goodwill lifts, expensive taxis, or simply going without — whether for shopping, medical appointments, or social connection." },
  { title: "Child Poverty", body: "Research by the End Child Poverty Coalition estimates that approximately 22% of children in Worlington parish are in relative poverty — one of the higher rates in the division. This reflects the combination of low local wages in agricultural employment and high transport and fuel costs." },
  { title: "Development Pressure", body: "Despite its Tier 5 designation, Worlington faces ongoing interest from developers seeking to exploit its proximity to Mildenhall and the A11 corridor. Without a robust Neighbourhood Plan, the parish council's ability to protect the village's character is limited." },
  { title: "Agricultural Employment Decline", body: "Agricultural mechanisation has significantly reduced the number of people employed on local farms. Many traditional agricultural livelihoods have gone, replaced by zero-hours or seasonal contract work — often with no employment rights, holiday pay, or sick leave." },
];

export default function ParishWorlington() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Worlington | David Chandler — Mildenhall Division"
        description="David Chandler's plans for Worlington village — rural priorities, connectivity, and local issues for this parish in the Mildenhall Division. West Suffolk County Council 2026."
        path="/parishes/worlington"
      />
      <div className="bg-amber-900 text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BASE}images/worlington-parish.png)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to the interactive map
          </Link>
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            Mildenhall Division — Parish Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Worlington Parish</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            The agricultural heartland of the division — rolling Breckland farmland, a small and close-knit village community, and the challenges that come with being rural in a society that often forgets those who live off the beaten track.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {facts.map(({ icon: Icon, label, value, note }) => (
              <div key={label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <Icon className="w-5 h-5 text-amber-300 mb-2" />
                <div className="text-xl font-bold text-amber-300 mb-0.5">{value}</div>
                <div className="text-xs font-semibold text-white">{label}</div>
                <div className="text-xs text-white/60 mt-0.5">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-primary/5 flex items-center justify-center p-4 md:p-8">
          <img
            src={`${BASE}images/worlington-parish.png`}
            alt="Worlington parish map"
            className="max-h-72 w-auto object-contain mix-blend-multiply"
          />
        </div>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">About Worlington</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              Worlington is a small agricultural village of approximately 650 people, sitting south of Mildenhall town in the Breckland landscape. The parish is characterised by its open arable fields, ancient hedgerows, and quiet country lanes — a landscape that has changed dramatically with modern agricultural intensification but retains real natural beauty.
            </p>
            <p>
              The village has an <strong className="text-foreground">active parish council</strong> and community groups that punch well above their weight given the population size. <strong className="text-foreground">All Saints Church</strong> has served the village since the medieval period. Worlington is also notable for being home to the <strong className="text-foreground">Worlington and Mildenhall Golf Course</strong>, one of the oldest nine-hole courses in England.
            </p>
            <p>
              As a <strong className="text-foreground">Tier 5 settlement</strong> in the West Suffolk Local Plan, Worlington has the highest level of development protection — but that protection is only as strong as the political will to enforce it. David's commitment is to ensure that Tier 5 villages genuinely mean something, not just on paper.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Key Issues Facing Worlington</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {issues.map(({ title, body }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold font-serif text-foreground mb-2 text-base">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">Policies Most Relevant to Worlington</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ["/policies/transport", "Transport"],
              ["/policies/poverty", "Poverty & Cost of Living"],
              ["/policies/environment", "Environment"],
              ["/policies/employment", "Employment"],
              ["/policies/housing", "Housing"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="px-4 py-2 bg-primary text-white font-semibold rounded-lg text-sm hover:bg-primary/90 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to the electoral map
          </Link>
          <Link href="/contact" className="px-5 py-2.5 bg-destructive text-white font-bold rounded-xl text-sm shadow hover:bg-destructive/90 transition-colors">
            Contact David about Worlington
          </Link>
        </div>
      </div>
    </div>
  );
}
