import { useMemo, useState } from "react";

type AIDependenceDemoProps = {
  lang: "en" | "zh";
};

export function AIDependenceDemo({ lang }: AIDependenceDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：AI 依赖与监督平衡",
          desc: "调节依赖度与人工监督，查看能力提升与风险。",
          reset: "重置",
          reliance: "依赖度",
          oversight: "人工监督",
          benefit: "效率收益（模拟）",
          risk: "误导风险",
          note:
            "依赖越高，监督不足则风险放大；适度监督能兼顾效率与质量。",
        }
      : {
          goal: "Goal: Balance AI reliance and oversight",
          desc: "Adjust reliance and human oversight to see efficiency gain vs. risk.",
          reset: "Reset",
          reliance: "Reliance level",
          oversight: "Human oversight",
          benefit: "Efficiency gain (toy)",
          risk: "Misinformation risk",
          note:
            "High reliance with low oversight raises risk; measured oversight keeps quality while using AI’s speed.",
        };

  const [reliance, setReliance] = useState(60);
  const [oversight, setOversight] = useState(40);

  const metrics = useMemo(() => {
    const benefit = Math.min(100, Math.round(reliance * 0.9));
    const risk = Math.min(100, Math.max(0, Math.round(reliance * 0.8 - oversight * 0.7)));
    return { benefit, risk };
  }, [oversight, reliance]);

  const reset = () => {
    setReliance(60);
    setOversight(40);
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
          <Slider label={t.reliance} value={reliance} onChange={setReliance} />
          <Slider label={t.oversight} value={oversight} onChange={setOversight} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Metric label={t.benefit} value={metrics.benefit} tone="emerald" />
          <Metric label={t.risk} value={metrics.risk} tone="rose" />
          <div className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">{t.note}</div>
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

function Metric({ label, value, tone }: { label: string; value: number; tone: "emerald" | "rose" }) {
  const color = tone === "emerald" ? "from-emerald-400 to-sky-500" : "from-rose-400 to-orange-500";
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all`}
          style={{ width: `${Math.min(100, value)}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
