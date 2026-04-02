import { Link } from "wouter";
import { Shield, AlertTriangle, MapPin, Clock, Users, TrendingDown, Building2, PoundSterling, UserCheck, HelpCircle, BarChart2, Heart } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { PolicySurveyBlock } from "@/components/PolicySurveyBlock";

const stats = [
  { value: "0", label: "Dedicated police stations in Mildenhall — the last closed in 2013" },
  { value: "3", label: "PCSOs covering the entire Mildenhall Division (18,000+ residents)" },
  { value: "14.2 min", label: "Average 999 response time in rural Suffolk vs 7.8 min in urban areas" },
  { value: "+23%", label: "Rise in rural crime in West Suffolk since 2020" },
];

const comparisons = [
  { area: "Bury St Edmunds", detail: "Full police station, 12+ dedicated officers, town centre CCTV team, dedicated community policing team." },
  { area: "Newmarket", detail: "Police presence boosted by dedicated rural and heritage crime team. Regular high-visibility patrols." },
  { area: "Haverhill", detail: "Dedicated neighbourhood policing team, CCTV network, regular community meetings." },
  { area: "Mildenhall Division", detail: "No police station since 2013. Three PCSOs for 18,000+ residents across four parishes. Average 14-minute emergency response time in rural areas.", highlight: true },
];

const workforceRows = [
  { category: "Warranted police officers (total)", count: "1,827", note: "All ranks from constable to chief constable; 72% in frontline roles" },
  { category: "Frontline officers (response, patrol, CID, roads)", count: "~1,315", note: "Direct public-facing duties — the officers who attend incidents" },
  { category: "Back-office / specialist support officers", count: "~512", note: "Professional standards, training, force intelligence, HQ functions" },
  { category: "Police staff (civilian employees)", count: "1,049", note: "Custody detention officers, analysts, control room, HR, finance, legal" },
  { category: "Police Community Support Officers (PCSOs)", count: "293", note: "Neighbourhood visibility — limited powers, cannot make arrests" },
  { category: "Special Constables (volunteers)", count: "156", note: "Part-time warranted officers; numbers have fallen sharply since 2015" },
  { category: "Total workforce (excl. specials)", count: "~3,325", note: "One of the smallest forces by population ratio in England" },
];

const budgetRows = [
  { source: "Home Office core grant", amount: "£132m", pct: "62%", note: "Central government allocation, set by the Funding Settlement" },
  { source: "Police precept (Council Tax)", amount: "£82m", pct: "38%", note: "Suffolk households pay ~£249/year (Band D) for policing" },
  { source: "Other income / grants", amount: "£4m", pct: "2%", note: "Partnerships, Home Office grants, recharges" },
  { source: "Total budget 2023–24", amount: "~£218m", pct: "100%", note: "A force serving ~760,000 Suffolk residents" },
];

export default function PolicyPolicing() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Policing Policy | David Chandler — Mildenhall Division"
        description="No police station in Mildenhall since 2015. David Chandler's policing policy for West Suffolk County Council 2026 — rural crime, community safety, and accountability."
        path="/policies/policing"
      />
      <div className="bg-slate-800 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Shield className="w-4 h-4" aria-hidden="true" />
            Policing & Safety · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Policing & Safety</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            Feeling safe in your own home and community is not a luxury — it is a basic right. Rural communities should not be treated as an afterthought by police services. Every resident deserves to be heard, protected, and supported — and that requires real resources where people actually live.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">{s.value}</div>
                <div className="text-xs text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Crime data sub-page callout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/policies/crime-data">
            <div className="flex items-start gap-4 bg-rose-50 border-2 border-rose-200 rounded-xl p-5 cursor-pointer hover:border-rose-400 transition-colors group">
              <Heart className="w-7 h-7 text-rose-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-rose-900 mb-1 text-sm">Victim Support &amp; Crisis Help</h3>
                <p className="text-rose-700 text-xs leading-relaxed">Free helplines, local support services, and crisis contacts — including for people struggling alone. You don't have to report to police to get help.</p>
                <span className="text-rose-600 font-semibold text-xs mt-2 inline-block underline">View support resources →</span>
              </div>
            </div>
          </Link>
          <Link href="/policies/crime-data">
            <div className="flex items-start gap-4 bg-slate-50 border-2 border-slate-200 rounded-xl p-5 cursor-pointer hover:border-primary transition-colors group">
              <BarChart2 className="w-7 h-7 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-1 text-sm">Crime Data — Suffolk, Mildenhall &amp; Each Parish</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">Top 10 crime types with parish-by-parish comparison, how we compare to the UK and Suffolk average, and how to report a crime.</p>
                <span className="text-primary font-semibold text-xs mt-2 inline-block underline">View crime statistics →</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Local Picture */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">The Local Picture</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              Since Mildenhall police station closed in 2013, our area has had no dedicated police base. The entire Mildenhall Division — covering over <strong className="text-foreground">18,000 residents across four parishes</strong> — is served by just <strong className="text-foreground">three Police Community Support Officers (PCSOs)</strong>.
            </p>
            <p>
              Suffolk has one of the <strong className="text-foreground">lowest police-to-population ratios in England</strong>: approximately 1 warranted officer per 416 residents (March 2023, Home Office), against a national average of 1 per 384. In rural areas like ours, practical coverage is far thinner than even that low figure suggests — PCSOs are spread across multiple parishes, and emergency responses come from officers based miles away.
            </p>
            <p>
              Rural crime in West Suffolk has risen by <strong className="text-foreground">23% since 2020</strong>, driven by organised agricultural theft, fuel theft, and opportunistic burglary. Yet resources have not followed the rise in demand. Many residents feel — with good reason — that reporting rural crime leads nowhere.
            </p>
            <p>
              David also recognises that policing affects communities differently. <strong className="text-foreground">People from minority ethnic backgrounds, those with mental health conditions, and young people</strong> often experience policing as hostile rather than protective. A better-resourced, community-embedded police service must also be a fairer one.
            </p>
          </div>
        </section>

        {/* Suffolk Police Workforce Breakdown */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Suffolk Police Workforce — Who Does What</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5">
            Suffolk Police workforce as at March 2023 (Home Office Police Workforce Statistics, England & Wales 2023).
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Staff category</th>
                  <th className="text-center px-4 py-3 font-semibold">Number</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Context</th>
                </tr>
              </thead>
              <tbody>
                {workforceRows.map((row, i) => (
                  <tr key={row.category} className={`${i % 2 === 0 ? "bg-background" : "bg-muted/30"} ${row.category.startsWith("Total") ? "border-t-2 border-slate-300 font-bold" : ""}`}>
                    <td className={`px-4 py-3 ${row.category.startsWith("Frontline") ? "text-primary font-semibold" : row.category.startsWith("Back") ? "text-slate-600" : ""}`}>
                      {row.category}
                    </td>
                    <td className={`px-4 py-3 text-center font-bold ${row.category.startsWith("Frontline") ? "text-primary" : row.category.startsWith("Total") ? "text-slate-800" : "text-muted-foreground"}`}>
                      {row.count}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900 leading-relaxed">
            <strong>What these numbers mean locally:</strong> With 1,315 frontline officers covering all of Suffolk (760,000 residents), the Mildenhall Division's proportionate share works out to approximately <strong>30–35 officers</strong> theoretically covering our area — but shift patterns, leave, training, and geography mean the practical number on duty at any given time is a fraction of that. Three PCSOs with limited powers is the visible daily reality.
          </div>
          <p className="text-xs text-muted-foreground mt-2">Source: Home Office Police Workforce, England and Wales bulletin, March 2023.</p>
        </section>

        {/* Suffolk Police Budget */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <PoundSterling className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Suffolk Police Budget 2023–24 — Where the Money Comes From</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Funding source</th>
                  <th className="text-center px-4 py-3 font-semibold">Amount</th>
                  <th className="text-center px-4 py-3 font-semibold">Share</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((row, i) => (
                  <tr key={row.source} className={`${i % 2 === 0 ? "bg-background" : "bg-muted/30"} ${row.source.startsWith("Total") ? "border-t-2 border-slate-300 font-bold" : ""}`}>
                    <td className="px-4 py-3 font-medium">{row.source}</td>
                    <td className="px-4 py-3 text-center font-bold text-primary">{row.amount}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{row.pct}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Of the £218m total, approximately <strong className="text-foreground">77–80% goes on pay and employment costs</strong> — officers, staff, and PCSOs. Capital investment in vehicles, technology, and buildings accounts for a further 8–10%. The remaining budget covers operational costs, custody, and administration. There is no fat here — the funding is tight, meaning every pound diverted to non-operational costs is a pound not on the street.
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Sources: Suffolk PCC Police and Crime Plan 2022–25, Home Office Police Funding Settlement 2023–24, Suffolk Police Statement of Accounts 2022–23.</p>
        </section>

        {/* PCC Abolition / Reinvestment */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-5">
            <TrendingDown className="w-6 h-6 text-slate-700 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">Should the Police and Crime Commissioner be Abolished?</h2>
              <p className="text-slate-600 text-sm mt-1">What reinvesting the Office costs in frontline policing could mean</p>
            </div>
          </div>
          <div className="space-y-4 text-slate-800 text-sm leading-relaxed">
            <p>
              The role of <strong>Police and Crime Commissioner (PCC)</strong> was created in 2012 to replace police authorities with an elected individual accountable to voters. Suffolk's PCC is Tim Passmore (Conservative), re-elected in 2021. The Labour government is currently reviewing the PCC model with a view to reform or abolition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
              {[
                { value: "£85,680", label: "Annual salary of the Suffolk PCC (published transparency data)" },
                { value: "~£1.8m", label: "Estimated total annual cost of the Suffolk OPCC (salary, staff, office, operations)" },
                { value: "~25–28", label: "Additional warranted police officers that cost could fund at ~£65–70k per officer per year" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white border border-slate-300 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-slate-800 mb-1">{value}</div>
                  <div className="text-xs text-slate-600">{label}</div>
                </div>
              ))}
            </div>
            <p>
              The Office of the Police and Crime Commissioner (OPCC) employs a small team: policy advisors, a communications officer, business support staff, and sometimes a Deputy PCC. Total staff and premises costs, on top of the £85,680 PCC salary, bring the annual cost of the OPCC function to an estimated <strong>£1.5–1.8 million</strong> per year (based on published Suffolk OPCC accounts and comparable forces).
            </p>
            <p>
              If the PCC role were abolished and those resources redirected to frontline policing, the arithmetic is stark: at a full-cost (salary, employer NI, pension, equipment) of approximately <strong>£65,000–70,000 per warranted officer</strong>, £1.8 million would fund <strong>25–28 additional police officers</strong>. Alternatively, at approximately <strong>£32,000–35,000 per PCSO</strong>, it could fund over <strong>50 additional PCSOs</strong> — more than doubling the current PCSO establishment.
            </p>
            <p>
              Alternatively, governance functions could be returned to a reformed <strong>Police and Crime Panel</strong> of elected councillors — at a fraction of the cost of a standalone PCC office. The oversight function would be preserved; the overhead would not.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>David's position:</strong> David supports abolition of the PCC role in its current form and reinvestment of the full OPCC budget in frontline officers and PCSOs for rural and underserved communities. He does not support the PCC role being replaced by an unaccountable Mayor figure. Governance of policing should be returned to elected councillors with transparent public scrutiny — not concentrated in one politically appointed individual.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">Sources: Suffolk OPCC Published Accounts 2022–23, Home Office PCC salary data, HMICFRS workforce cost benchmarks.</p>
        </section>

        {/* Mildenhall Hub — Police Presence */}
        <section className="bg-amber-50 border border-amber-300 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-4">
            <HelpCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-serif font-bold text-amber-900">The Mildenhall Hub — Police Presence, Not a Police Station</h2>
              <p className="text-amber-700 text-sm mt-0.5">Important distinction — currently being verified</p>
            </div>
          </div>
          <div className="space-y-3 text-amber-900/80 text-sm leading-relaxed">
            <p>
              The <strong className="text-amber-900">Mildenhall Hub</strong> (1 King Street, Mildenhall) is a shared public services facility housing various council, health, and community services. Suffolk Police are understood to use space within the Hub — likely as a <strong className="text-amber-900">PCSO base or officer touchdown point</strong> — but this is not a police station in any conventional sense.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="font-bold text-red-900 text-xs uppercase tracking-wide mb-2">A police station provides:</h3>
                <ul className="space-y-1 text-xs text-red-800">
                  <li>✗ 24/7 public enquiry counter</li>
                  <li>✗ Custody suite for detainees</li>
                  <li>✗ Dedicated charge rooms and interview facilities</li>
                  <li>✗ Permanent, visible police presence</li>
                  <li>✗ In-person crime reporting at any hour</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-900 text-xs uppercase tracking-wide mb-2">A holding/touchdown office provides:</h3>
                <ul className="space-y-1 text-xs text-green-800">
                  <li>✓ Desk space for officers/PCSOs when in the area</li>
                  <li>✓ IT access and report-writing facilities</li>
                  <li>✓ Possible community meeting room</li>
                  <li>✗ Not staffed 24/7 or necessarily open to the public</li>
                  <li>✗ Not a point where residents can walk in and report crime</li>
                </ul>
              </div>
            </div>
            <div className="bg-white border border-amber-300 rounded-xl p-4 mt-2">
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>⚠ Under verification:</strong> The exact nature of the police presence at the Mildenhall Hub — whether it is a regular hot-desk arrangement, a formally designated community safety office, or simply occasional officer use — is being confirmed directly with Suffolk Police and West Suffolk Council. This page will be updated when that is established. Whatever the status, it is <strong>not a replacement for the dedicated police station</strong> that served this community before 2013.
              </p>
            </div>
            <p>
              David's position is clear: if the Hub has a room used by police, that is welcome — but it is not sufficient. A community of 18,000+ people deserves a <strong className="text-amber-900">properly resourced, staffed community policing base</strong> — one that residents can walk into, report crime at, and engage with their local officers. That is what was taken away in 2013. That is what should be restored.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">How We Compare</h2>
          <div className="space-y-3">
            {comparisons.map((c) => (
              <div key={c.area} className={`flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl border ${c.highlight ? "border-destructive bg-destructive/5" : "border-border bg-card"}`}>
                <div className="flex items-center gap-2 shrink-0">
                  {c.highlight ? <AlertTriangle className="w-4 h-4 text-destructive" /> : <MapPin className="w-4 h-4 text-primary" />}
                  <strong className={`font-semibold ${c.highlight ? "text-destructive" : "text-foreground"}`}>{c.area}</strong>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{c.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Sources: Suffolk Police Annual Report 2023, Home Office Police Workforce data, West Suffolk Council community safety figures.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Clock, title: "Response Time Inequality", body: "A 14.2-minute average emergency response time in rural Suffolk compared to 7.8 minutes in urban areas. That gap can be the difference between life and death — or between catching a burglar and never seeing your property again. It reflects an underfunded, understaffed rural policing model." },
            { icon: Users, title: "Mental Health and Policing", body: "Suffolk Police respond to thousands of mental health crisis calls each year — work that should be led by NHS mental health teams, not officers. Suffolk's Street Triage scheme pairs officers with mental health nurses for some calls, but coverage is limited. Better crisis care reduces pressure on policing and leads to far better outcomes." },
            { icon: Shield, title: "Farm and Rural Crime", body: "Agricultural theft costs West Suffolk farmers an estimated £2–4m per year in stolen equipment, livestock, and fuel. The Rural Crime Team is chronically underfunded and thinly spread. Many farmers report incidents knowing nothing will come of it — so many simply stop reporting." },
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
          <p className="text-muted-foreground mb-6">Safety means different things to different people. We want to hear from everyone — whether you've experienced crime, feel unsafe walking at night, worry about your children, or have concerns about policing itself.</p>
          <PolicySurveyBlock surveyTitle="Policing & Safety Survey — Mildenhall Division" />
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments</h2>
          <div className="space-y-4">
            {[
              { c: "Demand a properly staffed community policing base for Mildenhall", d: "Push the Police and Crime Commissioner and Suffolk Police leadership to restore a physical, permanently staffed community policing base — not a hot-desk in a shared building, but a genuine police presence that residents can walk into. Clarify the true status of the Mildenhall Hub police facility." },
              { c: "Support abolition of the PCC and full reinvestment in frontline officers", d: "Back Labour's review of the PCC model and push for the full OPCC budget — estimated at £1.5–1.8 million annually — to be reinvested directly in 25–28 additional warranted officers or 50+ PCSOs deployed to rural areas, not in further layers of management or administration." },
              { c: "More named PCSOs for every parish", d: "Press Suffolk Police to increase PCSO numbers for the Mildenhall area, with named officers for each parish who build long-term relationships with the community — attending parish council meetings, walking the streets, and knowing people by name." },
              { c: "Improve rural crime reporting and response", d: "Work with local farmers, businesses, and the Rural Crime Team to establish a dedicated reporting mechanism, a faster response protocol for agricultural theft, and investment in CCTV at key rural locations." },
              { c: "Support a mental health first response model", d: "Champion expansion of Suffolk's Street Triage scheme so that mental health clinicians co-respond to more crisis calls across the county — reducing criminalisation, improving outcomes, and freeing up officers for crime investigation." },
              { c: "Ensure policing is fair, transparent, and accountable", d: "Support stronger community oversight — regular public meetings with senior officers, independent scrutiny of stop and search data, and accessible reporting mechanisms for anyone who feels they have been treated unfairly." },
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
