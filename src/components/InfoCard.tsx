import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  children: ReactNode;
};

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}
