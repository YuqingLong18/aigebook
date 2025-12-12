import { useMemo, useState } from "react";

export function SuccessFactorsDemo() {
  const [data, setData] = useState(60);
  const [compute, setCompute] = useState(50);
  const [sharing, setSharing] = useState(70);

  const metrics = useMemo(() => {
    const capability = Math.min(100, Math.round(0.45 * data + 0.4 * compute + 0.3 * sharing));
    const researchSpeed = Math.min(100, Math.round(0.2 * data + 0.2 * compute + 0.6 * sharing));
    return { capability, researchSpeed };
  }, [data, compute, sharing]);

  const reset = () => {
    setData(60);
    setCompute(50);
    setSharing(70);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">Goal: success factors</p>
          <p className="text-xs text-slate-600">
            Explore how big data, computing power, and open-source sharing push deep learning.
          </p>
        </div>
        <button
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          type="button"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-3">
          <FactorSlider label="Big data scale" value={data} setValue={setData} />
          <FactorSlider label="Computing resources" value={compute} setValue={setCompute} />
          <FactorSlider label="Open-source sharing" value={sharing} setValue={setSharing} />
        </div>
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <MetricBar label="Model capability" value={metrics.capability} />
          <MetricBar label="Research speed" value={metrics.researchSpeed} />
          <p className="text-xs text-slate-600">
            As the section notes, modern success stems not only from algorithms but also from data,
            compute, and open access to code, models, and papers.
          </p>
        </div>
      </div>
    </div>
  );
}

type FactorSliderProps = {
  label: string;
  value: number;
  setValue: (v: number) => void;
};

function FactorSlider({ label, value, setValue }: FactorSliderProps) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-1 w-full accent-brand-500"
      />
      <span className="text-xs text-slate-500">Level: {value}</span>
    </label>
  );
}

type MetricBarProps = {
  label: string;
  value: number;
};

function MetricBar({ label, value }: MetricBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
