import type { ReactNode } from "react";

type SectionBlockProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function SectionBlock({ id, title, eyebrow, className, children }: SectionBlockProps) {
  return (
    <section
      id={id}
      className={[
        "rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70",
        className ?? "",
      ].join(" ")}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-brand-600">{eyebrow}</p>
          )}
          <h2 className="mt-1 text-2xl font-semibold text-slate-900">{title}</h2>
        </div>
      </div>
      <div className="space-y-4 text-slate-700">{children}</div>
    </section>
  );
}
