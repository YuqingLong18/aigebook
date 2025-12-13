import { useState } from "react";

type Milestone = "deepblue" | "stanley" | "watson" | "alexnet" | "alphago";

type MilestoneSpotlightDemoProps = {
  lang: "en" | "zh";
};

export function MilestoneSpotlightDemo({ lang }: MilestoneSpotlightDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：回顾关键里程碑",
          desc: "选择事件，查看时间、方法与影响。",
          reset: "重置",
        }
      : {
          goal: "Goal: Recall major AI milestones",
          desc: "Pick an event to see the year, method, and impact.",
          reset: "Reset",
        };

  const [pick, setPick] = useState<Milestone>("deepblue");

  const detail = getDetail(pick, lang);

  const reset = () => setPick("deepblue");

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
        <div className="grid grid-cols-2 gap-2">
          {(["deepblue", "stanley", "watson", "alexnet", "alphago"] as Milestone[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setPick(m)}
              className={[
                "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                pick === m ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {label(m, lang)}
            </button>
          ))}
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{detail.title}</p>
          <p>{detail.method}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {lang === "zh" ? "影响" : "Impact"}
          </p>
          <p>{detail.impact}</p>
        </div>
      </div>
    </div>
  );
}

function getDetail(m: Milestone, lang: "en" | "zh") {
  const en = {
    deepblue: {
      title: "1997 · Deep Blue vs. Kasparov",
      method: "Massive search + evaluation on specialized hardware.",
      impact: "Showed machines can surpass humans in rule-based games; renewed AI interest.",
    },
    stanley: {
      title: "2005 · DARPA Challenge (Stanley)",
      method: "Sensors + ML for perception, planning across 132-mile course.",
      impact: "Catalyzed autonomous driving research.",
    },
    watson: {
      title: "2011 · IBM Watson on Jeopardy!",
      method: "Parallel search, NLP, confidence scoring over large knowledge base.",
      impact: "Highlighted advances in language QA and large-scale systems.",
    },
    alexnet: {
      title: "2012 · AlexNet (ImageNet)",
      method: "8-layer CNN with ReLU, dropout, GPU training.",
      impact: "Cut error by 10%; ignited deep learning in vision.",
    },
    alphago: {
      title: "2016 · AlphaGo vs. Lee Sedol",
      method: "Deep policy/value nets + Monte Carlo search; self-play.",
      impact: "Proved deep RL can master complex strategy; expanded public awe.",
    },
  };
  const zh = {
    deepblue: {
      title: "1997 · 深蓝击败卡斯帕罗夫",
      method: "大规模搜索+评估，专用硬件。",
      impact: "证明机器可在规则游戏超越人类，重燃 AI 兴趣。",
    },
    stanley: {
      title: "2005 · DARPA 无人车挑战赛（Stanley）",
      method: "多传感器 + 机器学习感知与规划，跑完 132 英里。",
      impact: "催化自动驾驶研究。",
    },
    watson: {
      title: "2011 · IBM Watson 赢得 Jeopardy!",
      method: "并行检索、自然语言处理、置信度评分，庞大知识库。",
      impact: "展示语言问答与大规模系统的进步。",
    },
    alexnet: {
      title: "2012 · AlexNet（ImageNet）",
      method: "8 层卷积网络，ReLU、dropout，GPU 训练。",
      impact: "错误率下降 10%，点燃视觉深度学习浪潮。",
    },
    alphago: {
      title: "2016 · AlphaGo 战胜李世石",
      method: "深度策略/价值网络 + 蒙特卡洛搜索，自我博弈训练。",
      impact: "深度强化学习攻克复杂博弈，引发广泛震撼。",
    },
  };
  return lang === "zh" ? zh[m] : en[m];
}

function label(m: Milestone, lang: "en" | "zh") {
  const map = {
    deepblue: lang === "zh" ? "深蓝" : "Deep Blue",
    stanley: lang === "zh" ? "Stanley" : "Stanley",
    watson: lang === "zh" ? "Watson" : "Watson",
    alexnet: lang === "zh" ? "AlexNet" : "AlexNet",
    alphago: lang === "zh" ? "AlphaGo" : "AlphaGo",
  };
  return map[m];
}
