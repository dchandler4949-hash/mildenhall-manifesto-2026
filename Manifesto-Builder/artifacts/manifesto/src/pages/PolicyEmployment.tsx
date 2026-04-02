import { Briefcase, AlertTriangle, MapPin, TrendingDown, Users } from "lucide-react";
import { PolicySurveyBlock } from "@/components/PolicySurveyBlock";
import { PageSEO } from "@/components/PageSEO";

const stats = [
  { value: "£28,400", label: "Average local wage — £4,200 below the Suffolk average of £32,600" },
  { value: "8.3%", label: "Zero-hours contract workers in West Suffolk — double the 4.1% national average" },
  { value: "4.2%", label: "Mildenhall unemployment rate — above Suffolk (3.1%) and England (3.8%) averages" },
  { value: "45%", label: "of local workers commute out of the Mildenhall area for work (ONS 2021 Census)" },
];

export default function PolicyEmployment() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Employment Policy | David Chandler — Mildenhall Division"
        description="Local wages in Mildenhall are £4,200 below the Suffolk average. David Chandler's employment policy for West Suffolk County Council 2026 — fair pay, zero-hours contracts, and good local jobs."
        path="/policies/employment"
      />
      <div className="bg-indigo-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Briefcase className="w-4 h-4" aria-hidden="true" />
            Employment · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Employment</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            Work should provide security, dignity, and a wage you can live on. Whether you have spent 30 years on a factory floor, are just entering the workforce, or have been unable to work due to disability or caring responsibilities — you deserve fair treatment and real opportunity. That is not a radical idea. It is basic decency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-xl md:text-2xl font-bold text-indigo-300 mb-1">{s.value}</div>
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
              The average wage in the Mildenhall area is <strong className="text-foreground">£28,400</strong> — more than £4,000 below the Suffolk average of £32,600 (ONS 2023). But that average conceals a significant range: many workers in agriculture, hospitality, retail, and care earn at or close to minimum wage, while a smaller number in defence, IT, and professional services earn considerably more.
            </p>
            <p>
              <strong className="text-foreground">Zero-hours contracts are twice as prevalent</strong> in West Suffolk as the national average. For those on such contracts, life is a constant uncertainty — no guaranteed income, no holiday pay certainty, no ability to plan. This particularly affects women, younger workers, and those with caring responsibilities.
            </p>
            <p>
              The <strong className="text-foreground">RAF Mildenhall and Lakenheath bases employ approximately 400–600 UK civilians directly</strong>, with further indirect employment in support industries. These are important jobs — but they create a fragile dependency. Any reduction in the American military presence (which has been discussed in the context of wider DoD consolidation) would have a significant local economic impact.
            </p>
            <p>
              David has spent his career working alongside ordinary people and understanding how the workplace can be made fairer — as a <strong className="text-foreground">shop steward, health and safety representative, and lay delegate</strong>. He knows that workers' rights are not a threat to business — they are the foundation of a productive, loyal, and healthy workforce.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: TrendingDown, title: "The Living Wage Gap", body: "The Real Living Wage (£13.45/hr outside London, from October 2025) is what the Living Wage Foundation calculates is genuinely needed to live. The government's 'National Living Wage' is lower — and the gap matters. Many care workers, retail staff, and agricultural labourers in our area are paid at or below the Real Living Wage, meaning work alone is not enough to meet basic costs." },
            { icon: Users, title: "Barriers to Work", body: "For many in our area, the biggest barrier to employment is not lack of will — it is lack of affordable childcare, accessible transport, suitable training, or reasonable adjustments for disability. The assumption that unemployment is a choice is one David will challenge directly." },
            { icon: AlertTriangle, title: "Skills and Training Gap", body: "Mildenhall has no FE college and limited access to vocational training. Many residents who want to reskill, change careers, or gain qualifications must travel to Bury St Edmunds or Ely — a significant barrier when you have no car or caring responsibilities." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-5">
              <Icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold font-serif text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">What Do You Think?</h2>
          <p className="text-muted-foreground mb-6">Whether you're in work, looking for work, retired, or caring full-time — tell us what employment means to you and what would make the biggest difference.</p>
          <PolicySurveyBlock surveyTitle="Employment Survey — Mildenhall Division" />
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments</h2>
          <div className="space-y-4">
            {[
              { c: "Push for Real Living Wage adoption by all West Suffolk Council contractors", d: "Use the County Council seat to require that all companies contracted by West Suffolk Council pay staff the Real Living Wage — and report on compliance annually." },
              { c: "Campaign for local apprenticeship and skills training", d: "Work with colleges, employers, and the Combined Authority to bring vocational training — construction, care, tech, agriculture — into the Mildenhall area rather than requiring people to travel." },
              { c: "Support trade union rights and workplace safety", d: "As a former shop steward and health & safety rep, David knows the importance of workers having the right to organise, bargain collectively, and raise safety concerns without fear. He will defend those rights at every opportunity." },
              { c: "Diversify the local economy", d: "Work with the Combined Authority to attract employers in sectors beyond defence and agriculture — reducing the area's economic fragility if the US military presence changes." },
              { c: "Remove barriers to work for carers and disabled people", d: "Push for subsidised childcare places, workplace adjustment guidance for small employers, and local job coaching services — so that everyone who wants to work can access employment on fair terms." },
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
