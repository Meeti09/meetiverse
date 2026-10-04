"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function BuildsSection() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="builds" className="py-24 md:py-36 bg-surface/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          number="03"
          label="Builds"
          title="Things I've built."
        />

        {/* Featured builds — editorial alternating */}
        <div className="space-y-20 md:space-y-32">
          {featured.map((project, i) => {
            const isLarge = i === 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="grid gap-8 md:gap-12 lg:grid-cols-12"
              >
                {/* Project preview */}
                <div
                  className={`${
                    isLarge ? "lg:col-span-7" : "lg:col-span-5"
                  } ${i % 2 === 1 ? "lg:col-start-8 lg:row-start-1" : ""}`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden rounded-sm bg-foreground/5"
                  >
                    <div
                      className={`${
                        isLarge ? "aspect-[16/10]" : "aspect-[4/3]"
                      } relative overflow-hidden`}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.name} cover`}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.08] flex items-center justify-center">
                          <div className="text-center p-8">
                            <p className="text-4xl md:text-5xl font-serif font-medium text-foreground/20 group-hover:text-accent/40 transition-colors duration-500">
                              {project.name}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                    </div>
                  </a>
                </div>

                {/* Project info */}
                <div
                  className={`${
                    isLarge ? "lg:col-span-5" : "lg:col-span-7"
                  } ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} flex flex-col justify-center`}
                >
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
                    {project.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mb-3">
                    {project.name}
                  </h3>
                  <p className="text-sm text-accent mb-4">{project.tagline}</p>
                  <p className="text-base text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {project.achievement && (
                    <div className="flex items-start gap-2 mb-6 p-3 bg-accent/5 rounded-sm border border-accent/10">
                      <Award
                        size={16}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      <p className="text-sm text-foreground/80">
                        {project.achievement}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs tracking-wide text-muted bg-background px-3 py-1.5 rounded-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <div className="flex items-center gap-6">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                      >
                        <span>View project</span>
                        <ArrowUpRight
                          size={16}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted hover:text-foreground transition-colors"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* More builds — compact cards */}
        <div className="mt-24 md:mt-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-10"
          >
            More things I&apos;ve built.
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
            {more.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col p-6 rounded-sm bg-background border border-border hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                    {project.number}
                  </span>
                  {project.context && (
                    <span className="text-[11px] tracking-wide uppercase text-muted bg-surface px-2 py-1 rounded-sm">
                      {project.context}
                    </span>
                  )}
                </div>
                <h4 className="text-xl font-serif font-medium text-foreground mb-1">
                  {project.name}
                </h4>
                <p className="text-xs text-accent mb-3">{project.tagline}</p>
                {project.videoSrc && (
                  <div className="relative aspect-video overflow-hidden rounded-sm bg-foreground mb-4">
                    <video
                      src={project.videoSrc}
                      poster={project.videoPoster}
                      preload="metadata"
                      controls
                      playsInline
                      className="w-full h-full object-contain"
                      aria-label={`${project.name} demo video`}
                    />
                  </div>
                )}
                <p className="text-sm text-muted leading-relaxed mb-5 grow">
                  {project.description}
                </p>
                {project.achievement && (
                  <p className="flex items-start gap-1.5 text-xs text-foreground/80 mb-4">
                    <Award size={13} className="text-accent mt-0.5 shrink-0" />
                    {project.achievement}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] text-muted bg-surface px-2 py-1 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors mt-auto w-fit"
                  >
                    <span>Live demo</span>
                    <ArrowUpRight
                      size={15}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
