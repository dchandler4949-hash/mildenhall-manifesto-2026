import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8 border-t-[6px] border-destructive">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-white mb-5">
              <img
                src={`${import.meta.env.BASE_URL}images/mildenhall-division-crest.jpg`}
                alt="Mildenhall Division crest"
                className="h-12 w-auto rounded border border-white/20"
              />
              <span className="font-serif text-2xl font-bold tracking-tight">David Chandler</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Standing for Mildenhall High Town, Barton Mills, Worlington & Freckenham. An independent campaign committed to evidence-based policy and genuine community representation.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Mildenhall High Town", "Barton Mills", "Worlington", "Freckenham"].map(p => (
                <span key={p} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">{p}</span>
              ))}
            </div>
          </div>

          {/* Policy areas */}
          <div>
            <h3 className="text-white font-serif font-bold mb-4 text-base">Policy Areas</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/policies/education", "Education"],
                ["/policies/transport", "Transport"],
                ["/policies/policing", "Policing & Safety"],
                ["/policies/health", "Health & NHS"],
                ["/policies/housing", "Housing"],
                ["/policies/poverty", "Poverty & Cost of Living"],
                ["/policies/employment", "Employment"],
                ["/policies/environment", "Environment"],
                ["/policies/us-military", "U.S. Military Presence"],
                ["/policies/taxation", "Taxation"],
                ["/policies/democracy", "Democracy & Civic Participation"],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="hover:text-accent transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Campaign */}
          <div>
            <h3 className="text-white font-serif font-bold mb-4 text-base">The Campaign</h3>
            <ul className="space-y-2 text-sm mb-6">
              {[
                ["/about", "About David"],
                ["/manifesto", "The Manifesto"],
                ["/surveys", "Have Your Say"],
                ["/gallery", "Your Communities"],
                ["/contact", "Contact David"],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="hover:text-accent transition-colors">{label}</Link></li>
              ))}
            </ul>

            {/* Social links */}
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/447399800229"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
                aria-label="Contact David on WhatsApp"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.354.62 4.562 1.703 6.478L2.667 29.333l7.09-1.672A13.268 13.268 0 0 0 16.003 29.333C23.37 29.333 29.333 23.364 29.333 16S23.37 2.667 16.003 2.667zm0 2.4c5.88 0 10.93 5.05 10.93 10.933 0 5.88-5.05 10.933-10.93 10.933a10.89 10.89 0 0 1-5.62-1.556l-.404-.246-4.192.99.993-4.082-.267-.42A10.886 10.886 0 0 1 5.073 16c0-5.883 5.05-10.933 10.93-10.933zm-3.19 5.947c-.207-.46-.426-.47-.624-.478-.162-.007-.348-.007-.534-.007s-.49.07-.747.35c-.257.279-1 .976-1 2.38s1.024 2.762 1.167 2.953c.143.19 1.99 3.175 4.9 4.332 2.421.957 2.91.766 3.435-.717.238-.668.238-1.24.166-1.36-.07-.118-.258-.19-.534-.334-.276-.143-1.692-.835-1.953-.929s-.452-.143-.643.143c-.19.285-.736.929-.904 1.12-.166.19-.333.214-.609.07-.276-.143-1.165-.43-2.22-1.37-.822-.73-1.377-1.633-1.538-1.908-.162-.276-.017-.424.12-.567.124-.127.276-.333.415-.499.138-.166.183-.285.276-.475.09-.19.044-.357-.024-.499-.068-.143-.62-1.536-.87-2.1z"/>
                </svg>
                WhatsApp David
              </a>

              <a
                href="https://x.com/DaveChandler_wp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
                aria-label="Follow David Chandler on X (Twitter) — @DaveChandler_wp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.902-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @DaveChandler_wp
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61564160413995"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
                aria-label="Follow David Chandler on Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-serif font-bold mb-4 text-base">Legal</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/imprint", "Legal Imprint (PPERA)"],
                ["/privacy", "Privacy Policy"],
                ["/cookies", "Cookies Policy"],
                ["/gdpr", "Your Data Rights (GDPR)"],
                ["/disclaimer", "Disclaimer"],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="hover:text-accent transition-colors">{label}</Link></li>
              ))}
            </ul>
            <div className="mt-6 text-xs text-white/50 leading-relaxed">
              <p>Unitas et Vigilantia</p>
              <p className="italic">Unity & Vigilance</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-xs text-white/50 text-center leading-relaxed">
          Promoted by David Chandler on behalf of David Chandler, 55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT.
          This website complies with the Political Parties, Elections and Referendums Act 2000 (PPERA).
          Anonymous survey data may be retained indefinitely as statistical records. Personal contact data is deleted within 12 months.
        </div>
      </div>
    </footer>
  );
}
