import { useMemo, useState } from "react";

type DataComputeTriadDemoProps = {
  lang: "en" | "zh";
};

export function DataComputeTriadDemo({ lang }: DataComputeTriadDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：数据、算力、算法三要素协同",
          desc: "调节数据量、算力、模型创新度，查看能力提升。",
          reset: "重置",
          data: "数据量",
          compute: "算力",
          model: "模型/算法创新",
          capability: "综合能力（模拟）",
          note:
            "数据、算力、算法需共同提升。缺一会成为瓶颈，正如 1990s 之后的 AI 复兴与大模型兴起。",
        }
      : {
          goal: "Goal: Synergy of data, compute, and models",
          desc: "Adjust data, compute, and algorithm innovation to see capability gains.",
          reset: "Reset",
          data: "Data scale",
          compute: "Compute",
          model: "Model/algorithm innovation",
          capability: "Overall capability (toy)",
          note:
            "All three must rise together; any weak link bottlenecks progress—mirroring the post-1990s revival and large-model surge.",
        };

  const [data, setData] = useState(70);
  const [compute, setCompute] = useState(60);
  const [model, setModel] = useState(65);

  const capability = useMemo(() => {
    const geo = Math.cbrt(data * compute * model);
    return Math.round(Math.min(100, geo));
  }, [compute, data, model]);

  const reset = () => {
    setData(70);
    setCompute(60);
    setModel(65);
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
          <Slider label={t.data} value={data} onChange={setData} />
          <Slider label={t.compute} value={compute} onChange={setCompute} />
          <Slider label={t.model} value={model} onChange={setModel} />
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Metric label={t.capability} value={capability} />
          <div className="rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-800">{t.note}</div>
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
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
          style={{ width: `${Math.min(100, value)}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
