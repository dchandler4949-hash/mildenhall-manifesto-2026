import { Link } from "wouter";
import { PoundSterling, ChevronLeft, AlertTriangle, Info, CheckCircle, XCircle, MinusCircle } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

// ─── BAND D BREAKDOWN 2025/26 ──────────────────────────────────────────────────
const bandDComponents = [
  { authority: "Suffolk County Council", amount: "£1,649.43", note: "Roads, social care, schools, libraries, waste. Identical for every Suffolk household. Increased 4.99% in 2025/26 (2.99% general + 2% adult social care precept).", shared: true },
  { authority: "Suffolk Police & Crime Commissioner", amount: "£289.53", note: "Policing across Suffolk. Every household pays the same — regardless of how many officers serve their area.", shared: true },
  { authority: "West Suffolk Council", amount: "£203.67", note: "Housing, planning, waste collection, leisure, environmental services. Identical across all West Suffolk parishes.", shared: true },
  { authority: "Parish / Town Council", amount: "Varies", note: "Set locally by each parish or town council. The only element that differs between the four parishes.", shared: false },
];

// ─── PARISH PRECEPTS (official 2025/26 — West Suffolk Council leaflet) ──────────
const parishPrecepts = [
  { parish: "Mildenhall High", precept: "£159.99", total: "£2,302.62", properties: "~2,293 Band D equiv.", note: "Largest of the four; town council now formally named Mildenhall High since October 2023." },
  { parish: "Barton Mills", precept: "£71.73", total: "£2,214.36", properties: "~436 Band D equiv.", note: "Small village precept. Very limited local services funded directly." },
  { parish: "Worlington", precept: "£90.18", total: "£2,232.81", properties: "~227 Band D equiv.", note: "Rural parish precept. Pays more per household than Barton Mills but receives fewer services." },
  { parish: "Freckenham", precept: "£112.20", total: "£2,254.83", properties: "~149 Band D equiv.", note: "Smallest parish by population, yet the second-highest precept in the division — reflecting the difficulty of funding even minimal services with a small tax base." },
];

// ─── SUFFOLK DISTRICT COMPARISON (district precept only, 2025/26) ──────────────
const districtComparison = [
  { district: "West Suffolk Council", precept: "£203.67", covers: "Mildenhall, Bury St Edmunds, Haverhill, Newmarket, Brandon, rural West Suffolk", admin: "Bury St Edmunds" },
  { district: "East Suffolk Council", precept: "~£204†", covers: "Lowestoft, Woodbridge, Saxmundham, Beccles, Southwold, Eye", admin: "Ipswich / Melton" },
  { district: "Babergh District Council", precept: "~£180†", covers: "Sudbury, Hadleigh, Long Melford, Boxford", admin: "Endeavour House, Ipswich" },
  { district: "Mid Suffolk District Council", precept: "~£181†", covers: "Stowmarket, Eye, Needham Market, Debenham", admin: "Endeavour House, Ipswich" },
  { district: "Ipswich Borough Council", precept: "~£227†", covers: "Ipswich urban area only", admin: "Ipswich Town Hall" },
];

// ─── SERVICE AVAILABILITY COMPARISON ─────────────────────────────────────────
type ServiceStatus = "yes" | "no" | "limited";
const sv = (s: ServiceStatus) => s;

const serviceRows: { service: string; mildenhall: ServiceStatus; bury: ServiceStatus; haverhill: ServiceStatus; newmarket: ServiceStatus; note: string }[] = [
  { service: "Police station with public counter", mildenhall: sv("no"), bury: sv("yes"), haverhill: sv("limited"), newmarket: sv("limited"), note: "Mildenhall police station closed in 2015. Nearest full station is Bury St Edmunds." },
  { service: "GP surgery (any)", mildenhall: sv("limited"), bury: sv("yes"), haverhill: sv("yes"), newmarket: sv("yes"), note: "One GP practice serves the Mildenhall division. Capacity is stretched — wait times significantly exceed urban areas." },
  { service: "NHS dentist accepting new patients", mildenhall: sv("no"), bury: sv("limited"), haverhill: sv("limited"), newmarket: sv("limited"), note: "No NHS dental practice in Mildenhall accepting new adult patients. The shortage is national but hits rural areas hardest." },
  { service: "Community pharmacy", mildenhall: sv("yes"), bury: sv("yes"), haverhill: sv("yes"), newmarket: sv("yes"), note: "Mildenhall has a pharmacy. Barton Mills, Worlington and Freckenham do not." },
  { service: "Daytime bus routes", mildenhall: sv("limited"), bury: sv("yes"), haverhill: sv("yes"), newmarket: sv("yes"), note: "The division has Routes 357 and 16 as core daytime services. Most journeys require a car." },
  { service: "Evening or Sunday bus service", mildenhall: sv("no"), bury: sv("yes"), haverhill: sv("limited"), newmarket: sv("limited"), note: "No regular evening or Sunday bus covers the Mildenhall division. Those without a car are stranded after dark." },
  { service: "Secondary school", mildenhall: sv("yes"), bury: sv("yes"), haverhill: sv("yes"), newmarket: sv("yes"), note: "Mildenhall College Academy serves the division. Students from Barton Mills, Worlington, and Freckenham travel in." },
  { service: "Full sixth form or FE college", mildenhall: sv("limited"), bury: sv("yes"), haverhill: sv("yes"), newmarket: sv("yes"), note: "MCA6 offers some A-levels. West Suffolk College (Bury), Samuel Ward (Haverhill), and Newmarket Academy offer broader post-16 provision. Students needing specific subjects must travel." },
  { service: "Passenger rail link", mildenhall: sv("no"), bury: sv("yes"), haverhill: sv("no"), newmarket: sv("yes"), note: "Bury St Edmunds and Newmarket both have rail stations. Brandon and Kennett also have stations nearby. Haverhill has no rail. Mildenhall has no passenger rail — its historic railway closed in 1962 — making it one of the most isolated towns in West Suffolk despite being one of the largest." },
  { service: "Public library (any opening hours)", mildenhall: sv("limited"), bury: sv("yes"), haverhill: sv("yes"), newmarket: sv("yes"), note: "Mildenhall Library operates with reduced hours. Barton Mills, Worlington and Freckenham residents must travel to use it." },
  { service: "Leisure centre / swimming pool", mildenhall: sv("limited"), bury: sv("yes"), haverhill: sv("yes"), newmarket: sv("yes"), note: "Some community leisure facilities exist in Mildenhall. The nearest public swimming pool is outside the division." },
  { service: "Council in-person service point", mildenhall: sv("no"), bury: sv("yes"), haverhill: sv("limited"), newmarket: sv("limited"), note: "West Suffolk Council's main office is in Bury St Edmunds. No in-person council service in Mildenhall." },
];

function StatusIcon({ status }: { status: ServiceStatus }) {
  if (status === "yes") return <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />;
  if (status === "no") return <XCircle className="w-4 h-4 text-red-600 mx-auto" />;
  return <MinusCircle className="w-4 h-4 text-amber-500 mx-auto" />;
}

function StatusLabel({ status }: { status: ServiceStatus }) {
  if (status === "yes") return <span className="text-green-700 font-medium">Yes</span>;
  if (status === "no") return <span className="text-red-600 font-medium">No</span>;
  return <span className="text-amber-600 font-medium">Limited</span>;
}

export default function PolicyCouncilTax() {
  const yesCount = (col: keyof typeof serviceRows[0]) =>
    serviceRows.filter((r) => (r as any)[col] === "yes").length;
  const noCount = (col: keyof typeof serviceRows[0]) =>
    serviceRows.filter((r) => (r as any)[col] === "no").length;

  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Council Tax Breakdown | David Chandler — Mildenhall Division"
        description="Official 2025/26 Band D council tax figures for Mildenhall High Town, Barton Mills, Worlington and Freckenham. How your bill is built and what you get for it — David Chandler, West Suffolk County Council."
        path="/policies/council-tax"
      />

      {/* Hero */}
      <div className="bg-emerald-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/policies/taxation"
            className="inline-flex items-center gap-1.5 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
            Taxation Policy
          </Link>
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">
            <PoundSterling className="w-4 h-4" aria-hidden="true" />
            Council Tax & Service Value · David Chandler
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Same Price. Fewer Services.
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Every household in Mildenhall, Barton Mills, Worlington, and Freckenham pays the same Suffolk County Council, police, and West Suffolk district precepts as residents in Bury St Edmunds — down to the penny. What they receive in return is dramatically less. This page shows the gap.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* How Band D is built */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <PoundSterling className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">How Your Council Tax Bill Is Built (2025/26)</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            A Band D council tax bill has four layers. Three of them are <strong className="text-foreground">identical for every household across West Suffolk</strong> — rural or urban, well-served or underserved. Only the smallest element varies.
          </p>
          <div className="space-y-3 mb-5">
            {bandDComponents.map(({ authority, amount, note, shared }) => (
              <div key={authority} className={`flex items-start gap-4 rounded-xl p-4 border ${shared ? "bg-card border-border" : "bg-amber-50 border-amber-200"}`}>
                <div className="shrink-0 text-right w-24">
                  <div className={`font-bold text-sm ${shared ? "text-foreground" : "text-amber-700"}`}>{amount}</div>
                  <div className="text-xs text-muted-foreground">{shared ? "same for all" : "varies"}</div>
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground mb-0.5">{authority}</div>
                  <div className="text-xs text-muted-foreground leading-snug">{note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="text-xs text-emerald-800 leading-relaxed">
              <strong>The key point:</strong> £2,142.63 of every Band D bill in the Mildenhall Division is identical to what a Bury St Edmunds resident pays. The political question is not whether the bill is fair — it is whether the <em>services delivered for that money</em> are equitably distributed across the district.
            </p>
          </div>
        </section>

        {/* Parish breakdown */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <PoundSterling className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">Official Band D Totals — The Four Parishes (2025/26)</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            Parish precepts are official 2025/26 figures taken directly from the West Suffolk Council Tax Leaflet 2025/26 (published by West Suffolk Council). Verify your exact figure on your council tax bill or at westsuffolk.gov.uk.
          </p>
          <div className="bg-card border border-border rounded-xl overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Parish</th>
                    <th className="text-right p-3 font-semibold text-foreground">Parish precept (Band D)</th>
                    <th className="text-right p-3 font-semibold text-foreground">Approximate Band D total</th>
                    <th className="text-left p-3 font-semibold text-foreground hidden sm:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-muted/30">
                    <td className="p-3 text-muted-foreground italic" colSpan={2}>Suffolk CC + Police + West Suffolk (shared by all)</td>
                    <td className="p-3 text-right font-bold text-foreground">£2,142.63</td>
                    <td className="p-3 hidden sm:table-cell text-muted-foreground italic text-xs">Same for every West Suffolk household. Year-on-year increases across all three authorities averaged approximately 4.9% for 2025/26 — in line with the national average for shire areas.</td>
                  </tr>
                  {parishPrecepts.map(({ parish, precept, total, note }) => (
                    <tr key={parish} className="hover:bg-muted/40 transition-colors">
                      <td className="p-3 font-semibold text-foreground">{parish}</td>
                      <td className="p-3 text-right text-muted-foreground">{precept}</td>
                      <td className="p-3 text-right font-bold text-primary">{total}</td>
                      <td className="p-3 hidden sm:table-cell text-muted-foreground text-xs">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Parish precept figures are official 2025/26 Band D amounts from the West Suffolk Council Tax Leaflet 2025/26. Source: westsuffolk.gov.uk</p>
        </section>

        {/* Suffolk district comparison */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">How West Suffolk Compares Across the County</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            The district/borough precept is broadly similar across all of Suffolk — the gap is not between councils, it is between what different areas within the same council receive. All five Suffolk councils collect comparable district precepts; the inequality lies in how services are geographically distributed within each authority.
          </p>
          <div className="bg-card border border-border rounded-xl overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">District / Borough</th>
                    <th className="text-right p-3 font-semibold text-foreground">District Band D precept 2025/26</th>
                    <th className="text-left p-3 font-semibold text-foreground hidden sm:table-cell">Area covered</th>
                    <th className="text-left p-3 font-semibold text-foreground hidden md:table-cell">Admin centre</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {districtComparison.map(({ district, precept, covers, admin }) => (
                    <tr key={district} className={`hover:bg-muted/40 transition-colors ${district.includes("West Suffolk") ? "bg-emerald-50" : ""}`}>
                      <td className="p-3 font-semibold text-foreground">
                        {district}
                        {district.includes("West Suffolk") && <span className="ml-2 text-xs text-emerald-700 font-normal">(your council)</span>}
                      </td>
                      <td className="p-3 text-right font-bold text-foreground">{precept}</td>
                      <td className="p-3 hidden sm:table-cell text-muted-foreground">{covers}</td>
                      <td className="p-3 hidden md:table-cell text-muted-foreground">{admin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-4">† Estimated 2025/26 figures for other Suffolk councils, based on 2024/25 published precepts adjusted for typical council tax increase levels. Verify exact figures at each council's website. West Suffolk (£203.67) is confirmed from the official 2025/26 council tax leaflet.</p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-serif font-bold text-amber-900 mb-2 text-sm">The real inequality is within the council, not between councils</h3>
            <p className="text-xs text-amber-800 leading-relaxed">
              West Suffolk Council's precept (£203.67) is in the mid-range for Suffolk. The problem is not that West Suffolk charges too much — it is that a large proportion of what that precept funds is physically located in or near Bury St Edmunds: council offices, leisure facilities, housing services, and planning teams. Residents in Mildenhall, Barton Mills, Worlington, and Freckenham pay an equal share but access a fraction of those services in practice.
            </p>
          </div>
        </section>

        {/* Service comparison table */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">What the Money Buys — Service Availability by Location</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            All four towns below pay the same West Suffolk district and Suffolk county precepts. The service availability differences below are not caused by different spending levels — they are caused by how services are geographically distributed.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5 flex-wrap gap-y-1">
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-green-600" /> Available</span>
            <span className="flex items-center gap-1"><MinusCircle className="w-3.5 h-3.5 text-amber-500" /> Limited / restricted</span>
            <span className="flex items-center gap-1"><XCircle className="w-3.5 h-3.5 text-red-600" /> Not available</span>
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground w-48">Service</th>
                    <th className="text-center p-3 font-semibold text-foreground">Mildenhall Division</th>
                    <th className="text-center p-3 font-semibold text-foreground">Bury St Edmunds</th>
                    <th className="text-center p-3 font-semibold text-foreground">Haverhill</th>
                    <th className="text-center p-3 font-semibold text-foreground">Newmarket</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {serviceRows.map(({ service, mildenhall, bury, haverhill, newmarket, note }) => (
                    <tr key={service} className="hover:bg-muted/20 transition-colors group">
                      <td className="p-3 font-medium text-foreground leading-snug">{service}</td>
                      <td className={`p-3 text-center ${mildenhall === "no" ? "bg-red-50" : mildenhall === "limited" ? "bg-amber-50/60" : "bg-green-50/60"}`}>
                        <StatusIcon status={mildenhall} />
                        <div className="mt-0.5"><StatusLabel status={mildenhall} /></div>
                      </td>
                      <td className="p-3 text-center">
                        <StatusIcon status={bury} />
                        <div className="mt-0.5"><StatusLabel status={bury} /></div>
                      </td>
                      <td className="p-3 text-center">
                        <StatusIcon status={haverhill} />
                        <div className="mt-0.5"><StatusLabel status={haverhill} /></div>
                      </td>
                      <td className="p-3 text-center">
                        <StatusIcon status={newmarket} />
                        <div className="mt-0.5"><StatusLabel status={newmarket} /></div>
                      </td>
                    </tr>
                  ))}
                  {/* Summary row */}
                  <tr className="bg-muted font-semibold">
                    <td className="p-3 text-foreground">Services fully available</td>
                    <td className="p-3 text-center text-red-600">{yesCount("mildenhall")} of {serviceRows.length}</td>
                    <td className="p-3 text-center text-green-700">{yesCount("bury")} of {serviceRows.length}</td>
                    <td className="p-3 text-center text-foreground">{yesCount("haverhill")} of {serviceRows.length}</td>
                    <td className="p-3 text-center text-foreground">{yesCount("newmarket")} of {serviceRows.length}</td>
                  </tr>
                  <tr className="bg-muted/60">
                    <td className="p-3 text-foreground font-semibold">Services not available</td>
                    <td className="p-3 text-center text-red-600 font-bold">{noCount("mildenhall")} of {serviceRows.length}</td>
                    <td className="p-3 text-center text-foreground">{noCount("bury")} of {serviceRows.length}</td>
                    <td className="p-3 text-center text-foreground">{noCount("haverhill")} of {serviceRows.length}</td>
                    <td className="p-3 text-center text-foreground">{noCount("newmarket")} of {serviceRows.length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes on individual services */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-foreground">Notes on specific services:</h3>
            {serviceRows.filter(r => r.mildenhall === "no").map(({ service, note }) => (
              <div key={service} className="flex items-start gap-2 text-xs">
                <XCircle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">{service}:</strong> {note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What we don't know — the FOI gap */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-primary shrink-0" />
            <h2 className="text-2xl font-serif font-bold text-primary">What We Don't Yet Know — and Why That Matters</h2>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
            <h3 className="font-serif font-bold text-blue-900 mb-2 text-sm">The data that isn't published</h3>
            <p className="text-xs text-blue-800 leading-relaxed mb-3">
              The comparison above shows service availability — but not the actual monetary value of spending that lands in the Mildenhall Division versus what is collected from it in council tax. That breakdown — revenue collected by parish versus expenditure in each parish — is <strong>not published</strong> by West Suffolk Council or Suffolk County Council in any standard annual report.
            </p>
            <p className="text-xs text-blue-800 leading-relaxed">
              To calculate the true return on investment per pound of council tax paid in Mildenhall, Barton Mills, Worlington, and Freckenham, a Freedom of Information request would be needed asking for revenue and capital expenditure broken down by ward or parish. This analysis does not yet exist publicly — and David believes it should.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-serif font-bold text-foreground mb-3 text-sm">David's commitment on council tax transparency</h3>
            <div className="space-y-3">
              {[
                { c: "Publish a ward-level spending breakdown", d: "David will formally request that West Suffolk Council and Suffolk County Council publish annual ward-by-ward and parish-by-parish expenditure breakdowns — so residents can see exactly what their council tax funds in their area." },
                { c: "Submit FOI requests and publish the results", d: "If the data is not voluntarily published, David will submit Freedom of Information requests for expenditure breakdowns and publish the results on this website." },
                { c: "Challenge the geographic concentration of services", d: "Use the County Councillor role to formally challenge decisions that concentrate services in Bury St Edmunds at the expense of the Mildenhall Division, and to argue for rural-proofed commissioning of council services." },
                { c: "Campaign for a rural service premium", d: "Lobby Suffolk County Council to apply a rural delivery premium — recognising that providing equivalent service quality to dispersed rural populations costs more per head, and that funding formulas should reflect this." },
              ].map(({ c, d }) => (
                <div key={c} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-0.5">{c}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources and caveats */}
        <section>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Sources and caveats:</strong> Band D precept figures from the West Suffolk Council Tax Leaflet 2025/26 and Suffolk County Council budget 2025/26. Year-on-year increases of approximately 4.9% are consistent with national Government accredited statistics for shire areas (England average Band D increase 2025/26). Parish precept figures are official 2025/26 amounts — verify exact amounts on your council tax bill or at westsuffolk.gov.uk. Service availability assessments are based on publicly available information from Suffolk Constabulary, NHS England, Traveline, and West Suffolk Council. The service comparison represents availability in principle — individual access may vary. Data on per-parish expenditure return is not published; the comparison above reflects service availability only, not monetary spending return. Sources: West Suffolk Council (council tax); Suffolk CC (MTFP 2024/25); NHS England (dental access data); Suffolk Constabulary; Traveline; ACRE Rural Premium Report 2022.
          </p>
        </section>

        <div>
          <Link href="/policies/taxation"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
            <ChevronLeft className="w-4 h-4" />
            Back to Taxation Policy
          </Link>
        </div>

      </div>
    </div>
  );
}
