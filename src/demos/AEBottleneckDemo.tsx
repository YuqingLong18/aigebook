import { useMemo, useState } from "react";

type AEBottleneckDemoProps = {
  lang: "en" | "zh";
};

export function AEBottleneckDemo({ lang }: AEBottleneckDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：体验自编码器瓶颈的压缩与重构",
          desc: "调整瓶颈维度，查看重构误差和特征保留度。",
          reset: "重置",
          bottleneck: "瓶颈维度",
          error: "重构误差（模拟）",
          retained: "保留特征比例",
          note:
            "瓶颈越小，压缩越强，重构误差可能上升；合适的瓶颈可提取关键信息并去掉冗余。",
        }
      : {
          goal: "Goal: See bottleneck compression and reconstruction in an AE",
          desc: "Adjust bottleneck size to view simulated reconstruction error and retained features.",
          reset: "Reset",
          bottleneck: "Bottleneck dimension",
          error: "Reconstruction error (toy)",
          retained: "Retained features",
          note:
            "Smaller bottlenecks force stronger compression and can raise error; a balanced size keeps key info while dropping redundancy.",
        };

  const [dim, setDim] = useState(4);

  const metrics = useMemo(() => {
    const error = Math.max(2, Math.abs(6 - dim) * 1.6);
    const retained = Math.max(10, Math.min(100, 15 * dim));
    return { error: Number(error.toFixed(1)), retained: Number(retained.toFixed(0)) };
  }, [dim]);

  const reset = () => setDim(4);

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
            {t.bottleneck}
            <input
              type="range"
              min={2}
              max={12}
              value={dim}
              onChange={(e) => setDim(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={2}
              aria-valuemax={12}
              aria-valuenow={dim}
            />
            <span className="text-xs text-slate-500">{dim}</span>
          </label>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Metric label={t.error} value={metrics.error} max={12} />
          <Metric label={t.retained} value={metrics.retained} max={100} suffix="%" />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
      </div>
    </div>
  );
}

type MetricProps = {
  label: string;
  value: number;
  max: number;
  suffix?: string;
};

function Metric({ label, value, max, suffix = "" }: MetricProps) {
  const width = Math.min(100, Math.round((value / max) * 100));
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">
          {value}
          {suffix}
        </span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-500 transition-all"
          style={{ width: `${width}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
