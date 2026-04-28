import ContentSection from "@/components/sections/ContentSection";
import FinalCta from "@/components/sections/FinalCta";
import PageHero from "@/components/sections/PageHero";
import SimpleCardGrid from "@/components/sections/SimpleCardGrid";

const team = [
  {
    title: "Managing Partner",
    description:
      "Leads cross-border strategy and client engagement for migration mandates.",
  },
  {
    title: "Head of Business Advisory",
    description:
      "Oversees deal sourcing, investment analysis, and execution oversight.",
  },
  {
    title: "Director of Compliance",
    description:
      "Ensures alignment with CICC standards, KYC protocols, and documentation integrity.",
  },
  {
    title: "Private Office Lead",
    description:
      "Coordinates legacy planning, family governance, and lifestyle relocation support.",
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="About"
        title="Leadership & Advisory Team"
        description="A senior team of advisors with decades of combined experience across migration, investment, and compliance mandates."
      />
      <ContentSection title="Senior Leadership">
        <p>
          Our leadership team blends institutional expertise with entrepreneurial
          execution. We assemble interdisciplinary teams for each mandate to
          ensure that strategy, compliance, and delivery remain aligned.
        </p>
        <SimpleCardGrid items={team} />
      </ContentSection>
      <ContentSection title="Advisory Network">
        <p>
          Skyridge Global coordinates with licensed consultants, legal advisors,
          and financial specialists across multiple jurisdictions. This network
          allows us to deliver compliant solutions while maintaining local
          precision.
        </p>
      </ContentSection>
      <FinalCta />
    </div>
  );
}
