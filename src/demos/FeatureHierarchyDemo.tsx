import { useMemo, useState } from "react";

const layerInfo = [
  {
    title: { en: "Layer 1", zh: "第 1 层" },
    feature: { en: "simple lines and edges", zh: "简单线条与边缘" },
    color: "#0ea5e9",
  },
  {
    title: { en: "Layer 2", zh: "第 2 层" },
    feature: { en: "corners and curves", zh: "拐角和曲线" },
    color: "#22c55e",
  },
  {
    title: { en: "Layer 3", zh: "第 3 层" },
    feature: { en: "facial parts or object fragments", zh: "面部局部或物体局部" },
    color: "#f97316",
  },
  {
    title: { en: "Layer 4", zh: "第 4 层" },
    feature: { en: "full faces or object silhouettes", zh: "完整人脸或物体轮廓" },
    color: "#a855f7",
  },
  {
    title: { en: "Layer 5", zh: "第 5 层" },
    feature: { en: "task-specific high-level concepts", zh: "任务相关的高层概念" },
    color: "#0f172a",
  },
];

type FeatureHierarchyDemoProps = {
  lang: "en" | "zh";
};

export function FeatureHierarchyDemo({ lang }: FeatureHierarchyDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：分层特征学习",
          desc: "滑动卷积层深度，查看感受野增长与特征含义变化。",
          reset: "重置",
          depthLabel: "网络层深度",
          currentLayer: (title: string) => title,
          featureDesc: "更高层捕获更大、更具语义的模式，对应人脸识别中的示例。",
          stats: (rf: number, rel: number) => `感受野：${rf} 像素 · 任务相关度：${rel}%`,
          footer:
            "低层共享简单线条检测器，高层在任务上分化，呼应“底层共享 / 顶层差异”模式。",
        }
      : {
          goal: "Goal: hierarchical feature learning",
          desc: "Slide through convolutional layers to see receptive field growth and feature meaning.",
          reset: "Reset",
          depthLabel: "Layer depth",
          currentLayer: (title: string) => title,
          featureDesc:
            "Higher layers capture larger, more semantic patterns, mirroring the examples in the face recognition discussion.",
          stats: (rf: number, rel: number) => `Receptive field: ${rf} px · Task relevance: ${rel}%`,
          footer:
            "Lower layers share simple line detectors across many tasks, while higher layers specialize, matching the shared-bottom / varied-top pattern.",
        };

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
          <p className="text-sm font-semibold text-slate-900">{t.goal}</p>
          <p className="text-xs text-slate-600">{t.desc}</p>
        </div>
        <button
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          type="button"
        >
          {t.reset}
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-[2fr,1fr]">
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <FeatureGrid layer={layer} />
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.depthLabel}
            <input
              type="range"
              min={1}
              max={5}
              value={layer}
              onChange={(e) => setLayer(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{t.currentLayer(info.title[lang])}</span>
          </label>
          <div className="rounded-lg bg-white/80 p-3 shadow-inner ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-slate-900">{info.feature[lang]}</p>
            <p className="text-xs text-slate-600">{t.featureDesc}</p>
          </div>
          <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
            {t.stats(receptiveField, taskRelevance)}
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-500">{t.footer}</p>
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
