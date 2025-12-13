import { useMemo, useState } from "react";

type ExpertSystemCostDemoProps = {
  lang: "en" | "zh";
};

export function ExpertSystemCostDemo({ lang }: ExpertSystemCostDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：专家系统的知识库维护成本",
          desc: "调节知识规模与更新频率，估算维护成本与冲突风险。",
          reset: "重置",
          size: "知识规模",
          change: "更新频率",
          cost: "维护成本（模拟）",
          conflict: "冲突风险",
          note:
            "知识越多、更新越频繁，获取与协调代价越高，也是第五代计划等失败的重要原因。",
        }
      : {
          goal: "Goal: Maintenance burden of expert systems",
          desc: "Adjust knowledge size and update rate to estimate upkeep cost and conflict risk.",
          reset: "Reset",
          size: "Knowledge base size",
          change: "Update frequency",
          cost: "Upkeep cost (toy)",
          conflict: "Conflict risk",
          note:
            "Larger, fast-changing knowledge raises acquisition and reconciliation costs—a key weakness behind expert system and Fifth Generation struggles.",
        };

  const [size, setSize] = useState(60);
  const [change, setChange] = useState(50);

  const metrics = useMemo(() => {
    const cost = Math.min(100, Math.round(size * 0.7 + change * 0.8));
    const conflict = Math.min(100, Math.round(size * 0.4 + change * 0.9));
    return { cost, conflict };
  }, [change, size]);

  const reset = () => {
    setSize(60);
    setChange(50);
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
          <Slider label={t.size} value={size} onChange={setSize} />
          <Slider label={t.change} value={change} onChange={setChange} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Metric label={t.cost} value={metrics.cost} tone="rose" />
          <Metric label={t.conflict} value={metrics.conflict} tone="amber" />
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

function Metric({ label, value, tone }: { label: string; value: number; tone: "rose" | "amber" }) {
  const color = tone === "rose" ? "from-rose-400 to-orange-500" : "from-amber-400 to-lime-500";
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
