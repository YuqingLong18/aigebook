import { useMemo, useState } from "react";

type SchoolChooserDemoProps = {
  lang: "en" | "zh";
};

type Choice = {
  name: string;
  score: number;
};

export function SchoolChooserDemo({ lang }: SchoolChooserDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：根据场景匹配四大学派",
          desc: "调节数据量、知识可用度、不确定性，查看更适合的学派。",
          reset: "重置",
          data: "数据量",
          knowledge: "可用领域知识",
          uncertainty: "不确定性程度",
          pick: "推荐学派",
        }
      : {
          goal: "Goal: Match a task to one of the four ML schools",
          desc: "Adjust data availability, domain knowledge, and uncertainty to see which school fits better.",
          reset: "Reset",
          data: "Data volume",
          knowledge: "Available domain knowledge",
          uncertainty: "Uncertainty level",
          pick: "Suggested school",
        };

  const [data, setData] = useState(60);
  const [knowledge, setKnowledge] = useState(40);
  const [uncertainty, setUncertainty] = useState(50);

  const recommendation = useMemo(() => {
    const symbolicScore = knowledge * 0.6 + (100 - data) * 0.2 - uncertainty * 0.1;
    const bayesScore = uncertainty * 0.5 + knowledge * 0.3 + data * 0.2;
    const connectionScore = data * 0.6 - knowledge * 0.1 - uncertainty * 0.1;
    const evoScore = uncertainty * 0.4 + data * 0.2 + 20;

    const options: Choice[] = [
      { name: lang === "zh" ? "符号学派" : "Symbolic", score: symbolicScore },
      { name: lang === "zh" ? "贝叶斯学派" : "Bayesian", score: bayesScore },
      { name: lang === "zh" ? "联结学派" : "Connectionist", score: connectionScore },
      { name: lang === "zh" ? "进化学派" : "Evolutionary", score: evoScore },
    ];

    const best = options.sort((a, b) => b.score - a.score)[0];
    return { best: best.name, options };
  }, [data, knowledge, lang, uncertainty]);

  const reset = () => {
    setData(60);
    setKnowledge(40);
    setUncertainty(50);
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
          <Slider label={t.data} value={data} onChange={setData} />
          <Slider label={t.knowledge} value={knowledge} onChange={setKnowledge} />
          <Slider label={t.uncertainty} value={uncertainty} onChange={setUncertainty} />
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.pick}</p>
          <div className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {recommendation.best}
          </div>
          <div className="space-y-1 text-xs">
            {recommendation.options.map((opt) => (
              <div
                key={opt.name}
                className="flex items-center justify-between rounded-md bg-white px-3 py-1 shadow-sm"
              >
                <span>{opt.name}</span>
                <span className="font-semibold text-slate-900">{Math.round(opt.score)}</span>
              </div>
            ))}
          </div>
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
