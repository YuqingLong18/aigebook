import { useMemo, useState } from "react";

type ControlRiskDemoProps = {
  lang: "en" | "zh";
};

export function ControlRiskDemo({ lang }: ControlRiskDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：AI 失控风险示意",
          desc: "调节自主性与可解释性，查看失控风险与安全提示。",
          reset: "重置",
          autonomy: "自主性",
          interpret: "可解释性",
          risk: "失控风险",
          note:
            "自主性高且难解释时，风险升高；提升可解释性、约束目标与数据安全是关键缓解措施。",
        }
      : {
          goal: "Goal: Intuition for AI loss-of-control risk",
          desc: "Adjust autonomy and interpretability to view risk and mitigation hint.",
          reset: "Reset",
          autonomy: "Autonomy",
          interpret: "Interpretability",
          risk: "Loss-of-control risk",
          note:
            "High autonomy with low interpretability raises risk; improving explainability, goal constraints, and data hygiene helps.",
        };

  const [autonomy, setAutonomy] = useState(70);
  const [interpret, setInterpret] = useState(40);

  const risk = useMemo(
    () => Math.min(100, Math.max(0, Math.round(autonomy * 0.9 - interpret * 0.7 + 20))),
    [autonomy, interpret],
  );

  const reset = () => {
    setAutonomy(70);
    setInterpret(40);
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
          <Slider label={t.autonomy} value={autonomy} onChange={setAutonomy} />
          <Slider label={t.interpret} value={interpret} onChange={setInterpret} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.risk}</p>
          <div className="mt-1 h-2 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-400 to-orange-500 transition-all"
              style={{ width: `${risk}%` }}
              aria-hidden
            />
          </div>
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
