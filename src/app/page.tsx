 "use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { SkillGroup } from "@/components/SkillGroup";
import ProjectsSection from "@/components/ProjectsSection";
import {
  about,
  architectureThinking,
  experiences,
  hero,
  impactMetrics,
  projects,
  skills,
} from "@/data/profile";

const ImpactMetricCard = ({ label, value, suffix }: { label: string; value: number; suffix?: string }) => (
  <motion.div
    className="relative overflow-hidden rounded-2xl border border-emerald-400/10 bg-slate-900/70 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.8)]"
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ type: "spring", stiffness: 140, damping: 18 }}
  >
    <div className="pointer-events-none absolute inset-px rounded-2xl border border-emerald-500/5 bg-gradient-to-br from-emerald-500/10 via-slate-900/40 to-violet-500/5" />
    <div className="relative flex flex-col gap-1">
      <motion.span
        className="text-3xl font-semibold tracking-tight text-emerald-300 sm:text-4xl"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      >
        {value}
        {suffix}
      </motion.span>
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
        {label}
      </span>
    </div>
  </motion.div>
);

const TechBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-slate-600/60 bg-slate-900/70 px-2.5 py-1 text-[11px] font-medium text-slate-200 shadow-sm shadow-slate-900/60">
    {label}
  </span>
);

export default function Home() {
  return (
    <main className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-64 w-[28rem] rounded-full bg-[radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.25),_transparent_60%)] blur-3xl" />
        <div className="absolute right-[-6rem] top-1/3 h-72 w-[30rem] rounded-full bg-[radial-gradient(circle_at_top_right,_rgba(129,140,248,0.22),_transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-4 pb-20 pt-6 sm:px-6 lg:px-0 lg:pb-28">
        <Navbar />

        <Section
          id="hero"
          eyebrow="Software Engineer · Frontend"
          title={hero.title}
          description={hero.subtitle}
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-6">
              <motion.p
                className="max-w-xl text-sm leading-relaxed text-slate-300/85 sm:text-[15px]"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05, type: "spring", stiffness: 130, damping: 20 }}
              >
                Over 3+ years I&apos;ve shipped production React and Next.js platforms
                across Government EdTech, FinTech, and Travel — building
                role-based access systems, transactional UIs, and reusable
                component libraries that teams can extend without friction.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 text-sm"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 130, damping: 20 }}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(16,185,129,0.35)] transition hover:shadow-emerald-400/60"
                >
                  View projects
                </button>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/70 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-sm shadow-slate-900/60 transition hover:border-emerald-400/70 hover:text-emerald-200"
                >
                  Download resume
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-slate-100/80 underline-offset-4 hover:text-emerald-200 hover:underline"
                >
                  Contact
                </button>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3 text-[11px] text-slate-300/90"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 130, damping: 20 }}
              >
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  3+ years · React &amp; Next.js
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1">
                  EdTech · FinTech · Travel
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1">
                  Remote &amp; Hybrid · ₹10–12+ LPA
                </span>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, type: "spring", stiffness: 130, damping: 18 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
                <div className="pointer-events-none absolute inset-px rounded-[1.3rem] border border-emerald-400/10 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.12),_transparent_55%)]" />
                <div className="relative space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        {hero.name}
                      </p>
                      <p className="text-sm font-semibold text-slate-100">
                        {hero.designation}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-slate-800/90 px-2 py-1 text-[11px] text-slate-300">
                      {hero.location}
                    </span>
                  </div>
                  <div className="grid gap-2 text-[11px] text-slate-300">
                    <p>
                      • RBAC systems &amp; permission-based dashboards for
                      multi-role government EdTech platforms.
                    </p>
                    <p>
                      • High-volume transactional UIs in FinTech: AEPS, DMT,
                      BBPS, and wallet management.
                    </p>
                    <p>
                      • Reusable component libraries that scale across products
                      and accelerate team delivery.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        <Section
          id="impact"
          eyebrow="At a glance"
          title="Frontend experience across 3 industries, 6+ platforms."
          description="Government EdTech, FinTech payments, and Travel booking — each domain sharpened a different set of skills in architecture, state management, and UX resilience."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric) => (
              <ImpactMetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </Section>

        <Section
          id="about"
          eyebrow="About"
          title="Product-focused engineering across EdTech, FinTech, and Travel."
        >
          <div className="space-y-4 text-sm leading-relaxed text-slate-300/90 sm:text-[15px]">
            <p>{about.summary}</p>
            {about.narrative.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            <p className="rounded-2xl border border-emerald-400/15 bg-emerald-500/5 p-4 text-[13px] text-emerald-100">
              {about.collaboration}
            </p>
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Tech Stack"
          title="Full-stack frontend skills across modern React ecosystems."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <SkillGroup title="Frontend" items={skills.frontend} />
              <SkillGroup title="State management" items={skills.stateManagement} />
              <SkillGroup title="UI frameworks" items={skills.uiFrameworks} />
            </div>
            <div className="space-y-4">
              <SkillGroup
                title="Architecture & practices"
                items={skills.architecture}
              />
              <SkillGroup title="Tools" items={skills.tools} />
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="3+ years frontend · 1.5 years Android · 3 companies."
        >
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 hidden w-px bg-gradient-to-b from-emerald-400/60 via-slate-700/80 to-transparent sm:block" />
            <div className="space-y-6">
              {experiences.map((exp) => (
                <motion.article
                  key={exp.company}
                  className="relative rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 pl-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)] sm:pl-10"
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 130, damping: 20 }}
                >
                  <div className="pointer-events-none absolute inset-px rounded-[1.1rem] border border-white/5 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950/90" />
                  <div className="relative flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <div className="hidden flex-col items-center sm:flex">
                        <span className="mt-1 flex h-3 w-3 items-center justify-center rounded-full border border-emerald-300/70 bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.18)]" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-slate-50">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-medium text-slate-400">
                          {exp.company} · {exp.duration}
                        </p>
                        <p className="mt-1 text-[13px] text-slate-300">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 text-[13px] text-slate-300/95">
                      {exp.achievements.map((item) => (
                        <li key={item.slice(0, 40)} className="flex gap-2">
                          <span className="mt-[6px] h-1 w-1 rounded-full bg-slate-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.techStack.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Case studies"
          title="Real products, real users, production outcomes."
          description="Government EdTech with RBAC, a full School ERP, a FinTech payments platform, and a multi-vertical travel booking engine — all shipped to production."
        >
          <ProjectsSection projects={projects} />
        </Section>

        <Section
          id="architecture"
          eyebrow="Engineering approach"
          title="How I think about scalable frontend systems."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {architectureThinking.pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: "spring", stiffness: 130, damping: 22 }}
              >
                <div className="pointer-events-none absolute inset-px rounded-[1.1rem] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%)]" />
                <div className="relative space-y-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-slate-300">{pillar.description}</p>
                  <ul className="space-y-1.5 text-[13px] text-slate-300/95">
                    {pillar.bullets.map((item) => (
                      <li key={item.slice(0, 40)} className="flex gap-2">
                        <span className="mt-[6px] h-1 w-1 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Open to remote, hybrid & onsiteFrontend Engineer roles."
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-start">
            <motion.form
              className="relative space-y-4 overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.95)]"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 130, damping: 20 }}
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(
                  `Portfolio contact – ${data.get("name") || "New opportunity"}`,
                );
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nEmail: ${data.get(
                    "email",
                  )}\nContact: +91 9097413076\n\nMessage:\n${data.get(
                    "message",
                  )}`,
                );
                window.location.href = `mailto:spriti396@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-emerald-400/10 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.2),_transparent_55%)]" />
              <div className="relative space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field
                  label="Role / Opportunity"
                  name="message"
                  textarea
                  required
                  rows={4}
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(16,185,129,0.45)] transition hover:shadow-emerald-400/60"
                >
                  Send message
                </button>
              </div>
            </motion.form>

            <motion.div
              className="space-y-4 text-sm text-slate-300/90"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05, type: "spring", stiffness: 130, damping: 22 }}
            >
              <p>
                I&apos;m actively looking for Remote and Hybrid Frontend Engineer
                roles — React, Next.js, or TypeScript-heavy products where
                frontend sits close to the business, and shipping quality
                matters as much as shipping fast.
              </p>
              {/* <p className="text-[13px] text-slate-400">
                Target: ₹10–12+ LPA · Available immediately
              </p> */}
              <div className="space-y-2 text-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Reach me directly
                </p>
                <div className="space-y-1 text-[13px]">
                  <a
                    href="mailto:spriti396@gmail.com"
                    className="text-emerald-300 hover:text-emerald-200"
                  >
                    spriti396@gmail.com
                  </a>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href="https://www.linkedin.com/in/priti-singh-475b46207/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-600/80 bg-slate-900/80 px-3 py-1 text-[12px] font-medium text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Priti48"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-600/80 bg-slate-900/80 px-3 py-1 text-[12px] font-medium text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </main>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  rows?: number;
};

const Field = ({ label, name, type = "text", textarea, required, rows }: FieldProps) => (
  <label className="block text-xs font-medium text-slate-200">
    <span className="mb-1 inline-flex items-center gap-1">
      {label}
      {required && <span className="text-emerald-300">*</span>}
    </span>
    {textarea ? (
      <textarea
        name={name}
        required={required}
        rows={rows}
        className="mt-1 w-full rounded-2xl border border-slate-600/80 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-50 outline-none ring-emerald-400/40 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2"
      />
    ) : (
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-2xl border border-slate-600/80 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-50 outline-none ring-emerald-400/40 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2"
      />
    )}
  </label>
);

