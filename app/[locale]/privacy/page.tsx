"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <SectionWrapper>
      <div className="prose mx-auto max-w-3xl dark:prose-invert">
        <h1>{t("title")}</h1>
        <p>{t("lastUpdated")}</p>
        <h2>{t("sections.collectTitle")}</h2>
        <p>{t("sections.collectText")}</p>
        <h2>{t("sections.useTitle")}</h2>
        <p>{t("sections.useText")}</p>
        <h2>{t("sections.contactTitle")}</h2>
        <p>{t("sections.contactText")}</p>
      </div>
    </SectionWrapper>
  );
}
