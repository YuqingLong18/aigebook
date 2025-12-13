import { useMemo, useState } from "react";

type ComputeFrontierDemoProps = {
  lang: "en" | "zh";
};

type Mode = "digital" | "neuromorphic" | "optical" | "quantum";
type Task = "dense" | "spiking" | "combinatorial";

export function ComputeFrontierDemo({ lang }: ComputeFrontierDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：对比未来计算范式在速度、能效、成熟度上的取舍",
        desc: "调节算力需求，切换计算范式与任务类型，感受能耗与适配度的变化。",
        reset: "重置",
        demand: "算力需求（相对）",
        task: "任务类型",
        dense: "密集矩阵/深度学习",
        spiking: "脉冲/神经形态",
        combinatorial: "组合/搜索",
        mode: "计算范式",
        digital: "数字芯片 (GPU/TPU)",
        neuromorphic: "类脑/神经形态",
        optical: "光计算",
        quantum: "量子计算",
        throughput: "速度",
        energy: "能耗（越低越好）",
        maturity: "成熟度",
        fit: "适配度",
        note:
          "神经形态强调低功耗、接近大脑 20W；光计算用光衍射做矩阵乘，加速且低热；量子计算在特定问题上并行，但目前噪声与适用范围受限；数字芯片成熟但功耗随算力激增。",
      }
    : {
        goal: "Goal: Compare future compute paradigms on speed, energy, and readiness",
        desc: "Adjust compute demand, pick a paradigm and task type to see energy and fitness trade-offs.",
        reset: "Reset",
        demand: "Compute demand (relative)",
        task: "Task type",
        dense: "Dense matrices / deep learning",
        spiking: "Spiking / neuromorphic",
        combinatorial: "Combinatorial / search",
        mode: "Compute paradigm",
        digital: "Digital GPU/TPU",
        neuromorphic: "Neuromorphic",
        optical: "Optical",
        quantum: "Quantum",
        throughput: "Throughput",
        energy: "Energy (lower is better)",
        maturity: "Maturity",
        fit: "Task fit",
        note:
          "Neuromorphic targets brain-like efficiency (~20 W); optical uses light for matrix math (fast, cool); quantum offers parallelism on niche problems but noisy and narrow; digital chips are mature yet power-hungry as demand explodes.",
      };

  const [demand, setDemand] = useState(60);
  const [mode, setMode] = useState<Mode>("digital");
  const [task, setTask] = useState<Task>("dense");

  const metrics = useMemo(() => {
    const d = demand / 100;
    const base = {
      digital: { throughput: 0.55 + d * 0.35, energy: 0.72 + d * 0.2, maturity: 0.92, fit: 0.8 },
      neuromorphic: { throughput: 0.5 + d * 0.25, energy: 0.25 + d * 0.1, maturity: 0.55, fit: 0.6 },
      optical: { throughput: 0.62 + d * 0.3, energy: 0.3 + d * 0.08, maturity: 0.5, fit: 0.55 },
      quantum: { throughput: 0.4 + d * 0.45, energy: 0.45 + d * 0.05, maturity: 0.25, fit: 0.4 },
    } as const;
    const cur = base[mode];

    let taskBoost = 0;
    if (mode === "neuromorphic" && task === "spiking") taskBoost = 0.2;
    if (mode === "optical" && task === "dense") taskBoost = 0.15;
    if (mode === "quantum" && task === "combinatorial") taskBoost = 0.28;
    if (mode === "digital" && task === "dense") taskBoost = 0.12;

    const fit = clamp(cur.fit + taskBoost - (mode === "quantum" && task !== "combinatorial" ? 0.12 : 0), 0, 1);
    return {
      throughput: clamp(cur.throughput, 0, 1),
      energy: clamp(cur.energy, 0, 1),
      maturity: clamp(cur.maturity, 0, 1),
      fit,
    };
  }, [demand, mode, task]);

  const reset = () => {
    setDemand(60);
    setMode("digital");
    setTask("dense");
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
            {t.demand}
            <input
              type="range"
              min={0}
              max={100}
              value={demand}
              onChange={(e) => setDemand(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{demand}</span>
          </label>

          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.task}</p>
          <div className="grid grid-cols-3 gap-2">
            <ToggleButton current={task} target="dense" label={t.dense} onSelect={setTask} />
            <ToggleButton current={task} target="spiking" label={t.spiking} onSelect={setTask} />
            <ToggleButton current={task} target="combinatorial" label={t.combinatorial} onSelect={setTask} />
          </div>

          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.mode}</p>
          <div className="grid grid-cols-2 gap-2">
            <ToggleButton current={mode} target="digital" label={t.digital} onSelect={setMode} />
            <ToggleButton current={mode} target="neuromorphic" label={t.neuromorphic} onSelect={setMode} />
            <ToggleButton current={mode} target="optical" label={t.optical} onSelect={setMode} />
            <ToggleButton current={mode} target="quantum" label={t.quantum} onSelect={setMode} />
          </div>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3">
          <Metric label={t.throughput} value={metrics.throughput} tone="sky" />
          <Metric label={t.energy} value={1 - metrics.energy} tone="emerald" inverse />
          <Metric label={t.maturity} value={metrics.maturity} tone="amber" />
          <Metric label={t.fit} value={metrics.fit} tone="purple" />
          <div className="rounded-lg bg-brand-50/70 px-3 py-2 text-xs text-slate-700">{t.note}</div>
        </div>
      </div>
    </div>
  );
}

function ToggleButton<T extends string>({
  current,
  target,
  label,
  onSelect,
}: {
  current: T;
  target: T;
  label: string;
  onSelect: (val: T) => void;
}) {
  const active = current === target;
  return (
    <button
      type="button"
      onClick={() => onSelect(target)}
      className={[
        "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
        active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-300",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function Metric({
  label,
  value,
  tone,
  inverse = false,
}: {
  label: string;
  value: number;
  tone: "emerald" | "sky" | "amber" | "purple";
  inverse?: boolean;
}) {
  const color =
    tone === "emerald"
      ? "from-emerald-400 to-sky-500"
      : tone === "sky"
        ? "from-sky-400 to-indigo-500"
        : tone === "amber"
          ? "from-amber-400 to-orange-500"
          : "from-purple-400 to-indigo-500";
  const displayValue = inverse ? value : value;
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{Math.round(displayValue * 100)}%</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all`}
          style={{ width: `${Math.min(100, Math.max(0, displayValue * 100))}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}
