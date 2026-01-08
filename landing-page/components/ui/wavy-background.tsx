'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type WavySpeed = 'slow' | 'fast';

export type WavyBackgroundProps = React.HTMLAttributes<HTMLDivElement> & {
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: WavySpeed;
  waveOpacity?: number;
  waveCount?: number;
};

const hash3 = (x: number, y: number, z: number) => {
  const value = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return value - Math.floor(value);
};

const fade = (t: number) => t * t * (3 - 2 * t);

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const noise3D = (x: number, y: number, z: number) => {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const zi = Math.floor(z);
  const xf = x - xi;
  const yf = y - yi;
  const zf = z - zi;

  const u = fade(xf);
  const v = fade(yf);
  const w = fade(zf);

  const n000 = hash3(xi, yi, zi);
  const n100 = hash3(xi + 1, yi, zi);
  const n010 = hash3(xi, yi + 1, zi);
  const n110 = hash3(xi + 1, yi + 1, zi);
  const n001 = hash3(xi, yi, zi + 1);
  const n101 = hash3(xi + 1, yi, zi + 1);
  const n011 = hash3(xi, yi + 1, zi + 1);
  const n111 = hash3(xi + 1, yi + 1, zi + 1);

  const x00 = lerp(n000, n100, u);
  const x10 = lerp(n010, n110, u);
  const x01 = lerp(n001, n101, u);
  const x11 = lerp(n011, n111, u);

  const y0 = lerp(x00, x10, v);
  const y1 = lerp(x01, x11, v);

  const n = lerp(y0, y1, w);
  return n * 2 - 1;
};

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 44,
  backgroundFill = '#111827',
  blur = 12,
  speed = 'slow',
  waveOpacity = 0.22,
  waveCount = 4,
  ...props
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== 'undefined' &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'),
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const waveColors = colors ?? [
      '#C6A75E',
      '#9FB6A1',
      '#E7E1D8',
      '#FAF7F2',
      '#B59E5D',
    ];

    let width = 0;
    let height = 0;
    let nt = 0;
    let observer: ResizeObserver | null = null;

    const speedValue = speed === 'fast' ? 0.002 : 0.001;

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect();
      const nextWidth = rect?.width ?? window.innerWidth;
      const nextHeight = rect?.height ?? window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      width = Math.max(1, Math.floor(nextWidth));
      height = Math.max(1, Math.floor(nextHeight));

      canvas.width = Math.max(1, Math.floor(nextWidth * dpr));
      canvas.height = Math.max(1, Math.floor(nextHeight * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.filter = `blur(${blur}px)`;
    };

    const drawWave = () => {
      nt += speedValue;
      for (let i = 0; i < waveCount; i += 1) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x <= width + 10; x += 6) {
          const y = noise3D(x / 800, 0.3 * i, nt) * 90;
          ctx.lineTo(x, y + height * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, width, height);

      ctx.globalAlpha = waveOpacity;
      drawWave();

      animationRef.current = requestAnimationFrame(render);
    };

    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => resize());
      if (canvas.parentElement) {
        observer.observe(canvas.parentElement);
      }
    } else {
      window.addEventListener('resize', resize);
    }

    resize();
    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (observer) {
        observer.disconnect();
      } else {
        window.removeEventListener('resize', resize);
      }
    };
  }, [backgroundFill, blur, colors, speed, waveCount, waveOpacity, waveWidth]);

  return (
    <div
      className={cn('relative h-full w-full overflow-hidden', containerClassName)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      />
      <div className={cn('relative z-10', className)} {...props}>
        {children}
      </div>
    </div>
  );
};
