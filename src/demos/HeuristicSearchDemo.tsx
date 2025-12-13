import { useMemo, useState } from "react";

type HeuristicSearchDemoProps = {
  lang: "en" | "zh";
};

type Step = {
  label: string;
  cost: number;
  heuristic: number;
};

export function HeuristicSearchDemo({ lang }: HeuristicSearchDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：感受启发式搜索如何减少展开节点",
          desc: "调节启发式信息的可靠度，查看从 A 到 G 的搜索顺序与节点数。",
          reset: "重置",
          heuristicLabel: "启发式可信度",
          expanded: "展开节点数",
          distance: "估计距离",
          path: "推荐路径",
          note:
            "启发式越好，越能优先走向目标。启发式欠准会让算法在无关分支绕路，增大搜索量。",
        }
      : {
          goal: "Goal: See how heuristics cut the search space",
          desc: "Tune heuristic reliability to see the expansion order from A to G and node count.",
          reset: "Reset",
          heuristicLabel: "Heuristic quality",
          expanded: "Expanded nodes",
          distance: "Estimated distance",
          path: "Suggested path",
          note:
            "Better heuristics prioritize promising branches. Weak heuristics wander through irrelevant nodes and expand more of the tree.",
        };

  const [quality, setQuality] = useState(70);

  const result = useMemo(() => {
    const strongOrder: Step[] = [
      { label: "A", cost: 0, heuristic: 4 },
      { label: "B", cost: 1, heuristic: 3 },
      { label: "E", cost: 2, heuristic: 1 },
      { label: "G", cost: 3, heuristic: 0 },
    ];
    const weakOrder: Step[] = [
      { label: "A", cost: 0, heuristic: 6 },
      { label: "C", cost: 2, heuristic: 5 },
      { label: "D", cost: 3, heuristic: 4 },
      { label: "B", cost: 1, heuristic: 3 },
      { label: "F", cost: 4, heuristic: 3 },
      { label: "E", cost: 2, heuristic: 1 },
      { label: "G", cost: 3, heuristic: 0 },
    ];

    const path = quality >= 60 ? strongOrder : weakOrder;
    const expandedCount = path.length;
    const estimatedDistance = quality >= 60 ? "A → B → E → G" : "A → C → D → B → F → E → G";
    return { path, expandedCount, estimatedDistance };
  }, [quality]);

  const reset = () => setQuality(70);

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
        <div>
          <label className="block text-sm font-semibold text-slate-700">
            {t.heuristicLabel}
            <input
              type="range"
              min={0}
              max={100}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={quality}
            />
            <span className="text-xs text-slate-500">{quality}</span>
          </label>

          <div className="mt-3 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
            <p>
              {t.expanded}: <span className="font-semibold text-slate-900">{result.expandedCount}</span>
            </p>
            <p>
              {t.path}: <span className="font-semibold text-slate-900">{result.estimatedDistance}</span>
            </p>
          </div>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs text-slate-700">
          {result.path.map((step, idx) => (
            <div
              key={`${step.label}-${idx}`}
              className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm"
            >
              <span className="text-sm font-semibold text-slate-900">
                {idx + 1}. {step.label}
              </span>
              <div className="flex gap-4 text-[11px]">
                <span>
                  g: <strong>{step.cost}</strong>
                </span>
                <span>
                  h: <strong>{step.heuristic}</strong>
                </span>
                <span>
                  f: <strong>{step.cost + step.heuristic}</strong>
                </span>
              </div>
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
