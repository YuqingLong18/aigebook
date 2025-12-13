import { useMemo, useState } from "react";

type FluidCrystalDemoProps = {
  lang: "en" | "zh";
};

export function FluidCrystalDemo({ lang }: FluidCrystalDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：流体智力与晶体智力的协同",
          desc: "调节年龄与知识积累，观察两类智力的变化以及综合问题解决力。",
          reset: "重置",
          ageLabel: "年龄（岁）",
          studyLabel: "知识积累（近一年阅读/练习强度）",
          fluid: "流体智力（快速理解、新问题能力）",
          crystal: "晶体智力（经验与知识广度）",
          combined: "综合问题解决力（模拟）",
          note:
            "流体智力在成年后逐渐下降，但晶体智力会随着经验累积提升。知识型 AI 偏向“晶体智力”，而学习型 AI 追求让模型持续获得两种能力。",
        }
      : {
          goal: "Goal: Fluid vs. crystallized intelligence",
          desc: "Adjust age and recent study intensity to see how fluid and crystallized intelligence shift and combine.",
          reset: "Reset",
          ageLabel: "Age",
          studyLabel: "Knowledge buildup (recent reading/practice)",
          fluid: "Fluid intelligence (novel problem solving)",
          crystal: "Crystallized intelligence (knowledge breadth)",
          combined: "Overall problem-solving (simulated)",
          note:
            "Fluid intelligence tapers after adulthood, while crystallized intelligence keeps climbing with experience. Knowledge-based AI leans on crystallized strength; learning-based AI aims to expand both.",
        };

  const [age, setAge] = useState(18);
  const [study, setStudy] = useState(4);

  const metrics = useMemo(() => {
    const fluidPeakAge = 24;
    const fluid = Math.max(
      25,
      Math.round(100 - Math.max(0, age - fluidPeakAge) * 1.2 + (fluidPeakAge - age) * 0.6),
    );
    const crystal = Math.min(100, Math.round(25 + age * 0.9 + study * 6));
    const combined = Math.round(fluid * 0.45 + crystal * 0.55);
    return { fluid, crystal, combined };
  }, [age, study]);

  const reset = () => {
    setAge(18);
    setStudy(4);
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

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.ageLabel}
            <input
              type="range"
              min={10}
              max={70}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={10}
              aria-valuemax={70}
              aria-valuenow={age}
            />
            <span className="text-xs text-slate-500">{age}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.studyLabel}
            <input
              type="range"
              min={0}
              max={10}
              value={study}
              onChange={(e) => setStudy(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={10}
              aria-valuenow={study}
            />
            <span className="text-xs text-slate-500">{study.toFixed(1)}</span>
          </label>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <MetricRow label={t.fluid} value={metrics.fluid} />
          <MetricRow label={t.crystal} value={metrics.crystal} />
          <MetricRow label={t.combined} value={metrics.combined} highlight />
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
  const widthPercent = Math.min(100, Math.max(0, value));
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <span className={highlight ? "text-emerald-700" : "text-slate-800"}>{value}</span>
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
