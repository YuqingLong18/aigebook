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
  submitLabel?: string;
  checkpointId?: string;
  onStatusChange?: (id: string, status: "idle" | "correct" | "incorrect") => void;
  progress?: {
    current: number;
    total: number;
    label: string;
  };
  helperText?: {
    selectPrompt: string;
    readyPrompt: string;
  };
};

export function Checkpoint({
  tagLabel,
  prompt,
  options,
  resetLabel,
  correctLabel,
  incorrectLabel,
  submitLabel = "Submit",
  checkpointId,
  onStatusChange,
  progress,
  helperText = {
    selectPrompt: "Select an option",
    readyPrompt: "Ready to submit",
  },
}: CheckpointProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");

  const updateStatus = (next: "idle" | "correct" | "incorrect") => {
    setStatus((prev) => {
      if (prev === next) return prev;
      if (checkpointId && onStatusChange) {
        onStatusChange(checkpointId, next);
      }
      return next;
    });
  };

  const handleSelect = (index: number) => {
    setSelected(index);
    if (submitted) {
      setSubmitted(false);
    }
    if (status !== "idle") {
      updateStatus("idle");
    }
  };

  const submit = () => {
    if (selected === null) return;
    const nextStatus = options[selected].correct ? "correct" : "incorrect";
    setSubmitted(true);
    updateStatus(nextStatus);
  };

  const reset = () => {
    setSelected(null);
    setSubmitted(false);
    updateStatus("idle");
  };

  const showFeedback = submitted && selected !== null;
  const selectedIsCorrect = selected !== null && options[selected].correct;
  const shouldShowProgress = progress && progress.total > 0 && status === "correct";
  const progressRatio =
    progress && progress.total > 0 ? Math.min(progress.current / progress.total, 1) * 100 : 0;

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
                {showFeedback && isSelected && (
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
              {showFeedback && isSelected && (
                <p className="mt-1 text-sm text-slate-100/90">{option.explanation}</p>
              )}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={submit}
          disabled={selected === null}
          className={[
            "rounded-lg border px-3 py-1.5 text-xs font-semibold transition",
            selected === null
              ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"
              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900",
          ].join(" ")}
        >
          {submitLabel}
        </button>
        <div className="text-xs font-medium text-slate-600">
          {selected === null
            ? helperText.selectPrompt
            : submitted
              ? selectedIsCorrect
                ? correctLabel
                : incorrectLabel
              : helperText.readyPrompt}
        </div>
      </div>
      {shouldShowProgress && progress && (
        <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span>{progress.label}</span>
            <span>
              {progress.current} / {progress.total}
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
            <div
              className="h-full rounded-full bg-brand-500 transition-[width]"
              style={{ width: `${progressRatio}%` }}
              aria-hidden
            />
          </div>
        </div>
      )}
    </div>
  );
}
