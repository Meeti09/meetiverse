"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { skillGroups, certifications } from "@/data/profile";

export function ToolboxSection() {
  return (
    <section id="toolbox" className="py-24 md:py-32 bg-surface/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-accent" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
              Toolbox
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight">
            Things I work with.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Skills */}
          <div className="lg:col-span-7 space-y-8">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-foreground bg-background px-4 py-2 rounded-sm border border-border hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">
                Certifications
              </p>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start gap-3 p-5 rounded-sm bg-background border border-border"
                  >
                    <Award size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted mt-1">
                        {cert.issuer}
                        {cert.detail ? ` · ${cert.detail}` : ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
