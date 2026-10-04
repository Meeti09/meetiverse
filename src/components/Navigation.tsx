"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { number: "01", label: "Home", href: "#home" },
  { number: "02", label: "About", href: "#about" },
  { number: "03", label: "Builds", href: "#builds" },
  { number: "04", label: "Experience", href: "#experience" },
  { number: "05", label: "Moments", href: "#moments" },
  { number: "06", label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-sm border-b border-border/70"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* Logo / Name */}
            <button
              onClick={() => handleClick("#home")}
              className="text-sm font-semibold tracking-[0.25em] uppercase text-foreground hover:text-accent transition-colors"
            >
              Meeti Doshi
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-9">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = active === sectionId;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleClick(item.href)}
                    className={`group flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors ${
                      isActive ? "text-accent" : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span className={`text-[10px] tabular-nums ${
                      isActive ? "text-accent" : "text-muted/60 group-hover:text-muted"
                    }`}>
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => {
                const sectionId = item.href.replace("#", "");
                const isActive = active === sectionId;
                return (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => handleClick(item.href)}
                    className={`flex items-center gap-4 text-lg tracking-[0.1em] uppercase ${
                      isActive ? "text-accent" : "text-foreground"
                    }`}
                  >
                    <span className="text-sm text-muted tabular-nums">{item.number}</span>
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
