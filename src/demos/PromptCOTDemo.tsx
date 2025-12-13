import { useMemo, useState } from "react";

type PromptCOTDemoProps = {
  lang: "en" | "zh";
};

export function PromptCOTDemo({ lang }: PromptCOTDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：提示、少样本与 CoT 如何提升推理",
          desc: "切换“提供示例”和“展示推理链”，查看回答质量变化。",
          reset: "重置",
          examples: "提供示例 (Few-shot)",
          cot: "展示推理链 (CoT)",
          quality: "回答质量（模拟）",
          answer: "模型回答",
          base: "直接回答：42",
          few: "根据示例：比基准更合理的数值。",
          cotAns: "先分步求解，再给答案。",
        }
      : {
          goal: "Goal: See prompts, few-shot, and CoT boost reasoning",
          desc: "Toggle “examples” and “chain of thought” to see answer quality change.",
          reset: "Reset",
          examples: "Provide examples (few-shot)",
          cot: "Show chain of thought (CoT)",
          quality: "Answer quality (simulated)",
          answer: "Model answer",
          base: "Direct answer: 42",
          few: "Example-guided: more reasonable number.",
          cotAns: "Step-by-step reasoning then answer.",
        };

  const [few, setFew] = useState(true);
  const [cot, setCot] = useState(true);

  const quality = useMemo(() => {
    let score = 50;
    if (few) score += 20;
    if (cot) score += 25;
    return Math.min(100, score);
  }, [cot, few]);

  const answer = useMemo(() => {
    if (cot && few) return lang === "zh" ? "分步推理：先算部分，最终答案 7。" : "Chain: compute parts → final answer 7.";
    if (cot) return lang === "zh" ? "分步推理，得到更可信答案。" : "Reasoned steps yield a more reliable answer.";
    if (few) return lang === "zh" ? t.few : t.few;
    return lang === "zh" ? t.base : t.base;
  }, [cot, few, lang, t.base, t.few]);

  const reset = () => {
    setFew(true);
    setCot(true);
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
        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <Toggle label={t.examples} value={few} onChange={setFew} />
          <Toggle label={t.cot} value={cot} onChange={setCot} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Metric label={t.quality} value={quality} />
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-600">{t.answer}</p>
          <div className="mt-1 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">{answer}</div>
        </div>
      </div>
    </div>
  );
}

type ToggleProps = {
  label: string;
  value: boolean;
  onChange: (val: boolean) => void;
};

function Toggle({ label, value, onChange }: ToggleProps) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm">
      <span className="text-sm font-semibold">{label}</span>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-brand-500"
      />
    </label>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
          style={{ width: `${value}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
