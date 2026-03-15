import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function SectionWrapper({
  children,
  id,
  className,
  fullBleed = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  fullBleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 lg:py-28", className)}
      aria-label={id}
    >
      <div
        className={cn(
          fullBleed ? "w-full" : "mx-auto max-w-7xl px-4 lg:px-8"
        )}
      >
        {children}
      </div>
    </section>
  );
}
