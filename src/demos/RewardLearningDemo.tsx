import { useMemo, useState } from "react";

type RewardLearningDemoProps = {
  lang: "en" | "zh";
};

export function RewardLearningDemo({ lang }: RewardLearningDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：奖励信号如何塑造学习",
          desc: "调整奖励强度和反馈频率，查看学习效果示意。",
          reset: "重置",
          reward: "奖励强度",
          feedback: "反馈频率",
          performance: "学习效果（模拟）",
          note:
            "奖励越明确、反馈越及时，学习越快。图灵早期提出用奖励/惩罚训练机器，奠定强化学习思想。",
        }
      : {
          goal: "Goal: How rewards shape learning",
          desc: "Adjust reward strength and feedback frequency to see simulated learning performance.",
          reset: "Reset",
          reward: "Reward strength",
          feedback: "Feedback frequency",
          performance: "Learning performance (toy)",
          note:
            "Clearer rewards and faster feedback speed up learning. Turing proposed reward/punishment for machines—an early reinforcement-learning idea.",
        };

  const [reward, setReward] = useState(60);
  const [freq, setFreq] = useState(50);

  const performance = useMemo(() => Math.min(100, Math.round(reward * 0.7 + freq * 0.6)), [freq, reward]);

  const reset = () => {
    setReward(60);
    setFreq(50);
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
          <Slider label={t.reward} value={reward} onChange={setReward} />
          <Slider label={t.feedback} value={freq} onChange={setFreq} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.performance}</p>
          <div className="mt-1 h-2 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
              style={{ width: `${performance}%` }}
              aria-hidden
            />
          </div>
          <p className="mt-2 text-xs text-emerald-800">{t.note}</p>
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
