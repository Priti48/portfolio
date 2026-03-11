type Props = {
  title: string;
  items: string[];
};

export const SkillGroup = ({ title, items }: Props) => {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

