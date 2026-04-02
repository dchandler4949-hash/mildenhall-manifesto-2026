import { Link, useLocation } from "wouter";
import { Menu, X, Vote, ChevronDown, GraduationCap, Bus, Shield, PoundSterling, Heart, Leaf, Home, HandHeart, Briefcase, Plane, ChevronRight, Landmark } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const policyLinks = [
  { href: "/policies/education", label: "Education", icon: GraduationCap },
  { href: "/policies/transport", label: "Transport", icon: Bus },
  { href: "/policies/policing", label: "Policing & Safety", icon: Shield },
  { href: "/policies/taxation", label: "Taxation", icon: PoundSterling },
  { href: "/policies/health", label: "Health & NHS", icon: Heart },
  { href: "/policies/environment", label: "Environment", icon: Leaf },
  { href: "/policies/housing", label: "Housing", icon: Home },
  { href: "/policies/poverty", label: "Poverty & Cost of Living", icon: HandHeart },
  { href: "/policies/employment", label: "Employment", icon: Briefcase },
  { href: "/policies/us-military", label: "U.S. Military Presence", icon: Plane },
  { href: "/policies/democracy", label: "Democracy & Civic Participation", icon: Landmark },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
  const [isMobilePoliciesOpen, setIsMobilePoliciesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsPoliciesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPoliciesOpen(false);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  const isPolicyActive = policyLinks.some((p) => location.startsWith(p.href));

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-3" : "bg-primary py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white hover:text-accent transition-colors shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/mildenhall-division-crest.jpg`}
              alt="Mildenhall Division crest"
              className="h-10 w-auto rounded border border-white/20 shadow-sm"
            />
            <span className="font-serif text-xl font-bold tracking-tight hidden sm:block">David Chandler</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {/* Home */}
            <Link href="/" className={`px-3 py-2 text-sm font-semibold tracking-wide rounded transition-colors ${isActive("/") && location === "/" ? "text-accent" : "text-white/90 hover:text-white"}`}>
              Home
            </Link>

            {/* Manifesto */}
            <Link href="/manifesto" className={`px-3 py-2 text-sm font-semibold tracking-wide rounded transition-colors ${isActive("/manifesto") ? "text-accent" : "text-white/90 hover:text-white"}`}>
              The Manifesto
            </Link>

            {/* Our Policies dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsPoliciesOpen((o) => !o)}
                aria-expanded={isPoliciesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold tracking-wide rounded transition-colors ${isPolicyActive ? "text-accent" : "text-white/90 hover:text-white"}`}
              >
                Our Policies
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPoliciesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isPoliciesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden z-50"
                    role="menu"
                  >
                    <div className="px-4 py-3 bg-primary/5 border-b border-border flex justify-between items-center">
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">All Policy Areas</p>
                      <Link href="/policies" onClick={() => setIsPoliciesOpen(false)} className="text-xs text-primary hover:underline font-semibold flex items-center gap-0.5">
                        View all <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 p-3 gap-1">
                      {policyLinks.map(({ href, label, icon: Icon }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setIsPoliciesOpen(false)}
                          role="menuitem"
                          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                            isActive(href) ? "bg-primary text-white" : "text-foreground hover:bg-primary/5 hover:text-primary"
                          }`}
                        >
                          <Icon className="w-4 h-4 shrink-0" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About David */}
            <Link href="/about" className={`px-3 py-2 text-sm font-semibold tracking-wide rounded transition-colors ${isActive("/about") ? "text-accent" : "text-white/90 hover:text-white"}`}>
              About David
            </Link>

            {/* Contact */}
            <Link href="/contact" className={`px-3 py-2 text-sm font-semibold tracking-wide rounded transition-colors ${isActive("/contact") ? "text-accent" : "text-white/90 hover:text-white"}`}>
              Contact
            </Link>

            {/* CTA */}
            <Link
              href="/surveys"
              className="ml-2 flex items-center gap-2 px-4 py-2.5 bg-destructive hover:bg-destructive/90 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              <Vote className="w-4 h-4" />
              Have Your Say
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-white/10 overflow-hidden"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-5 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`px-3 py-3 rounded-lg text-base font-semibold ${isActive("/") && location === "/" ? "text-accent" : "text-white"}`}>Home</Link>
              <Link href="/manifesto" onClick={() => setIsMobileMenuOpen(false)} className={`px-3 py-3 rounded-lg text-base font-semibold ${isActive("/manifesto") ? "text-accent" : "text-white"}`}>The Manifesto</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`px-3 py-3 rounded-lg text-base font-semibold ${isActive("/about") ? "text-accent" : "text-white"}`}>About David</Link>

              {/* Policies accordion */}
              <button
                onClick={() => setIsMobilePoliciesOpen((o) => !o)}
                className={`flex justify-between items-center px-3 py-3 rounded-lg text-base font-semibold w-full text-left ${isPolicyActive ? "text-accent" : "text-white"}`}
              >
                Our Policies
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobilePoliciesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isMobilePoliciesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-3 border-l-2 border-white/20 pl-3 overflow-hidden"
                  >
                    {policyLinks.map(({ href, label, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-2 py-2.5 px-2 text-sm font-medium rounded-lg transition-colors ${isActive(href) ? "text-accent" : "text-white/80 hover:text-white"}`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`px-3 py-3 rounded-lg text-base font-semibold ${isActive("/contact") ? "text-accent" : "text-white"}`}>Contact David</Link>

              <Link
                href="/surveys"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-destructive text-white font-bold rounded-xl shadow-md text-base"
              >
                <Vote className="w-5 h-5" />
                Have Your Say
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
