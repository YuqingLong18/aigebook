import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson5_6({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "小测" : "Checkpoint",
    correctLabel: isZh ? "答对啦" : "Correct",
    incorrectLabel: isZh ? "再想想" : "Try again",
    guidedTitle: isZh ? "一起做" : "Try it",
  };

  const t = content[lang];

  const [futureIdea, setFutureIdea] = useState(0);

  const futureIdeas = useMemo(
    () =>
      t.futureIdeas.map((idea, idx) => ({
        ...idea,
        active: idx === futureIdea,
      })),
    [futureIdea, t.futureIdeas],
  );

  const toc = [
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "故事开头" : "Story Start" },
    { id: "no-end", label: isZh ? "1. 没有终点" : "1. No Predicted End Point" },
    { id: "beyond", label: isZh ? "2. 超越人类" : "2. Beyond Humans" },
    { id: "disciplines", label: isZh ? "3. 走进各学科" : "3. Into Other Disciplines" },
    { id: "coexist", label: isZh ? "4. 与 AI 和平相处" : "4. Living with AI" },
    { id: "thought", label: isZh ? "思考" : "Think About It" },
    { id: "summary", label: isZh ? "小结" : "Summary" },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.intro}</p>
        </SectionBlock>

        <SectionBlock id="no-end" title={t.noEndTitle} eyebrow={t.noEndEyebrow}>
          <InfoCard title={t.noEndCard}>
            {t.noEndParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.noEndSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.noEndCheckpoint.prompt}
            options={t.noEndCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="beyond" title={t.beyondTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.beyondIntro}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {t.beyondCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-100"
              >
                <p className="text-sm font-semibold text-slate-900">{card.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
          <GuidedSteps title={ui.guidedTitle} steps={t.beyondSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.beyondCheckpoint.prompt}
            options={t.beyondCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="disciplines" title={t.disciplinesTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.disciplinesIntro}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {futureIdeas.map((idea) => (
              <button
                key={idea.title}
                type="button"
                onClick={() => setFutureIdea(futureIdeas.indexOf(idea))}
                className={[
                  "rounded-2xl border px-4 py-3 text-left transition",
                  idea.active
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                <p className="text-sm font-semibold text-slate-900">{idea.title}</p>
                <p className="mt-1 text-xs text-slate-600">{idea.desc}</p>
              </button>
            ))}
          </div>
          <GuidedSteps title={ui.guidedTitle} steps={t.disciplineSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.disciplineCheckpoint.prompt}
            options={t.disciplineCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="coexist" title={t.coexistTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.coexistIntro}</p>
          <InfoCard title={t.coexistCard}>
            {t.coexistList.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.coexistSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.coexistCheckpoint.prompt}
            options={t.coexistCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="thought" title={t.thoughtTitle} eyebrow={t.thoughtEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.thoughtPrompt}</p>
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
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
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand future trends of AI.",
      "Learn what Artificial General Intelligence (AGI) means and why it is powerful.",
      "Think about AI’s goals and how we live together with AI.",
    ],
    introTitle: "Where are we going?",
    introEyebrow: "Story start",
    intro:
      "AI has grown for almost 70 years. We are at a new crossroads. Let’s peek at the road ahead and how we can be ready.",
    noEndTitle: "1. No Predicted End Point",
    noEndEyebrow: "AI keeps moving",
    noEndCard: "AI is happening now",
    noEndParas: [
      "AI writes, paints, plans trips, and helps daily. Artists, musicians, and writers use it as a tool.",
      "If the 1956 AI pioneers saw today, they would be amazed. AI can match or beat humans in some tasks, and we don’t know the final stop.",
    ],
    noEndSteps: [
      "Name one AI tool you’ve seen (chatbot, drawing tool, planner).",
      "What surprised you most about what AI can do?",
      "Imagine one new job AI might help with.",
    ],
    noEndCheckpoint: {
      prompt: "Why can’t we see an end point for AI yet?",
      options: [
        {
          label: "AI keeps learning and improving, so its abilities keep growing.",
          correct: true,
          explanation: "AI progress is ongoing; we can’t see the final limit yet.",
        },
        {
          label: "AI must stop after 70 years.",
          correct: false,
          explanation: "There is no fixed stop date.",
        },
        {
          label: "AI can only do one thing forever.",
          correct: false,
          explanation: "Modern AI handles many tasks, not just one.",
        },
      ],
    },
    beyondTitle: "2. Intelligence Beyond Humans",
    beyondIntro:
      "Large models can solve many tasks with one system. AI may outperform most people, and someday even top experts, in many areas.",
    beyondCards: [
      {
        title: "From narrow to general",
        desc: "Older AI did one job; newer AI can handle many tasks with one model.",
      },
      {
        title: "Tools in the real world",
        desc: "AI can control drones or robots, learning from the world to improve.",
      },
    ],
    beyondSteps: [
      "Think of a task where AI already beats humans (e.g., some puzzles, fast math).",
      "Think of a task where humans are still better (e.g., empathy).",
    ],
    beyondCheckpoint: {
      prompt: "What is a sign that AI is becoming more general?",
      options: [
        {
          label: "One model can handle many different tasks.",
          correct: true,
          explanation: "General intelligence means wide ability with one system.",
        },
        {
          label: "It must only play chess.",
          correct: false,
          explanation: "That would be narrow intelligence.",
        },
        {
          label: "It never uses tools or sensors.",
          correct: false,
          explanation: "General systems can use tools and data sources.",
        },
      ],
    },
    disciplinesTitle: "3. Entering Other Disciplines",
    disciplinesIntro:
      "AI is helping chemistry, math, astronomy, physics, and more. AlphaFold predicted protein structures and sped up science.",
    futureIdeas: [
      { title: "Biology boost", desc: "Predict protein shapes to speed medicine." },
      { title: "Math helper", desc: "Suggest patterns, check proofs." },
      { title: "Space scout", desc: "Sort images, find interesting signals." },
      { title: "Engineer buddy", desc: "Simulate designs faster." },
    ],
    disciplineSteps: [
      "Pick a subject you like (math, art, sports).",
      "Imagine one way AI could help that subject.",
    ],
    disciplineCheckpoint: {
      prompt: "Why did AlphaFold matter?",
      options: [
        {
          label: "It predicted protein structures, speeding up biology and medicine.",
          correct: true,
          explanation: "This changed how fast scientists can work in biochemistry.",
        },
        {
          label: "It was just a drawing app.",
          correct: false,
          explanation: "AlphaFold was about protein prediction.",
        },
        {
          label: "It only told jokes.",
          correct: false,
          explanation: "It was a scientific model, not a chatbot for jokes.",
        },
      ],
    },
    coexistTitle: "4. Peaceful Coexistence with AI",
    coexistIntro:
      "AI brings benefits and risks. We need to use it wisely, check facts, and keep people safe.",
    coexistCard: "Safe and smart AI use",
    coexistList: [
      "Check facts: AI can make mistakes.",
      "Use for good: avoid harmful uses like fake info or dangerous weapons.",
      "Balance: enjoy AI’s help but stay thoughtful and kind.",
    ],
    coexistSteps: [
      "Name one good use of AI for your class.",
      "Name one risk and how to reduce it.",
    ],
    coexistCheckpoint: {
      prompt: "How do we stay safe with AI?",
      options: [
        {
          label: "Check information and avoid harmful uses.",
          correct: true,
          explanation: "We must verify and use AI responsibly.",
        },
        {
          label: "Trust every answer blindly.",
          correct: false,
          explanation: "We should verify AI outputs.",
        },
        {
          label: "Let AI decide everything for us.",
          correct: false,
          explanation: "Humans stay in charge and think critically.",
        },
      ],
    },
    thoughtTitle: "Think About It",
    thoughtEyebrow: "Food for thought",
    thoughtPrompt:
      "If AI reaches scientist-level intelligence, how should humans and AI share the work of discovery?",
    summaryTitle: "Lesson Summary",
    summaryEyebrow: "Key points",
    summaryPoints: [
      "AI progress is fast, and the finish line is unknown.",
      "General AI can handle many tasks; tool use makes it stronger.",
      "AI boosts science and many subjects (e.g., AlphaFold in biology).",
      "We should use AI wisely, balancing benefits and risks.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "认识人工智能的未来趋势。",
      "了解“通用人工智能（AGI）”和它的强大能力。",
      "思考 AI 的终极目标，以及我们该如何与它共处。",
    ],
    introTitle: "我们要去哪儿？",
    introEyebrow: "故事开头",
    intro: "人工智能发展将近 70 年。我们正站在新路口，看看未来可能是什么样子，以及我们如何做好准备。",
    noEndTitle: "1. 没有预测的终点",
    noEndEyebrow: "AI 不停前进",
    noEndCard: "AI 现在就在身边",
    noEndParas: [
      "AI 会写作、作画、规划行程，成为艺术家、音乐人、写作者的工具。",
      "如果 1956 年的先驱看到今天，会很惊讶。AI 在一些任务上能达到或超过人类，我们还看不到终点。",
    ],
    noEndSteps: ["说出一个你见过的 AI 工具。", "哪件 AI 功能让你最惊讶？", "想象 AI 还能帮助什么新工作。"],
    noEndCheckpoint: {
      prompt: "为什么我们还看不到 AI 的终点？",
      options: [
        {
          label: "AI 持续学习变强，能力在不断增长。",
          correct: true,
          explanation: "AI 仍在进步，没有固定终点。",
        },
        {
          label: "AI 发展到 70 年就会自动停止。",
          correct: false,
          explanation: "没有固定的停止时间。",
        },
        {
          label: "AI 永远只能做一件事。",
          correct: false,
          explanation: "现代 AI 能处理多种任务。",
        },
      ],
    },
    beyondTitle: "2. 超越人类",
    beyondIntro: "大模型能用一个系统完成多种任务。AI 可能超越大多数人类，甚至有一天超过顶尖专家。",
    beyondCards: [
      { title: "从“单一”到“多能”", desc: "早期 AI 做单一工作；新 AI 能用一个模型处理多项任务。" },
      { title: "会用工具的 AI", desc: "AI 可以控制无人机或机器人，从真实世界中学习变强。" },
    ],
    beyondSteps: ["想一个 AI 已经很强的任务。", "想一个人类暂时更擅长的任务。"],
    beyondCheckpoint: {
      prompt: "什么现象说明 AI 越来越通用？",
      options: [
        {
          label: "一个模型可以完成很多不同的任务。",
          correct: true,
          explanation: "通用智能意味着一个系统处理多种任务。",
        },
        {
          label: "它只能下棋。",
          correct: false,
          explanation: "那是“窄”智能。",
        },
        {
          label: "它从不使用工具或传感器。",
          correct: false,
          explanation: "通用系统可以用工具和数据源。",
        },
      ],
    },
    disciplinesTitle: "3. 走进各学科",
    disciplinesIntro: "AI 正帮助化学、数学、天文、物理等。AlphaFold 预测蛋白质结构，加快了科研。",
    futureIdeas: [
      { title: "生物学助力", desc: "预测蛋白结构，帮助药物研发。" },
      { title: "数学好帮手", desc: "提示规律，检查证明。" },
      { title: "太空侦察", desc: "整理图片，发现有趣信号。" },
      { title: "工程小搭档", desc: "更快模拟设计。" },
    ],
    disciplineSteps: ["选一个你喜欢的学科。", "想想 AI 如何帮助它。"],
    disciplineCheckpoint: {
      prompt: "AlphaFold 为何重要？",
      options: [
        {
          label: "它预测蛋白质结构，加快了生物和医学研究。",
          correct: true,
          explanation: "它改变了科研速度。",
        },
        {
          label: "它只是一个绘画应用。",
          correct: false,
          explanation: "AlphaFold 是蛋白质预测模型。",
        },
        {
          label: "它只会讲笑话。",
          correct: false,
          explanation: "它是科学模型，不是聊天逗乐工具。",
        },
      ],
    },
    coexistTitle: "4. 与 AI 和平相处",
    coexistIntro: "AI 有好处也有风险。我们要智慧使用、核实信息，保护安全。",
    coexistCard: "安全、聪明地用 AI",
    coexistList: ["核对事实：AI 会出错。", "用于善：避免假信息或危险用途。", "平衡：享受帮助但保持思考与善意。"],
    coexistSteps: ["说一个 AI 在你课堂的好用法。", "说一个风险和减少它的方法。"],
    coexistCheckpoint: {
      prompt: "如何更安全地用 AI？",
      options: [
        {
          label: "核对信息，避免有害用途。",
          correct: true,
          explanation: "我们要验证并负责任地使用。",
        },
        {
          label: "盲目信任每个答案。",
          correct: false,
          explanation: "需要核对输出。",
        },
        {
          label: "让 AI 替我们决定一切。",
          correct: false,
          explanation: "人类要保持思考和决策。",
        },
      ],
    },
    thoughtTitle: "思考题",
    thoughtEyebrow: "延伸思考",
    thoughtPrompt: "如果 AI 达到科学家水平，人类和 AI 应该如何分工合作？",
    summaryTitle: "本课小结",
    summaryEyebrow: "要点",
    summaryPoints: [
      "AI 发展迅速，终点未知。",
      "通用 AI 可以处理多任务，会用工具更强大。",
      "AI 正在帮助各学科，例如 AlphaFold 在生物领域的贡献。",
      "使用 AI 要兼顾好处与风险。",
    ],
  },
};
