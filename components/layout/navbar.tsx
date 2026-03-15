"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemePicker } from "./theme-picker";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { key: "portfolio", href: "#portfolio" },
  { key: "services", href: "#services" },
  { key: "whyUs", href: "#why-us" },
  { key: "process", href: "#process" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  function getHref(link: { key: string; href: string }) {
    if (link.href.startsWith("#")) return link.href;
    return `/${locale}${link.href}`;
  }

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link
            href={`/${locale}`}
            className="text-xl font-bold tracking-tight text-foreground"
          >
            {t("logo")}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={getHref(link)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemePicker />
            <LanguageSwitcher />
            <Button asChild size="sm" className="rounded-full">
              <Link href={`/${locale}/contact`}>{t("bookNow")}</Link>
            </Button>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild size="sm" className="rounded-full text-xs">
              <Link href={`/${locale}/contact`}>{t("bookNow")}</Link>
            </Button>
            <button
              className="p-2"
              onClick={() => setMobileOpen(true)}
              aria-label={t("menuOpen")}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
