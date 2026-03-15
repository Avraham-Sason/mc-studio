"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "px-1.5 py-0.5 rounded transition-colors",
          locale === "en"
            ? "text-primary font-bold"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => switchLocale("he")}
        className={cn(
          "px-1.5 py-0.5 rounded transition-colors",
          locale === "he"
            ? "text-primary font-bold"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        עב
      </button>
    </div>
  );
}
