import { Link } from "wouter";
import { GraduationCap, Bus, Shield, PoundSterling, Heart, Leaf, Home, HandHeart, Briefcase, Plane, Wheat, ArrowRight, Landmark } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

const policies = [
  {
    slug: "education",
    label: "Education",
    icon: GraduationCap,
    color: "bg-blue-600",
    summary: "Every child deserves a great education — regardless of their postcode, background, or ability. We will fight for more SEND support, local sixth form provision, and fair funding for all Mildenhall schools.",
  },
  {
    slug: "transport",
    label: "Transport",
    icon: Bus,
    color: "bg-orange-600",
    summary: "Not everyone can drive. We will restore evening and weekend bus routes, tackle dangerous roads, and ensure transport is affordable for young people, older residents, and disabled passengers.",
  },
  {
    slug: "policing",
    label: "Policing & Safety",
    icon: Shield,
    color: "bg-slate-700",
    summary: "Rural communities deserve the same protection as towns. We will push for more visible local policing, faster response times, and community-led safety initiatives across all four parishes.",
  },
  {
    slug: "taxation",
    label: "Taxation",
    icon: PoundSterling,
    color: "bg-emerald-700",
    summary: "It is not fair to pay town-level council tax for village-level services. We will demand rural-proofed budgeting and ensure that the most vulnerable pay the least and receive the most support.",
  },
  {
    slug: "health",
    label: "Health & NHS",
    icon: Heart,
    color: "bg-red-700",
    summary: "Healthcare is a right, not a privilege. We will fight for a rural health hub, shorter GP waiting times, NHS dental access for all, and proper mental health support in our community.",
  },
  {
    slug: "environment",
    label: "Environment",
    icon: Leaf,
    color: "bg-green-700",
    summary: "Our Breckland landscape, River Lark, and open spaces belong to everyone — not just those who can afford to enjoy them. We will protect them for this and every future generation.",
  },
  {
    slug: "housing",
    label: "Housing",
    icon: Home,
    color: "bg-amber-700",
    summary: "A secure, affordable home is the foundation of a good life. We will champion social housing, require more genuinely affordable homes in new developments, and protect communities from speculative building.",
  },
  {
    slug: "poverty",
    label: "Poverty & Cost of Living",
    icon: HandHeart,
    color: "bg-rose-700",
    summary: "Poverty is not a character flaw — it is a political choice. We will support food banks, warm spaces, debt advice, and fight the rural poverty premium that hits the least well-off hardest.",
  },
  {
    slug: "employment",
    label: "Employment",
    icon: Briefcase,
    color: "bg-indigo-700",
    summary: "Everyone who works should earn enough to live with dignity. We will push for the Real Living Wage, secure contracts, local apprenticeships, and skills training that reaches all corners of the division.",
  },
  {
    slug: "agriculture",
    label: "Agriculture & Food Security",
    icon: Wheat,
    color: "bg-amber-700",
    summary: "The UK feeds itself from imports for 40% of what it eats. In a world of trade wars, conflicts, and climate shocks, that is not a risk worth taking. David supports increasing domestic food production to over 85% self-sufficiency.",
  },
  {
    slug: "us-military",
    label: "U.S. Military Presence",
    icon: Plane,
    color: "bg-primary",
    summary: "RAF Mildenhall and Lakenheath are part of our community's identity — bringing jobs but also noise, congestion, and pressure. Residents deserve a formal voice in decisions that shape their daily lives.",
  },
  {
    slug: "democracy",
    label: "Democracy & Civic Participation",
    icon: Landmark,
    color: "bg-indigo-700",
    summary: "Suffolk's entire council structure is being reorganised. Voter turnout hit 15% when Police & Crime Commissioners were introduced. Rural votes cost more to collect than urban ones. This page sets out the facts — and what must change.",
  },
];

export default function Policies() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Our Policies | David Chandler — Mildenhall Division"
        description="Explore David Chandler's full policy platform for West Suffolk County Council 2026. Housing, transport, health, education, environment, taxation, policing and more — all evidence-based."
        path="/policies"
      />
      {/* Hero */}
      <div className="bg-primary text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold tracking-wider text-xs uppercase">
            Evidence-Based Action
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Policies</h1>
          <div className="w-20 h-1 bg-destructive mx-auto rounded-full mb-6" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Ten policy areas built around what our community actually needs — based on real data, real conversations, and a commitment to standing up for everyone in the Mildenhall Division, without exception.
          </p>
        </div>
      </div>

      {/* Inclusive welcome note */}
      <div className="bg-accent/10 border-b border-accent/20 py-5 px-4">
        <p className="max-w-4xl mx-auto text-center text-sm text-foreground leading-relaxed">
          <strong>Welcome — whoever you are.</strong> Whether you've voted all your life, never voted before, or aren't sure politics has ever really spoken to you — this is your campaign too. Every policy page has a quick survey. You don't need to register or give your name. Just your view.
        </p>
      </div>

      {/* Policy grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {policies.map(({ slug, label, icon: Icon, color, summary }) => (
            <Link
              key={slug}
              href={`/policies/${slug}`}
              className="group flex flex-col bg-card rounded-2xl border border-border hover:border-primary/40 shadow hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`${color} p-5 flex items-center gap-3`}>
                <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                <span className="text-white font-bold font-serif text-base">{label}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{summary}</p>
                <div className="flex items-center gap-1.5 mt-4 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Read the policy <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
