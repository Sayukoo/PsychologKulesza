'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-secondary pointer-events-none">
      {/* Base gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-secondary z-0" />

      {/* Gold Orb 1 - Top Leftish - The main accent */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-accent/20 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark Navy Orb - Center/Right - Adding depth */}
      <motion.div
        className="absolute top-[10%] right-[-20%] w-[70vw] h-[70vw] bg-primary/40 rounded-full blur-[120px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Gold Orb 2 - Bottom Center - Subtle secondary accent */}
      <motion.div
        className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-accent/15 rounded-full blur-[90px]"
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Subtle overlay to ensure text contrast is always preserved */}
      <div className="absolute inset-0 bg-secondary/20 z-10" />
    </div>
  );
}
