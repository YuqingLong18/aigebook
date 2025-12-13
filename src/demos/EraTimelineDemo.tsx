import { useMemo, useState } from "react";

type Era = "golden" | "winter1" | "boom2" | "winter2";

type EraTimelineDemoProps = {
  lang: "en" | "zh";
};

export function EraTimelineDemo({ lang }: EraTimelineDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：梳理早期 AI 的兴衰周期",
          desc: "选择阶段，查看时间、代表事件、主导方法与关键反思。",
          reset: "重置",
        }
      : {
          goal: "Goal: Trace early AI booms and winters",
          desc: "Pick a phase to see timeline, highlights, dominant methods, and reflections.",
          reset: "Reset",
        };

  const [era, setEra] = useState<Era>("golden");

  const info = useMemo(() => {
    const base = {
      golden: {
        title: lang === "zh" ? "黄金十年 (1956–1974)" : "Golden Decade (1956–1974)",
        events:
          lang === "zh"
            ? "定理证明、ELIZA、感知机；AI 研究中心成立，资金充足。"
            : "Theorem proving, ELIZA, perceptron; AI labs launched with generous funding.",
        method: lang === "zh" ? "符号方法 + 初期神经网络" : "Symbolic methods + early neural nets",
        reflection: lang === "zh" ? "乐观高涨，低估任务难度。" : "High optimism, tasks underestimated.",
      },
      winter1: {
        title: lang === "zh" ? "第一次寒冬 (1974–1980)" : "First Winter (1974–1980)",
        events:
          lang === "zh"
            ? "符号方法计算量大难扩展；感知机被证明只能处理线性可分。"
            : "Symbolic methods hit scalability limits; perceptron shown to solve only linearly separable tasks.",
        method: lang === "zh" ? "符号方法受挫，神经网络停滞" : "Symbolic stalled; neural nets paused",
        reflection: lang === "zh" ? "过度乐观，缺少数据与算力支撑。" : "Over-optimism, lacking data/compute.",
      },
      boom2: {
        title: lang === "zh" ? "第二次热潮 (1980–1987)" : "Second Boom (1980–1987)",
        events:
          lang === "zh"
            ? "专家系统兴起；BP 让多层感知机可训练，手写识别等取得进展。"
            : "Expert systems rise; BP enables MLP training, progress in handwriting recognition.",
        method: lang === "zh" ? "知识工程 + 反向传播神经网络" : "Knowledge engineering + BP neural nets",
        reflection: lang === "zh" ? "聚焦领域知识，方法更务实。" : "Domain focus; more pragmatic methods.",
      },
      winter2: {
        title: lang === "zh" ? "第二次寒冬 (1987–1993)" : "Second Winter (1987–1993)",
        events:
          lang === "zh"
            ? "专家系统知识库昂贵；第五代计划失败；Brooks 反思符号逻辑。"
            : "Expert systems costly; Fifth Generation failed; Brooks questioned symbolic logic.",
        method: lang === "zh" ? "符号+专家系统受质疑，行动主义兴起" : "Symbolic/expert systems questioned; behavior-based ideas emerge",
        reflection: lang === "zh" ? "维护难、成本高，促使探索新路径。" : "Maintenance cost drove search for new paths.",
      },
    };
    return base[era];
  }, [era, lang]);

  const reset = () => setEra("golden");

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
          {(["golden", "winter1", "boom2", "winter2"] as Era[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setEra(key)}
              className={[
                "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                era === key ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {key === "golden"
                ? lang === "zh"
                  ? "黄金十年"
                  : "Golden Decade"
                : key === "winter1"
                  ? lang === "zh"
                    ? "第一次寒冬"
                    : "First Winter"
                  : key === "boom2"
                    ? lang === "zh"
                      ? "第二次热潮"
                      : "Second Boom"
                    : lang === "zh"
                      ? "第二次寒冬"
                      : "Second Winter"}
            </button>
          ))}
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{info.title}</p>
          <p>{info.events}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {lang === "zh" ? "主导方法" : "Dominant methods"}
          </p>
          <p>{info.method}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {lang === "zh" ? "反思" : "Reflection"}
          </p>
          <p>{info.reflection}</p>
        </div>
      </div>
    </div>
  );
}
