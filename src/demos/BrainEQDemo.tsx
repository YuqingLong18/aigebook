import { useMemo, useState } from "react";

type BrainEQDemoProps = {
  lang: "en" | "zh";
};

export function BrainEQDemo({ lang }: BrainEQDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：脑体比与智力的关系（EQ 示意）",
          desc: "调节体重，查看预期脑重、实际脑重与 EQ。",
          reset: "重置",
          body: "体重（kg）",
          actual: "假设脑重（kg）",
          eq: "EQ（脑重/期望脑重）",
          note:
            "EQ 越高，表示超出身体需求的脑容量越多，可用于高级认知。人类 EQ 高于多数动物。",
        }
      : {
          goal: "Goal: Brain-to-body and EQ intuition",
          desc: "Adjust body weight to see expected brain weight, assumed brain weight, and EQ.",
          reset: "Reset",
          body: "Body weight (kg)",
          actual: "Assumed brain weight (kg)",
          eq: "EQ (brain / expected)",
          note:
            "Higher EQ means more brain mass beyond basic control needs, enabling higher cognition. Humans rank near the top.",
        };

  const [body, setBody] = useState(60);

  const metrics = useMemo(() => {
    const expected = Math.pow(body, 0.66) * 0.012; // rough scaling
    const actual = 1.4;
    const eq = actual / expected;
    return {
      expected: Number(expected.toFixed(2)),
      actual: actual,
      eq: Number(eq.toFixed(2)),
    };
  }, [body]);

  const reset = () => setBody(60);

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
        <div>
          <label className="block text-sm font-semibold text-slate-700">
            {t.body}
            <input
              type="range"
              min={20}
              max={120}
              value={body}
              onChange={(e) => setBody(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={20}
              aria-valuemax={120}
              aria-valuenow={body}
            />
            <span className="text-xs text-slate-500">{body} kg</span>
          </label>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Metric label={lang === "zh" ? "预期脑重" : "Expected brain"} value={metrics.expected} suffix=" kg" />
          <Metric label={t.actual} value={metrics.actual} suffix=" kg" />
          <Metric label={t.eq} value={metrics.eq} />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
      </div>
    </div>
  );
}

function Metric({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
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
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
          style={{ width: `${Math.min(100, value * 15)}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
