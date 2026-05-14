import ContentSection from "@/components/sections/ContentSection";
import FinalCta from "@/components/sections/FinalCta";
import FounderProfiles from "@/components/sections/FounderProfiles";
import PageHero from "@/components/sections/PageHero";
import SimpleCardGrid from "@/components/sections/SimpleCardGrid";

export const metadata = {
  title: "Our Team | Skyridge Global",
  description:
    "Meet the leadership of Skyridge Global — experienced advisors in migration, compliance, and cross-border investment.",
};



const founders = [
  {
    name: "Osman Aziz",
    title: "Co-Founder & Managing Partner",
    bio: "Osman is a CPA (Ontario) and ACA (ICAP) with over 10 years of progressive finance leadership across insurance, banking, and professional services in Canada and the Gulf region. He has held senior roles at TD Bank and EY, with deep expertise in IFRS reporting, regulatory compliance, and cross-border financial frameworks. At Skyridge Global, Osman leads client engagement, migration advisory strategy, and overall firm operations — bringing institutional rigour to a space that demands both precision and discretion.",
  },
  {
    name: "Adnan Farooq",
    title: "Co-Founder & Head of Business Advisory",
    bio: "Adnan is a senior finance leader with 17+ years of experience across FP&A, capital allocation, project finance, and executive decision support in capital-intensive industries. He has held Director-level roles in the Gulf region and has extensive experience advising management teams, boards, and lenders on investment decisions, financial modeling, and cash flow strategy. At Skyridge Global, Adnan leads business and deal advisory mandates, bringing deep analytical rigour and cross-border investment expertise to every client engagement.",
  },
];
// const team = [
//   {
//     title: "Managing Partner",
//     description:
//       "Leads cross-border strategy and client engagement for migration mandates.",
//   },
//   {
//     title: "Head of Business Advisory",
//     description:
//       "Oversees deal sourcing, investment analysis, and execution oversight.",
//   },
//   {
//     title: "Director of Compliance",
//     description:
//       "Ensures alignment with CICC standards, KYC protocols, and documentation integrity.",
//   },
//   {
//     title: "Private Office Lead",
//     description:
//       "Coordinates legacy planning, family governance, and lifestyle relocation support.",
//   },
// ];
export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="About"
        title="Leadership & Advisory Team"
        description="A senior team of advisors with decades of combined experience across migration, investment, and compliance mandates."
      />
      <FounderProfiles founders={founders} />
      <ContentSection title="Senior Leadership">
        <p>
          Our leadership team blends institutional expertise with entrepreneurial
          execution. We assemble interdisciplinary teams for each mandate to
          ensure that strategy, compliance, and delivery remain aligned.
        </p>
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
