import { useMemo, useState } from "react";

type SymbolicVsNeuralDemoProps = {
  lang: "en" | "zh";
};

export function SymbolicVsNeuralDemo({ lang }: SymbolicVsNeuralDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：对比符号方法与神经网络",
          desc: "调节任务开放度与数据量，查看更适合的范式与优缺点。",
          reset: "重置",
          openness: "任务开放度",
          data: "数据可得性",
          pick: "推荐范式",
          symbolic: "符号方法：需严格知识，擅长封闭推理，计算量大。",
          neural: "神经网络：数据驱动，能处理不确定/连续空间，需大量数据与算力。",
        }
      : {
          goal: "Goal: Compare symbolic methods vs. neural nets",
          desc: "Adjust task openness and data availability to see which paradigm fits and why.",
          reset: "Reset",
          openness: "Task openness",
          data: "Data availability",
          pick: "Suggested paradigm",
          symbolic: "Symbolic: needs precise knowledge, good for closed reasoning, can be compute-heavy.",
          neural: "Neural: data-driven, handles uncertainty/continuous spaces, needs plenty of data/compute.",
        };

  const [openness, setOpenness] = useState(30);
  const [data, setData] = useState(40);

  const choice = useMemo(() => {
    const score = openness * 0.6 + data * 0.4;
    return score > 50 ? "neural" : "symbolic";
  }, [data, openness]);

  const reset = () => {
    setOpenness(30);
    setData(40);
  };

  const detail = choice === "symbolic" ? t.symbolic : t.neural;

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
          <Slider label={t.openness} value={openness} onChange={setOpenness} />
          <Slider label={t.data} value={data} onChange={setData} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.pick}</p>
          <div className="mt-1 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {choice === "symbolic" ? (lang === "zh" ? "符号方法" : "Symbolic") : lang === "zh" ? "神经网络" : "Neural"}
          </div>
          <p className="mt-2 text-xs text-slate-600">{detail}</p>
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
