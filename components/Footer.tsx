"use client";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  // Show Back to Top button after scrolling a bit
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 160);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-20 w-full mt-12 pt-10 pb-6 bg-base/80 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        {/* Brand */}
        <a
          href="#hero"
          className="font-orbitron text-xl md:text-2xl font-bold text-vermillion tracking-wide drop-shadow hover:underline focus-visible:underline transition"
        >
          Axionyx
        </a>
        {/* Legal */}
        <nav className="flex gap-6 items-center text-light-gray text-sm">
          <a
            href="/privacy"
            className="hover:text-white transition-colors underline underline-offset-2"
          >
            Privacy&nbsp;Policy
          </a>
          <a
            href="/terms"
            className="hover:text-white transition-colors underline underline-offset-2"
          >
            Terms&nbsp;of&nbsp;Service
          </a>
        </nav>
        {/* Copyright */}
        <div className="text-zinc-500 text-xs md:text-sm">
          © {year} Axionyx. All rights reserved.
        </div>
      </div>

      {/* Back to Top Floating Button */}
      <motion.button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 32 }}
        animate={showTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 350,
          damping: 32,
        }}
        className="fixed bottom-8 right-5 md:right-12 bg-vermillion text-white rounded-full p-3 shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-vermillion z-50 transition"
        style={{ pointerEvents: showTop ? "auto" : "none" }}
      >
        <ArrowUp size={22} />
      </motion.button>
    </footer>
  );
}
