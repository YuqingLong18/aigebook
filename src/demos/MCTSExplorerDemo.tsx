import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type MoveStats = {
  id: string;
  label: string;
  visits: number;
  wins: number;
};

export function MCTSExplorerDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [moves, setMoves] = useState<MoveStats[]>([
    { id: "a", label: "Move A", visits: 10, wins: 6 },
    { id: "b", label: "Move B", visits: 8, wins: 5 },
    { id: "c", label: "Move C", visits: 6, wins: 2 },
  ]);

  const simulate = () => {
    setMoves((prev) =>
      prev.map((m) => {
        const win = Math.random() < 0.55; // biased to produce some wins
        return { ...m, visits: m.visits + 1, wins: m.wins + (win ? 1 : 0) };
      }),
    );
  };

  const best = useMemo(
    () =>
      moves.reduce((a, b) => {
        const ucbA = a.wins / a.visits;
        const ucbB = b.wins / b.visits;
        return ucbB > ucbA ? b : a;
      }),
    [moves],
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">MCTS</p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "蒙特卡洛树搜索：模拟与选择" : "Monte Carlo Tree Search: Simulate & Select"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "点击模拟，更新各分支的访问/胜率。最高胜率分支即为当前最佳。"
              : "Simulate to update visits/win rates for branches; highest win rate is the current best."}
          </p>
        </div>
        <button
          type="button"
          onClick={simulate}
          className="rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          {isZh ? "运行一次模拟" : "Run simulation"}
        </button>
      </div>

      <div className="mt-4 grid gap-2 md:grid-cols-3">
        {moves.map((m) => {
          const rate = m.wins / m.visits;
          const isBest = m.id === best.id;
          return (
            <div
              key={m.id}
              className={[
                "rounded-xl border p-3 text-sm transition",
                isBest ? "border-emerald-500 bg-emerald-50 shadow-sm" : "border-slate-200 bg-slate-50",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">{m.label}</span>
                <span className="text-xs text-slate-600">
                  {isZh ? "胜率" : "Win rate"} {(rate * 100).toFixed(1)}%
                </span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white">
                <div
                  className="h-2 rounded-full bg-emerald-500"
                  style={{ width: `${Math.min(100, rate * 100)}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-600">
                {isZh ? "访问" : "Visits"} {m.visits} · {isZh ? "获胜" : "Wins"} {m.wins}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-slate-600">
        {isZh
          ? "MCTS 反复执行 选择-扩展-模拟-回传，通过统计胜率选择高质量分支。"
          : "MCTS repeats select-expand-simulate-backprop; statistics guide selection of promising branches."}
      </p>
    </div>
  );
}
