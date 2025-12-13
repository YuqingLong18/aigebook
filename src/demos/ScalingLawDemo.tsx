import { useMemo, useState } from "react";

type ScalingLawDemoProps = {
  lang: "en" | "zh";
};

export function ScalingLawDemo({ lang }: ScalingLawDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：理解扩展定律",
          desc: "调整模型规模、数据量、计算预算，观察性能提升与能耗压力。",
          reset: "重置",
          params: "模型参数量（亿）",
          data: "数据量（GB）",
          compute: "计算预算（PF-days）",
          performance: "预期性能",
          cost: "资源压力",
          note:
            "性能随规模、数据、计算增长而提升，但资源消耗也快速上升。扩展定律意味着更强模型需要更多投入。",
        }
      : {
          goal: "Goal: Intuit scaling laws",
          desc: "Tune model size, data, and compute to see performance gains and resource strain.",
          reset: "Reset",
          params: "Model params (hundreds of millions)",
          data: "Data size (GB)",
          compute: "Compute budget (PF-days)",
          performance: "Expected performance",
          cost: "Resource pressure",
          note:
            "Performance rises with scale/data/compute, but resource cost grows quickly. Scaling laws mean better models demand greater investment.",
        };

  const [params, setParams] = useState(50);
  const [data, setData] = useState(200);
  const [compute, setCompute] = useState(30);

  const metrics = useMemo(() => {
    const perf = Math.min(100, Math.round((params * 0.4 + data * 0.2 + compute * 0.6) / 3));
    const pressure = Math.min(100, Math.round((params * 0.5 + compute * 0.7) / 2));
    return { perf, pressure };
  }, [compute, data, params]);

  const reset = () => {
    setParams(50);
    setData(200);
    setCompute(30);
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
          <Slider label={t.params} value={params} onChange={setParams} min={10} max={300} />
          <Slider label={t.data} value={data} onChange={setData} min={50} max={1000} />
          <Slider label={t.compute} value={compute} onChange={setCompute} min={5} max={120} />
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Metric label={t.performance} value={metrics.perf} />
          <Metric label={t.cost} value={metrics.pressure} tone="amber" />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
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
};

function Slider({ label, value, onChange, min, max }: SliderProps) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-brand-500"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />
      <span className="text-xs text-slate-500">{value}</span>
    </label>
  );
}

function Metric({ label, value, tone = "emerald" }: { label: string; value: number; tone?: "emerald" | "amber" }) {
  const color = tone === "emerald" ? "from-emerald-400 to-sky-500" : "from-amber-400 to-orange-600";
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all`}
          style={{ width: `${value}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
