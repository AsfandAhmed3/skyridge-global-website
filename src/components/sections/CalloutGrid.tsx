"use client";

import { motion } from "framer-motion";

type Callout = {
  title: string;
  description: string;
};

type CalloutGridProps = {
  items: Callout[];
};

export default function CalloutGrid({ items }: CalloutGridProps) {
  return (
    <motion.div
      className="mt-8 grid gap-4 md:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          className="rounded-2xl border border-border-subtle bg-surface/70 p-6"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        >
          <h3 className="text-lg font-semibold text-text-main">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-text-muted">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
