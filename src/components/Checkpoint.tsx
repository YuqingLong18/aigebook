import { useState } from "react";

type Option = {
  label: string;
  correct: boolean;
  explanation: string;
};

type CheckpointProps = {
  tagLabel: string;
  prompt: string;
  options: readonly Option[];
  resetLabel: string;
  correctLabel: string;
  incorrectLabel: string;
};

export function Checkpoint({
  tagLabel,
  prompt,
  options,
  resetLabel,
  correctLabel,
  incorrectLabel,
}: CheckpointProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (index: number) => {
    setSelected(index);
    setRevealed(true);
  };

  const reset = () => {
    setSelected(null);
    setRevealed(false);
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">{tagLabel}</p>
          <p className="mt-1 text-base font-medium text-slate-900">{prompt}</p>
        </div>
        <button
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          type="button"
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>
      <div className="mt-3 space-y-2">
        {options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrect = option.correct;
          return (
            <button
              key={option.label}
              type="button"
              className={[
                "w-full rounded-xl border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
                isSelected ? "border-transparent bg-slate-900 text-white" : "border-slate-200 bg-white",
              ].join(" ")}
              onClick={() => handleSelect(index)}
              aria-pressed={isSelected}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{option.label}</span>
                {revealed && isSelected && (
                  <span
                    className={[
                      "rounded-full px-2 py-0.5 text-xs font-bold",
                      isCorrect ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700",
                    ].join(" ")}
                  >
                    {isCorrect ? correctLabel : incorrectLabel}
                  </span>
                )}
              </div>
              {revealed && isSelected && (
                <p className="mt-1 text-sm text-slate-100/90">{option.explanation}</p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
