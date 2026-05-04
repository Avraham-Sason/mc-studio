"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const themes = [
  { name: "warm-cream", color: "bg-[#D4603A]", label: "Warm Cream" },
  { name: "midnight", color: "bg-[#D4A03C]", label: "Midnight Studio" },
  { name: "fresh-bold", color: "bg-[#6366F1]", label: "Fresh & Bold" },
];

export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frameId);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-1.5">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={cn(
            "h-5 w-5 rounded-full border-2 transition-transform hover:scale-110",
            t.color,
            theme === t.name
              ? "border-foreground scale-110"
              : "border-transparent"
          )}
          aria-label={t.label}
          title={t.label}
        />
      ))}
    </div>
  );
}
