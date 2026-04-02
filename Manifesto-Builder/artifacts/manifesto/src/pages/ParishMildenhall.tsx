import { Link } from "wouter";
import { MapPin, ArrowLeft, Users, Building2, TreePine, Plane, Home, DollarSign } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

const BASE = import.meta.env.BASE_URL;

const facts = [
  { icon: Users, label: "Population", value: "~11,500", note: "Largest community in the division" },
  { icon: Building2, label: "Town status", value: "Market Town", note: "Weekly market with Saxon origins" },
  { icon: TreePine, label: "Area", value: "~850 ha", note: "Including RAF Mildenhall grounds" },
  { icon: Plane, label: "USAF presence", value: "100th ARW", note: "Major air refuelling wing based here" },
];

const issues = [
  { title: "High Street Decline", body: "Like many market towns, Mildenhall High Street has seen significant business closures over the past decade. The market square remains a focal point but needs investment and footfall restored through better bus links and community events." },
  { title: "RAF Mildenhall Noise", body: "Thousands of households in Mildenhall High Town are directly affected by aircraft operations — particularly night flights from C-17 Globemasters and KC-135 Stratotankers. Over 4,200 noise complaints were lodged in 2022 alone." },
  { title: "Healthcare Access", body: "Mildenhall Surgery serves approximately 12,000 patients with just four GPs — significantly above the recommended ratio. Average wait times for GP appointments regularly exceed two weeks." },
  { title: "Youth Services", body: "Since cuts to Suffolk County Council youth services budgets, Mildenhall young people have had limited access to structured youth clubs, career guidance, and safe social spaces. This contributes to the area's higher-than-average anti-social behaviour statistics." },
];

export default function ParishMildenhall() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Mildenhall High Town | David Chandler — Mildenhall Division"
        description="David Chandler's plans for Mildenhall High Town — the largest of the four parishes in the Mildenhall Division. Housing, transport, healthcare, and community services for West Suffolk County Council 2026."
        path="/parishes/mildenhall-high-town"
      />
      {/* Hero */}
      <div className="bg-primary text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BASE}images/mildenhall-high-town.png)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to the interactive map
          </Link>
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            Mildenhall Division — Parish Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Mildenhall High Town</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            The historic heart of our division — an ancient market town with Saxon roots, a proud community spirit, and real challenges that have gone unaddressed for too long.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {facts.map(({ icon: Icon, label, value, note }) => (
              <div key={label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <Icon className="w-5 h-5 text-accent mb-2" />
                <div className="text-xl font-bold text-accent mb-0.5">{value}</div>
                <div className="text-xs font-semibold text-white">{label}</div>
                <div className="text-xs text-white/60 mt-0.5">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Parish image */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-primary/5 flex items-center justify-center p-4 md:p-8">
          <img
            src={`${BASE}images/mildenhall-high-town.png`}
            alt="Mildenhall High Town parish map"
            className="max-h-72 w-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* About */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">About Mildenhall High Town</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              Mildenhall has been a significant settlement since at least Anglo-Saxon times. Its name — "Mildenhall" — derives from the Old English for "middle hall" or "middling nook," and the town's weekly market has operated for centuries. The <strong className="text-foreground">Church of St Mary and St Andrew</strong> is one of the finest medieval churches in Suffolk, reflecting the town's historic importance.
            </p>
            <p>
              Today, Mildenhall is a busy market town with a population of approximately 11,500. It is the largest settlement in the division and home to most of the area's services — the surgery, secondary school, supermarkets, and the weekly market. But many of those services are under severe pressure, and the town's high street has lost a significant number of businesses in the past decade.
            </p>
            <p>
              The <strong className="text-foreground">American military presence at RAF Mildenhall</strong> has shaped the town significantly since the 1950s. American personnel and their families have been part of the community for generations — bringing economic activity but also noise, congestion, and housing pressure. The relationship is complex and deserves honest discussion.
            </p>
          </div>
        </section>

        {/* Key issues */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Key Issues Facing Mildenhall</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {issues.map(({ title, body }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold font-serif text-foreground mb-2 text-base">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Housing & Rental Market */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-5">
            <Home className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
            <h2 className="text-xl font-serif font-bold text-blue-900">The Housing and Rental Market</h2>
          </div>
          <div className="space-y-4 text-blue-900/80 text-sm leading-relaxed">
            <p>
              Mildenhall High Town is the community most directly affected by military housing demand. Approximately <strong className="text-blue-900">28% of households</strong> in the immediate area are private renters — significantly above the Suffolk average of 18%. A large proportion of active rental demand comes from U.S. military personnel living off-base, who receive <strong className="text-blue-900">Overseas Housing Allowance (OHA)</strong> — a U.S. government housing subsidy ranging from approximately <strong className="text-blue-900">£1,450–£2,465 per month</strong> depending on rank.
            </p>
            <p>
              This creates a structural problem: landlords price properties to compete for OHA-funded military tenants. The result is that average private rents in the IP28 area now sit at <strong className="text-blue-900">£900–£1,100/month</strong> — well above the approximately <strong className="text-blue-900">£790/month</strong> that a local worker on the median wage can afford without exceeding 40% of gross income.
            </p>
            <div className="grid grid-cols-3 gap-3 my-4">
              {[
                { value: "~28%", label: "of Mildenhall area households privately renting (vs 18% Suffolk avg)" },
                { value: "~420", label: "households in the division receiving housing benefit while in employment" },
                { value: "£300+", label: "monthly gap between what local workers can afford and average rents" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white border border-blue-200 rounded-xl p-3 text-center">
                  <div className="font-bold text-blue-900 text-base mb-1">{value}</div>
                  <div className="text-xs text-blue-700 leading-tight">{label}</div>
                </div>
              ))}
            </div>
            <p>
              An estimated <strong className="text-blue-900">850–1,100 households</strong> across the division receive housing benefit or the housing element of Universal Credit. Of these, approximately <strong className="text-blue-900">42% are in employment</strong> — people working in shops, care homes, schools, and on farms, whose wages simply do not stretch to market rents in a housing market partly shaped by a foreign government's housing subsidy.
            </p>
            <p>
              David will be the first councillor to name this dynamic clearly and push for a <strong className="text-blue-900">Housing Market Impact Assessment</strong> — an independent analysis of how OHA-funded military demand affects local rents — and will work with the base, MoD, and the council to explore practical solutions, including expanded on-base accommodation.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-600 border-t border-blue-200 pt-3">
              <DollarSign className="w-3 h-3 shrink-0" />
              <span>Sources: U.S. DFAS OHA Calculator 2024, Rightmove IP28 2024, DWP Housing Benefit statistics 2024, West Suffolk Housing Needs Assessment 2023.</span>
            </div>
          </div>
        </section>

        {/* Policy links */}
        <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">Policies Most Relevant to Mildenhall</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ["/policies/health", "Health & NHS"],
              ["/policies/transport", "Transport"],
              ["/policies/us-military", "U.S. Military Presence"],
              ["/policies/employment", "Employment"],
              ["/policies/housing", "Housing"],
              ["/policies/policing", "Policing & Safety"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="px-4 py-2 bg-primary text-white font-semibold rounded-lg text-sm hover:bg-primary/90 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to the electoral map
          </Link>
          <Link href="/contact" className="px-5 py-2.5 bg-destructive text-white font-bold rounded-xl text-sm shadow hover:bg-destructive/90 transition-colors">
            Contact David about Mildenhall
          </Link>
        </div>
      </div>
    </div>
  );
}
