import { useMemo, useState } from "react";

type TuringTestDemoProps = {
  lang: "en" | "zh";
};

export function TuringTestDemo({ lang }: TuringTestDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：图灵测试判别率示意",
          desc: "调节模型水平和对话时长，查看“被判成人类”的概率。",
          reset: "重置",
          skill: "模型对话水平",
          time: "对话时长（分钟）",
          pass: "通过概率（示意）",
          note:
            "经典设定：若 30% 以上的评审被骗，视为通过。对话水平越高、时间越短，越容易通过。",
        }
      : {
          goal: "Goal: Turing Test pass rate intuition",
          desc: "Adjust model skill and conversation time to see chance of being judged human.",
          reset: "Reset",
          skill: "Model dialogue skill",
          time: "Conversation length (min)",
          pass: "Pass probability (toy)",
          note:
            "Classic rule: if >30% of judges are fooled, it passes. Higher skill and shorter time make passing easier.",
        };

  const [skill, setSkill] = useState(70);
  const [time, setTime] = useState(5);

  const probability = useMemo(() => {
    const base = skill * 0.8 - time * 3 + 20;
    return Math.min(100, Math.max(0, Math.round(base)));
  }, [skill, time]);

  const reset = () => {
    setSkill(70);
    setTime(5);
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
          <Slider label={t.skill} min={0} max={100} value={skill} onChange={setSkill} />
          <Slider label={t.time} min={1} max={10} value={time} onChange={setTime} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.pass}</p>
          <div className="mt-1 h-2 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
              style={{ width: `${probability}%` }}
              aria-hidden
            />
          </div>
          <p className="mt-2 text-xs text-slate-600">{t.note}</p>
        </div>
      </div>
    </div>
  );
}

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (val: number) => void;
};

function Slider({ label, value, min, max, onChange }: SliderProps) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-brand-500"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />
      <span className="text-xs text-slate-500">{value}</span>
    </label>
  );
}
