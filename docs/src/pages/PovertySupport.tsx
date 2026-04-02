import { Link } from "wouter";
import {
  ArrowLeft, Phone, Globe, AlertTriangle, ShieldCheck, Home, HandHeart,
  CreditCard, Users, Heart, ChevronRight, ExternalLink, CheckCircle, XCircle,
  Info, Clock, Landmark
} from "lucide-react";

// ─── DEBT HELP CONTACTS ───────────────────────────────────────────────────────
const debtOrgs = [
  {
    name: "National Debtline",
    type: "Free, independent debt advice",
    phone: "0808 808 4000",
    web: "nationaldebtline.org",
    hours: "Mon–Fri 9am–8pm, Sat 9:30am–1pm",
    what: "Free advice on all types of debt — including rent arrears, council tax, utilities, and credit cards. Excellent bailiff-specific advice. You can also use their online My Money Steps tool at any time.",
  },
  {
    name: "StepChange Debt Charity",
    type: "Free debt management plans",
    phone: "0800 138 1111",
    web: "stepchange.org",
    hours: "Mon–Fri 8am–8pm, Sat 8am–4pm",
    what: "Set up a Debt Management Plan (DMP) to combine multiple debts into one affordable monthly payment. Free service, regulated by the FCA. Online advice available 24/7.",
  },
  {
    name: "Citizens Advice West Suffolk",
    type: "Free local advice — debt, benefits, housing",
    phone: "0808 278 7855",
    web: "citizensadvice.org.uk",
    hours: "Mon–Fri 9am–5pm (phone line). Drop-in advice in Mildenhall — check their website for local session times.",
    what: "Covers the full picture: debt, benefits entitlements, housing rights, employment disputes, and more. If you don't know where to start, start here. Completely confidential.",
  },
  {
    name: "Christians Against Poverty (CAP)",
    type: "Free home-visiting debt advice — including Mildenhall area",
    phone: "0800 328 0006",
    web: "capuk.org",
    hours: "Mon–Fri 9am–5pm",
    what: "A debt adviser will come to your home, help you understand your situation, and create a plan — entirely free. No religious commitment required. They work with all faiths and none. Suffolk centres cover the Mildenhall area.",
  },
  {
    name: "Turn2Us",
    type: "Benefits calculator and emergency grants",
    phone: "0808 802 2000",
    web: "turn2us.org.uk",
    hours: "Online 24/7 — phone Mon–Fri 9am–5pm",
    what: "Find benefits and grants you may be entitled to but don't know about. Many people are under-claiming. The online calculator takes 15 minutes and may reveal help you didn't know existed.",
  },
  {
    name: "West Suffolk Council — Household Support Fund",
    type: "Emergency grants for food, fuel, and essentials",
    phone: "01284 757080",
    web: "westsuffolk.gov.uk",
    hours: "Mon–Fri 9am–5pm",
    what: "Emergency financial support for West Suffolk residents facing acute hardship — food vouchers, fuel support, white goods, and other essentials. You do not need to be on benefits to apply. Ask the main council number for the latest application process.",
  },
];

// ─── FOOD & EMERGENCY SUPPORT ─────────────────────────────────────────────────
const foodOrgs = [
  {
    name: "West Suffolk Food Bank",
    phone: "01284 706500",
    web: "westsuffolk.foodbank.org.uk",
    what: "To access the food bank, you need a voucher — get one from Citizens Advice, your GP, school, social worker, housing officer, or many other local agencies. If you are in crisis and do not know where to start, call Citizens Advice (above). The food bank covers Mildenhall and the surrounding area.",
  },
  {
    name: "Mildenhall Warm Spaces (community venues)",
    phone: "Check local notice boards and the Mildenhall Facebook community group",
    web: "warmwelcome.uk",
    what: "Warm, safe community spaces open during winter months where you can sit, have a hot drink, and access information. Churches, libraries, and community centres across the division participate. The national directory at warmwelcome.uk lists local options.",
  },
  {
    name: "Suffolk Community Foundation",
    phone: "01473 602602",
    web: "suffolkcf.org.uk",
    what: "Grants for Suffolk individuals and families in financial hardship, through the Good Neighbour Fund and other emergency grant programmes. Applications can be made via local support organisations.",
  },
];

// ─── BAILIFF RIGHTS ───────────────────────────────────────────────────────────
const bailiffCannotList = [
  "Force entry to your home for most types of debt (they CAN only if you previously let them in voluntarily or for criminal fines)",
  "Come before 6am or after 9pm",
  "Enter if only children under 16 are present",
  "Take items that are not yours (such as a partner's or family member's belongings)",
  "Take essential items: cooker, fridge, washing machine, microwave, kettle, bedding, or medical equipment you need",
  "Take items you need for your work (up to £1,350 in value)",
  "Use threatening, abusive, or intimidating behaviour",
  "Visit without first sending a Notice of Enforcement giving at least 7 clear days' notice",
  "Claim they can force entry when they cannot — this is a criminal offence",
  "Act without a Warrant of Control signed by a court (you can ask to see it through the door)",
];

const bailiffSteps = [
  {
    step: "1",
    title: "Don't open the door",
    detail: "A bailiff can only enter your home if you let them in. Once you have let them in on a previous visit, they can return and enter. On a first visit, keep the door closed. Talk through the door or a window. Ask to see ID and the Warrant of Control through the letterbox.",
  },
  {
    step: "2",
    title: "Ask to see their credentials",
    detail: "Every certificated enforcement agent must carry and show: their name and certificate number, the name of the creditor (who you owe money to), and the Warrant of Control showing the amount. If they cannot or will not show these, do not engage further.",
  },
  {
    step: "3",
    title: "Contact the creditor directly — immediately",
    detail: "Calling the original creditor (the council, HMRC, the court) and agreeing a payment plan can stop the bailiff visit. Creditors prefer to be paid than to pay bailiff fees. Citizens Advice can help you do this quickly — call 0808 278 7855.",
  },
  {
    step: "4",
    title: "Tell them if you are vulnerable",
    detail: "Enforcement agents have a legal duty to apply the Vulnerability Protocol if you tell them you are ill, disabled, elderly, pregnant, a carer, or suffering with mental health problems. Tell them clearly and ask them to note it. They must pause enforcement and refer back to the creditor.",
  },
  {
    step: "5",
    title: "Get advice immediately",
    detail: "National Debtline (0808 808 4000) has a dedicated bailiff advice line. They can advise on whether the debt is valid, whether the bailiff is acting lawfully, and what to do next. Do not pay a bailiff without getting advice first — some charges are unlawful.",
  },
  {
    step: "6",
    title: "Report unlawful behaviour",
    detail: "If a bailiff breaks the rules, complain to: the creditor who sent them, the Local Government Ombudsman (for council tax bailiffs), HMRC (for HMRC enforcement), or the enforcement agency's certificated agent regulator. National Debtline will help you make the complaint.",
  },
];

// ─── HOMELESSNESS CONTACTS ────────────────────────────────────────────────────
const homelessOrgs = [
  {
    name: "West Suffolk Council — Housing Options",
    priority: "First call if you are homeless or at risk in the next 56 days",
    phone: "01284 757080",
    web: "westsuffolk.gov.uk/housing",
    hours: "Mon–Fri 9am–5pm. Emergency out-of-hours: 01284 757000",
    what: "The council has a legal duty to help you if you are homeless or threatened with homelessness. You do not need to be sleeping rough — if you are at risk of losing your home in the next 56 days, contact them now. They must offer you an assessment and a personalised housing plan.",
  },
  {
    name: "Shelter",
    priority: "Free independent housing advice — including if the council has refused to help",
    phone: "0808 800 4444",
    web: "shelter.org.uk",
    hours: "Mon–Fri 8am–8pm, Sat 9am–5pm, Sun 9am–5pm",
    what: "Free legal housing advice — for anyone facing eviction, domestic abuse, landlord harassment, or homelessness. If you feel the council has not helped you properly, Shelter can advise on your rights and challenge decisions. Suffolk-based workers are available.",
  },
  {
    name: "YMCA Suffolk",
    priority: "Supported housing for young people aged 16–25",
    phone: "01473 288200",
    web: "ymcasuffolk.org.uk",
    hours: "Mon–Fri 9am–5pm",
    what: "If you are under 25 and facing homelessness, YMCA Suffolk offers supported housing, move-on support, and advice. They cover Bury St Edmunds and surrounding areas including West Suffolk.",
  },
  {
    name: "Salvation Army",
    priority: "Emergency shelter and outreach support",
    phone: "0300 772 4430",
    web: "salvationarmy.org.uk",
    hours: "Varies by location — call to find the nearest service",
    what: "Emergency hostel spaces, outreach, and reconnection support. Will help connect rough sleepers with housing, health, and benefits services. No religious commitment required.",
  },
  {
    name: "Streetlink",
    priority: "If you see someone sleeping rough — report it so they get help",
    phone: "0300 500 0914",
    web: "streetlink.org.uk",
    hours: "24/7 online. Phone line open daily.",
    what: "If you see someone sleeping rough and are worried about them, use Streetlink to alert local outreach services. Give as accurate a location as possible. You do not need to know the person's name. This connects them with local support workers who will make contact.",
  },
  {
    name: "Mind (mental health) — Suffolk",
    priority: "If homelessness or financial crisis is affecting mental health",
    phone: "01473 218 007",
    web: "mind.org.uk",
    hours: "Mon–Fri 9am–5pm",
    what: "Suffolk Mind offers talking support, wellbeing groups, and crisis signposting. If you or someone you know is struggling with mental health alongside housing or financial stress, they can help and connect you with the right services.",
  },
];

const warningSignsHomeless = [
  "Mentioning they don't know where they'll stay tonight",
  "Sleeping in a car, shed, or with multiple different people short-term ('sofa surfing')",
  "Receiving a Section 21 'no-fault' eviction notice or notice to quit",
  "Being in a relationship with domestic abuse — often the fastest path to homelessness for women and children",
  "Young people who have left or been forced out of home",
  "Veterans who have left the forces and lost their accommodation",
  "People leaving prison or hospital with no fixed address",
  "Rough sleeping in parks, doorways, or outbuildings — especially in rural areas where it is less visible",
];

export default function PovertySupport() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-rose-900 text-white pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/policies/poverty" className="inline-flex items-center gap-2 text-rose-300 hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Poverty & Cost of Living
          </Link>
          <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-widest mb-4">
            <HandHeart className="w-4 h-4" aria-hidden="true" />
            Support & Practical Help · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">If You're Struggling — Here's Who Can Help</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            This page exists because politics must do more than make arguments — it must be useful to real people in real difficulty. If you are struggling with debt, worried about bailiffs, at risk of losing your home, or you know someone who is homeless, these contacts are here for you. All services listed are free. None will judge you.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Debt & money help", href: "#debt", icon: CreditCard },
              { label: "Bailiff rights", href: "#bailiffs", icon: ShieldCheck },
              { label: "Homelessness", href: "#homelessness", icon: Home },
            ].map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors">
                <Icon className="w-4 h-4 text-rose-300" />
                {label}
                <ChevronRight className="w-4 h-4 ml-auto opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">

        {/* Debt & Money Help */}
        <section id="debt" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-2">
            <CreditCard className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Debt & Financial Crisis — Free Help</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            Debt is not a moral failing. It is usually the result of unexpected events — illness, job loss, relationship breakdown, or a benefits system that didn't catch you in time. Every organisation below offers completely free, non-judgmental advice. The sooner you contact them, the more options you have.
          </p>
          <div className="space-y-4">
            {debtOrgs.map((org) => (
              <div key={org.name} className="bg-card border border-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-foreground text-base">{org.name}</h3>
                    <span className="text-xs text-primary font-semibold">{org.type}</span>
                  </div>
                  <div className="flex flex-col gap-1 shrink-0 text-right text-sm">
                    <a href={`tel:${org.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1 text-primary font-bold hover:underline">
                      <Phone className="w-3.5 h-3.5" />{org.phone}
                    </a>
                    <a href={`https://${org.web}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-xs hover:underline">
                      <Globe className="w-3 h-3" />{org.web} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  <Clock className="w-3.5 h-3.5 shrink-0" />{org.hours}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{org.what}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-900 leading-relaxed">
            <strong>Food bank and emergency essentials:</strong> If you need immediate help with food or heating, see below. West Suffolk Food Bank can be accessed through a voucher from Citizens Advice, your GP, your child's school, or a social worker. If you cannot get a voucher quickly, call Citizens Advice on 0808 278 7855 — they can issue one same day in many cases.
          </div>
          <div className="mt-4 space-y-4">
            {foodOrgs.map((org) => (
              <div key={org.name} className="bg-card border border-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="font-bold text-foreground text-sm">{org.name}</h3>
                  {!org.phone.startsWith("Check") && (
                    <a href={`tel:${org.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline shrink-0">
                      <Phone className="w-3.5 h-3.5" />{org.phone}
                    </a>
                  )}
                </div>
                {org.phone.startsWith("Check") && <p className="text-xs text-muted-foreground mb-2">{org.phone}</p>}
                <p className="text-sm text-muted-foreground leading-relaxed">{org.what}</p>
                <a href={`https://${org.web}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2">
                  <Globe className="w-3 h-3" />{org.web} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Bailiff Rights */}
        <section id="bailiffs" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">If Bailiffs Come — Know Your Rights</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            Bailiffs (also called "enforcement agents") are sometimes sent by creditors to collect unpaid council tax, court fines, parking charges, or other debts. Many people do not know that bailiffs have very limited legal powers — and that they rely on people not knowing their rights. This section sets out exactly what they can and cannot do.
          </p>
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-6 text-sm text-amber-900 leading-relaxed">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <strong>Before a bailiff can visit your home</strong>, they must send you a "Notice of Enforcement" giving you at least <strong>7 clear days' warning</strong>. Use that time to get free advice from National Debtline (0808 808 4000) or Citizens Advice (0808 278 7855). Acting before the visit gives you the most options.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-700" />
                <h3 className="font-bold text-green-900">Bailiffs MUST:</h3>
              </div>
              <ul className="space-y-2 text-sm text-green-900">
                {[
                  "Send a Notice of Enforcement at least 7 clear days before visiting",
                  "Show you identification and a Warrant of Control on request",
                  "Be certificated by a court (you can check at certificatedbailiffs.co.uk)",
                  "Follow the Vulnerability Protocol if you tell them you are vulnerable",
                  "Treat you with dignity and respect at all times",
                  "Leave if asked to and a dispute is raised about the debt",
                  "Accept a payment arrangement if agreed with the original creditor",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-red-700" />
                <h3 className="font-bold text-red-900">Bailiffs CANNOT:</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-900">
                {bailiffCannotList.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="font-serif font-bold text-foreground mb-4 text-base">What to do if a bailiff comes — step by step</h3>
          <div className="space-y-3 mb-6">
            {bailiffSteps.map((s) => (
              <div key={s.step} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{s.step}</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900 leading-relaxed">
            <div className="flex items-start gap-2 mb-2">
              <Info className="w-4 h-4 mt-0.5 shrink-0" />
              <strong>The Vulnerability Protocol</strong>
            </div>
            <p className="mb-2">If you or someone in your household is in any of the following situations, tell the bailiff clearly and immediately — they are legally required to apply additional protections:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["Serious illness or disability", "Mental health condition", "Pregnant or recent birth", "Children under 16 in the home", "Aged over 70", "Recently bereaved", "Learning disability", "Facing domestic abuse", "Not fluent in English"].map((v) => (
                <div key={v} className="bg-blue-100 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-900">{v}</div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Source: Ministry of Justice — Taking Control of Goods: National Standards. Enforcement agents who fail to apply the protocol can be reported to their licensing authority and the original creditor.</p>
          </div>
        </section>

        {/* Homelessness */}
        <section id="homelessness" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-2">
            <Home className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Homelessness — Help for You and Help if You Know Someone at Risk</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            Homelessness in rural West Suffolk is less visible than in cities — but it is real. It includes people sleeping in cars or outbuildings, young people forced out of family homes, people leaving abusive relationships with nowhere to go, and veterans who have lost service accommodation. You do not have to be sleeping on a street to be homeless in law.
          </p>

          <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-6 text-sm text-rose-900 leading-relaxed">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <strong>At immediate risk tonight?</strong> Call West Suffolk Council's emergency housing line on <a href="tel:01284757000" className="font-bold underline hover:no-underline">01284 757000</a> — available 24/7 for out-of-hours housing emergencies. If someone is in immediate danger, always call <strong>999</strong> first.
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {homelessOrgs.map((org) => (
              <div key={org.name} className="bg-card border border-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-foreground text-base">{org.name}</h3>
                    <span className="text-xs font-semibold text-primary">{org.priority}</span>
                  </div>
                  <a href={`tel:${org.phone.replace(/[\s()]/g, "")}`} className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline shrink-0">
                    <Phone className="w-3.5 h-3.5" />{org.phone}
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  <Clock className="w-3.5 h-3.5 shrink-0" />{org.hours}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{org.what}</p>
                <a href={`https://${org.web}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                  <Globe className="w-3 h-3" />{org.web} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">If you know someone who might be homeless or at risk — warning signs</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              In a small community like Mildenhall, you often notice when a neighbour, friend, or family member isn't coping — before they ask for help. If you see any of these signs, a gentle conversation and a phone number could make all the difference.
            </p>
            <ul className="space-y-2">
              {warningSignsHomeless.map((sign) => (
                <li key={sign} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {sign}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">What you can do:</strong> You don't need to solve it. You just need to share a contact number. Point them to Shelter (0808 800 4444), Citizens Advice (0808 278 7855), or West Suffolk Council housing (01284 757080). If they are rough sleeping and won't engage, use Streetlink (0300 500 0914) to alert an outreach worker who will try to make contact — you do not need to give your name.
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-primary" />
                <h4 className="font-bold text-sm text-foreground">Your rights if you are homeless</h4>
              </div>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {[
                  "West Suffolk Council has a legal duty to assess your situation and produce a personalised housing plan if you are homeless or threatened with homelessness within 56 days",
                  "If you have dependent children, a disability, or have fled domestic abuse, you are likely to be in 'priority need' and the council must provide accommodation",
                  "You cannot be turned away without a written decision — you have the right to request a review of any decision within 21 days",
                  "Shelter can challenge council decisions and represent you for free",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Landmark className="w-4 h-4 text-primary" />
                <h4 className="font-bold text-sm text-foreground">Mental health and crisis support</h4>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {[
                  { name: "Samaritans", phone: "116 123", detail: "Free, 24/7, confidential. If you are overwhelmed and don't know where to turn." },
                  { name: "CALM (Campaign Against Living Miserably)", phone: "0800 58 58 58", detail: "Specialising in supporting men who feel in crisis. Webchat also available." },
                  { name: "Suffolk Mind", phone: "01473 218007", detail: "Local mental health support, wellbeing groups, and talking support." },
                  { name: "Suffolk Crisis Line", phone: "0808 196 3494", detail: "NHS Suffolk and North East Essex Mental Health crisis line — open 24/7." },
                ].map(({ name, phone, detail }) => (
                  <li key={name}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-foreground">{name}</span>
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1 text-primary font-bold hover:underline">
                        <Phone className="w-3 h-3" />{phone}
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* David's note */}
        <section className="bg-rose-50 border border-rose-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <HandHeart className="w-8 h-8 text-rose-700 shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-rose-900 text-lg mb-2">A note from David</h3>
              <p className="text-sm text-rose-900 leading-relaxed mb-2">
                I put this page on this website because I believe elected representatives should be useful — not just at election time. If you are in difficulty, you deserve to know who can help you, without having to navigate government websites or make five phone calls to find out.
              </p>
              <p className="text-sm text-rose-900 leading-relaxed mb-2">
                If you have used any of these services and found them helpful — or found a gap that should be filled — please <Link href="/contact" className="font-bold underline hover:no-underline">tell me</Link>. I will update this page as often as I can with accurate, current local information.
              </p>
              <p className="text-sm text-rose-900 leading-relaxed">
                And if you are struggling right now and don't know where to start: <strong>call Citizens Advice on 0808 278 7855.</strong> That call is free, confidential, and they will point you in the right direction, whatever your situation.
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-start pt-4">
          <Link href="/policies/poverty" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Poverty & Cost of Living policy
          </Link>
        </div>
      </div>
    </div>
  );
}
