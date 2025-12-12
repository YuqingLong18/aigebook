import { useMemo, useState } from "react";

function lossFn(x: number) {
  return Math.sin(1.5 * x) + 0.35 * Math.cos(0.5 * x) + 0.05 * x * x;
}

function grad(x: number) {
  return 1.5 * Math.cos(1.5 * x) - 0.175 * Math.sin(0.5 * x) + 0.1 * x;
}

type LossLandscapeDemoProps = {
  lang: "en" | "zh";
};

export function LossLandscapeDemo({ lang }: LossLandscapeDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：理解训练为何困难",
          desc: "在崎岖的损失曲面上沿梯度下降，体验鞍点和局部极小值。",
          reset: "重置",
          step: "执行一次梯度步",
          positionLabel: "起点 / 当前位置",
          current: (pos: number, loss: number) => `当前参数：${pos.toFixed(2)} ｜ 损失：${loss.toFixed(2)}`,
          lrLabel: "学习率",
          stepSize: (lr: number) => `步长：${lr.toFixed(2)}`,
          note:
            "曲面崎岖时，梯度步容易在小山谷中徘徊或停在平台，与文本中训练困难的描述一致。",
          marker: "当前位置",
        }
      : {
          goal: "Goal: see why training is hard",
          desc: "Follow gradient descent on a bumpy loss surface with saddles and local minima.",
          reset: "Reset",
          step: "Take gradient step",
          positionLabel: "Start / current position",
          current: (pos: number, loss: number) => `Current weight: ${pos.toFixed(2)} | Loss: ${loss.toFixed(2)}`,
          lrLabel: "Learning rate",
          stepSize: (lr: number) => `Step size: ${lr.toFixed(2)}`,
          note:
            "When the landscape is rugged, gradient steps can bounce between small valleys or get stuck on plateaus, echoing the training difficulty described in the text.",
          marker: "you are here",
        };
  const [position, setPosition] = useState(-5);
  const [lr, setLr] = useState(0.25);
  const [history, setHistory] = useState<number[]>([-5]);

  const points = useMemo(() => {
    const xs = Array.from({ length: 120 }, (_, i) => -8 + (16 * i) / 119);
    return xs.map((x) => ({ x, y: lossFn(x) }));
  }, []);

  const currentLoss = lossFn(position);

  const takeStep = () => {
    const step = grad(position) * lr;
    const next = position - step;
    const clipped = Math.max(-8, Math.min(8, next));
    setPosition(clipped);
    setHistory((prev) => [...prev, clipped].slice(-12));
  };

  const reset = () => {
    setPosition(-5);
    setHistory([-5]);
    setLr(0.25);
  };

  const pathPoints = history.map((x) => {
    const y = lossFn(x);
    return { x, y };
  });

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{t.goal}</p>
          <p className="text-xs text-slate-600">{t.desc}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            onClick={reset}
            type="button"
          >
            {t.reset}
          </button>
          <button
            className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-slate-800"
            onClick={takeStep}
            type="button"
          >
            {t.step}
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-[2fr,1fr]">
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <LandscapeChart
            points={points}
            path={pathPoints}
            currentX={position}
            markerLabel={t.marker}
          />
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.positionLabel}
            <input
              type="range"
              min={-8}
              max={8}
              step={0.1}
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">
              {t.current(position, currentLoss)}
            </span>
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.lrLabel}
            <input
              type="range"
              min={0.05}
              max={0.6}
              step={0.05}
              value={lr}
              onChange={(e) => setLr(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{t.stepSize(lr)}</span>
          </label>
          <div className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            {t.note}
          </div>
        </div>
      </div>
    </div>
  );
}

type ChartPoint = { x: number; y: number };

type LandscapeChartProps = {
  points: ChartPoint[];
  path: ChartPoint[];
  currentX: number;
  markerLabel: string;
};

function LandscapeChart({ points, path, currentX, markerLabel }: LandscapeChartProps) {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const project = (x: number, y: number) => {
    const nx = ((x - minX) / (maxX - minX)) * 100;
    const ny = 100 - ((y - minY) / (maxY - minY)) * 100;
    return { nx, ny };
  };

  const linePath = points
    .map((p) => {
      const { nx, ny } = project(p.x, p.y);
      return `${nx},${ny}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Loss landscape">
      <defs>
        <linearGradient id="lossfill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="#f8fafc" rx="6" />
      <polyline
        points={linePath}
        fill="url(#lossfill)"
        stroke="#94a3b8"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      {path.map((p, idx) => {
        const { nx, ny } = project(p.x, p.y);
        const isLast = idx === path.length - 1;
        return (
          <circle
            key={`${p.x}-${idx}`}
            cx={nx}
            cy={ny}
            r={isLast ? 2 : 1.5}
            fill={isLast ? "#0f172a" : "#3b82f6"}
            opacity={0.9}
          />
        );
      })}
      <CurrentMarker x={currentX} project={project} label={markerLabel} />
    </svg>
  );
}

type MarkerProps = {
  x: number;
  project: (x: number, y: number) => { nx: number; ny: number };
  label: string;
};

function CurrentMarker({ x, project, label }: MarkerProps) {
  const { nx, ny } = project(x, lossFn(x));
  return (
    <g>
      <line x1={nx} x2={nx} y1="0" y2="100" stroke="#e2e8f0" strokeDasharray="3 2" />
      <circle cx={nx} cy={ny} r={3} fill="#0ea5e9" stroke="#0f172a" strokeWidth="0.6" />
      <text x={nx + 2} y={ny - 2} fontSize="3" fill="#0f172a">
        {label}
      </text>
    </g>
  );
}
