import { useMemo, useState } from "react";

type SupervisedSignalsDemoProps = {
  lang: "en" | "zh";
};

export function SupervisedSignalsDemo({ lang }: SupervisedSignalsDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：对比分类与回归信号",
          desc: "拖动样本尺寸，查看分类输出（标签）与回归输出（连续值）的区别。",
          reset: "重置",
          size: "样本尺寸（cm）",
          classification: "分类输出",
          regression: "回归输出",
        }
      : {
          goal: "Goal: Compare classification vs. regression",
          desc: "Drag the sample size to see how classification outputs labels while regression outputs continuous values.",
          reset: "Reset",
          size: "Sample size (cm)",
          classification: "Classification output",
          regression: "Regression output",
        };

  const [size, setSize] = useState(7);

  const outputs = useMemo(() => {
    const regression = Math.round((size * 1.2 + 1) * 10) / 10;
    const classification = size >= 7.5 ? (lang === "zh" ? "苹果" : "Apple") : lang === "zh" ? "橙子" : "Orange";
    return { regression, classification };
  }, [lang, size]);

  const reset = () => setSize(7);

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
        <div>
          <label className="block text-sm font-semibold text-slate-700">
            {t.size}
            <input
              type="range"
              min={5}
              max={10}
              step={0.1}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={5}
              aria-valuemax={10}
              aria-valuenow={size}
            />
            <span className="text-xs text-slate-500">{size.toFixed(1)} cm</span>
          </label>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Output label={t.classification} value={outputs.classification} />
          <Output label={t.regression} value={`${outputs.regression}`} />
        </div>
      </div>
    </div>
  );
}

type OutputProps = {
  label: string;
  value: string;
};

function Output({ label, value }: OutputProps) {
  return (
    <div className="rounded-lg bg-white px-3 py-2 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{label}</p>
      <p className="text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}
