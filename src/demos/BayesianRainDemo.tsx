import { useMemo, useState } from "react";

type BayesianRainDemoProps = {
  lang: "en" | "zh";
};

export function BayesianRainDemo({ lang }: BayesianRainDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：体验基于先验与观测的雨量概率更新",
          desc: "调整云量与湿度，查看概率模型输出的降雨可能性。",
          reset: "重置",
          cloud: "云量",
          humidity: "湿度",
          probability: "降雨概率",
          note:
            "贝叶斯网络会随着新观测不断更新条件概率，在数据稀缺或存在不确定性时尤为有用。",
        }
      : {
          goal: "Goal: Bayesian update for rain likelihood",
          desc: "Adjust cloud cover and humidity to see the model’s predicted rain probability.",
          reset: "Reset",
          cloud: "Cloud cover",
          humidity: "Humidity",
          probability: "Rain probability",
          note:
            "A Bayesian network updates conditional probabilities with new observations—handy under uncertainty or sparse data.",
        };

  const [cloud, setCloud] = useState(60);
  const [humidity, setHumidity] = useState(70);

  const probability = useMemo(() => {
    const a = 0.05;
    const b = 0.045;
    const c = -4;
    const score = a * cloud + b * humidity + c;
    const prob = 1 / (1 + Math.exp(-score));
    return Math.round(prob * 1000) / 10;
  }, [cloud, humidity]);

  const reset = () => {
    setCloud(60);
    setHumidity(70);
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
          <Slider label={t.cloud} value={cloud} onChange={setCloud} />
          <Slider label={t.humidity} value={humidity} onChange={setHumidity} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.probability}</p>
          <div className="mt-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {probability}%
          </div>
          <div className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
            {t.note}
          </div>
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
