import { useMemo, useState } from "react";

type XORLimitDemoProps = {
  lang: "en" | "zh";
};

type Point = { x: number; y: number; label: number };

const xorPoints: Point[] = [
  { x: 0, y: 0, label: 0 },
  { x: 0, y: 1, label: 1 },
  { x: 1, y: 0, label: 1 },
  { x: 1, y: 1, label: 0 },
];

export function XORLimitDemo({ lang }: XORLimitDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：感受感知机对 XOR 的线性可分限制",
          desc: "调整直线参数，看是否能分开 XOR 数据点。提示：单层感知机无法做到。",
          reset: "重置",
          slope: "斜率",
          bias: "偏置",
          mis: "分类错误数",
          note: "无论如何调整，XOR 点无法被一条直线完全分开，必须用多层或非线性。",
        }
      : {
          goal: "Goal: Perceptron’s linear limit on XOR",
          desc: "Adjust a line and see if XOR points can be separated. Hint: a single perceptron cannot.",
          reset: "Reset",
          slope: "Slope",
          bias: "Bias",
          mis: "Misclassifications",
          note: "No single line separates XOR; multi-layer or nonlinear features are required.",
        };

  const [slope, setSlope] = useState(1);
  const [bias, setBias] = useState(0.2);

  const errors = useMemo(() => {
    return xorPoints.filter((p) => {
      const yHat = slope * p.x + bias;
      const pred = p.y > yHat ? 0 : 1;
      return pred !== p.label;
    }).length;
  }, [bias, slope]);

  const reset = () => {
    setSlope(1);
    setBias(0.2);
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
            {t.slope}
            <input
              type="range"
              min={-2}
              max={2}
              step={0.1}
              value={slope}
              onChange={(e) => setSlope(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={-2}
              aria-valuemax={2}
              aria-valuenow={slope}
            />
            <span className="text-xs text-slate-500">{slope.toFixed(1)}</span>
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.bias}
            <input
              type="range"
              min={-1}
              max={2}
              step={0.05}
              value={bias}
              onChange={(e) => setBias(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={-1}
              aria-valuemax={2}
              aria-valuenow={bias}
            />
            <span className="text-xs text-slate-500">{bias.toFixed(2)}</span>
          </label>
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
            {t.mis}: <span className="font-semibold text-slate-900">{errors}</span>
          </div>
        </div>

        <div className="relative h-48 rounded-xl border border-slate-200 bg-slate-50">
          {xorPoints.map((p, idx) => (
            <div
              key={idx}
              className={[
                "absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white shadow",
                p.label === 1 ? "bg-emerald-500" : "bg-sky-500",
              ].join(" ")}
              style={{ left: `${p.x * 80 + 20}%`, top: `${100 - (p.y * 80 + 10)}%` }}
              title={`(${p.x}, ${p.y}) -> ${p.label}`}
            />
          ))}
          <Line slope={slope} bias={bias} />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
      </div>
    </div>
  );
}

function Line({ slope, bias }: { slope: number; bias: number }) {
  // line: y = slope*x + bias, x in [0,1]
  const x1 = 0;
  const y1 = slope * x1 + bias;
  const x2 = 1;
  const y2 = slope * x2 + bias;

  const px1 = x1 * 80 + 20;
  const py1 = 100 - (y1 * 80 + 10);
  const px2 = x2 * 80 + 20;
  const py2 = 100 - (y2 * 80 + 10);

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
      <line x1={px1} y1={py1} x2={px2} y2={py2} stroke="#0f172a" strokeWidth="1.5" />
    </svg>
  );
}
