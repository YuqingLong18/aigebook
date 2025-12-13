import { useMemo, useState } from "react";

type FruitBoundaryDemoProps = {
  lang: "en" | "zh";
};

type Sample = {
  id: string;
  color: number;
  size: number;
  label: 0 | 1; // 1 apple, 0 orange
};

const samples: Sample[] = [
  { id: "A1", color: 0.9, size: 0.82, label: 1 },
  { id: "A2", color: 0.86, size: 0.76, label: 1 },
  { id: "A3", color: 0.8, size: 0.7, label: 1 },
  { id: "O1", color: 0.55, size: 0.55, label: 0 },
  { id: "O2", color: 0.48, size: 0.52, label: 0 },
  { id: "O3", color: 0.42, size: 0.48, label: 0 },
];

export function FruitBoundaryDemo({ lang }: FruitBoundaryDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：用线性模型区分苹果与橙子",
          desc: "调整颜色与大小的权重，查看模型输出和准确率。",
          reset: "重置",
          colorW: "颜色权重 a",
          sizeW: "大小权重 b",
          bias: "偏置 c",
          accuracy: "训练集准确率",
          apple: "苹果",
          orange: "橙子",
          output: "模型输出",
        }
      : {
          goal: "Goal: Linear boundary for apples vs oranges",
          desc: "Adjust weights on color and size to see the model output and accuracy.",
          reset: "Reset",
          colorW: "Color weight a",
          sizeW: "Size weight b",
          bias: "Bias c",
          accuracy: "Train accuracy",
          apple: "Apple",
          orange: "Orange",
          output: "Model output",
        };

  const [a, setA] = useState(4);
  const [b, setB] = useState(2);
  const [c, setC] = useState(-3);

  const predictions = useMemo(() => {
    return samples.map((s) => {
      const y = a * s.color + b * s.size + c;
      const prob = 1 / (1 + Math.exp(-y));
      const pred = prob >= 0.5 ? 1 : 0;
      return { ...s, prob, pred };
    });
  }, [a, b, c]);

  const accuracy =
    Math.round(
      (predictions.filter((p) => p.pred === p.label).length / predictions.length) * 100,
    ) || 0;

  const reset = () => {
    setA(4);
    setB(2);
    setC(-3);
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
          <WeightSlider label={t.colorW} value={a} onChange={setA} min={-6} max={6} />
          <WeightSlider label={t.sizeW} value={b} onChange={setB} min={-6} max={6} />
          <WeightSlider label={t.bias} value={c} onChange={setC} min={-8} max={2} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {t.accuracy}: <span className="text-slate-900">{accuracy}%</span>
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] font-semibold uppercase text-slate-500">
            <span>ID</span>
            <span>{t.output}</span>
            <span>{lang === "zh" ? "预测/真值" : "Pred / True"}</span>
          </div>
          <div className="mt-1 space-y-1">
            {predictions.map((p) => (
              <div
                key={p.id}
                className="grid grid-cols-3 items-center rounded-lg bg-white px-3 py-2 text-xs shadow-sm"
              >
                <span className="font-semibold text-slate-900">{p.id}</span>
                <span className="font-semibold text-slate-700">{p.prob.toFixed(2)}</span>
                <span
                  className={[
                    "flex items-center justify-between rounded-full px-2 py-1 text-[10px] font-bold",
                    p.pred === p.label ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700",
                  ].join(" ")}
                >
                  <span>{p.pred === 1 ? t.apple : t.orange}</span>
                  <span className="text-slate-500">/</span>
                  <span>{p.label === 1 ? t.apple : t.orange}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type WeightSliderProps = {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
};

function WeightSlider({ label, value, onChange, min, max }: WeightSliderProps) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="range"
        min={min}
        max={max}
        step={0.5}
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
