import { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { SectionBlock } from "./components/SectionBlock";
import { ComingSoon } from "./pages/ComingSoon";
import { LessonDeepLearningBasics } from "./pages/LessonDeepLearningBasics";
import { NavigationPage } from "./pages/NavigationPage";

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
};

function LessonRouter({ lang }: LessonRouterProps) {
  const { chapter, lesson } = useParams();
  let chapterNum = Number(chapter);
  let lessonNum = Number(lesson);
  if (Number.isNaN(chapterNum) || Number.isNaN(lessonNum)) {
    const match = window.location.pathname.match(/ch\/?(\d+)\/lesson\/?(\d+)/i);
    if (match) {
      chapterNum = Number(match[1]);
      lessonNum = Number(match[2]);
    }
  }
  const isZh = lang === "zh";

  if (chapterNum === 2 && lessonNum === 8) {
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
        <LessonDeepLearningBasics lang={lang} />
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
