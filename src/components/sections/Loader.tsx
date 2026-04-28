"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-5 text-primary"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/70 bg-background/40">
              <Image
                src="/logo.png"
                alt="Skyridge Global"
                width={40}
                height={40}
              />
            </div>
            <div className="text-left">
              <div className="text-base font-semibold tracking-[0.35em]">
                SKYRIDGE
              </div>
              <div className="text-xs uppercase tracking-[0.45em] text-text-muted">
                Global
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
