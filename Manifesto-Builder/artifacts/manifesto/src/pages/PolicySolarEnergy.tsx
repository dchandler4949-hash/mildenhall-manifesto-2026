import { Link } from "wouter";
import { Leaf, Sun, AlertTriangle, TrendingUp, ChevronLeft, Home, Zap, TreePine, Bus, Landmark, Wallet } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

// ─── CLIMATE DATA ─────────────────────────────────────────────────────────────
const climateStats = [
  { value: "+1.55°C", label: "Global average temperature rise above pre-industrial baseline in 2024 — the first calendar year to exceed 1.5°C (WMO confirmed)" },
  { value: "427 ppm", label: "Atmospheric CO₂ concentration — highest in 3 million years (Mauna Loa Observatory, February 2025)" },
  { value: "5", label: "Major ice ages in Earth's 4.5 billion year history — we are currently in the fifth, in a warm interglacial period" },
  { value: "10×", label: "How much faster current warming is occurring compared with natural post-glacial warming rates" },
];

// ─── ICE AGE HISTORY ──────────────────────────────────────────────────────────
const iceAges = [
  {
    name: "Huronian Glaciation",
    when: "~2.4–2.1 billion years ago",
    duration: "~300 million years",
    cause: "The Great Oxidation Event — oxygen released by photosynthetic organisms reacted with methane, removing a key greenhouse gas and triggering a dramatic cooling.",
    note: "Possibly the most severe glaciation in Earth's history. Some evidence suggests ice reached the equator.",
  },
  {
    name: "Cryogenian 'Snowball Earth'",
    when: "~720–635 million years ago",
    duration: "Two major glacial episodes (Sturtian and Marinoan)",
    cause: "Low volcanic activity, continent positions near the equator reducing CO₂ absorption, and low solar output combined to tip Earth into near-total glaciation.",
    note: "Ice sheets extended to tropical latitudes. Life survived in liquid water beneath equatorial ice. The subsequent thaw saw an explosion of complex life.",
  },
  {
    name: "Late Ordovician Glaciation",
    when: "~450–440 million years ago",
    duration: "~1–2 million years",
    cause: "Continental drift moved the supercontinent Gondwana over the South Pole. A short-lived but intense glacial period — one of the 'Big Five' mass extinctions followed.",
    note: "About 85% of marine species went extinct. Coincided with a mass extinction event.",
  },
  {
    name: "Carboniferous–Permian Glaciation",
    when: "~360–260 million years ago",
    duration: "~100 million years",
    cause: "The formation of the great coal forests removed enormous quantities of CO₂ from the atmosphere through photosynthesis and burial — cooling the planet over millions of years.",
    note: "This ice age created many of the coal deposits that the Industrial Revolution later burned — which is now warming the planet again.",
  },
  {
    name: "Quaternary Ice Age (current)",
    when: "~2.6 million years ago to present",
    duration: "Ongoing — we are in a warm interglacial period (the Holocene, ~11,700 years)",
    cause: "Driven by Milankovitch cycles — subtle, regular changes in Earth's orbital shape, axial tilt, and wobble. These cycles repeat over 23,000–100,000 year timescales.",
    note: "Within this ice age, there have been around 30 glacial–interglacial cycles. The last glacial maximum peaked ~20,000 years ago, with ice sheets covering most of Britain. At that rate of natural warming, the planet should be slowly cooling — instead, it is warming at unprecedented speed due to human greenhouse gas emissions.",
  },
];

// ─── REVENUE SPLIT ────────────────────────────────────────────────────────────
const revenueSplit = [
  {
    icon: Landmark,
    pct: "30%",
    label: "Government Investment Fund",
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-200",
    desc: "Returns a third of revenue to the government to repay the upfront installation costs over time and fund the next phase of the scheme. This makes the policy self-financing — not a permanent subsidy.",
  },
  {
    icon: TreePine,
    pct: "10%",
    label: "Parish & Town Councils",
    color: "text-green-700",
    bg: "bg-green-50 border-green-200",
    desc: "Paid directly to local parish and town councils to fund rural tree planting programmes and cycle route improvements. Communities decide where the money goes — not central government.",
  },
  {
    icon: Bus,
    pct: "10%",
    label: "Sixth Form & College Bus Travel",
    color: "text-amber-700",
    bg: "bg-amber-50 border-amber-200",
    desc: "Funds free or heavily subsidised bus travel for students at sixth form and further education colleges. In a rural area like Mildenhall, this removes one of the biggest practical barriers to staying in education.",
  },
  {
    icon: Wallet,
    pct: "50%",
    label: "Household Energy Bill Reduction",
    color: "text-purple-700",
    bg: "bg-purple-50 border-purple-200",
    desc: "Paid directly to the household's energy supplier — not to the customer — to be applied as a guaranteed reduction to the annual energy bill. This ensures the benefit goes to lowering bills every year rather than being spent elsewhere, and works even for households who struggle to manage complex export tariff arrangements.",
  },
];

export default function PolicySolarEnergy() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Solar Energy & Climate | David Chandler — Mildenhall Division"
        description="The Sunnica solar farm and energy policy for Mildenhall Division. David Chandler's position on solar, climate action, and the green transition for West Suffolk County Council 2026."
        path="/policies/solar-energy"
      />

      {/* Hero */}
      <div className="bg-green-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/policies/environment"
            className="inline-flex items-center gap-1.5 text-green-300 text-xs font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
            Environment Policy
          </Link>
          <div className="flex items-center gap-2 text-green-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sun className="w-4 h-4" aria-hidden="true" />
            Climate & Solar Energy · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            The Climate Case — and a Smarter Solar Policy
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            Earth has survived five ice ages. What it has never experienced is warming at this speed. Industrial solar farms are not the answer — rooftop solar for every home is. Here is the evidence, and here is what David proposes to do about it.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {climateStats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-xl md:text-2xl font-bold text-green-300 mb-1">{s.value}</div>
                <div className="text-xs text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Climate Change Evidence */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">The Science — What the Data Shows</h2>
          </div>
          <div className="prose prose-sm text-muted-foreground max-w-none leading-relaxed space-y-4 mb-6">
            <p>
              The planet has warmed and cooled many times across its 4.5 billion year history — ice ages are real, natural, and have happened repeatedly. This is not in dispute. What <em>is</em> different now is the <strong className="text-foreground">speed</strong>.
            </p>
            <p>
              After the last glacial maximum (around 20,000 years ago), global average temperatures rose by approximately 4–7°C over roughly 10,000 years — about 0.05–0.07°C per century naturally. <strong className="text-foreground">Since 1850, temperatures have risen by 1.55°C — in under 200 years.</strong> 2024 was confirmed by the WMO as the first calendar year to exceed 1.5°C above the pre-industrial baseline. That is roughly twenty times faster than natural post-glacial warming. CO₂ levels of 427 ppm are the highest they have been in 3 million years, and they are rising at around 2.5–3 ppm per year — a rate with no precedent in the geological record.
            </p>
            <p>
              In Suffolk, the effects are already visible: more frequent summer droughts, increased flooding risk in low-lying areas, and growing pressure on the Breckland water table. The River Lark — already classified in "poor ecological status" by the Environment Agency — faces additional stress from rising summer temperatures reducing dissolved oxygen levels in the water.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "2023", value: "Hottest year globally on record", sub: "Every month from June–December 2023 broke its monthly record — Copernicus Climate Change Service" },
              { label: "10 of 10", value: "UK's hottest ever years since 2000", sub: "All ten of the UK's hottest years on record have occurred in the 21st century" },
              { label: "1.5°C", value: "2024 likely to breach Paris target", sub: "Copernicus data suggests 2024 is on course to be the first calendar year to exceed 1.5°C above pre-industrial average" },
            ].map(({ label, value, sub }) => (
              <div key={label} className="bg-card border border-border rounded-xl p-5">
                <div className="text-2xl font-bold text-primary mb-1">{label}</div>
                <div className="font-semibold text-sm text-foreground mb-1">{value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Ice Ages */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <Leaf className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Earth's Five Major Ice Ages</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Earth has experienced at least five distinct ice ages across its 4.5 billion year history. Each was caused by natural factors — changes in solar output, continental positions, volcanic activity, and orbital cycles. None of them happened at the speed we are seeing today.
          </p>
          <div className="space-y-4">
            {iceAges.map((ia, i) => (
              <div key={ia.name} className="bg-card border border-border rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wide mr-2">Ice Age {i + 1}</span>
                    <h3 className="font-serif font-bold text-foreground inline">{ia.name}</h3>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded shrink-0">{ia.when}</div>
                </div>
                <div className="text-xs text-muted-foreground mb-1"><strong className="text-foreground">Duration:</strong> {ia.duration}</div>
                <div className="text-xs text-muted-foreground mb-2"><strong className="text-foreground">Cause:</strong> {ia.cause}</div>
                <div className="text-xs bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-amber-800 leading-snug">{ia.note}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-serif font-bold text-green-900 mb-2">Why Ice Age History Matters to the Climate Debate</h3>
            <p className="text-xs text-green-800 leading-relaxed">
              When people argue that "climate has always changed naturally," they are right about the fact — but wrong about the conclusion. Natural climate cycles operate over <strong>tens of thousands to millions of years</strong>. Human-caused warming has added 1.45°C in under 200 years. According to Milankovitch orbital theory, Earth should currently be in a slow natural cooling phase heading towards the next glacial period in roughly 50,000 years. Instead we are warming at an unprecedented rate. The cause is not orbital. It is the 37 billion tonnes of CO₂ humanity emits every year.
            </p>
          </div>
        </section>

        {/* Sunnica Opposition */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Sunnica — Why David Opposes Industrial Solar Farms</h2>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
            <p className="text-sm text-red-800 font-semibold mb-1">David's position is clear:</p>
            <p className="text-sm text-red-800 leading-relaxed">
              Industrial-scale solar farms — including Sunnica — impose significant costs on rural communities: loss of agricultural land, landscape damage, biodiversity harm, and grid infrastructure strain. Meanwhile, the financial benefits flow primarily to corporate investors, not to the communities affected. This is the wrong model. David opposes industrial solar farms on agricultural land and supports rooftop solar for every home instead.
            </p>
          </div>
          <div className="prose prose-sm text-muted-foreground max-w-none leading-relaxed space-y-3 mb-6">
            <p>
              The <strong className="text-foreground">Sunnica Energy Farm</strong> covers approximately 2,792 acres (1,130 hectares) across Suffolk and Cambridgeshire — the total original application boundary, including the Freckenham and Worlington areas. It received a Development Consent Order (DCO) from the Secretary of State on 12 July 2024, granted by Energy Secretary Ed Miliband despite significant local opposition and a Planning Inspectorate recommendation to refuse. As of early 2026, the project is in post-consent, pre-construction phase — no Discharge of Requirements has been filed with Suffolk County Council, meaning groundbreaking has not yet occurred.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Agricultural land lost", body: "Large solar farms remove productive farmland from food production for decades. In an era of global food insecurity and climate-related crop failures, converting high-grade agricultural land to solar generation is a choice with long-term consequences for food security." },
              { title: "Benefits flow to corporations, not communities", body: "Sunnica is operated by Sunnica Ltd (part of Eneco and Engie). Revenue from energy generation goes to shareholders — not to local residents who lose their rural views, face increased HGV traffic during construction, and live next to the infrastructure." },
              { title: "Rooftop solar is more efficient", body: "Energy generated on rooftops is consumed closer to where it is produced, reducing transmission losses (typically 5–7% over long distances). Distributed rooftop solar is technically superior to large centralised farms requiring extensive grid upgrades." },
              { title: "Biodiversity impact", body: "Industrial-scale solar creates a monoculture landscape. While some biodiversity mitigation is promised, the reality of 1,100 hectares of panel coverage suppresses natural grassland and agricultural biodiversity across a vast area of the Breckland fringe." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm text-foreground mb-1">{title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-serif font-bold text-foreground mb-2">David's commitment on future solar farm applications</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              As West Suffolk County Councillor, David will formally object to any future applications for industrial solar farms on agricultural land in or near the Mildenhall Division. He will lobby the Secretary of State and Suffolk County Council to require that any renewable energy development in the area takes the form of rooftop or brownfield installation — not greenfield agricultural conversion.
            </p>
          </div>
        </section>

        {/* Home Solar 2035 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Every Suitable Home with Solar Panels by 2035</h2>
          </div>
          <div className="prose prose-sm text-muted-foreground max-w-none leading-relaxed space-y-3 mb-6">
            <p>
              The UK has an estimated <strong className="text-foreground">250,000 hectares of suitable rooftop space</strong> — enough to generate a significant proportion of national electricity demand without using a single additional hectare of land. Yet the rollout of domestic solar remains patchy, slow, and heavily skewed towards homeowners with capital to invest upfront.
            </p>
            <p>
              David supports a national programme to fund the installation of solar panels on every suitable home in England by 2035 — prioritising social housing, rural properties with high energy costs, and owner-occupied homes where the upfront cost is the only barrier. The energy generated would be fed into the grid under an enhanced Smart Export Guarantee, and the revenue split according to the model below.
            </p>
          </div>

          {/* Revenue Split */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-serif font-bold text-lg text-foreground">How the Export Revenue Gets Split</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-5">
              For every pound of income generated by a household's solar panels and exported to the grid, the revenue is divided four ways — automatically, at source. No paperwork for the homeowner. No choice required.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {revenueSplit.map(({ icon: Icon, pct, label, color, bg, desc }) => (
                <div key={label} className={`border rounded-xl p-5 ${bg}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-5 h-5 ${color} shrink-0`} />
                    <span className={`text-3xl font-bold ${color}`}>{pct}</span>
                    <span className={`text-sm font-semibold ${color}`}>{label}</span>
                  </div>
                  <p className={`text-xs leading-relaxed ${color.replace("700", "800")}`}>{desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h4 className="font-bold text-sm text-foreground mb-2">Why pay 50% to the energy supplier instead of the customer?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Paying the bill-reduction element directly to the household's energy supplier — rather than as cash to the customer — has two important effects. First, it <strong className="text-foreground">guarantees the benefit reduces the energy bill</strong>, which is the intended outcome, rather than being spent elsewhere. Second, it <strong className="text-foreground">works for everyone</strong> regardless of their ability to manage complex export tariff arrangements or financial products — including elderly homeowners, people with learning difficulties, or households in financial difficulty. The supplier applies the credit automatically to the annual bill every year, for the life of the panels.
              </p>
            </div>
          </div>

          {/* Why this beats industrial solar */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-serif font-bold text-green-900 mb-3">Rooftop solar vs. industrial solar — the comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2 border-b border-green-300 text-green-900"></th>
                    <th className="text-center p-2 border-b border-green-300 text-green-900 font-bold">Rooftop Solar (David's model)</th>
                    <th className="text-center p-2 border-b border-green-300 text-green-900 font-bold">Industrial Solar (Sunnica model)</th>
                  </tr>
                </thead>
                <tbody className="text-green-800">
                  {[
                    ["Land used", "None — existing rooftops", "~2,800 acres agricultural land"],
                    ["Who benefits financially", "Homeowners + communities + students", "Corporate shareholders"],
                    ["Grid transmission loss", "Low (local generation)", "Higher (long-distance transmission)"],
                    ["Visual/landscape impact", "Minimal", "Significant over large areas"],
                    ["Food security impact", "None", "Removes agricultural land for decades"],
                    ["Community control", "Yes — parish councils receive revenue", "None"],
                    ["Works for renters", "Via social housing programme", "No benefit"],
                  ].map(([aspect, rooftop, industrial]) => (
                    <tr key={aspect} className="border-b border-green-200 last:border-0">
                      <td className="p-2 font-semibold">{aspect}</td>
                      <td className="p-2 text-center text-green-900 font-medium">{rooftop}</td>
                      <td className="p-2 text-center text-red-700">{industrial}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">David's Commitments on Climate and Solar</h2>
          <div className="space-y-3">
            {[
              { c: "Oppose all industrial solar farm applications on agricultural land", d: "Formally object at planning stage to any future agricultural solar farm proposals in or near the Mildenhall Division, and lobby for national policy to prioritise brownfield and rooftop installation." },
              { c: "Campaign for the Home Solar by 2035 programme", d: "Advocate in West Suffolk and nationally for a government-funded rooftop solar programme for all suitable homes, with the four-way revenue split described above built in from day one." },
              { c: "Use the Sunnica precedent to demand community benefit", d: "While Sunnica is now consented, David will push for the maximum possible community benefit requirements — local employment, habitat mitigation, and a community fund — during construction and operation." },
              { c: "Prioritise local rooftop solar for social housing", d: "Work with Flagship Housing and West Suffolk Council to accelerate solar installation on all social housing in the division — ensuring renters, not just owners, benefit from cheaper energy." },
              { c: "Protect the Breckland landscape from further industrialisation", d: "Oppose any development — energy, logistics, or otherwise — that would significantly damage the Breckland Special Area of Conservation or the open character of the Mildenhall Division's countryside." },
            ].map(({ c, d }) => (
              <div key={c} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2 shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{c}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Sources:</strong> WMO State of the Global Climate 2024 (temperature +1.55°C confirmed); Copernicus Climate Change Service; IPCC Sixth Assessment Report (AR6, 2021–2023); Mauna Loa CO₂ Observatory (NOAA, Feb 2025 — 427 ppm); Milankovitch cycle data — Hays, Imbrie &amp; Shackleton (1976); Sunnica Energy Farm Development Consent Order — Planning Inspectorate &amp; DESNZ (12 July 2024); Suffolk County Council Sunnica project page (pre-construction status, 2025); UK rooftop solar potential — Solar Energy UK / BEIS estimates; DfE Schools Census (EAL data); Environment Agency — River Lark ecological status classification 2022.
          </p>
        </section>

        {/* Connected policy */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Connected Policy</h2>
          <Link href="/policies/agriculture"
            className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors group">
            <div className="flex-1">
              <div className="font-semibold text-sm text-foreground mb-1">Agriculture &amp; Food Security</div>
              <div className="text-xs text-muted-foreground">Protecting agricultural land from solar farm development is inseparable from the food security argument. The case for 85% self-sufficiency — and what it takes to get there.</div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
          </Link>
        </section>

        {/* Back link */}
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
