import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson3_5({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "小测" : "Checkpoint",
    correctLabel: isZh ? "答对啦" : "Correct",
    incorrectLabel: isZh ? "再想想" : "Try again",
    guidedTitle: isZh ? "一起做" : "Try it",
  };

  const t = content[lang];
  const toc = [
    { id: "learning-objectives", label: t.learningObjectivesTitle },
    { id: "intro", label: t.introTitle },
    { id: "openai", label: t.openaiTitle },
    { id: "chatgpt", label: t.chatgptTitle },
    { id: "food", label: t.foodTitle },
    { id: "history", label: t.historyTitle },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.introText}</p>
        </SectionBlock>

        <SectionBlock id="openai" title={t.openaiTitle} eyebrow={t.openaiEyebrow}>
          <InfoCard title={t.openaiConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.openaiConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.openaiParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.openaiFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <OpenAITimelineDemo
            lang={lang}
            title={t.openaiDemo.title}
            goal={t.openaiDemo.goal}
            resetLabel={ui.reset}
            events={t.openaiDemo.events}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.openaiSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.openaiCheckpoint.prompt}
            options={t.openaiCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="chatgpt" title={t.chatgptTitle} eyebrow={t.chatgptEyebrow}>
          <InfoCard title={t.chatgptConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.chatgptConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.chatgptParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <ChatGPTUseDemo
            lang={lang}
            title={t.chatgptDemo.title}
            goal={t.chatgptDemo.goal}
            resetLabel={ui.reset}
            scenarios={t.chatgptDemo.scenarios}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.chatgptSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.chatgptCheckpoint.prompt}
            options={t.chatgptCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="food" title={t.foodTitle} eyebrow={t.foodEyebrow}>
          {t.foodParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <DreamPlanDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            paths={t.foodDemo.paths}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.foodSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.foodCheckpoint.prompt}
            options={t.foodCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <InfoCard title={t.historyCardTitle}>
            {t.historyParas.map((para) => (
              <p key={para} className="text-sm text-slate-700">
                {para}
              </p>
            ))}
          </InfoCard>
          <ElizaDemo
            lang={lang}
            title={t.historyDemo.title}
            goal={t.historyDemo.goal}
            resetLabel={ui.reset}
            prompts={t.historyDemo.prompts}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

type TimelineEvent = {
  key: string;
  label: string;
  year: string;
  detail: string;
};

function OpenAITimelineDemo({
  lang,
  title,
  goal,
  resetLabel,
  events,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  events: TimelineEvent[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(events[0]?.key ?? "");
  const current = events.find((event) => event.key === active) ?? events[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          onClick={() => setActive(events[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {events.map((event) => (
          <button
            key={event.key}
            type="button"
            onClick={() => setActive(event.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              event.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {event.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{current.year}</p>
          <p className="mt-1 text-sm text-slate-700">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type ChatScenario = {
  key: string;
  label: string;
  user: string;
  response: string;
};

function ChatGPTUseDemo({
  lang,
  title,
  goal,
  resetLabel,
  scenarios,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  scenarios: ChatScenario[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(scenarios[0]?.key ?? "");
  const current = scenarios.find((scenario) => scenario.key === active) ?? scenarios[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          onClick={() => setActive(scenarios[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {scenarios.map((scenario) => (
          <button
            key={scenario.key}
            type="button"
            onClick={() => setActive(scenario.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              scenario.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {scenario.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "用户" : "User"}
          </p>
          <p>{current.user}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "ChatGPT" : "ChatGPT"}
          </p>
          <p>{current.response}</p>
        </div>
      )}
    </div>
  );
}

type DreamPath = {
  key: string;
  label: string;
  steps: string[];
};

function DreamPlanDemo({
  lang,
  title,
  goal,
  resetLabel,
  paths,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  paths: DreamPath[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(paths[0]?.key ?? "");
  const current = paths.find((path) => path.key === active) ?? paths[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          onClick={() => setActive(paths[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {paths.map((path) => (
          <button
            key={path.key}
            type="button"
            onClick={() => setActive(path.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              path.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {path.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "准备步骤" : "Preparation"}
          </p>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            {current.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

type ElizaPrompt = {
  key: string;
  label: string;
  prompt: string;
  response: string;
};

function ElizaDemo({
  lang,
  title,
  goal,
  resetLabel,
  prompts,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  prompts: ElizaPrompt[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(prompts[0]?.key ?? "");
  const current = prompts.find((prompt) => prompt.key === active) ?? prompts[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          onClick={() => setActive(prompts[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {prompts.map((prompt) => (
          <button
            key={prompt.key}
            type="button"
            onClick={() => setActive(prompt.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              prompt.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {prompt.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "用户" : "User"}
          </p>
          <p>{current.prompt}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">ELIZA</p>
          <p>{current.response}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand how OpenAI developed and its role in advancing AI.",
      "Learn about the functions of ChatGPT.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "One long-term goal of AI is natural conversation between humans and machines. From early chatbots like ELIZA to modern systems like ChatGPT, the journey has been long.",
    openaiTitle: "1. OpenAI: Between \"Genius\" and \"Madman\"",
    openaiEyebrow: "A bold research lab",
    openaiConceptTitle: "Concept Card",
    openaiConceptLines: [
      "OpenAI was founded in 2015 with a mission to build safe AGI.",
      "It attracted top researchers with a vision of openness.",
      "GPT models learned from massive text to generate fluent language.",
    ],
    openaiParas: [
      "In 2015, Sam Altman, Elon Musk, and others founded OpenAI in San Francisco with a promise of openness and safety (Figure 3-12).",
      "It began as a non-profit with a large funding pledge and recruited top researchers like Ilya Sutskever and Greg Brockman.",
      "To support growth, OpenAI later created a for-profit arm and accepted investment. Some models were no longer fully open for safety reasons.",
      "In 2022, OpenAI released ChatGPT (Figure 3-13). It was trained on huge amounts of text and could respond fluently to many tasks.",
    ],
    openaiFigures: [
      { label: "Figure 3-12", caption: "OpenAI and its main founders.", placeholder: "Illustration placeholder" },
      { label: "Figure 3-13", caption: "Logo of the GPT model.", placeholder: "Illustration placeholder" },
    ],
    openaiDemo: {
      title: "OpenAI Timeline",
      goal: "See key milestones in OpenAI's development.",
      events: [
        {
          key: "founding",
          label: "Founding",
          year: "2015",
          detail: "OpenAI was founded with a goal of safe and open AI research.",
        },
        {
          key: "gpt",
          label: "GPT",
          year: "2018",
          detail: "OpenAI released GPT, a large language model.",
        },
        {
          key: "chatgpt",
          label: "ChatGPT",
          year: "2022",
          detail: "ChatGPT made AI conversation widely accessible.",
        },
      ],
    },
    openaiSteps: [
      "Select a milestone.",
      "Explain why OpenAI focused on openness and safety.",
      "Describe how GPT models changed AI communication.",
    ],
    openaiCheckpoint: {
      prompt: "Why was OpenAI created?",
      options: [
        {
          label: "To develop safe artificial general intelligence and share research.",
          correct: true,
          explanation: "Openness and safety were core goals at the start.",
        },
        {
          label: "To replace all human teachers immediately.",
          correct: false,
          explanation: "OpenAI's mission was broader and focused on safety.",
        },
        {
          label: "To build robots that never talk.",
          correct: false,
          explanation: "Conversation is a key AI goal.",
        },
      ],
    },
    chatgptTitle: "2. Chatting with ChatGPT",
    chatgptEyebrow: "What ChatGPT can do",
    chatgptConceptTitle: "Concept Card",
    chatgptConceptLines: [
      "ChatGPT can handle conversations, stories, and problem solving.",
      "It responds to prompts with fluent text.",
      "It is a tool that can assist learning and creativity.",
    ],
    chatgptParas: [
      "ChatGPT can answer questions, write stories, generate poems, and even solve math problems.",
      "It was trained on about 45 TB of text data, roughly equal to 1.75 million copies of Dream of the Red Chamber.",
      "Here are some typical conversations.",
    ],
    chatgptDemo: {
      title: "ChatGPT Examples",
      goal: "Explore different types of ChatGPT conversations.",
      scenarios: [
        {
          key: "weather",
          label: "Weather",
          user: "How's the weather today?",
          response:
            "The weather is nice today: sunny, mild, and perfect for a walk. If you enjoy outdoor activities, you could take advantage of this good weather to enjoy nature.",
        },
        {
          key: "counsel",
          label: "Stress",
          user: "I've been feeling really stressed lately and can't seem to focus.",
          response:
            "It sounds like you're going through some challenges. Difficulty focusing can be related to stress. You might try relaxation techniques such as deep breathing or short breaks.",
        },
        {
          key: "story",
          label: "Story",
          user: "Write the opening of a story about a lonely traveler crossing a desert.",
          response:
            "Under the blazing sun, the desert stretched endlessly... His water bag was nearly empty, yet he had no thought of turning back.",
        },
        {
          key: "poem",
          label: "Poem",
          user: "Write a poem praising autumn.",
          response:
            "The autumn breeze stirs, yellow leaves take flight,\nLonely maple groves glow in the evening light.",
        },
        {
          key: "couplet",
          label: "Couplet",
          user: "Write a couplet about spring.",
          response:
            "Upper line: Spring winds green a thousand splendid hills.\nLower line: Gentle rains nourish ten thousand things anew.",
        },
        {
          key: "riddle",
          label: "Riddle",
          user: "Winter melon, cucumber, watermelon, and pumpkin can all be eaten; what melon can't be eaten?",
          response: "A \"silly melon\" (Chinese for \"fool\").",
        },
        {
          key: "math",
          label: "Math",
          user: "Which is bigger, 3 + 5 or 10 - 3?",
          response: "3 + 5 = 8, 10 - 3 = 7, so 3 + 5 is bigger.",
        },
      ],
    },
    chatgptSteps: [
      "Select a conversation type.",
      "Read the user prompt and response.",
      "Explain how ChatGPT helps in that situation.",
    ],
    chatgptCheckpoint: {
      prompt: "What is a correct description of ChatGPT?",
      options: [
        {
          label: "A tool that responds to prompts with fluent text across many tasks.",
          correct: true,
          explanation: "ChatGPT can answer questions, write stories, and more.",
        },
        {
          label: "A robot that only moves objects.",
          correct: false,
          explanation: "ChatGPT focuses on language, not physical tasks.",
        },
        {
          label: "A system that never uses training data.",
          correct: false,
          explanation: "ChatGPT learns from large text datasets.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Share your dream",
    foodParas: [
      "OpenAI's journey shows the power of dreams and teamwork. It took bold ideas, patient research, and strong dedication to build ChatGPT.",
      "Share your dream with classmates and think about how to prepare for it.",
    ],
    foodDemo: {
      title: "Dream Planner",
      goal: "Pick a dream and map out preparation steps.",
      paths: [
        {
          key: "research",
          label: "AI researcher",
          steps: ["Study math and coding.", "Read about AI ethics.", "Practice building small projects."],
        },
        {
          key: "creator",
          label: "Creative writer",
          steps: ["Read widely.", "Practice daily writing.", "Use AI tools to brainstorm ideas."],
        },
        {
          key: "engineer",
          label: "Engineer",
          steps: ["Learn physics basics.", "Build hands-on models.", "Work on teamwork skills."],
        },
      ],
    },
    foodSteps: ["Choose a dream path.", "List two preparation steps.", "Share how you will stay focused."],
    foodCheckpoint: {
      prompt: "What is the lesson's advice about dreams?",
      options: [
        {
          label: "Dream big and prepare with steady effort.",
          correct: true,
          explanation: "The story highlights dedication and preparation.",
        },
        {
          label: "Dreams come true without practice.",
          correct: false,
          explanation: "Preparation is needed.",
        },
        {
          label: "Stop dreaming once technology advances.",
          correct: false,
          explanation: "The lesson encourages sharing dreams.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "The story of ELIZA",
    historyCardTitle: "ELIZA the chatbot",
    historyParas: [
      "In 1966, Joseph Weizenbaum created ELIZA, an early chatbot inspired by a therapist's style.",
      "ELIZA repeated key words and asked questions to keep the conversation going.",
      "People often felt it sounded intelligent even though it did not understand meaning.",
    ],
    historyDemo: {
      title: "Try ELIZA Style",
      goal: "See how ELIZA echoed user statements with questions.",
      prompts: [
        {
          key: "sad",
          label: "Feeling sad",
          prompt: "I'm unhappy today.",
          response: "Why are you unhappy today?",
        },
        {
          key: "school",
          label: "School stress",
          prompt: "Schoolwork is hard lately.",
          response: "Why do you feel schoolwork is hard lately?",
        },
        {
          key: "friend",
          label: "Friendship",
          prompt: "I argued with my friend.",
          response: "Why do you think you argued with your friend?",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Lesson summary",
    summaryPoints: [
      "OpenAI was founded to pursue safe and open AI research.",
      "GPT and ChatGPT show the power of large language models.",
      "ChatGPT can handle many types of conversations and tasks.",
      "ELIZA reminds us that early chatbots relied on simple patterns.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 OpenAI 的发展历程及其在 AI 技术中的重要作用。",
      "认识 ChatGPT 的主要功能。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText:
      "人工智能的重要目标之一是让机器与人自然对话。从 ELIZA 到 ChatGPT，这条路走了很久。",
    openaiTitle: "1. OpenAI：在“天才”和“疯子”之间",
    openaiEyebrow: "大胆的研究实验室",
    openaiConceptTitle: "概念卡片",
    openaiConceptLines: [
      "OpenAI 于 2015 年成立，目标是安全的通用人工智能。",
      "它吸引了世界顶尖研究者与大胆的愿景。",
      "GPT 模型通过大量文本学习生成语言。",
    ],
    openaiParas: [
      "2015 年，山姆·奥特曼、埃隆·马斯克等人在旧金山创建 OpenAI（图 3-12），主张开放与安全。",
      "它最初是非营利机构，获得了大额资金支持，并吸引伊利亚·苏茨克维、格雷格·布罗克曼等研究者。",
      "为了继续发展，OpenAI 后来设立了营利机构并引入投资，一些模型出于安全原因不再完全开放。",
      "2022 年，OpenAI 发布 ChatGPT（图 3-13），它能进行流畅对话并完成多种任务。",
    ],
    openaiFigures: [
      { label: "图 3-12", caption: "OpenAI 及其主要创始人。", placeholder: "插图占位" },
      { label: "图 3-13", caption: "GPT 模型标识。", placeholder: "插图占位" },
    ],
    openaiDemo: {
      title: "OpenAI 时间线",
      goal: "了解 OpenAI 的关键节点。",
      events: [
        {
          key: "founding",
          label: "成立",
          year: "2015 年",
          detail: "OpenAI 成立，目标是安全且开放的 AI 研究。",
        },
        {
          key: "gpt",
          label: "GPT",
          year: "2018 年",
          detail: "OpenAI 发布 GPT 大语言模型。",
        },
        {
          key: "chatgpt",
          label: "ChatGPT",
          year: "2022 年",
          detail: "ChatGPT 让对话式 AI 走向大众。",
        },
      ],
    },
    openaiSteps: ["选择一个里程碑。", "说明 OpenAI 为什么重视安全。", "说说 GPT 对对话的影响。"],
    openaiCheckpoint: {
      prompt: "OpenAI 成立的初衷是什么？",
      options: [
        {
          label: "追求安全的通用人工智能并分享研究。",
          correct: true,
          explanation: "开放与安全是最初的核心。",
        },
        {
          label: "马上取代所有老师。",
          correct: false,
          explanation: "OpenAI 的目标更广泛且强调安全。",
        },
        {
          label: "制造不会说话的机器人。",
          correct: false,
          explanation: "对话是 AI 的重要目标之一。",
        },
      ],
    },
    chatgptTitle: "2. 和 ChatGPT 聊天",
    chatgptEyebrow: "ChatGPT 的能力",
    chatgptConceptTitle: "概念卡片",
    chatgptConceptLines: [
      "ChatGPT 能聊天、写故事、解题。",
      "它根据提示生成流畅文本。",
      "它是学习与创作的助手。",
    ],
    chatgptParas: [
      "ChatGPT 可以回答问题、写故事、生成诗歌、解数学题。",
      "它训练时使用了约 45 TB 的文本数据，约等于 175 万本《红楼梦》。",
      "以下是一些示例。",
    ],
    chatgptDemo: {
      title: "ChatGPT 对话示例",
      goal: "查看不同类型的对话。",
      scenarios: [
        {
          key: "weather",
          label: "天气",
          user: "今天天气怎么样？",
          response: "今天天气不错，阳光温和，适合散步和户外活动。",
        },
        {
          key: "counsel",
          label: "压力",
          user: "我最近很紧张，无法集中注意力。",
          response: "听起来你压力不小。可以尝试深呼吸或短暂休息来缓解紧张。",
        },
        {
          key: "story",
          label: "故事",
          user: "写一个孤独旅人穿越沙漠的故事开头。",
          response: "烈日下，沙漠无尽延伸……他的水袋几乎空了，但他仍不停步。",
        },
        {
          key: "poem",
          label: "诗歌",
          user: "写一首赞美秋天的诗。",
          response: "秋风轻起黄叶飞，晚霞映照枫林辉。",
        },
        {
          key: "couplet",
          label: "对联",
          user: "写一副描写春天的对联。",
          response: "上联：春风绿遍千重岭。下联：细雨滋润万物新。",
        },
        {
          key: "riddle",
          label: "谜语",
          user: "冬瓜、黄瓜、西瓜、南瓜都能吃，什么瓜不能吃？",
          response: "“傻瓜”。",
        },
        {
          key: "math",
          label: "数学",
          user: "3 + 5 和 10 - 3 哪个更大？",
          response: "3 + 5 = 8，10 - 3 = 7，所以 3 + 5 更大。",
        },
      ],
    },
    chatgptSteps: ["选择一种对话类型。", "阅读用户问题和回答。", "说明 ChatGPT 在该场景的帮助。"],
    chatgptCheckpoint: {
      prompt: "下列哪项对 ChatGPT 的描述正确？",
      options: [
        {
          label: "它能根据提示生成流畅文本，完成多种任务。",
          correct: true,
          explanation: "ChatGPT 擅长语言生成与对话。",
        },
        {
          label: "它只会搬运物品。",
          correct: false,
          explanation: "ChatGPT 主要处理语言任务。",
        },
        {
          label: "它完全不需要训练数据。",
          correct: false,
          explanation: "ChatGPT 依赖大量文本训练。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "分享你的梦想",
    foodParas: [
      "OpenAI 的故事说明梦想与团队合作的力量。大胆想象、坚持努力才能带来突破。",
      "分享你的梦想，并想想需要怎样的准备。",
    ],
    foodDemo: {
      title: "梦想计划",
      goal: "选择一个梦想并规划准备步骤。",
      paths: [
        {
          key: "research",
          label: "AI 科学家",
          steps: ["学习数学与编程。", "了解 AI 伦理。", "做小型项目练习。"],
        },
        {
          key: "creator",
          label: "创作者",
          steps: ["广泛阅读。", "坚持写作练习。", "用 AI 工具激发灵感。"],
        },
        {
          key: "engineer",
          label: "工程师",
          steps: ["打好物理基础。", "动手搭建模型。", "培养团队协作。"],
        },
      ],
    },
    foodSteps: ["选择一个梦想。", "列出两条准备行动。", "说说如何保持努力。"],
    foodCheckpoint: {
      prompt: "本课对梦想的建议是什么？",
      options: [
        {
          label: "怀抱梦想，并用持续努力去准备。",
          correct: true,
          explanation: "故事强调坚持和准备。",
        },
        {
          label: "不用准备就能实现梦想。",
          correct: false,
          explanation: "实现梦想需要努力。",
        },
        {
          label: "有技术就不需要梦想。",
          correct: false,
          explanation: "课程鼓励分享梦想。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "ELIZA 的故事",
    historyCardTitle: "早期聊天机器人",
    historyParas: [
      "1966 年，魏泽鲍姆创造了聊天机器人 ELIZA。",
      "ELIZA 会重复关键词并用问题延续对话。",
      "尽管不真正理解内容，它仍让许多人觉得“很聪明”。",
    ],
    historyDemo: {
      title: "体验 ELIZA",
      goal: "看看 ELIZA 如何用问题回应。",
      prompts: [
        { key: "sad", label: "心情低落", prompt: "我今天不太开心。", response: "为什么你今天不太开心？" },
        { key: "school", label: "学习压力", prompt: "最近作业很难。", response: "为什么你觉得作业很难？" },
        { key: "friend", label: "朋友争执", prompt: "我和朋友吵架了。", response: "为什么你们会吵架？" },
      ],
    },
    summaryTitle: "关键要点",
    summaryEyebrow: "课程小结",
    summaryPoints: [
      "OpenAI 成立于 2015 年，强调安全与开放。",
      "GPT 和 ChatGPT 展示了大语言模型能力。",
      "ChatGPT 可以处理多种语言任务。",
      "ELIZA 提醒我们早期聊天机器人很依赖模板。",
    ],
  },
};
