import { Link } from "wouter";
import { Heart, AlertTriangle, MapPin, Stethoscope, Brain, Home, Users, Search, ExternalLink, Building2 } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { PolicySurveyBlock } from "@/components/PolicySurveyBlock";

const stats = [
  { value: "16 days", label: "Average wait for a GP appointment in West Suffolk vs 11 days nationally" },
  { value: "1", label: "NHS dentist in Mildenhall — serving approximately 12,000 patients" },
  { value: "45+ min", label: "Mental health crisis team response time in rural Suffolk" },
  { value: "11 miles", label: "To the nearest A&E — West Suffolk Hospital, Bury St Edmunds" },
];

const comparisons = [
  { area: "Bury St Edmunds", detail: "West Suffolk Hospital A&E. Multiple GP practices. NHS dental provision. Walk-in centre. Mental health crisis line with same-day response." },
  { area: "Ipswich", detail: "Ipswich Hospital A&E. Extensive GP network. Multiple NHS dental practices. IAPT mental health services with rapid referral." },
  { area: "Cambridge (30 miles away)", detail: "Addenbrooke's Hospital — major trauma centre. CPFT mental health services. Extensive NHS dentistry. World-class specialist care." },
  { area: "Mildenhall Division", detail: "Mildenhall Surgery (4 GPs, ~12,000 patients). One NHS dentist. No walk-in centre. 45-minute mental health crisis response. 11-mile drive to A&E.", highlight: true },
];

export default function PolicyHealth() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Health Policy | David Chandler — Mildenhall Division"
        description="GP access, NHS dentists, and rural healthcare for Mildenhall Division. David Chandler's health policy for West Suffolk County Council 2026 — no NHS dentist, 16-day GP waits, and what he'll do about it."
        path="/policies/health"
      />
      <div className="bg-red-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-red-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Heart className="w-4 h-4" aria-hidden="true" />
            Health & NHS · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Health & NHS</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            Good health is not something you should have to earn, travel for, or wait months to access. Whether you are managing a long-term condition, caring for a family member, or in a mental health crisis, you deserve responsive, compassionate, local care.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-red-300 mb-1">{s.value}</div>
                <div className="text-xs text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Sub-page entry cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/policies/social-care">
            <div className="flex items-start gap-4 bg-red-900/5 border-2 border-red-800/30 rounded-xl p-5 cursor-pointer hover:border-red-800 transition-colors group">
              <Building2 className="w-7 h-7 text-red-800 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-red-900 mb-1 text-sm">Nationalise Social Care — Bring It Into the NHS</h3>
                <p className="text-red-800/80 text-xs leading-relaxed">Full financial analysis: 2% income tax rise, council tax reduction, what you'd keep, what workers would gain, and what the current system wastes.</p>
                <span className="text-red-700 font-semibold text-xs mt-2 inline-block underline">View the case for nationalisation →</span>
              </div>
            </div>
          </Link>
          <Link href="/policies/care-homes">
            <div className="flex items-start gap-4 bg-red-50 border-2 border-red-200 rounded-xl p-5 cursor-pointer hover:border-red-400 transition-colors group">
              <Home className="w-7 h-7 text-red-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-red-900 mb-1 text-sm">Care Homes — Costs, Access &amp; Funding</h3>
                <p className="text-red-700 text-xs leading-relaxed">Local vs Suffolk vs national care home costs, who qualifies for funding, the means-test cliff, local homes and their CQC ratings, and what David will fight for.</p>
                <span className="text-red-600 font-semibold text-xs mt-2 inline-block underline">View care homes data →</span>
              </div>
            </div>
          </Link>
          <Link href="/policies/care-workers">
            <div className="flex items-start gap-4 bg-slate-50 border-2 border-slate-200 rounded-xl p-5 cursor-pointer hover:border-primary transition-colors group">
              <Users className="w-7 h-7 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-1 text-sm">Care Workers — Pay, Rights &amp; Support</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">Pay compared to NHS and living wage, unpaid travel time, workforce vacancy data, union and legal rights, mental health support, and David's commitments.</p>
                <span className="text-primary font-semibold text-xs mt-2 inline-block underline">View care worker information →</span>
              </div>
            </div>
          </Link>
        </div>

        {/* NHS Finder quick links */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-5 h-5 text-red-700 shrink-0" />
            <h2 className="text-lg font-serif font-bold text-red-900">Find NHS Services Near You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: "🩺", label: "Find a GP", url: "https://www.nhs.uk/service-search/find-a-gp", desc: "GP practices near IP28 accepting new patients" },
              { icon: "🦷", label: "Find an NHS Dentist", url: "https://www.nhs.uk/service-search/find-a-dentist", desc: "NHS dentists including emergency access" },
              { icon: "💊", label: "Find a Pharmacy", url: "https://www.nhs.uk/service-search/pharmacy/find-a-pharmacy", desc: "Including out-of-hours pharmacies" },
              { icon: "🏥", label: "NHS 111 Online", url: "https://111.nhs.uk", desc: "Urgent advice without going to A&E" },
              { icon: "🧠", label: "NHS Mental Health", url: "https://www.nhs.uk/mental-health/", desc: "Self-referral and crisis support" },
              { icon: "📋", label: "Suffolk Adult Care", url: "https://www.suffolk.gov.uk/adults/", desc: "Care needs assessment and local services" },
              { icon: "📍", label: "West Suffolk Hospital", url: "https://www.wsh.nhs.uk", desc: "Your nearest A&E — 11 miles, Bury St Edmunds" },
              { icon: "🤝", label: "Suffolk Carers Matter", url: "https://www.suffolkcarersmatter.org.uk", desc: "Support for unpaid carers in Suffolk" },
            ].map(({ icon, label, url, desc }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-2 bg-white border border-red-200 rounded-xl p-3 hover:border-red-400 transition-all group">
                <span className="text-lg shrink-0">{icon}</span>
                <div>
                  <div className="font-semibold text-xs text-red-900 group-hover:underline">{label}</div>
                  <div className="text-xs text-red-700/70 mt-0.5 leading-snug">{desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">The Local Picture</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              Mildenhall Surgery serves approximately <strong className="text-foreground">12,000 patients with four GPs</strong>. The national recommended ratio is one GP per 2,000 patients — Mildenhall's is closer to one per 3,000. Patients regularly wait <strong className="text-foreground">two to three weeks for a routine appointment</strong>.
            </p>
            <p>
              There is <strong className="text-foreground">one NHS dentist in Mildenhall</strong> — and it is not accepting new patients. Thousands of local residents have no access to NHS dental care and either go private, travel to neighbouring towns, or — most commonly — go without.
            </p>
            <p>
              Mental health services are particularly underprovided. The nearest CAMHS (Child and Adolescent Mental Health Services) face-to-face service is in Bury St Edmunds. The adult mental health crisis team covers a large rural area and routinely takes <strong className="text-foreground">45 minutes or more to respond</strong> to urgent calls.
            </p>
            <p>
              Life expectancy for men in Mildenhall (79.1 years) is <strong className="text-foreground">1.5 years below the Suffolk average</strong> of 80.6 years. This gap is not a coincidence — it reflects years of underinvestment in primary care, preventive health, and community support services in rural areas.
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
                  <strong className={`font-semibold text-sm ${c.highlight ? "text-destructive" : "text-foreground"}`}>{c.area}</strong>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{c.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Sources: NHS Digital GP Workforce data 2023, NHS England dental access statistics, ONS Life Expectancy estimates, Suffolk & NE Essex ICB.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Stethoscope, title: "GP Crisis in Rural Areas", body: "NHS England data shows rural GP practices are harder to recruit to, more expensive to run per patient, and more likely to close. Suffolk already has fewer GPs per head than the national average. Without intervention, Mildenhall Surgery's capacity will continue to fall behind demand." },
            { icon: Brain, title: "The Mental Health Postcode Lottery", body: "Where you live should not determine whether you get mental health support within hours or weeks. Rural residents wait longer, travel further, and are less likely to be referred. Young people in the Mildenhall area wait an average of 18 weeks for CAMHS assessment." },
            { icon: Heart, title: "Caring for Carers", body: "An estimated 1 in 8 adults in England are unpaid carers — the number in rural areas is higher, as formal care services are harder to access. These carers are invisible in health statistics yet carry enormous burden. David will push for dedicated carer support services in the division." },
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
          <p className="text-muted-foreground mb-6">Your experience of healthcare — good or bad — matters. Tell us what works, what doesn't, and what you need most. No medical knowledge needed.</p>
          <PolicySurveyBlock surveyTitle="Health & NHS Survey — Mildenhall Division" />
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments</h2>
          <div className="space-y-4">
            {[
              { c: "Campaign for a Mildenhall Rural Health Hub", d: "Lobby the Suffolk & NE Essex ICB and NHS England to establish a dedicated health hub in Mildenhall — bringing together GP, dental, physiotherapy, and mental health services under one roof, accessible to all." },
              { c: "Push for more NHS dental provision", d: "Work with NHS England to commission additional NHS dental contracts in the Mildenhall area — dental care is a right, not a luxury, and residents cannot access it." },
              { c: "Fight for mental health investment", d: "Advocate for investment in community mental health teams for rural West Suffolk — same-day crisis response, peer support groups, and meaningful prevention rather than crisis-only services." },
              { c: "Support unpaid carers", d: "Push West Suffolk Council and the NHS to provide a dedicated unpaid carer support programme — respite care, financial advice, and emotional support for those looking after family members." },
              { c: "Champion preventive health", d: "Support investment in community health programmes — walking groups, healthy eating initiatives, smoking cessation — designed to be accessible regardless of income, mobility, or literacy." },
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
