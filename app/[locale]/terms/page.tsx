import { SectionWrapper } from "@/components/ui/section-wrapper";

export default function TermsPage() {
  return (
    <SectionWrapper>
      <div className="prose mx-auto max-w-3xl dark:prose-invert">
        <h1>Terms of Service</h1>
        <p>Last updated: March 2026</p>
        <h2>Services</h2>
        <p>
          MC Studio provides professional photography services including wedding,
          portrait, and commercial photography across Israel.
        </p>
        <h2>Booking & Payment</h2>
        <p>
          A deposit is required to secure your booking date. Full terms will be
          provided in your service agreement.
        </p>
        <h2>Cancellation</h2>
        <p>
          Cancellations made 30+ days before the shoot receive a full refund
          minus deposit. Cancellations within 30 days may be rescheduled subject
          to availability.
        </p>
      </div>
    </SectionWrapper>
  );
}
