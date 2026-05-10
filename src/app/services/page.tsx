import CalloutGrid from "@/components/sections/CalloutGrid";
import ContentSection from "@/components/sections/ContentSection";
import FinalCta from "@/components/sections/FinalCta";
import PageHero from "@/components/sections/PageHero";
import SimpleCardGrid from "@/components/sections/SimpleCardGrid";

export const metadata = {
  title: "Advisory Services | Skyridge Global",
  description:
    "Integrated advisory combining migration planning and business execution — senior-led teams delivering compliant, investor-grade outcomes.",
};

const divisions = [
  {
    title: "Migration Advisory",
    description:
      "Business-led pathways for Canada and other premium jurisdictions, aligned with full establishment support.",
  },
  {
    title: "Business & Deal Advisory",
    description:
      "End-to-end deal sourcing, diligence, and execution for inbound investment mandates.",
  },
  {
    title: "Wealth & Private Office",
    description:
     "Private Office Coordination — We help internationally mobile clients coordinate with their existing wealth managers, legal advisors, and family offices during relocation and transition. We do not provide investment or wealth management advice.",
  },
  {
    title: "Corporate Structuring",
    description:
      "Governance, entity design, and compliance frameworks for global ownership models.",
  },
];

const process = [
  {
    title: "Discovery",
    description:
      "We align your migration, investment, and business objectives with jurisdictional requirements.",
  },
  {
    title: "Strategy",
    description:
      "Advisory blueprint covering entity setup, compliance, capital deployment, and timing.",
  },
  {
    title: "Execution",
    description:
      "Cross-functional delivery with regulated professionals and vetted partners.",
  },
  {
    title: "Ongoing Support",
    description:
      "Post-landing compliance, governance reporting, and portfolio optimization.",
  },
];

const principles = [
  {
    title: "Confidential Mandates",
    description:
      "Engagements are led by senior advisors under strict confidentiality and privacy safeguards.",
  },
  {
    title: "Regulated Execution",
    description:
      "We coordinate with licensed professionals to deliver compliant outcomes across jurisdictions.",
  },
  {
    title: "Capital Alignment",
    description:
      "Migration pathways are structured around real economic activity and sustainable value creation.",
  },
  {
    title: "Lifecycle Support",
    description:
      "Post-landing governance, reporting, and optimization remain part of the delivery model.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Accounting & Services"
        title="Integrated Advisory for Global Investors"
        description="We combine migration planning with business execution so residency outcomes and capital deployment remain aligned."
      />
      <ContentSection title="Service Divisions">
        <p>
          Skyridge Global operates a premium advisory platform with dedicated
          divisions focused on investment migration, corporate advisory, and
          wealth structuring. Each engagement is led by senior specialists and
          supported by a compliance-first operational model.
        </p>
        <p>
          Our teams integrate legal, financial, and operational workstreams to
          ensure that client objectives are met with precision. We prioritize
          clarity in timelines, transparency in documentation, and measurable
          results across every engagement.
        </p>
        <SimpleCardGrid items={divisions} />
      </ContentSection>
      <ContentSection title="Client Engagement Process">
        <p>
          Every mandate follows a structured delivery pathway to ensure clarity,
          compliance, and long-term economic outcomes.
        </p>
        <CalloutGrid items={process} />
      </ContentSection>
      <ContentSection title="Advisory Principles">
        <p>
          Our advisory principles are designed to protect client interests while
          supporting sustainable international positioning. We operate with a
          long-term view that prioritizes compliance, stewardship, and strategic
          optionality.
        </p>
        <CalloutGrid items={principles} />
      </ContentSection>
      <FinalCta />
    </div>
  );
}
