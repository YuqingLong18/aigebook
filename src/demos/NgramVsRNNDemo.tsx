import { useMemo, useState } from "react";

type NgramVsRNNDemoProps = {
  lang: "en" | "zh";
};

const context = ["I", "am", "in", "a", "very"];
const candidates = ["good", "bad", "sun", "pink"];

export function NgramVsRNNDemo({ lang }: NgramVsRNNDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：对比 N-gram 与 RNN 的长上下文建模",
          desc: "切换模型查看对下一个词的概率分布。",
          reset: "重置",
          model: "模型",
          ngram: "N-gram(短上下文)",
          rnn: "RNN(长上下文)",
          probs: "概率分布",
          note:
            "N-gram只看有限前文，长距离语义会遗失；RNN 累积历史，能更合理分配概率。",
        }
      : {
          goal: "Goal: Compare N-gram vs. RNN for next-word prediction",
          desc: "Toggle the model to see different probability distributions.",
          reset: "Reset",
          model: "Model",
          ngram: "N-gram (short context)",
          rnn: "RNN (long context)",
          probs: "Probability",
          note:
            "N-grams see limited history; long dependencies vanish. An RNN aggregates history, giving more realistic probabilities.",
        };

  const [mode, setMode] = useState<"ngram" | "rnn">("ngram");

  const probs = useMemo(() => {
    return mode === "ngram" ? [0.35, 0.2, 0.03, 0.02] : [0.48, 0.4, 0.02, 0.01];
  }, [mode]);

  const reset = () => setMode("ngram");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{t.goal}</p>
          <p className="text-xs text-slate-600">{t.desc}</p>
        </div>
        <button
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          type="button"
          onClick={reset}
          aria-label={t.reset}
        >
          {t.reset}
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.model}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMode("ngram")}
              className={[
                "flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition",
                mode === "ngram"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {t.ngram}
            </button>
            <button
              type="button"
              onClick={() => setMode("rnn")}
              className={[
                "flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition",
                mode === "rnn"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {t.rnn}
            </button>
          </div>
          <p className="text-sm text-slate-700">
            {context.join(" ")} ...
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.probs}</p>
          <div className="mt-2 space-y-2">
            {candidates.map((word, idx) => (
              <div key={word}>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>{word}</span>
                  <span className="text-slate-900">{Math.round(probs[idx] * 100)}%</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-600 transition-all"
                    style={{ width: `${probs[idx] * 100}%` }}
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
      </div>
    </div>
  );
}
