"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCta() {
  return (
    <section className="bg-background px-6 py-24">
      <motion.div
        className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 rounded-3xl border border-border-subtle bg-surface/70 px-10 py-16 text-center shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-[0.4em] text-primary">
          Begin Your Journey
        </span>
        <h2 className="text-3xl font-semibold text-text-main md:text-4xl">
          Ready to Unlock Your <span className="text-primary">Global Potential</span>?
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-text-muted">
          Connect with our senior advisors in complete confidence to discuss
          global mobility, corporate advisory, and wealth structuring needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Schedule a Private Consultation
          </Link>
          <Link href="/contact" className="btn-outline">
              Request a Brochure
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
