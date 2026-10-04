"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socials, profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          number="06"
          label="Contact"
          title={profile.contactHeading}
        />

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-serif italic text-accent mb-6"
            >
              {profile.contactSubheading}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-muted leading-relaxed mb-12 max-w-xl"
            >
              {profile.contactIntro}
            </motion.p>

            {/* Email - prominent */}
            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group inline-flex flex-wrap items-center gap-3 text-xl sm:text-2xl md:text-3xl font-serif text-foreground hover:text-accent transition-colors mb-12 break-all"
            >
              <Mail size={24} className="text-accent shrink-0" />
              <span>{profile.email}</span>
            </motion.a>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              {socials
                .filter((s) => s.name !== "Email")
                .map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.url.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex items-center gap-2 text-base text-muted hover:text-accent transition-colors w-fit"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
