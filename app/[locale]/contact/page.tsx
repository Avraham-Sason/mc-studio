"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <div className="bg-secondary py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold">
              {t("directContact.title")}
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:mt-6 lg:gap-4">
              <a
                href={`tel:${t("directContact.phone")}`}
                className="flex items-center gap-3 rounded-xl bg-card p-4 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{t("directContact.phone")}</p>
                </div>
              </a>

              <a
                href={`mailto:${t("directContact.email")}`}
                className="flex items-center gap-3 rounded-xl bg-card p-4 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{t("directContact.email")}</p>
                </div>
              </a>

              <a
                href="https://wa.me/972547959311?text=Hi!%20I'm%20interested%20in%20photography%20services%20from%20MC%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-primary p-4 text-primary-foreground transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-80">WhatsApp</p>
                  <p className="font-medium">{t("directContact.whatsapp")}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
