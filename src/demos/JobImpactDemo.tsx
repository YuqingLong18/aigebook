import { useMemo, useState } from "react";

type JobImpactDemoProps = {
  lang: "en" | "zh";
};

export function JobImpactDemo({ lang }: JobImpactDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：AI 对就业的替代与创造",
          desc: "调节自动化水平与再培训投入，查看替代风险与新机会。",
          reset: "重置",
          automation: "自动化水平",
          reskill: "再培训投入",
          displacement: "替代风险",
          creation: "新机会潜力",
          note:
            "自动化越高替代风险越大；再培训与政策可提升新岗位机会，缓解冲击。",
        }
      : {
          goal: "Goal: AI-driven displacement vs. new jobs",
          desc: "Adjust automation level and reskilling to see displacement risk and opportunity creation.",
          reset: "Reset",
          automation: "Automation level",
          reskill: "Reskilling investment",
          displacement: "Displacement risk",
          creation: "New opportunity potential",
          note:
            "Higher automation raises risk; reskilling/policy can grow new roles and soften the impact.",
        };

  const [automation, setAutomation] = useState(70);
  const [reskill, setReskill] = useState(40);

  const metrics = useMemo(() => {
    const displacement = Math.min(100, Math.round(automation * 0.9 - reskill * 0.4 + 20));
    const creation = Math.min(100, Math.max(0, Math.round(reskill * 0.9 + automation * 0.3)));
    return { displacement, creation };
  }, [automation, reskill]);

  const reset = () => {
    setAutomation(70);
    setReskill(40);
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
          <Slider label={t.automation} value={automation} onChange={setAutomation} />
          <Slider label={t.reskill} value={reskill} onChange={setReskill} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Metric label={t.displacement} value={metrics.displacement} tone="rose" />
          <Metric label={t.creation} value={metrics.creation} tone="emerald" />
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

function Metric({ label, value, tone }: { label: string; value: number; tone: "rose" | "emerald" }) {
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
