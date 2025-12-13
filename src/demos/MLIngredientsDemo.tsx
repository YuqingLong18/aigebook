import { useMemo, useState } from "react";

type MLIngredientsDemoProps = {
  lang: "en" | "zh";
};

export function MLIngredientsDemo({ lang }: MLIngredientsDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：五要素如何共同影响机器学习效果",
          desc: "调整目标清晰度、数据质量/规模与先验知识，估计模型表现与风险。",
          reset: "重置",
          objective: "目标清晰度",
          dataQuality: "数据质量",
          dataScale: "数据规模",
          prior: "先验知识利用",
          performance: "预期表现",
          risk: "风险提示",
          low: "数据或目标不足，模型难以学习。",
          mid: "有一定学习效果，但易受噪声和偏差影响。",
          high: "要素充分，模型更易达到高性能。",
        }
      : {
          goal: "Goal: See how the five elements shape ML performance",
          desc: "Tune objective clarity, data quality/scale, and prior knowledge to estimate performance and risk.",
          reset: "Reset",
          objective: "Objective clarity",
          dataQuality: "Data quality",
          dataScale: "Data scale",
          prior: "Prior knowledge use",
          performance: "Expected performance",
          risk: "Risk note",
          low: "Weak signals make it hard for the model to learn.",
          mid: "Some learning occurs, but noise and bias can dominate.",
          high: "Ingredients are strong; the model can reach high performance.",
        };

  const [objective, setObjective] = useState(70);
  const [dataQuality, setDataQuality] = useState(65);
  const [dataScale, setDataScale] = useState(55);
  const [prior, setPrior] = useState(50);

  const summary = useMemo(() => {
    const weightedScore =
      objective * 0.3 + dataQuality * 0.25 + dataScale * 0.25 + prior * 0.2;
    let riskText = t.mid;
    if (weightedScore < 45) riskText = t.low;
    if (weightedScore > 75) riskText = t.high;
    return { score: Math.round(weightedScore), riskText };
  }, [dataQuality, dataScale, objective, prior, t.high, t.low, t.mid]);

  const reset = () => {
    setObjective(70);
    setDataQuality(65);
    setDataScale(55);
    setPrior(50);
  };

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
          <Slider label={t.objective} value={objective} onChange={setObjective} />
          <Slider label={t.dataQuality} value={dataQuality} onChange={setDataQuality} />
          <Slider label={t.dataScale} value={dataScale} onChange={setDataScale} />
          <Slider label={t.prior} value={prior} onChange={setPrior} />
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3">
          <Metric label={t.performance} value={summary.score} />
          <div className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{t.risk}</p>
            <p className="mt-1 leading-relaxed">{summary.riskText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type SliderProps = {
  label: string;
  value: number;
  onChange: (val: number) => void;
};

function Slider({ label, value, onChange }: SliderProps) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-brand-500"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      />
      <span className="text-xs text-slate-500">{value}</span>
    </label>
  );
}

type MetricProps = {
  label: string;
  value: number;
};

function Metric({ label, value }: MetricProps) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
          style={{ width: `${Math.min(100, value)}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
