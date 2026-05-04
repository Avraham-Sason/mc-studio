"use client";

import { useTranslations, useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

const WHATSAPP_NUMBER = "972547959311";

function buildWhatsAppUrl(data: ContactFormData, locale: string): string {
  const isHe = locale === "he";

  const lines = [
    isHe ? "📸 *פנייה חדשה מהאתר*" : "📸 *New Inquiry from Website*",
    "",
    isHe ? `👤 *שם:* ${data.name}` : `👤 *Name:* ${data.name}`,
    isHe ? `📱 *טלפון:* ${data.phone}` : `📱 *Phone:* ${data.phone}`,
    isHe ? `📧 *אימייל:* ${data.email}` : `📧 *Email:* ${data.email}`,
    data.eventType
      ? isHe
        ? `📋 *סוג צילום:* ${data.eventType}`
        : `📋 *Event Type:* ${data.eventType}`
      : "",
    data.date
      ? isHe
        ? `📅 *תאריך מועדף:* ${data.date}`
        : `📅 *Preferred Date:* ${data.date}`
      : "",
    data.message
      ? `\n${isHe ? "💬 *הודעה:*" : "💬 *Message:*"}\n${data.message}`
      : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const eventTypes = t.raw("eventTypeOptions") as string[];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("sending");

    try {
      // Open WhatsApp with formatted message
      const url = buildWhatsAppUrl(data, locale);
      window.open(url, "_blank");

      // Also send to our API for backup record
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale, timestamp: new Date().toISOString() }),
      }).catch(() => {
        // Silently fail — WhatsApp is the primary channel
      });

      setStatus("success");
    } catch {
      // Even if something fails, WhatsApp link was already opened
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-card p-8 text-center">
        <p className="text-lg font-medium text-primary">{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">{t("name")}</Label>
          <Input
            id="name"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">{t("phone")}</Label>
          <Input
            id="phone"
            type="tel"
            dir="ltr"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">{t("email")}</Label>
        <Input
          id="email"
          type="email"
          dir="ltr"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>{t("eventType")}</Label>
          <select
            {...register("eventType")}
            dir={locale === "he" ? "rtl" : "ltr"}
            className={`flex h-10 w-full appearance-none rounded-md border bg-background bg-size-[16px_16px] bg-no-repeat px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ltr:bg-position-[right_12px_center] rtl:bg-position-[left_12px_center] ${
              errors.eventType ? "border-destructive" : "border-input"
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
            }}
          >
            <option value="">{t("eventType")}</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="date">{t("date")}</Label>
          <Input id="date" type="date" {...register("date")} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">{t("message")}</Label>
        <Textarea
          id="message"
          rows={4}
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? t("sending") : t("submit")}
      </Button>

      {status === "error" && (
        <p className="text-sm text-destructive">{t("error")}</p>
      )}
    </form>
  );
}
