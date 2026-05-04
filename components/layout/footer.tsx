"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");
  const locale = useLocale();

  const quickLinks = [
    { label: nav("portfolio"), href: `/${locale}#portfolio` },
    { label: nav("services"), href: `/${locale}#services` },
    { label: nav("about"), href: `/${locale}/about` },
    { label: nav("contact"), href: `/${locale}/contact` },
  ];
  const whatsappHref = `https://wa.me/972547959311?text=${encodeURIComponent(
    t("directContact.whatsappMessage"),
  )}`;
  const emailHref = `mailto:${contact("directContact.email")}?subject=${encodeURIComponent(
    contact("directContact.emailSubject"),
  )}&body=${encodeURIComponent(contact("directContact.emailBody"))}`;
  return (
    <footer className="border-t border-border bg-card" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo_small.png"
                alt="MC Studio"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <h3 className="text-lg font-bold">{nav("logo")}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t("navigation")}
            </h4>
            <nav className="mt-3 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t("contactTitle")}
            </h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="tel:+972547959311"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" /> 054-795-9311
              </a>
              <a
                href={emailHref}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" /> Moshechaim22@gmail.com
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/moshik0609?igsh=eWd1NHVoZXp1NzBq&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1766JtmniW/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex gap-4">
            <Link
              href={`/${locale}/privacy`}
              className="hover:text-foreground transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="hover:text-foreground transition-colors"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
