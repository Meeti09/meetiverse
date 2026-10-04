"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  label: string;
  title: string;
  className?: string;
}

export function SectionHeading({ number, label, title, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-6"
      >
        {number && (
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
            {number}
          </span>
        )}
        <span className="w-12 h-px bg-accent" />
        <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
          {label}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
