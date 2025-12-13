import { useState } from "react";

type Props = {
  lang: "en" | "zh";
};

const milestones = [
  { days: 1, elo: 1500 },
  { days: 3, elo: 2500 },
  { days: 20, elo: 3300 },
  { days: 40, elo: 3700 },
];

export function SelfPlayGrowthDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [days, setDays] = useState(3);

  const estimated = milestones.reduce((prev, curr) => (curr.days <= days ? curr : prev), milestones[0]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "自我博弈成长" : "Self-Play Growth"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "训练天数与水平" : "Training Days vs. Strength"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "调节自博弈天数，估算段位（Elo）。展示 AlphaGo Zero 的快速提升。"
              : "Slide training days to estimate Elo, echoing AlphaGo Zero’s rapid gains."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {isZh ? "端到端自学" : "Self-learning"}
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "训练天数" : "Training days"}</p>
          <input
            type="range"
            min={1}
            max={40}
            step={1}
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value, 10))}
            className="mt-2 w-full accent-indigo-600"
          />
          <p className="mt-2 text-sm font-semibold text-slate-900">{days} {isZh ? "天" : "days"}</p>
          <p className="text-xs text-slate-600">
            {isZh ? "越多自博弈局数，策略越强。" : "More self-play games → stronger policy/value."}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "估计水平" : "Estimated strength"}
          </p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{estimated.elo}</p>
          <p className="text-xs text-slate-600">
            {isZh
              ? "根据 AlphaGo Zero 报道抽象的 Elo 提升趋势。"
              : "Abstracted from AlphaGo Zero’s reported Elo curve."}
          </p>
        </div>
      </div>
    </div>
  );
}
