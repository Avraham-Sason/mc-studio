"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function PricingSection() {
    const t = useTranslations("pricing");
    const locale = useLocale();

    const categories = [0, 1].map((i) => ({
        name: t(`categories.${i}.name`),
        startingFrom: t(`categories.${i}.startingFrom`),
        includes: Array.from({ length: 4 }, (_, j) => t(`categories.${i}.includes.${j}`)),
    }));

    return (
        <SectionWrapper id="pricing" className="py-4 lg:py-4">
            <ScrollReveal>
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
