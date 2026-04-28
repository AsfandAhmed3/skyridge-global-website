import ContentSection from "@/components/sections/ContentSection";
import FinalCta from "@/components/sections/FinalCta";
import PageHero from "@/components/sections/PageHero";
import SimpleCardGrid from "@/components/sections/SimpleCardGrid";

const sectors = [
  {
    title: "Technology and SaaS",
    description:
      "Growth-oriented platforms with scalable operations and global market entry.",
  },
  {
    title: "Healthcare Services",
    description:
      "Clinics, care delivery, and regulated services with strong demand signals.",
  },
  {
    title: "Light Manufacturing",
    description:
      "Operational businesses with export potential and regional supply demand.",
  },
  {
    title: "Real Estate Development",
    description:
      "Income-producing assets, mixed-use projects, and institutional partnerships.",
  },
  {
    title: "Professional Services",
    description:
      "Business services, consulting, and specialized advisory models.",
  },
  {
    title: "Energy Transition",
    description:
      "Sustainable infrastructure and clean-tech opportunities in regulated markets.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Industries"
        title="Sector Opportunities Aligned with Migration Goals"
        description="We focus on industries where operational entry can be demonstrated for business-led migration pathways and long-term capital deployment."
      />
      <ContentSection title="Focus Sectors">
        <p>
          Our sector strategy prioritizes operational visibility, job creation,
          and sustainable growth potential. These criteria support regulatory
          outcomes while delivering real economic participation.
        </p>
        <SimpleCardGrid items={sectors} />
      </ContentSection>
      <ContentSection title="Selection Criteria">
        <p>
          We evaluate opportunities based on governance readiness, scalability,
          capital efficiency, and jurisdictional fit. This approach ensures
          each mandate can withstand regulatory review and long-term scrutiny.
        </p>
      </ContentSection>
      <FinalCta />
    </div>
  );
}
