import { Link } from "wouter";
import { Lock } from "lucide-react";

export default function Privacy() {
  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 text-primary mb-6">
          <Lock className="w-6 h-6" />
          <span className="text-sm font-semibold uppercase tracking-widest">Legal</span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-primary mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 2025</p>

        <div className="prose prose-lg text-muted-foreground max-w-none space-y-8 bg-card border border-border rounded-2xl p-8 sm:p-12 shadow">

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">1. Who we are</h2>
            <p>This website is operated by the <strong className="text-foreground">David Chandler campaign</strong>, promoted by David Chandler, 55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT. David Chandler is the data controller for personal data collected through this website.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">2. What data we collect and why</h2>
            <p>We collect only the personal data you choose to give us:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong className="text-foreground">Contact form:</strong> your name, email address, optional phone number and message. Used solely to respond to your enquiry.</li>
              <li><strong className="text-foreground">Survey responses:</strong> your answers to policy surveys. These are anonymous — we do not ask for or store your name with survey responses.</li>
              <li><strong className="text-foreground">Cookies:</strong> we use only essential technical cookies needed to make the site function. See our <Link href="/cookies" className="text-primary underline">Cookies Policy</Link>.</li>
            </ul>
            <p>We do not collect sensitive personal data (such as health information, political opinion, ethnicity, or religion) and we do not ask you to identify yourself in surveys.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">3. Legal basis for processing</h2>
            <p>We process personal data on the basis of <strong className="text-foreground">legitimate interest</strong> (responding to contact from residents as part of a democratic campaign) and <strong className="text-foreground">consent</strong> (where you voluntarily complete a form and tick the consent statement). You can withdraw consent at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">4. How we store and protect your data</h2>
            <p>Your contact form data is stored securely in an encrypted database hosted within the United Kingdom. It is accessible only to David Chandler. It is never sold, shared with third parties, used for marketing purposes, or transferred outside the UK.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">5. How long we keep your data</h2>
            <p>Contact form messages are retained for a maximum of <strong className="text-foreground">12 months</strong> following the date they were submitted, after which they are permanently deleted. Anonymous survey aggregates may be retained indefinitely as statistical records.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">6. Your rights</h2>
            <p>Under the UK GDPR and Data Protection Act 2018, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Access a copy of the personal data we hold about you</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure of your data ("right to be forgotten")</li>
              <li>Object to processing</li>
              <li>Lodge a complaint with the <strong className="text-foreground">Information Commissioner's Office (ICO)</strong> at ico.org.uk or by calling 0303 123 1113</li>
            </ul>
            <p>To exercise any of these rights, use the <Link href="/contact" className="text-primary underline">Contact page</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">7. Changes to this policy</h2>
            <p>This policy may be updated. Any changes will be published on this page with an updated date at the top. We will not notify you individually of minor changes, but significant changes to how we use your data will be clearly flagged.</p>
          </section>
        </div>

        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/cookies" className="text-primary underline hover:text-primary/80">Cookies Policy</Link>
          <Link href="/gdpr" className="text-primary underline hover:text-primary/80">GDPR Information</Link>
          <Link href="/disclaimer" className="text-primary underline hover:text-primary/80">Disclaimer</Link>
        </div>
      </div>
    </div>
  );
}
