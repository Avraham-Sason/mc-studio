"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "zoom";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsReady(true);
        setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.12);
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: [0, 0.12, 0.35],
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
      data-reveal-ready={isReady}
      data-reveal-visible={isVisible}
      data-reveal-direction={direction}
      className={cn("mc-scroll-reveal", className)}
    >
      {children}
    </div>
  );
}
