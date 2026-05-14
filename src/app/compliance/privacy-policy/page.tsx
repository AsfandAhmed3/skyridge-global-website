import ContentSection from "@/components/sections/ContentSection";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Privacy Policy | Skyridge Global",
  description:
    "Learn how Skyridge Global collects, uses, protects, and shares personal information shared during advisory engagements.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Compliance"
        title="Privacy Policy"
        description="We respect your privacy and safeguard all personal data shared with our advisory team."
      />
      <ContentSection title="Information We Collect">
        <p>
          We collect information you provide directly, including contact details,
          business requirements, and documentation needed to evaluate eligibility.
        </p>
        <p>
          We may also collect limited technical information to improve website
          performance and security, such as browser type and anonymized usage
          patterns.
        </p>
      </ContentSection>
      <ContentSection title="How We Use Information">
        <p>
          Data is used to assess advisory fit, prepare engagement materials, and
          coordinate with regulated professionals where required.
        </p>
        <p>
          We do not sell personal data. We use information only to provide
          advisory services, comply with legal obligations, and improve client
          experience.
        </p>
      </ContentSection>
      <ContentSection title="Data Security">
        <p>
          We maintain secure storage and access controls, with retention periods
          aligned to regulatory and operational requirements.
        </p>
        <p>
          Access is limited to authorized personnel and trusted partners bound
          by confidentiality and data protection obligations.
        </p>
      </ContentSection>
      <ContentSection title="Third-Party Sharing">
        <p>
          We share information only with qualified partners involved in delivery,
          such as licensed consultants, legal advisors, and financial institutions.
        </p>
        <p>
          Where cross-border transfers are required, we ensure appropriate
          safeguards are in place.
        </p>
      </ContentSection>
    </div>
  );
}
