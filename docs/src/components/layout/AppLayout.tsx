import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export function AppLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content — hidden until focused, helps keyboard and screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-primary focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />
      <motion.main
        id="main-content"
        role="main"
        aria-label="Page content"
        key={location}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex-grow pt-[72px]"
        tabIndex={-1}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
