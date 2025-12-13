import { useMemo, useState } from "react";

type ModernAIFeaturesDemoProps = {
  lang: "en" | "zh";
};

export function ModernAIFeaturesDemo({ lang }: ModernAIFeaturesDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：现代 AI 的三大特征",
          desc: "调节学习、自主性、数据量，观察模型-程序分离带来的能力变化。",
          reset: "重置",
          learning: "自主学习力度",
          data: "数据规模",
          separation: "模型与程序分离程度",
          capability: "综合智能能力（模拟）",
          note:
            "学习越强、数据越多，模型越能积累知识；模型-程序分离让程序简单、决策由学习到的模型完成。",
        }
      : {
          goal: "Goal: Three traits of modern AI",
          desc: "Adjust learning strength, data scale, and model-program separation to see capability change.",
          reset: "Reset",
          learning: "Autonomous learning",
          data: "Data scale",
          separation: "Model vs. program separation",
          capability: "Overall capability (toy)",
          note:
            "More learning and data grow the model’s knowledge; separating model and program simplifies code while the model drives decisions.",
        };

  const [learning, setLearning] = useState(70);
  const [data, setData] = useState(60);
  const [sep, setSep] = useState(65);

  const capability = useMemo(() => {
    const score = learning * 0.4 + data * 0.35 + sep * 0.25;
    return Math.round(score / 1.5);
  }, [data, learning, sep]);

  const reset = () => {
    setLearning(70);
    setData(60);
    setSep(65);
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
          <Slider label={t.learning} value={learning} onChange={setLearning} />
          <Slider label={t.data} value={data} onChange={setData} />
          <Slider label={t.separation} value={sep} onChange={setSep} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Metric label={t.capability} value={capability} />
          <div className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-800">{t.note}</div>
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

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all"
          style={{ width: `${Math.min(100, value)}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
