import { Plane, AlertTriangle, MapPin, Users, Volume2, Home, DollarSign, TrendingUp } from "lucide-react";
import { PolicySurveyBlock } from "@/components/PolicySurveyBlock";
import { PageSEO } from "@/components/PageSEO";

const stats = [
  { value: "~2,000", label: "UK civilian jobs directly supported by RAF Mildenhall and Lakenheath combined" },
  { value: "1,000–1,400", label: "U.S. military households renting privately on the local economy — driving up rents for everyone" },
  { value: "4,200", label: "Noise complaints registered with West Suffolk Council in 2022 alone" },
  { value: "85 dB", label: "Average peak noise from C-17 and KC-135 aircraft — affecting 3,000+ households" },
];

const timeline = [
  { year: "1941", event: "RAF Mildenhall established by Royal Air Force during World War II" },
  { year: "1950", event: "USAF takes over operations under NATO Status of Forces Agreement (SOFA)" },
  { year: "2013", event: "DoD announces intention to consolidate UK operations to RAF Lakenheath — decision postponed" },
  { year: "2020–present", event: "100th Air Refueling Wing remains active at Mildenhall; 48th Fighter Wing transitions to F-35A at Lakenheath" },
  { year: "2024+", event: "Future of Mildenhall base under ongoing review — community has no formal voice in decisions" },
];

const ohaRates = [
  { rank: "E-4 (Senior Airman), no dependants", usd: "$1,842/mo", gbp: "~£1,450" },
  { rank: "E-5 (Staff Sgt), no dependants", usd: "$1,987/mo", gbp: "~£1,565" },
  { rank: "E-5 (Staff Sgt), with dependants", usd: "$2,156/mo", gbp: "~£1,700" },
  { rank: "E-7 (Sgt First Class), with dependants", usd: "$2,478/mo", gbp: "~£1,953" },
  { rank: "O-3 (Captain), with dependants", usd: "$2,847/mo", gbp: "~£2,244" },
  { rank: "O-5 (Lt Colonel), with dependants", usd: "$3,124/mo", gbp: "~£2,463" },
];

export default function PolicyUSMilitary() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="RAF Mildenhall & US Military | David Chandler — Mildenhall Division"
        description="The impact of RAF Mildenhall and Lakenheath on the local community — housing, noise, jobs, and accountability. David Chandler's position for West Suffolk County Council 2026."
        path="/policies/us-military"
      />
      <div className="bg-primary text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
            <Plane className="w-4 h-4" aria-hidden="true" />
            U.S. Military Presence · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">U.S. Military Presence</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            For over 70 years, the American military has been part of our community's identity. That relationship brings jobs and economic activity — but also noise, congestion, housing pressure, and environmental concerns. Our residents deserve a formal voice in decisions that shape their daily lives, not decisions made in Washington or Whitehall without consultation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-xl md:text-2xl font-bold text-accent mb-1">{s.value}</div>
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
              RAF Mildenhall is home to the <strong className="text-foreground">100th Air Refueling Wing</strong> — a major USAF air refuelling operation — along with Air Force Special Operations Command units. RAF Lakenheath, 5 miles away, hosts the <strong className="text-foreground">48th Fighter Wing</strong>, which is transitioning to F-35A stealth fighters. Together, the bases are among the largest American military installations in Europe.
            </p>
            <p>
              The economic contribution is real: an estimated <strong className="text-foreground">£150–200 million per year</strong> flows into the local economy through wages, contracts, and off-base spending. Thousands of UK civilians work on or supply the bases. For many local businesses, the American military is their primary customer.
            </p>
            <p>
              But the relationship has costs too. <strong className="text-foreground">4,200 noise complaints</strong> were registered with West Suffolk Council in 2022 — and this is likely a fraction of actual disturbance, as many residents have given up complaining. Night flights regularly wake thousands of households. Aircraft noise affects children's learning, sleep quality, and mental health. Yet residents have no formal mechanism to influence flight schedules or noise mitigation.
            </p>
            <p>
              Under the <strong className="text-foreground">Status of Forces Agreement (SOFA)</strong>, the United States military operates in the UK under terms negotiated at the national level. Local councils, county councils, and residents have no direct standing in decisions about base operations, noise, or the base's future. David believes this must change.
            </p>
          </div>
        </section>

        {/* Off-Base Housing — New major section */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-5">
            <Home className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-2xl font-serif font-bold text-blue-900">Off-Base Housing and the Rental Market</h2>
              <p className="text-blue-700 text-sm mt-1">How U.S. military housing policy is pricing local families out of their own communities</p>
            </div>
          </div>

          <div className="space-y-5 text-blue-900/80 text-sm leading-relaxed">
            <p>
              U.S. military policy encourages personnel to live either in on-base accommodation (government quarters) or to rent privately in the surrounding community. At RAF Mildenhall and RAF Lakenheath combined, approximately <strong className="text-blue-900">25–35% of personnel</strong> choose to live off-base — "on the local economy." Given the combined military population of both bases, this translates to an estimated <strong className="text-blue-900">1,000–1,400 U.S. military households</strong> renting privately in the Mildenhall, Brandon, Lakenheath, Newmarket, and surrounding area.
            </p>
            <p>
              This is a substantial proportion of the private rental market in a rural area with limited housing stock. The Mildenhall Division alone has approximately <strong className="text-blue-900">1,200–1,500 private rental properties</strong>. Military households may represent <strong className="text-blue-900">30–40% or more of active private rental demand</strong> in the immediate vicinity of the bases.
            </p>

            {/* OHA Table */}
            <div>
              <h3 className="text-blue-900 font-bold font-serif mb-3">Overseas Housing Allowance (OHA) — 2024 Rates for the Mildenhall/Lakenheath Area</h3>
              <div className="overflow-x-auto rounded-xl border border-blue-200">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-blue-800 text-white">
                      <th className="text-left px-3 py-2.5 font-semibold">Rank / Status</th>
                      <th className="text-center px-3 py-2.5 font-semibold">OHA (USD/month)</th>
                      <th className="text-center px-3 py-2.5 font-semibold">GBP equivalent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ohaRates.map((row, i) => (
                      <tr key={row.rank} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                        <td className="px-3 py-2 text-blue-900">{row.rank}</td>
                        <td className="px-3 py-2 text-center font-semibold text-blue-800">{row.usd}</td>
                        <td className="px-3 py-2 text-center font-bold text-blue-700">{row.gbp}</td>
                      </tr>
                    ))}
                    <tr className="bg-amber-100 border-t-2 border-amber-300">
                      <td className="px-3 py-2 font-bold text-amber-900">Local average private rent — IP28 area</td>
                      <td className="px-3 py-2 text-center text-amber-800">—</td>
                      <td className="px-3 py-2 text-center font-bold text-amber-900">£900–£1,100/mo</td>
                    </tr>
                    <tr className="bg-red-50 border-t border-red-200">
                      <td className="px-3 py-2 font-bold text-red-900">What a local worker on median wage can afford</td>
                      <td className="px-3 py-2 text-center text-red-800">—</td>
                      <td className="px-3 py-2 text-center font-bold text-red-900">~£790/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-blue-600 mt-2">
                Sources: U.S. DFAS OHA Calculator 2024; Rightmove rental data IP28 2024; ONS ASHE 2023. Converted at £1 = $1.27 (2024 average).
              </p>
            </div>

            {/* The Feedback Loop */}
            <div className="bg-white border border-blue-300 rounded-xl p-4">
              <h3 className="font-bold text-blue-900 font-serif mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                The Self-Reinforcing Rent Spiral
              </h3>
              <div className="space-y-2 text-xs text-blue-800">
                {[
                  "1. The DoD surveys local private market rents annually to set OHA rates.",
                  "2. Local landlords — knowing military tenants have guaranteed OHA funding — price properties at or near the OHA ceiling.",
                  "3. The surveyed market rents rise. DoD increases OHA accordingly.",
                  "4. OHA-eligible military tenants can still afford to pay. Local workers cannot keep up.",
                  "5. Private rental stock is increasingly captured by military demand at OHA-inflated prices.",
                  "6. Local families are priced out, pushed into social housing queues or longer commutes.",
                ].map((step) => (
                  <div key={step} className="flex gap-2">
                    <span className="text-blue-400 shrink-0">→</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-blue-700 mt-3 pt-3 border-t border-blue-100">
                This dynamic is documented in academic housing economics literature and has been observed around U.S. military installations in Germany, Japan, South Korea, and the UK. It is not a new phenomenon — but it is one that local government has been reluctant to name publicly for fear of straining relations with the base.
              </p>
            </div>

            {/* Working families affected */}
            <div className="bg-white border border-blue-300 rounded-xl p-4">
              <h3 className="font-bold text-blue-900 font-serif mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Who bears the cost?
              </h3>
              <p className="text-xs text-blue-800 leading-relaxed">
                A local worker on the median Mildenhall wage of £28,400/year (£2,367/month gross) can reasonably afford approximately <strong>£790/month</strong> in rent without exceeding 40% of gross income — the point at which housing becomes unaffordable by standard measures. Yet average private rents in the IP28 area are now <strong>£900–£1,100/month</strong>. The gap — £110–£310/month — must come from food, heating, transport, or debt. Those who cannot meet it turn to Housing Benefit, moving to cheaper areas, or waiting years for social housing.
              </p>
              <p className="text-xs text-blue-800 leading-relaxed mt-2">
                The United States government does not pay OHA to benefit private landlords or harm British communities. It is a welfare measure for its own personnel. But the structural effect on local rental markets is real, measurable, and must be acknowledged and addressed — not suppressed to avoid an awkward conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">A Brief History</h2>
          <div className="space-y-3">
            {timeline.map(({ year, event }) => (
              <div key={year} className="flex gap-4 items-start bg-card border border-border rounded-xl p-4">
                <span className="text-accent font-bold text-sm shrink-0 w-16">{year}</span>
                <p className="text-sm text-muted-foreground leading-snug">{event}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Volume2, title: "Noise and Quality of Life", body: "Peak noise events of 85dB are equivalent to being close to a running lawnmower — for sustained periods during operations. Research consistently links aircraft noise exposure to elevated blood pressure, sleep disruption, and reduced educational attainment in children. Residents living within 1km of flight paths are most severely affected." },
            { icon: AlertTriangle, title: "Economic Dependence and Risk", body: "The 2013 announcement of potential consolidation to Lakenheath — later delayed — showed how vulnerable our local economy is to decisions made in Washington. A closure or significant drawdown could remove hundreds of jobs and millions from the local economy overnight. Diversification is essential risk management, not disloyalty." },
            { icon: Users, title: "Community Relations", body: "The American military community is part of the Mildenhall Division — American families live, shop, and send their children to local schools here. Most interactions are positive. But there are persistent issues around housing market pressure, contractor disputes, and community consultation that a formal liaison mechanism would help resolve." },
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
          <p className="text-muted-foreground mb-6">There is no politically correct answer here. Whether you value the base enormously, find the noise unbearable, or have mixed feelings — tell us honestly.</p>
          <PolicySurveyBlock surveyTitle="U.S. Military Presence Survey — Mildenhall Division" />
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments</h2>
          <div className="space-y-4">
            {[
              { c: "Establish a formal community liaison committee", d: "Work with MPs, West Suffolk Council, and the USAF base commanders to establish a statutory community liaison committee — giving residents a formal, regular forum to raise noise, traffic, housing, and environmental concerns and receive genuine responses." },
              { c: "Commission a Housing Market Impact Assessment", d: "Push for an independent assessment of the effect of off-base U.S. military housing demand — including OHA-driven rent inflation — on private rental prices and affordability for local residents. The findings should be shared publicly and inform negotiation with MoD and the U.S. authorities." },
              { c: "Advocate for expanded on-base accommodation", d: "Work with the base command, MoD, and our MP to explore whether expanded on-base housing provision could reduce the number of military households competing with local families in the private rental market — relieving upward pressure on rents." },
              { c: "Push for a night-flight noise reduction agreement", d: "Advocate for a written protocol between West Suffolk Council and USAF establishing maximum frequencies for night operations, noise monitoring, and community notification of planned exercises." },
              { c: "Demand compensation for noise-affected households", d: "Noise insulation grants and other compensation measures for residents most severely affected by aircraft operations — as have been established near Heathrow and other major airports." },
              { c: "Diversify the local economy as insurance", d: "Work proactively to attract other employers and industries to the division, so that the local economy is resilient to any future changes in the US military footprint." },
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
