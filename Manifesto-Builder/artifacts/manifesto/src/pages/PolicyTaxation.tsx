import { Link } from "wouter";
import { PoundSterling, AlertTriangle, MapPin, TrendingDown, Home, ChevronRight } from "lucide-react";
import { PolicySurveyBlock } from "@/components/PolicySurveyBlock";
import { PageSEO } from "@/components/PageSEO";

const stats = [
  { value: "£2,303", label: "West Suffolk Council Tax Band D 2025/26 — Mildenhall High parish. Up approximately 4.9% from 2024/25, in line with the national average for shire areas." },
  { value: "18.4%", label: "Mildenhall households in fuel poverty vs 11.2% in Bury St Edmunds" },
  { value: "10–20%", label: "Rural premium — what rural households pay more for basic necessities" },
  { value: "£1,649", label: "Suffolk County Council precept within your 2025/26 Band D bill — up approximately 4.99% from 2024/25 (2.99% general + 2% adult social care)" },
];

const comparisons = [
  { area: "Bury St Edmunds (Band D)", detail: "~£2,185 — full police station, leisure centre, multiple GP surgeries, 14 bus routes, FE College, rail link. Evening services. NHS dentists." },
  { area: "Haverhill (Band D)", detail: "~£2,185 — town centre police team, sixth form, regular bus to Cambridge, community hospital services." },
  { area: "Newmarket (Band D)", detail: "~£2,185 — dedicated rural crime team, rail station with services to Cambridge and London, multiple GP practices." },
  { area: "Mildenhall Division (Band D)", detail: "£2,303 (Mildenhall High parish) — no police station, MCA6 sixth form (limited subject range, no FE college), two daytime buses, no NHS dentist. Same price, dramatically fewer services.", highlight: true },
];

export default function PolicyTaxation() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Taxation & Council Tax | David Chandler — Mildenhall Division"
        description="Mildenhall Division residents pay the same or more council tax as urban areas but receive far fewer services. David Chandler's taxation policy for West Suffolk County Council 2026."
        path="/policies/taxation"
      />
      <div className="bg-emerald-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">
            <PoundSterling className="w-4 h-4" aria-hidden="true" />
            Taxation · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Taxation</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            It is not fair that people in the Mildenhall Division pay the same Council Tax as residents in well-served towns while receiving a fraction of the services. Taxation should reflect what you receive — and the most vulnerable should always be protected first.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-emerald-300 mb-1">{s.value}</div>
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
              Council Tax in West Suffolk for a Band D property is <strong className="text-foreground">at least £2,142 per year</strong> before the parish precept — up approximately 4.9% from 2024/25, in line with the national average for shire areas. That sounds the same for everyone — but it is not the same in practice. A resident in Bury St Edmunds pays that rate and gets a police station, a leisure centre, rail links, a large sixth form college, NHS dentists, and regular buses. A resident in Mildenhall pays the same base rate — and then an additional £159.99 parish precept — and gets MCA6 (a developing sixth form with a limited subject range), two daytime bus routes, no police station, and no NHS dentist.
            </p>
            <p>
              This is the <strong className="text-foreground">rural service deficit</strong> — and it is a form of structural unfairness that no political party has honestly confronted. Rural residents are effectively subsidising urban services while going without.
            </p>
            <p>
              On top of this, rural households face a <strong className="text-foreground">"rural premium"</strong> of 10–20% on basic necessities. Without easy access to cheaper supermarkets, with no choice but to own a car, and with higher fuel and heating costs (many rural homes are off the gas grid), the cost of living in Mildenhall is significantly higher than official figures suggest.
            </p>
            <p>
              David's view: those with the broadest shoulders should bear the greatest burden. Large landowners, second-home owners who leave properties empty, and high-value commercial interests should pay their fair share — so that council tax bills for those on low and middle incomes can be reduced, and services can be restored.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">What Do You Get for £1,863?</h2>
          <p className="text-muted-foreground mb-6">The same Band D Council Tax rate — very different service levels.</p>
          <div className="space-y-3">
            {comparisons.map((c) => (
              <div key={c.area} className={`flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl border ${c.highlight ? "border-destructive bg-destructive/5" : "border-border bg-card"}`}>
                <div className="flex items-center gap-2 shrink-0">
                  {c.highlight ? <AlertTriangle className="w-4 h-4 text-destructive" /> : <MapPin className="w-4 h-4 text-primary" />}
                  <strong className={`font-semibold text-sm ${c.highlight ? "text-destructive" : "text-foreground"}`}>{c.area}</strong>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{c.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Sources: West Suffolk Council, Suffolk County Council MTFP, BEIS Fuel Poverty statistics 2022, Countryside Charity (ACRE) Rural Premium Report 2022.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Home, title: "Fuel Poverty", body: "18.4% of Mildenhall households are in fuel poverty — defined as spending more than 10% of income on energy. This compares to 11.2% in Bury St Edmunds. Many rural homes cannot connect to mains gas and rely on heating oil, which is unregulated, volatile in price, and not supported by the same government schemes as gas." },
            { icon: TrendingDown, title: "The Hidden Tax on Being Rural", body: "Research by the Countryside Charity shows rural households spend 10–20% more than urban households on equivalent goods and services. This 'rural penalty' — from transport, fuel, food, insurance — is a real, invisible tax on rural life that is never acknowledged in government statistics." },
            { icon: PoundSterling, title: "Council Tax Reduction", body: "West Suffolk does offer Council Tax Reduction for low-income residents — but the scheme is complex, requires a claim, and leaves some of the most vulnerable people without support they are entitled to. Automatic enrolment for all qualifying households would make an immediate difference." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-5">
              <Icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold font-serif text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </section>

        {/* Sub-page */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">In Depth</h2>
          <Link href="/policies/council-tax"
            className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors group">
            <PoundSterling className="w-8 h-8 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div className="flex-1">
              <div className="font-serif font-bold text-foreground mb-1">Same Price. Fewer Services. — Council Tax Value by Parish</div>
              <div className="text-sm text-muted-foreground leading-snug">How the Band D bill breaks down for Mildenhall, Barton Mills, Worlington, and Freckenham. A service-by-service comparison against Bury St Edmunds, Haverhill, and Newmarket — showing exactly what the same money buys in different parts of West Suffolk.</div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">What Do You Think?</h2>
          <p className="text-muted-foreground mb-6">Whether you own your home, rent, or live in social housing — taxation affects everyone. Tell us what you think is fair.</p>
          <PolicySurveyBlock surveyTitle="Taxation & Public Spending Survey — Mildenhall Division" />
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments</h2>
          <div className="space-y-4">
            {[
              { c: "Demand rural-proofed budgeting from West Suffolk Council", d: "Push for all West Suffolk spending decisions to be assessed for their rural impact — and for a published rural services standard so residents know what they are entitled to." },
              { c: "Automatic Council Tax Reduction enrolment", d: "Work to ensure all households qualifying for Council Tax Reduction are enrolled automatically — no forms, no claims, no one left behind." },
              { c: "Challenge unfair landowner and second-home tax breaks", d: "Advocate for higher council tax on long-term empty properties and second homes in the West Suffolk area, with revenue ring-fenced for rural service restoration." },
              { c: "Transparency on where the money goes", d: "Push West Suffolk Council to publish a clear annual breakdown of where every pound of local council tax is spent by area — including how much is raised in Mildenhall and how much comes back." },
              { c: "Oppose cuts that disproportionately hit rural communities", d: "Use the County Council seat to vote against any cuts to rural bus services, community centres, libraries, or local government services that have already been cut to the bone." },
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
