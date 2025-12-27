'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-secondary pointer-events-none">
      {/* Base gradient for depth - slightly reduced opacity to let orbs show through more */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary z-0" />

      {/* Gold Orb 1 - Top Leftish - The main accent */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-accent/40 rounded-full blur-[60px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light/White Orb - Center/Right - Replacing the dark one for better contrast */}
      <motion.div
        className="absolute top-[10%] right-[-20%] w-[70vw] h-[70vw] bg-white/5 rounded-full blur-[80px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Gold Orb 2 - Bottom Center - Secondary accent */}
      <motion.div
        className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-accent/30 rounded-full blur-[70px]"
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Removed the overlay or made it very subtle to not hide the animation */}
      {/* <div className="absolute inset-0 bg-secondary/20 z-10" /> */}
    </div>
  );
}
