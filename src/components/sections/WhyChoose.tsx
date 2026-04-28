"use client";

import { motion } from "framer-motion";
import { Globe, Lock, Scale, Star, Users, Wallet } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    title: "Strategic Advisory",
    description:
      "Comprehensive wealth structuring and asset protection aligned with your long-term goals.",
    icon: Scale,
  },
  {
    title: "Citizenship & Residency",
    description:
      "Bespoke pathways to alternative residence and citizenship in premium jurisdictions.",
    icon: Wallet,
  },
  {
    title: "Global Network",
    description:
      "An unrivaled network of legal, financial, and governmental relationships across 14 jurisdictions.",
    icon: Globe,
  },
  {
    title: "Absolute Discretion",
    description:
      "Strict confidentiality protocols protect your personal and financial information at every stage.",
    icon: Lock,
  },
  {
    title: "Expert Team",
    description:
      "150+ senior advisors including former diplomats, tax attorneys, and migration professionals.",
    icon: Users,
  },
  {
    title: "Proven Track Record",
    description:
      "A 99.8% success rate across 2,400+ client engagements spanning migration and advisory mandates.",
    icon: Star,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading eyebrow="Why Us" title="Why Choose Skyridge Global" />
          <p className="max-w-xl text-sm leading-6 text-text-muted">
            We align your wealth, lifestyle, and legacy goals with strategic
            international positioning, delivering seamless transitions across
            every jurisdiction.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article
                key={reason.title}
                className="rounded-2xl border border-border-subtle bg-surface/70 p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-text-main">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {reason.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
