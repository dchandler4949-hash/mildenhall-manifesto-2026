import { Link } from "wouter";
import { Wheat, AlertTriangle, Shield, TrendingUp, ChevronLeft, ChevronRight, Globe, Leaf } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

// ─── KEY STATISTICS ────────────────────────────────────────────────────────────
const heroStats = [
  { value: "~60%", label: "UK food self-sufficiency today — all foods (DEFRA, 2022/23)" },
  { value: "78%", label: "Peak UK self-sufficiency reached in 1984 — and it has fallen every decade since" },
  { value: "85%+", label: "David's target — restoring and exceeding the historic peak for long-term food security" },
  { value: "~74%", label: "Self-sufficiency for food types the UK climate can grow — still well below what is achievable" },
];

// ─── GEOPOLITICAL RISKS ────────────────────────────────────────────────────────
const risks = [
  {
    title: "War in Ukraine",
    body: "Ukraine and Russia together supply around 30% of the world's wheat and 15% of global maize exports. Russia also supplies approximately 20% of global potash fertiliser and significant nitrogen fertiliser. When the 2022 invasion began, UK wheat prices spiked 60% in weeks. The UK had no strategic grain reserve to cushion that shock — households and food businesses absorbed the full cost.",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
  },
  {
    title: "Trade Embargos and Tariff Shocks",
    body: "Brexit demonstrated how quickly trade friction can disrupt food supply chains. A serious trade dispute with the EU — which supplies 27% of UK food imports — could result in empty shelves within days for fresh produce. Many UK supermarkets operate on 2–5 day stock levels. There is no buffer. The more food we grow at home, the less vulnerable we are to any country's political decisions.",
    icon: Globe,
    color: "text-amber-700",
    bg: "bg-amber-50 border-amber-200",
  },
  {
    title: "Climate-Related Crop Failures",
    body: "Extreme heat, drought, and flooding are already reducing harvests in Southern Europe and North Africa — regions the UK relies on heavily for winter vegetables, olive oil, and citrus. As climate change intensifies, the availability and price of imported food will become increasingly unpredictable. A domestic food base is insurance against global climate disruption.",
    icon: Leaf,
    color: "text-green-700",
    bg: "bg-green-50 border-green-200",
  },
  {
    title: "Pandemic and Supply Chain Collapse",
    body: "COVID-19 exposed the fragility of just-in-time supply chains. Supermarket shelves ran bare within days of panic buying beginning. The UK had no strategic food stockpile. Lorry driver shortages, port delays, and factory closures compounded the problem. A country that cannot feed itself without smooth global trade is a country that cannot guarantee its own security.",
    icon: Shield,
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-200",
  },
];

// ─── THREATS TO UK FOOD PRODUCTION ────────────────────────────────────────────
const threats = [
  { threat: "Industrial solar farms on agricultural land", detail: "Sunnica alone covers ~1,130 hectares. Nationally, over 500,000 acres of farmland has been proposed or consented for solar development. This land is removed from food production for the life of the lease — typically 35–40 years." },
  { threat: "Housing development on Grade 1–3a land", detail: "Planning policy is supposed to protect the best agricultural land, but decisions are routinely made that approve housing on productive farmland. Once built on, that land is gone permanently." },
  { threat: "Import dependency driving farm bankruptcies", detail: "UK farmers compete against cheaper imported food that does not meet UK environmental and welfare standards. This has driven thousands of farms out of business. Fewer farms means less capacity to produce food domestically." },
  { threat: "Underfunded Environmental Land Management scheme", detail: "The post-Brexit ELM scheme pays farmers for environmental outcomes, but if food production is not also valued, the incentive is to reduce productive farming. Both food and environment must be rewarded — not one at the expense of the other." },
  { threat: "Soil degradation and declining yield potential", detail: "Intensive farming has degraded soil health across much of England. Falling organic matter and soil compaction reduce yields over time. Without investment in soil restoration, productive capacity declines even on existing farmland." },
  { threat: "Rising input costs with no price floor protection", detail: "Energy prices, fertiliser costs, and machinery costs have all risen sharply. Without fair farmgate prices or input cost support, farmers lose money growing food and leave the industry." },
];

// ─── POLICY COMMITMENTS ────────────────────────────────────────────────────────
const commitments = [
  {
    c: "Protect all Grade 1, 2, and 3a agricultural land from non-food development",
    d: "Lobby for a planning presumption against development — including solar farms, warehouses, and housing — on the best and most versatile agricultural land. This is essential to maintaining production capacity. Suffolk's arable land is among the most productive in England and must be treated as a national strategic asset.",
  },
  {
    c: "Establish a 90-day national strategic food reserve for key staples",
    d: "The UK has no meaningful food stockpile. David supports creating a strategic reserve for wheat, rice, cooking oil, and other dietary staples — comparable to the oil strategic reserve — to provide a buffer against supply disruption from any cause: war, pandemic, extreme weather, or trade embargo.",
  },
  {
    c: "Set a binding 85% food self-sufficiency target in law",
    d: "The UK's self-sufficiency has fallen from 78% in 1984 to around 60% today. David supports a legally binding target to restore and exceed that level by 2035, measured by both calorie and nutritional value, with annual parliamentary reporting on progress.",
  },
  {
    c: "Support farmers with fair payment for food production as a public good",
    d: "Food security is a national strategic interest, not just a market commodity. Farmers who grow food for domestic consumption should receive public support recognising the strategic value of what they produce — not just environmental payments that may disincentivise production.",
  },
  {
    c: "Invest in precision agriculture to increase yield per hectare",
    d: "GPS-guided machinery, drone monitoring, variable-rate application of inputs, and precision irrigation can significantly increase yields without expanding the land footprint. Technology investment in farming is food security investment.",
  },
  {
    c: "Require UK procurement to prioritise British food",
    d: "Schools, hospitals, care homes, prisons, and other public institutions spend billions on food annually. Prioritising British-grown produce in public procurement creates guaranteed demand for domestic farmers and reduces import dependency in a measurable, immediate way.",
  },
  {
    c: "Tackle food waste to improve effective self-sufficiency",
    d: "Approximately 30% of food produced globally never reaches a human stomach. In the UK, 9.5 million tonnes of food is wasted annually (WRAP, 2023). Reducing waste at farm, retail, and household level effectively increases the food available from existing production without any additional land use.",
  },
];

export default function PolicyAgriculture() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Agriculture Policy | David Chandler — Mildenhall Division"
        description="Supporting Suffolk farmers, food security, and rural land use. David Chandler's agriculture policy for West Suffolk County Council 2026 — protecting farmland and food sovereignty."
        path="/policies/agriculture"
      />

      {/* Hero */}
      <div className="bg-amber-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/policies/environment"
            className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
            Environment & Land Policy
          </Link>
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Wheat className="w-4 h-4" aria-hidden="true" />
            Agriculture & Food Security · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Feed Ourselves First — The Case for British Food Security
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            The UK feeds itself from imports for 40% of what it eats. In a world of trade wars, military conflicts, pandemics, and climate shocks, that is not a risk worth taking. David supports increasing domestic food production to over 85% self-sufficiency — and protecting the land needed to get there.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-xl md:text-2xl font-bold text-amber-300 mb-1">{s.value}</div>
                <div className="text-xs text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* The context */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">How We Got Here — A Decades-Long Decline</h2>
          </div>
          <div className="prose prose-sm text-muted-foreground max-w-none leading-relaxed space-y-4 mb-6">
            <p>
              In the decades after World War Two, food security was a political priority. The memory of rationing was fresh, the threat of Soviet naval blockade was real, and governments invested in maximising domestic food production. By 1984, the UK was producing <strong className="text-foreground">approximately 78% of its own food</strong> — an historic high.
            </p>
            <p>
              Since then, each decade has seen self-sufficiency fall. The logic of globalisation — that it is cheaper to import food than grow it — became dominant. Farmland was sold for housing. Farmers were squeezed by supermarket price pressure and cheap imports that didn't have to meet UK welfare or environmental standards. Many left the industry. Thousands of farms closed permanently.
            </p>
            <p>
              By 2022/23, the UK was producing only around <strong className="text-foreground">60% of all food consumed</strong> domestically — and even for food types suited to the British climate, self-sufficiency stands at just 74%. That is still a long way below what we were producing forty years ago, and far below what an island nation in an increasingly unstable world should be aiming for.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border">
              <h3 className="font-serif font-bold text-foreground text-sm">UK Food Self-Sufficiency — Decline Over Time</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Period</th>
                    <th className="text-center p-3 font-semibold text-foreground">Self-Sufficiency (all food)</th>
                    <th className="text-left p-3 font-semibold text-foreground">Key context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["1950s–60s", "~50–60%", "Post-war recovery; food security still a political priority"],
                    ["1970s–80s", "~70–78%", "Peak era — CAP incentives, domestic production maximised. Hit 78% in 1984"],
                    ["1990s", "~70–73%", "EU single market; import growth begins. Cheap food policy takes hold"],
                    ["2000s", "~65–68%", "Supermarket price pressure, farm consolidation, land conversion accelerates"],
                    ["2010s", "~60–65%", "Farm numbers falling; energy cost rises hit margins; Brexit uncertainty"],
                    ["2022/23", "~60%", "War in Ukraine, energy crisis, fertiliser prices spike — fragility exposed"],
                    ["David's 2035 target", "85%+", "Restore and exceed the historic peak through land protection, investment, and strategic reserves"],
                  ].map(([period, pct, context], i) => (
                    <tr key={period} className={i === 6 ? "bg-amber-50 font-semibold" : ""}>
                      <td className="p-3 font-medium text-foreground">{period}</td>
                      <td className={`p-3 text-center font-bold ${i === 6 ? "text-amber-700" : i === 1 ? "text-green-700" : i >= 5 ? "text-red-600" : "text-foreground"}`}>{pct}</td>
                      <td className="p-3 text-muted-foreground">{context}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why it matters — risks */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Why 85% Self-Sufficiency Is a Security Issue, Not Just a Farming Issue</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Food is a strategic resource. Countries that cannot feed themselves are exposed to the decisions and crises of others. These are not hypothetical risks — every one of the following has already happened in living memory.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {risks.map(({ title, body, icon: Icon, color, bg }) => (
              <div key={title} className={`border rounded-xl p-5 ${bg}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-5 h-5 ${color} shrink-0`} />
                  <h3 className={`font-serif font-bold text-sm ${color}`}>{title}</h3>
                </div>
                <p className={`text-xs leading-relaxed ${color.replace("600", "800").replace("700", "800")}`}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local context — Suffolk */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Wheat className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Suffolk and the Mildenhall Division — Agricultural Heartland Under Pressure</h2>
          </div>
          <div className="prose prose-sm text-muted-foreground max-w-none leading-relaxed space-y-3 mb-5">
            <p>
              Suffolk is one of England's most productive agricultural counties. The Breckland area — which includes the Mildenhall Division — sits on some of the most valuable arable land in the country. Grade 1 and Grade 2 classified soils, a relatively dry climate suited to cereal and root vegetable production, and established farming infrastructure make this land genuinely irreplaceable.
            </p>
            <p>
              The county has approximately <strong className="text-foreground">385,000 hectares of farmland</strong>, of which around 60% is arable. Key crops include wheat, barley, sugar beet, and oilseed rape. Agriculture generates approximately <strong className="text-foreground">£490 million per year in economic output</strong> for Suffolk and employs thousands of people directly and in the supply chain.
            </p>
            <p>
              Yet this land is under direct threat. The <strong className="text-foreground">Sunnica solar farm</strong> alone has removed approximately 1,130 hectares from agricultural production — land that could have grown food for this and future generations. More applications are likely to follow. Without explicit protection, the best agricultural land in West Suffolk will continue to be converted to uses that serve corporate energy investors rather than the national food supply.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: "~385,000 ha", label: "Farmland in Suffolk — among the most productive in England" },
              { value: "60%", label: "Proportion that is arable — predominantly cereal, root vegetables, oilseed" },
              { value: "~£490m", label: "Annual agricultural output from Suffolk — a major strategic economic asset" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Threats */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">What Is Threatening UK Food Production</h2>
          </div>
          <div className="space-y-3">
            {threats.map(({ threat, detail }) => (
              <div key={threat} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm text-foreground mb-1">{threat}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The 85% policy — what it takes */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Reaching 85% — What It Actually Takes</h2>
          </div>
          <div className="prose prose-sm text-muted-foreground max-w-none leading-relaxed space-y-3 mb-6">
            <p>
              Getting from ~60% to 85%+ is a 25 percentage point increase — equivalent to roughly a <strong className="text-foreground">42% increase in domestic food production</strong> relative to current consumption. That is ambitious but achievable. It does not require converting new land — it requires <em>protecting existing agricultural land</em> while improving yields, reducing waste, and changing what the UK grows to better match what the UK needs.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl overflow-hidden mb-5">
            <div className="p-4 border-b border-border bg-amber-50">
              <h3 className="font-serif font-bold text-amber-900 text-sm">Routes to 85% Food Self-Sufficiency</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Lever</th>
                    <th className="text-left p-3 font-semibold text-foreground">Mechanism</th>
                    <th className="text-center p-3 font-semibold text-foreground">Estimated contribution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Protect agricultural land from development", "Planning law change — no solar, housing, or logistics on Grade 1–3a", "Prevents further decline; stabilises the base"],
                    ["Precision agriculture technology", "GPS, drone monitoring, variable-rate inputs — increase yield per hectare by 10–20%", "4–6 percentage points"],
                    ["Reduce food waste (farm to retail)", "Cold chain investment, retail procurement reform, surplus redistribution schemes", "5–7 percentage points (30% waste rate → 20%)"],
                    ["Strategic crop mix adjustment", "Grow more calorie-dense crops (wheat, potatoes, veg) in proportion to UK dietary need", "3–5 percentage points"],
                    ["Controlled-environment horticulture", "Vertical farming and glasshouse production for salads, herbs, tomatoes — year-round, low water", "2–4 percentage points"],
                    ["Public procurement — buy British", "Hospitals, schools, prisons buying UK food creates guaranteed demand for domestic producers", "Supports farm viability; indirect 2–3 pp effect"],
                  ].map(([lever, mechanism, contribution]) => (
                    <tr key={lever} className="hover:bg-muted/40 transition-colors">
                      <td className="p-3 font-medium text-foreground">{lever}</td>
                      <td className="p-3 text-muted-foreground">{mechanism}</td>
                      <td className="p-3 text-center text-primary font-semibold">{contribution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-serif font-bold text-green-900 mb-2">The strategic reserve: the 90-day buffer</h3>
            <p className="text-xs text-green-800 leading-relaxed mb-2">
              Even at 85% self-sufficiency, the UK still imports 15% of its food. A strategic reserve for key staples — similar to the International Energy Agency's oil reserve requirement — provides a time buffer while supply chains adjust to any shock. David supports a minimum <strong>90-day national strategic food reserve</strong> for wheat, oats, cooking oil, pulses, and preserved vegetables.
            </p>
            <p className="text-xs text-green-800 leading-relaxed">
              This is not rationing — it is insurance. The UK holds strategic oil reserves as a matter of course. There is no coherent reason not to do the same for food.
            </p>
          </div>
        </section>

        {/* Commitments */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments on Agriculture and Food Security</h2>
          <div className="space-y-3">
            {commitments.map(({ c, d }) => (
              <div key={c} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{c}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connected policies */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Connected Policies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/policies/solar-energy"
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors group">
              <div className="flex-1">
                <div className="font-semibold text-sm text-foreground mb-1">Solar Energy &amp; Sunnica Opposition</div>
                <div className="text-xs text-muted-foreground">Why David opposes industrial solar farms on agricultural land, and the rooftop solar model that protects food production land.</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
            </Link>
            <Link href="/policies/environment"
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors group">
              <div className="flex-1">
                <div className="font-semibold text-sm text-foreground mb-1">Environment &amp; Breckland</div>
                <div className="text-xs text-muted-foreground">River Lark water quality, habitat protection, and the wider environmental case for sustainable land management.</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </section>

        {/* Sources */}
        <section>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Sources:</strong> DEFRA — UK Food Security Report (2021/22/23); ONS Agricultural Census (Suffolk); NFU — Farm Business Survey; WRAP — Food Waste in the UK (2023); FAO — Global food trade statistics; House of Commons Library — Food Security briefing (2023); CPRE — Solar farms on agricultural land (2022); Environment Agency — Suffolk agricultural land classification data.
          </p>
        </section>

        <div>
          <Link href="/policies/environment"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
            <ChevronLeft className="w-4 h-4" />
            Back to Environment Policy
          </Link>
        </div>

      </div>
    </div>
  );
}
