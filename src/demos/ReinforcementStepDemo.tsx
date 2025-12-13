import { useMemo, useState } from "react";

type ReinforcementStepDemoProps = {
  lang: "en" | "zh";
};

type State = {
  id: number;
  reward: number;
};

const states: State[] = [
  { id: 1, reward: 0 },
  { id: 2, reward: 0 },
  { id: 3, reward: 1 },
  { id: 4, reward: -1 },
  { id: 5, reward: 5 },
];

export function ReinforcementStepDemo({ lang }: ReinforcementStepDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：感受探索-利用平衡",
          desc: "调整探索率，观察 5 步任务的期望回报。",
          reset: "重置",
          exploration: "探索率",
          expected: "期望回报",
          note:
            "探索高 → 尝试更多新路径；利用高 → 更常走已知高回报路径。强化学习需在两者间折中。",
        }
      : {
          goal: "Goal: Explore vs. exploit trade-off",
          desc: "Adjust exploration rate to see expected reward on a 5-step task.",
          reset: "Reset",
          exploration: "Exploration rate",
          expected: "Expected return",
          note:
            "High exploration tries new paths; high exploitation sticks to the best-known path. RL balances both.",
        };

  const [explore, setExplore] = useState(0.3);

  const expectedReturn = useMemo(() => {
    const bestPathReward = states[2].reward + states[4].reward; // 1 + 5
    const riskyPathReward = states[3].reward + states[4].reward; // -1 + 5
    const mix = explore * riskyPathReward + (1 - explore) * bestPathReward;
    return Math.round(mix * 100) / 100;
  }, [explore]);

  const reset = () => setExplore(0.3);

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
          <label className="block text-sm font-semibold text-slate-700">
            {t.exploration}
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={explore}
              onChange={(e) => setExplore(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={1}
              aria-valuenow={explore}
            />
            <span className="text-xs text-slate-500">{explore.toFixed(2)}</span>
          </label>
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
            {t.expected}: <span className="font-semibold text-slate-900">{expectedReturn}</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {lang === "zh" ? "5 步路径示意" : "5-step path"}
          </p>
          <div className="mt-2 flex items-center gap-2">
            {states.map((s) => (
              <div
                key={s.id}
                className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-white text-xs shadow-sm"
              >
                <span className="font-semibold text-slate-900">S{s.id}</span>
                <span className={s.reward >= 0 ? "text-emerald-600" : "text-rose-600"}>
                  r={s.reward}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
            {t.note}
          </div>
        </div>
      </div>
    </div>
  );
}
