import { useMemo, useState } from "react";

type DepthExpressivenessDemoProps = {
  lang: "en" | "zh";
};

export function DepthExpressivenessDemo({ lang }: DepthExpressivenessDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：理解深度与宽度的直觉",
          desc: "调整层数与神经元数，观察在相同参数预算下深度如何放大表达能力。",
          reset: "重置",
          depthLabel: "深度（隐藏层数）",
          currentDepth: (v: number) => `当前：${v} 层`,
          widthLabel: "宽度（每层神经元数）",
          currentWidth: (v: number) => `当前：${v} 个神经元`,
          expressive: "表达能力（示意分）",
          hierarchy: "层次深度",
          params: "参数量（层数 × 神经元）",
          coverage: "概念覆盖度（模拟）",
          note:
            "增加深度能在不大幅增加参数的情况下学习分层抽象。仅增加宽度参数暴涨，但提升有限。",
        }
      : {
          goal: "Goal: depth vs. width intuition",
          desc: "Adjust layers and neurons to see how depth amplifies expressive power for the same budget.",
          reset: "Reset",
          depthLabel: "Depth (hidden layers)",
          currentDepth: (v: number) => `Current: ${v} layers`,
          widthLabel: "Width (neurons per layer)",
          currentWidth: (v: number) => `Current: ${v} neurons`,
          expressive: "Expressive power (toy score)",
          hierarchy: "Hierarchy depth",
          params: "Parameter budget (depth × width)",
          coverage: "Concept coverage (simulated)",
          note:
            "Depth improves the chance of learning multi-stage abstractions without exploding parameter counts. Increasing width alone quickly raises parameters but yields diminishing gains on the toy score.",
        };
  const [depth, setDepth] = useState(3);
  const [width, setWidth] = useState(8);

  const metrics = useMemo(() => {
    const expressiveness = Math.round((depth ** 1.4) * Math.log(width + 2) * 10) / 10;
    const hierarchy = Math.max(1, depth - 1);
    const parameterBudget = depth * width;
    const conceptCoverage = Math.min(100, Math.round(expressiveness * 2));

    return { expressiveness, hierarchy, parameterBudget, conceptCoverage };
  }, [depth, width]);

  const reset = () => {
    setDepth(3);
    setWidth(8);
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
          onClick={reset}
          type="button"
          aria-label={t.reset}
        >
          {t.reset}
        </button>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.depthLabel}
            <input
              type="range"
              min={2}
              max={8}
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={2}
              aria-valuemax={8}
              aria-valuenow={depth}
            />
            <span className="text-xs text-slate-500">{t.currentDepth(depth)}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.widthLabel}
            <input
              type="range"
              min={4}
              max={32}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={4}
              aria-valuemax={32}
              aria-valuenow={width}
            />
            <span className="text-xs text-slate-500">{t.currentWidth(width)}</span>
          </label>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <MetricRow label={t.expressive} value={metrics.expressiveness} max={80} />
          <MetricRow label={t.hierarchy} value={metrics.hierarchy} max={8} />
          <MetricRow label={t.params} value={metrics.parameterBudget} max={256} />
          <MetricRow label={t.coverage} value={metrics.conceptCoverage} max={100} unit="%" />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
      </div>
    </div>
  );
}

type MetricRowProps = {
  label: string;
  value: number;
  max: number;
  unit?: string;
};

function MetricRow({ label, value, max, unit }: MetricRowProps) {
  const widthPercent = Math.min(100, Math.round((value / max) * 100));
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <span className="text-slate-800">
          {value}
          {unit}
        </span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all"
          style={{ width: `${widthPercent}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
