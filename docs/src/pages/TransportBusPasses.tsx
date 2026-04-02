import { Link } from "wouter";
import {
  ArrowLeft, Bus, Globe, Phone, CheckCircle, XCircle, AlertTriangle,
  Clock, MapPin, Users, Info, ChevronRight, ExternalLink, Accessibility,
  CalendarClock, ShieldCheck
} from "lucide-react";

// ─── ELIGIBILITY CRITERIA ─────────────────────────────────────────────────────
const disabledCriteria = [
  { criterion: "Blind or partially sighted", detail: "Registered as blind or partially sighted, or have visual acuity in your better eye not exceeding 6/18 with correction." },
  { criterion: "Profoundly or severely deaf", detail: "Without a hearing aid or cochlear implant you cannot hear conversational speech at all or only in ideal conditions." },
  { criterion: "Learning disability", detail: "Arrested or incomplete physical development including significant intellectual disability resulting from serious damage to or disease of the brain." },
  { criterion: "Substantial mobility impairment", detail: "Cannot walk or have a progressive disease of walking likely to worsen. Includes some people using wheelchairs or mobility scooters." },
  { criterion: "No arms or unable to operate a vehicle", detail: "Armless, or without the use of both hands — preventing you from operating a motor vehicle." },
  { criterion: "Any other disability", detail: "Assessed by the travel concession authority as likely to cause undue hardship if not permitted to use concessionary travel." },
];

// ─── LOCAL BUS ROUTES ─────────────────────────────────────────────────────────
const localRoutes = [
  {
    route: "357",
    operator: "Coach Services / Mulleys Motorways",
    colour: "blue",
    parishes: ["Mildenhall", "Worlington", "Freckenham"],
    journey: "Mildenhall Bus Station → Worlington (Walnut Tree / War Memorial) → Freckenham (Elms Road / East View) → Red Lodge → Herringswell → Tuddenham → Cavenham → Risby → West Suffolk College → Bury St Edmunds Bus Station",
    note: "The only through bus for Worlington and Freckenham. Limited trips per day. This is the lifeline route for two of our most rural parishes — and it is under constant threat from funding cuts.",
    passValid: true,
  },
  {
    route: "16",
    operator: "Stephensons",
    colour: "green",
    parishes: ["Mildenhall"],
    journey: "Newmarket → Red Lodge → Mildenhall → Icklingham → Lackford → Flempton → Fornhams → Bury St Edmunds",
    note: "Key route for Mildenhall residents travelling toward Newmarket and Bury St Edmunds. Does not directly serve Barton Mills, Worlington, or Freckenham.",
    passValid: true,
  },
  {
    route: "355",
    operator: "Check Traveline for current operator",
    colour: "purple",
    parishes: ["Mildenhall"],
    journey: "Serves Mildenhall — check Traveline for full timetable and current stops",
    note: "One of the inter-urban routes serving Mildenhall town. Timetables subject to change — always check Traveline or the Suffolk bus pages before travelling.",
    passValid: true,
  },
  {
    route: "358 / 200 / 201",
    operator: "Various",
    colour: "slate",
    parishes: ["Mildenhall"],
    journey: "Additional local and inter-urban routes serving Mildenhall",
    note: "These routes serve Mildenhall town. Timetables and exact coverage vary — use Traveline or Suffolk CC bus pages for current schedules.",
    passValid: true,
  },
  {
    route: "955",
    operator: "School service — open to public on school days only",
    colour: "amber",
    parishes: ["Barton Mills", "Mildenhall"],
    journey: "West Row → Mildenhall → Barton Mills → Icklingham → Lackford → Flempton → Hengrave → Fornham → Bury St Edmunds / West Suffolk College",
    note: "Runs on school days only, at school times. Barton Mills residents can board this service, but it does not operate outside term time. For other journeys, Connecting Communities dial-a-ride is the primary option.",
    passValid: true,
  },
];

// ─── NATIONAL PICTURE ─────────────────────────────────────────────────────────
const nationalStats = [
  { value: "~9 million", label: "Concessionary travel passes in England", sub: "DfT Bus Statistics 2022-23 — approximately 8.9–9.5 million passes in force at any time" },
  { value: "~90%", label: "Are older person passes", sub: "Issued on age grounds (State Pension age, currently 66). The remaining ~10% are disabled person passes." },
  { value: "70–80%", label: "Take-up rate for older passes", sub: "Of all eligible older residents in England, roughly three-quarters hold a pass. Take-up is slightly lower in rural areas." },
  { value: "Free", label: "Cost of the pass itself", sub: "The pass is issued free of charge. The government reimburses bus operators for the journeys made." },
];

// ─── WHAT IT COVERS ───────────────────────────────────────────────────────────
const coverageYes = [
  "Free travel on eligible local bus services anywhere in England (not just locally)",
  "Valid from 09:30 to 23:00 Monday to Friday",
  "Valid all day on weekends (Saturday, Sunday) and bank holidays",
  "Accepted on most local council-contracted bus services",
  "Valid for life once issued — no renewal needed if circumstances don't change",
  "Can be used across England — if you visit another area, your Suffolk pass is accepted",
];

const coverageNo = [
  "Cannot be used before 09:30 on weekdays (this is a national rule, not Suffolk's choice)",
  "Not valid on coaches, express services, or National Express routes",
  "Not valid on trains or trams",
  "Not valid in Scotland, Wales, or Northern Ireland (those nations have their own schemes)",
  "Companion passes are not automatic — a separate application is needed for a companion",
];

// ─── WHAT YOU NEED TO APPLY ───────────────────────────────────────────────────
const applyDocuments = [
  { doc: "Proof of age or disability", detail: "Passport, driving licence, birth certificate, or (for disability) a letter from DWP confirming a qualifying benefit or condition." },
  { doc: "Proof of address in Suffolk", detail: "Utility bill, bank statement, or official letter dated within the last 3 months showing your name and Suffolk address." },
  { doc: "A recent passport-style photograph", detail: "Required for the pass itself. Can often be uploaded online. Must be a clear, recent likeness — not more than 6 months old." },
  { doc: "NHS number (helpful but not always required)", detail: "Speeds up processing if applying on disability grounds. Find yours on an NHS letter, prescription, or by contacting your GP." },
];

export default function TransportBusPasses() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero */}
      <div className="bg-primary text-white pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/policies/transport" className="inline-flex items-center gap-2 text-accent hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Transport policy
          </Link>
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
            <Bus className="w-4 h-4" aria-hidden="true" />
            Bus Passes & Concessions · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Free Bus Passes — Who Qualifies, How to Apply, and What's Covered</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-6">
            The English National Concessionary Travel Scheme (ENCTS) entitles millions of older and disabled residents to free bus travel. In rural Mildenhall — where losing the ability to drive can mean losing independence entirely — knowing your rights and how to use them matters.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Who qualifies", href: "#who-qualifies", icon: Users },
              { label: "Local bus routes", href: "#local-routes", icon: MapPin },
              { label: "Apply now", href: "#apply", icon: CheckCircle },
            ].map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors">
                <Icon className="w-4 h-4 text-accent" />
                {label}
                <ChevronRight className="w-4 h-4 ml-auto opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-18">

        {/* National picture */}
        <section className="pt-8">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">The National Picture</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            The English National Concessionary Travel Scheme is one of Britain's most valued social entitlements — and one of the most under-claimed. Roughly one in four eligible older residents does not hold a pass. In rural areas, where people have no alternative to a car and a bus pass would matter most, take-up is slightly lower than in cities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {nationalStats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">{s.value}</div>
                <div className="font-semibold text-foreground text-xs mb-1">{s.label}</div>
                <div className="text-xs text-muted-foreground leading-snug">{s.sub}</div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900 leading-relaxed">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <strong>A note on local data:</strong> Suffolk County Council administers the scheme and publishes national-level figures, but does not publish pass numbers broken down by parish or division. This means we cannot yet say precisely "X% of Worlington residents hold a pass" — that would require an internal data request to SCC. David has committed to requesting this data through the county council's passenger transport team. What we can say is this: in parishes like Freckenham and Worlington, where the 357 is the only bus, a pass is not just useful — for those without a car, it is their only connection to the outside world.
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Source: DfT Bus Statistics — Table BUS0604a (Concessionary Travel, England). Latest available data 2022-23.</p>
        </section>

        {/* Who qualifies */}
        <section id="who-qualifies" className="scroll-mt-24 pt-6">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Who Qualifies for a Free Bus Pass?</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            There are two types of pass under the English National Concessionary Travel Scheme, both administered by Suffolk County Council.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

            {/* Older person */}
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <CalendarClock className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Older Person's Pass</h3>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">Age 66+</div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                You qualify automatically when you reach <strong className="text-foreground">State Pension age</strong> — currently 66. The qualifying age is set nationally by central government and may rise in future as pension age increases. You must be ordinarily resident in England (living in Suffolk qualifies).
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-green-900">
                <strong>You do not need to be claiming your State Pension to qualify.</strong> The pass is based on having reached pension age, not on whether you have claimed your pension.
              </div>
            </div>

            {/* Disabled person */}
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Accessibility className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Disabled Person's Pass</h3>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">Any age</div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                You qualify if you meet one of the following statutory disability criteria. Suffolk County Council assesses applications. There is no upper or lower age limit — children can qualify in some circumstances.
              </p>
              <ul className="space-y-2">
                {disabledCriteria.map((c) => (
                  <li key={c.criterion} className="bg-muted/30 rounded-lg p-2.5">
                    <div className="font-semibold text-xs text-foreground mb-0.5">{c.criterion}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{c.detail}</div>
                  </li>
                ))}
              </ul>
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
                <strong>Not sure if you qualify?</strong> Suffolk County Council can assess you. Citizens Advice West Suffolk (0808 278 7855) can also help you understand whether your condition meets the criteria before you apply.
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm leading-relaxed">
            <strong className="text-foreground">What if someone needs a companion to travel?</strong>
            <p className="text-muted-foreground mt-1">A companion pass is not issued automatically. Some disabled people who cannot travel unaccompanied may qualify for a companion to travel free alongside them. This requires a separate assessment. Contact Suffolk County Council or Citizens Advice for details on companion pass eligibility.</p>
          </div>
        </section>

        {/* What it covers */}
        <section className="pt-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">What Your Pass Covers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-700" />
                <h3 className="font-bold text-green-900">Your pass IS valid for:</h3>
              </div>
              <ul className="space-y-2">
                {coverageYes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-green-900">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-red-700" />
                <h3 className="font-bold text-red-900">Your pass is NOT valid for:</h3>
              </div>
              <ul className="space-y-2">
                {coverageNo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-red-900">
                    <XCircle className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 text-sm text-amber-900 leading-relaxed">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <strong>The 09:30 rule explained:</strong> Passes cannot be used before 09:30 on weekdays. This is a national rule set by central government — it was introduced to prevent the scheme affecting peak commuter services. <strong>On weekends and bank holidays there is no time restriction</strong> — your pass is valid from the first service of the day. David has called for reform of the 09:30 rule, which disproportionately affects rural residents who need early buses for medical appointments and work.
              </div>
            </div>
          </div>
        </section>

        {/* Local routes */}
        <section id="local-routes" className="scroll-mt-24 pt-6">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Where Your Pass Works — Local Routes in the Mildenhall Division</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            Your concessionary pass is valid on all eligible local bus services in England — but first you need a bus to catch. The routes below are those currently serving or closest to the parishes in the Mildenhall Division. Always check current timetables before travelling, as routes and frequencies are subject to change — often at short notice.
          </p>
          <div className="space-y-4 mb-6">
            {localRoutes.map((r) => {
              const colourMap: Record<string, string> = {
                blue: "border-blue-300 bg-blue-50",
                green: "border-green-300 bg-green-50",
                purple: "border-purple-300 bg-purple-50",
                slate: "border-slate-300 bg-slate-50",
                amber: "border-amber-300 bg-amber-50",
              };
              const badgeMap: Record<string, string> = {
                blue: "bg-blue-600 text-white",
                green: "bg-green-700 text-white",
                purple: "bg-purple-700 text-white",
                slate: "bg-slate-600 text-white",
                amber: "bg-amber-500 text-white",
              };
              return (
                <div key={r.route} className={`border-2 rounded-2xl p-5 ${colourMap[r.colour]}`}>
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <span className={`text-lg font-bold px-3 py-1 rounded-xl ${badgeMap[r.colour]}`}>Route {r.route}</span>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground">{r.operator}</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {r.parishes.map((p) => (
                          <span key={p} className="inline-flex items-center gap-1 text-xs bg-white/70 border border-white rounded-lg px-2 py-0.5 text-foreground font-medium">
                            <MapPin className="w-3 h-3" />{p}
                          </span>
                        ))}
                      </div>
                    </div>
                    {r.passValid && (
                      <span className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-green-800 bg-green-100 border border-green-300 px-2 py-1 rounded-lg">
                        <CheckCircle className="w-3.5 h-3.5" />Pass accepted
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-foreground mb-2">{r.journey}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.note}</p>
                </div>
              );
            })}
          </div>

          {/* Connecting Communities */}
          <div className="bg-card border-2 border-dashed border-primary/30 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <Bus className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Connecting Communities — Suffolk Dial-a-Ride for Areas Without a Bus</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  For parishes and areas in West Suffolk where no regular bus exists — or where bus times don't suit your journey — Suffolk County Council operates the <strong className="text-foreground">Connecting Communities</strong> demand-responsive transport service. You book in advance; a vehicle comes to your door. Concessionary pass holders can use Connecting Communities free during the qualifying hours.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.suffolk.gov.uk/roads-and-transport/public-transport/connecting-communities/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-2 rounded-xl text-sm hover:bg-primary/90 transition-colors"
                  >
                    <Globe className="w-4 h-4" />Find out about Connecting Communities <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:03456065859"
                    className="inline-flex items-center gap-2 bg-card border border-border font-bold px-4 py-2 rounded-xl text-sm hover:bg-muted transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />0345 606 5859
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Important:</strong> Timetables for all local routes are subject to change. Suffolk County Council has cut or reduced several services in recent years in response to funding pressures — sometimes with very short notice. David has called for a statutory minimum service level for rural communities and a requirement for proper notice and consultation before any route is reduced or withdrawn. Always check Traveline or the Suffolk bus pages for the current timetable before travelling.
          </div>
        </section>

        {/* Apply */}
        <section id="apply" className="scroll-mt-24 pt-6">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">How to Apply for Your Bus Pass</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            Suffolk County Council manages all concessionary pass applications for the county. Applications can be made online, by phone, or in person. You can apply up to <strong className="text-foreground">28 days before you reach qualifying age</strong> so your pass arrives on your birthday.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                method: "Apply Online",
                icon: Globe,
                detail: "The fastest method. Upload your documents and photo through the My Bus Pass portal. Most applications are processed within 10 working days.",
                action: "Apply via My Bus Pass",
                href: "https://mybuspass.suffolk.gov.uk/",
                primary: true,
              },
              {
                method: "Apply by Phone",
                icon: Phone,
                detail: "Call Suffolk County Council's public transport team. They can guide you through the application and arrange postal submission of documents if needed.",
                action: "0345 606 6171",
                href: "tel:03456066171",
                primary: false,
              },
              {
                method: "Apply in Person",
                icon: MapPin,
                detail: "Visit a Suffolk County Council customer service point or library. Staff can assist you with the application — particularly useful if you are not comfortable applying online.",
                action: "Find your nearest office",
                href: "https://www.suffolk.gov.uk/roads-and-transport/public-transport/bus-passes-and-concessions/apply-for-a-bus-pass/",
                primary: false,
              },
            ].map(({ method, icon: Icon, detail, action, href, primary }) => (
              <div key={method} className="bg-card border border-border rounded-xl p-5 flex flex-col">
                <Icon className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-bold text-foreground mb-2">{method}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{detail}</p>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 font-bold px-4 py-2 rounded-xl text-sm transition-colors text-center justify-center ${primary ? "bg-primary text-white hover:bg-primary/90" : "border border-primary text-primary hover:bg-primary/5"}`}
                >
                  {action}
                  {href.startsWith("http") && <ExternalLink className="w-3.5 h-3.5" />}
                </a>
              </div>
            ))}
          </div>

          <h3 className="font-serif font-bold text-foreground mb-3 text-base">What you'll need for your application</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {applyDocuments.map((d) => (
              <div key={d.doc} className="bg-card border border-border rounded-xl p-4">
                <div className="font-bold text-sm text-foreground mb-1">{d.doc}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>

          {/* Quick links */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <h3 className="font-bold text-foreground mb-3">Key links — bus passes and route planning</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  name: "My Bus Pass Portal (Suffolk)",
                  desc: "Apply online for your concessionary pass",
                  url: "https://mybuspass.suffolk.gov.uk/",
                  display: "mybuspass.suffolk.gov.uk",
                },
                {
                  name: "Suffolk CC — Bus Passes & Concessions",
                  desc: "Full scheme guidance, eligibility, and application options",
                  url: "https://www.suffolk.gov.uk/roads-and-transport/public-transport/bus-passes-and-concessions/",
                  display: "suffolk.gov.uk/bus-passes",
                },
                {
                  name: "Traveline — Plan a Journey",
                  desc: "Find current bus timetables and plan any journey in the UK",
                  url: "https://www.traveline.info/",
                  display: "traveline.info",
                },
                {
                  name: "Suffolk Bus Routes — Find a Bus",
                  desc: "Suffolk County Council's local bus service finder",
                  url: "https://www.suffolk.gov.uk/roads-and-transport/public-transport/find-a-bus-service/",
                  display: "suffolk.gov.uk/find-a-bus",
                },
                {
                  name: "Connecting Communities — Dial-a-Ride",
                  desc: "Demand-responsive transport for rural areas without a regular bus",
                  url: "https://www.suffolk.gov.uk/roads-and-transport/public-transport/connecting-communities/",
                  display: "suffolk.gov.uk/connecting-communities",
                },
                {
                  name: "Bus Times — Live Departures",
                  desc: "Real-time bus departure information including Mildenhall",
                  url: "https://bustimes.org/localities/mildenhall",
                  display: "bustimes.org/localities/mildenhall",
                },
              ].map(({ name, desc, url, display }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 bg-white border border-border rounded-xl p-3 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
                >
                  <Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
                    <div className="text-xs text-primary/70 mt-0.5 truncate">{display}</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* David's view */}
        <section className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <Bus className="w-7 h-7 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">David's view on bus passes and rural transport</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                A bus pass is only worth having if there is a bus to catch. In Freckenham and Worlington, one route — the 357 — connects residents to the rest of the world. In Barton Mills, the only public bus is a school service that doesn't run in the holidays. That is not a transport network — it is an illusion of one.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                David will push Suffolk County Council to protect the 357, lobby for the reinstatement of cut rural services, and press for reform of the 09:30 weekday rule — which currently prevents pass holders from reaching early medical appointments on public transport.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                He will also request from Suffolk County Council the number of concessionary passes held by residents in each parish of the Mildenhall Division — because local residents deserve to know whether their community is getting the access it is entitled to.
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-start pt-2">
          <Link href="/policies/transport" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Transport policy
          </Link>
        </div>
      </div>
    </div>
  );
}
