import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { ExpertSystemCostDemo } from "../demos/ExpertSystemCostDemo";
import { HeuristicSearchDemo } from "../demos/HeuristicSearchDemo";
import { ProductionRuleDemo } from "../demos/ProductionRuleDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson6_1({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Try again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };

  const t = content[lang];
  const toc = [
    { id: "learning-objectives", label: t.learningObjectivesTitle },
    { id: "intro", label: t.introTitle },
    { id: "intelligence", label: t.intelligenceTitle },
    { id: "general-knowledge", label: t.generalTitle },
    { id: "expert-systems", label: t.expertTitle },
    { id: "applications", label: t.applicationTitle },
    { id: "limits", label: t.limitTitle },
    { id: "summary", label: t.summaryTitle },
  ];

  return (
    <div className="flex gap-6">
      <LessonToc lang={lang} items={toc} />

      <div className="flex-1 space-y-6">
        <SectionBlock id="learning-objectives" title={t.learningObjectivesTitle}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.learningObjectives.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="intro" title={t.introTitle} eyebrow={t.introEyebrow}>
          {t.introParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
        </SectionBlock>

        <SectionBlock id="intelligence" title={t.intelligenceTitle} eyebrow={t.intelligenceEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.intelligenceIntro}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {t.intelligenceTypes.map((item) => (
              <InfoCard key={item.title} title={item.title}>
                <p className="text-sm text-slate-700">{item.desc}</p>
              </InfoCard>
            ))}
          </div>
          <GuidedSteps title={ui.guidedTitle} steps={t.intelligenceSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.intelligenceCheckpoint.prompt}
            options={t.intelligenceCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="general-knowledge" title={t.generalTitle} eyebrow={t.generalEyebrow}>
          {t.generalParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <HeuristicSearchDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.generalSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.generalCheckpoint.prompt}
            options={t.generalCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="expert-systems" title={t.expertTitle} eyebrow={t.expertEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.expertIntro}</p>
          <div className="grid gap-3 md:grid-cols-2">
            <InfoCard title={t.expertParts.title}>
              <ul className="space-y-1 text-sm text-slate-700">
                {t.expertParts.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title={t.rulesTitle}>
              <p className="text-sm text-slate-700">{t.rulesDesc}</p>
            </InfoCard>
          </div>
          <ProductionRuleDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.expertSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.expertCheckpoint.prompt}
            options={t.expertCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="applications" title={t.applicationTitle}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.applications.map((item) => (
              <li key={item.title}>
                <span className="font-semibold text-slate-900">{item.title}</span> — {item.desc}
              </li>
            ))}
          </ul>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.applicationCheckpoint.prompt}
            options={t.applicationCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="limits" title={t.limitTitle} eyebrow={t.limitEyebrow}>
          {t.limitParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <ExpertSystemCostDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.limitSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.limitCheckpoint.prompt}
            options={t.limitCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解基于知识的智能（通用知识、经验知识）的思想与发展历程",
      "掌握专家系统的组成、产生式推理链与典型应用",
      "认识启发式搜索与知识获取/维护的局限",
    ],
    introTitle: "导入",
    introEyebrow: "知识的力量",
    introParas: [
      "如果把一座图书馆的书全教给一台机器，它能像博闻的人一样回答问题吗？早期人工智能正是从“教机器知识”起步的。",
      "本课从人类流体/晶体智力谈起，延伸到用公理、定理或专家经验武装机器，并讨论优势与不足。",
    ],
    intelligenceTitle: "1. 知识与智能",
    intelligenceEyebrow: "流体智力 vs. 晶体智力",
    intelligenceIntro:
      "卡特尔将智力分为流体智力（快速理解、学习、解决新问题）与晶体智力（积累与运用知识）。计算机有强大的计算速度，但缺乏世界知识，研究者希望通过补足知识让机器更聪明。",
    intelligenceTypes: [
      { title: "流体智力", desc: "关注思维速度、学习与推理能力，年轻时占优势。" },
      { title: "晶体智力", desc: "关注知识储备与经验运用，随年龄积累并能补偿思维速度下降。" },
    ],
    intelligenceSteps: [
      "分辨两类智力：速度 vs. 知识积累。",
      "思考计算机在哪类智力上天然占优。",
      "推断为何要向计算机输入大量知识。",
    ],
    intelligenceCheckpoint: {
      prompt: "晶体智力的核心特征是？",
      options: [
        { label: "快速处理新问题的能力", correct: false, explanation: "这是流体智力特征。" },
        { label: "通过积累和运用知识解决问题", correct: true, explanation: "晶体智力依赖知识与经验。" },
        { label: "依赖身体协调和平衡", correct: false, explanation: "这是小脑控制的运动功能。" },
      ],
    },
    generalTitle: "2. 基于通用知识的智能",
    generalEyebrow: "公理与自动定理证明",
    generalParas: [
      "数学用少量公理推演出完整体系，启发了“机器掌握公理就能推演世界知识”的想法。",
      "Logic Theorist 证明《数学原理》中的 38 条定理，核心是从公理出发并用启发式搜索缩短推理路径。",
    ],
    generalSteps: [
      "从公理出发写出推理规则。",
      "对比盲目搜索与有启发的搜索节点数。",
      "总结启发式对效率的提升作用。",
    ],
    generalCheckpoint: {
      prompt: "Logic Theorist 成功的关键做法是？",
      options: [
        { label: "完全随机搜索证明路径", correct: false, explanation: "随机搜索效率太低。" },
        { label: "引入启发式搜索优先扩展有希望的路径", correct: true, explanation: "启发式大幅减少探索节点。" },
        { label: "让模型自己生成公理", correct: false, explanation: "公理由人提供。" },
      ],
    },
    expertTitle: "3. 基于经验知识的智能：专家系统",
    expertEyebrow: "知识库 + 推理机",
    expertIntro:
      "真实世界过于复杂，仅靠抽象公理难以应对。专家系统把领域经验编码为规则，由推理机链式推断，模仿专家决策。",
    expertParts: {
      title: "核心组成",
      items: ["知识库：大量“如果…那么…”规则", "推理机：按规则触发、组合、得出结论"],
    },
    rulesTitle: "产生式规则与推理链",
    rulesDesc: "用产生式串接多步因果，如“多云+高湿→下雨→河涨→可能淹房”。",
    expertSteps: [
      "列出关键症状/特征并写成规则。",
      "触发首条规则后连接后续规则形成推理链。",
      "检视结论并核对是否符合经验。",
    ],
    expertCheckpoint: {
      prompt: "专家系统推理链的基础是？",
      options: [
        { label: "按经验排序的产生式规则", correct: true, explanation: "规则驱动链式推理。" },
        { label: "随机尝试所有组合", correct: false, explanation: "推理并非随机遍历。" },
        { label: "端到端深度网络", correct: false, explanation: "深度网络属于连接主义方法。" },
      ],
    },
    applicationTitle: "4. 典型应用",
    applications: [
      { title: "医疗诊断", desc: "如 MYCIN 依据症状、检验结果给出诊断与用药建议。" },
      { title: "设备维护", desc: "工厂监测设备状态，预测故障并提示维护。" },
      { title: "农业管理", desc: "结合天气、土壤、作物信息给出播种与农药建议。" },
    ],
    applicationCheckpoint: {
      prompt: "哪一项最符合专家系统优势？",
      options: [
        { label: "在数据稀缺但规则明确的场景提供决策支持", correct: true, explanation: "专家经验能补数据不足。" },
        { label: "完全不用专家知识，纯随机搜索", correct: false, explanation: "专家系统依赖专家知识。" },
        { label: "必须有百万级标注数据才能运行", correct: false, explanation: "那更像深度学习需求。" },
      ],
    },
    limitTitle: "5. 局限与挑战",
    limitEyebrow: "知识获取与维护成本",
    limitParas: [
      "获取专家知识耗时费力，且新知识不断出现，旧规则需持续更新与消解冲突。",
      "复杂多变的现实超出人类知识边界，知识库难以覆盖全部情况。",
    ],
    limitSteps: [
      "估算知识规模与更新频率。",
      "思考冲突处理与一致性维护成本。",
      "总结何时应改用可自学习的方法。",
    ],
    limitCheckpoint: {
      prompt: "专家系统最大难题之一是？",
      options: [
        { label: "知识获取与更新成本高且易冲突", correct: true, explanation: "知识工程耗时且需持续维护。" },
        { label: "无法解释推理过程", correct: false, explanation: "专家系统可解释性强。" },
        { label: "完全不需要专家参与", correct: false, explanation: "反而高度依赖专家。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "基于知识的方法强调规则、推理与可控性，分为公理化与经验型两类。",
      "启发式搜索提升了定理证明等推理效率。",
      "专家系统以产生式链式推理，应用广泛但面临知识获取与维护瓶颈。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand knowledge-based intelligence built on general vs. empirical knowledge",
      "Recognize expert-system structure, rule chaining, and typical uses",
      "See how heuristic search and knowledge maintenance shape strengths and limits",
    ],
    introTitle: "Warm-up",
    introEyebrow: "Power of Knowledge",
    introParas: [
      "If a machine absorbed a full library, could it answer like a polymath? Early AI started from “feeding knowledge into a machine.”",
      "We connect fluid/crystallized intelligence to machines armed with axioms or expert rules, then weigh pros and cons.",
    ],
    intelligenceTitle: "1. Knowledge and Intelligence",
    intelligenceEyebrow: "Fluid vs. Crystallized",
    intelligenceIntro:
      "Cattell split intelligence into fluid (quick learning/reasoning) and crystallized (accumulated knowledge). Computers are fast at calculation but know nothing of the world—so researchers tried to fill the knowledge gap.",
    intelligenceTypes: [
      { title: "Fluid intelligence", desc: "Quick reasoning and adaptation; stronger in youth." },
      { title: "Crystallized intelligence", desc: "Stored knowledge and experience; grows with learning and age." },
    ],
    intelligenceSteps: [
      "Contrast speed vs. knowledge accumulation.",
      "Note where computers excel today.",
      "Infer why giving computers knowledge was an early AI path.",
    ],
    intelligenceCheckpoint: {
      prompt: "Crystallized intelligence centers on…",
      options: [
        { label: "Rapidly solving unseen puzzles", correct: false, explanation: "That is fluid intelligence." },
        { label: "Applying accumulated knowledge to problems", correct: true, explanation: "It relies on stored knowledge." },
        { label: "Coordinating physical balance", correct: false, explanation: "That is motor control, not crystallized IQ." },
      ],
    },
    generalTitle: "2. Intelligence from General Knowledge",
    generalEyebrow: "Axioms and Theorem Proving",
    generalParas: [
      "Math derives whole fields from a few axioms, inspiring the idea that machines could reason from axioms to broad knowledge.",
      "Logic Theorist proved 38 theorems in Principia Mathematica; its key was heuristic search to shorten proof paths.",
    ],
    generalSteps: [
      "Start with axioms and inference rules.",
      "Compare blind vs. heuristic-guided search nodes.",
      "Summarize how heuristics boost efficiency.",
    ],
    generalCheckpoint: {
      prompt: "Logic Theorist’s efficiency came from…",
      options: [
        { label: "Pure random search", correct: false, explanation: "Random exploration was too slow." },
        { label: "Heuristic search prioritizing promising branches", correct: true, explanation: "Heuristics pruned the search." },
        { label: "Autonomously inventing axioms", correct: false, explanation: "Axioms were provided by humans." },
      ],
    },
    expertTitle: "3. Empirical Knowledge: Expert Systems",
    expertEyebrow: "Knowledge Base + Inference Engine",
    expertIntro:
      "Real-world problems are messy; expert systems encode practitioners’ rules and chain them to imitate expert judgment.",
    expertParts: {
      title: "Core pieces",
      items: ["Knowledge base: many IF–THEN rules", "Inference engine: fires and chains rules to conclusions"],
    },
    rulesTitle: "Production Rules and Chains",
    rulesDesc: "Rules connect in series, e.g., “cloudy+humid → rain → river swells → houses may flood.”",
    expertSteps: [
      "List key observations and write IF–THEN rules.",
      "Chain triggered rules to reach a conclusion.",
      "Check whether the conclusion matches expert intent.",
    ],
    expertCheckpoint: {
      prompt: "Expert-system reasoning chains are driven by…",
      options: [
        { label: "Ordered production rules", correct: true, explanation: "Rule firing builds the chain." },
        { label: "Exhaustive random tries", correct: false, explanation: "It is not random search." },
        { label: "End-to-end deep nets", correct: false, explanation: "Deep nets belong to connectionism." },
      ],
    },
    applicationTitle: "4. Typical Applications",
    applications: [
      { title: "Medical diagnosis", desc: "e.g., MYCIN uses symptoms/tests to suggest diagnoses and treatments." },
      { title: "Equipment maintenance", desc: "Factories monitor machines, predict faults, and recommend actions." },
      { title: "Agricultural management", desc: "Weather/soil/crop data guide planting timing and pesticide amounts." },
    ],
    applicationCheckpoint: {
      prompt: "A strength of expert systems is…",
      options: [
        { label: "Decision support when data are scarce but rules are known", correct: true, explanation: "Expert rules fill data gaps." },
        { label: "Relying purely on random search", correct: false, explanation: "They lean on expert knowledge, not randomness." },
        { label: "Needing millions of labels to start", correct: false, explanation: "That’s closer to modern deep learning." },
      ],
    },
    limitTitle: "5. Limits and Challenges",
    limitEyebrow: "Knowledge Engineering Costs",
    limitParas: [
      "Eliciting expert knowledge is slow; updates are constant and can conflict.",
      "Reality shifts faster than curated rules, so coverage beyond human knowledge is hard.",
    ],
    limitSteps: [
      "Estimate knowledge size and update pace.",
      "Consider conflicts and consistency upkeep.",
      "Decide when learning-based methods are better suited.",
    ],
    limitCheckpoint: {
      prompt: "A core weakness of expert systems is…",
      options: [
        { label: "High cost to acquire and maintain consistent rules", correct: true, explanation: "Knowledge engineering is costly." },
        { label: "Zero interpretability", correct: false, explanation: "They are actually interpretable." },
        { label: "No human input required", correct: false, explanation: "They depend on human experts." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "Knowledge-based AI split into axiomatic reasoning and empirical expert systems with clear, controllable rules.",
      "Heuristic search made early theorem proving feasible.",
      "Expert systems shine in rule-rich domains but face knowledge acquisition and maintenance bottlenecks.",
    ],
  },
};
