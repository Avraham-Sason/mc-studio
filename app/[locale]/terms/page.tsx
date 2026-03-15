"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export default function TermsPage() {
  const t = useTranslations("terms");

  return (
    <SectionWrapper>
      <div className="prose mx-auto max-w-3xl dark:prose-invert">
        <h1>{t("title")}</h1>
        <p>{t("lastUpdated")}</p>
        <h2>{t("sections.servicesTitle")}</h2>
        <p>{t("sections.servicesText")}</p>
        <h2>{t("sections.bookingTitle")}</h2>
        <p>{t("sections.bookingText")}</p>
        <h2>{t("sections.cancellationTitle")}</h2>
        <p>{t("sections.cancellationText")}</p>
      </div>
    </SectionWrapper>
  );
}
