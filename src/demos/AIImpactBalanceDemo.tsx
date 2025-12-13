import { useMemo, useState } from "react";

type AIImpactBalanceDemoProps = {
  lang: "en" | "zh";
};

export function AIImpactBalanceDemo({ lang }: AIImpactBalanceDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：思考 AI 的正负影响",
          desc: "调节应用范围与治理力度，查看潜在收益与风险。",
          reset: "重置",
          scope: "应用范围",
          governance: "治理力度",
          benefit: "潜在收益",
          risk: "潜在风险",
          note:
            "应用越广，收益越大，但治理不足会放大隐私泄露、误导信息、失业等风险；完善治理有助于放大利益、降低风险。",
        }
      : {
          goal: "Goal: Weigh AI benefits and risks",
          desc: "Tune scope and governance to see potential upsides and downsides.",
          reset: "Reset",
          scope: "Application scope",
          governance: "Governance strength",
          benefit: "Potential benefit",
          risk: "Potential risk",
          note:
            "Broader use boosts gains, but weak governance amplifies privacy, misinformation, and job risks; strong governance raises benefits and lowers risks.",
        };

  const [scope, setScope] = useState(60);
  const [gov, setGov] = useState(50);

  const metrics = useMemo(() => {
    const benefit = Math.round(scope * 0.8 + gov * 0.4);
    const risk = Math.max(0, Math.round(scope * 0.6 - gov * 0.8 + 40));
    return { benefit: Math.min(100, benefit), risk: Math.min(100, risk) };
  }, [gov, scope]);

  const reset = () => {
    setScope(60);
    setGov(50);
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
          <Slider label={t.scope} value={scope} onChange={setScope} />
          <Slider label={t.governance} value={gov} onChange={setGov} />
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
