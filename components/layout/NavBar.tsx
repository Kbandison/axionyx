"use client";
import { useState, useEffect } from "react";
import { navLinks } from "@/data";
import { Menu, X } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

// Animation variants
const navContainer = {
  show: { transition: { staggerChildren: 0.13 } },
};
const navItem = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0 },
};

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  // Trigger animation on mount (client only)
  useEffect(() => {
    controls.start("show");
  }, [controls]);

  // Smooth scroll to section
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Optionally, focus target for accessibility:
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-base/80 backdrop-blur supports-[backdrop-filter]:bg-base/70 border-b border-white/10 transition-shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo / Wordmark */}
        <a
          href="#hero"
          className="font-orbitron text-2xl font-bold text-vermillion tracking-wide drop-shadow"
          onClick={(e) => handleSmoothScroll(e, "#hero")}
        >
          Axionyx
        </a>

        {/* Desktop Links with animation */}
        <motion.ul
          className="hidden md:flex gap-6 lg:gap-8 items-center"
          variants={navContainer}
          initial="hidden"
          animate={controls}
        >
          {navLinks.map((link) => (
            <motion.li key={link.name} variants={navItem}>
              <a
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="nav-magnetic font-sora text-white/90 px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-vermillion"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
          <motion.li variants={navItem}>
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="cta-magnetic ml-2 px-5 py-2 font-sora bg-vermillion text-white rounded-xl font-semibold shadow focus:outline-none focus:ring-2 focus:ring-vermillion focus:ring-offset-2"
              whileHover={{
                scale: 1.06,
                y: -2,
                boxShadow:
                  "0 4px 24px 0 rgba(227,66,52,0.21), 0 1.5px 14px 0 #ff9999aa",
              }}
              whileFocus={{
                scale: 1.06,
                y: -2,
                boxShadow:
                  "0 4px 24px 0 rgba(227,66,52,0.21), 0 1.5px 14px 0 #ff9999aa",
              }}
              whileTap={{
                scale: 0.96,
                y: 1,
                boxShadow: "0 2px 8px 0 rgba(227,66,52,0.13)",
                filter: "brightness(0.97)",
              }}
              transition={{ type: "spring", stiffness: 360, damping: 23 }}
            >
              Begin My Legacy
            </motion.a>
          </motion.li>
        </motion.ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="md:hidden p-2 text-vermillion focus:outline-none focus:ring-2 focus:ring-vermillion rounded"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-base border-t border-white/10 shadow-lg z-50 animate-fade-in-down">
          <ul className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block font-sora text-white/90 hover:text-vermillion text-lg px-4 py-2 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-vermillion"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="mt-2 px-6 py-2 font-sora bg-vermillion text-white rounded-xl font-semibold shadow hover:bg-pale-red transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-vermillion focus:ring-offset-2"
              >
                Begin My Legacy
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
