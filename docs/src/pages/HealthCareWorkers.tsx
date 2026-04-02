import { Link } from "wouter";
import { ArrowLeft, Heart, AlertTriangle, ExternalLink, PoundSterling, Users, TrendingDown, Search, Phone, Shield } from "lucide-react";

// ─── PAY COMPARISON ──────────────────────────────────────────────────────────
const payRows = [
  { role: "Care worker (home care / residential)", suffolk: "£11.20–£12.00", england: "£11.05–£12.20", note: "Many still on or just above the National Living Wage. Travel time often unpaid." },
  { role: "NHS Healthcare Support Worker (Band 2)", suffolk: "£11.45", england: "£11.45", note: "NHS Band 2 starting rate 2024–25. Similar work, significantly more job security and benefits." },
  { role: "NHS Healthcare Support Worker (Band 3)", suffolk: "£12.18–£13.27", england: "£12.18–£13.27", note: "Care workers with equivalent skills in the private sector earn substantially less." },
  { role: "National Living Wage (21+)", suffolk: "£11.44", england: "£11.44", note: "From April 2024. Many care workers earn just above this — the legal floor, not a living wage." },
  { role: "Real Living Wage (recommended)", suffolk: "£13.45", england: "£13.45", note: "Set by the Living Wage Foundation (effective October 2025). Most private and voluntary sector care employers do not pay this." },
  { role: "West Suffolk average wage (all sectors)", suffolk: "~£14.20", england: "~£14.60", note: "Care workers earn approximately 20–25% below the local average wage." },
];

// ─── WORKFORCE DATA ───────────────────────────────────────────────────────────
const workforceRows = [
  { metric: "Care workers in Suffolk (estimated)", local: "~27,000", england: "1.64 million" },
  { metric: "Vacancy rate (adult social care)", local: "~11%", england: "~9.9%" },
  { metric: "Turnover rate (annual)", local: "~32%", england: "~28.3%" },
  { metric: "Proportion on zero-hours contracts", local: "~27%", england: "~24%" },
  { metric: "Proportion who are women", local: "~78%", england: "~79%" },
  { metric: "Proportion from overseas (non-UK born)", local: "~18%", england: "~21%" },
  { metric: "Average age of care worker", local: "~44", england: "~43" },
  { metric: "Proportion working part-time", local: "~42%", england: "~39%" },
];

// ─── UNPAID TRAVEL ────────────────────────────────────────────────────────────
const travelData = [
  { scenario: "Home care worker: 6 visits/day, 10 min between each", unpaidMinutes: "50 min/day", weeklyLoss: "~£10.60/wk", annualLoss: "~£550/yr" },
  { scenario: "Rural home care: 4 visits/day, 20 min between each", unpaidMinutes: "60 min/day", weeklyLoss: "~£13.45/wk", annualLoss: "~£699/yr" },
  { scenario: "Mildenhall area (dispersed geography)", unpaidMinutes: "70–90 min/day (est.)", weeklyLoss: "~£14.70–£18.90/wk", annualLoss: "~£765–£983/yr" },
];

// ─── SUPPORT RESOURCES ───────────────────────────────────────────────────────
const workerResources = [
  { category: "Your Rights at Work", color: "blue", items: [
    { name: "ACAS — Employment Rights", url: "https://www.acas.org.uk", desc: "Free, impartial advice on your employment rights — holiday pay, zero-hours contracts, dismissal, and grievances." },
    { name: "GOV.UK — National Minimum Wage", url: "https://www.gov.uk/national-minimum-wage", desc: "Check your rate, report an underpayment, and understand what counts as working time (including travel)." },
    { name: "Citizens Advice — Work", url: "https://www.citizensadvice.org.uk/work/", desc: "Independent advice on pay, contracts, discrimination, and workplace rights." },
  ]},
  { category: "Trade Unions — Collective Support", color: "green", items: [
    { name: "UNISON — Care Workers", url: "https://www.unison.org.uk/get-help/knowledge/", desc: "The UK's largest care sector union. UNISON can support you with disputes, represent you in disciplinaries, and campaign for better pay." },
    { name: "GMB Union", url: "https://www.gmb.org.uk/workers/care-workers", desc: "Organises care workers in private and voluntary sector — pay campaigns, legal support, and collective bargaining." },
  ]},
  { category: "Mental Health Support for Workers", color: "red", items: [
    { name: "Mind — Work and Mental Health", url: "https://www.mind.org.uk/work", desc: "Advice for managing mental health at work, including what your employer is legally required to provide." },
    { name: "Samaritans", url: "https://www.samaritans.org", desc: "116 123, free, 24/7. Care work is emotionally demanding. If you are struggling, please call." },
    { name: "Suffolk MIND", url: "https://www.suffolkmind.org.uk", desc: "Local mental health support for people in Suffolk — including those in high-stress occupations." },
  ]},
  { category: "Training & Career Development", color: "amber", items: [
    { name: "Skills for Care", url: "https://www.skillsforcare.org.uk", desc: "The workforce development body for adult social care in England. Training resources, apprenticeships, and career pathways." },
    { name: "Health Education England", url: "https://www.hee.nhs.uk", desc: "NHS career routes and development programmes — many care workers move into NHS roles with transferable skills." },
    { name: "The Care Certificate", url: "https://www.skillsforcare.org.uk/Training-Support/The-Care-Certificate/The-Care-Certificate.aspx", desc: "The national induction standard for adult social care — make sure your employer provides this if you are new to care." },
  ]},
  { category: "Overseas Workers", color: "purple", items: [
    { name: "GOV.UK — Health & Care Worker Visa", url: "https://www.gov.uk/health-care-worker-visa", desc: "Visa eligibility, rights, and what to do if your situation changes or your employer is not meeting their obligations." },
    { name: "Migrant Help", url: "https://www.migranthelpuk.org", desc: "Free, confidential advice for migrants in the UK — including workers whose visa is tied to an employer." },
    { name: "CARE International / GLAA", url: "https://www.gla.gov.uk", desc: "Gangmasters and Labour Abuse Authority — report exploitation, labour abuse, or modern slavery in the care sector." },
  ]},
];

const colorBorder: Record<string, string> = {
  blue: "border-blue-200 bg-blue-50",
  green: "border-green-200 bg-green-50",
  red: "border-red-200 bg-red-50",
  amber: "border-amber-200 bg-amber-50",
  purple: "border-purple-200 bg-purple-50",
};
const colorHead: Record<string, string> = {
  blue: "text-blue-900",
  green: "text-green-900",
  red: "text-red-900",
  amber: "text-amber-900",
  purple: "text-purple-900",
};

export default function HealthCareWorkers() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero */}
      <div className="bg-red-900 text-white pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/policies/health" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Health & NHS
          </Link>
          <div className="flex items-center gap-2 text-red-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Heart className="w-4 h-4" />
            Care Workers · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Care Workers — Recognition, Pay & Rights</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            Care workers carry some of the most essential work in our society — getting people up, fed, washed, safe, and connected to the world. They do it for wages that are often barely above the legal floor, without the job security or conditions of NHS staff doing comparable work. That is a structural injustice — and David will name it and fight it.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "~27,000", label: "Care workers in Suffolk — a workforce as large as many industries, almost entirely invisible" },
              { value: "32%", label: "Annual staff turnover in Suffolk adult social care — one in three workers leaves each year" },
              { value: "11%", label: "Vacancy rate in Suffolk care sector — 11 in every 100 care jobs are unfilled right now" },
              { value: "£550+/yr", label: "Lost earnings for a home care worker through unpaid travel time between visits" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-red-300 mb-1">{s.value}</div>
                <div className="text-xs text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* The Structural Problem */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">The Structural Problem — Why Care Work Is Undervalued</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              Care work is predominantly done by women, many from minority ethnic or overseas backgrounds, mostly in low-profile private or voluntary sector organisations. It lacks the public visibility of the NHS, the union density of traditional industries, and the political lobbying power of other professions. The people doing the work are among the least likely to have time or resources to advocate for themselves.
            </p>
            <p>
              Suffolk adult social care has a <strong className="text-foreground">vacancy rate of approximately 11%</strong> — meaning roughly one in every nine care positions is unfilled at any time. When posts go unfilled, existing workers cover more ground, take on more risk, and burn out faster. Turnover runs at <strong className="text-foreground">32% per year</strong> — one in three workers leaves annually. This is not laziness or indifference. It is the rational response to being underpaid, underappreciated, and overextended.
            </p>
            <p>
              In rural areas like the Mildenhall Division, the problem is compounded. Workers travel between isolated properties, often using their own vehicles, often unpaid for that time. A home care worker with six visits across Mildenhall, Worlington, Barton Mills, and Freckenham may spend <strong className="text-foreground">70–90 minutes a day travelling</strong> — time for which they receive little or nothing, because it falls between contracted visits.
            </p>
            <p>
              After Brexit, the care sector lost access to a significant pool of EU workers. The government's Health and Care Worker visa has brought some replacement — but with restrictions, and with employers who do not always meet their obligations, leaving overseas workers in <strong className="text-foreground">precarious positions with limited rights enforcement</strong>.
            </p>
          </div>
        </section>

        {/* Workforce Data */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Suffolk Care Workforce — The Numbers</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Measure</th>
                  <th className="text-center px-4 py-3 font-semibold">Suffolk</th>
                  <th className="text-center px-4 py-3 font-semibold">England</th>
                </tr>
              </thead>
              <tbody>
                {workforceRows.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="px-4 py-3 font-medium text-sm">{row.metric}</td>
                    <td className={`px-4 py-3 text-center font-bold text-sm ${row.local > row.england ? "text-destructive" : "text-primary"}`}>{row.local}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground text-sm">{row.england}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Sources: Skills for Care State of the Adult Social Care Sector 2023; NHS Digital; Suffolk County Council adult social care workforce data.</p>
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900 leading-relaxed">
            <strong>Suffolk's 11% vacancy rate</strong> means roughly <strong>3,000 care posts are unfilled at any given moment</strong>. Those are hours of care not delivered, visits not made, people not supported. It is not an abstract figure — it is an older person waiting longer to be helped out of bed, a person with dementia left alone when they should not be.
          </div>
        </section>

        {/* Pay Comparison */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <PoundSterling className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Pay Comparison — Care Sector vs NHS vs Living Wage</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-4">Hourly pay rates 2024–25. Suffolk care worker rates represent typical ranges across residential and home care settings.</p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Role / benchmark</th>
                  <th className="text-center px-4 py-3 font-semibold">Suffolk</th>
                  <th className="text-center px-4 py-3 font-semibold">England avg</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                {payRows.map((row, i) => {
                  const isCareworker = row.role.startsWith("Care worker");
                  const isNMW = row.role.includes("Living Wage") || row.role.includes("Real Living");
                  return (
                    <tr key={row.role} className={`${i % 2 === 0 ? "bg-background" : "bg-muted/30"} ${isNMW ? "border-t border-border" : ""}`}>
                      <td className={`px-4 py-3 font-medium text-sm ${isCareworker ? "text-destructive font-bold" : ""}`}>{row.role}</td>
                      <td className={`px-4 py-3 text-center font-bold text-sm ${isCareworker ? "text-destructive" : "text-primary"}`}>{row.suffolk}</td>
                      <td className="px-4 py-3 text-center text-muted-foreground text-sm">{row.england}</td>
                      <td className="px-4 py-3 text-xs text-muted-foreground hidden md:table-cell">{row.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-900 leading-relaxed">
            <strong>The pay gap is structural:</strong> A care worker doing broadly equivalent support work to an NHS Healthcare Support Worker Band 2 earns up to <strong>£1–£2/hour less</strong>, has fewer employment rights, is more likely to be on a zero-hours contract, and receives no NHS pension. The work is equally essential. The inequality is entirely a product of how care is commissioned and funded — not of its value.
          </div>
          <p className="text-xs text-muted-foreground mt-2">Sources: NHS Agenda for Change 2024–25; Skills for Care Pay & Benefits survey 2023; Living Wage Foundation 2024.</p>
        </section>

        {/* Unpaid Travel */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="w-6 h-6 text-destructive shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">The Hidden Pay Cut — Unpaid Travel Time</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            Home care workers travel between visits in their own time, using their own vehicles, often receiving only a small mileage payment. This travel time is work — but in most private and voluntary sector care contracts, it is uncontracted and unpaid. In rural areas like the Mildenhall Division, where visits are spread across dispersed villages, the financial impact is significant.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Scenario</th>
                  <th className="text-center px-4 py-3 font-semibold">Unpaid time/day</th>
                  <th className="text-center px-4 py-3 font-semibold">Loss/week</th>
                  <th className="text-center px-4 py-3 font-semibold">Loss/year</th>
                </tr>
              </thead>
              <tbody>
                {travelData.map((row, i) => (
                  <tr key={row.scenario} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="px-4 py-3 text-sm font-medium">{row.scenario}</td>
                    <td className="px-4 py-3 text-center text-sm text-amber-700 font-semibold">{row.unpaidMinutes}</td>
                    <td className="px-4 py-3 text-center text-sm text-destructive font-bold">{row.weeklyLoss}</td>
                    <td className="px-4 py-3 text-center text-sm text-destructive font-bold">{row.annualLoss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Loss figures calculated at National Living Wage of £11.44/hr. Actual loss may vary based on contracted hours and mileage allowance received.</p>
          <div className="mt-4 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed">
              HMRC guidance states that <strong>travel time between work appointments is working time</strong> and must be paid at least at the National Living Wage. Many care workers are unaware of this right. If you are not paid for travel time between visits, you may be legally underpaid. See the GOV.UK link in the support section below.
            </p>
          </div>
        </section>

        {/* Worker Support Resources */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-primary shrink-0" />
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary">Support for Care Workers</h2>
              <p className="text-muted-foreground text-sm">Your rights, your union, your mental health — free resources you can use right now</p>
            </div>
          </div>
          <div className="space-y-8">
            {workerResources.map(({ category, color, items }) => (
              <div key={category}>
                <h3 className={`font-serif font-bold text-sm uppercase tracking-wide mb-3 ${colorHead[color]}`}>{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map(({ name, url, desc }) => (
                    <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                      className={`flex items-start gap-3 border rounded-xl p-4 ${colorBorder[color]} hover:shadow-sm transition-all group`}>
                      <ExternalLink className={`w-4 h-4 shrink-0 mt-0.5 ${colorHead[color]} group-hover:scale-110 transition-transform`} />
                      <div>
                        <div className={`font-bold text-sm ${colorHead[color]} group-hover:underline`}>{name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NHS Services */}
        <section className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-red-900 mb-2">Find NHS Services Near You</h2>
          <p className="text-red-700 text-sm mb-4">For care workers and their families — your health matters too. Many care workers neglect their own health while caring for others.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "🩺", label: "Find a GP", url: "https://www.nhs.uk/service-search/find-a-gp", desc: "Find GP practices near you accepting new patients" },
              { icon: "🦷", label: "Find an NHS Dentist", url: "https://www.nhs.uk/service-search/find-a-dentist", desc: "NHS dental practices — including emergency access" },
              { icon: "💊", label: "Find a Pharmacy", url: "https://www.nhs.uk/service-search/pharmacy/find-a-pharmacy", desc: "Pharmacies near you, including out-of-hours" },
              { icon: "🏥", label: "111 Online", url: "https://111.nhs.uk", desc: "Urgent medical advice without A&E" },
              { icon: "🧠", label: "NHS Mental Health", url: "https://www.nhs.uk/mental-health/", desc: "NHS self-referral and crisis mental health resources" },
              { icon: "📋", label: "Suffolk Carers Matter", url: "https://www.suffolkcarersmatter.org.uk", desc: "Support for unpaid carers in Suffolk — including care workers who are also caring for relatives" },
            ].map(({ icon, label, url, desc }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white border border-red-200 rounded-xl p-3 hover:border-red-400 transition-all group">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <div className="font-semibold text-sm text-red-900 group-hover:underline">{label}</div>
                  <div className="text-xs text-red-700/80 mt-0.5">{desc}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* David's Commitments */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">David's Commitments to Care Workers</h2>
          <div className="space-y-4">
            {[
              { c: "Push for a Real Living Wage across the care sector", d: "Lobby Suffolk County Council to require that all care providers commissioned with public money pay the Real Living Wage (£13.45/hr, from October 2025) — not just the legal minimum. Councils have leverage through commissioning. They should use it." },
              { c: "End unpaid travel time", d: "Support campaigns and regulatory changes that require care employers to pay for all travel time between visits — closing the loophole that costs home care workers hundreds of pounds per year." },
              { c: "Tackle zero-hours contracts in the care sector", d: "Back legislation to give care workers a right to a contract reflecting their regular hours, and push Suffolk County Council's commissioned providers to move away from zero-hours arrangements." },
              { c: "Better protection for overseas care workers", d: "Support stronger enforcement of labour standards for overseas care workers — including the right to change employer without losing visa status — and push for local GLAA inspections of care employers." },
              { c: "Raise care worker status and recognition", d: "Champion a local recognition campaign for care workers in the Mildenhall Division — naming their contribution publicly, supporting local award schemes, and pushing for care to be treated as a skilled profession, not an afterthought." },
              { c: "Mental health support for the care workforce", d: "Push for dedicated occupational health and mental health support for social care workers in Suffolk — equivalent to what NHS staff receive — acknowledging the emotional burden of care work." },
            ].map(({ c, d }) => (
              <div key={c} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">{c}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link href="/policies/health" className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Health & NHS
          </Link>
          <Link href="/policies/care-homes" className="px-5 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl text-sm shadow hover:bg-primary/90 transition-colors">
            ← Care Homes sub-page
          </Link>
          <Link href="/contact" className="px-5 py-2.5 bg-destructive text-white font-bold rounded-xl text-sm shadow hover:bg-destructive/90 transition-colors">
            Contact David
          </Link>
        </div>
      </div>
    </div>
  );
}
