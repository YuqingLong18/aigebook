import { useMemo, useState } from "react";

type ProductionRuleDemoProps = {
  lang: "en" | "zh";
};

export function ProductionRuleDemo({ lang }: ProductionRuleDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：体验基于经验的产生式推理链",
          desc: "勾选条件，观察规则链如何触发，并得到最终结论。",
          reset: "重置",
          conditions: "条件输入",
          chain: "推理链",
          outcome: "结论",
          none: "尚未触发规则",
        }
      : {
          goal: "Goal: Experience production-rule chaining",
          desc: "Toggle observations to see which rules fire and what conclusion the system reaches.",
          reset: "Reset",
          conditions: "Conditions",
          chain: "Inference chain",
          outcome: "Conclusion",
          none: "No rule triggered yet",
        };

  const [cloudy, setCloudy] = useState(true);
  const [humid, setHumid] = useState(true);
  const [river, setRiver] = useState(false);

  const chain = useMemo(() => {
    const steps: string[] = [];
    if (cloudy && humid) {
      steps.push(
        lang === "zh" ? "若多云且湿度高，则会下雨。" : "If it is cloudy and humid, it will rain.",
      );
      if (river) {
        steps.push(
          lang === "zh" ? "若下雨且靠近河流，则河水会上涨。" : "If it rains near the river, water may rise.",
        );
        steps.push(
          lang === "zh"
            ? "若河水上涨，则可能淹没房屋。"
            : "If the river rises, nearby houses may flood.",
        );
      }
    }
    return steps;
  }, [cloudy, humid, river, lang]);

  const outcome =
    chain.length === 0
      ? t.none
      : river
        ? lang === "zh"
          ? "结论：房屋可能被淹，需要预警。"
          : "Conclusion: Houses may flood—issue an alert."
        : lang === "zh"
          ? "结论：可能下雨，需携带雨具。"
          : "Conclusion: Rain likely—carry an umbrella.";

  const reset = () => {
    setCloudy(true);
    setHumid(true);
    setRiver(false);
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
        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {t.conditions}
          </p>
          <ConditionToggle label={lang === "zh" ? "天空多云" : "Cloudy"} value={cloudy} onChange={setCloudy} />
          <ConditionToggle
            label={lang === "zh" ? "湿度高" : "High humidity"}
            value={humid}
            onChange={setHumid}
          />
          <ConditionToggle
            label={lang === "zh" ? "靠近河流" : "Near river"}
            value={river}
            onChange={setRiver}
          />
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.chain}</p>
          {chain.length === 0 && <p className="text-xs text-slate-500">{t.none}</p>}
          {chain.map((step) => (
            <div key={step} className="rounded-lg bg-white px-3 py-2 shadow-sm">
              {step}
            </div>
          ))}
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.outcome}</p>
          <div className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800">
            {outcome}
          </div>
        </div>
      </div>
    </div>
  );
}

type ConditionToggleProps = {
  label: string;
  value: boolean;
  onChange: (val: boolean) => void;
};

function ConditionToggle({ label, value, onChange }: ConditionToggleProps) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm">
      <span className="text-sm font-semibold">{label}</span>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-brand-500"
      />
    </label>
  );
}
