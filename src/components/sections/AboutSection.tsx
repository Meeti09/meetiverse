"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparks } from "@/components/Doodles";
import { profile } from "@/data/profile";

const photos = [
  { src: "/images/about-me-1.jpg", alt: "Meeti reading a menu", caption: "always reading" },
  { src: "/images/about-me-2.jpg", alt: "Meeti by the sea at sunset", caption: "sea + sunsets" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading number="02" label="About" title="A little about me." />

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* Text */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-base md:text-lg text-muted leading-relaxed"
            >
              {profile.aboutText.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pl-6 border-l-2 border-accent"
            >
              <p className="text-lg md:text-xl font-serif italic text-foreground/80">
                &ldquo;Curious enough to ask too many questions. Extroverted
                enough to ask them to everyone.&rdquo;
              </p>
            </motion.blockquote>
          </div>

          {/* Photos */}
          <div className="lg:col-span-6 relative">
            <Sparks className="absolute -top-8 right-8 w-8 hidden sm:block" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 md:gap-4 items-start"
            >
              {photos.map((photo, i) => (
                <motion.figure
                  key={photo.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={i === 1 ? "mt-8 md:mt-16" : ""}
                >
                  <div className="overflow-hidden rounded-sm aspect-[3/4]">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-2 font-hand text-xl text-muted -rotate-2">
                    {photo.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
