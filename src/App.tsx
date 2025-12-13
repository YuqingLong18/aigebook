import { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { SectionBlock } from "./components/SectionBlock";
import { LessonCheckpointProvider } from "./components/CheckpointProgressProvider";
import { ComingSoon } from "./pages/ComingSoon";
import { HighLesson1_1 } from "./pages/high-1-1";
import { HighLesson1_2 } from "./pages/high-1-2";
import { HighLesson1_3 } from "./pages/high-1-3";
import { HighLesson1_4 } from "./pages/high-1-4";
import { HighLesson1_5 } from "./pages/high-1-5";
import { HighLesson1_6 } from "./pages/high-1-6";
import { HighLesson1_7 } from "./pages/high-1-7";
import { HighLesson1_8 } from "./pages/high-1-8";
import { HighLesson1_9 } from "./pages/high-1-9";
import { HighLesson1_10 } from "./pages/high-1-10";
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
import { HighLesson3_1 } from "./pages/high-3-1";
import { HighLesson3_2 } from "./pages/high-3-2";
import { HighLesson3_3 } from "./pages/high-3-3";
import { HighLesson3_4 } from "./pages/high-3-4";
import { HighLesson3_5 } from "./pages/high-3-5";
import { HighLesson3_6 } from "./pages/high-3-6";
import { HighLesson3_7 } from "./pages/high-3-7";
import { HighLesson3_8 } from "./pages/high-3-8";
import { HighLesson3_9 } from "./pages/high-3-9";
import { HighLesson3_10 } from "./pages/high-3-10";
import { HighLesson4_1 } from "./pages/high-4-1";
import { HighLesson4_2 } from "./pages/high-4-2";
import { HighLesson4_3 } from "./pages/high-4-3";
import { HighLesson4_4 } from "./pages/high-4-4";
import { HighLesson4_5 } from "./pages/high-4-5";
import { HighLesson4_6 } from "./pages/high-4-6";
import { HighLesson4_7 } from "./pages/high-4-7";
import { HighLesson4_10 } from "./pages/high-4-10";
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
  const wrap = (content: JSX.Element) => (
    <LessonCheckpointProvider lang={lang}>{content}</LessonCheckpointProvider>
  );

  if (level === "primary" && chapterNum === 5 && lessonNum === 6) {
    return wrap(
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
    return wrap(
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

  if (chapterNum === 1 && level === "high" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(lessonNum)) {
    return wrap(
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
                      : lessonNum === 6
                        ? isZh
                          ? "第 1 单元 · 第 6 课：人工智能的开端"
                          : "Unit 1 · Lesson 6: The Beginning of AI"
                        : lessonNum === 7
                          ? isZh
                            ? "第 1 单元 · 第 7 课：人工智能发展史（1）"
                            : "Unit 1 · Lesson 7: History of AI (1)"
                          : lessonNum === 8
                            ? isZh
                              ? "第 1 单元 · 第 8 课：人工智能发展史（2）"
                              : "Unit 1 · Lesson 8: History of AI (2)"
                            : lessonNum === 9
                              ? isZh
                                ? "第 1 单元 · 第 9 课：人工智能伦理：近期风险"
                                : "Unit 1 · Lesson 9: AI Ethics — Near-Term Risks"
                              : isZh
                                ? "第 1 单元 · 第 10 课：人工智能伦理：长期风险"
                                : "Unit 1 · Lesson 10: AI Ethics — Long-Term Risks"
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
                      : lessonNum === 6
                        ? isZh
                          ? "本课聚焦早期 AI 研究与达特茅斯会议。"
                          : "Early AI research and the Dartmouth Conference."
                        : lessonNum === 7
                          ? isZh
                            ? "回顾黄金十年、两次寒冬与第二次热潮。"
                            : "Covers the golden decade, first/second winters, and the second boom."
                          : lessonNum === 8
                            ? isZh
                              ? "聚焦 1993 以来的务实复兴、深度学习、大模型时代。"
                              : "Focuses on post-1993 revival, deep learning era, and large models."
                            : lessonNum === 9
                              ? isZh
                                ? "讨论数据安全、深度伪造、AI 依赖、就业冲击等近期风险。"
                                : "Discusses data security, deepfakes, AI dependence, and job disruption."
                              : isZh
                                ? "探讨 AI 失控、武器化与伦理法律等长期风险。"
                                : "Explores AI loss-of-control, weaponization, and ethical/legal long-term risks."}
          </p>
        </SectionBlock>
        {lessonNum === 1 && <HighLesson1_1 lang={lang} />}
        {lessonNum === 2 && <HighLesson1_2 lang={lang} />}
        {lessonNum === 3 && <HighLesson1_3 lang={lang} />}
        {lessonNum === 4 && <HighLesson1_4 lang={lang} />}
        {lessonNum === 5 && <HighLesson1_5 lang={lang} />}
        {lessonNum === 6 && <HighLesson1_6 lang={lang} />}
        {lessonNum === 7 && <HighLesson1_7 lang={lang} />}
        {lessonNum === 8 && <HighLesson1_8 lang={lang} />}
        {lessonNum === 9 && <HighLesson1_9 lang={lang} />}
        {lessonNum === 10 && <HighLesson1_10 lang={lang} />}
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

    return wrap(
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
    return wrap(
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

  if (chapterNum === 3 && level === "high" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(lessonNum)) {
    const titles = {
      1: isZh ? "第 3 章 · 第 1 课：机器视觉：人脸识别" : "Chapter 3 · Lesson 1: Computer Vision — Facial Recognition",
      2: isZh ? "第 3 章 · 第 2 课：机器视觉：绘画大师" : "Chapter 3 · Lesson 2: Computer Vision — Painting Master",
      3: isZh ? "第 3 章 · 第 3 课：机器视觉：伪造与鉴别" : "Chapter 3 · Lesson 3: Machine Vision — Forgery & Detection",
      4: isZh ? "第 3 章 · 第 4 课：听觉计算：语音识别" : "Chapter 3 · Lesson 4: Auditory Computation — Speech Recognition",
      5: isZh ? "第 3 章 · 第 5 课：听觉计算：语音合成" : "Chapter 3 · Lesson 5: Auditory Computation — Speech Synthesis",
      6: isZh ? "第 3 章 · 第 6 课：语言处理：机器翻译" : "Chapter 3 · Lesson 6: Language Processing — Machine Translation",
      7: isZh ? "第 3 章 · 第 7 课：人机对弈：AlphaGo 的秘密" : "Chapter 3 · Lesson 7: Human vs. Machine — AlphaGo",
      8: isZh ? "第 3 章 · 第 8 课：人机对战：电子游戏" : "Chapter 3 · Lesson 8: Human vs. AI — Video Games",
      9: isZh ? "第 3 章 · 第 9 课：搜索引擎的秘密" : "Chapter 3 · Lesson 9: Secrets of Search Engines",
      10: isZh ? "第 3 章 · 第 10 课：比你更懂你的推荐算法" : "Chapter 3 · Lesson 10: Recommendation Algorithms",
    } as const;

    const blurbs = {
      1: isZh
        ? "从人类面孔加工到几何/特征脸，再到深度嵌入与安全防护。"
        : "From human face processing to geometry/eigenfaces, deep embeddings, and security.",
      2: isZh
        ? "区分内容与风格，理解风格迁移与艺术修复案例。"
        : "Separate content/style, grasp neural style transfer, and see art restoration.",
      3: isZh
        ? "解析 GAN、换脸/表情控制、伪造检测与社会风险。"
        : "Covers GANs, swaps/control, detection cues, and social risks.",
      4: isZh
        ? "从共振峰到 HMM+语言模型，再到端到端深度语音识别。"
        : "From formants to HMM+LM to end-to-end deep ASR.",
      5: isZh
        ? "对比声源-声道传统合成与端到端神经 TTS。"
        : "Compare source–filter TTS with end-to-end neural synthesis.",
      6: isZh
        ? "语言特性、规则翻译、SMT、NMT 与未来趋势。"
        : "Language traits, rule-based MT, SMT, NMT, and future trends.",
      7: isZh
        ? "围棋难点、MCTS、策略/价值网络、自博弈到 AlphaGo Zero。"
        : "Go challenge, MCTS, policy/value nets, self-play to AlphaGo Zero.",
      8: isZh
        ? "深度强化学习玩游戏：Atari、藏猫猫、AlphaStar。"
        : "Deep RL in gaming: Atari, hide-and-seek, AlphaStar.",
      9: isZh
        ? "搜索核心：倒排索引与 PageRank 排序。"
        : "Search core: inverted index and PageRank-style ranking.",
      10: isZh
        ? "推荐算法的相似性核心、神经嵌入与伦理风险。"
        : "Recommendation similarity core, neural embeddings, and ethical risks.",
    } as const;

    return wrap(
      <div className="space-y-4">
        <SectionBlock
          title={titles[lessonNum as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10]}
          eyebrow={isZh ? "已开放课程" : "Open lesson"}
        >
          <p className="text-sm text-slate-700">{blurbs[lessonNum as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10]}</p>
        </SectionBlock>
        {lessonNum === 1 && <HighLesson3_1 lang={lang} />}
        {lessonNum === 2 && <HighLesson3_2 lang={lang} />}
        {lessonNum === 3 && <HighLesson3_3 lang={lang} />}
        {lessonNum === 4 && <HighLesson3_4 lang={lang} />}
        {lessonNum === 5 && <HighLesson3_5 lang={lang} />}
        {lessonNum === 6 && <HighLesson3_6 lang={lang} />}
        {lessonNum === 7 && <HighLesson3_7 lang={lang} />}
        {lessonNum === 8 && <HighLesson3_8 lang={lang} />}
        {lessonNum === 9 && <HighLesson3_9 lang={lang} />}
        {lessonNum === 10 && <HighLesson3_10 lang={lang} />}
      </div>
    );
  }

  if (chapterNum === 4 && level === "high" && [1, 2, 3, 4, 5, 6, 7, 10].includes(lessonNum)) {
    const titles = {
      1: isZh ? "第 4 章 · 第 1 课：和数学家做朋友" : "Chapter 4 · Lesson 1: Making Friends with Mathematicians",
      2: isZh ? "第 4 章 · 第 2 课：模仿蝙蝠的耳朵" : "Chapter 4 · Lesson 2: Mimicking Bat Ears",
      3: isZh ? "第 4 章 · 第 3 课：破解蛋白质结构之谜" : "Chapter 4 · Lesson 3: Cracking the Mystery of Protein Structures",
      4: isZh
        ? "第 4 章 · 第 4 课：重构材料微观三维结构"
        : "Chapter 4 · Lesson 4: Reconstructing the Microscopic 3D Structure of Materials",
      5: isZh ? "第 4 章 · 第 5 课：预测化学反应类型" : "Chapter 4 · Lesson 5: Predicting Types of Chemical Reactions",
      6: isZh ? "第 4 章 · 第 6 课：天文学家的助手" : "Chapter 4 · Lesson 6: Assistant to Astronomers",
      7: isZh ? "第 4 章 · 第 7 课：人工智能作曲家" : "Chapter 4 · Lesson 7: AI Composer",
      10: isZh ? "第 4 章 · 第 10 课：走向未来" : "Chapter 4 · Lesson 10: Looking to the Future",
    } as const;

    const blurbs = {
      1: isZh
        ? "从定理证明、反例证伪到猜想生成，理解 AI 如何提升数学发现与验证效率，并形成知识发现闭环。"
        : "From theorem proving to counterexamples and conjecture generation—see how AI boosts mathematical discovery and verification in a knowledge loop.",
      2: isZh
        ? "理解人类与蝙蝠的声源定位机制、多普勒效应，以及仿生耳 + 深度学习如何实现高精度定位。"
        : "Learn human and bat localization cues, the Doppler effect, and how bionic ears plus deep learning achieve high-precision localization.",
      3: isZh
        ? "掌握蛋白质结构层级与 Anfinsen 理论，理解 AlphaFold2/3 如何从序列预测结构与相互作用。"
        : "Master protein structure hierarchy and Anfinsen’s theory, then see how AlphaFold2/3 predicts structure and interactions from sequence.",
      4: isZh
        ? "从 2D 切片到 3D 微结构：理解 SliceGAN 如何在缺乏真实 3D 数据时重建材料微观结构。"
        : "From 2D slices to 3D microstructure—how SliceGAN reconstructs materials without real 3D data.",
      5: isZh
        ? "把反应方程序列化为 SMILES，用 BERT 等模型进行反应类型分类，理解 AI 在化学研究中的价值。"
        : "Serialize reactions as SMILES and classify reaction types with BERT-like models—see AI’s value in chemical research.",
      6: isZh
        ? "现代望远镜带来海量观测数据；全卷积网络识别射频干扰，YOLO 自动定位与分类星系，AI 成为天文学助手。"
        : "Modern telescopes create massive data; fully convolutional nets detect radio interference, YOLO localizes/classifies galaxies—AI as an astronomer’s helper.",
      7: isZh
        ? "从莫扎特骰子游戏、Markov 链到 LSTM/Transformer，理解 AI 作曲的演进与 Magenta 等创意工具。"
        : "From Mozart’s dice and Markov chains to LSTM/Transformers—see AI composition’s evolution and creative tools like Magenta.",
      10: isZh
        ? "回顾智能化趋势、第三代 AI 与类脑/光/量子计算前沿，并思考人机共存的治理与伦理。"
        : "Review the enduring AI wave, third-generation AI plus neuromorphic/optical/quantum frontiers, and consider governance for human–AI coexistence.",
    } as const;

    return wrap(
      <div className="space-y-4">
        <SectionBlock
          title={titles[lessonNum as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10]}
          eyebrow={isZh ? "已开放课程" : "Open lesson"}
        >
          <p className="text-sm text-slate-700">{blurbs[lessonNum as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10]}</p>
        </SectionBlock>
        {lessonNum === 1 && <HighLesson4_1 lang={lang} />}
        {lessonNum === 2 && <HighLesson4_2 lang={lang} />}
        {lessonNum === 3 && <HighLesson4_3 lang={lang} />}
        {lessonNum === 4 && <HighLesson4_4 lang={lang} />}
        {lessonNum === 5 && <HighLesson4_5 lang={lang} />}
        {lessonNum === 6 && <HighLesson4_6 lang={lang} />}
        {lessonNum === 7 && <HighLesson4_7 lang={lang} />}
        {lessonNum === 10 && <HighLesson4_10 lang={lang} />}
      </div>
    );
  }

  return wrap(
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
