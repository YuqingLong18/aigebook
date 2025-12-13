import { useMemo, useState } from "react";

type BackpropFlowDemoProps = {
  lang: "en" | "zh";
};

export function BackpropFlowDemo({ lang }: BackpropFlowDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：感受反向传播的逐层更新",
          desc: "点击“反向一步”从输出层回传梯度，查看权重变化。",
          reset: "重置",
          step: "反向一步",
          loss: "当前损失 (L)",
          wHidden: "隐层权重",
          wOutput: "输出层权重",
          note:
            "BP 复用下一层已计算的梯度，逐层向前更新。没有反向传播，多层网络难以训练。",
        }
      : {
          goal: "Goal: Watch backprop update layers step by step",
          desc: "Hit “Backprop step” to send gradients from output to hidden and see weight changes.",
          reset: "Reset",
          step: "Backprop step",
          loss: "Current loss (L)",
          wHidden: "Hidden weights",
          wOutput: "Output weights",
          note:
            "BP reuses downstream gradients while moving backward layer by layer. Without it, deep networks are hard to train.",
        };

  const [stepCount, setStepCount] = useState(0);

  const state = useMemo(() => {
    const hidden = 0.8 - stepCount * 0.05;
    const output = 1.2 - stepCount * 0.07;
    const loss = Math.max(0.05, 0.6 - stepCount * 0.08);
    return { hidden: Number(hidden.toFixed(2)), output: Number(output.toFixed(2)), loss: Number(loss.toFixed(2)) };
  }, [stepCount]);

  const handleStep = () => {
    setStepCount((prev) => Math.min(prev + 1, 6));
  };

  const reset = () => setStepCount(0);

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
            onClick={handleStep}
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
        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.loss}</p>
          <div className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {state.loss}
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.wHidden}</p>
          <div className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {state.hidden}
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.wOutput}</p>
          <div className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {state.output}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
          <Flow step={stepCount} />
          <div className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-[11px] font-semibold text-emerald-800">
            {t.note}
          </div>
        </div>
      </div>
    </div>
  );
}

function Flow({ step }: { step: number }) {
  const layers = [
    { name: "Output layer", color: "bg-sky-100 text-sky-800" },
    { name: "Hidden layer", color: "bg-indigo-100 text-indigo-800" },
    { name: "Input layer", color: "bg-slate-100 text-slate-800" },
  ];
  return (
    <div className="grid gap-2">
      {layers.map((layer, idx) => (
        <div key={layer.name} className="rounded-lg bg-white px-3 py-2 shadow-sm">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-slate-600">
            <span>{layer.name}</span>
            <span className={["rounded-full px-2 py-0.5 text-[10px] font-bold", layer.color].join(" ")}>
              {idx === 0
                ? step >= 0
                  ? "gradient ready"
                  : "pending"
                : idx === 1
                  ? step >= 2
                    ? "updated"
                    : "waiting"
                  : step >= 4
                    ? "updated"
                    : "waiting"}
            </span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
              style={{ width: `${Math.min(100, (step + 1) * (idx === 0 ? 20 : idx === 1 ? 15 : 10))}%` }}
              aria-hidden
            />
          </div>
        </div>
      ))}
    </div>
  );
}
