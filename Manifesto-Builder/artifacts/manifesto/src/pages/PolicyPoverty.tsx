import { Link } from "wouter";
import { HandHeart, AlertTriangle, MapPin, TrendingUp, Heart, Phone, ShieldCheck, Home, CreditCard, ArrowRight } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { PolicySurveyBlock } from "@/components/PolicySurveyBlock";

const stats = [
  { value: "28%", label: "Children in relative poverty in Mildenhall — among the highest in Suffolk" },
  { value: "+41%", label: "Rise in West Suffolk food bank use 2021–2023 — 7,834 people served in 2022/23" },
  { value: "18.4%", label: "Mildenhall households in fuel poverty — vs 13.4% England average" },
  { value: "847", label: "Universal Credit claimants in the Mildenhall area (DWP, October 2023)" },
];

export default function PolicyPoverty() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Poverty & Cost of Living | David Chandler — Mildenhall Division"
        description="28% of children in Mildenhall live in relative poverty. David Chandler's poverty and cost-of-living policy for West Suffolk County Council 2026 — food banks, fuel poverty, and emergency support."
        path="/policies/poverty"
      />
      <div className="bg-rose-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-widest mb-4">
            <HandHeart className="w-4 h-4" aria-hidden="true" />
            Poverty & Cost of Living · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Poverty & Cost of Living</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            Poverty is not a personal failing. It is a political choice — the result of decisions made by those with power that leave others behind. In rural communities like Mildenhall, poverty is less visible than in cities, but it is just as real, just as painful, and often harder to escape. David will not pretend it does not exist, and he will not scapegoat those who are struggling.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-xl md:text-2xl font-bold text-rose-300 mb-1">{s.value}</div>
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
              <strong className="text-foreground">28% of children in Mildenhall live in relative poverty</strong> — one of the highest rates in Suffolk, and significantly above the national average of 22% (End Child Poverty Coalition, 2022). In individual parishes, the figures are even starker: Worlington 22%, Freckenham 24%.
            </p>
            <p>
              West Suffolk Food Bank — which serves Mildenhall and the surrounding area — provided food parcels to <strong className="text-foreground">7,834 people in 2022/23</strong>, a 41% increase on the previous year. This is not an anomaly — it reflects years of falling real wages, rising costs, and a benefits system that often fails people at their most vulnerable.
            </p>
            <p>
              Rural poverty carries an additional burden that urban poverty does not: the <strong className="text-foreground">"rural premium"</strong>. Without access to cheaper supermarkets, without buses, with older housing stock and oil heating, rural households on low incomes spend significantly more of their money just to survive. This is invisible in national statistics — and it must not be ignored.
            </p>
            <p>
              David's view is clear: no one should go hungry, cold, or without dignity in a wealthy country. And no one should be made to feel ashamed of needing support. The political parties that built our welfare state did so because they understood that collective provision is stronger than individual struggle — and that remains true.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Heart, title: "The Benefits System", body: "Universal Credit claimants in the Mildenhall area wait an average of five weeks for their first payment. Many fall into debt during that wait. The two-child benefit cap, sanctions regime, and assessment processes for disability benefits cause real, evidenced harm — particularly to single parents, disabled people, and those with mental health conditions." },
            { icon: TrendingUp, title: "The Rural Poverty Premium", body: "Research by the Countryside Charity and Joseph Rowntree Foundation estimates rural households on low incomes pay 10–20% more than urban equivalents for the same standard of living. This includes: fuel costs (oil, not gas), car running costs (no alternative), higher food prices (no large supermarket nearby), and higher insurance premiums." },
            { icon: AlertTriangle, title: "Hidden Poverty", body: "Rural poverty is less visible — there are no street sleepers in the same way as in cities, and social stigma in small communities means many people do not ask for help until crisis point. David will push for outreach services, warm spaces, and community support that finds people before they reach breaking point." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-5">
              <Icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold font-serif text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </section>

        {/* Support sub-page link */}
        <section className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <Phone className="w-8 h-8 text-rose-700 shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-rose-900 mb-2">Are you struggling right now? This page is for you.</h2>
              <p className="text-sm text-rose-900 leading-relaxed mb-4">
                We've put together a practical guide covering who to contact for debt help, what bailiffs can and cannot legally do, where to get food and emergency essentials in West Suffolk, and who to call if you — or someone you know — might be at risk of homelessness. All services are free. None will judge you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {[
                  { icon: CreditCard, label: "Debt & money help", sub: "Citizens Advice, StepChange, National Debtline, CAP, West Suffolk emergency grants" },
                  { icon: ShieldCheck, label: "Bailiff rights", sub: "What they can and cannot do — and your step-by-step rights when they come to your door" },
                  { icon: Home, label: "Homelessness support", sub: "For you or someone you know — West Suffolk Council, Shelter, Streetlink, and local outreach" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="bg-white border border-rose-200 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-rose-700" />
                      <span className="font-bold text-sm text-rose-900">{label}</span>
                    </div>
                    <p className="text-xs text-rose-800 leading-snug">{sub}</p>
                  </div>
                ))}
              </div>
              <Link href="/policies/poverty-support" className="inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                Open the support guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">What Do You Think?</h2>
          <p className="text-muted-foreground mb-6">These questions are asked with respect. You do not need to identify yourself, and there is no right or wrong answer. We simply want to understand what you've experienced — and what would help most.</p>
          <PolicySurveyBlock surveyTitle="Poverty & Cost of Living Survey — Mildenhall Division" />
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments</h2>
          <div className="space-y-4">
            {[
              { c: "Fund and protect local food bank and warm space provision", d: "Push West Suffolk Council to formally fund and protect food bank infrastructure and warm spaces across the division — recognising these as essential public services, not optional charitable extras." },
              { c: "Provide free debt and benefits advice locally", d: "Campaign for a citizens' advice outreach service based in Mildenhall — so residents can get help with benefits, debt, and financial crisis without needing to travel to Bury St Edmunds." },
              { c: "Oppose further cuts to welfare support", d: "Use the County Council seat to pass motions of opposition to any national policy that cuts welfare support for the most vulnerable — and to lobby MPs to do the same." },
              { c: "Champion the Household Support Fund", d: "Ensure West Suffolk Council maximises its use of the Household Support Fund to provide emergency support for food, fuel, and essentials — and that the fund is actively promoted to those who need it." },
              { c: "Support universal free school meals", d: "Advocate for universal free school meals for all primary-age children in West Suffolk — a low-cost, high-impact intervention that supports health, educational attainment, and family budgets simultaneously." },
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
