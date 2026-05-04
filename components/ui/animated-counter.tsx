"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  target,
  duration = 1.8,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(target);
  const hasAnimated = useRef(false);
  const frameId = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animateCounter = () => {
      if (hasAnimated.current) return;

      hasAnimated.current = true;
      setCount(0);

      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCount(Math.round(target * easedProgress));

        if (progress < 1) {
          frameId.current = requestAnimationFrame(animate);
        }
      };

      frameId.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animateCounter();
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId.current);
    };
  }, [duration, target]);

  return (
    <span
      ref={ref}
      className="inline-block min-w-[3ch] tabular-nums transition-transform duration-300 ease-out"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
