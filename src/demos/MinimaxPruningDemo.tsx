import { useMemo, useState } from "react";

type MinimaxPruningDemoProps = {
  lang: "en" | "zh";
};

export function MinimaxPruningDemo({ lang }: MinimaxPruningDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：比较极小化极大与 α-β 剪枝的效率",
          desc: "切换是否使用剪枝，观察访问的叶子节点数量与推荐落子。",
          reset: "重置",
          toggle: "使用 α-β 剪枝",
          visited: "访问叶子",
          best: "推荐走法",
          value: "局面估值",
          note:
            "剪枝不改变最优决策，但能减少无意义的搜索。节点访问量越少，搜索越快，特别适合棋类对弈等深度博弈。",
        }
      : {
          goal: "Goal: Minimax vs. alpha-beta pruning",
          desc: "Toggle pruning to see how many leaves are visited and which move is recommended.",
          reset: "Reset",
          toggle: "Use alpha-beta pruning",
          visited: "Visited leaves",
          best: "Best move",
          value: "Estimated value",
          note:
            "Pruning keeps the same optimal move while skipping branches that cannot change the result. Fewer node visits mean faster search in games.",
        };

  const [usePruning, setUsePruning] = useState(true);

  const summary = useMemo(() => {
    const leaves = usePruning ? 7 : 11;
    const bestMove = "Left branch";
    const value = usePruning ? 6 : 6;
    const visitedOrder = usePruning
      ? ["L1", "L2", "L3", "R1", "R2 (pruned)", "R3 (pruned)", "R4 (pruned)"]
      : ["L1", "L2", "L3", "R1", "R2", "R3", "R4", "L4", "L5", "L6", "L7"];
    return { leaves, bestMove, value, visitedOrder };
  }, [usePruning]);

  const reset = () => setUsePruning(true);

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
          <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-800">
            <input
              type="checkbox"
              checked={usePruning}
              onChange={(e) => setUsePruning(e.target.checked)}
              className="h-4 w-4 accent-brand-500"
            />
            {t.toggle}
          </label>

          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
            <p>
              {t.visited}: <span className="font-semibold text-slate-900">{summary.leaves}</span>
            </p>
            <p>
              {t.best}: <span className="font-semibold text-slate-900">{summary.bestMove}</span>
            </p>
            <p>
              {t.value}: <span className="font-semibold text-slate-900">{summary.value}</span>
            </p>
          </div>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs text-slate-700">
          {summary.visitedOrder.map((node) => (
            <div
              key={node}
              className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm"
            >
              <span className="text-sm font-semibold text-slate-900">{node}</span>
              <span
                className={[
                  "rounded-full px-2 py-0.5 text-[10px] font-bold",
                  node.includes("pruned")
                    ? "bg-amber-100 text-amber-700"
                    : "bg-emerald-100 text-emerald-700",
                ].join(" ")}
              >
                {node.includes("pruned") ? "cut" : "eval"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
      </div>
    </div>
  );
}
