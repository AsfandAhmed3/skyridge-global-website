import ContentSection from "@/components/sections/ContentSection";
import PageHero from "@/components/sections/PageHero";
import SimpleCardGrid from "@/components/sections/SimpleCardGrid";

export const metadata = {
  title: "CICC Framework | Skyridge Global",
  description:
    "Explore the compliance framework Skyridge Global uses for KYC, AML, documentation integrity, and professional coordination.",
};

const principles = [
  {
    title: "KYC and AML Screening",
    description:
      "Robust verification processes aligned with Canadian regulatory standards.",
  },
  {
    title: "Documentation Integrity",
    description:
      "Clear audit trails, secure record retention, and verified source of funds.",
  },
  {
    title: "Qualified Practitioners",
    description:
      "Coordination with CICC-registered consultants and regulated advisors.",
  },
  {
    title: "Post-Landing Compliance",
    description:
      "Ongoing reporting, governance, and operational alignment after landing.",
  },
];

export default function CiccFrameworkPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Compliance"
        title="CICC Framework"
        description="Our advisory approach prioritizes regulatory alignment, documentation integrity, and ethical engagement for every mandate."
      />
      <ContentSection title="Compliance Principles">
        <p>
          Cross-border advisory requires a disciplined compliance model. We work
          exclusively with qualified professionals and maintain strict internal
          standards across every client engagement.
        </p>
        <p>
          Our framework is designed to protect clients and partner institutions,
          ensuring that every mandate aligns with Canadian regulatory expectations
          and global best practices.
        </p>
        <SimpleCardGrid items={principles} />
      </ContentSection>
    </div>
  );
}
