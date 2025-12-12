import { useMemo, useState } from "react";

const layerInfo = [
  { title: "Layer 1", feature: "simple lines and edges", color: "#0ea5e9" },
  { title: "Layer 2", feature: "corners and curves", color: "#22c55e" },
  { title: "Layer 3", feature: "facial parts or object fragments", color: "#f97316" },
  { title: "Layer 4", feature: "full faces or object silhouettes", color: "#a855f7" },
  { title: "Layer 5", feature: "task-specific high-level concepts", color: "#0f172a" },
];

export function FeatureHierarchyDemo() {
  const [layer, setLayer] = useState(2);
  const info = layerInfo[layer - 1];

  const receptiveField = useMemo(() => 5 + layer * 6, [layer]);
  const taskRelevance = useMemo(() => Math.min(100, 40 + layer * 12), [layer]);

  const reset = () => {
    setLayer(2);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Goal: hierarchical feature learning
          </p>
          <p className="text-xs text-slate-600">
            Slide through convolutional layers to see receptive field growth and feature meaning.
          </p>
        </div>
        <button
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          type="button"
        >
          Reset
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-[2fr,1fr]">
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <FeatureGrid layer={layer} />
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            Layer depth
            <input
              type="range"
              min={1}
              max={5}
              value={layer}
              onChange={(e) => setLayer(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{info.title}</span>
          </label>
          <div className="rounded-lg bg-white/80 p-3 shadow-inner ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-slate-900">{info.feature}</p>
            <p className="text-xs text-slate-600">
              Higher layers capture larger, more semantic patterns, mirroring the examples in the
              face recognition discussion.
            </p>
          </div>
          <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
            Receptive field: {receptiveField} px · Task relevance: {taskRelevance}%
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Lower layers share simple line detectors across many tasks, while higher layers specialize,
        matching the shared-bottom / varied-top pattern.
      </p>
    </div>
  );
}

type FeatureGridProps = {
  layer: number;
};

function FeatureGrid({ layer }: FeatureGridProps) {
  const activeCount = layer + 2;
  const tiles = Array.from({ length: 9 }, (_, idx) => {
    const filled = idx < activeCount;
    const color = layerInfo[Math.min(layer - 1, layerInfo.length - 1)].color;
    return { filled, color, idx };
  });

  return (
    <div className="grid grid-cols-3 gap-2">
      {tiles.map((tile) => (
        <div
          key={tile.idx}
          className="relative h-20 rounded-xl bg-white/90 ring-1 ring-slate-200"
          style={{
            background:
              tile.filled && tile.idx % 2 === 0
                ? `radial-gradient(circle at 30% 30%, ${tile.color}33, transparent 65%), radial-gradient(circle at 70% 70%, ${tile.color}55, transparent 60%)`
                : undefined,
          }}
        >
          <div
            className="absolute inset-2 rounded-lg border-2 border-dashed"
            style={{
              borderColor: tile.filled ? tile.color : "#e2e8f0",
              opacity: tile.filled ? 0.85 : 0.35,
            }}
          />
        </div>
      ))}
    </div>
  );
}
