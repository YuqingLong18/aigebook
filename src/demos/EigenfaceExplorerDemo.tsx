import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type BasisFace = {
  id: string;
  label: string;
  traitEn: string;
  traitZh: string;
};

const bases: BasisFace[] = [
  { id: "brow", label: "ϕ1", traitEn: "eyebrow + cheek shadows", traitZh: "眉眼与脸颊阴影" },
  { id: "nose", label: "ϕ2", traitEn: "nose bridge + eye socket", traitZh: "鼻梁与眼眶" },
  { id: "jaw", label: "ϕ3", traitEn: "jawline + chin light", traitZh: "下颌线与下巴光影" },
  { id: "mouth", label: "ϕ4", traitEn: "mouth corner curve", traitZh: "嘴角弧度" },
];

export function EigenfaceExplorerDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [weights, setWeights] = useState({ brow: 0.3, nose: -0.2, jaw: 0.4, mouth: -0.1 });

  const summary = useMemo(() => {
    const top = Object.entries(weights).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))[0][0];
    const topBasis = bases.find((b) => b.id === top)!;
    return isZh
      ? `主要特征来自 ${topBasis.label}（${topBasis.traitZh}），权重 ${weights[top].toFixed(2)}。`
      : `Dominant basis: ${topBasis.label} (${topBasis.traitEn}), weight ${weights[top].toFixed(2)}.`;
  }, [weights, isZh]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "特征脸权重可视化" : "Eigenface Weight Explorer"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "滑动权重，组合多个特征脸（PCA 基向量），得到新的“脸”描述。"
              : "Adjust weights to combine eigenfaces (PCA bases) and see how a new face embedding is formed."}
          </p>
        </div>
        <div className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          PCA · Eigenfaces
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          {bases.map((b) => (
            <div key={b.id} className="rounded-lg border border-slate-200 p-3">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                <span>
                  {b.label} · {isZh ? b.traitZh : b.traitEn}
                </span>
                <span className="text-slate-900">{weights[b.id as keyof typeof weights].toFixed(2)}</span>
              </div>
              <input
                type="range"
                min={-1}
                max={1}
                step={0.05}
                value={weights[b.id as keyof typeof weights]}
                onChange={(e) =>
                  setWeights((prev) => ({
                    ...prev,
                    [b.id]: parseFloat(e.target.value),
                  }))
                }
                className="mt-2 w-full accent-indigo-600"
              />
              <div className="mt-2 h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-indigo-500 transition-all"
                  style={{
                    width: `${Math.abs(weights[b.id as keyof typeof weights]) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="font-semibold text-slate-800">
            {isZh ? "合成说明" : "Composite Notes"}
          </p>
          <p className="mt-2 text-slate-700">{summary}</p>
          <p className="mt-2 text-slate-600">
            {isZh
              ? "特征脸是数据方差最大的方向。权重组合形成脸部向量，再送入分类器或阈值比较。"
              : "Eigenfaces are the directions of maximum variance. Weighting them yields a face vector, compared later by a classifier or threshold."}
          </p>
          <p className="mt-2 text-slate-600">
            {isZh
              ? "优点：无需精确定位五官；局限：对局部细节与光照不敏感。"
              : "Pros: no need for precise landmarking; Limits: less sensitive to local detail and lighting."}
          </p>
        </div>
      </div>
    </div>
  );
}
