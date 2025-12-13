import { useMemo, useState } from "react";

type IntelligenceSpectrumDemoProps = {
  lang: "en" | "zh";
};

export function IntelligenceSpectrumDemo({ lang }: IntelligenceSpectrumDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：区分自动化、智能机器与人工智能",
          desc: "调节“自动化程度”和“计算/学习程度”，查看归类与示例。",
          reset: "重置",
          automation: "自动化程度",
          compute: "计算/学习程度",
          classLabel: "分类",
          examples: "典型示例",
          automationOnly: "机械/电气自动化设备（如机械臂、传送带）",
          smartMachine: "智能机器（含部分规则/控制，如洗碗机、简单巡检机器人）",
          ai: "人工智能（计算驱动，具学习/推理，如语音助手、对话大模型）",
        }
      : {
          goal: "Goal: Tell automation, smart machines, and AI apart",
          desc: "Adjust automation and computation/learning to see the category and examples.",
          reset: "Reset",
          automation: "Automation level",
          compute: "Computation/Learning level",
          classLabel: "Category",
          examples: "Examples",
          automationOnly: "Mechanical/electrical automation (e.g., conveyor, basic robot arm)",
          smartMachine: "Smart machine (some control/logic, e.g., dishwasher, patrol robot)",
          ai: "Artificial intelligence (compute-driven learning/reasoning, e.g., voice assistants, LLMs)",
        };

  const [automation, setAutomation] = useState(40);
  const [compute, setCompute] = useState(30);

  const category = useMemo(() => {
    if (compute < 30) return { label: lang === "zh" ? "自动化设备" : "Automation", detail: t.automationOnly };
    if (compute < 60) return { label: lang === "zh" ? "智能机器" : "Smart Machine", detail: t.smartMachine };
    return { label: lang === "zh" ? "人工智能" : "Artificial Intelligence", detail: t.ai };
  }, [compute, lang, t.ai, t.automationOnly, t.smartMachine]);

  const reset = () => {
    setAutomation(40);
    setCompute(30);
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
          <Slider label={t.automation} value={automation} onChange={setAutomation} />
          <Slider label={t.compute} value={compute} onChange={setCompute} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.classLabel}</p>
          <div className="mt-1 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {category.label}
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-600">{t.examples}</p>
          <p className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm">{category.detail}</p>
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
