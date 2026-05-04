"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function PricingSection() {
    const t = useTranslations("pricing");
    const locale = useLocale();

    return (
        <SectionWrapper id="pricing" className="py-4 lg:py-4">
            <ScrollReveal direction="zoom">
                <div className="mt-10 text-center">
                    <p className="text-sm text-muted-foreground">{t("note")}</p>
                    <Button asChild size="lg" className="mt-4 rounded-full px-8">
                        <Link href={`/${locale}/contact`}>{t("cta")}</Link>
                    </Button>
                </div>
            </ScrollReveal>
        </SectionWrapper>
    );
}
