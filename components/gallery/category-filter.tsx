"use client";

import { cn } from "@/lib/utils";

export function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition-colors",
            active === cat.value
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
