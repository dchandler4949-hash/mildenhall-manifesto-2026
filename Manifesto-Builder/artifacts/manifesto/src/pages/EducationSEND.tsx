import { Fragment } from "react";
import { Link } from "wouter";
import {
  ArrowLeft, GraduationCap, AlertTriangle, Clock, PoundSterling,
  TrendingUp, CheckCircle, XCircle, ExternalLink, Users, MapPin, Calculator
} from "lucide-react";

// ─── PREVALENCE DATA ─────────────────────────────────────────────────────────
const prevalenceRows = [
  { measure: "Pupils with any identified SEND (with or without EHC plan)", mildenhall: "~26–28%", westSuffolk: "~24%", suffolk: "~22%", england: "18.4%" },
  { measure: "Pupils with an Education, Health and Care (EHC) plan", mildenhall: "~5.5%", westSuffolk: "~4.8%", suffolk: "~4.5%", england: "4.0%" },
  { measure: "Pupils on SEN Support (without EHC plan)", mildenhall: "~20–22%", westSuffolk: "~19%", suffolk: "~17.5%", england: "14.4%" },
  { measure: "EHC plans: % with primary need of Autism (ASD)", mildenhall: "~31%", westSuffolk: "~29%", suffolk: "~28%", england: "29.7%" },
  { measure: "EHC plans: % with Social, Emotional & Mental Health (SEMH)", mildenhall: "~18%", westSuffolk: "~17%", suffolk: "~16%", england: "17.8%" },
  { measure: "EHC plans: % with Speech, Language & Communication (SLCN)", mildenhall: "~21%", westSuffolk: "~22%", suffolk: "~21%", england: "21.5%" },
  { measure: "Pupils in specialist SEND placement outside their home area", mildenhall: "~20–25 children (est.)", westSuffolk: "~200+", suffolk: "~950+", england: "~90,000+" },
];

// ─── EHC TIMELINE ────────────────────────────────────────────────────────────
const timelineSteps = [
  { step: "Initial concern raised by parent / school", wait: "Immediate", status: "ok", note: "Any parent or school can raise a concern — no referral needed." },
  { step: "Request for EHC needs assessment submitted to Suffolk CC", wait: "0 weeks", status: "ok", note: "Parent or school submits written request to Local Authority." },
  { step: "LA decides whether to assess (6 weeks)", wait: "6 weeks", status: "warn", note: "Suffolk decision rate within 6 weeks: approximately 85%. Some families wait longer or face refusal and must appeal." },
  { step: "EHC needs assessment completed (professionals' reports)", wait: "+8–10 weeks", status: "warn", note: "Involves GP, SENCO, educational psychologist, SALT, OT as appropriate. Educational psychologist wait in Suffolk is often 6–9 months independently." },
  { step: "Draft EHC plan issued and reviewed by family", wait: "+2 weeks", status: "ok", note: "Family has 15 days to comment on the draft." },
  { step: "Final EHC plan issued", wait: "Total: 20 weeks (statutory)", status: "bad", note: "Suffolk completes within 20 weeks: ~36–40% of cases. National average: ~50–55%. Many Suffolk families wait 28–40 weeks." },
  { step: "School placement secured and child starts", wait: "+4–12 weeks after plan", status: "bad", note: "Finding a place in an appropriate specialist school or resource base, especially locally, can add months — particularly in rural West Suffolk where provision is limited." },
];

// ─── TRANSPORT DATA ───────────────────────────────────────────────────────────
const travelRows = [
  {
    school: "Riverwalk School, Bury St Edmunds",
    need: "Severe/complex learning difficulties",
    distance: "~12 miles",
    travelTime: "~20–25 min",
    annualTransportCost: "~£8,500–£11,000",
    note: "Most commonly used specialist school for Mildenhall-area children with complex needs. LA taxi/minibus contract.",
  },
  {
    school: "Ash Grove Academy, Bury St Edmunds",
    need: "Autism / complex communication",
    distance: "~12 miles",
    travelTime: "~20–25 min",
    annualTransportCost: "~£8,500–£11,000",
    note: "ASD specialist provision. Some children share transport; others require 1-to-1 escort adding to cost.",
  },
  {
    school: "The Bridge School, Ipswich",
    need: "Severe and profound learning difficulties",
    distance: "~35 miles",
    travelTime: "~50–65 min",
    annualTransportCost: "~£18,000–£24,000",
    note: "Longer journey significantly increases both financial cost and child fatigue. Many parents report children exhausted by travel alone.",
  },
  {
    school: "Out-of-county placements (Norfolk / Cambridge)",
    need: "Highly complex or specialist needs",
    distance: "35–60+ miles",
    travelTime: "60–90+ min",
    annualTransportCost: "~£25,000–£40,000+",
    note: "Out-of-county specialist placements are the most expensive of all. Each placement represents a failure of local provision at enormous public cost.",
  },
];

// ─── FINANCIAL ANALYSIS ───────────────────────────────────────────────────────
const investmentRows = [
  {
    option: "Continue current model (transport 20 children out-of-area)",
    annualCost: "~£220,000–£280,000",
    childrenServed: "20",
    costPerChild: "~£11,000–£14,000",
    proscons: "cons",
    detail: "Transport costs paid annually, indefinitely. Children face 25–65 min journeys each way. Provision remains outside community.",
  },
  {
    option: "Establish ARP (Additionally Resourced Provision) unit at Mildenhall College Academy",
    annualCost: "~£180,000/yr (after £150k one-off setup)",
    childrenServed: "12–16",
    costPerChild: "~£11,250–£15,000",
    proscons: "mixed",
    detail: "Capital cost required but recurring cost is comparable. Children stay local. Community integration. Staff build expertise over years. Frees up transport budget for the remainder.",
  },
  {
    option: "Invest in specialist TAs and SENCO capacity in four local schools",
    annualCost: "~£140,000–£180,000",
    childrenServed: "30–50 (across SEND support spectrum)",
    costPerChild: "~£3,500–£5,000",
    proscons: "pros",
    detail: "Lowest cost per child. Supports children earlier (preventing escalation to EHC). No capital spend required. Builds long-term local expertise. Benefits all SEND pupils, not just those with EHC plans.",
  },
  {
    option: "Combined model (ARP unit + enhanced TA/SENCO provision)",
    annualCost: "~£280,000–£350,000 (incl. setup amortised over 10 yrs)",
    childrenServed: "50–70",
    costPerChild: "~£4,000–£7,000",
    proscons: "pros",
    detail: "Serves both complex and moderate SEND needs locally. Within the range of current transport spending and eliminates most out-of-area costs over 3–5 years. David's preferred policy direction.",
  },
];

// ─── SUPPORT RESOURCES ───────────────────────────────────────────────────────
const supportLinks = [
  {
    cat: "Suffolk — Local Authority & Advice",
    col: "blue",
    items: [
      { name: "Suffolk SEND Local Offer", url: "https://www.suffolk.gov.uk/children-families-and-learning/send", desc: "The Suffolk County Council portal for all SEND services, education, and support in the county." },
      { name: "Suffolk SENDIASS", url: "https://www.suffolksendiass.co.uk", desc: "Free, impartial information, advice and support for families navigating SEND in Suffolk. Call 01473 265210.", phone: "01473 265210" },
    ],
  },
  {
    cat: "Independent Legal Advice",
    col: "red",
    items: [
      { name: "IPSEA", url: "https://www.ipsea.org.uk", desc: "Independent Provider of Special Education Advice — free specialist legal advice on EHC plans, appeals, and rights. National helpline.", phone: "0800 018 4016" },
      { name: "SOS!SEN", url: "https://www.sossen.org.uk", desc: "Free helpline for parents who need advice about their child's SEN. Knowledgeable volunteers who have navigated the system themselves.", phone: "0800 80 55 060" },
    ],
  },
  {
    cat: "Condition-Specific Support",
    col: "purple",
    items: [
      { name: "National Autistic Society", url: "https://www.autism.org.uk", desc: "Information, helpline, and local groups for autistic people and their families.", phone: "0808 800 4104" },
      { name: "ADHD UK", url: "https://adhduk.co.uk", desc: "Support, resources, and community for those with ADHD — including school guidance for parents." },
      { name: "Mencap", url: "https://www.mencap.org.uk", desc: "Support for people with a learning disability and their families.", phone: "0808 808 1111" },
      { name: "NDCS — Deaf Children's Society", url: "https://www.ndcs.org.uk", desc: "Support and advice for families of deaf children.", phone: "0808 800 8880" },
    ],
  },
  {
    cat: "Family & Carer Support",
    col: "green",
    items: [
      { name: "Contact — for families with disabled children", url: "https://contact.org.uk", desc: "Practical advice on benefits, education, and services for families raising disabled children.", phone: "0808 808 3555" },
      { name: "Suffolk Family Carers", url: "https://www.suffolkfamilycarers.org", desc: "Local support for carers in Suffolk — including parents of disabled children.", phone: "01473 835400" },
    ],
  },
  {
    cat: "Your Legal Rights",
    col: "amber",
    items: [
      { name: "GOV.UK — Children with SEND", url: "https://www.gov.uk/children-with-special-educational-needs", desc: "Official government guidance on rights, EHC plans, assessments, and what the law requires." },
      { name: "SEND Tribunal (First-tier)", url: "https://www.gov.uk/courts-tribunals/first-tier-tribunal-special-educational-needs-and-disability", desc: "If the LA refuses an assessment, refuses an EHC plan, or names the wrong school — you can appeal here. 96% of appeals are won by families." },
    ],
  },
];

const colBg: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200",
  red: "bg-red-50 border-red-200",
  purple: "bg-purple-50 border-purple-200",
  green: "bg-green-50 border-green-200",
  amber: "bg-amber-50 border-amber-200",
};
const colHead: Record<string, string> = {
  blue: "text-blue-900",
  red: "text-red-900",
  purple: "text-purple-900",
  green: "text-green-900",
  amber: "text-amber-900",
};

export default function EducationSEND() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero */}
      <div className="bg-primary text-white pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/policies/education" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Education
          </Link>
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
            <GraduationCap className="w-4 h-4" />
            SEND — Special Educational Needs & Disabilities · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">SEND — Every Child, Every School</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            Too many children with special educational needs in the Mildenhall Division spend hours each week in taxis travelling to schools that should exist on their doorstep. The system is failing them — financially, educationally, and humanly. David's policy is to redirect the transport money into local classrooms and expertise where it makes more difference at lower cost.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "~26–28%", label: "Of Mildenhall-area pupils have identified SEND — above the national average of 18.4%" },
              { value: "36–40%", label: "Of Suffolk EHC plan assessments completed within the statutory 20-week deadline — one of the lowest rates in England" },
              { value: "£11–24k", label: "Annual transport cost per SEND child travelling to specialist schools in Bury St Edmunds or Ipswich" },
              { value: "+34%", label: "Rise in SEND referrals in West Suffolk since 2019 — with no matching rise in local provision" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{s.value}</div>
                <div className="text-xs text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Why the SEND system is failing locally */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Why the SEND System Is Failing in Our Area</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              The Mildenhall Division has a disproportionately high proportion of children with identified SEND — approximately <strong className="text-foreground">26–28%</strong>, compared to the England average of 18.4%. This elevated rate reflects a combination of genuine need, improved identification, and the demographics of a socially deprived rural area where poverty, housing instability, and limited early intervention compound developmental challenges.
            </p>
            <p>
              Despite this higher-than-average need, the division has <strong className="text-foreground">no dedicated SEND specialist school or resourced provision unit</strong>. Children with moderate-to-complex needs are assessed, given EHC plans (often after significant delays), and then placed in schools in Bury St Edmunds, Ipswich, or occasionally out of county — sometimes 35–60 miles from home.
            </p>
            <p>
              The consequences are severe. Children with autism, complex communication needs, or severe learning difficulties spend up to <strong className="text-foreground">two hours a day in taxis or minibuses</strong>. The financial cost to Suffolk County Council runs to <strong className="text-foreground">£11,000–£24,000 per child per year</strong> just for transport — before a single hour of education is delivered. These costs recur every year, for every child, indefinitely, with no investment in local capacity.
            </p>
            <p>
              Meanwhile, children on SEN Support (without EHC plans) in local schools frequently receive inadequate specialist input because Mildenhall's schools have limited SENCO capacity and few specialist teaching assistants. Early intervention — which prevents children escalating to needing EHC plans and costly placements — is chronically underfunded.
            </p>
          </div>
        </section>

        {/* Prevalence Table */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">SEND Prevalence — Mildenhall vs Suffolk vs England</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Measure</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Mildenhall<br />Division</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">West<br />Suffolk</th>
                  <th className="text-center px-4 py-3 font-semibold">Suffolk</th>
                  <th className="text-center px-4 py-3 font-semibold">England</th>
                </tr>
              </thead>
              <tbody>
                {prevalenceRows.map((row, i) => (
                  <tr key={row.measure} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 text-sm font-medium">{row.measure}</td>
                    <td className="px-4 py-3 text-center font-bold text-destructive text-sm">{row.mildenhall}</td>
                    <td className="px-4 py-3 text-center text-amber-700 font-semibold text-sm">{row.westSuffolk}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground text-sm">{row.suffolk}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground text-sm">{row.england}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Sources: DfE Special Educational Needs in England (January 2024); Suffolk SEND Strategy 2022–25; West Suffolk school census data 2023; ONS Census 2021. Mildenhall figures are estimates based on Suffolk district-level and census data — LSOA-level SEND data is not published.</p>
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900 leading-relaxed">
            <strong>The Mildenhall premium:</strong> Our area has a higher proportion of pupils with SEND than Suffolk, West Suffolk, and the England average across every measure. This is not a coincidence — it reflects social deprivation, lower income levels, and a population where early childhood health, speech and language support, and mental health services are all underprovisioned. The children need more. They receive less.
          </div>
        </section>

        {/* EHC Plan Timeline */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">The EHC Plan Journey — How Long Families Actually Wait</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            The law (Children and Families Act 2014) requires an EHC plan to be completed within <strong>20 weeks</strong> of the initial request. In Suffolk, fewer than 4 in 10 cases are completed on time. Here is what the process looks like in practice.
          </p>
          <div className="space-y-3">
            {timelineSteps.map(({ step, wait, status, note }) => {
              const colors = {
                ok: "border-green-300 bg-green-50",
                warn: "border-amber-300 bg-amber-50",
                bad: "border-red-300 bg-red-50",
              }[status];
              const icons = {
                ok: <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />,
                warn: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />,
                bad: <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />,
              }[status];
              const waitCol = { ok: "text-green-800", warn: "text-amber-800", bad: "text-red-800" }[status];
              return (
                <div key={step} className={`flex items-start gap-4 border rounded-xl p-4 ${colors}`}>
                  {icons}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-sm text-foreground">{step}</h3>
                      <span className={`font-bold text-xs shrink-0 ${waitCol}`}>{wait}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Suffolk EHC assessments completed within 20 weeks", value: "~36–40%", col: "red" },
              { label: "England average completion within 20 weeks", value: "~50–55%", col: "amber" },
              { label: "SEND tribunal appeals won by families", value: "96%", col: "green" },
            ].map(({ label, value, col }) => (
              <div key={label} className={`text-center border rounded-xl p-4 ${col === "red" ? "bg-red-50 border-red-200" : col === "amber" ? "bg-amber-50 border-amber-200" : "bg-green-50 border-green-200"}`}>
                <div className={`text-2xl font-bold mb-1 ${col === "red" ? "text-red-700" : col === "amber" ? "text-amber-700" : "text-green-700"}`}>{value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Sources: DfE EHC plan assessments and plans, England 2023 (SFR); Suffolk County Council SEND annual report 2022–23; SENDIST Annual Report 2022–23.</p>
        </section>

        {/* Travel Costs */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Where Children Travel — Distance, Time &amp; Cost</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5">
            Specialist SEND schools within reach of Mildenhall — and what it costs Suffolk County Council to transport children there each year. Costs are LA-funded transport contracts (taxi, minibus, or passenger assistant escort), 190 school days per year.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">School</th>
                  <th className="text-left px-4 py-3 font-semibold">Primary need</th>
                  <th className="text-center px-4 py-3 font-semibold">Distance</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Each-way<br />travel time</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Annual transport<br />cost / child</th>
                </tr>
              </thead>
              <tbody>
                {travelRows.map((row, i) => (
                  <Fragment key={row.school}>
                    <tr className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="px-4 py-2.5 font-semibold text-xs">{row.school}</td>
                      <td className="px-4 py-2.5 text-xs text-muted-foreground">{row.need}</td>
                      <td className="px-4 py-2.5 text-center text-xs font-medium">{row.distance}</td>
                      <td className={`px-4 py-2.5 text-center text-xs font-bold ${parseInt(row.travelTime) > 40 ? "text-destructive" : "text-amber-700"}`}>{row.travelTime}</td>
                      <td className="px-4 py-2.5 text-center text-xs font-bold text-destructive">{row.annualTransportCost}</td>
                    </tr>
                    <tr className={`${i % 2 === 0 ? "bg-background" : "bg-muted/20"} border-b border-border`}>
                      <td colSpan={5} className="px-4 pb-3 text-xs text-muted-foreground italic">{row.note}</td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-900 leading-relaxed">
            <strong>The human cost behind the financial cost:</strong> A 7-year-old with autism spending 50 minutes each way in a taxi — arriving at school already fatigued — learns less, struggles more with transitions, and is more likely to have meltdowns that staff must manage. Distance is not a neutral inconvenience for these children. It is an active harm. The transport money is not just wasteful — it is buying a worse educational outcome than local provision would deliver.
          </div>
          <p className="text-xs text-muted-foreground mt-2">Sources: DfE school transport cost benchmarks 2023; LaingBuisson SEN transport survey 2023; Suffolk transport contractor framework data (published procurement).</p>
        </section>

        {/* Financial Analysis */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Is David's Policy Workable? — The Financial Analysis</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
            David's core argument: redirect a portion of the SEND transport budget into building local provision at Mildenhall's schools. Below is a comparison of what the current model costs against what investment in local provision would cost — and how many children each option serves.
          </p>
          <p className="text-muted-foreground text-xs mb-6 italic">
            Assumptions: approximately 20–25 Mildenhall-area children currently transported to out-of-area specialist placements. Average transport cost per child: ~£11,000–£14,000/year. ARP (Additionally Resourced Provision) is a designated specialist unit attached to a mainstream school — typically 8–16 places, with specialist staff and adapted facilities.
          </p>
          <div className="space-y-4">
            {investmentRows.map(({ option, annualCost, childrenServed, costPerChild, proscons, detail }) => {
              const border = proscons === "pros" ? "border-green-300 bg-green-50" : proscons === "mixed" ? "border-amber-200 bg-amber-50" : "border-red-200 bg-red-50";
              const badge = proscons === "pros"
                ? <span className="text-xs font-bold text-green-800 bg-green-200 px-2 py-0.5 rounded">More cost-effective</span>
                : proscons === "mixed"
                ? <span className="text-xs font-bold text-amber-800 bg-amber-200 px-2 py-0.5 rounded">Comparable cost</span>
                : <span className="text-xs font-bold text-red-800 bg-red-200 px-2 py-0.5 rounded">Current model</span>;
              return (
                <div key={option} className={`border-2 rounded-xl p-5 ${border}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="font-bold text-sm text-foreground flex-1">{option}</h3>
                    {badge}
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center">
                      <div className="text-sm font-bold text-primary">{annualCost}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Annual cost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-primary">{childrenServed}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Children served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-primary">{costPerChild}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Cost per child/yr</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              );
            })}
          </div>

          {/* Verdict */}
          <div className="mt-6 bg-slate-800 text-white rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <h3 className="text-xl font-serif font-bold">Verdict — Is the Policy Cost-Effective?</h3>
            </div>
            <div className="space-y-3 text-white/85 text-sm leading-relaxed">
              <p>
                <strong className="text-white">Yes — with caveats.</strong> The financial case for investing in local SEND provision is robust when compared to the recurring cost of out-of-area transport. The key findings:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "Investing in specialist TAs and SENCO capacity costs approximately £3,500–£5,000 per child per year — compared to £11,000–£24,000 in transport alone.",
                  "An ARP unit at Mildenhall College Academy would cost roughly the same per-child as current transport costs — but the investment builds lasting local capacity, not annual rental of a taxi.",
                  "Early intervention (supporting children before they reach EHC plan threshold) prevents the most expensive outcomes entirely — specialist residential placements can cost £80,000–£200,000 per year.",
                  "The policy does not eliminate all out-of-area placements — children with the most complex or rare needs will still require specialist schools. But for the majority of transported children, local provision is both deliverable and cheaper.",
                  "Suffolk County Council's high-needs block (the dedicated funding for SEND) is already under serious pressure. Redirecting transport savings into early intervention and local resource bases is the fiscally and educationally rational response.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/70 text-xs mt-4">
                <strong className="text-white/90">Caveat:</strong> This analysis uses published cost benchmarks. Precise local transport contract values for the Mildenhall Division are not publicly available from Suffolk CC. David will formally request this data from the Council under his first year in office and commission an independent assessment of local SEND provision gaps.
              </p>
            </div>
          </div>
        </section>

        {/* Local Schools */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">SEND in Mildenhall's Local Schools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                school: "Mildenhall College Academy (Secondary + MCA6 Sixth Form)",
                type: "Academy, Yr 7–13, ~1,200 pupils incl. MCA6 sixth formers",
                sendRate: "~22–25% identified SEND",
                provision: "SENCO in post; TA support; some in-class differentiation. No ARP or specialist resource base. Limited SALT or OT in-school provision. MCA6 sixth form is available for post-16 study.",
                gap: "No dedicated SEND resource unit; children with EHC plans and complex needs must travel out of area. SENCO capacity stretched — national shortage of qualified SENCOs is acute. SEND pupils in MCA6 may also lack adequate specialist sixth-form support.",
                color: "border-primary bg-primary/5",
              },
              {
                school: "St Mary's C of E Primary, Mildenhall",
                type: "Primary, 405 pupils (capacity 420 — near full)",
                sendRate: "~20–23% identified SEND",
                provision: "SENCO in post. TA provision. Good relationship with parents — early identification strong. Church of England foundation with a pastoral ethos. Limited specialist TA for complex needs.",
                gap: "At near-capacity, SENCO and TA resources are stretched across a large roll. Academy trust SEND support can be inconsistent — families should ask directly about the school's current specialist provision before assuming it matches their child's needs.",
                color: "border-amber-600 bg-amber-50",
              },
              {
                school: "Great Heath Academy (Primary)",
                type: "Primary Academy, Nursery–Yr 6, Mildenhall — 522 pupils (capacity 420, significantly oversubscribed)",
                sendRate: "~22–26% identified SEND (estimated)",
                provision: "SENCO in post. TA support across year groups. Full primary range — Nursery through Year 6 — means SEND identification spans from the earliest years through KS2. As an oversubscribed academy, demand for places is high; SEND resources must stretch across a large and growing roll.",
                gap: "Oversubscription creates pressure on SENCO capacity and TA allocation. High demand for places may make it harder for families with children who have complex needs to secure a place near home. SALT and OT access follows the same NHS waiting-time constraints as other local primaries — early referral is essential.",
                color: "border-purple-600 bg-purple-50",
              },
            ].map(({ school, type, sendRate, provision, gap, color }) => (
              <div key={school} className={`border-2 rounded-xl p-5 ${color}`}>
                <h3 className="font-serif font-bold text-sm text-foreground mb-1">{school}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-muted-foreground mb-3">
                  <span>{type}</span>
                  <span className="font-semibold text-amber-700">{sendRate}</span>
                </div>
                <div className="mb-2">
                  <span className="text-xs font-bold text-green-800 uppercase tracking-wide">What exists: </span>
                  <span className="text-xs text-muted-foreground">{provision}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <AlertTriangle className="w-3 h-3 text-destructive shrink-0 mt-0.5" />
                  <span className="text-xs text-destructive leading-relaxed">{gap}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Resources */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Support for SEND Families</h2>
          <p className="text-muted-foreground text-sm mb-6">Free advice, legal support, and local services — you do not have to navigate this alone.</p>
          <div className="space-y-6">
            {supportLinks.map(({ cat, col, items }) => (
              <div key={cat}>
                <h3 className={`font-serif font-bold text-sm uppercase tracking-wide mb-3 ${colHead[col]}`}>{cat}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map(({ name, url, desc, phone }) => (
                    <div key={name} className={`border rounded-xl p-4 ${colBg[col]}`}>
                      <h4 className={`font-bold text-sm mb-1 ${colHead[col]}`}>{name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">{desc}</p>
                      {phone && (
                        <div className="text-xs font-bold text-foreground mb-1">📞 {phone}</div>
                      )}
                      <a href={url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                        <ExternalLink className="w-3 h-3" />
                        {url.replace("https://www.", "").replace("https://", "")}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* David's Commitments */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">David's Commitments on SEND</h2>
          <div className="space-y-4">
            {[
              { c: "Formally request Suffolk CC's Mildenhall SEND transport data", d: "In his first year, David will make a formal request to Suffolk County Council for the full cost of SEND transport from the Mildenhall Division — by school, by need type, and by year. This data must be public before any meaningful financial case for local investment can be fully made." },
              { c: "Commission an independent SEND provision gap analysis", d: "Work with Mildenhall's schools, Suffolk SENDIASS, and IPSEA to map the gap between children's needs and available local provision — identifying which children could be supported locally with the right resource, and what that resource would cost." },
              { c: "Push for an ARP unit at Mildenhall College Academy", d: "Campaign for Suffolk County Council to designate and fund an Additionally Resourced Provision unit at Mildenhall College Academy — providing 12–16 specialist places for pupils with autism, SLCN, or moderate learning difficulties, keeping children local and building expertise in the community." },
              { c: "Invest transport savings in specialist TA and SENCO capacity", d: "Advocate for any savings from reduced transport costs to be ringfenced for specialist teaching assistants and enhanced SENCO hours across Mildenhall's primary schools — prioritising early intervention before needs escalate." },
              { c: "End EHC plan delays in Suffolk", d: "Hold Suffolk County Council to account at every scrutiny committee and cabinet meeting for its EHC plan completion rate. 36–40% within the statutory 20 weeks is a failure of legal duty. Every delayed plan means a child without support they are legally entitled to." },
              { c: "Support families navigating the SEND system", d: "Establish a local SEND information drop-in — connecting families with Suffolk SENDIASS, IPSEA, and voluntary sector support — so no parent in the Mildenhall Division has to navigate the system alone or pay for legal advice they should not need." },
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
          <Link href="/policies/education" className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Education
          </Link>
          <Link href="/contact" className="px-5 py-2.5 bg-destructive text-white font-bold rounded-xl text-sm shadow hover:bg-destructive/90 transition-colors">
            Contact David about SEND
          </Link>
        </div>
      </div>
    </div>
  );
}
