import { useState } from "react";
import { MessageSquare, Send, CheckCircle2, MapPin, Loader2, AlertCircle } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch(`${BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setError("Sorry, something went wrong. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="Contact David Chandler | Independent Candidate — Mildenhall Division"
        description="Get in touch with David Chandler, Independent candidate for Mildenhall Division, West Suffolk County Council. Send a message or find him at local surgeries in Mildenhall, Barton Mills, Worlington and Freckenham."
        path="/contact"
      />
      {/* Hero */}
      <div className="bg-primary text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Contact David</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Have a concern, question or idea? David reads every message personally. Your voice matters — this campaign is built on it.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-md">
            <h2 className="text-lg font-bold font-serif text-primary mb-4">David Chandler</h2>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Independent candidate for the Mildenhall Division, West Suffolk County Council.
            </p>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>55 Girton Close, Mildenhall,<br />Bury St Edmunds, Suffolk,<br />IP28 7PT</span>
            </div>
          </div>

          {/* WhatsApp — number hidden from page text */}
          <a
            href="https://wa.me/447399800229"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl px-6 py-4 shadow-md transition-colors"
          >
            {/* WhatsApp SVG icon */}
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.354.62 4.562 1.703 6.478L2.667 29.333l7.09-1.672A13.268 13.268 0 0 0 16.003 29.333C23.37 29.333 29.333 23.364 29.333 16S23.37 2.667 16.003 2.667zm0 2.4c5.88 0 10.93 5.05 10.93 10.933 0 5.88-5.05 10.933-10.93 10.933a10.89 10.89 0 0 1-5.62-1.556l-.404-.246-4.192.99.993-4.082-.267-.42A10.886 10.886 0 0 1 5.073 16c0-5.883 5.05-10.933 10.93-10.933zm-3.19 5.947c-.207-.46-.426-.47-.624-.478-.162-.007-.348-.007-.534-.007s-.49.07-.747.35c-.257.279-1 .976-1 2.38s1.024 2.762 1.167 2.953c.143.19 1.99 3.175 4.9 4.332 2.421.957 2.91.766 3.435.717.524-.047 1.692-.692 1.93-1.36.238-.668.238-1.24.166-1.36-.07-.118-.258-.19-.534-.334-.276-.143-1.692-.835-1.953-.929s-.452-.143-.643.143c-.19.285-.736.929-.904 1.12-.166.19-.333.214-.609.07-.276-.143-1.165-.43-2.22-1.37-.822-.73-1.377-1.633-1.538-1.908-.162-.276-.017-.424.12-.567.124-.127.276-.333.415-.499.138-.166.183-.285.276-.475.09-.19.044-.357-.024-.499-.068-.143-.62-1.536-.87-2.1z"/>
            </svg>
            WhatsApp David
          </a>

          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 text-sm text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground mb-1">Your privacy matters</p>
            Your details will only be used to respond to your message and will never be shared or used for marketing.
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center shadow-md">
              <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold font-serif text-green-800 mb-2">Message Sent!</h2>
              <p className="text-green-700">Thank you for getting in touch. David will read your message personally and aims to respond within 48 hours.</p>
              <button
                className="mt-6 px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
                onClick={() => setSent(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-md space-y-5">
              <h2 className="text-2xl font-bold font-serif text-primary mb-2">Send a Message</h2>
              <p className="text-muted-foreground text-sm mb-4">All fields marked * are required. Your email is kept private.</p>

              {error && (
                <div className="flex items-center gap-2 text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-foreground">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                    className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-foreground">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background text-foreground"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-foreground">Phone <span className="text-muted-foreground font-normal">(optional)</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="07xxx xxxxxx"
                    className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-foreground">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background text-foreground"
                  >
                    <option value="">Select a topic…</option>
                    <option>Local Roads & Transport</option>
                    <option>Housing & Planning</option>
                    <option>RAF Mildenhall / Defence</option>
                    <option>Rural Services & Health</option>
                    <option>Environment & Green Spaces</option>
                    <option>Community Safety</option>
                    <option>Campaign Support</option>
                    <option>Something Else</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5 text-foreground">Your Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell David what's on your mind…"
                  required
                  rows={6}
                  className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background text-foreground resize-none"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                By submitting this form you consent to your details being stored securely for the purpose of David responding to your message. See our <a href="/legal-imprint" className="underline hover:text-primary">Legal Imprint</a> for full details.
              </p>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md disabled:opacity-60"
              >
                {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {sending ? "Sending…" : "Send Message to David"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
