import { useMemo, useState } from "react";

type DeepfakeRiskDemoProps = {
  lang: "en" | "zh";
};

export function DeepfakeRiskDemo({ lang }: DeepfakeRiskDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：深度伪造的风险与防护",
          desc: "调节伪造能力与监管/检测力度，查看风险水平。",
          reset: "重置",
          forge: "伪造技术强度",
          defense: "监管/检测力度",
          risk: "社会风险（模拟）",
          note:
            "伪造越强、监管检测越弱，风险越高。法规与检测技术是关键防线。",
        }
      : {
          goal: "Goal: Deepfake risk vs. defense",
          desc: "Adjust forgery strength and regulation/detection to see risk level.",
          reset: "Reset",
          forge: "Forgery strength",
          defense: "Regulation/detection strength",
          risk: "Societal risk (toy)",
          note:
            "Stronger forgery with weak defenses raises risk; laws and detection tools are key safeguards.",
        };

  const [forge, setForge] = useState(70);
  const [defense, setDefense] = useState(40);

  const risk = useMemo(
    () => Math.min(100, Math.max(0, Math.round(forge * 0.9 - defense * 0.8 + 30))),
    [defense, forge],
  );

  const reset = () => {
    setForge(70);
    setDefense(40);
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
          <Slider label={t.forge} value={forge} onChange={setForge} />
          <Slider label={t.defense} value={defense} onChange={setDefense} />
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
          <p className="mt-2 text-xs text-amber-800">{t.note}</p>
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
