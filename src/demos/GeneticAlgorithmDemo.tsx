import { useMemo, useState } from "react";

type GeneticAlgorithmDemoProps = {
  lang: "en" | "zh";
};

export function GeneticAlgorithmDemo({ lang }: GeneticAlgorithmDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：模拟遗传算法的迭代优化",
          desc: "选择种群规模与变异率，查看若干代后的最优适应度。",
          reset: "重置",
          pop: "种群规模",
          mutation: "变异率",
          fitness: "最佳适应度（越大越好）",
          note:
            "较大的种群和适度的变异能覆盖更多搜索空间，但计算开销增加。遗传算法可用于无明确模型的复杂优化。",
        }
      : {
          goal: "Goal: GA-style iterative optimization",
          desc: "Set population size and mutation rate to see best fitness after several generations.",
          reset: "Reset",
          pop: "Population size",
          mutation: "Mutation rate",
          fitness: "Best fitness (higher is better)",
          note:
            "Larger populations and moderate mutation explore more space but cost more compute. Genetic algorithms work even when no explicit model exists.",
        };

  const [pop, setPop] = useState(12);
  const [mutation, setMutation] = useState(0.1);

  const fitness = useMemo(() => {
    const base = 6 + Math.log(pop + 1) * 2;
    const diversity = mutation * 10;
    const penalty = mutation > 0.3 ? (mutation - 0.3) * 15 : 0;
    const fit = Math.max(0, base + diversity - penalty);
    return Math.round(fit * 10) / 10;
  }, [mutation, pop]);

  const reset = () => {
    setPop(12);
    setMutation(0.1);
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
          <Slider label={t.pop} value={pop} onChange={setPop} min={4} max={30} step={1} />
          <Slider label={t.mutation} value={mutation} onChange={setMutation} min={0} max={0.5} step={0.02} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.fitness}</p>
          <div className="mt-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {fitness}
          </div>
          <div className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
            {t.note}
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
  min: number;
  max: number;
  step: number;
};

function Slider({ label, value, onChange, min, max, step }: SliderProps) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-brand-500"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />
      <span className="text-xs text-slate-500">{typeof value === "number" ? value.toFixed(2) : value}</span>
    </label>
  );
}
