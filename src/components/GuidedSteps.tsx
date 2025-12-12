type GuidedStepsProps = {
  title?: string;
  steps: string[];
};

export function GuidedSteps({ title = "Guided Steps", steps }: GuidedStepsProps) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <ol className="mt-2 space-y-1 text-sm text-slate-700">
        {steps.map((step, idx) => (
          <li key={step} className="flex gap-2">
            <span className="mt-0.5 h-6 w-6 rounded-full bg-brand-100 text-center text-xs font-bold text-brand-600">
              {idx + 1}
            </span>
            <span className="flex-1 leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
