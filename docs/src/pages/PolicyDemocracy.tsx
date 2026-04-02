import { Link } from "wouter";
import { PageSEO } from "@/components/PageSEO";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LineChart, Line,
  CartesianGrid, Legend, ReferenceLine,
} from "recharts";
import {
  Vote, Users, MapPin, AlertTriangle, ExternalLink, Info, ChevronRight,
  Building2, Layers, TrendingDown, PoundSterling, CheckCircle2, Clock,
  FileText, Shield, Landmark, UserCheck, PieChart,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const pccTurnout = [
  { year: "2012\nPCC only", suffolk: 15.5, national: 15.1, combined: false },
  { year: "2016\nPCC only", suffolk: 27.2, national: 25.9, combined: false },
  { year: "2021\nPCC + Local", suffolk: 34.8, national: 33.9, combined: true },
  { year: "2024\nPCC + Local", suffolk: 36.6, national: 35.4, combined: true },
];

const electionComparison = [
  { label: "2012 PCC (standalone)", turnout: 15.5, type: "pcc" },
  { label: "2013 By-elections (avg)", turnout: 28.5, type: "local" },
  { label: "2016 PCC (standalone)", turnout: 27.2, type: "pcc" },
  { label: "2021 County Council", turnout: 34.8, type: "local" },
  { label: "2021 PCC (combined)", turnout: 34.8, type: "pcc" },
  { label: "2024 PCC (combined)", turnout: 36.6, type: "pcc" },
  { label: "2019 General Election", turnout: 66.1, type: "general" },
  { label: "2024 General Election", turnout: 60.2, type: "general" },
];

const ruralCostData = [
  { area: "Bury St Edmunds\n(town centre)", electors: 3200, stations: 1, costPerStation: 420, label: "Urban — town" },
  { area: "Haverhill\n(town)", electors: 2800, stations: 1, costPerStation: 420, label: "Urban — town" },
  { area: "Mildenhall\n(market town)", electors: 1900, stations: 1, costPerStation: 420, label: "Mixed" },
  { area: "Barton Mills\n(village)", electors: 620, stations: 1, costPerStation: 420, label: "Rural" },
  { area: "Freckenham\n(hamlet)", electors: 210, stations: 1, costPerStation: 420, label: "Rural" },
  { area: "Worlington\n(village)", electors: 430, stations: 1, costPerStation: 420, label: "Rural" },
];

const ageTurnoutData = [
  { age: "18–24", generalElection: 43, localElection: 18, registered: 62 },
  { age: "25–34", generalElection: 51, localElection: 22, registered: 75 },
  { age: "35–44", generalElection: 57, localElection: 28, registered: 83 },
  { age: "45–54", generalElection: 63, localElection: 36, registered: 88 },
  { age: "55–64", generalElection: 71, localElection: 45, registered: 92 },
  { age: "65–74", generalElection: 77, localElection: 55, registered: 96 },
  { age: "75+",   generalElection: 72, localElection: 50, registered: 95 },
];

const genderTurnout = [
  { group: "All men", ge2024: 58, ge2019: 64, local2021: 33 },
  { group: "All women", ge2024: 62, ge2019: 67, local2021: 37 },
  { group: "Men 18–34", ge2024: 41, ge2019: 47, local2021: 16 },
  { group: "Women 18–34", ge2024: 49, ge2019: 53, local2021: 21 },
];

const ethnicityData = [
  { group: "White British", registered: 90, turnoutGE: 63, turnoutLocal: 38, westSuffolk: 94.1 },
  { group: "Asian British", registered: 78, turnoutGE: 53, turnoutLocal: 24, westSuffolk: 2.1 },
  { group: "Black British", registered: 74, turnoutGE: 47, turnoutLocal: 19, westSuffolk: 1.2 },
  { group: "Mixed heritage", registered: 72, turnoutGE: 53, turnoutLocal: 22, westSuffolk: 1.7 },
  { group: "Other ethnic", registered: 65, turnoutGE: 48, turnoutLocal: 18, westSuffolk: 0.9 },
];

const westSuffolkCensus = [
  { group: "White British", pct: 91.3, color: "hsl(222,80%,18%)" },
  { group: "White Other", pct: 2.8, color: "hsl(222,60%,40%)" },
  { group: "Asian/Asian British", pct: 2.1, color: "hsl(43,96%,42%)" },
  { group: "Mixed heritage", pct: 1.7, color: "hsl(160,60%,35%)" },
  { group: "Black/Black British", pct: 1.2, color: "hsl(350,85%,40%)" },
  { group: "Other", pct: 0.9, color: "hsl(280,60%,45%)" },
];

const devolutionTimeline = [
  { date: "Dec 2024", event: "English Devolution White Paper published by Labour Government", done: true },
  { date: "Feb 2025", event: "Suffolk County Council and all five district councils submit reorganisation proposals", done: true },
  { date: "Spring 2025", event: "Government reviews proposals — SCC (one unitary) vs districts (alternative structure)", done: true },
  { date: "25 Mar 2026", event: "DECISION: Secretary of State formally announces three new unitary councils for Suffolk", done: true, highlight: true },
  { date: "2027", event: "Elections for shadow unitary authorities — voters choose first councillors of the three new councils", done: false },
  { date: "2027", event: "Police, crime and fire & rescue powers transfer to Norfolk & Suffolk Combined County Authority (CCA) — ahead of the first elected Mayor", done: false },
  { date: "May 2028", event: "First mayoral election for the Norfolk & Suffolk Combined County Authority — Police & Crime Commissioners abolished; Mayor takes over policing accountability", done: false, highlight: true },
  { date: "April 2028", event: "Three new Suffolk unitary councils become fully operational; SCC and all five district councils formally abolished", done: false },
];

/* ─── Components ─────────────────────────────────────────────────────────────── */

const COLORS = {
  pcc: "hsl(350,85%,40%)",
  local: "hsl(43,96%,42%)",
  general: "hsl(222,80%,18%)",
};

function SectionHeader({ icon: Icon, label, title, subtitle }: { icon: React.ElementType; label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-primary mb-3">
        <Icon className="w-5 h-5" />
        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
      <h2 className="text-3xl font-serif font-bold text-primary mb-2">{title}</h2>
      {subtitle && <p className="text-muted-foreground leading-relaxed max-w-2xl">{subtitle}</p>}
    </div>
  );
}

function Callout({ icon: Icon, color, title, children }: { icon: React.ElementType; color: string; title: string; children: React.ReactNode }) {
  return (
    <div className={`border rounded-xl p-5 ${color}`}>
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-sm mb-1">{title}</p>
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function PolicyDemocracy() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Democracy & Devolution | David Chandler — Mildenhall Division"
        description="Suffolk devolution, voter registration, PCC reform, and democratic accountability for Mildenhall Division. David Chandler's democracy policy for West Suffolk County Council 2026."
        path="/policies/democracy"
      />

      {/* Hero */}
      <div className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-accent mb-4">
            <Vote className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Democracy & Civic Participation</span>
          </div>
          <h1 className="text-5xl font-serif font-bold mb-4 leading-tight">
            Your Vote,<br />Your Council,<br />Your Future
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
            Suffolk's entire democratic structure is about to change. Voter turnout is in long-term crisis. Rural voters cost more to serve than anyone admits. This page sets out the facts — and what we can do about them.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* ═══ SECTION 1: Register / Voter ID / Polling ═══════════════════════ */}
        <section aria-labelledby="register-heading">
          <SectionHeader
            icon={CheckCircle2}
            label="Your rights"
            title="Register, Vote, and Find Your Polling Station"
            subtitle="Everything you need to take part in any election — local, mayoral, or general."
          />

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {/* Register */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold font-serif text-lg text-foreground">Register to Vote</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You must be on the electoral register to vote. It takes about 5 minutes. You need your National Insurance number and your address.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />Must be 18+ to vote in county council elections</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />Register by the deadline — typically 12 working days before polling day</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />You can register at any time, not just before elections</li>
              </ul>
              <a
                href="https://www.gov.uk/register-to-vote"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-white bg-primary hover:bg-primary/90 px-4 py-2.5 rounded-xl transition-colors w-full justify-center"
              >
                Register at GOV.UK <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Voter ID */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold font-serif text-lg text-foreground">Voter Photo ID</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Since May 2023 you must show an accepted photo ID at the polling station. If you don't have one, you can get a <strong className="text-foreground">free Voter Authority Certificate</strong> from West Suffolk Council.
              </p>
              <div className="bg-muted rounded-xl p-3 space-y-1.5">
                <p className="text-xs font-bold text-foreground">Accepted ID includes:</p>
                {["Passport", "UK driving licence (full or provisional)", "Blue Badge", "Older Person's Bus Pass", "Armed Forces ID", "National identity card (EEA countries)", "Voter Authority Certificate (free)"].map(id => (
                  <p key={id} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0" /> {id}
                  </p>
                ))}
              </div>
              <a
                href="https://www.gov.uk/apply-for-photo-id-voter-authority-certificate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-amber-800 bg-amber-50 border border-amber-200 hover:bg-amber-100 px-4 py-2.5 rounded-xl transition-colors w-full justify-center"
              >
                Get free Voter ID <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Polling Station */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold font-serif text-lg text-foreground">Find Your Polling Station</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your polling station is on your poll card, sent before each election. You can also look it up online using your address.
              </p>
              <div className="bg-muted rounded-xl p-3 space-y-1.5 text-xs text-muted-foreground">
                <p className="font-bold text-foreground text-xs">Polling hours</p>
                <p>Polling stations open <strong className="text-foreground">7am–10pm</strong> on election day.</p>
                <p>You can vote any time during those hours — no appointment needed.</p>
                <p className="mt-2">If you're in the queue at 10pm, you're still entitled to vote.</p>
              </div>
              <a
                href="https://www.gov.uk/find-polling-station"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-green-800 bg-green-50 border border-green-200 hover:bg-green-100 px-4 py-2.5 rounded-xl transition-colors w-full justify-center"
              >
                Find my polling station <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <Callout icon={Info} color="bg-blue-50 border-blue-200 text-blue-900" title="West Suffolk Council — Electoral Services">
            For help with registration, postal votes, proxy votes, or Voter Authority Certificates, contact West Suffolk Council Electoral Services:&nbsp;
            <a href="https://www.westsuffolk.gov.uk/Council/Elections_and_Voting/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">westsuffolk.gov.uk/elections</a>&nbsp;
            or call <strong>01284 757 000</strong>.
          </Callout>
        </section>

        {/* ═══ SECTION 2: Suffolk Devolution ═══════════════════════════════════ */}
        <section aria-labelledby="devolution-heading">
          <SectionHeader
            icon={Landmark}
            label="Local government reform — decision confirmed 25 March 2026"
            title="Suffolk's Democratic Future: Three New Unitary Councils"
            subtitle="The most significant change to local government in Suffolk since the 1970s is confirmed. On 25 March 2026 the Government announced that three new unitary councils will replace all six existing Suffolk councils by April 2028. Here is what was decided, who backs it, who opposes it, and what it means for Mildenhall."
          />

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="space-y-5">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold font-serif text-lg text-primary mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5" /> Suffolk Today — Two Tiers
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Suffolk currently has a two-tier structure — one county council and five district or borough councils — which the Government argues is duplicative, wasteful, and creates confusion over who is responsible for what.
                </p>
                <div className="space-y-2">
                  {[
                    { name: "Suffolk County Council", role: "Education, roads, social care, fire", color: "bg-primary" },
                    { name: "West Suffolk Council", role: "Planning, housing, waste, benefits", color: "bg-primary/70" },
                    { name: "East Suffolk Council", role: "Planning, housing, waste, benefits", color: "bg-primary/60" },
                    { name: "Ipswich Borough Council", role: "Planning, housing, waste, benefits", color: "bg-primary/50" },
                    { name: "Babergh District Council", role: "Planning, housing, waste, benefits", color: "bg-primary/40" },
                    { name: "Mid Suffolk District Council", role: "Planning, housing, waste, benefits", color: "bg-primary/40" },
                  ].map(c => (
                    <div key={c.name} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${c.color} shrink-0`} />
                      <div>
                        <span className="text-sm font-semibold text-foreground">{c.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">— {c.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  6 councils. 6 chief executives. 6 sets of back-office costs. All serving one county.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Decision banner */}
              <div className="bg-green-600 text-white rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 text-green-100">Decision confirmed — 25 March 2026</p>
                    <p className="font-bold font-serif text-lg leading-snug">Three new unitary councils will replace Suffolk's current six-council structure</p>
                    <p className="text-sm text-green-100 mt-2 leading-relaxed">
                      The Secretary of State has formally decided. Suffolk County Council, West Suffolk, East Suffolk, Ipswich Borough, Babergh, and Mid Suffolk District councils will all be abolished and replaced by three new authorities from April 2028.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold font-serif text-lg text-primary mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5" /> The Two Sides of the Debate
                </h3>
                <div className="space-y-3">
                  <div className="border border-destructive/30 bg-destructive/5 rounded-xl p-4">
                    <p className="text-xs font-bold text-destructive uppercase tracking-wider mb-2">Suffolk County Council — Strongly Opposes</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      SCC argues a <strong className="text-foreground">single unitary authority</strong> would have been more financially resilient. They claim the three-unitary model will leave Suffolk <strong className="text-foreground">£145 million worse off</strong> in the first five years, risk service disruption for vulnerable residents, and that the Government ignored the evidence supporting a county-wide model.
                    </p>
                  </div>
                  <div className="border border-green-300 bg-green-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2">All Five District &amp; Borough Councils — Welcome the Decision</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Babergh, East Suffolk, Ipswich, Mid Suffolk, and West Suffolk councils all support the outcome. They argue three councils will be <strong className="text-foreground">"large enough to deliver, local enough to care"</strong> — better aligned to the distinct communities of Suffolk and more locally accountable than a single giant authority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CCA / Mayor panel */}
          <div className="bg-indigo-950 text-white rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-5">
              <Landmark className="w-5 h-5 text-indigo-300 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-1">Above the three unitaries</p>
                <h3 className="font-bold font-serif text-xl leading-snug">Norfolk &amp; Suffolk Combined County Authority — with an Elected Mayor</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-xs font-bold text-indigo-200 uppercase tracking-wider mb-2">What it is</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  A new Norfolk &amp; Suffolk Combined County Authority (CCA) will sit above the unitary councils, led by a directly elected Mayor with strategic powers over transport, housing, economic growth — and crucially, <strong className="text-white">policing and fire &amp; rescue</strong>.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-xs font-bold text-indigo-200 uppercase tracking-wider mb-2">The election date — delayed</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  The first mayoral election was originally planned for <strong className="text-white">May 2026</strong>. The Government has since announced it is <strong className="text-white">"minded to move the election to May 2028"</strong> — aligning it with the new unitary councils' launch.
                </p>
              </div>
              <div className="bg-amber-400/20 border border-amber-400/30 rounded-xl p-4">
                <p className="text-xs font-bold text-amber-200 uppercase tracking-wider mb-2">PCCs abolished — Mayor takes over</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Suffolk's Police &amp; Crime Commissioner — currently Tim Passmore — will be <strong className="text-white">abolished</strong>. From 2027, police, crime, and fire accountability transfers to the CCA, then from May 2028 to the elected Mayor. The 2024 PCC election was most likely the <strong className="text-white">last ever</strong> in Suffolk.
                </p>
              </div>
            </div>
            <div className="mt-4 bg-white/5 rounded-xl p-4 grid sm:grid-cols-4 gap-3">
              {[
                { q: "Will Suffolk & Norfolk have a Mayor?", a: "Yes — confirmed" },
                { q: "Is the election still happening?", a: "Yes — delayed to May 2028" },
                { q: "Are PCCs being abolished?", a: "Yes — replaced by Mayor" },
                { q: "When do policing powers transfer?", a: "From 2027 (pre-election)" },
              ].map(item => (
                <div key={item.q} className="text-xs">
                  <p className="text-indigo-200 mb-1">{item.q}</p>
                  <p className="font-bold text-white">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <h3 className="font-bold font-serif text-lg text-primary mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5" /> What Happens Next
            </h3>
            <div className="space-y-4">
              {devolutionTimeline.map((item, i) => (
                <div key={i} className={`flex gap-4 items-start rounded-xl p-3 ${(item as any).highlight ? "bg-green-50 border border-green-200" : ""}`}>
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${item.done ? (item as any).highlight ? "bg-green-600" : "bg-primary" : "bg-border"}`}>
                      {item.done ? <CheckCircle2 className="w-4 h-4" /> : <span>{i + 1}</span>}
                    </div>
                    {i < devolutionTimeline.length - 1 && (
                      <div className={`w-0.5 h-8 mt-1 ${item.done ? "bg-primary/30" : "bg-border"}`} />
                    )}
                  </div>
                  <div className="pb-2">
                    <span className={`text-xs font-bold ${(item as any).highlight ? "text-green-700" : item.done ? "text-primary" : "text-muted-foreground"}`}>{item.date}</span>
                    <p className={`text-sm leading-snug mt-0.5 ${item.done ? "text-foreground font-medium" : "text-muted-foreground"}`}>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Callout icon={AlertTriangle} color="bg-amber-50 border-amber-200 text-amber-900" title="What this means for Mildenhall Division">
              <strong>West Suffolk Council will be abolished by April 2028.</strong> The planning, housing, waste, and benefits services you currently deal with through West Suffolk will transfer to one of the three new unitary councils. Your county division councillor role — the post David Chandler is standing for — will continue, as divisional boundaries are retained within the new structure. Shadow authority elections take place in <strong>2027</strong>.
            </Callout>
            <Callout icon={Vote} color="bg-primary/5 border-primary/20 text-foreground" title="David Chandler's position">
              Three councils is not inherently better or worse than one — what matters is whether power is devolved <em>downwards</em> to communities like Mildenhall, not just reorganised between tiers. David will push for local area committees with real budgets, parish councils with more say, and a transition that does not disrupt care services for the most vulnerable during the switchover period.
            </Callout>
          </div>
        </section>

        {/* ═══ SECTION 3: Turnout Crisis ═══════════════════════════════════════ */}
        <section aria-labelledby="turnout-heading">
          <SectionHeader
            icon={TrendingDown}
            label="The evidence"
            title="Voter Turnout Since Police and Crime Commissioners Were Created (2012)"
            subtitle="The creation of PCCs in 2012 introduced the lowest-ever recorded turnout in English electoral history. Twelve years on, the data tells a troubling story about public engagement with local democracy."
          />

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 text-center">
              <p className="text-5xl font-serif font-bold text-destructive mb-2">15.5%</p>
              <p className="text-sm font-semibold text-foreground">Suffolk turnout<br />2012 PCC election</p>
              <p className="text-xs text-muted-foreground mt-2">The lowest Suffolk turnout since universal suffrage. 84.5% of registered voters did not vote.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
              <p className="text-5xl font-serif font-bold text-amber-700 mb-2">36.6%</p>
              <p className="text-sm font-semibold text-foreground">Suffolk turnout<br />2024 PCC election (combined)</p>
              <p className="text-xs text-muted-foreground mt-2">Only improved when combined with other elections. This was also likely the <strong className="text-foreground">last ever PCC election</strong> in Suffolk — the role is being abolished.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <p className="text-5xl font-serif font-bold text-green-700 mb-2">60.2%</p>
              <p className="text-sm font-semibold text-foreground">West Suffolk turnout<br />2024 General Election</p>
              <p className="text-xs text-muted-foreground mt-2">General elections consistently attract over 60% participation — the contrast with local elections is stark.</p>
            </div>
          </div>

          {/* PCC turnout chart */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="font-bold font-serif text-lg text-primary mb-2">PCC Election Turnout — Suffolk (2012–2024)</h3>
            <p className="text-xs text-muted-foreground mb-6">Shaded bars indicate elections combined with other votes. Standalone PCC elections produce dramatically lower turnout.</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pccTurnout} margin={{ top: 5, right: 10, left: -15, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,92%)" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 70]} tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
                  <Tooltip formatter={(v: number) => [`${v}%`, ""]} />
                  <Legend />
                  <ReferenceLine y={50} stroke="hsl(160,60%,35%)" strokeDasharray="4 4" label={{ value: "50% threshold", fontSize: 10, fill: "hsl(160,60%,35%)" }} />
                  <Bar dataKey="suffolk" name="Suffolk" fill="hsl(222,80%,18%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="national" name="England average" fill="hsl(43,96%,42%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Comparison chart */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="font-bold font-serif text-lg text-primary mb-2">Turnout by Election Type — Suffolk/West Suffolk</h3>
            <p className="text-xs text-muted-foreground mb-6">The same electorate. Radically different participation depending on which election they are voting in.</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={electionComparison}
                  layout="vertical"
                  margin={{ top: 5, right: 40, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,92%)" horizontal={false} />
                  <XAxis type="number" domain={[0, 80]} tick={{ fontSize: 10 }} tickFormatter={(v) => `${v}%`} />
                  <YAxis type="category" dataKey="label" tick={{ fontSize: 10 }} width={160} />
                  <Tooltip formatter={(v: number) => [`${v}%`, "Turnout"]} />
                  <ReferenceLine x={50} stroke="hsl(160,60%,35%)" strokeDasharray="4 4" />
                  <Bar dataKey="turnout" radius={[0, 4, 4, 0]}>
                    {electionComparison.map((entry, i) => (
                      <Cell
                        key={i}
                        fill={
                          entry.type === "general" ? COLORS.general :
                          entry.type === "pcc" ? COLORS.pcc : COLORS.local
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              {[["PCC elections", COLORS.pcc], ["Local elections", COLORS.local], ["General elections", COLORS.general]].map(([label, color]) => (
                <div key={label as string} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: color as string }} />
                  <span className="text-xs text-muted-foreground">{label as string}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <h4 className="font-bold text-foreground font-serif">Why Does Turnout Matter?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When only 15% of people vote, the winning candidate can be elected by 8–9% of the total electorate. This gives a powerful position — the Police and Crime Commissioner controls a budget of over <strong className="text-foreground">£200 million per year</strong> in Suffolk — without a democratic mandate from the majority of residents.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Low turnout systematically disadvantages communities with less political engagement — including elderly rural residents, disabled people who struggle to travel to polling stations, and younger voters who feel disconnected from local democracy.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <h4 className="font-bold text-foreground font-serif">The PCC Experiment — Coming to an End</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The creation of Police and Crime Commissioners in 2012 was justified as bringing democratic accountability to policing. The evidence shows the opposite: it created one of the least engaged elected offices in British political history. Standalone PCC elections cost millions to run for turnouts that make the result democratically questionable.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Combining them with other elections improved participation — which tells us voters engage when elections feel meaningful. The answer is more joined-up democracy, not more isolated offices.
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 mt-2">
                <p className="text-xs font-bold text-indigo-700 mb-1">Update: PCCs being abolished for Suffolk &amp; Norfolk</p>
                <p className="text-xs text-indigo-900 leading-relaxed">
                  The Government has confirmed that the Police &amp; Crime Commissioner role will be abolished for Suffolk and Norfolk. Policing and fire accountability will transfer to the new <strong>Norfolk &amp; Suffolk Combined County Authority</strong> from 2027, then to its directly elected Mayor from May 2028. The 2024 PCC election was almost certainly the last in Suffolk's history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3b: Demographics ═══════════════════════════════════════════ */}
        <section aria-labelledby="demographics-heading">
          <SectionHeader
            icon={UserCheck}
            label="Who votes — and who doesn't"
            title="The Democratic Participation Gap: Age, Gender and Ethnicity"
            subtitle="Voter turnout is not evenly distributed across society. Younger people, ethnic minority communities, and men under 35 are all significantly less likely to vote — especially in local elections. Here is what the data shows for Suffolk and nationally."
          />

          {/* Age */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="font-bold font-serif text-lg text-primary mb-2">Turnout and Registration by Age Group (UK National Data)</h3>
            <p className="text-xs text-muted-foreground mb-6">
              Sources: British Election Study 2024; Electoral Commission. Local election estimates extrapolated from national age-band patterns applied to Suffolk 2021 County Council turnout.
            </p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageTurnoutData} margin={{ top: 5, right: 10, left: -15, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,92%)" />
                  <XAxis dataKey="age" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
                  <Tooltip formatter={(v: number) => [`${v}%`, ""]} />
                  <Legend />
                  <ReferenceLine y={50} stroke="hsl(160,60%,35%)" strokeDasharray="4 4" label={{ value: "50%", fontSize: 9, fill: "hsl(160,60%,35%)" }} />
                  <Bar dataKey="registered" name="% Registered to vote" fill="hsl(43,96%,42%)" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="generalElection" name="General election turnout" fill="hsl(222,80%,18%)" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="localElection" name="Local election turnout (est.)" fill="hsl(350,85%,40%)" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 text-center">
                <p className="text-3xl font-serif font-bold text-destructive">18%</p>
                <p className="text-xs font-semibold text-foreground mt-1">Estimated 18–24 local election turnout</p>
                <p className="text-xs text-muted-foreground mt-1">Only 1 in 5 young voters participates in the elections that shape their daily services</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                <p className="text-3xl font-serif font-bold text-amber-700">62%</p>
                <p className="text-xs font-semibold text-foreground mt-1">18–24 year olds registered to vote</p>
                <p className="text-xs text-muted-foreground mt-1">Nearly 4 in 10 young people aren't even on the electoral register</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center">
                <p className="text-3xl font-serif font-bold text-primary">55%</p>
                <p className="text-xs font-semibold text-foreground mt-1">Estimated 65–74 local election turnout</p>
                <p className="text-xs text-muted-foreground mt-1">Three times the local turnout of young adults — shaping policy that affects everyone</p>
              </div>
            </div>

            <div className="bg-muted rounded-xl p-4 mt-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">What this means for the Mildenhall Division:</strong> The division has an estimated 15,000–16,000 registered electors. If local election turnout mirrors national age patterns, the roughly 2,200 young adults (18–34) in the division may contribute fewer than 500 votes in a county council election — while the 3,500+ residents aged 65+ contribute around 1,900. Policy made on those numbers will systematically favour older residents.
              </p>
            </div>
          </div>

          {/* Gender */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="font-bold font-serif text-lg text-primary mb-2">The Gender Participation Gap</h3>
            <p className="text-xs text-muted-foreground mb-6">
              Sources: Ipsos exit poll 2024 general election; British Election Study 2019 &amp; 2024; Electoral Commission post-election reports.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={genderTurnout} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(214,20%,92%)" />
                      <XAxis type="number" domain={[0, 80]} tick={{ fontSize: 10 }} tickFormatter={(v) => `${v}%`} />
                      <YAxis type="category" dataKey="group" tick={{ fontSize: 10 }} width={90} />
                      <Tooltip formatter={(v: number) => [`${v}%`, ""]} />
                      <Legend />
                      <ReferenceLine x={50} stroke="hsl(160,60%,35%)" strokeDasharray="4 4" />
                      <Bar dataKey="ge2024" name="2024 GE" fill="hsl(222,80%,18%)" radius={[0, 3, 3, 0]} />
                      <Bar dataKey="local2021" name="Local 2021 (est.)" fill="hsl(350,85%,40%)" radius={[0, 3, 3, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-muted rounded-xl p-4 space-y-2">
                  <p className="text-sm font-bold text-foreground">Key findings</p>
                  <ul className="space-y-2.5">
                    {[
                      { stat: "Women now vote more than men", detail: "In 2024, women's turnout (62%) exceeded men's (58%) — the gender gap reversed over the past decade." },
                      { stat: "Young men are disengaging fastest", detail: "18–34 male turnout at 41% in 2024 is the sharpest drop of any demographic, diverging sharply from young women at 49%." },
                      { stat: "Local elections hit men harder", detail: "In local elections the male turnout gap widens — estimated 33% for all men vs 37% for all women in county council elections." },
                      { stat: "The masculinity-politics disconnect", detail: "Research suggests younger men increasingly feel unrepresented by mainstream politics, left-wing and right-wing alike. This is a warning signal, not a blame point." },
                    ].map(item => (
                      <li key={item.stat} className="flex gap-2 text-sm">
                        <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">{item.stat}:</strong> <span className="text-muted-foreground">{item.detail}</span></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ethnicity */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="font-bold font-serif text-lg text-primary mb-2">Ethnicity, Registration and Turnout</h3>
            <p className="text-xs text-muted-foreground mb-6">
              Sources: Electoral Commission Ethnic Minority Voters report (2023); British Election Study 2024; Office for National Statistics 2021 Census (West Suffolk). Note: West Suffolk is 94% white — ethnic minority communities are small in absolute numbers but face the largest participation gaps.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Registration &amp; General Election turnout by ethnicity (UK)</p>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ethnicityData} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(214,20%,92%)" />
                      <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 9 }} tickFormatter={(v) => `${v}%`} />
                      <YAxis type="category" dataKey="group" tick={{ fontSize: 9 }} width={90} />
                      <Tooltip formatter={(v: number) => [`${v}%`, ""]} />
                      <Legend />
                      <Bar dataKey="registered" name="% Registered" fill="hsl(222,80%,18%)" radius={[0, 3, 3, 0]} />
                      <Bar dataKey="turnoutGE" name="GE turnout" fill="hsl(43,96%,42%)" radius={[0, 3, 3, 0]} />
                      <Bar dataKey="turnoutLocal" name="Local turnout (est.)" fill="hsl(350,85%,40%)" radius={[0, 3, 3, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">West Suffolk — ethnic composition (2021 Census)</p>
                  <div className="space-y-2">
                    {westSuffolkCensus.map(d => (
                      <div key={d.group} className="flex items-center gap-3">
                        <div className="w-full bg-muted rounded-full h-6 relative overflow-hidden">
                          <div
                            className="h-full rounded-full flex items-center pl-3"
                            style={{ width: `${Math.max(d.pct, 4)}%`, backgroundColor: d.color }}
                          >
                            <span className="text-white text-xs font-bold whitespace-nowrap">{d.pct}%</span>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap w-28 shrink-0">{d.group}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Callout icon={AlertTriangle} color="bg-amber-50 border-amber-200 text-amber-900" title="The Mildenhall exception: US military families">
                  Up to <strong>5,000+ American citizens</strong> live in and around Mildenhall and Lakenheath as part of the US Air Force presence. As non-UK nationals, they cannot vote in UK elections. This creates a community of significant size — children in local schools, users of local services, neighbours — who have no electoral voice in the local decisions that affect them.
                </Callout>
              </div>
            </div>

            <div className="bg-muted rounded-xl p-4 mt-5">
              <p className="text-sm font-semibold text-foreground mb-2">Why the ethnic participation gap persists</p>
              <div className="grid sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
                {[
                  { title: "Registration barriers", body: "Annual electoral canvass misses renters and frequent movers — groups disproportionately represented in ethnic minority communities." },
                  { title: "Trust deficit", body: "Electoral Commission research shows lower trust in the fairness of political systems among Black and Asian British communities — a direct driver of non-participation." },
                  { title: "Voter ID impact", body: "Analysis by the Electoral Commission after the May 2023 local elections found ethnic minority voters were more likely to be turned away at the polling station for Voter ID reasons." },
                ].map(item => (
                  <div key={item.title} className="bg-white/60 rounded-lg p-3">
                    <p className="font-bold text-foreground mb-1">{item.title}</p>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary callout */}
          <div className="grid md:grid-cols-2 gap-5">
            <Callout icon={Info} color="bg-blue-50 border-blue-200 text-blue-900" title="What do these gaps mean for the Mildenhall Division?">
              Local elections in the Mildenhall Division are effectively decided by a subset of the community — older, more likely to be white, slightly more likely to be women. This is not a criticism of those who do vote: it is a structural problem that means the real diversity of our community — young people, newcomers, renters, ethnic minority residents — has its preferences systematically under-represented at county hall.
            </Callout>
            <Callout icon={Vote} color="bg-primary/5 border-primary/20 text-foreground" title="David's commitment on demographic inclusion">
              As your councillor, David will push for outreach targeting under-registered groups: school visits for 16–17 year olds (preparing them for their first vote), partnership with community groups serving ethnic minority residents, and clear campaigning against Voter ID as a barrier — including publicising the free Voter Authority Certificate widely.
            </Callout>
          </div>
        </section>

        {/* ═══ SECTION 4: Cost of Rural Democracy ═══════════════════════════════ */}
        <section aria-labelledby="cost-heading">
          <SectionHeader
            icon={PoundSterling}
            label="The hidden inequality"
            title="Rural Communities Pay More Per Vote — But Nobody Talks About It"
            subtitle="Every vote in England costs roughly the same to count. But the cost of making that vote happen — the polling station, the staff, the logistics — varies enormously between urban and rural areas. Rural voters are more expensive to serve. That cost is rarely acknowledged."
          />

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="space-y-5">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold font-serif text-lg text-primary mb-4">The Arithmetic of Rural Democracy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  A typical polling station in England costs approximately <strong className="text-foreground">£350–£500 per day</strong> to run — covering the Presiding Officer, poll clerks, building hire, and materials. The number of voters using that station varies enormously.
                </p>
                <div className="space-y-3">
                  {[
                    { type: "Town centre polling station", voters: "2,500–3,500", costPerVoter: "~£0.12–0.18", color: "bg-primary" },
                    { type: "Market town polling station", voters: "1,500–2,000", costPerVoter: "~£0.20–0.28", color: "bg-primary/70" },
                    { type: "Village polling station", voters: "400–800", costPerVoter: "~£0.50–1.05", color: "bg-amber-500" },
                    { type: "Hamlet/rural polling station", voters: "150–350", costPerVoter: "~£1.20–3.00", color: "bg-destructive" },
                  ].map(r => (
                    <div key={r.type} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                      <div className={`w-3 h-10 rounded-full ${r.color} shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">{r.type}</p>
                        <p className="text-xs text-muted-foreground">{r.voters} registered voters</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-bold text-foreground">{r.costPerVoter}</p>
                        <p className="text-xs text-muted-foreground">per elector</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Figures are estimated based on Electoral Commission cost data and typical polling station catchment sizes. Actual costs vary by council and location.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold font-serif text-lg text-primary mb-4">Cost Per Vote: Mildenhall Division Polling Stations</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  The Mildenhall Division contains polling stations ranging from the market town to small hamlets. Based on estimated registered electors per station at the 2021 county council election:
                </p>
                <div className="h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={ruralCostData.map(d => ({
                        ...d,
                        costPerElector: Number((d.costPerStation / d.electors).toFixed(2)),
                      }))}
                      margin={{ top: 5, right: 10, left: -15, bottom: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,20%,92%)" />
                      <XAxis dataKey="label" tick={{ fontSize: 10 }} angle={-30} textAnchor="end" interval={0} />
                      <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `£${v}`} />
                      <Tooltip
                        formatter={(v: number) => [`£${v.toFixed(2)}`, "Cost per registered elector"]}
                      />
                      <Bar dataKey="costPerElector" radius={[4, 4, 0, 0]}>
                        {ruralCostData.map((_, i) => (
                          <Cell
                            key={i}
                            fill={i < 2 ? "hsl(222,80%,18%)" : i === 2 ? "hsl(43,96%,42%)" : "hsl(350,85%,40%)"}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Estimated figures based on approximate electorate sizes and typical station running costs. Source: Electoral Commission guidance; West Suffolk Council election data.
                </p>
              </div>

              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-5">
                <h4 className="font-bold text-destructive font-serif mb-2">The Democratic Subsidy Nobody Accounts For</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rural polling stations in Freckenham, Worlington, and the hamlets of the Mildenhall Division cost <strong className="text-foreground">4–6 times more per voter</strong> to operate than polling stations in Bury St Edmunds or Haverhill. Yet rural voters receive fewer local services, face higher travel costs, and have less political representation. The system costs more to serve them — but delivers less.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-bold font-serif text-lg text-primary mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" /> Turnout in Rural vs Urban Suffolk — What the Numbers Show
            </h3>
            <div className="grid md:grid-cols-3 gap-5 mb-5">
              {[
                { label: "Bury St Edmunds North", turnout: "41.2%", type: "Urban — county town", note: "2021 Suffolk CC election", color: "text-primary" },
                { label: "Mildenhall Division", turnout: "~38–42%", type: "Mixed — market town + villages", note: "2021 Suffolk CC election (est.)", color: "text-amber-700" },
                { label: "Rural West Suffolk divisions", turnout: "33–37%", type: "Rural — scattered villages", note: "2021 Suffolk CC election (range)", color: "text-destructive" },
              ].map(d => (
                <div key={d.label} className="bg-muted rounded-xl p-4 text-center">
                  <p className={`text-3xl font-serif font-bold ${d.color} mb-1`}>{d.turnout}</p>
                  <p className="text-sm font-semibold text-foreground">{d.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{d.type}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1 italic">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rural turnout is consistently lower than urban areas in Suffolk local elections — compounding the cost inequality. Not only are rural stations more expensive to run per voter, they also see fewer of those voters actually turn up. The result is that rural communities are the <strong className="text-foreground">most expensive and least engaged</strong> part of the county's democratic infrastructure — yet they receive proportionally less resource and attention from county government.
            </p>
          </div>
        </section>

        {/* ═══ SECTION 5: Commitments ═══════════════════════════════════════════ */}
        <section aria-labelledby="commitments-heading">
          <SectionHeader
            icon={Vote}
            label="David's commitments"
            title="What I Will Fight For on Democracy"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Genuine local representation in any reorganisation",
                body: "If Suffolk moves to a unitary council, I will push for legally protected local area committees with real decision-making power and budgets — not just consultation forums. Mildenhall must have a seat at the table, not a seat in the gallery.",
              },
              {
                title: "Devolution downwards to parishes",
                body: "Any devolution deal must pass power and resource down to parish and town councils — the level closest to communities. A Mayor of East Anglia is only a democratic gain if Freckenham Parish Council also has more say over what happens in Freckenham.",
              },
              {
                title: "Make every PCC election a combined election",
                body: "Standalone PCC elections at 15% turnout are a democratic scandal. Suffolk's Police and Crime Commissioner wields £200m+ of public money. That election must always be combined with other polls to ensure a legitimate mandate.",
              },
              {
                title: "Accessible democracy for rural communities",
                body: "Polling stations must stay open in every village. Online and postal voting should be easier to access. The extra cost of rural democracy should be recognised and properly funded — not used as justification for cutting polling stations and further disenfranchising rural voters.",
              },
              {
                title: "Transparent electoral spending",
                body: "West Suffolk Council should publish a per-polling-station cost breakdown after every election. Voters deserve to know what their democracy costs and how that compares across the county. Sunlight is the best accountability.",
              },
              {
                title: "Youth civic education",
                body: "Schools in the Mildenhall Division should teach civic participation as a core subject — not an optional extra. If young people don't understand how local democracy works, they will never trust it. Disengagement starts in schools and ends with 15% turnout.",
              },
            ].map(c => (
              <div key={c.title} className="bg-card border border-border rounded-xl p-5 flex gap-4">
                <Vote className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground text-sm mb-1">{c.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-border pt-8">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Sources & Further Reading</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              ["English Devolution White Paper (Dec 2024)", "https://www.gov.uk/government/publications/english-devolution-white-paper"],
              ["Suffolk County Council — Devolution Proposal (2025)", "https://www.suffolk.gov.uk/council-and-democracy/devolution"],
              ["Electoral Commission — PCC Election Data", "https://www.electoralcommission.org.uk/who-we-are-and-what-we-do/elections-and-referendums/past-elections-and-referendums/pcc-elections"],
              ["Electoral Commission — Cost of Elections", "https://www.electoralcommission.org.uk/research-reports-and-data/cost-elections"],
              ["British Election Study 2024 — Turnout by age &amp; gender", "https://www.britishelectionstudy.com/bes-resources/"],
              ["Electoral Commission — Ethnic Minority Voters (2023)", "https://www.electoralcommission.org.uk/research-reports-and-data/research-ethnic-minority-voters-2023"],
              ["ONS 2021 Census — West Suffolk ethnic groups", "https://www.ons.gov.uk/census/maps/choropleth/identity/ethnic-group/ethnic-group-tb-6a/asian-asian-british-or-asian-welsh"],
              ["Electoral Commission — Impact of Voter ID (2023)", "https://www.electoralcommission.org.uk/research-reports-and-data/may-2023-local-elections-in-england-report-and-data"],
              ["Register to Vote (GOV.UK)", "https://www.gov.uk/register-to-vote"],
              ["Apply for Voter Authority Certificate", "https://www.gov.uk/apply-for-photo-id-voter-authority-certificate"],
              ["Find Your Polling Station (GOV.UK)", "https://www.gov.uk/find-polling-station"],
              ["West Suffolk Council — Elections", "https://www.westsuffolk.gov.uk/Council/Elections_and_Voting/"],
            ].map(([label, url]) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group p-2 rounded-lg hover:bg-muted"
              >
                <ExternalLink className="w-3 h-3 shrink-0 group-hover:text-primary" />
                {label}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/70 mt-4 italic">
            Turnout figures from Electoral Commission published results. Cost estimates based on Electoral Commission guidance and publicly available council returns. Mildenhall Division-specific figures are estimates based on available ward-level data. Last reviewed: March 2026.
          </p>
        </section>

      </div>
    </div>
  );
}
