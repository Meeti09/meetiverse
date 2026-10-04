"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { socials, profile, type SocialIcon } from "@/data/profile";
import { GithubIcon, LinkedinIcon, XLogoIcon } from "@/components/icons";
import { Sparks, UnderlineStroke } from "@/components/Doodles";

function SocialIconGlyph({ icon, size = 20 }: { icon: SocialIcon; size?: number }) {
  switch (icon) {
    case "github":
      return <GithubIcon size={size} />;
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "x":
      return <XLogoIcon size={size} />;
    case "email":
      return <Mail size={size} />;
    case "resume":
      return <FileText size={size} />;
  }
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
          {/* ---- LEFT: name, headline, intro, socials ---- */}
          <div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative font-serif font-semibold text-foreground leading-[0.95] text-[4.25rem] sm:text-8xl lg:text-[7.5rem] w-fit"
            >
              Meeti
              <br />
              Doshi
              <Sparks className="absolute -top-3 right-2 sm:right-6 w-7 sm:w-9" />
              <UnderlineStroke className="absolute -bottom-4 left-1 w-48 sm:w-64 h-4" />
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 text-[1.45rem] md:text-4xl font-normal leading-snug text-foreground max-w-md"
            >
              {profile.heroHeadline.map((part, i) =>
                "accent" in part && part.accent ? (
                  <em key={i} className="font-serif italic text-accent">
                    {part.text}
                  </em>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-5 text-[15px] leading-relaxed text-muted max-w-md"
            >
              {profile.heroIntro}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-9 flex items-start gap-5 sm:gap-7"
            >
              {socials.map((social) => {
                const external = social.url.startsWith("http");
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="group flex flex-col items-center gap-2"
                  >
                    <span className="w-12 h-12 rounded-2xl bg-tile flex items-center justify-center text-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:text-accent group-hover:shadow-[0_8px_20px_rgba(223,91,65,0.18)]">
                      <SocialIconGlyph icon={social.icon} size={20} />
                    </span>
                    <span className="text-xs text-muted group-hover:text-accent transition-colors">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* ---- RIGHT: portrait composition ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative mx-auto w-full max-w-[440px] lg:max-w-[580px]"
          >
            {/* portrait artwork — original file, displayed as-is */}
            <img
              src="/images/Meeti-Portrait.png"
              alt="Meeti Doshi"
              className="relative z-10 w-full h-auto"
              loading="eager"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
