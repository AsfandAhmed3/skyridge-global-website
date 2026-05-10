import BulletList from "@/components/sections/BulletList";
import ContentSection from "@/components/sections/ContentSection";
import FinalCta from "@/components/sections/FinalCta";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Deal & Business Advisory | Skyridge Global",
  description:
    "End-to-end deal packaging and business advisory for investors — sector research, diligence, financial modelling and execution support for inbound mandates.",
};

const services = [
  "Sector opportunity identification",
  "Deal sourcing and vendor due diligence",
  "Financial feasibility and ROI modeling",
  "Investment memorandum preparation",
  "Deal structuring and negotiation support",
  "Bespoke mandates for $5M+ investors",
];

export default function BusinessAdvisoryPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Business & Deal Advisory"
        title="End-to-End Deal Packaging"
        description="Standalone deal sourcing and investment analysis. You bring capital, we deliver everything else."
      />
      <ContentSection title="Advisory Coverage">
        <p>
          We support clients seeking direct exposure to Canadian business
          opportunities with research, modeling, and execution oversight.
        </p>
        <p>
          Our team combines market intelligence, diligence frameworks, and
          structured deal documentation to help you evaluate opportunities with
          confidence and clarity.
        </p>
        <BulletList items={services} />
      </ContentSection>
      <ContentSection title="Transaction Governance">
        <p>
          We establish clear governance procedures, reporting cadence, and risk
          controls across every transaction. Clients retain oversight while we
          coordinate vendor management, documentation, and timeline execution.
        </p>
      </ContentSection>
      <ContentSection title="Outcomes">
        <p>
          Our mandate is to deliver investor-grade execution with strong
          governance, clear return visibility, and compliant transaction flow.
        </p>
        <p>
          Whether targeting operating businesses or real assets, we focus on
          long-term value creation, capital preservation, and transparent
          decision-making.
        </p>
      </ContentSection>
      <FinalCta />
    </div>
  );
}
