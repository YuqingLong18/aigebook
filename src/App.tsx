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
import { MiddleLesson1_1 } from "./pages/middle-1-1";
import { MiddleLesson1_2 } from "./pages/middle-1-2";
import { MiddleLesson1_3 } from "./pages/middle-1-3";
import { MiddleLesson1_4 } from "./pages/middle-1-4";
import { MiddleLesson1_5 } from "./pages/middle-1-5";
import { MiddleLesson1_6 } from "./pages/middle-1-6";
import { MiddleLesson2_1 } from "./pages/middle-2-1";
import { MiddleLesson2_2 } from "./pages/middle-2-2";
import { MiddleLesson2_3 } from "./pages/middle-2-3";
import { MiddleLesson2_4 } from "./pages/middle-2-4";
import { MiddleLesson2_5 } from "./pages/middle-2-5";
import { MiddleLesson3_1 } from "./pages/middle-3-1";
import { MiddleLesson3_2 } from "./pages/middle-3-2";
import { MiddleLesson3_3 } from "./pages/middle-3-3";
import { MiddleLesson3_4 } from "./pages/middle-3-4";
import { MiddleLesson3_5 } from "./pages/middle-3-5";
import { MiddleLesson4_1 } from "./pages/middle-4-1";
import { MiddleLesson4_2 } from "./pages/middle-4-2";
import { MiddleLesson4_3 } from "./pages/middle-4-3";
import { MiddleLesson4_4 } from "./pages/middle-4-4";
import { MiddleLesson4_5 } from "./pages/middle-4-5";
import { MiddleLesson4_6 } from "./pages/middle-4-6";
import { MiddleLesson5_1 } from "./pages/middle-5-1";
import { MiddleLesson5_2 } from "./pages/middle-5-2";
import { MiddleLesson5_3 } from "./pages/middle-5-3";
import { MiddleLesson5_4 } from "./pages/middle-5-4";
import { MiddleLesson5_5 } from "./pages/middle-5-5";
import { MiddleLesson6_1 } from "./pages/middle-6-1";
import { MiddleLesson6_2 } from "./pages/middle-6-2";
import { MiddleLesson6_3 } from "./pages/middle-6-3";
import { MiddleLesson6_4 } from "./pages/middle-6-4";
import { MiddleLesson6_5 } from "./pages/middle-6-5";
import { MiddleLesson7_1 } from "./pages/middle-7-1";
import { MiddleLesson7_2 } from "./pages/middle-7-2";
import { MiddleLesson7_3 } from "./pages/middle-7-3";
import { MiddleLesson7_4 } from "./pages/middle-7-4";
import { MiddleLesson7_5 } from "./pages/middle-7-5";
import { MiddleLesson7_6 } from "./pages/middle-7-6";
import { MiddleLesson7_7 } from "./pages/middle-7-7";
import { NavigationPage } from "./pages/NavigationPage";
import { PrimaryLesson1_1 } from "./pages/primary-1-1";
import { PrimaryLesson1_2 } from "./pages/primary-1-2";
import { PrimaryLesson1_3 } from "./pages/primary-1-3";
import { PrimaryLesson1_4 } from "./pages/primary-1-4";
import { PrimaryLesson2_1 } from "./pages/primary-2-1";
import { PrimaryLesson2_2 } from "./pages/primary-2-2";
import { PrimaryLesson2_3 } from "./pages/primary-2-3";
import { PrimaryLesson2_4 } from "./pages/primary-2-4";
import { PrimaryLesson2_5 } from "./pages/primary-2-5";
import { PrimaryLesson2_6 } from "./pages/primary-2-6";
import { PrimaryLesson3_1 } from "./pages/primary-3-1";
import { PrimaryLesson3_2 } from "./pages/primary-3-2";
import { PrimaryLesson3_3 } from "./pages/primary-3-3";
import { PrimaryLesson3_4 } from "./pages/primary-3-4";
import { PrimaryLesson3_5 } from "./pages/primary-3-5";
import { PrimaryLesson3_6 } from "./pages/primary-3-6";
import { PrimaryLesson3_7 } from "./pages/primary-3-7";
import { PrimaryLesson4_1 } from "./pages/primary-4-1";
import { PrimaryLesson4_2 } from "./pages/primary-4-2";
import { PrimaryLesson4_3 } from "./pages/primary-4-3";
import { PrimaryLesson4_4 } from "./pages/primary-4-4";
import { PrimaryLesson4_5 } from "./pages/primary-4-5";
import { PrimaryLesson4_6 } from "./pages/primary-4-6";
import { PrimaryLesson5_1 } from "./pages/primary-5-1";
import { PrimaryLesson5_2 } from "./pages/primary-5-2";
import { PrimaryLesson5_3 } from "./pages/primary-5-3";
import { PrimaryLesson5_4 } from "./pages/primary-5-4";
import { PrimaryLesson5_5 } from "./pages/primary-5-5";
import { PrimaryLesson5_6 } from "./pages/primary-5-6";
import { PrimaryLesson6_1 } from "./pages/primary-6-1";
import { PrimaryLesson6_2 } from "./pages/primary-6-2";
import { PrimaryLesson6_3 } from "./pages/primary-6-3";
import { PrimaryLesson6_4 } from "./pages/primary-6-4";
import { PrimaryLesson6_5 } from "./pages/primary-6-5";
import { PrimaryLesson7_1 } from "./pages/primary-7-1";
import { PrimaryLesson7_2 } from "./pages/primary-7-2";
import { PrimaryLesson7_3 } from "./pages/primary-7-3";
import { PrimaryLesson7_4 } from "./pages/primary-7-4";
import { PrimaryLesson7_5 } from "./pages/primary-7-5";
import { PrimaryLesson7_6 } from "./pages/primary-7-6";
import { PrimaryLesson7_7 } from "./pages/primary-7-7";
import { PrimaryLesson7_8 } from "./pages/primary-7-8";
import { PrimaryLesson7_9 } from "./pages/primary-7-9";
import { PrimaryLesson7_10 } from "./pages/primary-7-10";

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

  if (level === "primary" && chapterNum === 1 && [1, 2, 3, 4].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 1 单元 · 第 1 课：偃师的故事",
        en: "Unit 1 · Lesson 1: The Story of Yan Shi",
        blurbZh: "从机关人传说看古人对智能机器的梦想与工匠精神。",
        blurbEn: "A legendary puppet story that reveals the dream of intelligent machines and craftsmanship.",
      },
      2: {
        zh: "第 1 单元 · 第 2 课：贾兹里的机械乐队",
        en: "Unit 1 · Lesson 2: Al-Jazari’s Mechanical Band",
        blurbZh: "认识贾兹里与他的著作，理解可复现设计的价值。",
        blurbEn: "Meet Al-Jazari and see why reproducible design matters.",
      },
      3: {
        zh: "第 1 单元 · 第 3 课：电影中的人工智能",
        en: "Unit 1 · Lesson 3: Artificial Intelligence in Movies",
        blurbZh: "通过瓦力与贝麦斯，思考人与智能机器的关系。",
        blurbEn: "Through WALL·E and Baymax, explore human-robot harmony.",
      },
      4: {
        zh: "第 1 单元 · 第 4 课：什么是人工智能",
        en: "Unit 1 · Lesson 4: What Is Artificial Intelligence?",
        blurbZh: "用电饭煲的例子理解自动化与 AI 的区别。",
        blurbEn: "Use the rice cooker example to compare automation and AI.",
      },
    };

    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;

    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <PrimaryLesson1_1 lang={lang} />}
        {lessonNum === 2 && <PrimaryLesson1_2 lang={lang} />}
        {lessonNum === 3 && <PrimaryLesson1_3 lang={lang} />}
        {lessonNum === 4 && <PrimaryLesson1_4 lang={lang} />}
      </div>
    );
  }

  if (level === "primary" && chapterNum === 2 && [1, 2, 3, 4, 5, 6].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 2 单元 · 第 1 课：高铁检票员",
        en: "Unit 2 · Lesson 1: High-speed Rail Ticket Checker",
        blurbZh: "火车票从纸票到刷脸，AI 让出行更高效。",
        blurbEn: "From paper tickets to face scans—AI speeds up travel.",
      },
      2: {
        zh: "第 2 单元 · 第 2 课：电子交警",
        en: "Unit 2 · Lesson 2: Traffic Enforcement Cameras",
        blurbZh: "AI 识别违章与协同设备，让道路更安全。",
        blurbEn: "AI detects violations and improves road safety.",
      },
      3: {
        zh: "第 2 单元 · 第 3 课：美颜相机",
        en: "Unit 2 · Lesson 3: Beauty Cameras",
        blurbZh: "从修图到 AI 美颜，学会理性看待滤镜。",
        blurbEn: "From editing to AI filters—use them wisely.",
      },
      4: {
        zh: "第 2 单元 · 第 4 课：扫地机器人",
        en: "Unit 2 · Lesson 4: Robot Vacuums",
        blurbZh: "导航与视觉让机器人更聪明。",
        blurbEn: "Mapping and vision make vacuums smarter.",
      },
      5: {
        zh: "第 2 单元 · 第 5 课：自动驾驶",
        en: "Unit 2 · Lesson 5: Autonomous Driving",
        blurbZh: "从早期引导到现代 AI，理解技术与风险。",
        blurbEn: "From early guidance to modern AI—tech and risks.",
      },
      6: {
        zh: "第 2 单元 · 第 6 课：推荐系统",
        en: "Unit 2 · Lesson 6: Recommender Systems",
        blurbZh: "理解推荐与信息茧房，学会批判思考。",
        blurbEn: "Understand recommendations and avoid cocoons.",
      },
    };

    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;

    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <PrimaryLesson2_1 lang={lang} />}
        {lessonNum === 2 && <PrimaryLesson2_2 lang={lang} />}
        {lessonNum === 3 && <PrimaryLesson2_3 lang={lang} />}
        {lessonNum === 4 && <PrimaryLesson2_4 lang={lang} />}
        {lessonNum === 5 && <PrimaryLesson2_5 lang={lang} />}
        {lessonNum === 6 && <PrimaryLesson2_6 lang={lang} />}
      </div>
    );
  }

  if (level === "primary" && chapterNum === 3 && [1, 2, 3, 4, 5, 6, 7].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 3 单元 · 第 1 课：AI 画家",
        en: "Unit 3 · Lesson 1: AI Artist",
        blurbZh: "理解图像如何被编码，体验 AI 的生成与风格迁移。",
        blurbEn: "See how images are encoded and how AI generates and transfers styles.",
      },
      2: {
        zh: "第 3 单元 · 第 2 课：AI 作曲",
        en: "Unit 3 · Lesson 2: AI Composition",
        blurbZh: "从骰子作曲到深度学习，理解 AI 如何写音乐。",
        blurbEn: "From dice games to deep learning, see how AI writes music.",
      },
      3: {
        zh: "第 3 单元 · 第 3 课：AI 诗人",
        en: "Unit 3 · Lesson 3: AI Poetry",
        blurbZh: "认识格律诗规则，理解 AI 诗歌的优势与不足。",
        blurbEn: "Learn regulated verse rules and the strengths and limits of AI poetry.",
      },
      4: {
        zh: "第 3 单元 · 第 4 课：AlphaGo 的故事",
        en: "Unit 3 · Lesson 4: The Story of AlphaGo",
        blurbZh: "回顾 AlphaGo 的关键比赛与自我对弈突破。",
        blurbEn: "Review AlphaGo's key matches and self-play breakthrough.",
      },
      5: {
        zh: "第 3 单元 · 第 5 课：OpenAI 和它的 ChatGPT",
        en: "Unit 3 · Lesson 5: OpenAI and ChatGPT",
        blurbZh: "了解 OpenAI 的发展与 ChatGPT 的对话能力。",
        blurbEn: "Meet OpenAI's story and ChatGPT's conversation skills.",
      },
      6: {
        zh: "第 3 单元 · 第 6 课：Sora 的故事",
        en: "Unit 3 · Lesson 6: The Story of Sora",
        blurbZh: "探索视频生成原理与应用场景，思考风险。",
        blurbEn: "Explore video generation, applications, and risks.",
      },
      7: {
        zh: "第 3 单元 · 第 7 课：AI 天气预报员",
        en: "Unit 3 · Lesson 7: AI Weather Forecaster",
        blurbZh: "从古代谚语到 AI 预测，理解数据的重要性。",
        blurbEn: "From old sayings to AI forecasts, see why data matters.",
      },
    };

    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;

    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <PrimaryLesson3_1 lang={lang} />}
        {lessonNum === 2 && <PrimaryLesson3_2 lang={lang} />}
        {lessonNum === 3 && <PrimaryLesson3_3 lang={lang} />}
        {lessonNum === 4 && <PrimaryLesson3_4 lang={lang} />}
        {lessonNum === 5 && <PrimaryLesson3_5 lang={lang} />}
        {lessonNum === 6 && <PrimaryLesson3_6 lang={lang} />}
        {lessonNum === 7 && <PrimaryLesson3_7 lang={lang} />}
      </div>
    );
  }

  if (level === "primary" && chapterNum === 4 && [1, 2, 3, 4, 5, 6].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 4 单元 · 第 1 课：亚里士多德的故事",
        en: "Unit 4 · Lesson 1: Story of Aristotle",
        blurbZh: "追随古希腊三贤，理解逻辑对 AI 起源的意义。",
        blurbEn: "Follow the Greek philosophers and see why logic matters for AI's origins.",
      },
      2: {
        zh: "第 4 单元 · 第 2 课：布尔的故事",
        en: "Unit 4 · Lesson 2: Story of Boole",
        blurbZh: "用符号表达思维，走向可计算的逻辑。",
        blurbEn: "See how symbolic logic turned thinking into computation.",
      },
      3: {
        zh: "第 4 单元 · 第 3 课：图灵和图灵机",
        en: "Unit 4 · Lesson 3: Turing and the Turing Machine",
        blurbZh: "回顾图灵的一生与图灵机的原型意义。",
        blurbEn: "Review Turing's life and the model that inspired computers.",
      },
      4: {
        zh: "第 4 单元 · 第 4 课：计算机的诞生",
        en: "Unit 4 · Lesson 4: Birth of the Computer",
        blurbZh: "从算盘到存储程序，理解现代计算机的结构。",
        blurbEn: "From abacus to stored-program architecture, see how computers were born.",
      },
      5: {
        zh: "第 4 单元 · 第 5 课：机器智能的最初设想",
        en: "Unit 4 · Lesson 5: Early Notions of Machine Intelligence",
        blurbZh: "了解图灵的学习、神经网络与进化设想。",
        blurbEn: "Explore Turing's ideas on learning, neural networks, and evolution.",
      },
      6: {
        zh: "第 4 单元 · 第 6 课：达特茅斯会议",
        en: "Unit 4 · Lesson 6: Dartmouth Conference",
        blurbZh: "见证 AI 学科的诞生与早期研究热情。",
        blurbEn: "Witness the birth of AI as a field and the pioneers' excitement.",
      },
    };

    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;

    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <PrimaryLesson4_1 lang={lang} />}
        {lessonNum === 2 && <PrimaryLesson4_2 lang={lang} />}
        {lessonNum === 3 && <PrimaryLesson4_3 lang={lang} />}
        {lessonNum === 4 && <PrimaryLesson4_4 lang={lang} />}
        {lessonNum === 5 && <PrimaryLesson4_5 lang={lang} />}
        {lessonNum === 6 && <PrimaryLesson4_6 lang={lang} />}
      </div>
    );
  }

  if (level === "primary" && chapterNum === 5 && [1, 2, 3, 4, 5, 6].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 5 单元 · 第 1 课：吴文俊的故事",
        en: "Unit 5 · Lesson 1: Story of Wu Wenjun",
        blurbZh: "从数学零分到大师之路，理解吴方法与教育贡献。",
        blurbEn: "From a zero in math to mastery—Wu's method and education impact.",
      },
      2: {
        zh: "第 5 单元 · 第 2 课：费根鲍姆与专家系统",
        en: "Unit 5 · Lesson 2: Feigenbaum and Expert Systems",
        blurbZh: "了解 AI 寒冬与知识工程的突破。",
        blurbEn: "See the AI winter and the knowledge engineering breakthrough.",
      },
      3: {
        zh: "第 5 单元 · 第 3 课：深蓝：成就巅峰",
        en: "Unit 5 · Lesson 3: Deep Blue: Reaching the Summit",
        blurbZh: "回顾深蓝对战卡斯帕罗夫的经典比赛。",
        blurbEn: "Revisit Deep Blue vs. Kasparov and chess search power.",
      },
      4: {
        zh: "第 5 单元 · 第 4 课：深度学习兴起",
        en: "Unit 5 · Lesson 4: The Rise of Deep Learning",
        blurbZh: "理解神经网络与深度学习的崛起。",
        blurbEn: "Understand neural networks and the deep learning revolution.",
      },
      5: {
        zh: "第 5 单元 · 第 5 课：大模型时代",
        en: "Unit 5 · Lesson 5: The Era of Large Models",
        blurbZh: "探究 ChatGPT 的诞生与模型、数据、算力。",
        blurbEn: "Explore ChatGPT's rise and the model-data-compute triad.",
      },
      6: {
        zh: "第 5 单元 · 第 6 课：走向未来",
        en: "Unit 5 · Lesson 6: Moving Toward the Future",
        blurbZh: "展望 AI 未来与人机共处之道。",
        blurbEn: "Look ahead at AI trends and human-AI coexistence.",
      },
    };

    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;

    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <PrimaryLesson5_1 lang={lang} />}
        {lessonNum === 2 && <PrimaryLesson5_2 lang={lang} />}
        {lessonNum === 3 && <PrimaryLesson5_3 lang={lang} />}
        {lessonNum === 4 && <PrimaryLesson5_4 lang={lang} />}
        {lessonNum === 5 && <PrimaryLesson5_5 lang={lang} />}
        {lessonNum === 6 && <PrimaryLesson5_6 lang={lang} />}
      </div>
    );
  }

  if (level === "primary" && chapterNum === 6 && [1, 2, 3, 4, 5].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 6 单元 · 第 1 课：认识计算机",
        en: "Unit 6 · Lesson 1: Understanding Computers",
        blurbZh: "认识硬件、软件与计算机的基本结构。",
        blurbEn: "Meet hardware, software, and the basic structure of computers.",
      },
      2: {
        zh: "第 6 单元 · 第 2 课：认识计算机程序",
        en: "Unit 6 · Lesson 2: Understanding Computer Programs",
        blurbZh: "了解程序、编程语言与程序执行流程。",
        blurbEn: "Learn what programs are, how languages work, and how programs run.",
      },
      3: {
        zh: "第 6 单元 · 第 3 课：什么是算法",
        en: "Unit 6 · Lesson 3: What Is an Algorithm",
        blurbZh: "通过故事区分算法与程序。",
        blurbEn: "Use the story to separate algorithms from programs.",
      },
      4: {
        zh: "第 6 单元 · 第 4 课：知识与智能",
        en: "Unit 6 · Lesson 4: Knowledge and Intelligence",
        blurbZh: "认识卡特尔与流体/晶体智力。",
        blurbEn: "Meet Cattell and the two kinds of intelligence.",
      },
      5: {
        zh: "第 6 单元 · 第 5 课：不会学习的机器不是好机器",
        en: "Unit 6 · Lesson 5: A Machine That Cannot Learn Is Not a Good Machine",
        blurbZh: "了解从知识驱动到机器学习的转变与风险。",
        blurbEn: "See the shift to machine learning and its risks.",
      },
    };

    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;

    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <PrimaryLesson6_1 lang={lang} />}
        {lessonNum === 2 && <PrimaryLesson6_2 lang={lang} />}
        {lessonNum === 3 && <PrimaryLesson6_3 lang={lang} />}
        {lessonNum === 4 && <PrimaryLesson6_4 lang={lang} />}
        {lessonNum === 5 && <PrimaryLesson6_5 lang={lang} />}
      </div>
    );
  }

  if (level === "primary" && chapterNum === 7 && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 7 单元 · 第 1 课：皮茨和他的神经元模型",
        en: "Unit 7 · Lesson 1: Pitts and His Neuron Model",
        blurbZh: "认识皮茨与麦卡洛克的神经元模型故事。",
        blurbEn: "Meet Pitts and McCulloch and their neuron model.",
      },
      2: {
        zh: "第 7 单元 · 第 2 课：感知器：会学习的神经网络",
        en: "Unit 7 · Lesson 2: Perceptron: A Learning Neural Network",
        blurbZh: "了解罗森布拉特与感知器的学习机制。",
        blurbEn: "Learn Rosenblatt’s perceptron and how it learns.",
      },
      3: {
        zh: "第 7 单元 · 第 3 课：杰弗里·辛顿的故事",
        en: "Unit 7 · Lesson 3: Story of Geoffrey Hinton",
        blurbZh: "追随辛顿的学术道路与深度学习突破。",
        blurbEn: "Follow Hinton’s journey and deep learning breakthroughs.",
      },
      4: {
        zh: "第 7 单元 · 第 4 课：李飞飞与 ImageNet 数据集",
        en: "Unit 7 · Lesson 4: Fei-Fei Li and ImageNet Dataset",
        blurbZh: "了解 ImageNet 的诞生与影响。",
        blurbEn: "See how ImageNet was built and why it mattered.",
      },
      5: {
        zh: "第 7 单元 · 第 5 课：GPU：从游戏到人工智能",
        en: "Unit 7 · Lesson 5: GPU: From Gaming to AI",
        blurbZh: "理解 GPU 如何推动 AI 算力革命。",
        blurbEn: "Understand how GPUs powered the AI compute boom.",
      },
      6: {
        zh: "第 7 单元 · 第 6 课：解析 AlphaGo",
        en: "Unit 7 · Lesson 6: Understanding AlphaGo",
        blurbZh: "探索围棋难度与 AlphaGo 的原理。",
        blurbEn: "Explore Go’s difficulty and AlphaGo’s core ideas.",
      },
      7: {
        zh: "第 7 单元 · 第 7 课：探索大语言模型",
        en: "Unit 7 · Lesson 7: Exploring Large Language Models",
        blurbZh: "从词语接龙到 ChatGPT 的秘密。",
        blurbEn: "From word chains to the secrets of ChatGPT.",
      },
      8: {
        zh: "第 7 单元 · 第 8 课：深度学习挑战：难以理解的智能",
        en: "Unit 7 · Lesson 8: Deep Learning Challenge: Hard-to-Explain Intelligence",
        blurbZh: "认识黑箱问题与可解释性研究。",
        blurbEn: "Understand the black-box issue and interpretability.",
      },
      9: {
        zh: "第 7 单元 · 第 9 课：深度学习挑战：对抗样本",
        en: "Unit 7 · Lesson 9: Deep Learning Challenge: Adversarial Examples",
        blurbZh: "了解对抗样本与安全风险。",
        blurbEn: "Learn adversarial examples and security risks.",
      },
      10: {
        zh: "第 7 单元 · 第 10 课：深度学习挑战：超级智能体",
        en: "Unit 7 · Lesson 10: Deep Learning Challenge: Super Intelligent Agents",
        blurbZh: "思考超级智能体的潜力与风险。",
        blurbEn: "Reflect on superintelligent agents and their risks.",
      },
    };

    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;

    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <PrimaryLesson7_1 lang={lang} />}
        {lessonNum === 2 && <PrimaryLesson7_2 lang={lang} />}
        {lessonNum === 3 && <PrimaryLesson7_3 lang={lang} />}
        {lessonNum === 4 && <PrimaryLesson7_4 lang={lang} />}
        {lessonNum === 5 && <PrimaryLesson7_5 lang={lang} />}
        {lessonNum === 6 && <PrimaryLesson7_6 lang={lang} />}
        {lessonNum === 7 && <PrimaryLesson7_7 lang={lang} />}
        {lessonNum === 8 && <PrimaryLesson7_8 lang={lang} />}
        {lessonNum === 9 && <PrimaryLesson7_9 lang={lang} />}
        {lessonNum === 10 && <PrimaryLesson7_10 lang={lang} />}
      </div>
    );
  }

  if (level === "middle" && chapterNum === 1 && [1, 2, 3, 4, 5, 6].includes(lessonNum)) {
    const middleTitles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 1 单元 · 第 1 课：智能机器的梦想",
        en: "Unit 1 · Lesson 1: Dream of Intelligent Machines",
        blurbZh: "从古代传说到机械装置，看看人类如何想象并追寻智能机器。",
        blurbEn: "From legends to mechanisms—how humans imagined and chased intelligent machines.",
      },
      2: {
        zh: "第 1 单元 · 第 2 课：什么是人工智能",
        en: "Unit 1 · Lesson 2: What Is Artificial Intelligence",
        blurbZh: "厘清智能与自动化的区别，回到“用计算机模拟人类智能行为”的定义。",
        blurbEn: "Separate automation from AI and focus on simulating human intelligence with computation.",
      },
      3: {
        zh: "第 1 单元 · 第 3 课：机器的眼睛",
        en: "Unit 1 · Lesson 3: Eyes of the Machine",
        blurbZh: "认识计算机视觉：人脸、车牌、物体识别及其应用与风险。",
        blurbEn: "Meet computer vision: face, plate, and object recognition—uses and risks.",
      },
      4: {
        zh: "第 1 单元 · 第 4 课：机器的耳朵",
        en: "Unit 1 · Lesson 4: Ears of the Machine",
        blurbZh: "机器听觉的核心方向：语音识别、声纹识别、声音事件检测。",
        blurbEn: "Machine hearing focus: ASR, voiceprints, sound-event detection.",
      },
      5: {
        zh: "第 1 单元 · 第 5 课：机器的嘴巴",
        en: "Unit 1 · Lesson 5: Mouth of the Machine",
        blurbZh: "语音合成从机械发声到神经网络拟真，同时带来安全与版权新问题。",
        blurbEn: "Speech synthesis from mechanical to neural realism, with new safety and copyright issues.",
      },
      6: {
        zh: "第 1 单元 · 第 6 课：机器的手和脚",
        en: "Unit 1 · Lesson 6: Hands and Feet of the Machine",
        blurbZh: "移动与操作机器人：扫地、自动驾驶、机械臂如何因 AI 变得更聪明。",
        blurbEn: "Mobile and manipulation robots—vacuum, self-driving, arms—made smarter by AI.",
      },
    };

    const title = isZh ? middleTitles[lessonNum].zh : middleTitles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? middleTitles[lessonNum].blurbZh : middleTitles[lessonNum].blurbEn;

    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <MiddleLesson1_1 lang={lang} />}
        {lessonNum === 2 && <MiddleLesson1_2 lang={lang} />}
        {lessonNum === 3 && <MiddleLesson1_3 lang={lang} />}
        {lessonNum === 4 && <MiddleLesson1_4 lang={lang} />}
        {lessonNum === 5 && <MiddleLesson1_5 lang={lang} />}
        {lessonNum === 6 && <MiddleLesson1_6 lang={lang} />}
      </div>
    );
  }

  if (level === "middle" && chapterNum === 4 && [1, 2, 3, 4, 5, 6].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 4 单元 · 第 1 课：人工智能与游戏",
        en: "Unit 4 · Lesson 1: AI and Games",
        blurbZh: "从深蓝到 AlphaGo，再到实时策略，游戏成为 AI 试炼场与技术加速器。",
        blurbEn: "From Deep Blue to AlphaGo to RTS arenas—games as AI’s proving ground and accelerator.",
      },
      2: {
        zh: "第 4 单元 · 第 2 课：人工智能与语言",
        en: "Unit 4 · Lesson 2: AI and Language",
        blurbZh: "语言是知识与思维的载体，大模型让机器理解与生成语言，迈向通用智能。",
        blurbEn: "Language carries knowledge and thought; large models now understand and generate it, edging toward AGI.",
      },
      3: {
        zh: "第 4 单元 · 第 3 课：人工智能与艺术",
        en: "Unit 4 · Lesson 3: AI and Art",
        blurbZh: "AI 诗歌、作曲、绘画的突破与挑战：技术助力创作，也引发原创性与伦理思考。",
        blurbEn: "AI poetry, music, and painting breakthroughs—new creative power alongside originality and ethics questions.",
      },
      4: {
        zh: "第 4 单元 · 第 4 课：人工智能与天文学",
        en: "Unit 4 · Lesson 4: AI and Astronomy",
        blurbZh: "望远镜大数据时代，AI 负责监测、选址、挖掘，助力发现宇宙奥秘。",
        blurbEn: "In the telescope big-data era, AI monitors, plans, and mines observations to reveal cosmic secrets.",
      },
      5: {
        zh: "第 4 单元 · 第 5 课：人工智能与生物学",
        en: "Unit 4 · Lesson 5: AI and Biology",
        blurbZh: "AlphaFold 解决蛋白折叠，ButterflyNet 量化拟态，共同展示 AI + 生物大数据的力量。",
        blurbEn: "AlphaFold cracks protein folding; ButterflyNet quantifies mimicry—AI plus bio big data in action.",
      },
      6: {
        zh: "第 4 单元 · 第 6 课：人工智能与医学",
        en: "Unit 4 · Lesson 6: AI and Medicine",
        blurbZh: "AI 加速疫苗与新药，增强显微与影像，优化诊疗流程，迈向精准与个性化医疗。",
        blurbEn: "AI speeds vaccines/drugs, enhances microscopes/imaging, and optimizes care workflows toward precision medicine.",
      },
    };
    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;
    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <MiddleLesson4_1 lang={lang} />}
        {lessonNum === 2 && <MiddleLesson4_2 lang={lang} />}
        {lessonNum === 3 && <MiddleLesson4_3 lang={lang} />}
        {lessonNum === 4 && <MiddleLesson4_4 lang={lang} />}
        {lessonNum === 5 && <MiddleLesson4_5 lang={lang} />}
        {lessonNum === 6 && <MiddleLesson4_6 lang={lang} />}
      </div>,
    );
  }

  if (level === "middle" && chapterNum === 5 && [1, 2, 3, 4, 5].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 5 单元 · 第 1 课：机器人三定律",
        en: "Unit 5 · Lesson 1: The Three Laws of Robotics",
        blurbZh: "回顾阿西莫夫的三定律、局限与现代 AI 伦理的延展。",
        blurbEn: "Review Asimov’s Three Laws, their limits, and extensions to modern AI ethics.",
      },
      2: {
        zh: "第 5 单元 · 第 2 课：信息伪造",
        en: "Unit 5 · Lesson 2: Information Forgery",
        blurbZh: "深度伪造与换声技术、滥用案例、检测与多层治理。",
        blurbEn: "Deepfakes and voice swaps, misuse cases, detection, and multi-layer defense.",
      },
      3: {
        zh: "第 5 单元 · 第 3 课：信息泄露",
        en: "Unit 5 · Lesson 3: Information Leakage",
        blurbZh: "生物特征与个人信息泄漏、群体泄漏案例、大模型泄漏风险与防护。",
        blurbEn: "Biometric/personal data leaks, mass breach cases, and LLM leakage risks with mitigations.",
      },
      4: {
        zh: "第 5 单元 · 第 4 课：信息茧房",
        en: "Unit 5 · Lesson 4: Information Cocoon",
        blurbZh: "信息茧房的成因、危害，以及多源信息与批判思维的破茧方法。",
        blurbEn: "Info cocoon causes/harms and how to break it with diverse sources and critical thinking.",
      },
      5: {
        zh: "第 5 单元 · 第 5 课：人工智能与社会公平",
        en: "Unit 5 · Lesson 5: AI and Social Fairness",
        blurbZh: "数据偏见、可及性与垄断滥用带来的不公，以及改进数据、无障碍设计与监管的对策。",
        blurbEn: "Bias, accessibility gaps, and misuse risks—and responses via better data, inclusive design, and governance.",
      },
    };
    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <MiddleLesson5_1 lang={lang} />}
        {lessonNum === 2 && <MiddleLesson5_2 lang={lang} />}
        {lessonNum === 3 && <MiddleLesson5_3 lang={lang} />}
        {lessonNum === 4 && <MiddleLesson5_4 lang={lang} />}
        {lessonNum === 5 && <MiddleLesson5_5 lang={lang} />}
      </div>,
    );
  }

  if (level === "middle" && chapterNum === 6 && [1, 2, 3, 4, 5].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 6 单元 · 第 1 课：基于知识的智能",
        en: "Unit 6 · Lesson 1: Knowledge-based Intelligence",
        blurbZh: "从公理推理到专家系统，理解知识驱动的智能方法与局限。",
        blurbEn: "From axioms to expert systems—understand knowledge-driven AI and its limits.",
      },
      2: {
        zh: "第 6 单元 · 第 2 课：基于学习的智能",
        en: "Unit 6 · Lesson 2: Learning-based Intelligence",
        blurbZh: "机器学习概念、五要素与诞生故事。",
        blurbEn: "Machine learning concepts, five elements, and its origin story.",
      },
      3: {
        zh: "第 6 单元 · 第 3 课：监督学习与无监督学习",
        en: "Unit 6 · Lesson 3: Supervised and Unsupervised Learning",
        blurbZh: "对比监督/无监督学习的信号来源、流程与典型任务。",
        blurbEn: "Compare supervised vs. unsupervised signals, workflows, and tasks.",
      },
      4: {
        zh: "第 6 单元 · 第 4 课：强化学习",
        en: "Unit 6 · Lesson 4: Reinforcement Learning",
        blurbZh: "基于奖励的学习机制，应用于机器人与游戏。",
        blurbEn: "Reward-driven learning applied to robots and games.",
      },
      5: {
        zh: "第 6 单元 · 第 5 课：机器学习的学派",
        en: "Unit 6 · Lesson 5: Schools of Machine Learning",
        blurbZh: "符号、贝叶斯、连接主义、进化学派的思想与演进。",
        blurbEn: "Symbolic, Bayesian, connectionist, and evolutionary ideas and trends.",
      },
    };
    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;
    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <MiddleLesson6_1 lang={lang} />}
        {lessonNum === 2 && <MiddleLesson6_2 lang={lang} />}
        {lessonNum === 3 && <MiddleLesson6_3 lang={lang} />}
        {lessonNum === 4 && <MiddleLesson6_4 lang={lang} />}
        {lessonNum === 5 && <MiddleLesson6_5 lang={lang} />}
      </div>,
    );
  }

  if (level === "middle" && chapterNum === 7 && [1, 2, 3, 4, 5, 6, 7].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 7 单元 · 第 1 课：人类神经系统",
        en: "Unit 7 · Lesson 1: Human Nervous System",
        blurbZh: "神经系统的组成、发育与生物电传递。",
        blurbEn: "Composition, development, and bioelectric signaling of the nervous system.",
      },
      2: {
        zh: "第 7 单元 · 第 2 课：人工神经网络的开端",
        en: "Unit 7 · Lesson 2: Dawn of Artificial Neural Networks",
        blurbZh: "McCulloch 与 Pitts 的 M-P 神经元模型。",
        blurbEn: "McCulloch & Pitts and the M-P neuron model.",
      },
      3: {
        zh: "第 7 单元 · 第 3 课：人工神经网络发展史",
        en: "Unit 7 · Lesson 3: History of Neural Networks",
        blurbZh: "从感知机到 BP、CNN、RNN，再到深度网络。",
        blurbEn: "From perceptron to BP, CNN/RNN, and deep networks.",
      },
      4: {
        zh: "第 7 单元 · 第 4 课：深度学习的开端",
        en: "Unit 7 · Lesson 4: Beginning of Deep Learning",
        blurbZh: "Hinton 的坚持、分层预训练与大数据学习时代。",
        blurbEn: "Hinton’s path, layer-wise pretraining, and the big-data era.",
      },
      5: {
        zh: "第 7 单元 · 第 5 课：深度学习基本原理",
        en: "Unit 7 · Lesson 5: Fundamental Principles of Deep Learning",
        blurbZh: "层级与序列学习支撑视觉、语言、生成。",
        blurbEn: "Hierarchy and sequence power vision, language, and generation.",
      },
      6: {
        zh: "第 7 单元 · 第 6 课：深度学习的挑战：对抗样本",
        en: "Unit 7 · Lesson 6: Deep Learning Challenge: Adversarial Examples",
        blurbZh: "对抗样本的成因、风险与防护。",
        blurbEn: "Adversarial examples—causes, risks, and defenses.",
      },
      7: {
        zh: "第 7 单元 · 第 7 课：深度学习的挑战：可解释性",
        en: "Unit 7 · Lesson 7: Deep Learning Challenge: Interpretability",
        blurbZh: "深度网络的可解释性与局部/全局解释方式。",
        blurbEn: "Interpretability of deep nets with local/global explanations.",
      },
    };
    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;
    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <MiddleLesson7_1 lang={lang} />}
        {lessonNum === 2 && <MiddleLesson7_2 lang={lang} />}
        {lessonNum === 3 && <MiddleLesson7_3 lang={lang} />}
        {lessonNum === 4 && <MiddleLesson7_4 lang={lang} />}
        {lessonNum === 5 && <MiddleLesson7_5 lang={lang} />}
        {lessonNum === 6 && <MiddleLesson7_6 lang={lang} />}
        {lessonNum === 7 && <MiddleLesson7_7 lang={lang} />}
      </div>,
    );
  }

  if (level === "middle" && chapterNum === 2 && [1, 2, 3, 4, 5].includes(lessonNum)) {
    const middle2Titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 2 单元 · 第 1 课：人类智能的起源",
        en: "Unit 2 · Lesson 1: Origins of Human Intelligence",
        blurbZh: "探索人类演化、智力飞跃与合作在文明形成中的作用。",
        blurbEn: "Explore human evolution, intelligence leap, and cooperation’s role in civilization.",
      },
      2: {
        zh: "第 2 单元 · 第 2 课：人类思维规律的总结",
        en: "Unit 2 · Lesson 2: Summary of Human Thinking Patterns",
        blurbZh: "从亚里士多德到布尔与数理逻辑，梳理“思维-逻辑-计算”链条。",
        blurbEn: "From Aristotle to Boole and math logic—thinking → logic → computation.",
      },
      3: {
        zh: "第 2 单元 · 第 3 课：计算机的诞生",
        en: "Unit 2 · Lesson 3: Birth of Computers",
        blurbZh: "机械计算、图灵机、电子计算机与存储程序架构如何奠基 AI。",
        blurbEn: "Mechanical calculators, Turing Machine, electronic computers, stored programs as AI’s bedrock.",
      },
      4: {
        zh: "第 2 单元 · 第 4 课：图灵：计算机巨人",
        en: "Unit 2 · Lesson 4: Alan Turing: Giant of Computing",
        blurbZh: "图灵生平与三大贡献：图灵机、机器智能设想、图灵测试。",
        blurbEn: "Turing’s life and three contributions: TM, machine intelligence ideas, Turing Test.",
      },
      5: {
        zh: "第 2 单元 · 第 5 课：达特茅斯会议",
        en: "Unit 2 · Lesson 5: Dartmouth Conference",
        blurbZh: "AI 命名与议程的诞生，奠定学科方向。",
        blurbEn: "Naming AI and setting its agenda—founding the field.",
      },
    };
    const title = isZh ? middle2Titles[lessonNum].zh : middle2Titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? middle2Titles[lessonNum].blurbZh : middle2Titles[lessonNum].blurbEn;

    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <MiddleLesson2_1 lang={lang} />}
        {lessonNum === 2 && <MiddleLesson2_2 lang={lang} />}
        {lessonNum === 3 && <MiddleLesson2_3 lang={lang} />}
        {lessonNum === 4 && <MiddleLesson2_4 lang={lang} />}
        {lessonNum === 5 && <MiddleLesson2_5 lang={lang} />}
      </div>
    );
  }

  if (level === "middle" && chapterNum === 3 && [1, 2, 3, 4, 5].includes(lessonNum)) {
    const titles: Record<number, { zh: string; en: string; blurbZh: string; blurbEn: string }> = {
      1: {
        zh: "第 3 单元 · 第 1 课：梦想与失落",
        en: "Unit 3 · Lesson 1: Dreams and Setbacks",
        blurbZh: "回顾 AI 的高潮与寒冬，理解坚持与转折。",
        blurbEn: "Review AI peaks and winters and the perseverance behind them.",
      },
      2: {
        zh: "第 3 单元 · 第 2 课：深度学习时代",
        en: "Unit 3 · Lesson 2: Deep Learning Era",
        blurbZh: "深度学习的背景、核心思想与爆发。",
        blurbEn: "Background, core ideas, and rise of deep learning.",
      },
      3: {
        zh: "第 3 单元 · 第 3 课：大模型时代",
        en: "Unit 3 · Lesson 3: Era of Large Models",
        blurbZh: "LLM/LVM 的兴起、特征与挑战。",
        blurbEn: "Rise, traits, and challenges of LLMs/LVMs.",
      },
      4: {
        zh: "第 3 单元 · 第 4 课：交叉与融合",
        en: "Unit 3 · Lesson 4: Intersection and Integration",
        blurbZh: "AI 如何赋能生物、化学、天文、医学等领域。",
        blurbEn: "How AI empowers biology, chemistry, astronomy, medicine, and more.",
      },
      5: {
        zh: "第 3 单元 · 第 5 课：走向未来",
        en: "Unit 3 · Lesson 5: Moving Toward the Future",
        blurbZh: "展望 AGI、学科融合与前沿安全方向。",
        blurbEn: "Outlook on AGI, integration, and frontier safety directions.",
      },
    };
    const title = isZh ? titles[lessonNum].zh : titles[lessonNum].en;
    const eyebrow = isZh ? "已开放课程" : "Open lesson";
    const blurb = isZh ? titles[lessonNum].blurbZh : titles[lessonNum].blurbEn;

    return wrap(
      <div className="space-y-4">
        <SectionBlock title={title} eyebrow={eyebrow}>
          <p className="text-sm text-slate-700">{blurb}</p>
        </SectionBlock>
        {lessonNum === 1 && <MiddleLesson3_1 lang={lang} />}
        {lessonNum === 2 && <MiddleLesson3_2 lang={lang} />}
        {lessonNum === 3 && <MiddleLesson3_3 lang={lang} />}
        {lessonNum === 4 && <MiddleLesson3_4 lang={lang} />}
        {lessonNum === 5 && <MiddleLesson3_5 lang={lang} />}
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
