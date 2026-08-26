'use client';

import { ReactNode, CSSProperties, useEffect, useRef, useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Fires once when the element approaches the viewport. */
function useInView<T extends HTMLElement>(rootMargin: string) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      const id = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

const directionClass = {
  up: 'reveal-up',
  down: 'reveal-down',
  left: 'reveal-left',
  right: 'reveal-right',
  none: '',
} as const;

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.5,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>('-50px 0px');

  return (
    <div
      ref={ref}
      className={cn('reveal', directionClass[direction], inView && 'in-view', className)}
      style={
        {
          '--reveal-delay': `${delay}s`,
          '--reveal-duration': `${duration}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>('0px');

  return (
    <div
      ref={ref}
      className={cn('stagger-group', inView && 'in-view', className)}
      style={{ '--stagger-base': `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('stagger-item', className)}>
      {children}
    </div>
  );
}
