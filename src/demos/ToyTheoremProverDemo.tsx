import { useMemo, useState } from "react";

type ToyTheoremProverDemoProps = {
  lang: "en" | "zh";
};

type Strategy = "bfs" | "astar";

type RuleId = "plus2" | "plus4" | "plus6";

type ProofStep = {
  from: number;
  to: number;
  rule: RuleId;
};

function clampInt(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function ruleDelta(rule: RuleId) {
  if (rule === "plus2") return 2;
  if (rule === "plus4") return 4;
  return 6;
}

export function ToyTheoremProverDemo({ lang }: ToyTheoremProverDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：体验“机器定理证明”如何把证明变成规则 + 搜索",
        desc: "从公理 even(0) 出发，用推理规则推出目标 even(N)。对比无启发式（BFS）与启发式（A*）的展开节点数。",
        reset: "重置",
        target: "目标 N（偶数）",
        max: "搜索上界",
        strategy: "搜索策略",
        bfs: "BFS（无启发）",
        astar: "A*（带启发）",
        heuristic: "启发式可信度",
        rules: "允许的推理规则",
        expanded: "展开节点数",
        frontier: "优先队列弹出顺序",
        proof: "找到的证明链",
        noProof: "未在上界内找到证明（请增大上界或启用更多规则）。",
        note:
          "类比 Logic Theorist：用已知规则推导新结论，并用启发式优先探索“更接近目标”的分支，从而减少搜索空间。",
        rulePlus2: "规则：even(n) → even(n+2)",
        rulePlus4: "规则：even(n) → even(n+4)",
        rulePlus6: "规则：even(n) → even(n+6)",
      }
    : {
        goal: "Goal: Feel how “machine theorem proving” becomes rules + search",
        desc: "Start from axiom even(0) and derive the target even(N). Compare BFS (no heuristic) vs A* (heuristic) by how many nodes get expanded.",
        reset: "Reset",
        target: "Target N (even)",
        max: "Search cap",
        strategy: "Search strategy",
        bfs: "BFS (no heuristic)",
        astar: "A* (with heuristic)",
        heuristic: "Heuristic quality",
        rules: "Allowed inference rules",
        expanded: "Expanded nodes",
        frontier: "Pop order (frontier)",
        proof: "Found proof chain",
        noProof: "No proof found within the cap (increase cap or enable more rules).",
        note:
          "Analogy to Logic Theorist: derive new conclusions from rules and use heuristics to expand branches that look closer to the goal—shrinking the search space.",
        rulePlus2: "Rule: even(n) → even(n+2)",
        rulePlus4: "Rule: even(n) → even(n+4)",
        rulePlus6: "Rule: even(n) → even(n+6)",
      };

  const [target, setTarget] = useState(18);
  const [cap, setCap] = useState(30);
  const [strategy, setStrategy] = useState<Strategy>("astar");
  const [quality, setQuality] = useState(75);
  const [enabled, setEnabled] = useState<Record<RuleId, boolean>>({
    plus2: true,
    plus4: true,
    plus6: false,
  });

  const reset = () => {
    setTarget(18);
    setCap(30);
    setStrategy("astar");
    setQuality(75);
    setEnabled({ plus2: true, plus4: true, plus6: false });
  };

  const result = useMemo(() => {
    const goal = clampInt(target, 2, 40);
    const maxValue = clampInt(cap, goal, 60);
    const activeRules = (Object.keys(enabled) as RuleId[]).filter((k) => enabled[k]);
    const seed = goal * 997 + maxValue * 131 + (strategy === "astar" ? 7 : 3);
    const rand = mulberry32(seed);

    const heuristicNoise = ((100 - clampInt(quality, 0, 100)) / 100) * 4;

    const h = (n: number) => {
      const base = Math.abs(goal - n) / 2;
      if (strategy === "bfs") return 0;
      const noise = (rand() - 0.5) * 2 * heuristicNoise;
      return Math.max(0, base + noise);
    };

    type Node = { n: number; g: number; f: number };
    const start: Node = { n: 0, g: 0, f: 0 + h(0) };
    const frontier: Node[] = [start];
    const cameFrom = new Map<number, ProofStep>();
    const bestG = new Map<number, number>([[0, 0]]);
    const popOrder: number[] = [];

    const popFrontier = () => {
      if (strategy === "bfs") return frontier.shift()!;
      let bestIdx = 0;
      for (let i = 1; i < frontier.length; i++) {
        if (frontier[i].f < frontier[bestIdx].f) bestIdx = i;
      }
      const [node] = frontier.splice(bestIdx, 1);
      return node;
    };

    while (frontier.length > 0) {
      const cur = popFrontier();
      popOrder.push(cur.n);
      if (cur.n === goal) break;
      for (const rule of activeRules) {
        const next = cur.n + ruleDelta(rule);
        if (next > maxValue) continue;
        const nextG = cur.g + 1;
        const prevBest = bestG.get(next);
        if (prevBest !== undefined && prevBest <= nextG) continue;
        bestG.set(next, nextG);
        cameFrom.set(next, { from: cur.n, to: next, rule });
        frontier.push({ n: next, g: nextG, f: nextG + h(next) });
      }
    }

    const hasProof = bestG.has(goal);
    const proof: ProofStep[] = [];
    if (hasProof) {
      let cur = goal;
      while (cur !== 0) {
        const step = cameFrom.get(cur);
        if (!step) break;
        proof.push(step);
        cur = step.from;
      }
      proof.reverse();
    }

    return {
      hasProof,
      expanded: popOrder.length,
      popOrder,
      proof,
      goal,
      maxValue,
      activeRules,
    };
  }, [cap, enabled, quality, strategy, target]);

  const ruleLabels: Record<RuleId, string> = {
    plus2: t.rulePlus2,
    plus4: t.rulePlus4,
    plus6: t.rulePlus6,
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
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

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.target}
            <input
              type="range"
              min={2}
              max={40}
              step={2}
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{result.goal}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.max}
            <input
              type="range"
              min={Math.max(10, result.goal)}
              max={60}
              step={2}
              value={cap}
              onChange={(e) => setCap(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{result.maxValue}</span>
          </label>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">{t.strategy}</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className={[
                  "rounded-lg border px-3 py-2 text-left text-xs font-semibold transition",
                  strategy === "bfs"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
                onClick={() => setStrategy("bfs")}
                aria-pressed={strategy === "bfs"}
              >
                {t.bfs}
              </button>
              <button
                type="button"
                className={[
                  "rounded-lg border px-3 py-2 text-left text-xs font-semibold transition",
                  strategy === "astar"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
                onClick={() => setStrategy("astar")}
                aria-pressed={strategy === "astar"}
              >
                {t.astar}
              </button>
            </div>
          </div>

          <label className="block text-sm font-semibold text-slate-700">
            {t.heuristic}
            <input
              type="range"
              min={0}
              max={100}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
              disabled={strategy === "bfs"}
            />
            <span className="text-xs text-slate-500">
              {strategy === "bfs" ? (isZh ? "BFS 不使用启发式" : "BFS ignores heuristics") : quality}
            </span>
          </label>

          <div>
            <p className="text-sm font-semibold text-slate-700">{t.rules}</p>
            <div className="mt-2 space-y-2">
              {(Object.keys(enabled) as RuleId[]).map((rule) => (
                <label
                  key={rule}
                  className="flex cursor-pointer items-start justify-between gap-3 rounded-lg bg-white px-3 py-2 text-xs text-slate-700 shadow-sm"
                >
                  <span className="pt-0.5 font-semibold">{ruleLabels[rule]}</span>
                  <input
                    type="checkbox"
                    checked={enabled[rule]}
                    onChange={(e) => setEnabled((prev) => ({ ...prev, [rule]: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 flex-shrink-0 accent-brand-500"
                    aria-label={ruleLabels[rule]}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.expanded}</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">{result.expanded}</p>
              <p className="mt-2 text-xs text-slate-600">
                {isZh ? "公理：even(0)" : "Axiom: even(0)"} · {isZh ? "目标：" : "Goal:"} even({result.goal})
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.proof}</p>
              {result.hasProof ? (
                <ol className="mt-2 space-y-2 text-xs">
                  {result.proof.map((step, idx) => (
                    <li key={`${step.from}-${step.to}-${step.rule}`} className="rounded-lg bg-white px-3 py-2 shadow-sm">
                      <span className="font-semibold text-slate-900">
                        {idx + 1}. even({step.from}) → even({step.to})
                      </span>
                      <span className="ml-2 text-slate-600">({step.rule})</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-2 text-xs text-slate-600">{t.noProof}</p>
              )}
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.frontier}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {result.popOrder.slice(0, 40).map((n, idx) => (
                <span
                  key={`${n}-${idx}`}
                  className={[
                    "rounded-full px-2 py-1 text-[11px] font-semibold",
                    n === result.goal ? "bg-emerald-100 text-emerald-700" : "bg-white text-slate-700",
                  ].join(" ")}
                >
                  {n}
                </span>
              ))}
              {result.popOrder.length > 40 && (
                <span className="rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-slate-500">
                  +{result.popOrder.length - 40}
                </span>
              )}
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
            {t.note}
          </div>
        </div>
      </div>
    </div>
  );
}

