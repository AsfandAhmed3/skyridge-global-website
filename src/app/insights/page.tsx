import ContentSection from "@/components/sections/ContentSection";
import InsightsGrid from "@/components/sections/InsightsGrid";
import PageHero from "@/components/sections/PageHero";

export default function InsightsPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Insights"
        title="Market Intelligence and Advisory Briefs"
        description="Research-driven perspectives on migration pathways, investment trends, and compliance expectations."
      />
      <ContentSection title="Latest Briefs">
        <p>
          Our insights team monitors regulatory updates, sector performance, and
          investment migration trends to help clients make informed decisions.
        </p>
        <InsightsGrid />
      </ContentSection>
      <ContentSection title="Research Agenda">
        <p>
          We publish periodic briefs on sector opportunities, compliance best
          practices, and jurisdictional developments relevant to international
          investors and family offices.
        </p>
      </ContentSection>
    </div>
  );
}
