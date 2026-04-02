import { Link } from "wouter";
import { FileText } from "lucide-react";

export default function GDPRPage() {
  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 text-primary mb-6">
          <FileText className="w-6 h-6" />
          <span className="text-sm font-semibold uppercase tracking-widest">Legal</span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-primary mb-2">GDPR — Your Rights Explained</h1>
        <p className="text-muted-foreground mb-10">Plain English guide to your data rights under UK GDPR</p>

        <div className="prose prose-lg text-muted-foreground max-w-none space-y-8 bg-card border border-border rounded-2xl p-8 sm:p-12 shadow">

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">What is GDPR?</h2>
            <p>The UK General Data Protection Regulation (UK GDPR), together with the Data Protection Act 2018, gives you rights over how organisations collect and use your personal information. As a campaign website operated by David Chandler, we are required to comply with these rules.</p>
            <p>In plain English: <strong className="text-foreground">your personal data belongs to you</strong>. We can only use it in ways you know about and have agreed to, and you can ask us to stop at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">Your Rights — in plain English</h2>
            <div className="space-y-4">
              {[
                { right: "The right to know", explain: "You can ask us what personal data we hold about you, why we hold it, and who we share it with. We must respond within one month." },
                { right: "The right to a copy", explain: "You can request a copy of all the personal data we hold about you, free of charge. This is called a 'Subject Access Request'." },
                { right: "The right to correct mistakes", explain: "If any of the data we hold about you is wrong, you can ask us to correct it." },
                { right: "The right to erasure", explain: "You can ask us to delete your personal data. Known as the 'right to be forgotten'. We must comply unless we have a legal obligation to keep it." },
                { right: "The right to restrict processing", explain: "You can ask us to stop using your data in certain ways (for example, stop us using it for marketing purposes — though we don't do this anyway)." },
                { right: "The right to object", explain: "You can object to us using your data, and in most cases we must stop." },
                { right: "The right to complain", explain: "If you are unhappy with how we have handled your data, you can complain to the Information Commissioner's Office (ICO) — the UK's independent data protection authority." },
              ].map(({ right, explain }) => (
                <div key={right} className="bg-muted/50 rounded-xl p-4 border border-border">
                  <h3 className="font-bold text-foreground mb-1 text-base">{right}</h3>
                  <p className="text-sm leading-relaxed">{explain}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">How to exercise your rights</h2>
            <p>Simply <Link href="/contact" className="text-primary underline">contact David</Link> using the contact form and explain what you would like. You do not need to use legal language or cite specific regulations. We will respond within one calendar month.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-serif">Contact the ICO</h2>
            <p>If you are not satisfied with how we handle your request, you have the right to contact the <strong className="text-foreground">Information Commissioner's Office (ICO)</strong>:</p>
            <ul className="list-none space-y-2 text-sm">
              <li>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary underline">ico.org.uk</a></li>
              <li>Telephone: <strong className="text-foreground">0303 123 1113</strong> (Monday–Friday, 9am–5pm)</li>
              <li>Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, SK9 5AF</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/privacy" className="text-primary underline hover:text-primary/80">Privacy Policy</Link>
          <Link href="/cookies" className="text-primary underline hover:text-primary/80">Cookies Policy</Link>
          <Link href="/disclaimer" className="text-primary underline hover:text-primary/80">Disclaimer</Link>
        </div>
      </div>
    </div>
  );
}
