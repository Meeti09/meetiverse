"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ecosystem } from "@/data/profile";

export function EcosystemSection() {
  return (
    <section id="explored" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-accent" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
              Explored
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight">
            Things I&apos;ve explored.
          </h2>
          <p className="mt-4 text-base text-muted max-w-xl leading-relaxed">
            Not achievements — just rooms I&apos;ve learned in. Workshops,
            labs and builder programs across AI, agents, cloud and Web3.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden border border-border mt-12">
          {ecosystem.map((item, i) => {
            const isLastOdd =
              ecosystem.length % 2 === 1 && i === ecosystem.length - 1;
            const cardClass = `bg-background p-6 md:p-8 group hover:bg-surface/70 transition-colors block ${
              isLastOdd ? "sm:col-span-2" : ""
            }`;
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-xs font-medium tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-muted">
                    {item.host}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.note}</p>
                {item.link && (
                  <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-muted group-hover:text-accent transition-colors">
                    <span>LinkedIn post</span>
                    <ArrowUpRight
                      size={13}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                )}
              </>
            );
            return item.link ? (
              <motion.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.name} — LinkedIn post`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className={cardClass}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className={cardClass}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
