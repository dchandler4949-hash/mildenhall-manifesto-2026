import { Link } from "wouter";
import { MapPin, ArrowLeft, Users, Droplets, Home, TreePine } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

const BASE = import.meta.env.BASE_URL;

const facts = [
  { icon: Users, label: "Population", value: "~1,400", note: "Compact, tight-knit village community" },
  { icon: Droplets, label: "River", value: "River Lark", note: "Flows through the parish — poor ecological status" },
  { icon: Home, label: "Housing", value: "Tier 4", note: "West Suffolk Local Plan settlement tier" },
  { icon: TreePine, label: "Character", value: "Village", note: "Rural with active community groups" },
];

const issues = [
  { title: "River Lark Water Quality", body: "The River Lark, which flows through Barton Mills, was classified as having 'poor ecological status' by the Environment Agency in 2022. Agricultural runoff and treated sewage discharge from upstream sources have degraded the river's health, harming wildlife and the landscape that defines the village." },
  { title: "A11/A1101 Road Safety", body: "Barton Mills sits at the junction of the A11 and A1101 — one of the busiest road junctions in the area. Speeding, HGV traffic, and the volume of vehicles from both American base personnel and local residents make pedestrian safety a persistent concern." },
  { title: "Speculative Development Pressure", body: "As a Tier 4 settlement in the West Suffolk Local Plan, Barton Mills faces ongoing pressure from speculative housing development. Without a community-led Neighbourhood Plan with legal weight, the village has limited ability to shape what gets built and where." },
  { title: "Bus Service Loss", body: "Bus services through Barton Mills have been progressively cut. Residents without a car — including older villagers, young people, and those with disabilities — have very few options for getting to Mildenhall, Bury St Edmunds, or medical appointments." },
];

export default function ParishBartonMills() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Barton Mills | David Chandler — Mildenhall Division"
        description="David Chandler's plans for Barton Mills village — rural services, bus routes, and local priorities for this parish in the Mildenhall Division. West Suffolk County Council 2026."
        path="/parishes/barton-mills"
      />
      <div className="bg-green-900 text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BASE}images/barton-mills-parish.png)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to the interactive map
          </Link>
          <div className="flex items-center gap-2 text-green-300 text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            Mildenhall Division — Parish Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Barton Mills Parish</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            A picturesque village on the River Lark, where the historic Bell pub, ancient church, and tight-knit community face real pressures from development, traffic, and environmental neglect.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {facts.map(({ icon: Icon, label, value, note }) => (
              <div key={label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <Icon className="w-5 h-5 text-green-300 mb-2" />
                <div className="text-xl font-bold text-green-300 mb-0.5">{value}</div>
                <div className="text-xs font-semibold text-white">{label}</div>
                <div className="text-xs text-white/60 mt-0.5">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-primary/5 flex items-center justify-center p-4 md:p-8">
          <img
            src={`${BASE}images/barton-mills-parish.png`}
            alt="Barton Mills parish map"
            className="max-h-72 w-auto object-contain mix-blend-multiply"
          />
        </div>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">About Barton Mills</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              Barton Mills is a village of approximately 1,400 people situated where the River Lark meets the A11. Its name derives from the barley mills that once operated along the river — a reminder of the agricultural heritage that still defines the Breckland landscape.
            </p>
            <p>
              The village has a <strong className="text-foreground">strong sense of community</strong> — with an active parish council, a village hall, and long-established social networks. St Mary's Church dates back to the 12th century. The <strong className="text-foreground">Bell public house</strong> serves as a community hub and is one of the oldest continuously licensed premises in the area.
            </p>
            <p>
              Barton Mills sits in a strategically important position at the <strong className="text-foreground">A11/A1101 junction</strong> — the gateway to both Mildenhall and the Fenland communities to the north. This brings connectivity, but also significant traffic, noise, and safety challenges for residents and pedestrians.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Key Issues Facing Barton Mills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {issues.map(({ title, body }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold font-serif text-foreground mb-2 text-base">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-green-50 border border-green-200 rounded-2xl p-8">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">Policies Most Relevant to Barton Mills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ["/policies/environment", "Environment"],
              ["/policies/transport", "Transport"],
              ["/policies/housing", "Housing"],
              ["/policies/policing", "Policing & Safety"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="px-4 py-2 bg-primary text-white font-semibold rounded-lg text-sm hover:bg-primary/90 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to the electoral map
          </Link>
          <Link href="/contact" className="px-5 py-2.5 bg-destructive text-white font-bold rounded-xl text-sm shadow hover:bg-destructive/90 transition-colors">
            Contact David about Barton Mills
          </Link>
        </div>
      </div>
    </div>
  );
}
