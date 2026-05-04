"use client";

import { useLocale, useTranslations } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FAQSection() {
    const t = useTranslations("faq");
    const locale = useLocale();
    const direction = locale === "he" ? "rtl" : "ltr";
    const items = Array.from({ length: 8 }, (_, i) => ({
        question: t(`items.${i}.question`),
        answer: t(`items.${i}.answer`),
    }));

    return (
        <SectionWrapper id="faq" className="bg-secondary/50">
            <ScrollReveal direction="down">
                <div className="text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{t("title")}</h2>
                    <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t("subtitle")}</p>
                </div>
            </ScrollReveal>

            <ScrollReveal direction="up">
                <div className="mx-auto mt-12 max-w-3xl">
                    <Accordion dir={direction} className="space-y-3">
                        {items.map((item, i) => (
                            <AccordionItem key={i} className="rounded-xl border bg-card px-5">
                                <AccordionTrigger className="text-start text-base font-medium hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </ScrollReveal>
        </SectionWrapper>
    );
}
