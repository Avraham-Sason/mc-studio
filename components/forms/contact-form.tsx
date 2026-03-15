"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const eventTypes = Array.from({ length: 7 }, (_, i) =>
    t(`eventTypeOptions.${i}`)
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("sending");
    // Placeholder - would integrate with form backend
    console.log("Form data:", data);
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
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
      <div>
        <Label htmlFor="name">{t("name")}</Label>
        <Input
          id="name"
          {...register("name")}
          className={errors.name ? "border-destructive" : ""}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">{t("email")}</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
        </div>
        <div>
          <Label htmlFor="phone">{t("phone")}</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label>{t("eventType")}</Label>
          <select
            {...register("eventType")}
            className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              errors.eventType ? "border-destructive" : "border-input"
            }`}
          >
            <option value="">{t("eventType")}</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="date">{t("date")}</Label>
          <Input id="date" type="date" {...register("date")} />
        </div>
      </div>

      <div>
        <Label htmlFor="message">{t("message")}</Label>
        <Textarea
          id="message"
          rows={5}
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
