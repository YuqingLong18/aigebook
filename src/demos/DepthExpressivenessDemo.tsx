import { useMemo, useState } from "react";

export function DepthExpressivenessDemo() {
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
          <p className="text-sm font-semibold text-slate-900">Goal: depth vs. width intuition</p>
          <p className="text-xs text-slate-600">
            Adjust layers and neurons to see how depth amplifies expressive power for the same budget.
          </p>
        </div>
        <button
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          type="button"
          aria-label="Reset depth/width demo"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            Depth (hidden layers)
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
            <span className="text-xs text-slate-500">Current: {depth} layers</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Width (neurons per layer)
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
            <span className="text-xs text-slate-500">Current: {width} neurons</span>
          </label>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <MetricRow label="Expressive power (toy score)" value={metrics.expressiveness} max={80} />
          <MetricRow label="Hierarchy depth" value={metrics.hierarchy} max={8} />
          <MetricRow
            label="Parameter budget (depth × width)"
            value={metrics.parameterBudget}
            max={256}
          />
          <MetricRow
            label="Concept coverage (simulated)"
            value={metrics.conceptCoverage}
            max={100}
            unit="%"
          />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        Depth improves the chance of learning multi-stage abstractions without exploding parameter
        counts. Increasing width alone quickly raises parameters but yields diminishing gains on
        the toy score.
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
