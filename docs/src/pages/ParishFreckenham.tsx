import { Link } from "wouter";
import { MapPin, ArrowLeft, Users, Castle, Home, Leaf } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

const BASE = import.meta.env.BASE_URL;

const facts = [
  { icon: Users, label: "Population", value: "~300", note: "Smallest parish in the division" },
  { icon: Castle, label: "Heritage", value: "Saxon", note: "Anglo-Saxon origin — name means 'Freca's homestead'" },
  { icon: Home, label: "Housing tier", value: "Tier 5", note: "Highest protection from speculative development" },
  { icon: Leaf, label: "Setting", value: "Breckland", note: "Adjacent to Special Area of Conservation" },
];

const issues = [
  { title: "Extreme Rural Isolation", body: "With approximately 300 residents, Freckenham is the smallest and most isolated parish in the division. There is no village shop, no pub, and extremely limited public transport. Residents depend almost entirely on private cars for all daily needs — making fuel costs, car ownership expenses, and any disability that prevents driving a serious hardship." },
  { title: "Highest Child Poverty Rate", body: "Research estimates that approximately 24% of children in Freckenham are in relative poverty — the highest rate in the Mildenhall Division. The combination of agricultural wages, high transport costs, and lack of local services creates a poverty trap that is invisible to those who don't live here." },
  { title: "Protection from Unwanted Development", body: "Despite its Tier 5 designation, Freckenham's very small size and open agricultural landscape make it potentially attractive to speculative developers. The parish has limited resources to fight planning appeals. David will be a vocal defender of genuine Tier 5 protection." },
  { title: "Broadband and Digital Exclusion", body: "Freckenham's rural location means many properties still lack superfast broadband. While Project Gigabit — the Government's £5bn programme — includes Freckenham in its rural rollout zone and promises gigabit speeds of up to 2.5Gbps by 2028, hard-to-reach villages like this are historically left to last. David will champion the fair rollout of Project Gigabit so Freckenham benefits alongside, not after, better-connected areas." },
];

export default function ParishFreckenham() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Freckenham | David Chandler — Mildenhall Division"
        description="David Chandler's plans for Freckenham — the smallest parish in the Mildenhall Division. Rural isolation, high parish precept, and local priorities. West Suffolk County Council 2026."
        path="/parishes/freckenham"
      />
      <div className="bg-red-900 text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BASE}images/freckenham-parish.png)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to the interactive map
          </Link>
          <div className="flex items-center gap-2 text-red-300 text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            Mildenhall Division — Parish Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Freckenham Parish</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            The smallest and most rural community in the division — a Saxon village of 300 people whose ancient heritage and natural tranquillity mask very real challenges of isolation, poverty, and neglect from those in power.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {facts.map(({ icon: Icon, label, value, note }) => (
              <div key={label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <Icon className="w-5 h-5 text-red-300 mb-2" />
                <div className="text-xl font-bold text-red-300 mb-0.5">{value}</div>
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
            src={`${BASE}images/freckenham-parish.png`}
            alt="Freckenham parish map"
            className="max-h-72 w-auto object-contain mix-blend-multiply"
          />
        </div>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">About Freckenham</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              Freckenham is the smallest and oldest community in the Mildenhall Division. Its name derives from the Anglo-Saxon "Freca's homestead" — a settlement with roots going back over a thousand years. Today, approximately 300 people live here, making it one of the most rural communities in West Suffolk.
            </p>
            <p>
              <strong className="text-foreground">St Andrew's Church</strong> stands at the heart of the village, containing Norman stonework and a history that stretches back to the earliest years of Christianity in Suffolk. The village green and surrounding lanes retain much of their historic character — a setting of genuine beauty, but one that comes with the challenges of extreme rurality.
            </p>
            <p>
              Freckenham is surrounded by <strong className="text-foreground">Breckland farmland</strong> and sits adjacent to the <strong className="text-foreground">Breckland Special Area of Conservation</strong> — one of England's most important and rarest habitats. The village's natural setting is a precious asset that must be protected for future generations, not sacrificed to speculative development.
            </p>
            <p>
              David is committed to ensuring that <strong className="text-foreground">Freckenham is not forgotten</strong> — that its residents have the same access to services, support, and political representation as anyone living in a larger town. Small does not mean unimportant. Three hundred voices deserve to be heard.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Key Issues Facing Freckenham</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {issues.map(({ title, body }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold font-serif text-foreground mb-2 text-base">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Special callout for smallest community */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex gap-4">
          <div className="text-3xl shrink-0">🏡</div>
          <div>
            <h3 className="font-serif font-bold text-red-900 text-lg mb-1">The Smallest Voice Matters Most</h3>
            <p className="text-red-800 text-sm leading-relaxed">
              With 300 residents, Freckenham is the easiest community to overlook. David's commitment is the opposite: the smaller the community, the more deliberately it must be included. Every planning decision, every service cut, every transport change affects Freckenham disproportionately — and David will say so, loudly, in the Council chamber.
            </p>
          </div>
        </div>

        <section className="bg-red-50 border border-red-200 rounded-2xl p-8">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">Policies Most Relevant to Freckenham</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ["/policies/transport", "Transport"],
              ["/policies/poverty", "Poverty & Cost of Living"],
              ["/policies/environment", "Environment"],
              ["/policies/housing", "Housing"],
              ["/policies/taxation", "Taxation"],
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
            Contact David about Freckenham
          </Link>
        </div>
      </div>
    </div>
  );
}
