import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson7_5({ lang }: LessonProps) {
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
    { id: "emergence", label: t.emergenceTitle },
    { id: "ai", label: t.aiTitle },
    { id: "food", label: t.foodTitle },
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

        <SectionBlock id="emergence" title={t.emergenceTitle} eyebrow={t.emergenceEyebrow}>
          <InfoCard title={t.emergenceConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.emergenceConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.emergenceParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.emergenceFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <ParallelWorkloadDemo
            lang={lang}
            title={t.emergenceDemo.title}
            goal={t.emergenceDemo.goal}
            resetLabel={ui.reset}
            labels={t.emergenceDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.emergenceSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.emergenceCheckpoint.prompt}
            options={t.emergenceCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="ai" title={t.aiTitle} eyebrow={t.aiEyebrow}>
          <InfoCard title={t.aiConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.aiConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.aiParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.aiFigure.label}
            caption={t.aiFigure.caption}
            placeholder={t.aiFigure.placeholder}
          />
          <TrainingTimeDemo
            lang={lang}
            title={t.aiDemo.title}
            goal={t.aiDemo.goal}
            resetLabel={ui.reset}
            labels={t.aiDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.aiSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.aiCheckpoint.prompt}
            options={t.aiCheckpoint.options}
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
          <CoEvolutionDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            labels={t.foodDemo.labels}
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

type WorkloadMode = "parallel" | "sequential";

function ParallelWorkloadDemo({
  lang,
  title,
  goal,
  resetLabel,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  labels: {
    mode: string;
    parallel: string;
    sequential: string;
    tasks: string;
    cpu: string;
    gpu: string;
    note: string;
  };
}) {
  const isZh = lang === "zh";
  const [mode, setMode] = useState<WorkloadMode>("parallel");
  const [tasks, setTasks] = useState(60);

  const times = useMemo(() => {
    const cpuCores = 6;
    const gpuCores = 1200;
    if (mode === "sequential") {
      return {
        cpu: Math.max(8, Math.round(tasks * 1.1)),
        gpu: Math.max(10, Math.round(tasks * 1.4)),
      };
    }
    return {
      cpu: Math.max(5, Math.round(tasks / cpuCores + 8)),
      gpu: Math.max(2, Math.round(tasks / gpuCores + 4)),
    };
  }, [mode, tasks]);

  const reset = () => {
    setMode("parallel");
    setTasks(60);
  };

  const best = times.cpu <= times.gpu ? "cpu" : "gpu";

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
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.mode}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMode("parallel")}
              className={[
                "flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition",
                mode === "parallel"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {labels.parallel}
            </button>
            <button
              type="button"
              onClick={() => setMode("sequential")}
              className={[
                "flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition",
                mode === "sequential"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {labels.sequential}
            </button>
          </div>

          <label className="block text-sm font-semibold text-slate-700">
            {labels.tasks}
            <input
              type="range"
              min={20}
              max={120}
              value={tasks}
              onChange={(e) => setTasks(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{tasks}</span>
          </label>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <TimeBar label={labels.cpu} value={times.cpu} highlight={best === "cpu"} />
          <TimeBar label={labels.gpu} value={times.gpu} highlight={best === "gpu"} />
          <div className="rounded-lg bg-white px-3 py-2 text-xs text-slate-600">{labels.note}</div>
        </div>
      </div>
    </div>
  );
}

function TimeBar({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  const width = Math.min(100, value);
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <span className={highlight ? "text-emerald-700" : "text-slate-900"}>{value} ms</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-white">
        <div
          className={
            "h-full rounded-full transition-all " +
            (highlight ? "bg-gradient-to-r from-emerald-400 to-sky-500" : "bg-slate-300")
          }
          style={{ width: `${width}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function TrainingTimeDemo({
  lang,
  title,
  goal,
  resetLabel,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  labels: { size: string; cpu: string; gpu: string; note: string };
}) {
  const isZh = lang === "zh";
  const [size, setSize] = useState(3);

  const days = useMemo(() => {
    const cpu = Math.round(8 + size * 6);
    const gpu = Math.max(2, Math.round(cpu / 6));
    return { cpu, gpu };
  }, [size]);

  const reset = () => {
    setSize(3);
  };

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
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {labels.size}
            <input
              type="range"
              min={1}
              max={5}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{size}</span>
          </label>
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.cpu}</p>
          <p className="text-lg font-semibold text-slate-900">{days.cpu} {isZh ? "天" : "days"}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.gpu}</p>
          <p className="text-lg font-semibold text-slate-900">{days.gpu} {isZh ? "天" : "days"}</p>
          <div className="rounded-lg bg-white px-3 py-2 text-xs text-slate-600">{labels.note}</div>
        </div>
      </div>
    </div>
  );
}

function CoEvolutionDemo({
  lang,
  title,
  goal,
  resetLabel,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  labels: { slider: string; gpu: string; ai: string; note: string };
}) {
  const isZh = lang === "zh";
  const [level, setLevel] = useState(60);

  const metrics = useMemo(() => {
    const gpu = Math.min(100, Math.round(level * 0.9 + 10));
    const ai = Math.min(100, Math.round(level * 0.7 + 20));
    return { gpu, ai };
  }, [level]);

  const reset = () => setLevel(60);

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
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {labels.slider}
            <input
              type="range"
              min={0}
              max={100}
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{level}</span>
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <MetricBar label={labels.gpu} value={metrics.gpu} tone="sky" />
          <MetricBar label={labels.ai} value={metrics.ai} tone="emerald" />
          <div className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">{labels.note}</div>
        </div>
      </div>
    </div>
  );
}

function MetricBar({ label, value, tone }: { label: string; value: number; tone: "sky" | "emerald" }) {
  const color = tone === "sky" ? "from-sky-400 to-indigo-500" : "from-emerald-400 to-sky-500";
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-white">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all`}
          style={{ width: `${Math.min(100, value)}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Know how GPUs emerged from graphics needs.",
      "Understand why GPUs accelerate artificial intelligence.",
      "Recognize the co-evolution between GPUs and AI.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Overview",
    introText:
      "Modern AI needs massive computing power. GPUs began as graphics chips for games but became the engines of deep learning.",
    emergenceTitle: "1. The Emergence of GPUs",
    emergenceEyebrow: "Graphics roots",
    emergenceConceptTitle: "Concept Card",
    emergenceConceptLines: [
      "CPU is the brain, good at many different instructions.",
      "Graphics require huge numbers of simple, parallel calculations.",
      "GPUs were built to handle that parallel load efficiently.",
    ],
    emergenceParas: [
      "When games and video grew more complex, CPUs struggled to keep up with heavy graphics rendering.",
      "Special graphics chips appeared in the 1980s, and the term GPU spread after game consoles adopted them.",
      "A GPU packs thousands of simple cores, perfect for processing many pixels at once.",
    ],
    emergenceFigures: [
      {
        label: "Figure 7-18",
        caption: "NEC μPD7220 graphics chip.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-19",
        caption: "Comparison between CPU and GPU structures.",
        placeholder: "Illustration placeholder",
      },
    ],
    emergenceDemo: {
      title: "Parallel Workload Race",
      goal: "Compare how CPUs and GPUs handle sequential vs. parallel work.",
      labels: {
        mode: "Workload type",
        parallel: "Many pixels at once",
        sequential: "One long task",
        tasks: "Work items",
        cpu: "CPU time",
        gpu: "GPU time",
        note: "GPUs shine when many small tasks can run together.",
      },
    },
    emergenceSteps: [
      "Pick parallel or sequential work.",
      "Increase the work items.",
      "Observe which device finishes faster.",
    ],
    emergenceCheckpoint: {
      prompt: "Why are GPUs good at graphics?",
      options: [
        {
          label: "They have many simple cores for parallel pixel work.",
          correct: true,
          explanation: "Graphics tasks can be split across many small cores.",
        },
        {
          label: "They run only one instruction at a time.",
          correct: false,
          explanation: "GPUs rely on many cores, not a single stream.",
        },
        {
          label: "They store all data permanently.",
          correct: false,
          explanation: "Storage is not the key advantage here.",
        },
      ],
    },
    aiTitle: "2. GPUs and Artificial Intelligence",
    aiEyebrow: "Compute boost",
    aiConceptTitle: "Concept Card",
    aiConceptLines: [
      "Neural networks have many parallel neurons and matrix operations.",
      "CUDA let developers program GPUs for general computation.",
      "GPUs made deep learning training much faster.",
    ],
    aiParas: [
      "CUDA opened GPUs to AI researchers so matrix calculations could run in parallel.",
      "For AlexNet in 2012, GPUs reduced training time from over a month to about a week.",
      "Today, GPUs are essential hardware for AI labs and data centers.",
    ],
    aiFigure: {
      label: "Figure 7-20",
      caption: "NVIDIA CUDA platform logo.",
      placeholder: "Illustration placeholder",
    },
    aiDemo: {
      title: "Training Time Estimate",
      goal: "See how model size changes CPU vs. GPU training time.",
      labels: {
        size: "Model size",
        cpu: "CPU training",
        gpu: "GPU training",
        note: "Even a small GPU speedup saves many days at scale.",
      },
    },
    aiSteps: [
      "Move the model-size slider.",
      "Compare CPU days with GPU days.",
      "Explain why GPUs are essential for big models.",
    ],
    aiCheckpoint: {
      prompt: "What made GPUs especially useful for AI?",
      options: [
        {
          label: "They run massive parallel matrix operations.",
          correct: true,
          explanation: "Neural networks need lots of parallel math.",
        },
        {
          label: "They replace the operating system.",
          correct: false,
          explanation: "GPUs assist computation, not OS control.",
        },
        {
          label: "They only store AI data.",
          correct: false,
          explanation: "Storage is not the main advantage.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Partners",
    foodParas: [
      "AI and GPUs now push each other forward.",
      "Stronger models demand better hardware, and better hardware enables new models.",
    ],
    foodDemo: {
      title: "Co-evolution Meter",
      goal: "See how AI demand and GPU growth rise together.",
      labels: {
        slider: "AI momentum",
        gpu: "GPU growth",
        ai: "AI capability",
        note: "Long-term progress comes from both software ideas and hardware advances.",
      },
    },
    foodSteps: [
      "Move the AI momentum slider.",
      "Watch GPU growth and AI capability change.",
      "Summarize the partnership in one sentence.",
    ],
    foodCheckpoint: {
      prompt: "Why are GPUs and AI called \"partners\"?",
      options: [
        {
          label: "Each one accelerates the other’s progress.",
          correct: true,
          explanation: "AI needs GPUs; GPUs gain value from AI demand.",
        },
        {
          label: "GPUs are only for games now.",
          correct: false,
          explanation: "GPUs now power AI training and inference.",
        },
        {
          label: "AI can run without any hardware.",
          correct: false,
          explanation: "AI still needs compute hardware.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "GPUs emerged to handle massive parallel graphics workloads.",
      "CUDA and parallel math made GPUs ideal for neural networks.",
      "AI and GPUs co-evolve: each one fuels the other.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 GPU 从图形需求中诞生的过程。",
      "理解 GPU 为什么能加速人工智能。",
      "认识 GPU 与 AI 的相互促进关系。",
    ],
    introTitle: "故事开始",
    introEyebrow: "概览",
    introText: "现代 AI 需要巨大的计算能力。GPU 起源于游戏图形芯片，后来成为深度学习的发动机。",
    emergenceTitle: "1. GPU 的出现",
    emergenceEyebrow: "图形起点",
    emergenceConceptTitle: "概念卡片",
    emergenceConceptLines: [
      "CPU 像大脑，擅长处理多样指令。",
      "图形需要大量简单、并行的计算。",
      "GPU 为并行计算而设计。",
    ],
    emergenceParas: [
      "随着游戏与视频变得复杂，CPU 处理图形渲染压力越来越大。",
      "20 世纪 80 年代出现了专门的图形芯片，游戏主机推动了 GPU 的普及。",
      "GPU 内含大量简单核心，适合同时处理许多像素。",
    ],
    emergenceFigures: [
      {
        label: "图 7-18",
        caption: "NEC μPD7220 图形芯片。",
        placeholder: "示意图占位",
      },
      {
        label: "图 7-19",
        caption: "CPU 与 GPU 结构对比。",
        placeholder: "示意图占位",
      },
    ],
    emergenceDemo: {
      title: "并行任务竞速",
      goal: "比较 CPU 与 GPU 在串行/并行任务上的表现。",
      labels: {
        mode: "任务类型",
        parallel: "许多像素同时处理",
        sequential: "单条长任务",
        tasks: "任务数量",
        cpu: "CPU 用时",
        gpu: "GPU 用时",
        note: "当任务可以拆成许多小块时，GPU 更有优势。",
      },
    },
    emergenceSteps: [
      "选择并行或串行任务。",
      "拖动任务数量。",
      "观察哪种设备更快。",
    ],
    emergenceCheckpoint: {
      prompt: "GPU 为什么适合图形计算？",
      options: [
        {
          label: "它拥有大量简单核心，可并行处理像素。",
          correct: true,
          explanation: "图形任务可以拆成许多并行小任务。",
        },
        {
          label: "它一次只运行一条指令。",
          correct: false,
          explanation: "GPU 依靠多核心并行。",
        },
        {
          label: "它负责永久存储数据。",
          correct: false,
          explanation: "优势在计算而不是存储。",
        },
      ],
    },
    aiTitle: "2. GPU 与人工智能",
    aiEyebrow: "算力加速",
    aiConceptTitle: "概念卡片",
    aiConceptLines: [
      "神经网络包含大量并行计算与矩阵运算。",
      "CUDA 让 GPU 可以用于通用计算。",
      "GPU 让深度学习训练显著加速。",
    ],
    aiParas: [
      "CUDA 提供了 GPU 编程接口，让矩阵运算在 GPU 上并行执行。",
      "2012 年 AlexNet 使用 GPU 将训练时间从一个多月缩短到 5-6 天。",
      "如今 GPU 已成为 AI 研究与产业的关键硬件。",
    ],
    aiFigure: {
      label: "图 7-20",
      caption: "NVIDIA CUDA 平台标志。",
      placeholder: "示意图占位",
    },
    aiDemo: {
      title: "训练时间估算",
      goal: "观察模型规模变化时 CPU 与 GPU 的训练差距。",
      labels: {
        size: "模型规模",
        cpu: "CPU 训练",
        gpu: "GPU 训练",
        note: "规模越大，GPU 节省的天数越多。",
      },
    },
    aiSteps: [
      "拖动模型规模滑块。",
      "比较 CPU 与 GPU 的训练天数。",
      "总结 GPU 对大模型的重要性。",
    ],
    aiCheckpoint: {
      prompt: "GPU 为什么能加速 AI 训练？",
      options: [
        {
          label: "它能并行完成大量矩阵运算。",
          correct: true,
          explanation: "神经网络的核心计算非常适合并行。",
        },
        {
          label: "它替代操作系统。",
          correct: false,
          explanation: "GPU 只负责加速计算。",
        },
        {
          label: "它只负责存储数据。",
          correct: false,
          explanation: "优势在于计算而不是存储。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "共同成长",
    foodParas: [
      "AI 的爆发与 GPU 的进步相互促进。",
      "更强的模型需要更强硬件，更强硬件又让新模型成为可能。",
    ],
    foodDemo: {
      title: "共同进化刻度",
      goal: "观察 AI 需求与 GPU 发展如何同步上升。",
      labels: {
        slider: "AI 发展势头",
        gpu: "GPU 发展",
        ai: "AI 能力",
        note: "长期进步来自算法创新与硬件积累的双重推动。",
      },
    },
    foodSteps: [
      "拖动 AI 发展势头。",
      "观察 GPU 与 AI 的变化。",
      "用一句话概括它们的伙伴关系。",
    ],
    foodCheckpoint: {
      prompt: "为什么说 GPU 与 AI 是伙伴？",
      options: [
        {
          label: "它们彼此推动对方的进步。",
          correct: true,
          explanation: "AI 需要 GPU，GPU 也因 AI 需求而发展。",
        },
        {
          label: "GPU 现在只用来玩游戏。",
          correct: false,
          explanation: "GPU 已成为 AI 的关键算力。",
        },
        {
          label: "AI 不需要任何硬件。",
          correct: false,
          explanation: "AI 仍需要强大的计算硬件。",
        },
      ],
    },
    summaryTitle: "关键结论",
    summaryEyebrow: "总结",
    summaryPoints: [
      "GPU 为并行图形计算而生。",
      "CUDA 与并行矩阵运算让 GPU 成为 AI 的利器。",
      "GPU 与 AI 共同成长，彼此加速。",
    ],
  },
};
