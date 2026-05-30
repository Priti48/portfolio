 "use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectCaseStudy } from "@/data/profile";

type Props = {
  projects: ProjectCaseStudy[];
};

const ProjectsSection = ({ projects }: Props) => {
  const [active, setActive] = useState<ProjectCaseStudy | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <motion.button
            key={project.id}
            type="button"
            onClick={() => setActive(project)}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-left shadow-[0_20px_60px_rgba(15,23,42,0.95)] transition hover:border-emerald-400/70 hover:shadow-emerald-500/20"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 130, damping: 22 }}
          >
            <div className="pointer-events-none absolute inset-px rounded-[1.1rem] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%)] opacity-90 group-hover:opacity-100" />
            <div className="relative flex flex-1 flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/80">
                    {project.domain}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50">
                    {project.name}
                  </h3>
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-200">
                  Case study
                </span>
              </div>
              <p className="text-[13px] text-slate-300 line-clamp-3">
                {project.overview}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-slate-900/90 px-2 py-1 text-[11px] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-[12px] text-emerald-200">
                <span>View detailed case study</span>
                <span className="transition group-hover:translate-x-0.5">↗</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal
            project={active}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;

type ModalProps = {
  project: ProjectCaseStudy;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-700/80 bg-slate-950/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,1)]"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 22 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/80 text-slate-300 hover:bg-slate-800/90"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.16),_transparent_55%)]" />
        <div className="relative space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/80">
              {project.domain}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-50">
              {project.name}
            </h3>
          </div>

          <section className="space-y-3 text-[13px] leading-relaxed text-slate-300">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Overview
              </h4>
              <p className="mt-1">{project.overview}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Problem
                </h4>
                <p className="mt-1">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Solution
                </h4>
                <p className="mt-1">{project.solution}</p>
              </div>
            </div>
          </section>

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Key features
              </h4>
              <ul className="mt-2 space-y-1.5 text-[13px] text-slate-300">
                {project.keyFeatures.map((item) => (
                  <li key={item.slice(0, 40)} className="flex gap-2">
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-emerald-400/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Tech stack
              </h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-slate-900/90 px-2.5 py-1 text-[11px] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Impact
              </h4>
              <ul className="mt-2 space-y-1.5 text-[13px] text-slate-300">
                {project.impact.map((item) => (
                  <li key={item.slice(0, 40)} className="flex gap-2">
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

