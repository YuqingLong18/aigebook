import { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { SectionBlock } from "./components/SectionBlock";
import { ComingSoon } from "./pages/ComingSoon";
import { HighLesson1_6 } from "./pages/high-1-6";
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

  if (chapterNum === 1 && lessonNum === 6 && level === "high") {
    return (
      <div className="space-y-4">
        <SectionBlock
          title={
            isZh
              ? "第 1 单元 · 第 6 课：人工智能的开端"
              : "Unit 1 · Lesson 6: The Beginning of AI"
          }
          eyebrow={isZh ? "已开放课程" : "Open lesson"}
        >
          <p className="text-sm text-slate-700">
            {isZh
              ? "本课聚焦早期 AI 研究与达特茅斯会议，回顾博弈算法、定理证明、早期神经网络等里程碑。"
              : "This lesson covers early AI research and the Dartmouth Conference, including game algorithms, theorem proving, and early neural networks."}
          </p>
        </SectionBlock>
        <HighLesson1_6 lang={lang} />
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
