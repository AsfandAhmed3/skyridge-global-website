"use client";

import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background px-6 pb-16 pt-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f1630_0%,_transparent_55%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-[#231437] via-transparent to-transparent" />
      </div>
      <motion.div
        className="relative mx-auto flex w-full max-w-4xl flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-[0.4em] text-primary">
          {eyebrow}
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-yellow-400 md:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-text-muted md:text-base">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
