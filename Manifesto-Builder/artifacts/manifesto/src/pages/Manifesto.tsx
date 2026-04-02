import { PageSEO } from "@/components/PageSEO";

export default function Manifesto() {
  return (
    <div className="w-full bg-background pb-24">
      <PageSEO
        title="The Manifesto | David Chandler — Mildenhall Division"
        description="Read David Chandler's full manifesto for West Suffolk County Council 2026. Evidence-based policies on housing, transport, healthcare, environment, taxation and more for Mildenhall Division."
        path="/manifesto"
      />
      {/* Header */}
      <div className="bg-primary text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src={`${import.meta.env.BASE_URL}images/3_planes_mildenhall.png`} 
            alt="Mildenhall Airbase" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent font-semibold tracking-wider text-sm uppercase">
            David Chandler
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">The Manifesto</h1>
          <div className="w-24 h-1.5 bg-destructive mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            A practical, evidence-based plan for the Mildenhall Division
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <article className="prose prose-lg md:prose-xl prose-headings:font-serif prose-headings:text-primary prose-h2:text-3xl prose-h2:border-b prose-h2:border-border prose-h2:pb-4 prose-h2:mt-16 prose-a:text-destructive hover:prose-a:text-primary max-w-none">
          
          <p className="lead text-2xl font-serif text-primary mb-12 italic border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-lg">
            The Mildenhall Division — home to one of Britain's most unique communities. We sit alongside our American allies at one of the world's busiest military airbases, farm some of England's most productive breckland soils, and maintain villages whose histories stretch back to the Domesday Book. But we have been underserved by county government for too long. This manifesto sets out a practical, evidence-based plan to change that.
          </p>

          <h2>1. Living Alongside the Air Base</h2>
          <p>
            RAF Mildenhall hosts the 100th Air Refuelling Wing (KC-135 Stratotankers) and the 352nd Special Operations Wing. While we value our strategic role and our American neighbours, the impact on local life is severe.
          </p>
          <p>
            Aircraft noise affects over 3,000 homes in the highest impact zones according to the Department for Transport's Noise Contour Maps.
          </p>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 my-8 not-prose shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive"></span>
              Our Commitments:
            </h3>
            <ul className="space-y-3 text-muted-foreground ml-6 list-disc marker:text-destructive">
              <li>Deploy independent acoustic monitoring stations across all four parishes.</li>
              <li>Actively engage the MoD and USAF via the UK-US Status of Forces Agreement.</li>
              <li>Campaign for a nightly curfew (23:00-06:00) except for operational emergencies.</li>
              <li>Establish a comprehensive Noise Insulation Scheme for affected homes.</li>
            </ul>
          </div>

          <h2>2. Rural Connections</h2>
          <p>
            Our rural demographics demand better connectivity. 48% of Freckenham residents are over 65 (ONS Census 2021) — the highest proportion in the division. Meanwhile, GP surgeries in Mildenhall serve a growing catchment of 12,000+ patients with below-average GP ratios.
          </p>
          <p>
            Road safety is also a critical issue. The A1101 between Mildenhall and Barton Mills has recorded 23 road accidents in the past 3 years (Suffolk Police data).
          </p>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 my-8 not-prose shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive"></span>
              Our Commitments:
            </h3>
            <ul className="space-y-3 text-muted-foreground ml-6 list-disc marker:text-destructive">
              <li>Restore cut bus route frequencies to guarantee viable public transport.</li>
              <li>Construct a dedicated cycle and walking path along the A1101.</li>
              <li>Secure an NHS satellite clinic in Mildenhall to relieve GP pressure.</li>
              <li>Champion fair access to gigabit broadband for every village in the division — holding the Project Gigabit rollout to account so that rural communities like Barton Mills, Worlington and Freckenham are not left at the back of the queue as the county-wide upgrade proceeds through 2028.</li>
            </ul>
          </div>

          <h2>3. Protecting Village Life</h2>
          <p>
            West Suffolk's SHELAA designates all four of our parishes as having "limited housing need", yet they face constant speculative development threats. Only Mildenhall High Town has an adopted Neighbourhood Plan; Barton Mills, Freckenham and Worlington currently do not.
          </p>
          <p>
            We must protect our heritage assets, including Mildenhall's Saxon Treasure history, the medieval church of St Mary and St Andrew, and numerous Grade I listed buildings.
          </p>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 my-8 not-prose shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive"></span>
              Our Commitments:
            </h3>
            <ul className="space-y-3 text-muted-foreground ml-6 list-disc marker:text-destructive">
              <li>Provide dedicated support for Neighbourhood Plans for all three rural parishes.</li>
              <li>Strictly enforce Green Infrastructure requirements on all new developments.</li>
              <li>Protect and enhance the historic character of Mildenhall town centre.</li>
            </ul>
          </div>

          <h2>4. Our Local Economy</h2>
          <p>
            The Mildenhall town centre vacancy rate sits at approximately 18% — well above the national average of 14% (BRC 2023). However, our potential is vast. West Suffolk produces £186m of agricultural output annually, and our Breckland farming supports unique ecosystems.
          </p>
          <p>
            We also have untapped tourism potential with the Mildenhall Museum, the strategic Barton Mills roundabout gateway, and excellent walking and cycling routes.
          </p>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 my-8 not-prose shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive"></span>
              Our Commitments:
            </h3>
            <ul className="space-y-3 text-muted-foreground ml-6 list-disc marker:text-destructive">
              <li>Implement a targeted business rates relief scheme for independent traders.</li>
              <li>Introduce agri-tourism grants to support local farm diversification.</li>
              <li>Launch a market revival programme to bring life back to the High Town.</li>
            </ul>
          </div>

          <h2>5. Stronger Communities</h2>
          <p>
            We must support both ends of our demographic spectrum. 23% of Mildenhall Division residents are under 18, yet youth club provision has been cut by 60% since 2010. 
          </p>
          <p>
            Conversely, we face increasing dementia care needs, with West Suffolk having 6,200 people living with dementia (Alzheimer's Society, 2024). Thankfully, we have a strong foundation: 34% of rural Suffolk residents regularly volunteer, one of the highest rates nationally.
          </p>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 my-8 not-prose shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive"></span>
              Our Commitments:
            </h3>
            <ul className="space-y-3 text-muted-foreground ml-6 list-disc marker:text-destructive">
              <li>Restore targeted youth services and safe spaces for teenagers.</li>
              <li>Expand dementia-friendly community programmes across all parishes.</li>
              <li>Celebrate, resource, and unblock bureaucracy for our vital voluntary sector.</li>
            </ul>
          </div>

        </article>
      </div>
    </div>
  );
}
