import { Link } from "wouter";
import { Leaf, AlertTriangle, MapPin, Droplets, Wind, Sun, Wheat, ChevronRight } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { PolicySurveyBlock } from "@/components/PolicySurveyBlock";

const stats = [
  { value: "Poor", label: "River Lark ecological status — classified by the Environment Agency 2022" },
  { value: "85 dB", label: "Average peak noise from RAF aircraft — affecting ~3,000 households" },
  { value: "52,000 ha", label: "Breckland Special Area of Conservation — one of England's rarest habitats" },
  { value: "4.2 t", label: "CO₂ per rural Suffolk household annually — vs 3.1 t in urban areas (car dependency)" },
];

export default function PolicyEnvironment() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Environment Policy | David Chandler — Mildenhall Division"
        description="Protecting the River Lark, green spaces, and the natural environment of the Mildenhall Division. David Chandler's environment policy for West Suffolk County Council 2026."
        path="/policies/environment"
      />
      <div className="bg-green-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-green-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Leaf className="w-4 h-4" aria-hidden="true" />
            Environment · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Environment</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            The Breckland landscape, the River Lark, and our open fields belong to everyone — not just landowners, not just those with the money to enjoy them. Protecting the environment is not a middle-class concern: it is about clean water, clean air, and a world worth living in for every generation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-xl md:text-2xl font-bold text-green-300 mb-1">{s.value}</div>
                <div className="text-xs text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">The Local Picture</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              The Mildenhall Division sits within the <strong className="text-foreground">Breckland Special Area of Conservation</strong> — 52,000 hectares of internationally protected heathland, pine forest, and open farmland. It is one of the rarest habitats in England, home to species found almost nowhere else in Britain. It is also under pressure from agricultural intensification, water abstraction, and development.
            </p>
            <p>
              The <strong className="text-foreground">River Lark</strong>, which flows through our division, was classified as having "poor ecological status" by the Environment Agency in 2022 — primarily due to agricultural runoff and treated sewage discharge. West Suffolk's water quality has deteriorated sharply in recent years, yet enforcement action by the EA has been chronically underfunded.
            </p>
            <p>
              Rural households in Suffolk produce <strong className="text-foreground">35% more carbon emissions per head than urban households</strong> — not by choice, but because car dependency, oil heating, and poor energy efficiency in older housing stock leave little alternative. The Green transition must be fair and funded, or rural communities will be left bearing the cost.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Droplets, title: "River Lark and Water Quality", body: "The EA's 2022 classification of the River Lark as 'poor' is a damning indictment of weak regulation and decades of agricultural and sewage discharge. Residents near the river, farmers who rely on it, and wildlife that depends on it all pay the price. Stronger enforcement and investment in natural flood management are urgently needed." },
            { icon: Wind, title: "Aircraft Noise and Air Quality", body: "C-17s and KC-135 tankers from RAF Mildenhall produce noise events averaging 85 decibels — equivalent to a lorry passing 25 metres away. This affects sleep, mental health, and educational attainment. Meanwhile, aircraft fuel emissions contribute to local air quality issues that go largely unmeasured." },
            { icon: Leaf, title: "Habitat Loss", body: "West Suffolk agricultural land applies pesticides at 23kg/ha on average — significantly above the UK average of 17kg/ha. Hedgerow removal, drainage of wetland, and intensive cropping have reduced wildlife habitats across the Breckland area dramatically since the 1950s. Every parish in our division has lost green spaces in the past decade." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-5">
              <Icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold font-serif text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </section>

        {/* Sub-page link */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">In Depth</h2>
          <Link href="/policies/solar-energy"
            className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors group">
            <Sun className="w-8 h-8 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div className="flex-1">
              <div className="font-serif font-bold text-foreground mb-1">Climate Data, Ice Ages, Sunnica &amp; Home Solar by 2035</div>
              <div className="text-sm text-muted-foreground leading-snug">Earth's five ice ages, current climate statistics, why David opposes industrial solar farms like Sunnica, and a detailed model for rooftop solar on every suitable home — with the four-way revenue split explained.</div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
          </Link>
          <Link href="/policies/agriculture"
            className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors group">
            <Wheat className="w-8 h-8 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div className="flex-1">
              <div className="font-serif font-bold text-foreground mb-1">Agriculture &amp; Food Security — Feed Ourselves First</div>
              <div className="text-sm text-muted-foreground leading-snug">The UK currently produces only ~60% of its food. David supports an 85%+ self-sufficiency target, protecting agricultural land from solar and housing development, and establishing a national 90-day strategic food reserve.</div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">What Do You Think?</h2>
          <p className="text-muted-foreground mb-6">You don't need to be an environmentalist to care about clean water, green spaces, and fresh air. These are things that affect everyone's daily life.</p>
          <PolicySurveyBlock surveyTitle="Environment Survey — Mildenhall Division" />
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments</h2>
          <div className="space-y-4">
            {[
              { c: "Push for a clean-up of the River Lark", d: "Work with the Environment Agency, Water companies, and West Suffolk Council to develop and fund an action plan for River Lark water quality — including enforcement against persistent polluters." },
              { c: "Expand accessible green spaces for all", d: "Campaign for the designation and improvement of publicly accessible green spaces across all four parishes — designed to be usable regardless of mobility or income." },
              { c: "Support community renewable energy", d: "Champion a community-owned solar or wind energy scheme for the Mildenhall Division, allowing residents to benefit financially from local clean energy generation." },
              { c: "Strengthen pesticide and hedgerow protections", d: "Use the County Council seat to lobby for stronger enforcement of environmental regulations on agricultural land in the Breckland area." },
              { c: "Ensure the green transition is fair", d: "Oppose any environmental policy that passes the cost to low-income rural households without adequate financial support. Insulation grants, EV charging infrastructure, and home energy support must reach everyone." },
            ].map(({ c, d }) => (
              <div key={c} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{c}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
