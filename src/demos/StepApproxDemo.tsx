import { useMemo, useState } from "react";

type Shape = "bump" | "wave";
type StepApproxDemoProps = {
  lang: "en" | "zh";
};

function targetFn(x: number, shape: Shape) {
  if (shape === "bump") {
    if (x < 2 || x > 9) return 0;
    if (x < 4) return 0.6;
    if (x < 6.5) return 1.0;
    return 0.4;
  }
  return 0.6 + 0.35 * Math.sin(x) + 0.15 * Math.sin(2 * x + 0.4);
}

export function StepApproxDemo({ lang }: StepApproxDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：理解普适近似直觉",
          desc: "用阶跃窗口（成对隐藏单元）来逼近目标函数。",
          reset: "重置",
          pairsLabel: "隐藏节点对数",
          pairsCount: (v: number) => `节点对：${v}`,
          targetLabel: "目标曲线形状",
          optionBump: "矩形脉冲",
          optionWave: "波浪状曲线",
          error: (v: number) =>
            `误差：${v.toFixed(3)}（平均绝对误差）。更多窗口会降低误差，符合单隐层可近似任意连续函数的定理。`,
        }
      : {
          goal: "Goal: universal approximation intuition",
          desc: "Combine step windows (pairs of hidden units) to approximate a target function.",
          reset: "Reset",
          pairsLabel: "Hidden node pairs",
          pairsCount: (v: number) => `Pairs: ${v}`,
          targetLabel: "Target shape",
          optionBump: "Rectangular bump",
          optionWave: "Wave-like curve",
          error: (v: number) =>
            `Error: ${v.toFixed(3)} (mean absolute). More step pairs reduce the gap, matching the theorem that a single hidden layer with enough nodes can approximate any continuous function.`,
        };
  const [pairs, setPairs] = useState(2);
  const [shape, setShape] = useState<Shape>("bump");

  const xs = useMemo(() => Array.from({ length: 120 }, (_, i) => (10 * i) / 119), []);

  const targetPoints = useMemo(
    () => xs.map((x) => ({ x, y: targetFn(x, shape) })),
    [shape, xs],
  );

  const rectangles = useMemo(() => buildRectangles(xs, targetPoints, pairs), [pairs, targetPoints]);
  const approxPoints = useMemo(() => approximate(xs, rectangles), [xs, rectangles]);

  const error =
    approxPoints.reduce((acc, p, idx) => acc + Math.abs(p.y - targetPoints[idx].y), 0) /
    approxPoints.length;

  const reset = () => {
    setPairs(2);
    setShape("bump");
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
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <ApproxChart target={targetPoints} approx={approxPoints} rectangles={rectangles} />
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.pairsLabel}
            <input
              type="range"
              min={1}
              max={6}
              value={pairs}
              onChange={(e) => setPairs(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{t.pairsCount(pairs)}</span>
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.targetLabel}
            <select
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              value={shape}
              onChange={(e) => setShape(e.target.value as Shape)}
            >
              <option value="bump">{t.optionBump}</option>
              <option value="wave">{t.optionWave}</option>
            </select>
          </label>
          <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
            {t.error(error)}
          </div>
        </div>
      </div>
    </div>
  );
}

type Rect = { start: number; end: number; height: number };
type Point = { x: number; y: number };

function buildRectangles(xs: number[], target: Point[], pairs: number): Rect[] {
  if (pairs <= 0) return [];
  const width = 10 / pairs / 1.2;
  const rects: Rect[] = [];
  for (let i = 0; i < pairs; i += 1) {
    const center = (i + 0.7) * (10 / pairs);
    const start = Math.max(0, center - width / 2);
    const end = Math.min(10, center + width / 2);
    const indices = xs
      .map((x, idx) => ({ x, idx }))
      .filter(({ x }) => x >= start && x <= end)
      .map(({ idx }) => idx);
    const mean =
      indices.reduce((acc, idx) => acc + target[idx].y, 0) / Math.max(1, indices.length);
    rects.push({ start, end, height: mean });
  }
  return rects;
}

function approximate(xs: number[], rects: Rect[]): Point[] {
  return xs.map((x) => {
    const contribution = rects.reduce((acc, rect) => {
      if (x >= rect.start && x <= rect.end) {
        return acc + rect.height;
      }
      return acc;
    }, 0);
    return { x, y: contribution };
  });
}

type ApproxChartProps = {
  target: Point[];
  approx: Point[];
  rectangles: Rect[];
};

function ApproxChart({ target, approx, rectangles }: ApproxChartProps) {
  const xs = target.map((p) => p.x);
  const ys = [...target, ...approx].map((p) => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(0, ...ys);
  const maxY = Math.max(...ys, 1.2);

  const project = (x: number, y: number) => {
    const nx = ((x - minX) / (maxX - minX)) * 100;
    const ny = 100 - ((y - minY) / (maxY - minY)) * 100;
    return { nx, ny };
  };

  const targetPath = target
    .map((p) => {
      const { nx, ny } = project(p.x, p.y);
      return `${nx},${ny}`;
    })
    .join(" ");

  const approxPath = approx
    .map((p) => {
      const { nx, ny } = project(p.x, p.y);
      return `${nx},${ny}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Step function approximation chart">
      <rect width="100" height="100" fill="#f8fafc" rx="8" />
      <polyline
        points={targetPath}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <polyline
        points={approxPath}
        fill="none"
        stroke="#f43f5e"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeDasharray="3 2"
      />
      {rectangles.map((rect, idx) => {
        const { nx: x1 } = project(rect.start, 0);
        const { nx: x2 } = project(rect.end, 0);
        const { ny: yTop } = project(rect.start, rect.height);
        const width = x2 - x1;
        return (
          <rect
            key={`${rect.start}-${idx}`}
            x={x1}
            y={yTop}
            width={width}
            height={100 - yTop}
            fill="#c7d2fe"
            opacity={0.35}
            rx="2"
          />
        );
      })}
    </svg>
  );
}
