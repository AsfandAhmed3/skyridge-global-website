"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "Senior-Led", label: "Advisor Attention" },
  { value: "Compliance-First", label: "Regulatory Clarity" },
  { value: "Global Scope", label: "Cross-Border Strategy" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgShift = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      <motion.div className="absolute inset-0" style={{ y: bgShift }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#26123f_0%,_transparent_55%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-[#2a1544] via-transparent to-transparent" />
      </motion.div>
      <div className="relative mx-auto grid min-h-[80vh] w-full max-w-6xl gap-12 px-6 py-28 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          className="flex flex-col justify-center gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            Premier Advisory Services
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-text-main md:text-6xl">
            Your Gateway to <span className="text-primary">Global Success</span>
          </h1>
          <p className="max-w-xl text-sm leading-7 text-text-muted md:text-base">
            Bespoke migration and business advisory for ultra-high-net-worth
            individuals navigating complex international landscapes with
            unparalleled precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>
          <div className="mt-4 grid gap-6 text-[0.6rem] uppercase tracking-[0.3em] text-text-muted sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-text-main">
                  {stat.value}
                </span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative hidden items-center justify-center lg:flex"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border-subtle bg-[linear-gradient(140deg,_#1d0f2d_10%,_#2d1647_55%,_#12091d_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0%,_transparent_40%)]" />
            <div className="absolute bottom-10 right-10 w-56 rounded-2xl border border-border-subtle bg-surface/80 p-4 shadow-xl shadow-black/40">
              <div className="text-[0.6rem] uppercase tracking-[0.3em] text-text-muted">
                Private Mandates
              </div>
              <div className="mt-2 text-sm font-semibold text-text-main">
                Discreet Advisory
              </div>
              <div className="mt-2 text-2xl font-semibold text-primary">
                By Referral
              </div>
              <div className="mt-1 text-xs text-text-muted">
                Senior partner engagement only
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
