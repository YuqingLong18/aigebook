import { useMemo, useState } from "react";

type SynapticPruningDemoProps = {
  lang: "en" | "zh";
};

export function SynapticPruningDemo({ lang }: SynapticPruningDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：观察突触修剪带来的效率提升",
          desc: "调节年龄与使用频率，查看连接数量、有效连接和整体效率。",
          reset: "重置",
          age: "年龄",
          usage: "连接使用频率",
          total: "总连接数",
          effective: "有效连接",
          efficiency: "信息处理效率（模拟）",
          note:
            "婴儿期连接密集但冗余，随着学习，不常用的连接被修剪，留下更高效的通路。人工神经网络的参数更新类似于“强化有用连接，弱化无用连接”。",
        }
      : {
          goal: "Goal: See how synaptic pruning boosts efficiency",
          desc: "Adjust age and usage frequency to view connection count, effective links, and overall efficiency.",
          reset: "Reset",
          age: "Age",
          usage: "Connection usage frequency",
          total: "Total connections",
          effective: "Effective connections",
          efficiency: "Processing efficiency (simulated)",
          note:
            "Infants have dense but redundant links; learning prunes unused ones, leaving efficient pathways. Neural network training similarly strengthens useful connections and weakens the rest.",
        };

  const [age, setAge] = useState(4);
  const [usage, setUsage] = useState(50);

  const metrics = useMemo(() => {
    const totalConnections = Math.round(200 - age * 10 + 50);
    const pruneFactor = Math.min(0.8, Math.max(0.2, usage / 120));
    const effectiveConnections = Math.round(totalConnections * pruneFactor);
    const efficiency = Math.round(effectiveConnections * 0.6 + usage * 0.8);
    return { totalConnections, effectiveConnections, efficiency };
  }, [age, usage]);

  const reset = () => {
    setAge(4);
    setUsage(50);
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
            {t.age}
            <input
              type="range"
              min={0}
              max={20}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={20}
              aria-valuenow={age}
            />
            <span className="text-xs text-slate-500">{age}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.usage}
            <input
              type="range"
              min={0}
              max={100}
              value={usage}
              onChange={(e) => setUsage(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={usage}
            />
            <span className="text-xs text-slate-500">{usage}</span>
          </label>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs text-slate-700">
          <MetricRow label={t.total} value={metrics.totalConnections} />
          <MetricRow label={t.effective} value={metrics.effectiveConnections} />
          <MetricRow label={t.efficiency} value={metrics.efficiency} highlight />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
      </div>
    </div>
  );
}

type MetricRowProps = {
  label: string;
  value: number;
  highlight?: boolean;
};

function MetricRow({ label, value, highlight }: MetricRowProps) {
  const widthPercent = Math.min(100, Math.max(0, value / 3));
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-slate-600">
        <span>{label}</span>
        <span className={highlight ? "text-emerald-700" : "text-slate-900"}>{value}</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all"
          style={{ width: `${widthPercent}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
