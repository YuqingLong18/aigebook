import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SectionBlock } from "../components/SectionBlock";

type NavigationPageProps = {
  lang: "en" | "zh";
};

type LevelId = "primary" | "middle" | "high";

export function NavigationPage({ lang }: NavigationPageProps) {
  const isZh = lang === "zh";
  const t = isZh ? zhText : enText;
  const [level, setLevel] = useState<LevelId | null>(null);
  const [chapter, setChapter] = useState<number | null>(null);
  const [lesson, setLesson] = useState<number | null>(null);

  const lessonNumbers = useMemo(() => Array.from({ length: 10 }, (_, i) => i + 1), []);
  const levelLabel = t.levels.find((l) => l.id === level)?.label;
  const chapterLabel = t.chapters.find((c) => c.id === chapter)?.label;
  const selectedPath = [levelLabel, chapterLabel, lesson ? t.lessonLabel(lesson) : null]
    .filter(Boolean)
    .join(" / ");

  const available = level === "high" && chapter === 2 && lesson === 8;

  return (
    <div className="space-y-6">
      <SectionBlock title={t.title} eyebrow={t.eyebrow}>
        <p className="text-sm leading-relaxed text-slate-700">{t.subtitle}</p>
        <p className="text-xs text-brand-700">{t.hint}</p>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
          {t.levelPrompt}
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {t.levels.map((opt) => {
            const active = level === opt.id;
            const coming = opt.id !== "high";
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setLevel(opt.id);
                  setChapter(null);
                  setLesson(null);
                }}
                className={[
                  "rounded-2xl border px-4 py-3 text-left transition",
                  active
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
                aria-pressed={active}
              >
                <p className="text-sm font-semibold">{opt.label}</p>
                <p className="text-xs text-slate-500">
                  {opt.id === "high"
                    ? isZh
                      ? "含 4 章，每章 10 课"
                      : "4 chapters, 10 lessons each"
                    : t.coming}
                </p>
              </button>
            );
          })}
        </div>

        {level && level !== "high" && (
          <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
            {t.levelComing}
          </div>
        )}

        {level === "high" && (
          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {t.chapterPrompt}
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {t.chapters.map((chap) => {
                const active = chapter === chap.id;
                return (
                  <button
                    key={chap.id}
                    type="button"
                    onClick={() => {
                      setChapter(chap.id);
                      setLesson(null);
                    }}
                    className={[
                      "rounded-2xl border px-4 py-3 text-left transition",
                      active
                        ? "border-brand-500 bg-brand-50"
                        : "border-slate-200 bg-white hover:border-slate-300",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    <p className="text-sm font-semibold text-slate-900">{chap.label}</p>
                    <p className="text-xs text-slate-500">{isZh ? "共 10 课" : "10 lessons"}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {level === "high" && chapter && (
          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {t.lessonPrompt}
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {lessonNumbers.map((num) => {
                const active = lesson === num;
                const isAvailable = chapter === 2 && num === 8;
                const buttonClass = [
                  "rounded-xl border px-3 py-2 text-sm font-semibold transition",
                  isAvailable
                    ? active
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white hover:border-slate-300"
                    : "border-dashed border-slate-200 bg-slate-50 text-slate-400",
                ].join(" ");

                if (isAvailable) {
                  return (
                    <Link
                      key={num}
                      to="/high/ch/2/lesson/8"
                      className={buttonClass}
                      onClick={() => setLesson(num)}
                    >
                      {t.lessonLabel(num)}
                    </Link>
                  );
                }

                return (
                  <button key={num} type="button" className={buttonClass} disabled>
                    {t.lessonLabel(num)}
                    <span className="block text-[11px] font-normal text-slate-400">{t.soon}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {selectedPath && (
          <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
            <span className="font-semibold text-slate-900">{t.pathLabel}:</span> {selectedPath}
          </div>
        )}
      </SectionBlock>

      {available && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          {t.quickLink}{" "}
          <Link to="/high/ch/2/lesson/8" className="font-semibold underline">
            /high/ch/2/lesson/8
          </Link>
        </div>
      )}
    </div>
  );
}

const enText = {
  title: "Version Navigation",
  eyebrow: "Start here",
  subtitle: "Choose a school edition and chapter. Default landing is Chinese; toggle is above.",
  hint: "Open now: High School → Chapter 2 → Lesson 8 (this page).",
  levelPrompt: "Pick a school edition to enter.",
  chapterPrompt: "Select a chapter (10 lessons each).",
  lessonPrompt: "Currently available: Chapter 2, Lesson 8. Others will arrive soon.",
  pathLabel: "You are viewing",
  quickLink: "Direct link to the open lesson:",
  coming: "Coming soon",
  levelComing: "Content for this level is coming soon.",
  soon: "Soon",
  levels: [
    { id: "primary" as const, label: "Primary School" },
    { id: "middle" as const, label: "Middle School" },
    { id: "high" as const, label: "High School" },
  ],
  chapters: [
    { id: 1, label: "Chapter 1: Introduction to AI" },
    { id: 2, label: "Chapter 2: Technical Foundations of AI" },
    { id: 3, label: "Chapter 3: Applications of AI" },
    { id: 4, label: "Chapter 4: Frontiers of AI" },
  ],
  lessonLabel: (n: number) => `Lesson ${n}`,
};

const zhText = {
  title: "版本导航",
  eyebrow: "从这里开始",
  subtitle: "请选择学段与章节。默认显示中文，可通过右上角切换语言。",
  hint: "已开放：高中版 → 第 2 章 → 第 8 课（本页内容）。",
  levelPrompt: "选择学段进入对应内容。",
  chapterPrompt: "选择一个章节（每章 10 课）。",
  lessonPrompt: "目前已开放：第 2 章 第 8 课，其余即将上线。",
  pathLabel: "当前路径",
  quickLink: "已开放课的直达链接：",
  coming: "内容即将上线",
  levelComing: "该学段内容即将上线。",
  soon: "即将上线",
  levels: [
    { id: "primary" as const, label: "小学版" },
    { id: "middle" as const, label: "初中版" },
    { id: "high" as const, label: "高中版" },
  ],
  chapters: [
    { id: 1, label: "第 1 章 人工智能概述" },
    { id: 2, label: "第 2 章 人工智能的技术基础" },
    { id: 3, label: "第 3 章 人工智能的应用" },
    { id: 4, label: "第 4 章 人工智能的前沿" },
  ],
  lessonLabel: (n: number) => `第 ${n} 课`,
};
