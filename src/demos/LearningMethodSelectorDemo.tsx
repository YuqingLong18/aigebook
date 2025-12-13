import { useMemo, useState } from "react";

type LearningMethodSelectorDemoProps = {
  lang: "en" | "zh";
};

export function LearningMethodSelectorDemo({ lang }: LearningMethodSelectorDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：为场景选择合适的学习方式",
          desc: "标注是否有标签、环境反馈、是否多步决策，查看推荐方法。",
          reset: "重置",
          labels: "有标签数据",
          feedback: "有环境奖励/反馈",
          steps: "需要多步决策",
          suggestion: "推荐方法",
        }
      : {
          goal: "Goal: Pick the right learning mode for a scenario",
          desc: "Toggle label availability, feedback, and multi-step decisions to see a recommendation.",
          reset: "Reset",
          labels: "Labeled data available",
          feedback: "Environmental reward/feedback",
          steps: "Multi-step decisions needed",
          suggestion: "Suggested method",
        };

  const [hasLabels, setHasLabels] = useState(true);
  const [hasFeedback, setHasFeedback] = useState(false);
  const [multiStep, setMultiStep] = useState(false);

  const suggestion = useMemo(() => {
    if (hasFeedback || multiStep) {
      return lang === "zh" ? "强化学习：利用奖励信号优化策略。" : "Reinforcement learning: optimize policy via rewards.";
    }
    if (hasLabels) {
      return lang === "zh" ? "监督学习：用标签指引分类或回归。" : "Supervised learning: labels guide classification/regression.";
    }
    return lang === "zh"
      ? "无监督学习：无标签时用聚类/降维挖掘结构。"
      : "Unsupervised learning: cluster or reduce dimensions without labels.";
  }, [hasFeedback, hasLabels, lang, multiStep]);

  const reset = () => {
    setHasLabels(true);
    setHasFeedback(false);
    setMultiStep(false);
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
        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800">
          <Toggle label={t.labels} value={hasLabels} onChange={setHasLabels} />
          <Toggle label={t.feedback} value={hasFeedback} onChange={setHasFeedback} />
          <Toggle label={t.steps} value={multiStep} onChange={setMultiStep} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.suggestion}</p>
          <div className="mt-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {suggestion}
          </div>
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
