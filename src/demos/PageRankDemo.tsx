import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Node = {
  id: string;
  links: string[];
};

const graph: Node[] = [
  { id: "A", links: ["B", "C"] },
  { id: "B", links: ["C"] },
  { id: "C", links: ["A"] },
  { id: "D", links: ["C"] },
];

export function PageRankDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [iters, setIters] = useState(5);
  const damping = 0.85;

  const ranks = useMemo(() => {
    const n = graph.length;
    let r = Array(n).fill(1 / n);
    for (let k = 0; k < iters; k++) {
      const newR = Array(n).fill((1 - damping) / n);
      graph.forEach((node, i) => {
        node.links.forEach((to) => {
          const j = graph.findIndex((g) => g.id === to);
          if (j >= 0) {
            newR[j] += (damping * r[i]) / node.links.length;
          }
        });
      });
      r = newR;
    }
    return r;
  }, [iters, damping]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "PageRank" : "PageRank"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "链接投票的迭代计算" : "Iterative Link Voting"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "调节迭代次数，观察节点重要性如何收敛。"
              : "Adjust iterations to see how importance converges."}
          </p>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Ranking</div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "迭代次数" : "Iterations"}</p>
          <input
            type="range"
            min={1}
            max={15}
            step={1}
            value={iters}
            onChange={(e) => setIters(parseInt(e.target.value, 10))}
            className="mt-2 w-full accent-indigo-600"
          />
          <p className="mt-2 text-sm font-semibold text-slate-900">{iters}</p>
          <p className="text-xs text-slate-600">
            {isZh ? "更多迭代 → 更接近稳定值。" : "More iterations → closer to steady state."}
          </p>
        </div>

        <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "节点得分" : "Node scores"}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
            {graph.map((node, idx) => (
              <div key={node.id} className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-semibold text-slate-900">
                  {node.id} → {(ranks[idx] * 100).toFixed(1)}%
                </p>
                <p className="text-xs text-slate-600">
                  {isZh ? "指向" : "Links"}: {node.links.join(", ")}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-700">
            {isZh
              ? "重要页面把权重传递给它链接到的页面。迭代直到收敛。"
              : "Important pages pass weight to pages they link to; iterate until convergence."}
          </p>
        </div>
      </div>
    </div>
  );
}
