import { Fragment } from "react";
import { Link } from "wouter";
import { ArrowLeft, Phone, ExternalLink, AlertTriangle, Heart, Shield, HelpCircle, MessageCircle, MapPin } from "lucide-react";

// ─── CRISIS SUPPORT ─────────────────────────────────────────────────────────
const crisisLines = [
  { name: "Samaritans", detail: "Free, confidential, available 24 hours a day, every day. You don't have to be suicidal to call. Whatever you're going through — they'll listen.", phone: "116 123", web: "https://www.samaritans.org", free: true, hours: "24/7" },
  { name: "Shout", detail: "Free, confidential text crisis support. Text SHOUT to 85258. If you're struggling to talk out loud, text is enough.", phone: "Text SHOUT to 85258", web: "https://www.giveusashout.org", free: true, hours: "24/7" },
  { name: "CALM — Campaign Against Living Miserably", detail: "For anyone in crisis — particularly focused on men who are less likely to reach out. No judgement. No pressure.", phone: "0800 58 58 58", web: "https://www.thecalmzone.net", free: true, hours: "5pm–midnight daily" },
  { name: "Suffolk MIND", detail: "Local mental health support in Suffolk. Talking therapies, crisis support, and help navigating services.", phone: "0300 111 6000", web: "https://www.suffolkmind.org.uk", free: true, hours: "Mon–Fri office hours" },
  { name: "NHS Mental Health Crisis", detail: "If you're in mental health crisis and need urgent support, call 111 and press 2. They will connect you to a crisis team.", phone: "111 (press 2)", web: "https://www.nhs.uk/mental-health/", free: true, hours: "24/7" },
  { name: "PAPYRUS — HopeLineUK", detail: "Focused on preventing young people's suicide. If you're worried about yourself or a young person, call or text.", phone: "0800 068 4141", web: "https://www.papyrus-uk.org", free: true, hours: "9am–midnight daily" },
];

// ─── VICTIM SUPPORT ──────────────────────────────────────────────────────────
const victimResources = [
  {
    category: "General Victim Support",
    color: "blue",
    items: [
      { name: "Victim Support (National)", desc: "Free, independent support for victims of any crime. Practical help, emotional support, and help understanding your rights.", phone: "0808 168 9111", web: "https://www.victimsupport.org.uk", hours: "24/7" },
      { name: "Victim Care Suffolk", desc: "Local Suffolk service providing emotional support and practical help for victims of crime in our county.", phone: "0800 358 0899", web: "https://www.victimcaresuffolk.org.uk", hours: "Mon–Fri" },
    ],
  },
  {
    category: "Domestic Abuse",
    color: "red",
    items: [
      { name: "National Domestic Abuse Helpline", desc: "Run by Refuge. Free, confidential support for anyone experiencing domestic abuse. They can help you plan for your safety.", phone: "0808 2000 247", web: "https://www.nationaldahelpline.org.uk", hours: "24/7" },
      { name: "Refuge", desc: "The UK's largest provider of specialist domestic abuse services. Can help you find emergency accommodation.", phone: "0808 2000 247", web: "https://www.refuge.org.uk", hours: "24/7" },
      { name: "Men's Advice Line", desc: "Confidential support for male victims of domestic abuse.", phone: "0808 801 0327", web: "https://mensadviceline.org.uk", hours: "Mon–Fri 9am–8pm" },
    ],
  },
  {
    category: "Sexual Violence",
    color: "purple",
    items: [
      { name: "Rape Crisis England & Wales", desc: "Specialist support for anyone affected by sexual violence, at any time in their life.", phone: "0808 500 2222", web: "https://rapecrisis.org.uk", hours: "24/7" },
      { name: "Suffolk Rape Crisis", desc: "Local specialist support for people in Suffolk who have experienced sexual violence or abuse.", phone: "01473 241 411", web: "https://www.suffolkrapecrisis.org.uk", hours: "Mon–Fri" },
      { name: "NAPAC", desc: "Support for adults who were abused in childhood — by anyone, not just family members.", phone: "0808 801 0331", web: "https://napac.org.uk", hours: "Mon–Thu 10am–9pm, Fri 10am–6pm" },
    ],
  },
  {
    category: "Older Adults and Vulnerable People",
    color: "amber",
    items: [
      { name: "Hourglass", desc: "The only UK-wide charity focused on the abuse of older adults. Domestic abuse, financial abuse, scams, and exploitation.", phone: "0808 808 8141", web: "https://www.wearehourglass.org", hours: "24/7" },
      { name: "Age UK Suffolk", desc: "Information, support, and befriending services for older people in Suffolk.", phone: "01473 359 911", web: "https://www.ageuk.org.uk/suffolk", hours: "Mon–Fri" },
    ],
  },
  {
    category: "Children and Young People",
    color: "green",
    items: [
      { name: "Childline", desc: "Free, confidential support for children and young people, about anything at all — abuse, family problems, feelings.", phone: "0800 1111", web: "https://www.childline.org.uk", hours: "24/7" },
      { name: "NSPCC Helpline", desc: "For adults worried about a child. If you're concerned someone is at risk, call.", phone: "0808 800 5000", web: "https://www.nspcc.org.uk", hours: "24/7" },
    ],
  },
  {
    category: "Rural and Agricultural Crime",
    color: "slate",
    items: [
      { name: "NFU Mutual Farm Crime", desc: "Guidance and support for farmers affected by rural crime, theft, and fly-tipping.", phone: "0800 056 9160", web: "https://www.nfumutual.co.uk/farming/rural-crime/", hours: "Business hours" },
      { name: "Suffolk Rural Crime Team", desc: "Contact Suffolk Police's dedicated rural crime team to report agricultural theft, fly-tipping, or organised criminal activity.", phone: "101", web: "https://www.suffolk.police.uk/advice/advice-and-information/rc/rural-crime/", hours: "Non-emergency" },
    ],
  },
];

// ─── REPORTING ───────────────────────────────────────────────────────────────
const reportingOptions = [
  { label: "Emergency — life at risk", icon: "🚨", detail: "If you or someone else is in immediate danger, or a crime is happening right now.", contact: "Call 999", color: "red" },
  { label: "Non-emergency crime", icon: "📞", detail: "To report a crime that has already happened and is not a current emergency.", contact: "Call 101", color: "blue" },
  { label: "Report online", icon: "💻", detail: "Suffolk Police online crime reporting — for non-emergency incidents.", contact: "suffolk.police.uk", link: "https://www.suffolk.police.uk/ro/report/", color: "slate" },
  { label: "Crimestoppers — anonymous", icon: "🔒", detail: "Report a crime anonymously. No names, no accounts, no record of your call.", contact: "0800 555 111", link: "https://crimestoppers-uk.org", color: "amber" },
  { label: "Anti-Terrorism Hotline", icon: "⚠️", detail: "Report suspicious activity or concerns about terrorism.", contact: "0800 789 321", color: "slate" },
  { label: "Hate crime", icon: "🛑", detail: "Report hate crime to True Vision — independent of police, also available anonymously.", contact: "True Vision online", link: "https://www.report-it.org.uk", color: "red" },
];

// ─── CRIME DATA ──────────────────────────────────────────────────────────────
const crimeTypes = [
  {
    rank: 1, type: "Violence against the person",
    englandWales: "28.4", suffolk: "18.4", mildenhall: "~22.0", ruralParishes: "~8.0",
    note: "Includes assault, stalking, harassment. Rural parishes significantly under-report due to distance from support services and fear of being identified in small communities.",
    concern: "Under-reporting in rural areas is a serious concern. Victims in isolated villages may suffer for years without help.",
  },
  {
    rank: 2, type: "Theft (all categories)",
    englandWales: "18.2", suffolk: "10.5", mildenhall: "~12.0", ruralParishes: "~6.0",
    note: "Includes shoplifting, bike theft, and other theft. Mildenhall town rate is elevated. Rural parishes experience agricultural theft not fully captured in these figures.",
    concern: null,
  },
  {
    rank: 3, type: "Anti-social behaviour",
    englandWales: "15.8", suffolk: "11.2", mildenhall: "~14.0", ruralParishes: "~4.0",
    note: "Recorded separately from crime. Mildenhall town has a notably higher ASB rate, linked to youth services cuts and loss of community spaces since 2015.",
    concern: "Young people have nowhere to go — this drives ASB, which then drives calls for more policing rather than investment in the root cause.",
  },
  {
    rank: 4, type: "Criminal damage & arson",
    englandWales: "8.5", suffolk: "7.2", mildenhall: "~9.0", ruralParishes: "~5.0",
    note: "Vehicle damage, property vandalism, and fly-tipping related damage are the most common forms locally. Rural areas often suffer damage to agricultural property.",
    concern: null,
  },
  {
    rank: 5, type: "Vehicle crime",
    englandWales: "5.8", suffolk: "5.3", mildenhall: "~6.5", ruralParishes: "~7.5",
    note: "Rural parishes show elevated vehicle crime rates — isolated properties, farm vehicles, and the A11/A1101 corridors attract organised vehicle theft networks. Barton Mills (A11 junction) is a known hotspot.",
    concern: "Rural vehicle crime is often organised and prolific. Isolated properties are targeted precisely because response times are long.",
  },
  {
    rank: 6, type: "Public order offences",
    englandWales: "5.8", suffolk: "4.6", mildenhall: "~5.0", ruralParishes: "~2.0",
    note: "Includes harassment, threatening behaviour, and possession of weapons. Town centre incidents account for the majority in Mildenhall.",
    concern: null,
  },
  {
    rank: 7, type: "Drug offences",
    englandWales: "4.2", suffolk: "3.3", mildenhall: "~4.0", ruralParishes: "~1.5",
    note: "Drug offences are often enforcement-led — meaning they track police activity as much as actual drug use. Rural areas may have similar use levels but less detection.",
    concern: null,
  },
  {
    rank: 8, type: "Burglary",
    englandWales: "3.5", suffolk: "2.9", mildenhall: "~3.5", ruralParishes: "~3.0",
    note: "Both residential and non-residential. Rural properties face a specific risk — isolated, with longer response times. Agricultural buildings and outbuildings are frequently targeted.",
    concern: null,
  },
  {
    rank: 9, type: "Sexual offences",
    englandWales: "2.1", suffolk: "2.4", mildenhall: "~2.0", ruralParishes: "Suppressed",
    note: "Suffolk's slightly higher rate than the national average may reflect better reporting and victim support. Rural parish data is suppressed to protect victims' identities in small communities.",
    concern: "Sexual violence is dramatically under-reported everywhere — estimates suggest only 1 in 6 victims reports to police. Behind every recorded crime are many more who suffer in silence.",
  },
  {
    rank: 10, type: "Robbery",
    englandWales: "1.4", suffolk: "0.7", mildenhall: "~0.5", ruralParishes: "<0.5",
    note: "Suffolk and rural Suffolk are significantly below the national average — robbery is predominantly an urban crime. The lower rate here does not mean people feel safe.",
    concern: null,
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200",
  red: "bg-red-50 border-red-200",
  purple: "bg-purple-50 border-purple-200",
  amber: "bg-amber-50 border-amber-200",
  green: "bg-green-50 border-green-200",
  slate: "bg-slate-50 border-slate-200",
};
const colorHeadMap: Record<string, string> = {
  blue: "text-blue-900",
  red: "text-red-900",
  purple: "text-purple-900",
  amber: "text-amber-900",
  green: "text-green-900",
  slate: "text-slate-900",
};

export default function CrimeData() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero */}
      <div className="bg-slate-800 text-white pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/policies/policing" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Policing & Safety
          </Link>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Shield className="w-4 h-4" />
            Crime in Our Communities · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Crime Data &amp; Victim Support</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Understanding crime in our area is important. But data should never overshadow people. Behind every statistic is a real person. If you are struggling — whatever the reason — this page has support resources designed for you.
          </p>
        </div>
      </div>

      {/* ── CRISIS SUPPORT — top, prominent ───────────────────────────────── */}
      <div className="bg-rose-700 text-white px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <Heart className="w-8 h-8 shrink-0 text-rose-200 mt-0.5" />
            <div>
              <h2 className="text-2xl font-serif font-bold">If You Are Struggling Right Now — You Are Not Alone</h2>
              <p className="text-rose-100 mt-2 text-sm leading-relaxed max-w-3xl">
                Crime leaves deep marks that are not always visible. Shock, shame, fear, isolation, self-blame — these are normal reactions to something that was done to you. Many people carry these feelings alone for months or years, never telling anyone, never asking for help. Some reach a point where they feel there is no way forward.
              </p>
              <p className="text-rose-100 mt-2 text-sm leading-relaxed max-w-3xl font-semibold">
                There is a way forward. Help exists. You deserve support — not because you are weak, but because what happened to you was not your fault and you should not have to carry it alone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {crisisLines.map(({ name, detail, phone, web, hours }) => (
              <div key={name} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4">
                <h3 className="font-bold text-white text-sm mb-1">{name}</h3>
                <p className="text-rose-100 text-xs mb-3 leading-relaxed">{detail}</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <Phone className="w-3 h-3 text-rose-300 shrink-0" />
                    <span className="font-bold text-white">{phone}</span>
                    <span className="text-rose-300 text-xs">· Free</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-rose-200">
                    <MessageCircle className="w-3 h-3 shrink-0" />
                    <span>{hours}</span>
                  </div>
                  <a href={web} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-rose-200 hover:text-white transition-colors mt-1">
                    <ExternalLink className="w-3 h-3" />
                    {web.replace("https://www.", "").replace("https://", "")}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-white/10 border border-white/20 rounded-xl text-xs text-rose-100 leading-relaxed">
            <strong className="text-white block mb-1">A note from David:</strong>
            "People suffer alone in our community every single day. Not because they don't want help — but because they don't know where to turn, or they feel ashamed of something that was never their fault, or they've been let down before and stopped believing anyone cares. I want this page to reach those people. You matter. Your safety matters. Please use these numbers."
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* ── CRIME COMPARISON TABLE ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Top 10 Crime Types — How Our Area Compares</h2>
          <p className="text-muted-foreground text-sm mb-1 leading-relaxed">
            Recorded crimes per 1,000 population (Home Office Police Recorded Crime 2022–23; Suffolk Police Annual Report 2023; police.uk neighbourhood data for IP28 and surrounding LSOAs). Rural parish figures are estimates based on available neighbourhood-level data and may be suppressed where population is too small to publish safely.
          </p>
          <p className="text-muted-foreground text-xs mb-6">
            Lower recorded crime does not always mean less crime — rural under-reporting is a well-documented problem across all categories.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-3 py-3 font-semibold w-6">#</th>
                  <th className="text-left px-3 py-3 font-semibold">Crime type</th>
                  <th className="text-center px-3 py-3 font-semibold whitespace-nowrap">England<br />&amp; Wales</th>
                  <th className="text-center px-3 py-3 font-semibold">Suffolk</th>
                  <th className="text-center px-3 py-3 font-semibold whitespace-nowrap">Mildenhall<br />High Town</th>
                  <th className="text-center px-3 py-3 font-semibold whitespace-nowrap">Barton Mills /<br />Worlington /<br />Freckenham</th>
                </tr>
              </thead>
              <tbody>
                {crimeTypes.map((row, i) => (
                  <Fragment key={row.type}>
                    <tr className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="px-3 py-2.5 text-muted-foreground font-bold text-xs">{row.rank}</td>
                      <td className="px-3 py-2.5 font-semibold text-foreground text-xs">{row.type}</td>
                      <td className="px-3 py-2.5 text-center text-xs text-muted-foreground">{row.englandWales}</td>
                      <td className="px-3 py-2.5 text-center text-xs font-medium text-primary">{row.suffolk}</td>
                      <td className={`px-3 py-2.5 text-center text-xs font-bold ${parseFloat(row.mildenhall.replace("~","")) > parseFloat(row.suffolk) ? "text-destructive" : "text-green-700"}`}>
                        {row.mildenhall}
                      </td>
                      <td className="px-3 py-2.5 text-center text-xs text-muted-foreground">{row.ruralParishes}</td>
                    </tr>
                    {(row.note || row.concern) && (
                      <tr className={`${i % 2 === 0 ? "bg-background" : "bg-muted/20"} border-b border-border`}>
                        <td />
                        <td colSpan={5} className="px-3 pb-3">
                          {row.note && <p className="text-xs text-muted-foreground leading-relaxed">{row.note}</p>}
                          {row.concern && (
                            <div className="mt-1 flex items-start gap-1.5 text-xs text-amber-800 bg-amber-50 rounded-lg px-2 py-1.5 border border-amber-200">
                              <AlertTriangle className="w-3 h-3 shrink-0 mt-0.5 text-amber-600" />
                              <span>{row.concern}</span>
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">All figures: crimes per 1,000 population. Sources: Home Office Police Recorded Crime England & Wales 2022–23; Suffolk Police Annual Report 2022–23; police.uk neighbourhood statistics for IP28 (Mildenhall), CB8, and adjacent LSOAs.</p>
        </section>

        {/* ── PARISH BREAKDOWN ──────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Crime in Each Parish — The Local Picture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                parish: "Mildenhall High Town",
                color: "border-primary bg-primary/5",
                headColor: "text-primary",
                profile: "The highest-crime area in the division — reflecting its status as the only town. The most common recorded crimes are violence against the person (including domestic incidents), anti-social behaviour, and theft. The loss of the police station in 2013 and subsequent cuts to youth services have contributed to the pattern.",
                topCrimes: ["Violence against the person", "Anti-social behaviour", "Theft from shops and vehicles", "Criminal damage", "Drug offences"],
                note: "Mildenhall town crime rates are elevated above the Suffolk average in most categories. Domestic violence remains significantly under-reported.",
              },
              {
                parish: "Barton Mills",
                color: "border-green-600 bg-green-50",
                headColor: "text-green-900",
                profile: "The A11/A1101 junction at Barton Mills creates a distinct vehicle crime risk — theft from vehicles parked at the services and along the A-road corridor. The village itself is relatively low-crime, but incidents relating to the road are disproportionate for its size.",
                topCrimes: ["Vehicle crime (theft from/of vehicles)", "Criminal damage", "Theft", "Fly-tipping related offences", "Low-level ASB"],
                note: "The A11 junction is a known location for opportunistic vehicle crime. Many incidents are not reported because victims assume nothing will be done.",
              },
              {
                parish: "Worlington",
                color: "border-amber-600 bg-amber-50",
                headColor: "text-amber-900",
                profile: "A small, quiet community with generally low recorded crime. However, agricultural theft — farm equipment, fuel, livestock — is a persistent issue that is chronically under-reported. Worlington's isolated properties and lanes are attractive to organised rural crime networks.",
                topCrimes: ["Agricultural theft (equipment, fuel)", "Vehicle crime", "Burglary (non-residential)", "Criminal damage to property", "Fly-tipping"],
                note: "Rural crime data for villages this size is often suppressed. Actual rates of agricultural theft may be substantially higher than recorded figures suggest.",
              },
              {
                parish: "Freckenham",
                color: "border-red-700 bg-red-50",
                headColor: "text-red-900",
                profile: "The smallest and most isolated community in the division. Recorded crime is very low — but this reflects both genuine low crime rates and the reality that with 300 people, any reported crime risks identifying the victim. Isolation also means that victims of domestic abuse, fraud, or exploitation may have no one locally to turn to.",
                topCrimes: ["Vehicle crime", "Agricultural theft", "Low-level criminal damage", "(Most categories suppressed — population too small to publish safely)"],
                note: "In a village of 300 people, isolation is itself a safety risk. Victims who know they will be recognised may never report. David will push for outreach services that come to rural communities rather than expecting people to travel.",
              },
            ].map(({ parish, color, headColor, profile, topCrimes, note }) => (
              <div key={parish} className={`border-2 rounded-xl p-5 ${color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className={`w-4 h-4 ${headColor}`} />
                  <h3 className={`font-serif font-bold text-base ${headColor}`}>{parish}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{profile}</p>
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Most common crime types:</h4>
                  <ul className="space-y-1">
                    {topCrimes.map((c) => (
                      <li key={c} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-2 leading-relaxed">
                  {note}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── VICTIM SUPPORT ────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-rose-600 shrink-0" />
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary">Support for Victims</h2>
              <p className="text-muted-foreground text-sm">Free, confidential services — you do not have to report to police to access any of these</p>
            </div>
          </div>
          <div className="space-y-8">
            {victimResources.map(({ category, color, items }) => (
              <div key={category}>
                <h3 className={`font-serif font-bold text-sm uppercase tracking-wide mb-3 ${colorHeadMap[color]}`}>{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map(({ name, desc, phone, web, hours }) => (
                    <div key={name} className={`border rounded-xl p-4 ${colorMap[color]}`}>
                      <h4 className={`font-bold text-sm mb-1 ${colorHeadMap[color]}`}>{name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs">
                          <Phone className="w-3 h-3 text-muted-foreground shrink-0" />
                          <span className="font-bold text-foreground">{phone}</span>
                          <span className="text-muted-foreground">· {hours}</span>
                        </div>
                        <a href={web} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                          <ExternalLink className="w-3 h-3" />
                          {web.replace("https://www.", "").replace("https://", "")}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW TO REPORT ─────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-primary shrink-0" />
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary">How to Report a Crime</h2>
              <p className="text-muted-foreground text-sm">Reporting crime takes courage. You can also report anonymously if you prefer.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportingOptions.map(({ label, icon, detail, contact, link, color }) => {
              const bgs: Record<string, string> = { red: "border-red-300 bg-red-50", blue: "border-blue-300 bg-blue-50", slate: "border-slate-300 bg-slate-50", amber: "border-amber-300 bg-amber-50" };
              const heads: Record<string, string> = { red: "text-red-900", blue: "text-blue-900", slate: "text-slate-900", amber: "text-amber-900" };
              return (
                <div key={label} className={`border-2 rounded-xl p-4 ${bgs[color]}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{icon}</span>
                    <h3 className={`font-bold text-sm ${heads[color]}`}>{label}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{detail}</p>
                  <div className={`font-bold text-sm ${heads[color]}`}>{contact}</div>
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1">
                      <ExternalLink className="w-3 h-3" />
                      Open website
                    </a>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-6 p-4 bg-muted border border-border rounded-xl text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">You do not have to report to the police to get support.</strong> Victim Support, Refuge, Rape Crisis, and other services on this page will help you regardless of whether you have or plan to report a crime. Reporting is always your choice.
          </div>
        </section>

        {/* ── DAVID'S POSITION ──────────────────────────────────────────── */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">Why David is Raising This</h2>
          <div className="prose prose-sm text-muted-foreground max-w-none leading-relaxed space-y-3">
            <p>
              Crime statistics do not capture suffering. They count reports — and most suffering is never reported. In rural communities like ours, people carry the weight of what has happened to them because there is no police station to walk into, no victim support service nearby, no trusted officer they know by name.
            </p>
            <p>
              When people feel there is nowhere to turn, that isolation compounds the original harm. It can push people toward hopelessness, self-harm, and worse. David believes that a councillor's job is not just to lobby for better police numbers — it is to make sure the community knows where to get help, and to fight for the services that reach people where they are.
            </p>
            <p>
              This page will be updated as new crime data becomes available and as new local support services are established. If you know of a local service that should be listed here, <Link href="/contact" className="text-primary hover:underline font-semibold">please contact David</Link>.
            </p>
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link href="/policies/policing" className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Policing &amp; Safety
          </Link>
          <Link href="/contact" className="px-5 py-2.5 bg-destructive text-white font-bold rounded-xl text-sm shadow hover:bg-destructive/90 transition-colors">
            Contact David
          </Link>
        </div>
      </div>
    </div>
  );
}
