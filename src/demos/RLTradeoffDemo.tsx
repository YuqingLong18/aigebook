import { useState } from "react";

type Props = {
  lang: "en" | "zh";
};

export function RLTradeoffDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [epsilon, setEpsilon] = useState(0.2);

  const explorePercent = Math.round(epsilon * 100);
  const exploitPercent = 100 - explorePercent;

  const note =
    epsilon < 0.15
      ? isZh
        ? "偏重利用，容易陷入次优策略。"
        : "Heavy exploitation risks getting stuck in suboptimal strategies."
      : epsilon > 0.35
        ? isZh
          ? "探索较多，提升潜力大，但短期得分波动。"
          : "More exploration may find better policies, but short-term reward fluctuates."
        : isZh
          ? "探索与利用较平衡，可稳步提升。"
          : "Balanced explore/exploit for steady improvement.";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "强化学习" : "Reinforcement Learning"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "探索 vs. 利用" : "Exploration vs. Exploitation"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "调节 ε，理解在游戏/策略学习中的取舍。"
              : "Adjust ε to see the explore/exploit trade-off in games or control tasks."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          ε-greedy
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "探索概率 ε" : "Explore prob. ε"}</p>
          <input
            type="range"
            min={0}
            max={0.6}
            step={0.05}
            value={epsilon}
            onChange={(e) => setEpsilon(parseFloat(e.target.value))}
            className="mt-2 w-full accent-indigo-600"
          />
          <p className="mt-2 text-sm font-semibold text-slate-900">{epsilon.toFixed(2)}</p>
          <p className="text-xs text-slate-600">
            {isZh ? "ε 越大探索越多。" : "Larger ε → more exploration."}
          </p>
        </div>

        <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-white p-3 shadow-sm">
              <p className="text-xs text-slate-500">{isZh ? "探索" : "Explore"}</p>
              <p className="text-2xl font-semibold text-slate-900">{explorePercent}%</p>
              <p className="text-xs text-slate-600">
                {isZh ? "尝试新动作，可能找到更优策略。" : "Try new actions; may discover better policy."}
              </p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm">
              <p className="text-xs text-slate-500">{isZh ? "利用" : "Exploit"}</p>
              <p className="text-2xl font-semibold text-slate-900">{exploitPercent}%</p>
              <p className="text-xs text-slate-600">
                {isZh ? "使用当前最好动作，得分更稳定。" : "Use best-known actions for stable reward."}
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-700">{note}</p>
        </div>
      </div>
    </div>
  );
}
