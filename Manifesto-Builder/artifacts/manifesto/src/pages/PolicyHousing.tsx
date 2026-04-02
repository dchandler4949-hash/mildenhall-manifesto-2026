import { Home, AlertTriangle, MapPin, TrendingUp, Users, DollarSign, Building2, ShieldCheck } from "lucide-react";
import { PolicySurveyBlock } from "@/components/PolicySurveyBlock";
import { PageSEO } from "@/components/PageSEO";

const stats = [
  { value: "8.8×", label: "Local house price to earnings ratio — median home £250k vs £28.4k local wages" },
  { value: "1,847", label: "People on the West Suffolk social housing waiting list" },
  { value: "28%", label: "Households in the Mildenhall area privately renting — vs 18% Suffolk average" },
  { value: "42%", label: "Of housing benefit claimants in West Suffolk who are in employment — the working poor" },
];

const comparisons = [
  { area: "Bury St Edmunds", detail: "Median house price £315,000. Average wage £34,200. Ratio: 9.2× — but with A-roads, rail, hospital, and schools within reach." },
  { area: "Ely (Cambs)", detail: "Median house price £340,000 but major employer base, rail to Cambridge and London, better public services justify premium." },
  { area: "Haverhill", detail: "Median house price £240,000. Average local wage closer to Mildenhall's — but larger employer base with better transport links." },
  { area: "Mildenhall Division", detail: "Median house price £250,000. Average wage £28,400 — 8.8× ratio. No rail, limited employment locally, poor services. Houses expensive without the infrastructure to justify it.", highlight: true },
];

const tenureData = [
  { tenure: "Owner-occupied", local: "55%", suffolk: "66%", note: "Significantly below county average — ownership is increasingly out of reach" },
  { tenure: "Private rented", local: "28%", suffolk: "18%", note: "Elevated by U.S. military OHA demand inflating the rental market" },
  { tenure: "Social rented", local: "15%", suffolk: "12%", note: "Higher need but insufficient supply; 1,847 on waiting list" },
  { tenure: "Other", local: "2%", suffolk: "4%", note: "Shared ownership, tied housing, etc." },
];

export default function PolicyHousing() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Housing Policy | David Chandler — Mildenhall Division"
        description="Tackling the housing crisis in Mildenhall. Affordable homes, social housing, and planning reform for West Suffolk. David Chandler's housing policy for the 2026 county council election."
        path="/policies/housing"
      />
      <div className="bg-amber-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Home className="w-4 h-4" aria-hidden="true" />
            Housing · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Housing</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            A secure, warm, affordable home is the foundation of a good life. It affects everything — health, education, relationships, mental wellbeing. Yet for thousands of people in the Mildenhall Division, that foundation has been pulled away. We will fight to get it back — for renters, for families on waiting lists, and for young people who have been priced out of the area they grew up in.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-amber-300 mb-1">{s.value}</div>
                <div className="text-xs text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* The Local Picture */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">The Local Picture</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              The median house price in the Mildenhall area is <strong className="text-foreground">£250,000</strong>. The average local wage is <strong className="text-foreground">£28,400</strong>. That gives a house-price-to-earnings ratio of <strong className="text-foreground">8.8 times annual income</strong> — meaning most working people in our area cannot afford to buy a home without significant inherited wealth or a dual high income.
            </p>
            <p>
              There are <strong className="text-foreground">1,847 people on the West Suffolk housing waiting list</strong>. Only 847 social homes exist in the Mildenhall area — a shortfall that has not been addressed for years. Many families wait five years or more for a suitable social home. In the meantime, they rent privately at rates that consume 40–50% of their income.
            </p>
            <p>
              West Suffolk's Local Plan allocates <strong className="text-foreground">3,840 new homes to the Mildenhall area by 2040</strong>. David supports appropriate development — but insists that new homes must be genuinely affordable, properly planned, and accompanied by real investment in roads, schools, GPs, and green space. Without that, new development is just more pressure on services that are already at breaking point.
            </p>
          </div>
        </section>

        {/* Housing Tenure Breakdown */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Who Lives How — Tenure Breakdown</h2>
          <p className="text-muted-foreground text-sm mb-5">How Mildenhall's housing tenure compares to the Suffolk average (Census 2021, West Suffolk Council Housing Data 2023).</p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Tenure type</th>
                  <th className="text-center px-4 py-3 font-semibold">Mildenhall area</th>
                  <th className="text-center px-4 py-3 font-semibold">Suffolk average</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Context</th>
                </tr>
              </thead>
              <tbody>
                {tenureData.map((row, i) => (
                  <tr key={row.tenure} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="px-4 py-3 font-medium">{row.tenure}</td>
                    <td className={`px-4 py-3 text-center font-bold ${row.tenure === "Private rented" ? "text-destructive" : "text-primary"}`}>{row.local}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{row.suffolk}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Sources: ONS Census 2021, West Suffolk Council Housing Needs Assessment 2023.</p>
        </section>

        {/* U.S. Military Rental Premium — New dedicated section */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-5">
            <DollarSign className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
            <h2 className="text-2xl font-serif font-bold text-blue-900">The U.S. Military Rental Premium</h2>
          </div>
          <div className="space-y-4 text-blue-900/80 text-sm leading-relaxed">
            <p>
              Approximately <strong className="text-blue-900">1,000–1,400 U.S. military households</strong> rent privately in the Mildenhall, Lakenheath, and Brandon area — living "on the local economy" rather than in base accommodation. This is a significant share of the private rental market in a rural area with limited housing stock.
            </p>
            <p>
              U.S. personnel receive <strong className="text-blue-900">Overseas Housing Allowance (OHA)</strong> — a tax-free, rank-dependent housing subsidy paid by the U.S. Department of Defense. 2024 OHA rates for the Mildenhall/Lakenheath area range from approximately:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
              {[
                { rank: "E-5 (Staff Sgt), no dependants", oha: "~$1,987/month", gbp: "~£1,570" },
                { rank: "E-5 (Staff Sgt), with dependants", oha: "~$2,156/month", gbp: "~£1,700" },
                { rank: "E-7 (Sgt First Class), with dependants", oha: "~$2,478/month", gbp: "~£1,955" },
                { rank: "O-3 (Captain), with dependants", oha: "~$2,847/month", gbp: "~£2,245" },
                { rank: "O-5 (Lt Col), with dependants", oha: "~$3,124/month", gbp: "~£2,465" },
                { rank: "Local average private rent (IP28)", oha: "—", gbp: "£900–£1,100", highlight: true },
              ].map(({ rank, oha, gbp, highlight }) => (
                <div key={rank} className={`rounded-lg p-3 text-xs ${highlight ? "bg-amber-100 border border-amber-300" : "bg-white border border-blue-200"}`}>
                  <div className={`font-bold mb-1 ${highlight ? "text-amber-900" : "text-blue-900"}`}>{rank}</div>
                  {oha !== "—" && <div className="text-blue-700">OHA: {oha}</div>}
                  <div className={`font-semibold ${highlight ? "text-amber-800" : "text-blue-800"}`}>GBP equivalent: {gbp}</div>
                </div>
              ))}
            </div>
            <p>
              This creates a <strong className="text-blue-900">structural rent inflation problem</strong>. OHA rates are calculated annually by the DoD based on surveyed local market rents. Landlords — aware that military tenants have guaranteed, above-market housing allowances — price their properties accordingly. This pushes rents up across the entire local market, making homes unaffordable for local workers who have no equivalent allowance.
            </p>
            <p>
              A local worker on the median wage of £28,400/year (£2,367/month gross) can reasonably afford rent of approximately <strong className="text-blue-900">£790/month</strong> (one third of gross income). Yet average private rents in the IP28 area are <strong className="text-blue-900">£900–£1,100/month</strong> — driven in part by OHA demand. The result: local families are being priced out of their own communities by a housing allowance paid by a foreign government.
            </p>
            <p className="text-xs text-blue-700 border-t border-blue-200 pt-3 mt-2">
              Sources: U.S. DFAS OHA Calculator 2024, Rightmove rental data IP28 2024, ONS Annual Survey of Hours and Earnings 2023. OHA figures converted at £1 = $1.27 (2024 average exchange rate).
            </p>
          </div>
        </section>

        {/* Private Renters */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Private Renters — The Hidden Crisis</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              Approximately <strong className="text-foreground">28% of households in the Mildenhall area rent privately</strong> — significantly above the Suffolk average of 18%. This is driven by the combination of high house prices making ownership unaffordable, insufficient social housing supply, and the military-inflated rental market.
            </p>
            <p>
              Private renters in Mildenhall face a market in which landlords hold most of the power. Properties are scarce relative to demand. Rents have risen by an estimated <strong className="text-foreground">18% since 2020</strong> — far outpacing local wage growth of approximately 6% over the same period (ONS). Many tenants are now spending more than 40% of their take-home income on rent alone.
            </p>
            <p>
              The Renters (Reform) Act 2024 abolishes Section 21 no-fault evictions — a long-overdue reform. But enforcement is local and imperfect. Renters in rural areas with limited access to legal advice are often unaware of their rights, or too afraid of eviction to assert them.
            </p>
          </div>
        </section>

        {/* Housing Benefit / Working Poor */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-5">
            <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <h2 className="text-2xl font-serif font-bold text-amber-900">Housing Benefit and the Working Poor</h2>
          </div>
          <div className="space-y-4 text-amber-900/80 text-sm leading-relaxed">
            <p>
              Across West Suffolk, approximately <strong className="text-amber-900">10,000 households</strong> receive Housing Benefit or the housing element of Universal Credit. In the Mildenhall Division specifically, an estimated <strong className="text-amber-900">850–1,100 households</strong> receive housing support.
            </p>
            <p>
              Of those claimants, approximately <strong className="text-amber-900">42% are in employment</strong>. This is not a system abused by people who won't work — this is working people, with jobs, who cannot afford market rents on their wages. Retail workers. Care workers. Agricultural labourers. Cleaners. School support staff. People who form the backbone of our community, subsidising their rent with public money because wages have not kept pace with a housing market distorted by demand they cannot compete with.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
              {[
                { value: "~1,000", label: "Households in the division receiving housing support" },
                { value: "~420", label: "Of those who are in paid employment — the 'working poor'" },
                { value: "£110–£180", label: "Typical weekly housing benefit received (LHA rates, West Suffolk)" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white border border-amber-300 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-amber-800 mb-1">{value}</div>
                  <div className="text-xs text-amber-700">{label}</div>
                </div>
              ))}
            </div>
            <p>
              The Local Housing Allowance (LHA) — which caps what Housing Benefit will cover — has been frozen at 2019 levels for most of the period since 2020. Even after the April 2024 uprating, LHA covers only the bottom 30th percentile of local market rents. The gap between what the benefit pays and what landlords charge must be made up from already-stretched incomes. When it can't be, people fall behind on rent, face eviction, and end up in temporary accommodation — often at far greater cost to the public purse than simply keeping them housed.
            </p>
            <p className="text-xs text-amber-700 border-t border-amber-200 pt-3">
              Sources: DWP Housing Benefit and UC housing element statistics 2024, West Suffolk Council Housing Register 2023, ONS Annual Population Survey, Shelter England 2024.
            </p>
          </div>
        </section>

        {/* Comparisons */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">How We Compare</h2>
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
          <p className="text-xs text-muted-foreground mt-3">Sources: Rightmove/Land Registry 2024, ONS Earnings by Geography 2023, West Suffolk Housing Register 2023, West Suffolk Local Plan 2023.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: TrendingUp, title: "Planning in Developers' Favour", body: "74% of West Suffolk planning appeals in 2022 were decided in the developer's favour. This means communities have little practical power to shape what gets built near them. Speculative development — building expensive homes that don't meet local needs — is consistently approved over community objections." },
            { icon: Users, title: "The Generation Locked Out", body: "Young people who grew up in Mildenhall cannot afford to stay. Unable to buy and priced out of local rentals, they either move away or live with parents well into their 30s. Communities lose their young people; families are stretched; and the social fabric that makes a place a home is eroded generation by generation." },
            { icon: Building2, title: "Renters Without Rights", body: "Private renters in our area face insecurity, poor maintenance, and landlords who have been able to evict with minimal notice. Many renters in Mildenhall have lived in fear of asking for repairs in case it triggered an eviction — a power imbalance the Renters (Reform) Act begins to address, but enforcement must improve." },
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
          <p className="text-muted-foreground mb-6">Housing affects everyone — whether you own, rent, are waiting for social housing, or are sofa-surfing with family. Your experience is valid and your view matters.</p>
          <PolicySurveyBlock surveyTitle="Housing Survey — Mildenhall Division" />
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments</h2>
          <div className="space-y-4">
            {[
              { c: "Require 30% genuinely affordable homes on all new developments", d: "Push West Suffolk Council to enforce a minimum 30% affordable homes requirement, defined as homes priced at no more than 80% of market rate — and ensure this is not watered down by viability assessments." },
              { c: "Address the military rental premium — formally", d: "Raise the OHA rent inflation issue formally with West Suffolk Council, our MP, and the Ministry of Defence — calling for a Housing Market Impact Assessment of U.S. military off-base housing demand, and exploring mitigation such as expanded on-base accommodation to reduce off-base pressure." },
              { c: "Push for more social housing investment", d: "Lobby West Suffolk Council and Homes England to commit to a significant programme of new social housing in the division — prioritising families on the waiting list, disabled residents, and people leaving care." },
              { c: "Restore Local Housing Allowance to market reality", d: "Support campaigns to uprate LHA annually to at least the 30th percentile of actual local rents — so that the safety net for working families and those in need does not erode with every passing year." },
              { c: "Protect renters' rights and ensure enforcement", d: "Support implementation of the Renters (Reform) Act with proper enforcement — including accessible legal advice, proactive inspection of private rental properties, and swift action against landlords who fail to maintain safe housing." },
              { c: "Support community land trusts and self-build", d: "Champion community-led housing models that allow local people to build affordable homes on locally identified land — putting residents in control of how their communities grow." },
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
