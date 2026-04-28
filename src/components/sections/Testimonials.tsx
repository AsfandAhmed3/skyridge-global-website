"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "James Whitmore",
    title: "CEO, Meridian Capital",
    quote:
      "Skyridge handled our entire family relocation to Portugal with extraordinary care and precision. Their network opened doors we did not know existed.",
  },
  {
    name: "Sophia Al-Rashid",
    title: "Founder, Luminary Ventures",
    quote:
      "Their tax structuring advisory saved us millions. The team is cross-border experts in every sense.",
  },
  {
    name: "Marcus Chen",
    title: "Managing Director, Apex Holdings",
    quote:
      "From citizenship acquisition to our Singapore holding structure, Skyridge delivered flawlessly with absolute discretion.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <SectionHeading
          eyebrow="Client Perspectives"
          title="Trusted by Global Investors"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className="rounded-2xl border border-border-subtle bg-surface/70 p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="mb-4 text-xs text-primary">★★★★★</div>
              <p className="text-sm leading-6 text-text-muted">{item.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-xs font-semibold text-primary">
                  {item.name
                    .split(" ")
                    .map((namePart) => namePart[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-main">
                    {item.name}
                  </div>
                  <div className="text-xs text-text-muted">{item.title}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
