import ContentSection from "@/components/sections/ContentSection";
import PageHero from "@/components/sections/PageHero";
import SimpleCardGrid from "@/components/sections/SimpleCardGrid";

const items = [
  {
    title: "CICC Framework",
    description:
      "Compliance-first advisory standards aligned with Canadian regulatory expectations.",
  },
  {
    title: "Privacy Policy",
    description:
      "How we collect, use, and safeguard personal and business information.",
  },
  {
    title: "Terms of Service",
    description:
      "Rules and guidance for use of this website and advisory communications.",
  },
];

export default function CompliancePage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Compliance"
        title="Governance and Regulatory Alignment"
        description="We operate with strict compliance standards across every engagement."
      />
      <ContentSection title="Compliance Resources">
        <p>
          Compliance is central to our advisory model. We prioritize transparency,
          documentation integrity, and regulatory alignment at every stage of
          the engagement.
        </p>
        <SimpleCardGrid items={items} />
      </ContentSection>
    </div>
  );
}
