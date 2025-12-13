import { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { SectionBlock } from "./components/SectionBlock";
import { ComingSoon } from "./pages/ComingSoon";
import { HighLesson1_1 } from "./pages/high-1-1";
import { HighLesson1_2 } from "./pages/high-1-2";
import { HighLesson1_3 } from "./pages/high-1-3";
import { HighLesson1_4 } from "./pages/high-1-4";
import { HighLesson1_5 } from "./pages/high-1-5";
import { HighLesson1_6 } from "./pages/high-1-6";
import { HighLesson2_1 } from "./pages/high-2-1";
import { HighLesson2_2 } from "./pages/high-2-2";
import { HighLesson2_3 } from "./pages/high-2-3";
import { HighLesson2_4 } from "./pages/high-2-4";
import { HighLesson2_5 } from "./pages/high-2-5";
import { HighLesson2_6 } from "./pages/high-2-6";
import { HighLesson2_7 } from "./pages/high-2-7";
import { HighLesson2_9 } from "./pages/high-2-9";
import { HighLesson2_10 } from "./pages/high-2-10";
import { HighLesson2_8 } from "./pages/high-2-8";
import { MiddleLesson7_7 } from "./pages/middle-7-7";
import { NavigationPage } from "./pages/NavigationPage";
import { PrimaryLesson5_6 } from "./pages/primary-5-6";

function App() {
  const [lang, setLang] = useState<"en" | "zh">("zh");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
          <Header lang={lang} setLang={setLang} />
          <Routes>
            <Route path="/" element={<NavigationPage lang={lang} />} />
            <Route path="/high/ch/:chapter/lesson/:lesson" element={<LessonRouter lang={lang} />} />
            <Route path="/high/ch:chapter/lesson:lesson" element={<LessonRouter lang={lang} />} />
            <Route
              path="/primary/unit/:unit/lesson/:lesson"
              element={<LessonRouter lang={lang} level="primary" />}
            />
            <Route
              path="/middle/unit/:unit/lesson/:lesson"
              element={<LessonRouter lang={lang} level="middle" />}
            />
            <Route path="*" element={<NavigationPage lang={lang} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

type HeaderProps = {
  lang: "en" | "zh";
  setLang: (lang: "en" | "zh") => void;
};

function Header({ lang, setLang }: HeaderProps) {
  const isZh = lang === "zh";
  const location = useLocation();
  const onHome = location.pathname === "/";

  return (
    <header className="mb-8 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-600">
            {isZh ? "AI 素养学习" : "AI Literacy Learning"}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            {isZh ? "互动课程导航" : "Interactive Lesson Navigation"}
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
            {isZh
              ? "请选择学段、章节与课次，点击进入已开放的互动课程。默认显示中文，可随时切换。"
              : "Choose a school edition, chapter, and lesson, then jump into open interactive lessons. Default language is Chinese; toggle anytime."}
          </p>
          {!onHome && (
            <Link
              to="/"
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 underline"
            >
              {isZh ? "返回导航" : "Back to navigation"}
            </Link>
          )}
        </div>
        <button
          className="h-10 rounded-full border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
          type="button"
          onClick={() => setLang(isZh ? "en" : "zh")}
          aria-label={isZh ? "切换到英文" : "Switch to Chinese"}
        >
          {lang === "en" ? "English / 中文" : "中文 / English"}
        </button>
      </div>
    </header>
  );
}

type LessonRouterProps = {
  lang: "en" | "zh";
  level?: "primary" | "high" | "middle";
};

function LessonRouter({ lang, level = "high" }: LessonRouterProps) {
  const { chapter, lesson, unit } = useParams();
  const chapterNum = Number(chapter ?? unit);
  const lessonNum = Number(lesson);
  const isZh = lang === "zh";

  if (level === "primary" && chapterNum === 5 && lessonNum === 6) {
    return (
      <div className="space-y-4">
        <SectionBlock
          title={isZh ? "第 5 单元 · 第 6 课：走向未来" : "Unit 5 · Lesson 6: Moving Toward the Future"}
          eyebrow={isZh ? "已开放课程" : "Open lesson"}
        >
          <p className="text-sm text-slate-700">
            {isZh
              ? "面向小学生的未来展望：人工智能的发展、通用智能、与科学共进与共存。"
              : "Future-focused for primary learners: AI’s development, general intelligence, cross-discipline impact, and living alongside AI."}
          </p>
        </SectionBlock>
        <PrimaryLesson5_6 lang={lang} />
      </div>
    );
  }

  if (level === "middle" && chapterNum === 7 && lessonNum === 7) {
    return (
      <div className="space-y-4">
        <SectionBlock
          title={
            isZh
              ? "第 7 单元 · 第 7 课：深度学习的挑战：可解释性"
              : "Unit 7 · Lesson 7: Deep Learning Challenges — Explainability"
          }
          eyebrow={isZh ? "已开放课程" : "Open lesson"}
        >
          <p className="text-sm text-slate-700">
            {isZh
              ? "聚焦深度学习“黑箱”问题，了解局部与全局解释方法及可解释性不足的根源。"
              : "Focus on the deep learning “black box”, local and global explanations, and root causes of low explainability."}
          </p>
        </SectionBlock>
        <MiddleLesson7_7 lang={lang} />
      </div>
    );
  }

  if (chapterNum === 1 && level === "high" && [1, 2, 3, 4, 5, 6].includes(lessonNum)) {
    return (
      <div className="space-y-4">
        <SectionBlock
          title={
            lessonNum === 1
              ? isZh
                ? "第 1 单元 · 第 1 课：什么是人工智能"
                : "Unit 1 · Lesson 1: What is Artificial Intelligence"
              : lessonNum === 2
                ? isZh
                  ? "第 1 单元 · 第 2 课：人类智能的起源"
                  : "Unit 1 · Lesson 2: Origin of Human Intelligence"
                : lessonNum === 3
                  ? isZh
                    ? "第 1 单元 · 第 3 课：人工智能的起源：数理逻辑"
                    : "Unit 1 · Lesson 3: Origins of AI: Mathematical Logic"
                  : lessonNum === 4
                    ? isZh
                      ? "第 1 单元 · 第 4 课：人工智能的起源：计算机的诞生"
                      : "Unit 1 · Lesson 4: Origins of AI: Birth of Computers"
                    : lessonNum === 5
                      ? isZh
                        ? "第 1 单元 · 第 5 课：图灵：人工智能之父"
                        : "Unit 1 · Lesson 5: Turing: Father of AI"
                      : isZh
                        ? "第 1 单元 · 第 6 课：人工智能的开端"
                        : "Unit 1 · Lesson 6: The Beginning of AI"
          }
          eyebrow={isZh ? "已开放课程" : "Open lesson"}
        >
          <p className="text-sm text-slate-700">
            {lessonNum === 1
              ? isZh
                ? "概览 AI 定义、与自动化区别、现代特征、应用与影响。"
                : "Overview of AI definitions, differences from automation, modern traits, applications, and impacts."
              : lessonNum === 2
                ? isZh
                  ? "追溯人类智力的演化、合作与文化累积。"
                  : "Trace human intelligence evolution, cooperation, and cultural accumulation."
                : lessonNum === 3
                  ? isZh
                    ? "从三段论到布尔代数，探讨逻辑与思维数学化的 AI 根基。"
                    : "From syllogism to Boolean algebra—the logical roots of AI."
                  : lessonNum === 4
                    ? isZh
                      ? "图灵机、香农电路、存储程序计算机为 AI 提供计算基石。"
                      : "Turing machine, Shannon circuits, and stored-program computers as computation bedrock for AI."
                    : lessonNum === 5
                      ? isZh
                        ? "图灵的通用机、学习设想与图灵测试的奠基作用。"
                        : "Turing’s universal machine, learning ideas, and Turing Test foundations."
                      : isZh
                        ? "本课聚焦早期 AI 研究与达特茅斯会议。"
                        : "Early AI research and the Dartmouth Conference."}
          </p>
        </SectionBlock>
        {lessonNum === 1 && <HighLesson1_1 lang={lang} />}
        {lessonNum === 2 && <HighLesson1_2 lang={lang} />}
        {lessonNum === 3 && <HighLesson1_3 lang={lang} />}
        {lessonNum === 4 && <HighLesson1_4 lang={lang} />}
        {lessonNum === 5 && <HighLesson1_5 lang={lang} />}
        {lessonNum === 6 && <HighLesson1_6 lang={lang} />}
      </div>
    );
  }

  if (chapterNum === 2 && level === "high" && [1, 2, 3, 4, 5, 6, 7, 9, 10].includes(lessonNum)) {
    const titles = {
      1: isZh ? "第 2 章 · 第 1 课：基于知识的人工智能" : "Chapter 2 · Lesson 1: Knowledge-Based AI",
      2: isZh ? "第 2 章 · 第 2 课：基于学习的人工智能" : "Chapter 2 · Lesson 2: Learning-Based AI",
      3: isZh ? "第 2 章 · 第 3 课：机器学习基础流程" : "Chapter 2 · Lesson 3: ML Workflow",
      4: isZh ? "第 2 章 · 第 4 课：机器学习方法" : "Chapter 2 · Lesson 4: ML Methods",
      5: isZh ? "第 2 章 · 第 5 课：机器学习四大学派" : "Chapter 2 · Lesson 5: Four ML Schools",
      6: isZh ? "第 2 章 · 第 6 课：初识人工神经网络" : "Chapter 2 · Lesson 6: Intro to Artificial Neural Networks",
      7: isZh ? "第 2 章 · 第 7 课：典型神经网络结构" : "Chapter 2 · Lesson 7: Typical Neural Network Structures",
      9: isZh ? "第 2 章 · 第 9 课：大模型基本原理（1）" : "Chapter 2 · Lesson 9: Large Models Basics (1)",
      10: isZh ? "第 2 章 · 第 10 课：大模型基本原理（2）" : "Chapter 2 · Lesson 10: Large Models Basics (2)",
    } as const;

    const blurbs = {
      1: isZh
        ? "介绍流体/晶体智力、定理证明与专家系统等知识型 AI 思路。"
        : "Covers fluid vs. crystallized intelligence, theorem proving, expert systems, and knowledge graphs.",
      2: isZh
        ? "讲解机器学习起源、五要素与苹果橙子分类示例。"
        : "Explains the origin of machine learning, its five elements, and the apple–orange example.",
      3: isZh
        ? "梳理模型设计、训练、测试、选择的完整流程。"
        : "Maps the workflow: design, train, test, and select models.",
      4: isZh
        ? "对比监督、无监督、强化学习的适用场景与特点。"
        : "Compares supervised, unsupervised, and reinforcement learning and their use cases.",
      5: isZh
        ? "概述符号、贝叶斯、联结、进化学派与融合趋势。"
        : "Summarizes symbolic, Bayesian, connectionist, and evolutionary schools and their integration.",
      6: isZh
        ? "讲解神经元/突触/修剪、M-P 神经元、感知机、BP 与发展历程。"
        : "Covers neurons/synapses/pruning, M-P neuron, perceptron limits, backprop, and milestones.",
      7: isZh
        ? "介绍 MLP、CNN、RNN、AE 结构与各自适用任务。"
        : "Introduces MLP, CNN, RNN, AE structures and their task fit.",
      9: isZh
        ? "从 N-gram、RNN 语言模型到 Transformer 与 GPT 系列的基本原理。"
        : "Principles from N-gram/RNN LMs to Transformer and GPT series.",
      10: isZh
        ? "提示、少样本/CoT、扩展定律、RAG、多模态与工具能力。"
        : "Prompts, few-shot/CoT, scaling laws, RAG, multimodality and tools.",
    } as const;

    return (
      <div className="space-y-4">
        <SectionBlock title={titles[lessonNum as 1 | 2 | 3 | 4 | 5]} eyebrow={isZh ? "已开放课程" : "Open lesson"}>
          <p className="text-sm text-slate-700">{blurbs[lessonNum as 1 | 2 | 3 | 4 | 5]}</p>
        </SectionBlock>
        {lessonNum === 1 && <HighLesson2_1 lang={lang} />}
        {lessonNum === 2 && <HighLesson2_2 lang={lang} />}
        {lessonNum === 3 && <HighLesson2_3 lang={lang} />}
        {lessonNum === 4 && <HighLesson2_4 lang={lang} />}
        {lessonNum === 5 && <HighLesson2_5 lang={lang} />}
        {lessonNum === 6 && <HighLesson2_6 lang={lang} />}
        {lessonNum === 7 && <HighLesson2_7 lang={lang} />}
        {lessonNum === 9 && <HighLesson2_9 lang={lang} />}
        {lessonNum === 10 && <HighLesson2_10 lang={lang} />}
      </div>
    );
  }

  if (chapterNum === 2 && lessonNum === 8 && level === "high") {
    return (
      <div className="space-y-4">
        <SectionBlock
          title={
            isZh ? "第 2 章 · 第 8 课：深度学习基础" : "Chapter 2 · Lesson 8: Deep Learning Basics"
          }
          eyebrow={isZh ? "已开放课程" : "Open lesson"}
        >
          <p className="text-sm text-slate-700">
            {isZh
              ? "这是第 2 章第 8 课的互动页面，涵盖深度学习基础与分层特征学习。"
              : "This is Chapter 2 Lesson 8, covering deep learning basics and hierarchical feature learning."}
          </p>
        </SectionBlock>
        <HighLesson2_8 lang={lang} />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <SectionBlock
        title={isZh ? "本课内容即将上线" : "Lesson coming soon"}
        eyebrow={isZh ? "待发布" : "Pending"}
      >
        <p className="text-sm text-slate-700">
          {isZh
            ? "该课尚未上线，您可以返回导航或稍后再来。"
            : "This lesson is not live yet. Please return to navigation or check back later."}
        </p>
        <Link
          to="/"
          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 underline"
        >
          {isZh ? "返回导航" : "Back to navigation"}
        </Link>
      </SectionBlock>
      <ComingSoon lang={lang} />
    </div>
  );
}

export default App;
