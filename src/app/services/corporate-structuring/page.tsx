import CalloutGrid from "@/components/sections/CalloutGrid";
import ContentSection from "@/components/sections/ContentSection";
import FinalCta from "@/components/sections/FinalCta";
import PageHero from "@/components/sections/PageHero";

const capabilities = [
  {
    title: "Entity Design",
    description:
      "Holding structures aligned with governance, control, and reporting requirements.",
  },
  {
    title: "Jurisdiction Strategy",
    description:
      "Selection of compliant jurisdictions optimized for operational goals.",
  },
  {
    title: "Tax-Aware Structuring",
    description:
      "Coordination with local advisors to build resilient, transparent frameworks.",
  },
  {
    title: "Ongoing Compliance",
    description:
      "Annual filings, board governance, and regulatory reporting support.",
  },
];

export default function CorporateStructuringPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Corporate Structuring"
        title="Resilient Structures for Cross-Border Ownership"
        description="We build transparent, compliant structures that support operational growth and long-term capital protection."
      />
      <ContentSection title="Structuring Capabilities">
        <p>
          Our advisory teams design governance and entity frameworks that align
          with tax, reporting, and operational requirements across jurisdictions.
        </p>
        <p>
          We coordinate with local counsel and tax professionals to ensure that
          ownership structures remain compliant while supporting strategic
          flexibility.
        </p>
        <CalloutGrid items={capabilities} />
      </ContentSection>
      <ContentSection title="Risk and Compliance">
        <p>
          Strong governance reduces exposure and improves decision clarity.
          We help establish board structures, reporting standards, and audit
          readiness aligned with investor expectations.
        </p>
      </ContentSection>
      <FinalCta />
    </div>
  );
}
