import { useMemo, useState } from "react";

type ClusteringPlaygroundDemoProps = {
  lang: "en" | "zh";
};

type Point = {
  id: string;
  x: number;
  y: number;
};

const points: Point[] = [
  { id: "apple1", x: 18, y: 70 },
  { id: "apple2", x: 24, y: 75 },
  { id: "apple3", x: 22, y: 68 },
  { id: "orange1", x: 70, y: 40 },
  { id: "orange2", x: 74, y: 36 },
  { id: "peach1", x: 50, y: 80 },
  { id: "peach2", x: 55, y: 76 },
];

type ClusteredPoint = Point & { cluster: number };

export function ClusteringPlaygroundDemo({ lang }: ClusteringPlaygroundDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：体验 K-Means 聚类",
          desc: "选择簇数量，观察果实在二维特征（颜色/大小）上的聚类。",
          reset: "重置",
          clusters: "簇数量 K",
          note: "K 值越接近真实类别，簇内相似度越高、簇间差异越大。",
        }
      : {
          goal: "Goal: K-means clustering intuition",
          desc: "Pick the number of clusters to see how fruits group in 2D features (color/size).",
          reset: "Reset",
          clusters: "Number of clusters (K)",
          note: "When K matches the underlying groups, points become compact within clusters and separated across clusters.",
        };

  const [k, setK] = useState(3);

  const clustered = useMemo<ClusteredPoint[]>(() => {
    const centers = points.slice(0, k).map((p) => ({ x: p.x, y: p.y }));
    const assign = (pt: Point) => {
      let best = 0;
      let bestDist = Infinity;
      centers.forEach((c, idx) => {
        const dist = (pt.x - c.x) ** 2 + (pt.y - c.y) ** 2;
        if (dist < bestDist) {
          bestDist = dist;
          best = idx;
        }
      });
      return best;
    };
    return points.map((p) => ({ ...p, cluster: assign(p) }));
  }, [k]);

  const reset = () => setK(3);

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
            {t.clusters}
            <input
              type="range"
              min={2}
              max={4}
              value={k}
              onChange={(e) => setK(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={2}
              aria-valuemax={4}
              aria-valuenow={k}
            />
            <span className="text-xs text-slate-500">{k}</span>
          </label>
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
            {t.note}
          </div>
        </div>

        <div className="relative h-60 rounded-xl border border-slate-200 bg-slate-50">
          {clustered.map((p) => (
            <div
              key={p.id}
              className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white shadow"
              style={{
                left: `${p.x}%`,
                top: `${100 - p.y}%`,
                backgroundColor: clusterColor(p.cluster),
              }}
              title={p.id}
            />
          ))}
          <div className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wide text-slate-500">
            color / size space (toy)
          </div>
        </div>
      </div>
    </div>
  );
}

function clusterColor(idx: number) {
  const palette = ["#0ea5e9", "#f59e0b", "#10b981", "#8b5cf6"];
  return palette[idx % palette.length];
}
