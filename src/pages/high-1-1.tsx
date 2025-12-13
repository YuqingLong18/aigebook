import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AIImpactBalanceDemo } from "../demos/AIImpactBalanceDemo";
import { IntelligenceSpectrumDemo } from "../demos/IntelligenceSpectrumDemo";
import { ModernAIFeaturesDemo } from "../demos/ModernAIFeaturesDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson1_1({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Check again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };

  const t = content[lang];

  const toc = [
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "开篇理解" : "Opening Idea" },
    { id: "dream", label: isZh ? "1. 智能机器的梦想" : "1. Dream of Intelligent Machines" },
    { id: "define", label: isZh ? "2. 自动化到人工智能" : "2. From Automation to AI" },
    { id: "compare", label: isZh ? "3. 概念辨析" : "3. Distinguishing Concepts" },
    { id: "features", label: isZh ? "4. 现代 AI 特征" : "4. Modern AI Features" },
    { id: "applications", label: isZh ? "5. 应用与影响" : "5. Applications & Impact" },
    { id: "study", label: isZh ? "6. 如何学习 AI" : "6. How to Study AI" },
    { id: "summary", label: isZh ? "本节小结" : "Summary" },
  ];

  return (
    <div className="flex gap-6">
      <LessonToc lang={lang} items={toc} />

      <div className="flex-1 space-y-6">
        <SectionBlock id="learning-objectives" title={t.learningObjectivesTitle}>
          <ul className="grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
            {t.learningObjectives.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="intro" title={t.openingTitle} eyebrow={t.openingEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.openingText}</p>
        </SectionBlock>

        <SectionBlock id="dream" title={t.dreamTitle} eyebrow={t.dreamEyebrow}>
          <InfoCard title={t.dreamCardTitle}>
            {t.dreamParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.dreamSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.dreamCheckpoint.prompt}
            options={t.dreamCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="define" title={t.defineTitle} eyebrow={t.defineEyebrow}>
          <InfoCard title={t.defineCardTitle}>
            {t.defineParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.defineSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.defineCheckpoint.prompt}
            options={t.defineCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="compare" title={t.compareTitle} eyebrow={t.compareEyebrow}>
          <IntelligenceSpectrumDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.compareSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.compareCheckpoint.prompt}
            options={t.compareCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="features" title={t.featuresTitle} eyebrow={t.featuresEyebrow}>
          <ModernAIFeaturesDemo lang={lang} />
          <InfoCard title={t.featuresCardTitle}>
            {t.featuresParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.featuresSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.featuresCheckpoint.prompt}
            options={t.featuresCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="applications" title={t.appTitle} eyebrow={t.appEyebrow}>
          <InfoCard title={t.appCardTitle}>
            {t.appParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <AIImpactBalanceDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.appSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.appCheckpoint.prompt}
            options={t.appCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="study" title={t.studyTitle} eyebrow={t.studyEyebrow}>
          <InfoCard title={t.studyCardTitle}>
            {t.studyParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.studySteps} />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Define AI goals, methods, and how it differs from other fields.",
      "Review visions of intelligent machines across history and cultures.",
      "Distinguish AI, automation, and machine intelligence.",
      "Recognize modern AI traits: autonomous learning, data-driven, model-program separation.",
      "Identify typical applications and societal impacts.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Why AI?",
    openingText:
      "AI is intelligence created by humans. From facial check-in to voice assistants, it is everywhere. This lesson introduces its goals, history, distinctions, traits, and impacts.",
    dreamTitle: "1. Dream of Intelligent Machines",
    dreamEyebrow: "Legends & motives",
    dreamCardTitle: "Stories of early automation",
    dreamParas: [
      "Legends of Lu Ban’s bamboo bird, Yan Shi’s puppet, Zhuge Liang’s wooden ox, and Heron’s automated theater reflect ancient dreams of smart helpers.",
      "Al-Jazari detailed 50 devices (e.g., robot band) with reproducible steps, earning the title “father of modern engineering”.",
    ],
    dreamSteps: [
      "Note how legends show desire for help beyond human limits.",
      "See how detailed designs turned dreams into reproducible machines.",
      "Connect this aspiration to today’s AI research momentum.",
    ],
    dreamCheckpoint: {
      prompt: "What do these legends illustrate?",
      options: [
        {
          label: "A long-standing human aspiration to create intelligent helpers.",
          correct: true,
          explanation: "Stories across eras show enduring motivation for intelligent machines.",
        },
        {
          label: "They prove those machines had human-level intelligence.",
          correct: false,
          explanation: "They were early automation, not human-level AI.",
        },
        {
          label: "They show AI must be biological.",
          correct: false,
          explanation: "They were mechanical designs, not biology.",
        },
      ],
    },
    defineTitle: "2. From Automation to Artificial Intelligence",
    defineEyebrow: "What is AI?",
    defineCardTitle: "Definition and goal",
    defineParas: [
      "Automation alone is not AI. AI simulates human intelligent behaviors via computation.",
      "John McCarthy called AI “the science and engineering of making intelligent machines, especially intelligent computer programs.”",
      "AI focuses on intelligent behavior (perception, memory, reasoning), not just mechanical motion.",
    ],
    defineSteps: [
      "Differentiate mechanical automation from computational intelligence.",
      "Link AI to simulating human thought processes through computation.",
      "Remember behavior is observable; process may differ from human brains.",
    ],
    defineCheckpoint: {
      prompt: "Why is AI more than automation?",
      options: [
        {
          label: "It aims to simulate intelligent behaviors with computation, not just fixed mechanical actions.",
          correct: true,
          explanation: "AI targets thinking behaviors via computational models.",
        },
        {
          label: "It excludes computers.",
          correct: false,
          explanation: "Computation is central to AI.",
        },
        {
          label: "It only controls motors.",
          correct: false,
          explanation: "AI spans perception, reasoning, learning, etc.",
        },
      ],
    },
    compareTitle: "3. Distinguishing Concepts",
    compareEyebrow: "AI vs. smart vs. automation",
    compareSteps: [
      "Smart machines may mix mechanical, control, and AI; smartness is subjective.",
      "Automation is about executing actions; AI is about intelligent behaviors across domains.",
      "Machine intelligence is broad; AI emphasizes human-like cognition but may grow beyond it.",
    ],
    compareCheckpoint: {
      prompt: "How do AI and automation differ?",
      options: [
        {
          label: "Automation executes physical actions; AI targets intelligent behaviors (perception/reasoning) often via computation.",
          correct: true,
          explanation: "They focus on different layers of capability.",
        },
        {
          label: "Automation always uses neural nets.",
          correct: false,
          explanation: "Automation can be mechanical or rule-based.",
        },
        {
          label: "AI never uses computers.",
          correct: false,
          explanation: "Computers are AI’s main tool.",
        },
      ],
    },
    featuresTitle: "4. Characteristics of Modern AI",
    featuresEyebrow: "Learning + data + models",
    featuresCardTitle: "Autonomous, data-driven, model-program split",
    featuresParas: [
      "Modern AI relies on large-scale autonomous learning instead of hand-coding all knowledge.",
      "Data drives performance; models store learned knowledge separately from control code.",
    ],
    featuresSteps: [
      "Identify the learning loop and where data enters.",
      "See models as knowledge carriers, programs as scaffolding.",
      "Relate to today’s neural networks and big data training.",
    ],
    featuresCheckpoint: {
      prompt: "What does separating model and program mean?",
      options: [
        {
          label: "Knowledge is stored in learned model parameters; code just orchestrates learning and inference.",
          correct: true,
          explanation: "Programs no longer hard-code every rule.",
        },
        {
          label: "Programs disappear completely.",
          correct: false,
          explanation: "Programs still manage training/inference.",
        },
        {
          label: "Models never change after training.",
          correct: false,
          explanation: "Models can update with new data.",
        },
      ],
    },
    appTitle: "5. Applications and Impacts",
    appEyebrow: "Domains & effects",
    appCardTitle: "From daily life to science",
    appParas: [
      "Typical AI apps: face pay, voice assistants, recommenders, autonomous driving, service robots.",
      "Interdisciplinary AI: healthcare (diagnosis, drug discovery), astronomy, finance, traffic, education, etc.",
    ],
    appSteps: [
      "Match each app to its core AI ability (vision, language, planning).",
      "Consider efficiency gains vs. risks (privacy, misinformation, jobs).",
      "Note governance needs alongside deployment.",
    ],
    appCheckpoint: {
      prompt: "Which statement about AI impact is accurate?",
      options: [
        {
          label: "AI boosts efficiency but needs governance to manage risks like privacy and misinformation.",
          correct: true,
          explanation: "Benefits and risks coexist.",
        },
        {
          label: "AI only applies to the internet.",
          correct: false,
          explanation: "It spans many sectors.",
        },
        {
          label: "AI guarantees zero errors in all cases.",
          correct: false,
          explanation: "No model is perfect; oversight matters.",
        },
      ],
    },
    studyTitle: "6. How to Study AI",
    studyEyebrow: "Learning path",
    studyCardTitle: "Foundations and habits",
    studyParas: [
      "Build math and interdisciplinary basics; focus on core ML/ANN ideas.",
      "Practice with small experiments, stay updated, and collaborate.",
    ],
    studySteps: [
      "Set foundation (math + domain context).",
      "Learn key concepts then algorithms.",
      "Do hands-on projects and discuss with peers.",
    ],
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "AI simulates human intelligent behavior via computation, beyond automation.",
      "Smart machines, automation, and AI differ by goal and method.",
      "Modern AI: autonomous learning, data-driven, model-program separation.",
      "Applications span life and science; benefits require governance.",
      "Learning AI needs foundations, practice, updates, and collaboration.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解 AI 的研究目标、方法与学科区别。",
      "了解历史与文化中的智能机器愿景。",
      "区分人工智能、自动化、机器智能。",
      "掌握现代 AI 的自学习、数据驱动、模型-程序分离特征。",
      "认识典型应用及对社会的正负影响。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "为何学习 AI",
    openingText: "AI 是人造的智能，从刷脸乘车到语音助手已遍布生活。本课概览其目标、来源、区别、特征与影响。",
    dreamTitle: "1. 智能机器的梦想",
    dreamEyebrow: "传说与动机",
    dreamCardTitle: "早期自动化故事",
    dreamParas: [
      "鲁班木鸟、偃师木偶、诸葛木牛流马、希罗自动剧场等传说反映人类对智能助手的渴望。",
      "阿尔-杰扎里详述 50 项装置（如机器人乐队），可按步骤复现，被称为“现代工程之父”。",
    ],
    dreamSteps: ["看到古今对超越自我的期待。", "注意可复现的设计把幻想变成装置。", "联系到今天 AI 研究的驱动力。"],
    dreamCheckpoint: {
      prompt: "这些故事说明了什么？",
      options: [
        {
          label: "人类长期渴望创造智能助手。",
          correct: true,
          explanation: "跨时代传说展现持久动机。",
        },
        {
          label: "它们已具有人类级智能。",
          correct: false,
          explanation: "只是早期自动化。",
        },
        {
          label: "智能必须是生物的。",
          correct: false,
          explanation: "故事多为机械设计。",
        },
      ],
    },
    defineTitle: "2. 从自动化到人工智能",
    defineEyebrow: "何谓 AI",
    defineCardTitle: "定义与目标",
    defineParas: [
      "自动化不等于 AI。AI 通过计算模拟人类智能行为。",
      "McCarthy 将 AI 定义为“制造智能机器（尤其智能程序）的科学与工程”。",
      "AI 关注感知、记忆、推理等智能行为，而非仅机械运动。",
    ],
    defineSteps: ["区分机械自动与计算智能。", "把 AI 与通过计算模拟思维联系起来。", "记住行为可观测，过程未必与人类同。"],
    defineCheckpoint: {
      prompt: "为何 AI 超越自动化？",
      options: [
        {
          label: "它通过计算模拟智能行为，而非固定机械动作。",
          correct: true,
          explanation: "AI 目标是思维层面的能力。",
        },
        {
          label: "它排斥计算机。",
          correct: false,
          explanation: "计算是 AI 核心。",
        },
        {
          label: "它只控制电机。",
          correct: false,
          explanation: "涵盖感知、推理、学习等。",
        },
      ],
    },
    compareTitle: "3. 概念辨析",
    compareEyebrow: "AI vs. 智能机器 vs. 自动化",
    compareSteps: ["智能机器可混合机械/控制/AI，智能感受主观。", "自动化侧重动作执行，AI 关注智能行为。", "机器智能是泛称，AI 强调拟人认知但可能超越人类。"],
    compareCheckpoint: {
      prompt: "AI 与自动化的核心差别是？",
      options: [
        {
          label: "自动化做物理动作；AI 做智能行为（感知/推理），常基于计算。",
          correct: true,
          explanation: "关注层次不同。",
        },
        {
          label: "自动化必用神经网络。",
          correct: false,
          explanation: "可机械或规则实现。",
        },
        {
          label: "AI 不用计算机。",
          correct: false,
          explanation: "计算机是主要工具。",
        },
      ],
    },
    featuresTitle: "4. 现代 AI 特征",
    featuresEyebrow: "学习 + 数据 + 分离",
    featuresCardTitle: "自主、数据驱动、模型-程序分离",
    featuresParas: [
      "现代 AI 重在大规模自主学习，而非完全手工编码知识。",
      "数据驱动性能，模型存知识，程序更多是训练/推理骨架。",
    ],
    featuresSteps: ["找出学习循环与数据入口。", "把模型视为知识载体，程序为骨架。", "联系当下神经网络与大数据训练。"],
    featuresCheckpoint: {
      prompt: "模型-程序分离意味着？",
      options: [
        {
          label: "知识存在学习到的模型参数，程序只编排训练与推理。",
          correct: true,
          explanation: "不再手写全部规则。",
        },
        {
          label: "程序完全消失。",
          correct: false,
          explanation: "程序仍管理流程。",
        },
        {
          label: "模型训练后永不更新。",
          correct: false,
          explanation: "模型可继续学习。",
        },
      ],
    },
    appTitle: "5. 应用与影响",
    appEyebrow: "场景与效应",
    appCardTitle: "从生活到科学",
    appParas: [
      "典型应用：刷脸支付、语音助手、推荐、自动驾驶、服务机器人。",
      "跨界 AI：医疗（诊断、药物）、天文、金融、交通、教育等。",
    ],
    appSteps: ["把场景与核心 AI 能力对应。", "思考效率提升与隐私、失业等风险。", "部署需同步治理。"],
    appCheckpoint: {
      prompt: "下列关于 AI 影响的说法正确的是？",
      options: [
        {
          label: "AI 提升效率，但需治理隐私、误导信息、就业风险。",
          correct: true,
          explanation: "利弊并存。",
        },
        {
          label: "AI 只用于互联网。",
          correct: false,
          explanation: "跨行业应用。",
        },
        {
          label: "AI 保证零错误。",
          correct: false,
          explanation: "模型仍有误差，需监管。",
        },
      ],
    },
    studyTitle: "6. 如何学习 AI",
    studyEyebrow: "学习路径",
    studyCardTitle: "基础与习惯",
    studyParas: ["夯实数学与跨学科基础，聚焦机器学习/神经网络。", "动手实验、关注前沿、与同伴讨论合作。"],
    studySteps: ["打好基础。", "先概念再算法。", "多实践、勤交流。"],
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "AI 通过计算模拟人类智能行为，超越纯自动化。",
      "智能机器、自动化、AI 目标与方法不同。",
      "现代 AI：自主学习、数据驱动、模型与程序分离。",
      "应用广泛，效益与风险并存，需治理。",
      "学习 AI 要基础、实践、更新与协作。",
    ],
  },
};
