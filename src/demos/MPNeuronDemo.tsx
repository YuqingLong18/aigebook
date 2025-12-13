import { useMemo, useState } from "react";

type MPNeuronDemoProps = {
  lang: "en" | "zh";
};

export function MPNeuronDemo({ lang }: MPNeuronDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：体验 M-P 神经元的阈值激活",
          desc: "调整权重与阈值，查看二值输入时的输出与逻辑功能。",
          reset: "重置",
          w1: "权重 w1",
          w2: "权重 w2",
          theta: "阈值 θ",
          output: "输出",
          logic: "当前逻辑",
          inputs: "输入组合",
        }
      : {
          goal: "Goal: Explore threshold activation in an M-P neuron",
          desc: "Adjust weights and threshold to see outputs on binary inputs and the realized logic.",
          reset: "Reset",
          w1: "Weight w1",
          w2: "Weight w2",
          theta: "Threshold θ",
          output: "Output",
          logic: "Current logic",
          inputs: "Input pairs",
        };

  const [w1, setW1] = useState(1);
  const [w2, setW2] = useState(1);
  const [theta, setTheta] = useState(1);

  const outputs = useMemo(() => {
    const combos = [
      { x1: 0, x2: 0 },
      { x1: 0, x2: 1 },
      { x1: 1, x2: 0 },
      { x1: 1, x2: 1 },
    ];
    return combos.map((c) => {
      const sum = c.x1 * w1 + c.x2 * w2;
      const y = sum >= theta ? 1 : 0;
      return { ...c, sum, y };
    });
  }, [theta, w1, w2]);

  const logic = useMemo(() => {
    const pattern = outputs.map((o) => o.y).join("");
    switch (pattern) {
      case "0000":
        return lang === "zh" ? "常 0 (OFF)" : "Always 0 (OFF)";
      case "1111":
        return lang === "zh" ? "常 1 (ON)" : "Always 1 (ON)";
      case "0011":
        return lang === "zh" ? "x2" : "x2 pass-through";
      case "0101":
        return lang === "zh" ? "x1" : "x1 pass-through";
      case "0111":
        return lang === "zh" ? "或 (OR)" : "OR";
      case "0001":
        return lang === "zh" ? "与 (AND)" : "AND";
      default:
        return lang === "zh" ? "其他线性可分模式" : "Other separable pattern";
    }
  }, [lang, outputs]);

  const reset = () => {
    setW1(1);
    setW2(1);
    setTheta(1);
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
          <Slider label={t.w1} value={w1} onChange={setW1} />
          <Slider label={t.w2} value={w2} onChange={setW2} />
          <Slider label={t.theta} value={theta} onChange={setTheta} min={0} max={3} step={0.1} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
            <span>{t.inputs}</span>
            <span>{t.logic}: {logic}</span>
          </div>
          <div className="mt-2 space-y-1 text-xs">
            {outputs.map((o, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm"
              >
                <span className="font-semibold text-slate-900">
                  ({o.x1}, {o.x2})
                </span>
                <span className="text-slate-600">
                  Σ={o.sum.toFixed(1)} → y={o.y}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type SliderProps = {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

function Slider({ label, value, onChange, min = -2, max = 2, step = 0.5 }: SliderProps) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-brand-500"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />
      <span className="text-xs text-slate-500">{value.toFixed(1)}</span>
    </label>
  );
}
