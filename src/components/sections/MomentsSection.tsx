"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { moments } from "@/data/moments";

export function MomentsSection() {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: { src: string; alt: string }[];
    index: number;
    eventName: string;
  }>({
    isOpen: false,
    images: [],
    index: 0,
    eventName: "",
  });

  const openLightbox = (
    images: { src: string; alt: string }[],
    index: number,
    eventName: string
  ) => {
    setLightbox({ isOpen: true, images, index, eventName });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index:
        prev.index === 0 ? prev.images.length - 1 : prev.index - 1,
    }));
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index:
        prev.index === prev.images.length - 1 ? 0 : prev.index + 1,
    }));
  };

  return (
    <section id="moments" className="py-24 md:py-36 bg-surface/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          number="05"
          label="Moments"
          title="Things I've been part of."
        />

        <div className="space-y-10 md:space-y-14">
          {moments.map((moment, i) => {
            const mainImage = moment.images[0];
            return (
              <motion.article
                key={moment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="grid md:grid-cols-12 gap-6 md:gap-10 items-center"
              >
                {/* Photo — left */}
                <button
                  onClick={() =>
                    openLightbox(moment.images, 0, moment.event)
                  }
                  className="group md:col-span-5 relative overflow-hidden rounded-sm aspect-[4/3] text-left"
                  aria-label={`View photos from ${moment.event}`}
                >
                  <img
                    src={mainImage.src}
                    alt={mainImage.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  {moment.images.length > 1 && (
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 text-[11px] tracking-wide bg-background/90 text-foreground px-2.5 py-1.5 rounded-sm">
                      <Images size={13} />
                      {moment.images.length} photos
                    </span>
                  )}
                </button>

                {/* Description — right */}
                <div className="md:col-span-7">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-accent mb-2">
                    {String(i + 1).padStart(2, "0")} · {moment.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-3">
                    {moment.event}
                  </h3>
                  <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl">
                    {moment.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightbox.images}
        currentIndex={lightbox.index}
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
        eventName={lightbox.eventName}
      />
    </section>
  );
}
