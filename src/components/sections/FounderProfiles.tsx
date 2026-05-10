"use client";

import { motion } from "framer-motion";

type FounderProfile = {
  name: string;
  title: string;
  bio: string;
};

export default function FounderProfiles({
  founders,
}: {
  founders: FounderProfile[];
}) {
  return (
    <section className="bg-background px-6 py-14">
      <div className="mx-auto w-full max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              className="flex h-full flex-col gap-6 rounded-2xl border border-border-subtle bg-surface/70 p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/40 bg-surface text-2xl font-semibold text-primary">
                {founder.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-main">
                  {founder.name}
                </h3>
                <p className="text-sm font-semibold text-primary">
                  {founder.title}
                </p>
              </div>
              <p className="text-sm leading-6 text-text-muted">{founder.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
