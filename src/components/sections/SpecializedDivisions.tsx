"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Briefcase, Globe, Landmark, LineChart, Shield } from "lucide-react";
import SectionHeading from "./SectionHeading";

const divisions = [
  {
    number: "01",
    title: "Migration Services",
    description:
      "Comprehensive investment migration programs, golden visa acquisition, and alternative citizenship pathways across premium jurisdictions.",
    highlights: [
      "Golden Visas",
      "Residency Planning",
      "Citizenship by Investment",
      "Family Relocation",
    ],
    href: "/services/migration-advisory",
    accent: "border-l-4 border-emerald-400/60",
    icon: Globe,
  },
  {
    number: "02",
    title: "Business Advisory",
    description:
      "Strategic wealth structuring, cross-border corporate formation, and deal advisory for global enterprises.",
    highlights: [
      "Corporate Structuring",
      "Wealth Planning",
      "Investment Analysis",
      "Family Office",
    ],
    href: "/services/business-advisory",
    accent: "border-l-4 border-primary/60",
    icon: LineChart,
  },
];

const serviceTiles = [
  {
    title: "Corporate Formation",
    description: "International entity setup, compliance, and governance frameworks.",
    icon: Building2,
  },
  {
    title: "Private Office",
    description: "Bespoke family office, legacy planning, and concierge support.",
    icon: Briefcase,
  },
  {
    title: "Asset Protection",
    description: "Cross-border asset shielding, trusts, and holding structures.",
    icon: Shield,
  },
  {
    title: "Deal Advisory",
    description: "M&A, cross-border transactions, and investment facilitation.",
    icon: Landmark,
  },
];

export default function SpecializedDivisions() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Specialized Divisions"
            description="Two dedicated advisory lines delivering tailored migration and investment outcomes under one premium platform."
          />
          <Link
            href="/services"
            className="inline-flex h-10 items-center justify-center rounded-md border border-primary/60 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:border-primary"
          >
            View All Services →
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
            <motion.article
              key={division.title}
              className={`group flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface/70 p-8 shadow-lg ${division.accent}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-text-muted">
                  {division.number}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-2xl font-semibold text-text-main">
                  {division.title}
                </h3>
                <p className="text-sm leading-6 text-text-muted">
                  {division.description}
                </p>
                <ul className="grid gap-2 text-sm text-text-muted sm:grid-cols-2">
                  {division.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={division.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore {division.title.split(" ")[0]} →
              </Link>
            </motion.article>
          );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {serviceTiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <motion.article
                key={tile.title}
                className="rounded-2xl border border-border-subtle bg-surface/60 p-5 shadow-lg"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-base font-semibold text-text-main">
                  {tile.title}
                </h4>
                <p className="mt-2 text-xs leading-5 text-text-muted">
                  {tile.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
