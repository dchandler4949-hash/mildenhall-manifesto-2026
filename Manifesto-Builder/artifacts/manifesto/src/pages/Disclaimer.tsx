import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 text-primary mb-6">
          <AlertCircle className="w-6 h-6" />
          <span className="text-sm font-semibold uppercase tracking-widest">Legal</span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-primary mb-2">Disclaimer</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 2025</p>

        <div className="prose prose-lg text-muted-foreground max-w-none space-y-8 bg-card border border-border rounded-2xl p-8 sm:p-12 shadow">

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">Campaign material</h2>
            <p>This website is election campaign material published and promoted by <strong className="text-foreground">David Chandler</strong> on behalf of the <strong className="text-foreground">David Chandler</strong> independent campaign for the Mildenhall Division, West Suffolk County Council.</p>
            <p>All content is published in accordance with the <strong className="text-foreground">Political Parties, Elections and Referendums Act 2000 (PPERA)</strong> and the <strong className="text-foreground">Representation of the People Act 1983</strong>. See our <Link href="/imprint" className="text-primary underline">Legal Imprint</Link> for the full statutory notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">Accuracy of information</h2>
            <p>David Chandler makes every reasonable effort to ensure the accuracy of data, statistics, and information published on this website. All statistics are sourced and referenced where possible. However:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Data and statistics may become outdated after publication</li>
              <li>Some figures are estimates or based on extrapolation from published datasets</li>
              <li>Policy positions are subject to change in response to new evidence or community feedback</li>
            </ul>
            <p>If you believe any information on this site is inaccurate, please <Link href="/contact" className="text-primary underline">contact us</Link> and we will investigate promptly.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">Survey data</h2>
            <p>Survey results displayed on this website reflect voluntary responses from site visitors and are not a statistically representative sample of the Mildenhall Division electorate. They are provided for illustrative purposes only and should not be cited as opinion polling data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">External links</h2>
            <p>Where this site links to external websites (such as government data sources or news articles), we do not control the content of those sites and cannot guarantee their accuracy or availability. External links are provided for reference only.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">No professional advice</h2>
            <p>Nothing on this website constitutes legal, financial, medical, or other professional advice. If you need professional advice on any matter, please consult a qualified professional.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">Liability</h2>
            <p>To the fullest extent permitted by law, David Chandler and the David Chandler campaign accept no liability for any loss or damage arising from use of this website or reliance on information published here.</p>
          </section>
        </div>

        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/privacy" className="text-primary underline hover:text-primary/80">Privacy Policy</Link>
          <Link href="/cookies" className="text-primary underline hover:text-primary/80">Cookies Policy</Link>
          <Link href="/gdpr" className="text-primary underline hover:text-primary/80">GDPR Information</Link>
          <Link href="/imprint" className="text-primary underline hover:text-primary/80">Legal Imprint</Link>
        </div>
      </div>
    </div>
  );
}
