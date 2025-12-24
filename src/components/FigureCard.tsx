type FigureCardProps = {
  label: string;
  caption: string;
  placeholder?: string;
};

export function FigureCard({ label, caption, placeholder }: FigureCardProps) {
  return (
    <figure className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4">
      <div className="flex min-h-[140px] items-center justify-center rounded-xl border border-slate-200 bg-white text-xs font-semibold uppercase tracking-wide text-slate-500">
        <span>{placeholder ?? "Illustration placeholder"}</span>
      </div>
      <figcaption className="mt-2 text-xs text-slate-600">
        <span className="font-semibold text-slate-700">{label}</span>
        <span className="ml-2">{caption}</span>
      </figcaption>
    </figure>
  );
}
