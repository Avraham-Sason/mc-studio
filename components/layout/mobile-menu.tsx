"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemePicker } from "./theme-picker";
import { LanguageSwitcher } from "./language-switcher";

const navLinks = [
  { key: "portfolio", href: "#portfolio" },
  { key: "services", href: "#services" },
  { key: "whyUs", href: "#why-us" },
  { key: "process", href: "#process" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("nav");
  const locale = useLocale();

  function getHref(link: { key: string; href: string }) {
    if (link.href.startsWith("#")) return link.href;
    return `/${locale}${link.href}`;
  }

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side={locale === "he" ? "right" : "left"} className="w-72">
        <SheetHeader>
          <SheetTitle className="text-start">{t("logo")}</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={getHref(link)}
              onClick={onClose}
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="my-4 border-t border-border" />
          <div className="flex items-center justify-between">
            <LanguageSwitcher />
            <ThemePicker />
          </div>
          <Button asChild className="mt-4 rounded-full">
            <Link href={`/${locale}/contact`} onClick={onClose}>
              {t("bookNow")}
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
