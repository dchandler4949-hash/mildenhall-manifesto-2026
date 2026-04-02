import { Link } from "wouter";
import { ArrowRight, Plane, Bus, Home as HomeIcon, FileText } from "lucide-react";
import { InteractiveElectoralMap } from "../components/InteractiveElectoralMap";
import { PageSEO } from "@/components/PageSEO";

export default function Home() {
  return (
    <div className="w-full">
      <PageSEO
        title="David Chandler | Independent Candidate — Mildenhall Division, West Suffolk County Council"
        description="David Chandler is standing as an Independent for the Mildenhall Division at West Suffolk County Council 2026. Serving Mildenhall High Town, Barton Mills, Worlington and Freckenham. Evidence-based policies, three public pledges."
        path="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-destructive/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent font-semibold tracking-wide text-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Unitas et Vigilantia — Unity & Vigilance
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg font-serif">
                Mildenhall Division <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-destructive">Deserves Better</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-10 font-light leading-relaxed max-w-2xl">
                Serving Mildenhall High Town, Barton Mills, Worlington & Freckenham
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/manifesto" 
                  className="px-8 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Read The Manifesto
                </Link>
                <Link 
                  href="/surveys" 
                  className="px-8 py-4 bg-destructive text-white hover:bg-destructive/90 font-bold rounded shadow-xl shadow-destructive/20 hover:shadow-2xl hover:shadow-destructive/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
                >
                  Have Your Say
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Download letter CTA */}
              <div className="mt-5 flex items-start gap-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-5 py-4 max-w-md">
                <FileText className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-sm mb-0.5">Open Letter to All Voters</p>
                  <p className="text-white/70 text-xs leading-snug mb-2">Three public pledges — including never cancelling elections, freezing councillor allowances, and holding surgeries in every parish. Print and share with neighbours who aren't online.</p>
                  <Link
                    href="/letter"
                    className="inline-flex items-center gap-1.5 bg-accent text-primary text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Read &amp; Download Letter
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src={`${import.meta.env.BASE_URL}images/mildenhall-division-crest.jpg`}
                alt="Mildenhall Division Crest"
                className="w-full max-w-md drop-shadow-2xl rounded-2xl border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Electoral Map */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif text-primary">Our Four Communities</h2>
            <div className="w-24 h-1.5 bg-destructive mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Mildenhall Division spans one market town and three rural parishes. Click any area of the map to explore that community.
            </p>
          </div>

          <InteractiveElectoralMap />

          {/* Parish quick-links below the map */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { href: "/parishes/mildenhall-high-town", label: "Mildenhall High Town", img: "mildenhall-high-town.png", color: "bg-primary" },
              { href: "/parishes/barton-mills", label: "Barton Mills", img: "barton-mills-parish.png", color: "bg-green-800" },
              { href: "/parishes/worlington", label: "Worlington", img: "worlington-parish.png", color: "bg-amber-800" },
              { href: "/parishes/freckenham", label: "Freckenham", img: "freckenham-parish.png", color: "bg-red-900" },
            ].map(({ href, label, img, color }) => (
              <Link
                key={href}
                href={href}
                className="group block rounded-xl overflow-hidden border border-border shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-32 bg-primary/5 flex items-center justify-center p-3 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${img}`}
                    alt={label}
                    className="h-full w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className={`${color} text-white text-center py-2.5 px-3`}>
                  <span className="font-semibold text-sm group-hover:underline">{label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif text-primary">Evidence-Based Priorities</h2>
            <div className="w-24 h-1.5 bg-destructive mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real local data driving real solutions for our communities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Plane className="w-10 h-10 text-destructive mb-4" />,
                title: "Living Alongside the Air Base",
                body: "RAF Mildenhall has been home to USAF operations since 1934. KC-135, C-17, and C-130 aircraft operate year-round, with noise levels regularly exceeding 75dB — well above WHO recommended daytime limits of 55dB. Over 3,000 households in the Mildenhall area are in the highest noise impact zones.",
                pledge: "Independent noise monitoring, binding night-flight restrictions, and a community compensation fund negotiated with the Ministry of Defence."
              },
              {
                icon: <Bus className="w-10 h-10 text-destructive mb-4" />,
                title: "Connecting Our Communities",
                body: "Only 34% of West Suffolk residents without a car can reach a GP surgery within 30 minutes by public transport (West Suffolk Council, 2022). The 11 and 24 bus routes serving Mildenhall have had frequency cut by 40% since 2019.",
                pledge: "Restore and improve bus services, safer road crossings on the A1101, and champion fair gigabit broadband rollout so our villages aren't last in line as Project Gigabit reaches Suffolk through 2028."
              },
              {
                icon: <HomeIcon className="w-10 h-10 text-destructive mb-4" />,
                title: "Protecting Village Character",
                body: "West Suffolk Local Plan allocates 3,840 new homes in the Mildenhall area by 2040. Barton Mills, Freckenham and Worlington are designated as Tier 4 and 5 settlements — the most vulnerable to speculative development.",
                pledge: "Every parish to have a Neighbourhood Plan, developer contributions ring-fenced for local infrastructure, and a moratorium on greenfield building in Tier 5 villages."
              }
            ].map((priority, i) => (
              <div 
                key={i}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="p-4 bg-primary/5 rounded-2xl inline-flex w-fit mb-6">
                  {priority.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary font-serif">{priority.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{priority.body}</p>
                <div className="bg-muted p-5 rounded-xl mb-6 border border-border">
                  <span className="font-bold text-xs uppercase tracking-wider text-destructive block mb-2">Campaign Pledge</span>
                  <p className="text-sm font-medium text-foreground">{priority.pledge}</p>
                </div>
                <Link href="/policies" className="inline-flex items-center text-primary font-semibold hover:text-destructive transition-colors mt-auto group">
                  Read policy details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Survey CTA */}
      <section className="py-24 bg-destructive text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-serif">Help Shape the Manifesto — Have Your Say</h2>
          <p className="text-xl text-white/90 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            Your priorities drive our campaign. Take the 2-minute survey and see live results as your neighbours respond.
          </p>
          <Link 
            href="/surveys" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-destructive font-bold rounded-xl shadow-xl hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 text-lg group"
          >
            Take the Survey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
