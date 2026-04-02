import { useState, useEffect } from "react";
import { Cookie, X, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const STORAGE_KEY = "dc-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white shadow-2xl border-t-2 border-accent"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <Cookie className="w-5 h-5 text-accent shrink-0 mt-0.5 hidden sm:block" />

        <p className="text-sm leading-snug flex-1 text-white/90">
          <span className="font-bold text-white">This website uses only essential cookies.</span>{" "}
          Surveys may optionally collect your approximate area (village or town level only — never your street or address)
          to help us understand local views. No tracking or advertising cookies are used.{" "}
          <Link
            href="/cookies"
            className="underline text-accent hover:text-accent/80 inline-flex items-center gap-0.5"
          >
            Cookie policy <ChevronRight className="w-3 h-3" />
          </Link>
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={accept}
            className="px-4 py-2 bg-accent text-primary font-bold text-sm rounded-lg hover:bg-accent/90 transition-colors"
          >
            Accept & Continue
          </button>
          <button
            onClick={decline}
            className="px-4 py-2 bg-white/10 text-white font-medium text-sm rounded-lg hover:bg-white/20 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            aria-label="Close cookie banner"
            className="ml-1 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
