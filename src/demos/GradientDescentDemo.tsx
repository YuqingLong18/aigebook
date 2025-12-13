import { useMemo, useState } from "react";

type GradientDescentDemoProps = {
  lang: "en" | "zh";
};

export function GradientDescentDemo({ lang }: GradientDescentDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：体验梯度下降如何逐步减小损失",
          desc: "点击“走一步”沿最陡方向更新参数，观察损失变化。",
          reset: "重置",
          step: "走一步",
          lr: "学习率",
          param: "参数 w",
          loss: "损失值 L",
          note:
            "学习率过大会震荡或发散，过小会收敛很慢。梯度下降利用局部斜率快速逼近谷底。",
        }
      : {
          goal: "Goal: Watch gradient descent shrink the loss",
          desc: "Hit “Take a step” to update the parameter along the steepest descent direction.",
          reset: "Reset",
          step: "Take a step",
          lr: "Learning rate",
          param: "Parameter w",
          loss: "Loss L",
          note:
            "Too large a learning rate causes oscillation; too small slows convergence. Gradient descent uses local slope to reach the valley efficiently.",
        };

  const [w, setW] = useState(6);
  const [lr, setLr] = useState(0.3);

  const { loss, gradient } = useMemo(() => {
    // Quadratic loss centered at w=2.5
    const lossVal = (w - 2.5) ** 2 + 0.5;
    const grad = 2 * (w - 2.5);
    return { loss: Math.round(lossVal * 1000) / 1000, gradient: grad };
  }, [w]);

  const step = () => {
    setW((prev) => prev - lr * (2 * (prev - 2.5)));
  };

  const reset = () => {
    setW(6);
    setLr(0.3);
  };

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
            type="button"
            onClick={step}
          >
            {t.step}
          </button>
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            type="button"
            onClick={reset}
            aria-label={t.reset}
          >
            {t.reset}
          </button>
        </div>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.lr}
            <input
              type="range"
              min={0.05}
              max={0.8}
              step={0.05}
              value={lr}
              onChange={(e) => setLr(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0.05}
              aria-valuemax={0.8}
              aria-valuenow={lr}
            />
            <span className="text-xs text-slate-500">{lr.toFixed(2)}</span>
          </label>
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
            <p>
              {t.param}: <span className="font-semibold text-slate-900">{w.toFixed(3)}</span>
            </p>
            <p>
              {t.loss}: <span className="font-semibold text-slate-900">{loss}</span>
            </p>
            <p>
              gradient: <span className="font-semibold text-slate-900">{gradient.toFixed(3)}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Curve loss={loss} parameter={w} />
          <div className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
            {t.note}
          </div>
        </div>
      </div>
    </div>
  );
}

type CurveProps = {
  loss: number;
  parameter: number;
};

function Curve({ loss, parameter }: CurveProps) {
  const normalizedLoss = Math.min(1, loss / 10);
  const xPos = Math.min(100, Math.max(0, (parameter / 8) * 100));
  const yPos = 100 - normalizedLoss * 90;

  return (
    <div className="relative h-40 rounded-lg bg-white shadow-inner">
      <div className="absolute bottom-4 left-3 text-[10px] uppercase tracking-wide text-slate-500">
        loss landscape (toy)
      </div>
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path
          d="M5 75 Q 50 5 95 75"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx={xPos} cy={yPos} r={3.5} fill="#0ea5e9" />
      </svg>
    </div>
  );
}
