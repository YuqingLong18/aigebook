import { useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Move = {
  id: string;
  label: string;
  policy: number;
  value: number;
};

const initialMoves: Move[] = [
  { id: "m1", label: "Move A", policy: 0.45, value: 0.55 },
  { id: "m2", label: "Move B", policy: 0.25, value: 0.65 },
  { id: "m3", label: "Move C", policy: 0.30, value: 0.35 },
];

export function PolicyValueFusionDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [policyWeight, setPolicyWeight] = useState(0.5);
  const reset = () => setPolicyWeight(0.5);

  const scored = initialMoves
    .map((m) => ({
      ...m,
      score: m.policy * policyWeight + m.value * (1 - policyWeight),
    }))
    .sort((a, b) => b.score - a.score);

  const top = scored[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "策略网 + 价值网" : "Policy + Value"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "融合指导 MCTS" : "Fusion guiding MCTS"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "调整策略/价值权重，观察最优落子如何变化。"
              : "Adjust policy vs. value weight to see how best move changes."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">AlphaGo</span>
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          >
            {isZh ? "重置" : "Reset"}
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">
            {isZh ? "策略权重" : "Policy weight"}
          </p>
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>{isZh ? "更信任策略" : "Trust policy"}</span>
            <span className="font-semibold text-slate-900">{Math.round(policyWeight * 100)}%</span>
            <span>{isZh ? "更信任价值" : "Trust value"}</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={policyWeight}
            onChange={(e) => setPolicyWeight(parseFloat(e.target.value))}
            className="mt-2 w-full accent-indigo-600"
          />
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? "策略网提供先验概率，价值网给出局面胜率估计。"
              : "Policy gives priors; value gives win-rate estimates."}
          </p>
        </div>

        <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "候选评分" : "Candidate scores"}
          </p>
          <div className="mt-2 space-y-2">
            {scored.map((m) => (
              <div
                key={m.id}
                className={[
                  "flex items-center justify-between rounded-lg border px-3 py-2 text-sm",
                  m.id === top.id ? "border-emerald-500 bg-white shadow-sm" : "border-slate-200 bg-white",
                ].join(" ")}
              >
                <div>
                  <p className="font-semibold text-slate-900">{m.label}</p>
                  <p className="text-xs text-slate-600">
                    {isZh ? "策略" : "Policy"} {m.policy.toFixed(2)} · {isZh ? "价值" : "Value"}{" "}
                    {m.value.toFixed(2)}
                  </p>
                </div>
                <span className="text-sm font-semibold text-slate-900">{m.score.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-700">
            {isZh ? "当前最优：" : "Best now:"} <span className="font-semibold">{top.label}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
