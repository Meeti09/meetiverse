"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          number="04"
          label="Experience"
          title="Where I've been."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16 md:space-y-20">
            {experiences.map((exp) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 w-2 h-2 -translate-x-[3px] rounded-full bg-accent hidden md:block" />

                {/* Number + type badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                    {exp.number}
                  </span>
                  <span className="text-xs tracking-[0.15em] uppercase text-muted bg-surface px-2 py-0.5 rounded-sm">
                    {exp.type === "work" ? "Work" : "Leadership"}
                  </span>
                </div>

                {/* Organization & role */}
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-1">
                  {exp.organization}
                </h3>
                <p className="text-base md:text-lg text-accent mb-2">
                  {exp.role}
                </p>
                {exp.dates && (
                  <p className="text-sm text-muted mb-6">{exp.dates}</p>
                )}

                {/* Description */}
                <ul className="space-y-3">
                  {exp.description.map((line, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + j * 0.05 }}
                      className="flex items-start gap-3 text-sm md:text-base text-muted leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />
                      <span>{line}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
