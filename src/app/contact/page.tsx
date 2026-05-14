import CalloutGrid from "@/components/sections/CalloutGrid";
import ContactForm from "@/components/sections/ContactForm";
import ContentSection from "@/components/sections/ContentSection";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Start a Confidential Conversation | Skyridge Global",
  description:
    "Contact Skyridge Global for confidential advisory on migration, investment, and corporate structuring. Our team responds within two business days.",
};

const contacts = [
  {
    title: "Private Consultations",
    description:
      "Schedule a confidential call with a senior advisor to discuss eligibility and objectives.",
  },
  {
    title: "Investment Mandates",
    description:
      "Request a sector opportunity brief or deal packaging overview.",
  },
  {
    title: "Global Coverage",
    description:
      "Cross-border advisory support for international mobility and investment mandates.",
  },
  {
    title: "Compliance Questions",
    description:
      "Receive guidance on documentation, timelines, and regulatory standards.",
  },
];

const emailsByInquiryType = [
  {
    label: "General Inquiries",
    email: "info@skyridgeglobal.com",
  },
  {
    label: "Migration Advisory",
    email: "migration@skyridgeglobal.com",
  },
  {
    label: "Business & Deal Advisory",
    email: "deals@skyridgeglobal.com",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Contact"
        title="Start a Confidential Conversation"
        description="Connect with our advisory team to discuss migration, investment, or structuring objectives."
      />
      <ContentSection title="Contact Channels">
        <p>
          We respond to qualified inquiries with discretion and urgency. Please
          provide a brief overview of your objectives so we can align you with
          the appropriate advisory lead.
        </p>
        <CalloutGrid items={contacts} />
        <ContactForm />
      </ContentSection>
      <ContentSection title="Response Expectations">
        <p>
          Our team typically responds within two business days. Urgent or
          time-sensitive mandates can be flagged in your message for priority
          review.
        </p>
      </ContentSection>
      <ContentSection title="Email Contact by Inquiry Type">
        <div className="grid gap-6 md:grid-cols-2">
          {emailsByInquiryType.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-text-main">{item.label}</p>
              <a
                href={`mailto:${item.email}`}
                className="text-text-muted transition hover:text-primary"
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>
      </ContentSection>
        <ContentSection title="Registered Office">
          <p>
            Skyridge Global
            <br />
            2030 Bristol Circle, Suite 210
            <br />
            Oakville, ON L6H 0H2
            <br />
            Canada
          </p>
        </ContentSection>
    </div>
  );
}
