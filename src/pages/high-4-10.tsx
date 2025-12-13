import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AIImpactBalanceDemo } from "../demos/AIImpactBalanceDemo";
import { ComputeFrontierDemo } from "../demos/ComputeFrontierDemo";
import { ModernAIFeaturesDemo } from "../demos/ModernAIFeaturesDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson4_10({ lang }: LessonProps) {
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
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "开篇理解" : "Opening Idea" },
    { id: "trend", label: isZh ? "1. 智能化是趋势" : "1. Intelligentization is a Trend" },
    { id: "directions", label: isZh ? "2. AI 研究方向" : "2. AI Research Directions" },
    { id: "humanity", label: isZh ? "3. 人类与 AI" : "3. Humanity and AI" },
    { id: "summary", label: isZh ? "本节小结" : "Section Summary" },
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

        <SectionBlock id="intro" title={t.introTitle} eyebrow={t.introEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.introText}</p>
        </SectionBlock>

        <SectionBlock id="trend" title={t.trendTitle} eyebrow={t.trendEyebrow}>
          <InfoCard title={t.trendCardTitle}>
            {t.trendParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <ModernAIFeaturesDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.trendSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.trendCheckpoint.prompt}
            options={t.trendCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="directions" title={t.dirTitle} eyebrow={t.dirEyebrow}>
          <InfoCard title={t.dirThirdTitle}>
            {t.dirThirdParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.dirNeuroTitle}>
            {t.dirNeuroParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.dirOpticalTitle}>
            {t.dirOpticalParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.dirQuantumTitle}>
            {t.dirQuantumParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <ComputeFrontierDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.dirSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.dirCheckpoint.prompt}
            options={t.dirCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="humanity" title={t.humanTitle} eyebrow={t.humanEyebrow}>
          <InfoCard title={t.humanCardTitle}>
            {t.humanParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <AIImpactBalanceDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.humanSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.humanCheckpoint.prompt}
            options={t.humanCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.summaryCheckpoint.prompt}
            options={t.summaryCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand AI’s development history and why the current wave is different.",
      "See how AI drives biology, materials, medicine, astronomy and other disciplines.",
      "Recognize frontier directions such as third-generation AI, neuromorphic, optical, and quantum computing.",
      "Acknowledge issues like bias, data misuse, and weaponization and how ethics/laws guide AI.",
      "Explore how AI can remain a helpful assistant and coexist harmoniously with humans.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Looking ahead",
    introText:
      "AI now permeates science and society. This lesson surveys the wave’s staying power, key research directions, and the human–AI relationship needed for a safe, beneficial future.",

    trendTitle: "1. Intelligentization is a Trend",
    trendEyebrow: "Why this wave lasts",
    trendCardTitle: "Different from past booms",
    trendParas: [
      "Past AI cycles rose and fell, but today’s wave already ships mature products—vision, speech, translation, recommendation—embedded in daily life.",
      "Large models hint at AGI potential: stronger reasoning (e.g., OpenAI o1, DeepSeek), broader knowledge via language, and cross-discipline impact make AI a foundational force like mathematics.",
      "Because AI is deeply integrated with other fields, most scientists expect momentum to keep growing rather than fade.",
    ],
    trendSteps: [
      "Contrast earlier “hype then winter” with today’s deployed products.",
      "Connect large-model reasoning to the AGI discussion.",
      "State why integration with foundational disciplines makes the trend durable.",
    ],
    trendCheckpoint: {
      prompt: "Why do many researchers think the current AI wave will persist?",
      options: [
        {
          label: "Because AI already delivers mature products and is becoming a cross-disciplinary foundation, not just a lab curiosity.",
          correct: true,
          explanation: "Real deployments + foundational role differentiate this wave.",
        },
        {
          label: "Because it has no real-world applications yet.",
          correct: false,
          explanation: "The text stresses widespread adoption and cross-discipline impact.",
        },
      ],
    },

    dirTitle: "2. AI Research Directions",
    dirEyebrow: "Next frontiers",
    dirThirdTitle: "Transparent and trustworthy third-generation AI",
    dirThirdParas: [
      "Deep models can be black boxes, vulnerable to adversarial examples and hallucinations. Third-generation AI proposes integrating knowledge-driven and data-driven methods to improve transparency and controllability.",
    ],
    dirNeuroTitle: "Neuromorphic computing",
    dirNeuroParas: [
      "Deep nets demand huge compute. Neuromorphic chips imitate brain mechanisms to reach high efficiency (the brain runs on ~20 W). Examples: Tsinghua’s Tianjic, IBM NorthPole’s large energy gains.",
    ],
    dirOpticalTitle: "Optical computing",
    dirOpticalParas: [
      "Using photons to compute (e.g., diffraction for matrix multiplication) offers extreme speed and low heat. Optical neural networks can process in parallel and avoid electronic heat, though integration remains challenging.",
      "Recent work (e.g., June 2024 forward-only gradient training) makes large-scale optical neural learning more feasible.",
    ],
    dirQuantumTitle: "Quantum computing",
    dirQuantumParas: [
      "Qubits in superposition enable parallelism for specific problems (e.g., factoring). Google’s Willow chip improved both qubit count and error rate, completing a benchmark in minutes versus thousands of years for classical.",
      "Quantum advantages are still task-specific; broad AI use awaits further advances.",
    ],
    dirSteps: [
      "Summarize why transparency and control motivate third-generation AI.",
      "Compare neuromorphic/optical/quantum on energy vs. maturity using the demo.",
      "Relate compute efficiency breakthroughs to the sustainability of AI growth.",
    ],
    dirCheckpoint: {
      prompt: "Which statement reflects the need for new compute paradigms?",
      options: [
        {
          label: "Compute demand and energy use are soaring; neuromorphic/optical/quantum aim to boost efficiency beyond today’s chips.",
          correct: true,
          explanation: "The section cites energy/compute bottlenecks and new paradigms addressing them.",
        },
        {
          label: "Compute demand is shrinking so efficiency is no concern.",
          correct: false,
          explanation: "The text highlights exponential growth in compute needs.",
        },
      ],
    },

    humanTitle: "3. Humanity and AI",
    humanEyebrow: "Coexistence and governance",
    humanCardTitle: "Ethics and societal impacts",
    humanParas: [
      "Risks include bias, price discrimination, filter bubbles, and weaponization. As AI grows stronger, moral and legal issues intensify.",
      "We must regulate use, distribute benefits fairly, and assign accountability so AI remains a friend rather than a threat.",
    ],
    humanSteps: [
      "List concrete risks (bias, bubbles, misuse).",
      "Adjust governance vs. scope in the demo to see risk/benefit trade-offs.",
      "Argue why proactive regulation helps AI serve humans.",
    ],
    humanCheckpoint: {
      prompt: "Why is governance emphasized for future AI?",
      options: [
        {
          label: "To mitigate bias, misuse, and weaponization risks while amplifying benefits.",
          correct: true,
          explanation: "The section calls for laws/ethics to keep AI helpful.",
        },
        {
          label: "Because AI poses no societal risks at all.",
          correct: false,
          explanation: "The text lists multiple emerging negative impacts.",
        },
      ],
    },

    summaryTitle: "Section Summary",
    summaryEyebrow: "Future outlook",
    summaryPoints: [
      "Today’s AI wave differs by its real products and foundational, cross-disciplinary reach.",
      "Third-generation AI seeks transparency; neuromorphic/optical/quantum address efficiency limits.",
      "Compute demand is rising sharply—new paradigms are key for sustainable growth.",
      "Societal issues (bias, privacy, weapons) demand ethical and legal guardrails.",
      "With careful governance, AI can remain a partner that advances science and society.",
    ],
    summaryCheckpoint: {
      prompt: "How can we keep AI a helpful assistant?",
      options: [
        {
          label: "By improving transparency/efficiency and setting strong ethical/legal governance.",
          correct: true,
          explanation: "Both technical advances and policy guardrails are needed.",
        },
        {
          label: "By ignoring risks and avoiding any regulation.",
          correct: false,
          explanation: "Neglecting risks contradicts the section’s call for proactive governance.",
        },
      ],
    },
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 AI 的发展历程，认识当前浪潮的特点及其对科技与社会的影响。",
      "了解 AI 如何推动生物、材料、医学、天文等交叉学科的创新。",
      "认识第三代 AI、类脑计算、光计算、量子计算等前沿方向及其突破瓶颈的潜力。",
      "思考算法偏见、数据滥用、武器化等问题，理解法律与伦理的约束作用。",
      "探讨如何让 AI 成为人类的助手而非威胁，实现和谐共生。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "展望未来",
    introText:
      "AI 已深入科学与社会。本课聚焦这波浪潮的可持续性、关键研究方向，以及保障 AI 成为“善用”的人机关系。",

    trendTitle: "1. 智能化是趋势",
    trendEyebrow: "这一波为何更持久",
    trendCardTitle: "区别于以往的热潮",
    trendParas: [
      "以往的高潮与寒冬交替，而这波 AI 已落地成熟产品（视觉、语音、翻译、推荐），真正融入生活。",
      "大模型展现 AGI 潜力：更强推理（如 o1、DeepSeek）、更广知识并跨学科，AI 正成为类似数学的基础力量。",
      "因深度融入各基础学科，学界普遍认为这波势头会持续增强而非消退。",
    ],
    trendSteps: [
      "对比以往“炒作后遇冷”与如今的真实产品。",
      "把大模型推理与 AGI 讨论联系起来。",
      "说明为什么跨学科的基础性作用让趋势更稳固。",
    ],
    trendCheckpoint: {
      prompt: "为何很多研究者认为当前 AI 浪潮会持续？",
      options: [
        {
          label: "因为 AI 已有成熟产品，并正成为跨学科的基础力量，而非实验室玩具。",
          correct: true,
          explanation: "落地产品 + 基础性角色使这波不同以往。",
        },
        {
          label: "因为还没有任何现实应用。",
          correct: false,
          explanation: "文本强调了大量现实应用与跨学科影响。",
        },
      ],
    },

    dirTitle: "2. AI 研究方向",
    dirEyebrow: "前沿探索",
    dirThirdTitle: "透明可信的第三代 AI",
    dirThirdParas: [
      "深度模型是“黑箱”，存在对抗样本与幻觉风险。第三代 AI 主张把知识驱动与数据驱动结合，提高透明度与可控性。",
    ],
    dirNeuroTitle: "类脑计算",
    dirNeuroParas: [
      "深度网络耗费巨量算力。类脑芯片模拟大脑机制，追求高能效（大脑仅 ~20W）。代表如清华“天机”、IBM NorthPole 提升能效。",
    ],
    dirOpticalTitle: "光计算",
    dirOpticalParas: [
      "用光做计算（如衍射实现矩阵乘），速度快、热损小。光学神经网络擅长并行处理，但光电集成仍具挑战。",
      "2024 年 6 月的“前向式梯度”训练让大规模光学神经学习更可行。",
    ],
    dirQuantumTitle: "量子计算",
    dirQuantumParas: [
      "量子比特的叠加带来并行性，适用于特定问题（如大数分解）。Google Willow 同时提高比特数与稳定性，几分钟完成经典计算机需上万年的基准任务。",
      "量子优势仍局限特定任务，广泛用于 AI 仍需突破。",
    ],
    dirSteps: [
      "总结为何需要第三代 AI 的透明与可控。",
      "用演示对比类脑/光/量子在能效与成熟度上的差异。",
      "将算力效率突破与 AI 可持续发展联系起来。",
    ],
    dirCheckpoint: {
      prompt: "新型计算范式的提出源于什么？",
      options: [
        {
          label: "算力和能耗激增，需类脑/光/量子等方式提升效率，突破瓶颈。",
          correct: true,
          explanation: "文本强调算力需求飙升与能耗瓶颈。",
        },
        {
          label: "算力需求在下降，所以无需考虑能效。",
          correct: false,
          explanation: "恰恰相反，需求在快速上升。",
        },
      ],
    },

    humanTitle: "3. 人类与 AI",
    humanEyebrow: "共存与治理",
    humanCardTitle: "伦理与社会影响",
    humanParas: [
      "风险包括算法偏见、价格歧视、信息茧房、武器化。随着 AI 变强，伦理与法律问题更紧迫。",
      "需规范使用、合理分配收益、明确责任，使 AI 成为朋友而非威胁。",
    ],
    humanSteps: [
      "列举具体风险（偏见、茧房、滥用）。",
      "在演示中调节治理/应用范围，体会风险-收益权衡。",
      "论述主动治理如何让 AI 服务于人。",
    ],
    humanCheckpoint: {
      prompt: "为什么要强调未来 AI 的治理？",
      options: [
        {
          label: "为了在放大利益的同时抑制偏见、滥用、武器化等风险。",
          correct: true,
          explanation: "文本呼吁伦理法律护栏，确保 AI 成为朋友。",
        },
        {
          label: "因为 AI 完全没有任何社会风险。",
          correct: false,
          explanation: "文中列举多种负面影响，治理必不可少。",
        },
      ],
    },

    summaryTitle: "本节小结",
    summaryEyebrow: "未来展望",
    summaryPoints: [
      "当前 AI 浪潮因现实产品与跨学科基础作用而与众不同。",
      "第三代 AI 追求可解释可信，类脑/光/量子寻求能效突破。",
      "算力需求急升，新的计算范式是可持续发展的关键。",
      "社会问题（偏见、隐私、武器化）要求伦理法律护栏。",
      "通过技术与治理双管齐下，AI 才能持续成为人类伙伴。",
    ],
    summaryCheckpoint: {
      prompt: "如何让 AI 保持“有益的助手”角色？",
      options: [
        {
          label: "提升透明/能效，并建立强有力的伦理与法律治理。",
          correct: true,
          explanation: "技术改进 + 治理护栏是文本强调的路径。",
        },
        {
          label: "忽视风险，完全放任。",
          correct: false,
          explanation: "放任会放大风险，与章节主旨相反。",
        },
      ],
    },
  },
};
