import ContentSection from "@/components/sections/ContentSection";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Terms of Service | Skyridge Global",
  description:
    "Read the terms governing use of the Skyridge Global website and advisory communications.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Compliance"
        title="Terms of Service"
        description="These terms govern the use of our website and advisory communications."
      />
      <ContentSection title="Advisory Scope">
        <p>
          Information provided on this site is for general guidance and does not
          constitute legal or financial advice. Formal advisory services require
          a signed engagement.
        </p>
        <p>
          Any timelines, eligibility commentary, or program information is
          indicative only and subject to change by relevant authorities.
        </p>
      </ContentSection>
      <ContentSection title="Client Responsibilities">
        <p>
          Clients must provide accurate and complete information and comply with
          applicable laws and regulatory requirements.
        </p>
        <p>
          Misrepresentation or omission of material facts may result in
          engagement termination or regulatory consequences.
        </p>
      </ContentSection>
      <ContentSection title="Limitation of Liability">
        <p>
          Skyridge Global is not liable for decisions made without formal
          engagement or for outcomes resulting from third-party actions.
        </p>
        <p>
          We do not guarantee approvals or outcomes, as final determinations are
          made by government or regulatory bodies.
        </p>
      </ContentSection>
      <ContentSection title="Governing Law">
        <p>
          These terms are governed by the laws applicable to the jurisdiction
          where services are delivered, subject to executed agreements.
        </p>
        <p>
          Disputes will be handled in accordance with the terms defined in the
          signed engagement letter.
        </p>
      </ContentSection>
    </div>
  );
}
