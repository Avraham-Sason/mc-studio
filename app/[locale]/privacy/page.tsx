import { SectionWrapper } from "@/components/ui/section-wrapper";

export default function PrivacyPage() {
  return (
    <SectionWrapper>
      <div className="prose mx-auto max-w-3xl dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>Last updated: March 2026</p>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide when using our contact forms,
          including your name, email address, phone number, and message content.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use the information to respond to your inquiries, provide our
          photography services, and communicate with you about our services.
        </p>
        <h2>Contact</h2>
        <p>
          For questions about this privacy policy, contact us at
          hello@mcstudio.co.il.
        </p>
      </div>
    </SectionWrapper>
  );
}
