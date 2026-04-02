import { Link } from "wouter";
import {
  GraduationCap, AlertTriangle, TrendingUp, MapPin, Users,
  HeartHandshake, Bus, School, BookOpen, ChevronRight, ExternalLink, CheckCircle
} from "lucide-react";
import { PolicySurveyBlock } from "@/components/PolicySurveyBlock";

// ─── LOCAL SCHOOLS ────────────────────────────────────────────────────────────
const localSchools = [
  {
    name: "Mildenhall Primary School",
    type: "Community Primary",
    ages: "4–11",
    location: "Mildenhall",
    ofsted: "Good",
    ofstedYear: "2022",
    website: "https://www.mildenhallprimary.co.uk",
    notes: "Largest primary in the division. Strong community links.",
  },
  {
    name: "St Mary's CofE Primary School",
    type: "Academy Converter (Primary) — Church of England",
    ages: "4–11",
    location: "Mildenhall",
    ofsted: "Good",
    ofstedYear: "2023",
    website: "https://www.stmarysmildenhall.co.uk",
    notes: "Church of England foundation. Strong pastoral provision. 405 pupils against a 420 capacity — near full but not currently oversubscribed.",
  },
  {
    name: "St John's CofE Primary School",
    type: "Community Primary",
    ages: "4–11",
    location: "Beck Row",
    ofsted: "Good",
    ofstedYear: "2022",
    website: "https://www.stjohnsbeckrow.co.uk",
    notes: "Serves Beck Row, West Row, and the wider RAF Lakenheath community.",
  },
  {
    name: "Barton Mills CofE Primary School",
    type: "Voluntary Controlled Primary",
    ages: "4–11",
    location: "Barton Mills",
    ofsted: "Good",
    ofstedYear: "2021",
    website: "https://www.bartonmills.suffolk.sch.uk",
    notes: "Small village school. Close community feel.",
  },
  {
    name: "Worlington CofE Primary School",
    type: "Voluntary Controlled Primary",
    ages: "4–11",
    location: "Worlington",
    ofsted: "Good",
    ofstedYear: "2022",
    website: "https://www.worlington.suffolk.sch.uk",
    notes: "Very small rural school — currently under 50 pupils. At risk if numbers fall further.",
  },
  {
    name: "Great Heath Academy",
    type: "Primary Academy",
    ages: "3–11",
    location: "Mildenhall",
    ofsted: "Good",
    ofstedYear: "2024",
    website: "https://greatheathacademy.attrust.org.uk",
    notes: "Full primary including Nursery (ages 3–11). Significantly oversubscribed — 522 pupils against a 420 capacity. Part of the Academy Transformation Trust (ATT). Ofsted: Good (January 2024). SEND provision available — see the SEND page for detail.",
    sendNote: true,
  },
  {
    name: "Mildenhall College Academy (MCA)",
    type: "Academy Secondary + Sixth Form (MCA6)",
    ages: "11–18",
    location: "Mildenhall",
    ofsted: "Good",
    ofstedYear: "2024",
    website: "https://www.mca.school",
    notes: "The division's only secondary, with its own sixth form branded MCA6. ~1,330 pupils including sixth formers. Ofsted: Good (May 2024 short inspection). Subject offer at MCA6 is developing — students wanting specialist A-level combinations or Level 3 vocational courses may still need to travel.",
  },
];

// ─── SCHOOL DEMOGRAPHICS ──────────────────────────────────────────────────────
const schoolDemographics = [
  {
    name: "Great Heath Academy",
    phase: "Primary (Nursery–Yr 6)",
    gender: "~50% girls / ~50% boys",
    ethnicity: [
      { group: "White British", pct: "~55%" },
      { group: "White Other (incl. Eastern European)", pct: "~20%" },
      { group: "Mixed heritage", pct: "~8%" },
      { group: "Asian / Asian British", pct: "~6%" },
      { group: "Black / Black British", pct: "~5%" },
      { group: "Other / unclassified", pct: "~6%" },
    ],
    eal: "~28%",
    note: "Higher White Other proportion reflects Eastern European communities settled in Mildenhall post-2004 EU expansion.",
  },
  {
    name: "St Mary's CofE Primary",
    phase: "Primary (Yr 1–Yr 6)",
    gender: "~50% girls / ~50% boys",
    ethnicity: [
      { group: "White British", pct: "~62%" },
      { group: "White Other (incl. Eastern European)", pct: "~15%" },
      { group: "Mixed heritage", pct: "~7%" },
      { group: "Asian / Asian British", pct: "~5%" },
      { group: "Black / Black British", pct: "~4%" },
      { group: "Other / unclassified", pct: "~7%" },
    ],
    eal: "~22%",
    note: "CofE character does not restrict admissions — open to children of all faiths and none. Slightly higher White British proportion than nearby academies.",
  },
  {
    name: "Mildenhall College Academy",
    phase: "Secondary + MCA6 Sixth Form",
    gender: "~51% girls / ~49% boys",
    ethnicity: [
      { group: "White British", pct: "~60%" },
      { group: "White Other (incl. Eastern European)", pct: "~16%" },
      { group: "Mixed heritage", pct: "~8%" },
      { group: "Asian / Asian British", pct: "~5%" },
      { group: "Black / Black British", pct: "~4%" },
      { group: "Other / unclassified", pct: "~7%" },
    ],
    eal: "~24%",
    note: "Secondary catchment draws from across the whole division — Beck Row, Barton Mills, West Row — producing a broad demographic mix.",
  },
];

// ─── ATTAINMENT DATA ──────────────────────────────────────────────────────────
const attainmentRows = [
  {
    group: "All pupils — England average",
    attainment8: "46.4",
    progress8: "0.00",
    eng4Plus: "65.4%",
    note: "National benchmark",
    highlight: false,
  },
  {
    group: "All pupils — Mildenhall College Academy (est.)",
    attainment8: "~41–43",
    progress8: "~−0.2 to −0.4",
    eng4Plus: "~56–60%",
    note: "Below national average. Reflects the higher proportion of disadvantaged and SEND pupils in the intake.",
    highlight: true,
  },
  {
    group: "Disadvantaged pupils (FSM / Pupil Premium) — England",
    attainment8: "36.9",
    progress8: "−0.47",
    eng4Plus: "~50%",
    note: "Gap of ~13 points vs peers. 28% of MCA pupils are FSM-eligible — widening this gap locally.",
    highlight: false,
  },
  {
    group: "Pupils with SEND (EHC plan) — England",
    attainment8: "22.4",
    progress8: "−1.19",
    eng4Plus: "~22%",
    note: "Over 26 points below the all-pupil average. The largest attainment gap in the system.",
    highlight: false,
  },
  {
    group: "Pupils with SEN Support (no EHC plan) — England",
    attainment8: "35.1",
    progress8: "−0.69",
    eng4Plus: "~47%",
    note: "Still significantly below average. Many of these pupils need earlier, better support.",
    highlight: false,
  },
  {
    group: "Boys — England",
    attainment8: "43.3",
    progress8: "−0.15",
    eng4Plus: "~62%",
    note: "6+ points below girls nationally. In deprived areas, this gap widens further.",
    highlight: false,
  },
  {
    group: "Girls — England",
    attainment8: "49.5",
    progress8: "+0.15",
    eng4Plus: "~69%",
    note: "Girls consistently outperform boys across all measures, in all areas.",
    highlight: false,
  },
  {
    group: "Looked-after children (LAC/CLA) — England",
    attainment8: "24.4",
    progress8: "−1.08",
    eng4Plus: "~28%",
    note: "Among the lowest outcomes in the system. Suffolk has above-average rates of children in care.",
    highlight: false,
  },
  {
    group: "Children with English as an Additional Language (EAL) — England",
    attainment8: "48.2",
    progress8: "+0.09",
    eng4Plus: "67%",
    note: "EAL pupils perform close to or above average nationally — but newly arrived EAL children face significant short-term barriers.",
    highlight: false,
  },
];

// ─── WHO FALLS BEHIND ─────────────────────────────────────────────────────────
const groupAnalysis = [
  {
    group: "Disadvantaged pupils (FSM / Pupil Premium)",
    local: "28% of MCA pupils — 10 percentage points above West Suffolk average",
    gap: "~13 Attainment 8 points behind peers nationally; likely wider locally",
    why: "Poverty affects concentration, attendance, access to tutors, technology, quiet study space, and diet. For many Mildenhall families, these pressures are compounded by insecure housing and low wages.",
    solutions: [
      "Full Pupil Premium transparency — every pound must be traceable to outcomes",
      "Free school meals extended to all children in poverty (not just statutory threshold)",
      "Holiday hunger programmes and breakfast clubs funded by the council",
      "Universal access to after-school academic support and clubs",
    ],
    color: "border-red-300 bg-red-50",
    head: "text-red-900",
  },
  {
    group: "Boys — especially disadvantaged boys",
    local: "Boys represent the majority of SEMH referrals, exclusions, and unexplained absences at MCA",
    gap: "6+ points below girls nationally in Attainment 8; gap wider in deprived areas",
    why: "Boys, particularly in deprived rural areas, are more likely to disengage from a curriculum that doesn't connect to their lives or aspirations. Behaviour management that excludes rather than engages is a systemic failure.",
    solutions: [
      "Male mentoring and role-model programmes in schools",
      "Vocational and technical pathways from Year 9 onwards",
      "Alternatives to exclusion — restorative practice and in-school provision",
      "Sports, arts, and outdoor activities as educational tools, not extras",
    ],
    color: "border-blue-300 bg-blue-50",
    head: "text-blue-900",
  },
  {
    group: "Children with SEND",
    local: "26–28% of MCA pupils have identified SEND — well above England's 18.4%",
    gap: "26 points below average for EHC-plan pupils; 11 points for SEN Support pupils",
    why: "SEND pupils fall behind not because of ability but because of insufficient support, delayed assessment, and placement in mainstream settings without adequate resource. See our detailed SEND sub-page.",
    solutions: [
      "ARP (specialist resource base) at Mildenhall College Academy",
      "Early intervention — specialist TAs and SENCO capacity in primary schools",
      "Redirect SEND transport savings into local classroom provision",
      "Mandate Suffolk CC to meet its 20-week EHC plan statutory duty",
    ],
    color: "border-purple-300 bg-purple-50",
    head: "text-purple-900",
    sendLink: true,
  },
  {
    group: "Looked-after children and care-experienced young people",
    local: "Suffolk has above-average rates of children in care; many placed in rural areas including West Suffolk",
    gap: "Attainment 8 of ~24.4 vs national average of 46.4 — the largest single gap in the system",
    why: "Children in care face multiple placement changes, school moves, trauma, and instability. The education system was not designed for them — and it shows. Their outcomes are a direct result of systemic failure, not individual failing.",
    solutions: [
      "Designated Teacher for Looked-After Children in every local school",
      "Personal Education Plans that are genuinely individual and resourced",
      "Stability guarantee — minimise school moves when placements change",
      "Post-18 care-leaver education support (Suffolk CC statutory duty)",
    ],
    color: "border-amber-300 bg-amber-50",
    head: "text-amber-900",
  },
];

// ─── TRANSPORT INFO ───────────────────────────────────────────────────────────
const transportFAQ = [
  {
    q: "Is my child entitled to free school transport?",
    a: "Children of primary school age (under 8) travelling more than 2 miles to their nearest suitable school are entitled to free transport. Children of secondary school age (8–16) travelling more than 3 miles are entitled. The distance is measured by the shortest walking route, not road distance.",
  },
  {
    q: "What about sixth form / MCA6 transport?",
    a: "Post-16 students are not automatically entitled to free transport under the law. Suffolk County Council does not fund post-16 transport as of right. There is a 16–19 transport bursary available for low-income families — apply through Suffolk CC's school transport team. Some students access the Bury St Edmunds–Mildenhall bus routes; timetables should be checked carefully.",
  },
  {
    q: "How do I apply for free school transport?",
    a: "Apply online through Suffolk County Council's website. Applications should be made before the start of the school year. New applications for mid-year starters should be made as soon as the school place is confirmed.",
  },
  {
    q: "What if my child has SEND and needs specialist transport?",
    a: "If your child has an EHC plan and is placed at a specialist school, transport may be arranged as part of the plan. Contact the SEND Transport team at Suffolk CC directly. Keep records of all correspondence — transport disputes are common and families are often entitled to more than they are offered.",
  },
  {
    q: "What is David's position on school transport?",
    a: "David believes school transport should be genuinely free for all pupils within the statutory distances, with no hidden charges for escorts or out-of-hours pick-ups. For post-16, he will push Suffolk CC to introduce a subsidised or free travel pass for all students in financial need — not just those who know to apply for a bursary.",
  },
];

export default function PolicyEducation() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero */}
      <div className="bg-primary text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
            <GraduationCap className="w-4 h-4" aria-hidden="true" />
            Education · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Education</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            Where you grow up should never limit how far you go. Every child and young person in the Mildenhall Division — regardless of background, ability, or what their parents earn — deserves a first-class education within reach of home.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "MCA6", label: "Mildenhall College Academy's sixth form — A-levels locally, but subject range still developing" },
              { value: "28%", label: "of pupils eligible for Free School Meals — vs 18% West Suffolk average" },
              { value: "+34%", label: "SEND referrals since 2019 — demand far outstrips provision" },
              { value: "18 mths", label: "Disadvantaged pupils fall behind peers by age 16 — a gap driven by poverty, not ability" },
            ].map((s) => (
              <div key={s.value} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{s.value}</div>
                <div className="text-xs text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Sub-page cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/policies/send">
            <div className="flex items-start gap-4 bg-purple-50 border-2 border-purple-200 rounded-xl p-5 cursor-pointer hover:border-purple-400 transition-colors group">
              <HeartHandshake className="w-7 h-7 text-purple-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-purple-900 mb-1 text-sm">SEND — Special Educational Needs &amp; Disabilities</h3>
                <p className="text-purple-700 text-xs leading-relaxed">Prevalence data, EHC plan waiting times, transport costs, and the financial case for investing locally.</p>
                <span className="text-purple-600 font-semibold text-xs mt-2 inline-block underline">View SEND analysis →</span>
              </div>
            </div>
          </Link>
          <a href="#find-a-school">
            <div className="flex items-start gap-4 bg-blue-50 border-2 border-blue-200 rounded-xl p-5 cursor-pointer hover:border-blue-400 transition-colors group">
              <School className="w-7 h-7 text-blue-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-blue-900 mb-1 text-sm">Find a School &amp; Transport Guide</h3>
                <p className="text-blue-700 text-xs leading-relaxed">All local schools with Ofsted ratings, MCA6 sixth form, transport entitlements, and how to apply.</p>
                <span className="text-blue-600 font-semibold text-xs mt-2 inline-block underline">Jump to schools guide →</span>
              </div>
            </div>
          </a>
        </div>

        {/* The Local Picture */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">The Local Picture</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              The Mildenhall Division is served by <strong className="text-foreground">five primary schools</strong> and <strong className="text-foreground">Mildenhall College Academy (MCA)</strong>, a secondary academy rated "Good" by Ofsted (May 2024 short inspection) with approximately 1,330 pupils. MCA includes its own sixth form provision, branded <strong className="text-foreground">MCA6</strong>, offering A-levels for students who want to stay in Mildenhall post-16.
            </p>
            <p>
              MCA6 is a genuine achievement for the community — keeping post-16 education local. However, its subject offer is still developing: students seeking specialist A-level combinations, Level 3 vocational qualifications (BTECs, T-Levels), or courses not yet offered at MCA6 may still need to travel to Bury St Edmunds or elsewhere. The gap is in <strong className="text-foreground">breadth and vocational provision</strong>, not absence of sixth form altogether.
            </p>
            <p>
              The area faces a significant SEND crisis. Referrals have risen by 34% since 2019, yet specialist support in West Suffolk has not kept pace. Many families wait months — or years — for an Education, Health and Care (EHC) plan, and rural children wait the longest.
            </p>
            <p>
              Meanwhile, 28% of local pupils are eligible for Free School Meals — 10 percentage points above the West Suffolk average. Disadvantaged pupils fall behind their peers by the equivalent of 18 months by age 16. That gap is not an accident — it is the predictable consequence of a system that does not adequately compensate for poverty.
            </p>
          </div>
        </section>

        {/* Sixth Form section */}
        <section className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-blue-900 mb-3">MCA6 — Sixth Form at Mildenhall College Academy</h2>
          <div className="space-y-3 text-sm text-blue-900/80 leading-relaxed">
            <p>
              <strong className="text-blue-900">Mildenhall College Academy has a sixth form, known as MCA6.</strong> This offers A-level study for students who want to remain in the division post-16 — a significant provision for a school of this size and in an area of this profile.
            </p>
            <p>
              The school has gone through several reconfigurations over the years — from Upper School to College of Technology to Academy — and the MCA6 branding reflects the current sixth form's own identity within the wider academy. Parents and students should contact MCA directly for the current A-level and Level 3 subject offer, entry requirements, and sixth form prospectus.
            </p>
            <div className="bg-blue-100 border border-blue-300 rounded-xl p-4 mt-2">
              <div className="font-bold text-blue-900 mb-1 text-sm">What MCA6 provides:</div>
              <ul className="space-y-1 text-xs text-blue-800">
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />A-level study without leaving Mildenhall</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />Continuity of community, friendships, and staff relationships from MCA years 7–11</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />No post-16 transport cost for students who can walk or cycle</li>
              </ul>
              <div className="font-bold text-amber-900 mb-1 text-sm mt-3">The remaining gap:</div>
              <ul className="space-y-1 text-xs text-amber-800">
                <li className="flex items-start gap-2"><AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />Subject range at MCA6 is narrower than large sixth form colleges in Bury St Edmunds</li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />Level 3 vocational / technical qualifications (T-Levels, apprenticeship pathways) are limited locally</li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />Students who do not gain entry to MCA6 have no local FE College fallback — West Suffolk College is in Bury St Edmunds</li>
              </ul>
            </div>
            <a href="https://www.mca.school" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-700 font-semibold hover:underline mt-2">
              <ExternalLink className="w-3 h-3" />Visit mca.school for current sixth form information
            </a>
          </div>
        </section>

        {/* Find a School */}
        <section id="find-a-school">
          <div className="flex items-center gap-3 mb-4">
            <School className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Local Schools — Parent Guide</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5">
            All schools in and immediately serving the Mildenhall Division. Ofsted ratings shown are the most recent inspection grade. Always verify directly with the school — ratings and leadership can change.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">School</th>
                  <th className="text-left px-4 py-3 font-semibold">Type</th>
                  <th className="text-center px-4 py-3 font-semibold">Ages</th>
                  <th className="text-center px-4 py-3 font-semibold">Ofsted</th>
                  <th className="text-left px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {localSchools.map((s, i) => (
                  <tr key={s.name} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-xs text-foreground">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.location}</div>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{s.type}</td>
                    <td className="px-4 py-3 text-center text-xs font-medium">{s.ages}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800">
                        {s.ofsted} ({s.ofstedYear})
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground leading-snug">
                      {s.notes}
                      {s.sendNote && (
                        <Link href="/policies/send" className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs font-semibold hover:bg-purple-200 transition-colors">
                          SEND info →
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Find a school place", url: "https://www.suffolk.gov.uk/children-families-and-learning/schools/school-places-and-admissions", desc: "Apply for primary and secondary school places through Suffolk County Council." },
              { label: "Check Ofsted reports", url: "https://reports.ofsted.gov.uk", desc: "Read the latest Ofsted inspection report for any school in England." },
              { label: "School comparison tool", url: "https://www.compare-school-performance.service.gov.uk", desc: "Compare exam results, absence rates, and progress scores for any school." },
            ].map(({ label, url, desc }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors group">
                <ExternalLink className="w-4 h-4 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-xs text-foreground mb-1">{label}</div>
                  <div className="text-xs text-muted-foreground leading-snug">{desc}</div>
                </div>
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Sources: Ofsted inspection reports; Suffolk CC admissions. School details should be verified directly before making admissions decisions.</p>
        </section>

        {/* School Demographics */}
        <section id="school-demographics">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Who Attends Local Schools?</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            Approximate ethnicity and language data from the DfE Schools Census (most recent published year). All figures are estimates based on area-level data — exact school-level breakdowns can be verified at{" "}
            <a href="https://www.compare-school-performance.service.gov.uk" target="_blank" rel="noopener noreferrer" className="text-primary underline">compare-school-performance.service.gov.uk</a>.
            Religion of pupils, nationality, and the proportion of US military families are <strong>not collected or published</strong> in the DfE census — see the note below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {schoolDemographics.map(({ name, phase, gender, ethnicity, eal, note }) => (
              <div key={name} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-serif font-bold text-sm text-foreground mb-0.5">{name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{phase}</p>
                <div className="space-y-1 mb-3">
                  {ethnicity.map(({ group, pct }) => (
                    <div key={group} className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{group}</span>
                      <span className="font-semibold text-foreground tabular-nums">{pct}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">English as Additional Language</span>
                    <span className="font-semibold text-foreground">{eal}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Gender split</span>
                    <span className="font-semibold text-foreground">{gender}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 italic leading-snug">{note}</p>
              </div>
            ))}
          </div>

          {/* US Military note */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-serif font-bold text-sm text-blue-900 mb-2">US Military Families and Local Schools</h3>
            <p className="text-xs text-blue-800 leading-relaxed mb-2">
              RAF Lakenheath and RAF Mildenhall together host around 11,000 US Air Force personnel. Most dependents of US service members attend the on-base{" "}
              <strong>DoD Dependents Schools (DoDDS)</strong> — Lakenheath Elementary, Middle, and High School — which are US Government-funded and follow an American curriculum.
            </p>
            <p className="text-xs text-blue-800 leading-relaxed mb-2">
              A smaller number of US military families do choose local UK state schools, often for integration reasons or where base schools are at capacity. These pupils appear in DfE ethnicity data under "White Other" or "Other" categories but <strong>cannot be identified separately</strong> in published datasets. St John's CofE Primary in Beck Row — the school closest to Lakenheath's main gate — is most likely to have the highest share.
            </p>
            <p className="text-xs text-blue-800 leading-relaxed">
              If you want school-specific data on US military pupils, the route is an <strong>FOI request to the individual school</strong> or to Suffolk County Council. Some schools may also provide this informally on request. As your councillor, David Chandler would support any parent seeking this information.
            </p>
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            Sources: DfE Schools Census (area-level estimates); DoDDS school information. Religion, nationality, and military family affiliation are not collected by the DfE at school level.
          </p>
        </section>

        {/* School Transport */}
        <section id="school-transport">
          <div className="flex items-center gap-3 mb-4">
            <Bus className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">School Transport — What Are You Entitled To?</h2>
          </div>
          <div className="space-y-3">
            {transportFAQ.map(({ q, a }) => (
              <div key={q} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold text-sm text-foreground mb-2 flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed ml-6">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://www.suffolk.gov.uk/children-families-and-learning/schools/school-transport" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90 transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              Apply for school transport — Suffolk CC
            </a>
            <a href="https://www.suffolk.gov.uk/children-families-and-learning/schools/school-transport/16-to-19-transport" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border text-foreground text-xs font-bold rounded-xl hover:border-primary transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              16–19 transport bursary information
            </a>
          </div>
        </section>

        {/* Exam data & attainment gaps */}
        <section id="attainment">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Exam Results — Who Is Achieving &amp; Who Is Falling Behind</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            The table below shows GCSE performance measures for different pupil groups — comparing Mildenhall College Academy against England averages. <strong>Attainment 8</strong> is the average score across 8 subjects (max 90). <strong>Progress 8</strong> measures how much progress pupils make relative to similar pupils nationally (0 = average; negative = below). <strong>Eng &amp; Maths 4+</strong> is the "basics" measure — % achieving at least a grade 4 (old C) in both subjects.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Pupil group</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Attainment 8</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Progress 8</th>
                  <th className="text-center px-4 py-3 font-semibold whitespace-nowrap">Eng &amp; Maths 4+</th>
                  <th className="text-left px-4 py-3 font-semibold">What it means</th>
                </tr>
              </thead>
              <tbody>
                {attainmentRows.map((row, i) => (
                  <tr key={row.group} className={`${i % 2 === 0 ? "bg-background" : "bg-muted/20"} ${row.highlight ? "ring-2 ring-inset ring-primary" : ""}`}>
                    <td className={`px-4 py-3 text-xs font-medium ${row.highlight ? "text-primary font-bold" : "text-foreground"}`}>{row.group}</td>
                    <td className={`px-4 py-3 text-center text-sm font-bold ${parseFloat(row.attainment8) < 40 ? "text-destructive" : parseFloat(row.attainment8) >= 46 ? "text-green-700" : "text-amber-700"}`}>{row.attainment8}</td>
                    <td className={`px-4 py-3 text-center text-sm font-bold ${row.progress8.includes("−") || row.progress8.includes("-") ? "text-destructive" : "text-green-700"}`}>{row.progress8}</td>
                    <td className="px-4 py-3 text-center text-xs font-semibold">{row.eng4Plus}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground leading-snug">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Sources: DfE GCSE and equivalent results 2022–23; school performance data via compare-school-performance.service.gov.uk. MCA figures are estimates based on school size, FSM rate, and Suffolk district-level data — published MCA-specific figures should be verified on the DfE performance tables.</p>
        </section>

        {/* Who is falling behind — solutions */}
        <section id="falling-behind">
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Who Is Falling Behind — and What Can Be Done</h2>
          <p className="text-muted-foreground text-sm mb-6">The data shows clearly which groups are most disadvantaged. David's approach is evidence-based: understand the cause, fund the intervention, measure the outcome.</p>
          <div className="space-y-6">
            {groupAnalysis.map(({ group, local, gap, why, solutions, color, head, sendLink }) => (
              <div key={group} className={`border-2 rounded-2xl p-5 md:p-6 ${color}`}>
                <h3 className={`font-serif font-bold text-base mb-1 ${head}`}>{group}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs mb-3">
                  <span className={`font-semibold ${head}`}>Local: {local}</span>
                  <span className="text-muted-foreground">Gap: {gap}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{why}</p>
                {sendLink && (
                  <Link href="/policies/send">
                    <span className="inline-flex items-center gap-1 text-xs text-purple-700 font-bold hover:underline mb-3">
                      <ChevronRight className="w-3 h-3" />View full SEND analysis page
                    </span>
                  </Link>
                )}
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${head}`}>David's solutions:</div>
                  <ul className="space-y-1">
                    {solutions.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-current mt-1.5 shrink-0 opacity-50" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">How We Compare to Other Suffolk Areas</h2>
          <p className="text-muted-foreground mb-6 text-sm">Post-16 and further education provision across Suffolk towns — corrected to reflect MCA6.</p>
          <div className="space-y-3">
            {[
              { area: "Bury St Edmunds", detail: "King Edward VI Free School sixth form (large, wide subject range), West Suffolk College FE, multiple bus routes, rail to London in 62 mins", highlight: false },
              { area: "Newmarket", detail: "Newmarket Academy sixth form, direct bus links to Cambridge, Cambridge Regional College reachable", highlight: false },
              { area: "Haverhill", detail: "Samuel Ward Academy sixth form, SuffolkOne FE provision and apprenticeship centre", highlight: false },
              { area: "Mildenhall Division", detail: "MCA6 sixth form at Mildenhall College Academy (A-levels, developing subject range). No local FE College for vocational / technical Level 3 qualifications. Two daytime bus routes. Students wanting subjects not offered at MCA6 must travel.", highlight: true },
            ].map((c) => (
              <div
                key={c.area}
                className={`flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl border ${c.highlight ? "border-amber-400 bg-amber-50" : "border-border bg-card"}`}
              >
                <div className="flex items-center gap-2 shrink-0">
                  {c.highlight ? <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" /> : <MapPin className="w-4 h-4 text-primary shrink-0" />}
                  <strong className={`font-semibold ${c.highlight ? "text-amber-800" : "text-foreground"}`}>{c.area}</strong>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{c.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Sources: Suffolk County Council, Ofsted, ONS Census 2021. MCA sixth form (MCA6) confirmed from school communications.</p>
        </section>

        {/* Data callout */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Users, title: "Free School Meals Gap", body: "28% of MCA pupils qualify for Free School Meals — 10 percentage points above the West Suffolk average. This is the single strongest predictor of educational underachievement in the area, and it is driven by poverty, not ability." },
            { icon: TrendingUp, title: "SEND Crisis", body: "SEND referrals are up 34% since 2019. West Suffolk currently has one of the lowest rates of EHC plan completion within statutory timeframes in England, meaning children wait longer for support they are legally entitled to." },
            { icon: GraduationCap, title: "Attainment Gap", body: "Disadvantaged pupils fall behind peers by 18 months by age 16 nationally — in deprived rural areas like ours, that gap is often wider. With MCA6 now in place, the focus must shift to depth of provision and early-years investment." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-5">
              <Icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold font-serif text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </section>

        {/* Survey */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">What Do You Think?</h2>
          <p className="text-muted-foreground mb-6">You don't need to be a parent or have school-age children to have a view on education. It shapes every community. Share yours — anonymously, in under two minutes.</p>
          <PolicySurveyBlock surveyTitle="Education Survey — Mildenhall Division" />
        </section>

        {/* Commitments */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments</h2>
          <div className="space-y-4">
            {[
              { commitment: "Support and strengthen MCA6", detail: "Mildenhall has its sixth form. Now it needs resources to grow its subject offer and ensure every student who wants to study locally can do so — including vocational, technical, and creative pathways. David will push for MCA6 to be fully funded and equipped to expand." },
              { commitment: "Campaign for a local FE / vocational centre", detail: "West Suffolk College serves Bury St Edmunds. Mildenhall deserves a satellite FE presence — apprenticeship hub, T-Level delivery, adult education — so that non-academic pathways don't require a 36-mile round trip." },
              { commitment: "Push for free or subsidised transport to post-16 education", detail: "Students whose chosen course isn't available at MCA6 should not be financially penalised for travelling to access it. David will push Suffolk CC to fund a proper 16–19 transport bursary — not a hidden form most families don't know exists." },
              { commitment: "Demand full Pupil Premium accountability", detail: "Every pound of Pupil Premium allocated to Mildenhall's schools must be traced to outcomes for disadvantaged pupils — not absorbed into general budgets. Transparent annual reporting to parents and the community." },
              { commitment: "Demand more SEND resource for our area", detail: "Hold Suffolk County Council to account on EHC plan waiting times, invest transport savings in local specialist provision, and push for a dedicated ARP unit at MCA. See the full SEND sub-page for David's detailed proposals." },
              { commitment: "Support lifelong learning", detail: "Champion adult education, community literacy, and digital skills programmes — because learning doesn't stop at 18 and shouldn't be reserved for those who can pay." },
              { commitment: "Oppose academisation without community consent", detail: "Ensure that any changes to local school governance are subject to genuine community consultation, not imposed from above." },
            ].map(({ commitment, detail }) => (
              <div key={commitment} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{commitment}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
