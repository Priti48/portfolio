 "use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export const Section = ({ id, eyebrow, title, description, children }: Props) => {
  return (
    <section
      id={id}
      className="scroll-mt-32 py-16 sm:py-20 lg:py-24"
      aria-label={title}
    >
      <div className="mx-auto max-w-5xl px-4">
        <motion.header
          className="mb-10 max-w-3xl"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/80">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-sm leading-relaxed text-slate-300/80 sm:text-[15px]">
              {description}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
};

