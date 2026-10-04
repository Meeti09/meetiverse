"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Maximize2 } from "lucide-react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title: string;
  description: string;
}

export function VideoPlayer({ src, poster, title, description }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // If no video source, show poster as a static card
  if (!src) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative"
      >
        <div className="relative aspect-video overflow-hidden rounded-sm bg-surface">
          {poster && (
            <img
              src={poster}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-foreground/10" />
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-medium text-foreground">{title}</h4>
          <p className="text-sm text-muted mt-1 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      <div className="relative aspect-video overflow-hidden rounded-sm bg-foreground">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="metadata"
          controls={isPlaying}
          playsInline
          className="w-full h-full object-contain"
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              onClick={handlePlay}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-105"
              aria-label={`Play ${title}`}
            >
              <Play size={28} className="text-foreground ml-1" fill="currentColor" />
            </button>
          </div>
        )}
        {isPlaying && (
          <button
            onClick={handleFullscreen}
            className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded text-white/80 hover:text-white transition-colors"
            aria-label="Fullscreen"
          >
            <Maximize2 size={16} />
          </button>
        )}
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium text-foreground">{title}</h4>
        <p className="text-sm text-muted mt-1 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
