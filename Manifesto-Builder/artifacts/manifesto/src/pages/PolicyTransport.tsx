import { Link } from "wouter";
import { Bus, AlertTriangle, MapPin, Car, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { PolicySurveyBlock } from "@/components/PolicySurveyBlock";

const stats = [
  { value: "1", label: "Bus route links Worlington & Freckenham to the outside world — Route 357 only" },
  { value: "18:15", label: "Last bus from Bury St Edmunds — no Sunday service at all" },
  { value: "34%", label: "of residents cannot reach a GP within 30 mins by public transport" },
  { value: "£4,800", label: "Estimated annual cost of running a car in rural Suffolk (RAC estimate)" },
];

const routes = [
  { area: "Bury St Edmunds", detail: "14 bus routes, rail links to London (62 mins), Cambridge (48 mins), Peterborough. Evening and weekend services throughout." },
  { area: "Newmarket", detail: "Regular bus to Cambridge and Bury St Edmunds. Connections to rail at Cambridge." },
  { area: "Haverhill", detail: "Multiple routes to Cambridge, Saffron Walden, Sudbury with evening services." },
  { area: "Mildenhall Division", detail: "Route 357 (Bury St Edmunds), Route 16 (Newmarket/Bury), plus limited routes 355/358/200. No evening service. No Sunday service. No rail within 15 miles. Worlington and Freckenham served by Route 357 only — Barton Mills effectively school-buses only.", highlight: true },
];

export default function PolicyTransport() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Transport Policy | David Chandler — Mildenhall Division"
        description="Bus services, rural transport, and connectivity for Mildenhall, Barton Mills, Worlington and Freckenham. David Chandler's transport policy for West Suffolk County Council 2026."
        path="/policies/transport"
      />
      <div className="bg-primary text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
            <Bus className="w-4 h-4" aria-hidden="true" />
            Transport · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Transport</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            The freedom to get where you need to go should not depend on whether you can afford a car. In rural Mildenhall, that freedom has been stripped away from those who can least afford to lose it — the elderly, young people, disabled residents, and low-income families.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{s.value}</div>
                <div className="text-xs text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">The Local Picture</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              In the Mildenhall Division, <strong className="text-foreground">78% of households own or have access to a car</strong> (ONS Census 2021). That sounds high — but it means <strong className="text-foreground">22% of households have no car</strong>, and many of those with a car cannot always use it (through disability, medical conditions, age, or cost).
            </p>
            <p>
              Bus services have been progressively cut over the past decade. The key routes serving Mildenhall are <strong className="text-foreground">Route 357 to Bury St Edmunds</strong> and <strong className="text-foreground">Route 16 via Newmarket</strong> — but Worlington and Freckenham depend on the 357 alone, Barton Mills is served effectively only by school-day services, and there is no evening or Sunday service on any route. No direct link to a train station.
            </p>
            <p>
              The A1101 between Mildenhall and Barton Mills has recorded <strong className="text-foreground">27 injury accidents between 2018 and 2023</strong> (Suffolk Highways data). Yet no permanent safety improvements have been made. Road deaths and serious injuries in rural Suffolk are consistently higher than the county average.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">How We Compare</h2>
          <p className="text-muted-foreground mb-6">Mildenhall is one of the most transport-isolated communities in Suffolk for a town of its size.</p>
          <div className="space-y-3">
            {routes.map((r) => (
              <div key={r.area} className={`flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl border ${r.highlight ? "border-destructive bg-destructive/5" : "border-border bg-card"}`}>
                <div className="flex items-center gap-2 shrink-0">
                  {r.highlight ? <AlertTriangle className="w-4 h-4 text-destructive" /> : <MapPin className="w-4 h-4 text-primary" />}
                  <strong className={`font-semibold ${r.highlight ? "text-destructive" : "text-foreground"}`}>{r.area}</strong>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{r.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Sources: Suffolk County Council transport data, Traveline, ONS Census 2021, Suffolk Highways Road Safety 2023.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Car, title: "The Car Poverty Trap", body: "Running a car in rural Suffolk costs an estimated £4,800 per year — equivalent to 17% of the median local wage. For those on Universal Credit, zero-hours contracts, or pensions, this is simply unaffordable. The absence of buses forces car ownership; car ownership enforces poverty." },
            { icon: Clock, title: "Healthcare Access", body: "34% of Mildenhall residents cannot reach their GP within 30 minutes by public transport (West Suffolk Council accessibility analysis). For hospital appointments, the problem is even worse — many miss crucial follow-ups because they cannot get there and back in a single day without a car." },
            { icon: Bus, title: "Young People Left Behind", body: "Young people under 17 who cannot drive, and those who have passed their test but cannot afford a car, are effectively housebound after 18:15 on weekdays and all day Sunday. This cuts them off from employment, education, leisure, and social connection." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-5">
              <Icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold font-serif text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </section>

        {/* Bus passes sub-page link */}
        <section className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-foreground mb-2">Free Bus Passes — Do You Know What You're Entitled To?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                If you are 66 or over, or have a qualifying disability, you are entitled to a free bus pass valid on local services anywhere in England — issued free by Suffolk County Council. Around one in four eligible residents doesn't hold one. Our guide covers who qualifies, exactly what it covers, local route information, and direct links to apply online.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/policies/bus-passes" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary/90 transition-colors">
                  Bus pass guide — who qualifies & how to apply <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">What Do You Think?</h2>
          <p className="text-muted-foreground mb-6">Tell us how you travel — and what you find impossible. Whether you drive every day or rely on others to get around, your experience shapes what we fight for.</p>
          <PolicySurveyBlock surveyTitle="Transport Survey — Mildenhall Division" />
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments</h2>
          <div className="space-y-4">
            {[
              { c: "Protect and restore bus services", d: "Work with Suffolk County Council to protect Route 357 — the lifeline for Worlington and Freckenham — and reinstate subsidised evening and Sunday routes. No community should be cut off after 6pm or all weekend." },
              { c: "Fight for discounted and free bus passes", d: "Push for free or heavily discounted passes for under-25s, over-60s, and disabled residents — as a right, not a privilege." },
              { c: "Demand A1101 safety improvements now", d: "With 27 recorded injury accidents in five years, the A1101 needs permanent speed reduction, better lighting, and safe crossing points. This is a life-and-death issue." },
              { c: "Improve cycling and walking infrastructure", d: "Lobby for safe cycle paths between Mildenhall and Barton Mills, and accessible pavements that work for wheelchair users, pushchair users, and mobility aid users." },
              { c: "Community transport scheme for isolated residents", d: "Support the development of a community transport scheme — volunteer-led, council-supported — for residents who cannot use conventional buses." },
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
