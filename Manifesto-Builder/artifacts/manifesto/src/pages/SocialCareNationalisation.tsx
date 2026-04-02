import { Link } from "wouter";
import {
  ArrowLeft, Heart, AlertTriangle, CheckCircle, XCircle, PoundSterling,
  Users, Home, Calculator, TrendingUp, ShieldCheck, Briefcase, ExternalLink, ArrowRight,
  Building, UserMinus, UserCheck
} from "lucide-react";

// ─── CURRENT FUNDING BREAKDOWN ────────────────────────────────────────────────
const fundingRows = [
  { source: "Council tax (general + adult social care precept)", amount: "~£12–15bn", pct: "~53%", who: "Every household, equally — regardless of income. Regressive: a nurse and a CEO pay the same." },
  { source: "Central government grants to councils (Better Care Fund etc.)", amount: "~£4–5bn", pct: "~18%", who: "From general taxation — already income-related, but ring-fenced pots distributed unequally." },
  { source: "Client contributions (means-tested — your savings, home equity)", amount: "~£3.7bn", pct: "~14%", who: "Paid by individuals who have assets above the £23,250 threshold. Effectively a tax on having worked and saved." },
  { source: "Other LA income / reserves", amount: "~£3–4bn", pct: "~15%", who: "Cross-subsidised from other council services — competing with roads, libraries, children's services." },
];

// ─── INDIVIDUAL IMPACT CALCULATOR ────────────────────────────────────────────
const individualRows = [
  {
    scenario: "Retired resident on state pension + small private pension",
    income: "£14,000/yr",
    extraTax: "~£29/yr",
    ctSaving: "~£520/yr",
    netChange: "Saves ~£490/yr",
    protected: "Home, pension, savings all protected from care costs",
    color: "green",
  },
  {
    scenario: "Care worker / shop worker on National Living Wage",
    income: "£22,000/yr",
    extraTax: "~£189/yr",
    ctSaving: "~£520/yr",
    netChange: "Saves ~£330/yr",
    protected: "Home and savings protected. NHS terms if working in social care.",
    color: "green",
  },
  {
    scenario: "Average earner (median UK wage)",
    income: "£34,963/yr",
    extraTax: "~£449/yr",
    ctSaving: "~£520/yr",
    netChange: "Saves ~£70/yr",
    protected: "Home and pension protected from care asset depletion",
    color: "green",
  },
  {
    scenario: "Higher earner",
    income: "£55,000/yr",
    extraTax: "~£849/yr",
    ctSaving: "~£520/yr",
    netChange: "Costs ~£330/yr extra",
    protected: "Home (avg value £290k in West Suffolk) protected — worth far more than £330/yr",
    color: "amber",
  },
  {
    scenario: "Senior professional / manager",
    income: "£80,000/yr",
    extraTax: "~£1,349/yr",
    ctSaving: "~£520/yr",
    netChange: "Costs ~£830/yr extra",
    protected: "Estate and pension protected. Still cheaper than 2.5 years of self-funded care (~£140,000).",
    color: "amber",
  },
];

// ─── COST COMPARISON TABLES ───────────────────────────────────────────────────
const costCompare = [
  {
    measure: "Total adult social care gross spend (England, 2022-23)",
    current: "£26.4 billion",
    national: "£26.4 billion",
    note: "The total does not change — just who pays and how.",
  },
  {
    measure: "Currently funded by councils (council tax + reserves)",
    current: "~£15–18 billion",
    national: "£0 (transfers to national budget)",
    note: "This is the amount that comes off council tax bills nationally.",
  },
  {
    measure: "Currently funded by client means-testing (asset depletion)",
    current: "~£3.7 billion",
    national: "£0 if means-test abolished",
    note: "The £3.7bn must be replaced nationally — but people keep their homes.",
  },
  {
    measure: "Currently funded by central government grants",
    current: "~£4–5 billion",
    national: "~£26.4 billion (full national responsibility)",
    note: "Government steps up from partial to full funder. Revenue raised by income tax.",
  },
  {
    measure: "Revenue from 2% income tax rise (England, all bands)",
    current: "N/A",
    national: "~£14–16 billion",
    note: "Raises the bulk of new national funding needed.",
  },
  {
    measure: "Council tax social care element removed from bills",
    current: "~£600-700/yr Band D (national avg)",
    national: "£0 — removed from council tax",
    note: "The council tax saving broadly offsets the income tax rise for most earners.",
  },
  {
    measure: "Efficiency savings (NHS integration, CHC disputes, bed-blocking)",
    current: "~£2.2 billion wasted annually",
    national: "~£2–4 billion saved over 3 yrs",
    note: "NHS Continuing Healthcare disputes, duplicate admin, delayed hospital discharge.",
  },
  {
    measure: "Suffolk CC adult social care budget",
    current: "~£440 million/yr (~60% of SCC total budget)",
    national: "Transferred to NHS/national. SCC budget ~60% smaller.",
    note: "Suffolk County Council council tax could fall substantially.",
  },
];

// ─── WORKFORCE RESTRUCTURING DATA ────────────────────────────────────────────
const workforceTransfer = [
  {
    role: "Social workers (adult social care)",
    englandTotal: "~33,000",
    suffolk: "~380",
    outcome: "transfer",
    detail: "Social workers remain essential under any model — they assess needs, plan care, safeguard people. They transfer to NHS community teams under TUPE. Job protected; employer changes; NHS terms apply.",
  },
  {
    role: "Occupational therapists (council-employed)",
    englandTotal: "~8,000",
    suffolk: "~90",
    outcome: "transfer",
    detail: "Many OTs are already NHS-employed. Council OTs transfer to NHS and consolidate with existing NHS OT teams — reducing duplication of assessments and improving continuity.",
  },
  {
    role: "Care coordinators / support planners",
    englandTotal: "~12,000",
    suffolk: "~180",
    outcome: "transfer",
    detail: "Transfer into NHS Integrated Community Teams. Retained in full — these roles become more effective with direct access to NHS clinical records and pathways.",
  },
  {
    role: "Direct care staff (council-employed home/residential care workers)",
    englandTotal: "~45,000",
    suffolk: "~1,100",
    outcome: "transfer",
    detail: "Full TUPE transfer to NHS. These workers gain NHS pay bands, pension, sick pay, and employment security. This is the largest single improvement in the entire reform.",
  },
  {
    role: "Finance & contracts staff (social care commissioning)",
    englandTotal: "~12,000",
    suffolk: "~150",
    outcome: "reduce",
    detail: "153 separate council commissioning teams merge into 42 NHS ICB structures. NHS commissioning infrastructure already exists. ~50% reduction in these posts over 3 years through natural turnover and redeployment.",
  },
  {
    role: "Council social care IT / data teams",
    englandTotal: "~5,000",
    suffolk: "~60",
    outcome: "reduce",
    detail: "153 separate social care IT systems (Mosaic, Liquidlogic, Carefirst, etc.) replaced by NHS digital infrastructure. Most council IT staff redeployable within NHS Digital transformation programmes.",
  },
  {
    role: "NHS Continuing Healthcare assessment & dispute teams",
    englandTotal: "~2,000 (NHS) + ~1,500 (council)",
    suffolk: "~50",
    outcome: "eliminate",
    detail: "Both the NHS and council teams exist solely to argue about who pays for a person's care. If social care and health are the same budget, this entire category of work — and its costs — disappears.",
  },
  {
    role: "Directors of Adult Social Services + senior management",
    englandTotal: "~1,200 (153 councils × ~8 senior posts)",
    suffolk: "~20",
    outcome: "reduce",
    detail: "153 local DASS posts reduce to approximately 42 NHS regional social care director equivalents — a 70% reduction at the top tier. These are the highest-paid posts in council social care. Average total cost: £130,000–180,000 per post.",
  },
  {
    role: "Admin / clerical (parallel with NHS admin)",
    englandTotal: "~15,000",
    suffolk: "~200",
    outcome: "reduce",
    detail: "Parallel referral systems, assessment forms, care plans, charging notices, and correspondence. Under integration, most is absorbed into NHS admin systems. Estimated 40–60% reduction in duplicated admin over 5 years.",
  },
];

const restructuringSavings = [
  { item: "153 Directors of Adult Social Services + deputy/senior tier eliminated (70% reduction)", nationalSaving: "£150–200m/yr", suffolkSaving: "£3–5m/yr" },
  { item: "NHS/council CHC dispute teams eliminated on both sides", nationalSaving: "£150–180m/yr", suffolkSaving: "£4–6m/yr" },
  { item: "Social care commissioning team consolidation (~50% reduction)", nationalSaving: "£200–300m/yr", suffolkSaving: "£5–8m/yr" },
  { item: "IT/data systems: 153 → 42 (or 1 national NHS system)", nationalSaving: "£80–120m/yr (+ £200–300m one-off)", suffolkSaving: "£3–5m/yr" },
  { item: "Admin duplication (parallel LA/NHS referrals, assessment, correspondence)", nationalSaving: "£300–500m/yr", suffolkSaving: "£6–10m/yr" },
  { item: "Total estimated annual recurring saving from restructuring", nationalSaving: "£880m – £1.3bn/yr", suffolkSaving: "£21–34m/yr", highlight: true },
];

// ─── CARE WORKER PAY COMPARISON ───────────────────────────────────────────────
const payRows = [
  { role: "Entry-level care worker (private sector)", current: "£10.90–£11.44/hr", nhsBand: "Band 2: £11.45–£12.00/hr", diff: "+5–10%", extraPerYr: "+£1,000–£2,000" },
  { role: "Senior care worker / team leader", current: "£11.50–£13.00/hr", nhsBand: "Band 3: £12.60–£14.00/hr", diff: "+8–15%", extraPerYr: "+£1,500–£3,000" },
  { role: "Senior care worker, 5+ yrs experience", current: "£12.00–£13.50/hr", nhsBand: "Band 3 top: £14.00/hr", diff: "+4–17%", extraPerYr: "+£800–£3,500" },
  { role: "Care home nurse / clinical lead", current: "£15.00–£18.00/hr", nhsBand: "Band 5: £28,407–£34,581/yr", diff: "Comparable / slight uplift", extraPerYr: "NHS terms: major benefit" },
];

// ─── BENEFITS OF NHS EMPLOYMENT ───────────────────────────────────────────────
const nhsTerms = [
  { term: "Sick pay", current: "Statutory only — £116.75/week after 3 days", nhs: "Full pay 6 months + half pay 6 months (NHS Sickness Absence Policy)" },
  { term: "Pension", current: "Auto-enrolment minimum (NEST) — typically 3% employer", nhs: "NHS Pension Scheme (defined benefit) — 20.6% employer contribution, index-linked" },
  { term: "Holiday entitlement", current: "28 days (statutory) — often minimum applied", nhs: "27–33 days + 8 bank holidays (rising with service)" },
  { term: "Job security", current: "High casual and zero-hours contract use (~25% of workforce)", nhs: "Substantive NHS contracts — no zero hours for core roles" },
  { term: "Training & career development", current: "Variable — many employers cut training to reduce costs", nhs: "Statutory CPD time, access to NHS Learning Management System, clear band progression" },
  { term: "Travel expenses (unpaid)", current: "Up to £550/yr lost by home care workers in unpaid travel", nhs: "Mileage allowance paid for all work-related travel — no unpaid journeys" },
];

// ─── INEFFICIENCY DATA ────────────────────────────────────────────────────────
const inefficiencyData = [
  { waste: "NHS Continuing Healthcare (CHC) disputes", cost: "~£500m/yr", detail: "NHS and councils spend enormous sums arguing over whether a person's needs are 'health' (NHS pays) or 'social care' (council pays). The legal and admin costs are staggering — and the person in the middle waits." },
  { waste: "Delayed hospital discharges ('bed-blocking')", cost: "~£1.7bn/yr", detail: "People medically fit for discharge cannot leave hospital because social care is not ready. Each delayed bed costs the NHS £350+/day. In 2022-23, there were 13,000+ delayed discharge days per day nationally." },
  { waste: "Duplicate back-office functions (153 councils + 42 ICBs)", cost: "~£400–600m/yr", detail: "Every council runs its own social care assessment, commissioning, and finance function. Integration with NHS would eliminate the most expensive duplication." },
  { waste: "Excessive staff turnover costs (32% annual rate)", cost: "~£400–500m/yr", detail: "Each departure costs ~£15,000 in recruitment and retraining. With ~700,000 leavers/year across England, this is a catastrophic waste. NHS terms would roughly halve turnover over 5 years." },
];

const colMap: Record<string, string> = {
  green: "border-green-300 bg-green-50",
  amber: "border-amber-300 bg-amber-50",
};
const valMap: Record<string, string> = {
  green: "text-green-800",
  amber: "text-amber-800",
};

export default function SocialCareNationalisation() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero */}
      <div className="bg-red-900 text-white pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/policies/health" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Health &amp; NHS
          </Link>
          <div className="flex items-center gap-2 text-red-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Heart className="w-4 h-4" />
            Social Care Reform · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nationalise Social Care — Bring It Into the NHS</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            Social care is a health issue treated as a council budgeting problem. The result: people sell their homes to pay for care they've already funded through a lifetime of taxes. David's position is clear — social care belongs inside the NHS, funded progressively through income tax, and delivered free at the point of need. The numbers work.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "£26.4bn", label: "Annual adult social care gross spend in England — 60% of Suffolk CC's entire budget" },
              { value: "£23,250", label: "Asset threshold before any council help — unchanged since 2010; should be ~£50k adjusted for inflation" },
              { value: "2%", label: "Income tax rise needed to nationalise and fund social care — covering most people's care bill for life" },
              { value: "~£490/yr", label: "Average net saving for a retired person in West Suffolk — council tax down, income tax barely up" },
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

        {/* The Problem */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">The Problem — Social Care Is a Health Issue, Not a Council Budgeting Problem</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              When someone needs help getting out of bed, taking medication, eating a meal, or bathing — that is a health need. It is clinically indistinguishable from the kind of care the NHS delivers in hospitals. Yet the moment it happens in someone's home or care home, it becomes <strong className="text-foreground">a council responsibility</strong>, governed by a completely different funding system, assessed by a completely different team, means-tested against someone's life savings — and frequently rationed by whichever council happens to have the budget that year.
            </p>
            <p>
              This split was a political decision, not a clinical one. In 1948, when the NHS was created, Aneurin Bevan tried to include social care. He was overruled. The consequence — 75 years later — is a system where the boundary between "health" (NHS, free) and "social care" (council, means-tested) is the subject of constant legal disputes, family crises, and a £26.4 billion budget that is being squeezed between rising demand and a council tax system that has nothing to do with people's ability to pay.
            </p>
            <p>
              <strong className="text-foreground">Suffolk County Council spends approximately £440 million per year on adult social care</strong> — roughly 60% of its entire net budget. Every year it faces the same impossible choice: cut roads, libraries, and children's services, or raise council tax — or both. Meanwhile, the people who need care face a means test that is both arbitrary and cruel: designed to take your home before you die and your savings before you get help.
            </p>
            <p>
              There is a better model. And the numbers — honestly laid out — show it is both affordable and fairer.
            </p>
          </div>
        </section>

        {/* How it's currently funded */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <PoundSterling className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">How Social Care Is Currently Funded — and Why It's Broken</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Funding source</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Annual amount</th>
                  <th className="text-center px-4 py-3 font-semibold">Share</th>
                  <th className="text-left px-4 py-3 font-semibold">Who actually pays</th>
                </tr>
              </thead>
              <tbody>
                {fundingRows.map((row, i) => (
                  <tr key={row.source} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 text-xs font-medium">{row.source}</td>
                    <td className="px-4 py-3 text-center text-sm font-bold text-primary">{row.amount}</td>
                    <td className="px-4 py-3 text-center text-xs font-semibold text-amber-700">{row.pct}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground leading-snug">{row.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="font-bold text-red-900 text-sm mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4 shrink-0" />
                The regressive injustice of council tax funding
              </div>
              <p className="text-xs text-red-800 leading-relaxed">
                Council tax is based on property values from 1991 — not income, not wealth, and not ability to pay. A retired person on £12,000/year pays the same council tax as a professional earning £85,000 in the same-value property. This means social care is partly funded by some of the most financially vulnerable people in our communities.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="font-bold text-red-900 text-sm mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4 shrink-0" />
                The means-test takes your home
              </div>
              <p className="text-xs text-red-800 leading-relaxed">
                The current capital threshold is £23,250 — unchanged since 2010. Adjusted for inflation it should be approximately £50,000. Instead, anyone with assets above this threshold — including the value of their home — must pay for their own care until those assets fall below the threshold. Average self-funded care costs in West Suffolk run to £57,200/year. Two and a half years of care costs ~£143,000 — enough to consume most of a modest local home's value.
              </p>
            </div>
          </div>
        </section>

        {/* The Means Test Scandal */}
        <section className="bg-slate-800 text-white rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-4">
            <Home className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
            <h2 className="text-xl font-serif font-bold">The Means Test — A Worked Mildenhall Example</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white/85">
            <div>
              <div className="text-red-400 font-bold mb-3 text-sm">Under the current system</div>
              <ul className="space-y-2">
                {[
                  "Margaret is 80, widowed, owns her Mildenhall home outright (value: ~£280,000). Has a pension pot of £40,000 and state pension.",
                  "She has a stroke and needs residential care. Suffolk CC assesses her needs as 'eligible'.",
                  "Her assets (home + pension savings) total ~£320,000 — well above the £23,250 threshold.",
                  "She must self-fund care at ~£1,100/week = £57,200/year.",
                  "After 2.5 years of care her savings are gone. She must now use her home equity — either sell or take out a deferred payment agreement (a loan against the property).",
                  "By the time she dies, ~£143,000 of the home her late husband worked 40 years to pay for has been consumed by care costs she's already paid taxes for.",
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-green-400 font-bold mb-3 text-sm">Under nationalised social care</div>
              <ul className="space-y-2">
                {[
                  "Margaret has the same stroke, the same needs, the same home.",
                  "Social care is now a national NHS service, free at the point of need — like treatment for the stroke itself.",
                  "No means test. No asset assessment. No deferred payment loan against the family home.",
                  "Her care is funded from national insurance-style contributions she and her late husband paid throughout their working lives.",
                  "Margaret's home passes to her children. Her pension fund is available for whatever she chooses — a holiday, helping grandchildren, charitable giving.",
                  "The council tax she paid throughout her life was significantly lower because social care was funded through income tax — not a flat charge.",
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Financial Workability */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Does the Funding Model Work? — The Full Financial Analysis</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            The policy proposal: replace council funding of social care with a <strong>2% increase in income tax</strong> (applied across all tax bands), remove social care from council budgets (enabling council tax to fall), abolish means-testing of assets including the family home and pension, and integrate social care fully into NHS management.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Financial measure</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Current system</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Nationalised model</th>
                  <th className="text-left px-4 py-3 font-semibold">What changes</th>
                </tr>
              </thead>
              <tbody>
                {costCompare.map((row, i) => (
                  <tr key={row.measure} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 text-xs font-medium">{row.measure}</td>
                    <td className="px-4 py-3 text-center text-xs text-amber-700 font-semibold">{row.current}</td>
                    <td className="px-4 py-3 text-center text-xs text-green-700 font-semibold">{row.national}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground leading-snug">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <h3 className="font-bold text-primary font-serif mb-2">Overall fiscal verdict</h3>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
              <p>
                A 2% income tax rise raises approximately <strong className="text-foreground">£14–16 billion</strong> nationally. Combined with the removal of the council-funded element (~£15 billion, returned via council tax reductions) and efficiency savings from integration (£2–4 billion over 5 years), the model is <strong className="text-foreground">broadly self-financing</strong> — with a potential small net improvement in public finances once reduced hospital delays and turnover costs are included.
              </p>
              <p>
                The 2023 government's proposed Health and Social Care Levy (National Insurance rise) was a version of this — it raised ~£12 billion before being cancelled. The difference with income tax is that it is more progressive: higher earners pay proportionately more; pensioners with small incomes pay barely any extra; the very wealthy pay the most and benefit the most from asset protection.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                <strong>Important caveat:</strong> This is a macro-level analysis based on published Treasury and DHSC figures. Precise implementation would require independent modelling by the OBR. The case is for the principle — and the principle is economically sound.
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Sources: DHSC Adult Social Care Outcomes Framework 2022-23; HM Treasury Income Tax receipts 2022-23; NHS England Continuing Healthcare data 2022-23; Nuffield Trust analysis of social care funding reform 2023; ADASS Spring Survey 2023.</p>
        </section>

        {/* Who Wins/Loses */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">What Would It Mean for a Mildenhall Resident? — By Household Type</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5">
            Estimated annual impact of replacing the council social care element with a 2% income tax rise. Council tax saving assumes the Suffolk CC element falls by approximately £500–550/yr for a Band D property if social care is removed from its budget.
          </p>
          <div className="space-y-4">
            {individualRows.map(({ scenario, income, extraTax, ctSaving, netChange, protected: prot, color }) => (
              <div key={scenario} className={`border-2 rounded-xl p-5 ${colMap[color]}`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-sm text-foreground flex-1">{scenario}</h3>
                  <div className={`text-sm font-bold shrink-0 px-3 py-1 rounded-lg ${color === "green" ? "bg-green-200 text-green-900" : "bg-amber-200 text-amber-900"}`}>{netChange}</div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-sm font-bold text-foreground">{income}</div>
                    <div className="text-xs text-muted-foreground">Annual income</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-red-700">{extraTax}</div>
                    <div className="text-xs text-muted-foreground">Extra income tax</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-green-700">{ctSaving}</div>
                    <div className="text-xs text-muted-foreground">Council tax saving</div>
                  </div>
                </div>
                <div className={`flex items-start gap-2 text-xs leading-relaxed ${valMap[color]}`}>
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                  <span><strong>Asset protection:</strong> {prot}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900 leading-relaxed">
            <strong>The key insight:</strong> Even for higher earners, the net extra cost (£300–800/year) is trivially small compared to the risk they are currently insuring against. Average residential care in West Suffolk costs <strong>£57,200/year</strong>. Two and a half years of care = <strong>~£143,000</strong> — potentially your entire home equity. A 2% income tax rise is, in effect, the most cost-effective social care insurance policy ever designed. The alternative is hoping you don't need care.
          </div>
        </section>

        {/* System inefficiencies */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">The Hidden Waste — What Integration Saves</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5">These are the costs the current split system generates that would largely disappear under NHS integration.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inefficiencyData.map(({ waste, cost, detail }) => (
              <div key={waste} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-sm text-foreground">{waste}</h3>
                  <span className="text-destructive font-bold text-sm shrink-0">{cost}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-900">
            <strong>Total estimated waste from the current split system: £2–3 billion per year.</strong> This is money that could fund 50,000–75,000 additional care workers at NHS Band 2 rates. Integration does not just save money — it improves the quality and consistency of care for everyone who needs it.
          </div>
          <p className="text-xs text-muted-foreground mt-2">Sources: NHS England Continuing Healthcare spending returns 2022-23; NHS Providers delayed discharge data; ADASS workforce survey 2023; House of Commons Library briefing on social care funding.</p>
        </section>

        {/* Workforce Restructuring */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <Building className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Council Workforce Restructuring — The Honest Analysis</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
            Nationalising social care means taking the assessment, commissioning, and delivery functions out of 153 separate council departments and placing them inside the NHS. That is a structural change — and it involves real consequences for real people's jobs. David believes the public deserves an honest account of what changes, what doesn't, and what it saves.
          </p>
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-6 text-sm text-amber-900 leading-relaxed">
            <strong>A word on unions:</strong> UNISON, GMB, and other unions will oppose this restructuring — not primarily because workers would be worse off (most would gain from NHS terms), but because it represents a fundamental shift in institutional power away from local government. That opposition deserves to be heard and engaged with, not dismissed. David's position: the disruption is real and must be managed carefully with proper TUPE protection, redeployment support, and a multi-year transition. But disruption to institutions is not the same as harm to workers — and in this case, for most workers, the reverse is true.
          </div>

          <h3 className="font-serif font-bold text-foreground mb-3 text-base">What happens to each role — transfer, reduce, or eliminate?</h3>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Role / function</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">England total</th>
                  <th className="text-center px-4 py-3 font-semibold">Suffolk est.</th>
                  <th className="text-center px-4 py-3 font-semibold">Outcome</th>
                  <th className="text-left px-4 py-3 font-semibold">What changes</th>
                </tr>
              </thead>
              <tbody>
                {workforceTransfer.map((row, i) => {
                  const badge = row.outcome === "transfer"
                    ? <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800"><UserCheck className="w-3 h-3" />Transfer</span>
                    : row.outcome === "reduce"
                    ? <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800"><UserMinus className="w-3 h-3" />Reduce</span>
                    : <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-800"><XCircle className="w-3 h-3" />Eliminate</span>;
                  return (
                    <tr key={row.role} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="px-4 py-3 text-xs font-semibold">{row.role}</td>
                      <td className="px-4 py-3 text-center text-xs text-muted-foreground">{row.englandTotal}</td>
                      <td className="px-4 py-3 text-center text-xs font-medium">{row.suffolk}</td>
                      <td className="px-4 py-3 text-center">{badge}</td>
                      <td className="px-4 py-3 text-xs text-muted-foreground leading-snug">{row.detail}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: UserCheck, label: "Roles that transfer to NHS", count: "~98,000 nationally", sub: "~1,750 in Suffolk", desc: "Social workers, OTs, care coordinators, direct care staff — all protected by TUPE, all gaining NHS employment terms.", col: "green" },
              { icon: UserMinus, label: "Roles that reduce over time", count: "~32,000 nationally", sub: "~460 in Suffolk", desc: "Finance, commissioning, IT, admin, and senior management — reduced through natural turnover, redeployment into NHS, and consolidation. Not mass redundancies — managed transition over 5–7 years.", col: "amber" },
              { icon: XCircle, label: "Roles that are eliminated", count: "~3,500 nationally", sub: "~50 in Suffolk", desc: "NHS and council CHC dispute teams — these exist solely because of the split system. When the split ends, so does the need for staff whose job is to fight it.", col: "red" },
            ].map(({ icon: Icon, label, count, sub, desc, col }) => (
              <div key={label} className={`border-2 rounded-xl p-4 ${col === "green" ? "border-green-300 bg-green-50" : col === "amber" ? "border-amber-300 bg-amber-50" : "border-red-300 bg-red-50"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-5 h-5 ${col === "green" ? "text-green-700" : col === "amber" ? "text-amber-700" : "text-red-700"}`} />
                  <span className={`font-bold text-xs ${col === "green" ? "text-green-900" : col === "amber" ? "text-amber-900" : "text-red-900"}`}>{label}</span>
                </div>
                <div className={`text-xl font-bold mb-0.5 ${col === "green" ? "text-green-800" : col === "amber" ? "text-amber-800" : "text-red-800"}`}>{count}</div>
                <div className="text-xs text-muted-foreground mb-2">{sub}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-serif font-bold text-foreground mb-3 text-base">Estimated annual savings from restructuring — nationally and in Suffolk</h3>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Saving category</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">England/yr</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Suffolk/yr</th>
                </tr>
              </thead>
              <tbody>
                {restructuringSavings.map((row, i) => (
                  <tr key={row.item} className={`${i % 2 === 0 ? "bg-background" : "bg-muted/20"} ${row.highlight ? "font-bold border-t-2 border-primary" : ""}`}>
                    <td className={`px-4 py-3 text-xs ${row.highlight ? "font-bold text-foreground" : "text-muted-foreground"}`}>{row.item}</td>
                    <td className={`px-4 py-3 text-center text-sm font-bold ${row.highlight ? "text-primary" : "text-green-700"}`}>{row.nationalSaving}</td>
                    <td className={`px-4 py-3 text-center text-sm font-bold ${row.highlight ? "text-primary" : "text-green-700"}`}>{row.suffolkSaving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900 leading-relaxed">
              <strong>TUPE — your rights if you're affected:</strong> The Transfer of Undertakings (Protection of Employment) Regulations 2006 protect workers when their employer changes through a service transfer. Your contract terms transfer intact on day one. Any dismissal connected to the transfer is automatically unfair. The restructuring savings come from not replacing leavers and consolidating management — not from firing frontline workers.
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 leading-relaxed">
              <strong>The combined saving picture:</strong> Adding workforce restructuring savings (£880m–£1.3bn/yr) to the hidden waste savings already identified (£2–3bn/yr) gives a total efficiency gain of approximately <strong>£3–4.3bn per year nationally</strong> from integration — equivalent to between 75,000 and 100,000 additional care workers at NHS Band 2 rates. The reform more than pays for its own transition costs within 5 years.
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Sources: LGA workforce data 2022-23; ADASS membership survey; NHS England CHC spending returns; LGO DASS census 2022; DHSC workforce statistics; OBR fiscal multiplier estimates for public sector restructuring. Suffolk figures are estimates based on LA workforce size and Suffolk CC published accounts.</p>
        </section>

        {/* Care Worker Impact */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">What Nationalisation Means for Care Workers</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5">
            There are approximately <strong>27,000 care workers in Suffolk</strong>. Under NHS nationalisation, they would transfer to NHS employment terms. The difference is transformative — not just in pay, but in security, dignity, and career development.
          </p>

          <h3 className="font-serif font-bold text-foreground mb-3 text-base">Pay comparison — current vs NHS equivalent</h3>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Role</th>
                  <th className="text-center px-4 py-3 font-semibold">Current pay</th>
                  <th className="text-center px-4 py-3 font-semibold">NHS equivalent band</th>
                  <th className="text-center px-4 py-3 font-semibold">Pay increase</th>
                  <th className="text-center px-4 py-3 font-semibold">Extra/yr</th>
                </tr>
              </thead>
              <tbody>
                {payRows.map((row, i) => (
                  <tr key={row.role} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 text-xs font-medium">{row.role}</td>
                    <td className="px-4 py-3 text-center text-xs text-amber-700 font-semibold">{row.current}</td>
                    <td className="px-4 py-3 text-center text-xs text-green-700 font-semibold">{row.nhsBand}</td>
                    <td className="px-4 py-3 text-center text-xs font-bold text-primary">{row.diff}</td>
                    <td className="px-4 py-3 text-center text-xs font-bold text-green-700">{row.extraPerYr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-serif font-bold text-foreground mb-3 text-base">Employment terms comparison — private sector vs NHS</h3>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Term</th>
                  <th className="text-left px-4 py-3 font-semibold">Current (typical private sector)</th>
                  <th className="text-left px-4 py-3 font-semibold">NHS equivalent</th>
                </tr>
              </thead>
              <tbody>
                {nhsTerms.map((row, i) => (
                  <tr key={row.term} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 text-xs font-bold">{row.term}</td>
                    <td className="px-4 py-3 text-xs text-amber-700 leading-snug">{row.current}</td>
                    <td className="px-4 py-3 text-xs text-green-700 leading-snug font-medium">{row.nhs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">The workforce crisis is self-inflicted.</strong> Suffolk's social care sector has a 32% annual turnover rate — one in three workers leaves every year. The primary reasons are low pay, poor terms, and no career pathway. NHS employment would cut turnover to NHS sector rates (~15%), saving ~£400m+ nationally in perpetual recruitment and retraining costs, while delivering a more stable, experienced workforce to the people who need it most.
          </div>
        </section>

        {/* Social inclusion */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-4">
            <Heart className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <h2 className="text-xl font-serif font-bold text-primary">The Bigger Picture — Social Care as Social Inclusion</h2>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              The current model does not just impoverish elderly and disabled people — it impoverishes their families and their communities. There are currently <strong className="text-foreground">5.7 million unpaid carers in England</strong>. Many have reduced their working hours, left jobs, or given up careers entirely to care for parents or partners who cannot access adequate professional care. The economic cost of unpaid care to the UK economy is estimated at <strong className="text-foreground">£132 billion per year</strong> (Carers UK, 2023).
            </p>
            <p>
              A well-funded, nationalised social care system does not replace family care — it supports it. It means a daughter working in Mildenhall is not forced to choose between her job and her father's wellbeing. It means an elderly person is not written off as a "burden" but supported to remain active, connected, and part of their community for as long as possible.
            </p>
            <p>
              There is also a direct economic return. If better social care returns even 10% of the 5.7 million unpaid carers to the workforce — say, 570,000 people working part-time instead of caring full-time — the additional income tax and reduced benefit cost is substantial. The Nuffield Trust estimates this alone could generate <strong className="text-foreground">£3–5 billion in additional annual tax revenue</strong>, further reducing the net cost of reform.
            </p>
            <div className="bg-primary text-white rounded-xl p-4 mt-2">
              <p className="text-sm leading-relaxed">
                <strong>David's view:</strong> We do not describe hospitals as charity. We do not means-test cancer treatment. We do not sell your home to pay for a hip replacement. Social care is no different in kind — only in the political cowardice that has kept it outside the NHS for three-quarters of a century. The solution is not complex. It is redistribution: from a regressive flat council tax to a progressive income tax, with everyone covered, no one impoverished, and a workforce finally treated with the respect it has always deserved.
              </p>
            </div>
          </div>
        </section>

        {/* David's Role — what he can actually do */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">What a County Councillor Can Actually Do</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm text-amber-900 leading-relaxed">
            <strong>Honest caveat:</strong> Nationalising social care requires an Act of Parliament. A county councillor cannot do it alone. What David can and will do is use every platform and vote available to him to demand national action, protect local people within the existing system, and build the cross-party coalition of councils that is necessary to make Westminster listen.
          </div>
          <div className="space-y-4">
            {[
              { c: "Vote against means-test cliff-edge decisions at Suffolk CC", d: "Every year, Suffolk CC makes decisions about eligibility thresholds and deferred payment agreements. David will vote consistently to maximise access to council support and oppose any tightening of the means-test." },
              { c: "Push for full Suffolk CC/NHS ICB social care integration locally", d: "The NHS Suffolk and North East Essex ICB has joint working arrangements with Suffolk CC. David will push for full operational integration — shared assessments, shared budgets, and an end to CHC disputes that leave families waiting while bureaucrats argue about liability." },
              { c: "Submit evidence to the national social care reform consultation", d: "The government's ongoing review of social care funding provides a formal channel for councils and councillors to submit evidence. David will prepare and submit a detailed evidence paper based on Suffolk data, with the financial analysis on this page as its foundation." },
              { c: "Lobby West Suffolk's MP to support social care reform legislation", d: "Work directly with the MP for West Suffolk to ensure the case for nationalisation is made in Parliament, in select committee hearings, and in any future Social Care Bill debate." },
              { c: "Join the cross-party council coalition for social care reform", d: "The Local Government Association and ADASS have repeatedly called for national social care reform. David will join this coalition formally and attend national conferences to build the political case." },
              { c: "Publish an annual Suffolk CC social care transparency report", d: "David will push for Suffolk CC to publish, annually: total social care spend, number of people waiting for assessments, number of deferred payment agreements in force, and council CHC dispute costs. Sunlight is the best disinfectant." },
            ].map(({ c, d }) => (
              <div key={c} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">{c}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Further reading */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Further Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Nuffield Trust — Social Care Funding", url: "https://www.nuffieldtrust.org.uk/research/social-care-funding-reform", desc: "Independent analysis of social care funding reform options, costs, and impacts." },
              { name: "King's Fund — The Case for Integration", url: "https://www.kingsfund.org.uk/topics/integrated-care", desc: "The King's Fund has produced extensive research on NHS and social care integration, including costing models." },
              { name: "ADASS Spring Survey 2023", url: "https://www.adass.org.uk/spring-survey-2023", desc: "Directors of Adult Social Services' annual survey of social care pressure, workforce, and financial sustainability." },
              { name: "Carers UK — State of Caring Report", url: "https://www.carersuk.org/news-and-campaigns/state-of-caring-survey", desc: "Annual survey of unpaid carers' experiences, economic cost, and workforce impact." },
              { name: "GOV.UK — Adult Social Care Reform", url: "https://www.gov.uk/government/collections/adult-social-care-reform", desc: "Official government social care reform consultation and policy documents." },
              { name: "Suffolk CC Adult Social Care Local Account", url: "https://www.suffolk.gov.uk/children-families-and-learning/adult-social-care/the-local-account-of-adult-social-care", desc: "Suffolk County Council's annual performance and financial data for adult social care." },
            ].map(({ name, url, desc }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors group">
                <ExternalLink className="w-4 h-4 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-xs text-foreground mb-1">{name}</div>
                  <div className="text-xs text-muted-foreground leading-snug">{desc}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link href="/policies/health" className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Health &amp; NHS
          </Link>
          <Link href="/policies/care-homes" className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            Care Homes — Costs &amp; Funding <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/policies/care-workers" className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            Care Workers — Pay &amp; Rights <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="px-5 py-2.5 bg-destructive text-white font-bold rounded-xl text-sm shadow hover:bg-destructive/90 transition-colors">
            Contact David
          </Link>
        </div>
      </div>
    </div>
  );
}
