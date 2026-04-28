"use client";

import { motion } from "framer-motion";

const insights = [
  {
    title: "Canada PNP pathways for investor founders",
    tag: "Migration",
    summary:
      "How strategic business positioning can accelerate provincial nomination readiness.",
  },
  {
    title: "Structuring cross-border holdings for capital mobility",
    tag: "Wealth",
    summary:
      "Key governance and reporting decisions that protect family assets across jurisdictions.",
  },
  {
    title: "A compliance-first approach to residency advisory",
    tag: "Compliance",
    summary:
      "Why regulatory alignment should define every investor migration program.",
  },
];

export default function InsightsGrid() {
  return (
    <motion.div
      className="grid gap-6 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
    >
      {insights.map((item) => (
        <motion.article
          key={item.title}
          className="rounded-2xl border border-border-subtle bg-surface/70 p-6 shadow-lg"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            {item.tag}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-text-main">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-text-muted">
            {item.summary}
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
}
