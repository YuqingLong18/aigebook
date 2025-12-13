import { useMemo, useState } from "react";

type CooperationTrustDemoProps = {
  lang: "en" | "zh";
};

export function CooperationTrustDemo({ lang }: CooperationTrustDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：合作、信任与智力跃迁",
          desc: "调节合作密度与信任/同理心，查看知识累积速度（拟合“棘轮效应”）。",
          reset: "重置",
          cooperation: "合作密度",
          trust: "信任/同理心",
          accumulation: "知识累积速度（模拟）",
          note:
            "高信任促使分享与传承，合作密度越高，知识越快累积，推动文明跨代跃升。",
        }
      : {
          goal: "Goal: Cooperation, trust, and intelligence leap",
          desc: "Adjust cooperation density and trust/empathy to see knowledge accumulation (ratchet effect).",
          reset: "Reset",
          cooperation: "Cooperation density",
          trust: "Trust/empathy",
          accumulation: "Knowledge accumulation speed (toy)",
          note:
            "High trust fuels sharing and teaching; dense cooperation accelerates accumulation, driving civilizational leaps.",
        };

  const [coop, setCoop] = useState(60);
  const [trust, setTrust] = useState(70);

  const accumulation = useMemo(() => {
    const base = coop * 0.6 + trust * 0.8;
    return Math.min(100, Math.round(base / 1.2));
  }, [coop, trust]);

  const reset = () => {
    setCoop(60);
    setTrust(70);
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
          <Slider label={t.cooperation} value={coop} onChange={setCoop} />
          <Slider label={t.trust} value={trust} onChange={setTrust} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.accumulation}</p>
          <div className="mt-1 h-2 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
              style={{ width: `${accumulation}%` }}
              aria-hidden
            />
          </div>
          <p className="mt-2 text-xs text-emerald-800">{t.note}</p>
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
