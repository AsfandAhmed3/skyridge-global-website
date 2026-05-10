import BulletList from "@/components/sections/BulletList";
import ContentSection from "@/components/sections/ContentSection";
import FinalCta from "@/components/sections/FinalCta";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Business-Led Migration Pathways | Skyridge Global",
  description:
    "Canada PNP and Start-Up Visa pathways combined with full business establishment support — immigration-grade business plans, registration, banking, and post-landing compliance.",
};

const services = [
  "Business plan preparation (immigration-grade)",
  "Province selection and PNP eligibility mapping",
  "CICC-registered consultant coordination",
  "Business registration and setup in Canada",
  "Banking, CRA registration, operational setup",
  "Post-landing support and compliance",
];

export default function MigrationAdvisoryPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Migration Advisory"
        title="Business-Led Migration Pathways"
        description="Canada PNP and Start-Up Visa pathways paired with full business establishment. Clients receive a complete economic landing package, not just immigration paperwork."
      />
      <ContentSection title="What We Deliver">
        <p>
          Our migration advisory practice integrates business planning, capital
          deployment, and local compliance so investor mobility is supported by a
          credible operating foundation.
        </p>
        <p>
          We tailor each pathway to your commercial objectives, ensuring that
          business operations, capital allocation, and residency outcomes are
          aligned from the start. Our approach focuses on long-term viability,
          not short-term approvals.
        </p>
        <BulletList items={services} />
      </ContentSection>
      <ContentSection title="Our Advisory Approach">
        <p>
          We work with regulated professionals, vetted partners, and local
          specialists to deliver compliant applications supported by credible
          operational plans. Every step is documented, risk-reviewed, and
          aligned with jurisdiction-specific requirements.
        </p>
        <p>
          Clients receive proactive guidance on business setup, governance, and
          post-landing obligations to ensure continuity and regulatory alignment.
        </p>
      </ContentSection>
      <ContentSection title="Who We Serve">
        <p>
          We advise founders, family offices, and investment principals seeking
          stable access to Canada with long-term business and residency goals.
        </p>
        <p>
          Engagements are best suited for clients seeking a substantive economic
          footprint and a clear, compliant pathway to residence for themselves
          and their families.
        </p>
      </ContentSection>
      <FinalCta />
    </div>
  );
}
