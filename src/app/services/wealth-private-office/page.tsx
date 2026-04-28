import CalloutGrid from "@/components/sections/CalloutGrid";
import ContentSection from "@/components/sections/ContentSection";
import FinalCta from "@/components/sections/FinalCta";
import PageHero from "@/components/sections/PageHero";

const pillars = [
  {
    title: "Family Office Design",
    description:
      "Operating models, governance, and reporting tailored for multi-jurisdictional families.",
  },
  {
    title: "Succession Planning",
    description:
      "Coordinated legacy frameworks with legal and fiduciary partners.",
  },
  {
    title: "Asset Consolidation",
    description:
      "Holistic visibility across holdings, entities, and global exposures.",
  },
  {
    title: "Lifestyle Relocation Support",
    description:
      "Trusted coordination for banking, education, and residential transitions.",
  },
];

export default function WealthPrivateOfficePage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Wealth & Private Office"
        title="Discreet Stewardship for Global Families"
        description="Confidential advisory for UHNW principals seeking durable structures, legacy planning, and cross-border coordination."
      />
      <ContentSection title="Private Office Pillars">
        <p>
          We deliver concierge-level oversight with institutional governance and
          a compliance-first approach for family assets and operating entities.
        </p>
        <p>
          Our private office engagements are tailored to each family, balancing
          discretion, reporting clarity, and long-term capital stewardship.
        </p>
        <CalloutGrid items={pillars} />
      </ContentSection>
      <ContentSection title="Family Governance">
        <p>
          We help establish governance models that support intergenerational
          decision-making, clear accountability, and structured reporting across
          diverse asset classes and jurisdictions.
        </p>
      </ContentSection>
      <FinalCta />
    </div>
  );
}
