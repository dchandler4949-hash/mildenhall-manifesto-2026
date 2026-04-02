import { Link } from "wouter";
import { Cookie } from "lucide-react";

export default function Cookies() {
  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 text-primary mb-6">
          <Cookie className="w-6 h-6" />
          <span className="text-sm font-semibold uppercase tracking-widest">Legal</span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-primary mb-2">Cookies Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 2025</p>

        <div className="prose prose-lg text-muted-foreground max-w-none space-y-8 bg-card border border-border rounded-2xl p-8 sm:p-12 shadow">

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">What are cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit — such as whether you are logged in or have already submitted a form.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">What cookies does this site use?</h2>
            <p>This website uses <strong className="text-foreground">only essential technical cookies</strong>. We do not use tracking cookies, advertising cookies, analytics services, or third-party marketing platforms.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-primary/5">
                  <tr>
                    <th className="text-left p-3 font-bold text-foreground">Cookie</th>
                    <th className="text-left p-3 font-bold text-foreground">Purpose</th>
                    <th className="text-left p-3 font-bold text-foreground">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3 font-mono text-xs">vite-session</td>
                    <td className="p-3">Technical session management for the website to function</td>
                    <td className="p-3">Session (deleted when you close your browser)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>We do <strong className="text-foreground">not</strong> use Google Analytics, Facebook Pixel, or any other third-party tracking service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">Can I control cookies?</h2>
            <p>Yes. You can configure your browser to block, delete, or notify you about cookies. Please note that disabling all cookies may affect the functionality of some website features (such as form submission). Guidance on managing cookies is available at <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">allaboutcookies.org</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">Questions?</h2>
            <p>If you have any questions about how we use cookies, use our <Link href="/contact" className="text-primary underline">Contact page</Link> to get in touch.</p>
          </section>
        </div>

        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/privacy" className="text-primary underline hover:text-primary/80">Privacy Policy</Link>
          <Link href="/gdpr" className="text-primary underline hover:text-primary/80">GDPR Information</Link>
          <Link href="/disclaimer" className="text-primary underline hover:text-primary/80">Disclaimer</Link>
        </div>
      </div>
    </div>
  );
}
