 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "impact", label: "Impact" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "architecture", label: "Architecture" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const activeId = useScrollSpy(SECTIONS.map((s) => s.id));

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      className="sticky top-4 z-40 mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 shadow-lg shadow-emerald-500/5 backdrop-blur-xl"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 ring-1 ring-emerald-400/40">
          <Image
            src="/favicon.svg"
            alt="PS logo"
            width={24}
            height={24}
            priority
          />
        </div>
        <div className="flex flex-col text-xs leading-tight text-slate-200">
          <span className="font-medium">Priti Singh</span>
          <span className="text-[11px] text-slate-400">
            Frontend Engineer · React · Next.js
          </span>
        </div>
      </div>
      <nav className="hidden items-center gap-1 text-xs sm:flex">
        {SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="relative rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:text-white"
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10 shadow-[0_0_0_1px_rgba(148,163,184,0.5)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {section.label}
            </button>
          );
        })}
      </nav>
      <button
        onClick={() => handleClick("contact")}
        className="rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-400/40"
      >
        Let&apos;s talk
      </button>
    </motion.header>
  );
};

