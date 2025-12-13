import { useMemo, useState } from "react";

type OverfitBalanceDemoProps = {
  lang: "en" | "zh";
};

export function OverfitBalanceDemo({ lang }: OverfitBalanceDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：平衡模型复杂度与数据量",
          desc: "调整模型复杂度与样本数量，查看过拟合或欠拟合风险。",
          reset: "重置",
          complexity: "模型复杂度",
          data: "数据量",
          status: "状态",
          under: "欠拟合：模型太简单，连主要模式都没学到。",
          balanced: "恰当：复杂度匹配数据，泛化更好。",
          over: "过拟合：模型太灵活，容易记住噪声。",
        }
      : {
          goal: "Goal: Balance model capacity and data",
          desc: "Tune model complexity and sample size to see under/overfitting risk.",
          reset: "Reset",
          complexity: "Model complexity",
          data: "Data size",
          status: "Status",
          under: "Underfitting: too simple to capture real patterns.",
          balanced: "Balanced: capacity matches data, better generalization.",
          over: "Overfitting: memorizes noise when too flexible.",
        };

  const [complexity, setComplexity] = useState(40);
  const [dataSize, setDataSize] = useState(60);

  const status = useMemo(() => {
    const ratio = complexity - dataSize;
    if (ratio < -15) return { label: t.under, color: "bg-amber-100 text-amber-800" };
    if (ratio > 15) return { label: t.over, color: "bg-rose-100 text-rose-700" };
    return { label: t.balanced, color: "bg-emerald-100 text-emerald-700" };
  }, [complexity, dataSize, t.balanced, t.over, t.under]);

  const reset = () => {
    setComplexity(40);
    setDataSize(60);
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
          <Slider label={t.complexity} value={complexity} onChange={setComplexity} />
          <Slider label={t.data} value={dataSize} onChange={setDataSize} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
            <span>{t.status}</span>
            <span className="text-slate-900">
              C:{complexity} / D:{dataSize}
            </span>
          </div>
          <div className="mt-2 rounded-lg bg-white px-3 py-2 shadow-sm">
            <div className={`rounded-full px-3 py-2 text-xs font-semibold ${status.color}`}>
              {status.label}
            </div>
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
};

function Slider({ label, value, onChange }: SliderProps) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-brand-500"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      />
      <span className="text-xs text-slate-500">{value}</span>
    </label>
  );
}
