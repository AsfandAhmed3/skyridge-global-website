import ContentSection from "@/components/sections/ContentSection";
import FinalCta from "@/components/sections/FinalCta";
import PageHero from "@/components/sections/PageHero";
import SimpleCardGrid from "@/components/sections/SimpleCardGrid";

const pillars = [
  {
    title: "Vision",
    description:
      "To be the most trusted name in business-led migration advisory for South Asian and GCC investors seeking economic opportunity in Canada and beyond.",
  },
  {
    title: "Mission",
    description:
      "To deliver integrated business establishment and migration advisory services that create real economic value for UHNW clients, not just residency status.",
  },
  {
    title: "Structure",
    description:
      "Two distinct but complementary service lines under one brand, sharing client acquisition infrastructure, compliance frameworks, and brand equity while maintaining independent delivery.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="About"
        title="A Trusted Partner for Global Mobility"
        description="Skyridge Global delivers business-led migration and corporate advisory for investors seeking long-term international presence."
      />
      <ContentSection title="Company Overview">
        <p>
          Skyridge Global is built on the belief that migration outcomes should
          be anchored in real economic activity. We integrate business planning,
          regulatory compliance, and cross-border advisory under one platform.
        </p>
        <SimpleCardGrid items={pillars} />
      </ContentSection>
      <ContentSection title="Our Commitment">
        <p>
          We serve international founders, family offices, and investors who
          value clarity, discretion, and disciplined execution. Our engagement
          model emphasizes transparency, structured delivery, and long-term
          alignment with client objectives.
        </p>
      </ContentSection>
      <FinalCta />
    </div>
  );
}
