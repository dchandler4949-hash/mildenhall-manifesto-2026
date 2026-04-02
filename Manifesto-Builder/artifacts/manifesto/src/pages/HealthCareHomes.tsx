import { Fragment } from "react";
import { Link } from "wouter";
import { ArrowLeft, Home, AlertTriangle, ExternalLink, PoundSterling, MapPin, Star, Search, Users, Info } from "lucide-react";

// ─── COST COMPARISON DATA ────────────────────────────────────────────────────
const costRows = [
  {
    category: "Residential care (personal care only)",
    mildenhall: "£1,050–£1,150", suffolk: "£950–£1,050", england: "£870–£950",
    council: "~£810–£850",
    gap: "£200–£300/wk",
    note: "Rural West Suffolk premium reflects staffing costs, travel, and building costs in areas without transport links.",
  },
  {
    category: "Nursing care (qualified nurse on site)",
    mildenhall: "£1,200–£1,400", suffolk: "£1,100–£1,250", england: "£1,050–£1,200",
    council: "~£950–£1,050",
    gap: "£200–£350/wk",
    note: "NHS Funded Nursing Care (FNC) contributes £235.88/week toward the nursing element — but only where formally assessed as eligible.",
  },
  {
    category: "Dementia specialist care",
    mildenhall: "£1,250–£1,500+", suffolk: "£1,150–£1,400", england: "£1,100–£1,350",
    council: "~£980–£1,100",
    gap: "£200–£400/wk",
    note: "Specialist dementia care commands a significant premium. The shortage of dementia beds in West Suffolk means families often have to place relatives far from home.",
  },
];

// ─── MEANS TEST THRESHOLDS ───────────────────────────────────────────────────
const thresholdRows = [
  { band: "Below £14,250 in capital assets", support: "Council pays all assessed care costs (you contribute from income)", who: "~15% of care home entrants" },
  { band: "£14,250 to £23,250 in capital", support: "Sliding scale — 'tariff income' reduces council contribution £1 for every £250 above £14,250", who: "~10% of entrants" },
  { band: "Above £23,250 in capital (incl. home value)", support: "Fully self-funded — you pay 100% of costs until capital falls below £23,250", who: "~75% of entrants" },
  { band: "NHS Continuing Healthcare (CHC)", support: "Fully funded by NHS — no means test — for those with a 'primary health need'. Eligibility is frequently disputed.", who: "~5–8% of entrants nationally" },
];

// ─── LOCAL CARE HOMES ────────────────────────────────────────────────────────
const localHomes = [
  { name: "Mildenhall Lodge Care Home", location: "Mildenhall", type: "Residential & Nursing", cqc: "Good", beds: "~60", note: "One of the largest in the Division. Accepts LA-funded and self-funded residents." },
  { name: "Brandon Court Care Centre", location: "Brandon (4 miles)", type: "Residential", cqc: "Requires Improvement", beds: "~40", note: "Nearest alternative for those unable to access Mildenhall Lodge. CQC rating raised concerns at last inspection." },
  { name: "Ashill House", location: "Bury St Edmunds (12 miles)", type: "Dementia specialist", cqc: "Good", beds: "~35", note: "Specialist dementia care — 12-mile journey from Mildenhall means families struggle to visit." },
  { name: "Springfield Care Home", location: "Newmarket (9 miles)", type: "Nursing", cqc: "Outstanding", beds: "~55", note: "Outstanding CQC rating but 9 miles away and typically self-funder-focused pricing." },
];

// ─── DEMOGRAPHIC DATA ────────────────────────────────────────────────────────
const demographicRows = [
  { metric: "Population aged 65+ (Mildenhall area)", local: "21.4%", suffolk: "20.1%", england: "18.6%" },
  { metric: "Population aged 85+ (most likely to need care)", local: "3.1%", suffolk: "2.8%", england: "2.4%" },
  { metric: "Unpaid carers as % of population", local: "~13%", suffolk: "11.2%", england: "10.7%" },
  { metric: "Adults with dementia (estimated rate)", local: "~800", suffolk: "~11,500", england: "900,000+" },
  { metric: "Residential care beds per 1,000 over-65s", local: "~28", suffolk: "~31", england: "~42" },
];

// ─── NHS LINKS ────────────────────────────────────────────────────────────────
const nhsLinks = [
  { label: "Find a care home (NHS)", url: "https://www.nhs.uk/conditions/social-care-and-support-guide/care-services-equipment-and-care-homes/care-homes/", desc: "NHS guide to types of care homes and what to look for" },
  { label: "CQC care home ratings", url: "https://www.cqc.org.uk/care-services/map", desc: "Check the Care Quality Commission inspection rating for any care home in England" },
  { label: "NHS Continuing Healthcare", url: "https://www.nhs.uk/conditions/social-care-and-support-guide/money-work-and-benefits/nhs-continuing-healthcare/", desc: "Free NHS-funded care if you have a primary health need — check eligibility" },
  { label: "Suffolk County Council — Adult Care", url: "https://www.suffolk.gov.uk/adults/", desc: "Request a care needs assessment, find local services, or get help with funding" },
  { label: "Age UK — Care Home Guide", url: "https://www.ageuk.org.uk/information-advice/care/finding-care/care-homes/", desc: "Clear guide to choosing, paying for, and moving into a care home" },
  { label: "Citizens Advice — Paying for Care", url: "https://www.citizensadvice.org.uk/health/social-care/", desc: "Independent advice on means testing, savings thresholds, and your rights" },
  { label: "Carers UK", url: "https://www.carersuk.org", desc: "Support for unpaid carers — financial help, respite, and peer support networks" },
  { label: "Which? Elderly Care", url: "https://www.which.co.uk/reviews/care-homes", desc: "Independent reviews and search tool for care homes across England" },
];

function CqcBadge({ rating }: { rating: string }) {
  const colors: Record<string, string> = {
    "Outstanding": "bg-green-100 text-green-800 border-green-300",
    "Good": "bg-blue-100 text-blue-800 border-blue-300",
    "Requires Improvement": "bg-amber-100 text-amber-800 border-amber-300",
    "Inadequate": "bg-red-100 text-red-800 border-red-300",
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs font-semibold ${colors[rating] || "bg-muted text-muted-foreground"}`}>
      <Star className="w-3 h-3" /> {rating}
    </span>
  );
}

export default function HealthCareHomes() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero */}
      <div className="bg-red-900 text-white pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/policies/health" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Health & NHS
          </Link>
          <div className="flex items-center gap-2 text-red-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Home className="w-4 h-4" />
            Care Homes · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Care Homes &amp; Residential Care</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            Every person deserves to be cared for with dignity when they need it most. But in West Suffolk, where you live — and what you have — determines whether you can afford that care. We are exposing the inequality in care home costs, access, and funding that no one in power is talking about loudly enough.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "£1,100/wk", label: "Average care home cost in West Suffolk — above the national average of £910/week" },
              { value: "£23,250", label: "Capital threshold to qualify for council support — unchanged since 2010, should be ~£50k today" },
              { value: "£200–£350", label: "Weekly gap between council funding rate and actual cost — borne by self-funders" },
              { value: "21.4%", label: "Of the Mildenhall area population aged 65+ — higher than the Suffolk and England average" },
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

        {/* The Inequality */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">The Inequality Behind the Numbers</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              In England, approximately <strong className="text-foreground">75% of people who enter a care home have capital assets above £23,250</strong> and are classed as self-funders — meaning they pay 100% of the cost until they've spent down their assets. At £1,100 per week, a two-year stay costs over <strong className="text-foreground">£114,000</strong>. For most people, that means selling the family home.
            </p>
            <p>
              West Suffolk care home costs are <strong className="text-foreground">above both the Suffolk average and the national average</strong>. Rural areas face a "care premium" — higher staffing costs, isolation, difficulty recruiting, and buildings that are expensive to maintain. Yet Suffolk County Council's "fair cost of care" rate — what they actually pay for a council-funded resident — hasn't kept pace. The gap between what the council pays and what care genuinely costs is met by <strong className="text-foreground">self-funders paying more to cross-subsidise council placements</strong>.
            </p>
            <p>
              The £23,250 capital threshold was set in 2010. If it had kept pace with house price inflation, it would be approximately <strong className="text-foreground">£50,000 today</strong>. If it had risen with earnings, it would be higher still. The government promised a lifetime care cap of £86,000 under the Dilnot reforms — then scrapped it in 2022. As of 2026, nothing has replaced it.
            </p>
            <p>
              The Mildenhall area has a disproportionately <strong className="text-foreground">older population</strong> — 21.4% aged 65+, against 18.6% nationally — and fewer care home beds per head than the England average. Families who need a care home for a relative sometimes cannot find one locally, forcing placements in Brandon, Bury St Edmunds, or further — away from family, community, and familiarity.
            </p>
          </div>
        </section>

        {/* Demographic Comparison */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Who Needs Care — Demographics Compared</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Measure</th>
                  <th className="text-center px-4 py-3 font-semibold">Mildenhall area</th>
                  <th className="text-center px-4 py-3 font-semibold">Suffolk</th>
                  <th className="text-center px-4 py-3 font-semibold">England</th>
                </tr>
              </thead>
              <tbody>
                {demographicRows.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="px-4 py-3 font-medium text-sm">{row.metric}</td>
                    <td className="px-4 py-3 text-center font-bold text-destructive text-sm">{row.local}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground text-sm">{row.suffolk}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground text-sm">{row.england}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Sources: ONS Census 2021, Alzheimer's Society, Suffolk County Council Adult Social Care data, NHS Digital.</p>
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900 leading-relaxed">
            <strong>What this means:</strong> The Mildenhall Division has an older-than-average population, more unpaid carers per head, fewer care home beds per head, and higher care costs than the national average. That combination creates a specific, compounding inequality that is invisible in national policy — because national policy is designed for urban averages, not rural realities.
          </div>
        </section>

        {/* Cost Comparison Table */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <PoundSterling className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Care Home Costs — Local vs Suffolk vs National</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5">Weekly cost ranges as at 2024–25. Actual costs vary by home, room, and care needs. Suffolk County Council "fair cost of care" is the rate at which the council funds a placement — not what homes actually charge.</p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Care type</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">West Suffolk<br />(local area)</th>
                  <th className="text-center px-4 py-3 font-semibold">Suffolk avg</th>
                  <th className="text-center px-4 py-3 font-semibold">England avg</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Council<br />funding rate</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Self-funder<br />gap/wk</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <Fragment key={row.category}>
                    <tr className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="px-4 py-2.5 font-semibold text-xs">{row.category}</td>
                      <td className="px-4 py-2.5 text-center font-bold text-destructive text-xs">{row.mildenhall}</td>
                      <td className="px-4 py-2.5 text-center text-muted-foreground text-xs">{row.suffolk}</td>
                      <td className="px-4 py-2.5 text-center text-muted-foreground text-xs">{row.england}</td>
                      <td className="px-4 py-2.5 text-center text-amber-700 font-semibold text-xs">{row.council}</td>
                      <td className="px-4 py-2.5 text-center text-destructive font-bold text-xs">{row.gap}</td>
                    </tr>
                    <tr className={`${i % 2 === 0 ? "bg-background" : "bg-muted/20"} border-b border-border`}>
                      <td colSpan={6} className="px-4 pb-3 text-xs text-muted-foreground italic">{row.note}</td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Sources: LaingBuisson Care Homes for Older People report 2024; Suffolk County Council Fair Cost of Care exercise 2023; NHS FNC rate 2024–25.</p>
        </section>

        {/* Means Testing */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Who Gets Help — The Means Test Explained</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5">
            Before Suffolk County Council will fund your care, they assess your capital (savings, property) and income. Your home is included in the assessment if you are the sole resident and no partner or carer lives there.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Capital band</th>
                  <th className="text-left px-4 py-3 font-semibold">What happens</th>
                  <th className="text-center px-4 py-3 font-semibold">Approx % of entrants</th>
                </tr>
              </thead>
              <tbody>
                {thresholdRows.map((row, i) => (
                  <tr key={row.band} className={`${i % 2 === 0 ? "bg-background" : "bg-muted/30"} ${row.band.includes("Continuing") ? "border-t-2 border-primary" : ""}`}>
                    <td className="px-4 py-3 font-semibold text-xs">{row.band}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.support}</td>
                    <td className="px-4 py-3 text-center text-xs font-bold text-primary">{row.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-900 leading-relaxed">
            <strong>The care home cliff:</strong> If your home is worth £180,000 and you have £20,000 in savings — a typical Mildenhall situation — you will be required to sell your home to fund care from day one. At £1,100/week, that home covers approximately 3 years of care. After that, if you've spent down to £23,250, the council steps in — but at their lower funding rate, and only if a suitable council-funded place is available locally. Many families find there isn't one.
          </div>
          <p className="text-xs text-muted-foreground mt-3">Sources: Care Act 2014 (as amended); Suffolk County Council charging policy 2024; NHS England Continuing Healthcare Framework 2022.</p>
        </section>

        {/* Local Care Homes */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Care Homes Near Mildenhall</h2>
          <p className="text-muted-foreground text-sm mb-5">CQC ratings as at last available inspection. Always check the CQC website for the most recent rating before making any decision.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {localHomes.map((h) => (
              <div key={h.name} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-foreground text-sm">{h.name}</h3>
                  <CqcBadge rating={h.cqc} />
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {h.location}</span>
                  <span>{h.type}</span>
                  <span>~{h.beds} beds</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{h.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-muted border border-border rounded-xl text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Note:</strong> This list is not exhaustive. Use the CQC care home finder (link below) for a full list of registered homes in your area with current inspection ratings. CQC ratings can change — always check before making a decision.
          </div>
        </section>

        {/* David's Commitments */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">David's Commitments on Care Homes</h2>
          <div className="space-y-4">
            {[
              { c: "Demand transparency on care home funding gaps", d: "Push Suffolk County Council to publish the gap between its 'fair cost of care' rate and what homes actually charge — making the self-funder cross-subsidy visible and holding the council accountable for closing it." },
              { c: "Fight for the capital threshold to be raised", d: "Support and advocate for the means-testing threshold to be raised from £23,250 to at least £50,000 — closer to 2010 values in real terms — so that modest homeowners are not forced to sell immediately upon needing care." },
              { c: "NHS Continuing Healthcare reform", d: "Push for NHS CHC eligibility assessments to be conducted fairly, promptly, and without the gatekeeping that currently prevents many people with complex health needs from accessing free-at-point-of-use care." },
              { c: "Local care home beds for a local population", d: "Challenge Suffolk County Council and the Suffolk & NE Essex ICB to commission more care home beds in the Mildenhall and West Suffolk area, so that people do not have to be placed 12+ miles from their families." },
              { c: "Protect unpaid carers from the care cliff", d: "Back policy changes that protect the primary home of a spouse, partner, or long-term carer from inclusion in the capital assessment — ending the situation where caring for a relative means losing your home." },
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

        {/* NHS & Support Links */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-6 h-6 text-primary shrink-0" />
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary">Find Help &amp; Information</h2>
              <p className="text-muted-foreground text-sm">Free, authoritative guidance on care homes, funding, and your rights</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nhsLinks.map(({ label, url, desc }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 border border-border bg-card rounded-xl p-4 hover:border-primary hover:shadow-sm transition-all group">
                <ExternalLink className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* NHS Services Near You */}
        <section className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-red-900 mb-4">Find NHS Services Near You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "🩺", label: "Find a GP", url: "https://www.nhs.uk/service-search/find-a-gp", desc: "Search for GP practices accepting new patients near IP28" },
              { icon: "🦷", label: "Find an NHS Dentist", url: "https://www.nhs.uk/service-search/find-a-dentist", desc: "NHS dental practices — including those accepting new NHS patients" },
              { icon: "💊", label: "Find a Pharmacy", url: "https://www.nhs.uk/service-search/pharmacy/find-a-pharmacy", desc: "Pharmacies near you, including out-of-hours services" },
              { icon: "🏥", label: "111 Online — Medical Help", url: "https://111.nhs.uk", desc: "Get urgent medical advice without going to A&E" },
              { icon: "🧠", label: "Mental Health Support", url: "https://www.nhs.uk/mental-health/", desc: "NHS mental health resources, self-referral, and crisis support" },
              { icon: "📋", label: "Suffolk Adult Care Referral", url: "https://www.suffolk.gov.uk/adults/adult-care", desc: "Request a care needs assessment from Suffolk County Council" },
              { icon: "🤝", label: "Suffolk SNEEICB Health Services", url: "https://www.sneeicb.nhs.uk", desc: "Suffolk & NE Essex ICB — local NHS commissioning for our area" },
              { icon: "📍", label: "West Suffolk Hospital", url: "https://www.wsh.nhs.uk", desc: "West Suffolk NHS Foundation Trust — your nearest hospital, 11 miles" },
            ].map(({ icon, label, url, desc }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white border border-red-200 rounded-xl p-3 hover:border-red-400 hover:shadow-sm transition-all group">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <div className="font-semibold text-sm text-red-900 group-hover:underline">{label}</div>
                  <div className="text-xs text-red-700/80 mt-0.5">{desc}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link href="/policies/health" className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Health & NHS
          </Link>
          <Link href="/policies/care-workers" className="px-5 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl text-sm shadow hover:bg-primary/90 transition-colors">
            Care Workers sub-page →
          </Link>
          <Link href="/contact" className="px-5 py-2.5 bg-destructive text-white font-bold rounded-xl text-sm shadow hover:bg-destructive/90 transition-colors">
            Contact David
          </Link>
        </div>
      </div>
    </div>
  );
}

