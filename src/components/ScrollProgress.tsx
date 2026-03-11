 "use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto h-1 w-full max-w-5xl overflow-hidden rounded-b-full bg-slate-900/40 backdrop-blur">
        <motion.div
          className="h-full rounded-b-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
    </div>
  );
};

