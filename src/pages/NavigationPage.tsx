import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SectionBlock } from "../components/SectionBlock";

type NavigationPageProps = {
  lang: "en" | "zh";
};

type LevelId = "primary" | "middle" | "high";

type LessonInfo = {
  num: number;
  titleZh: string;
  titleEn: string;
};

export function NavigationPage({ lang }: NavigationPageProps) {
  const isZh = lang === "zh";
  const t = isZh ? zhText : enText;
  const [level, setLevel] = useState<LevelId | null>(null);
  const [chapter, setChapter] = useState<number | null>(null);
  const [lesson, setLesson] = useState<number | null>(null);

  const lessonsByChapter: Record<number, LessonInfo[]> = useMemo(
    () => ({
      1: [
        { num: 1, titleZh: "什么是人工智能", titleEn: "What is Artificial Intelligence" },
        { num: 2, titleZh: "人类智能的起源", titleEn: "Origins of Human Intelligence" },
        { num: 3, titleZh: "人工智能的起源：数理逻辑", titleEn: "Origins of AI: Mathematical Logic" },
        { num: 4, titleZh: "人工智能的起源：计算机的诞生", titleEn: "Origins of AI: Birth of Computers" },
        { num: 5, titleZh: "图灵：人工智能之父", titleEn: "Turing: Father of AI" },
        { num: 6, titleZh: "人工智能的开端", titleEn: "The Dawn of Artificial Intelligence" },
        { num: 7, titleZh: "人工智能发展史（1）", titleEn: "History of AI (1)" },
        { num: 8, titleZh: "人工智能发展史（2）", titleEn: "History of AI (2)" },
        { num: 9, titleZh: "人工智能伦理：近期风险", titleEn: "AI Ethics: Near-term Risks" },
        { num: 10, titleZh: "人工智能伦理：远期风险", titleEn: "AI Ethics: Long-term Risks" },
      ],
      2: [
        { num: 1, titleZh: "基于知识的人工智能", titleEn: "Knowledge-based Artificial Intelligence" },
        { num: 2, titleZh: "基于学习的人工智能", titleEn: "Learning-based Artificial Intelligence" },
        { num: 3, titleZh: "机器学习基础流程", titleEn: "Basic Machine Learning Pipeline" },
        { num: 4, titleZh: "机器学习方法", titleEn: "Machine Learning Methods" },
        { num: 5, titleZh: "机器学习四大学派", titleEn: "Four Major ML Schools" },
        { num: 6, titleZh: "初识人工神经网络", titleEn: "Intro to Artificial Neural Networks" },
        { num: 7, titleZh: "典型神经网络结构", titleEn: "Typical Neural Network Structures" },
        { num: 8, titleZh: "深度学习基础", titleEn: "Deep Learning Basics" },
        { num: 9, titleZh: "大模型的基本原理（1）", titleEn: "Basic Principles of Large Models (1)" },
        { num: 10, titleZh: "大模型的基本原理（2）", titleEn: "Basic Principles of Large Models (2)" },
      ],
      3: [
        { num: 1, titleZh: "机器视觉：人脸识别", titleEn: "Machine Vision: Face Recognition" },
        { num: 2, titleZh: "机器视觉：绘画大师", titleEn: "Machine Vision: Painting Master" },
        { num: 3, titleZh: "机器视觉：伪造与鉴别", titleEn: "Machine Vision: Forgery & Detection" },
        { num: 4, titleZh: "机器听觉：语音识别", titleEn: "Machine Hearing: Speech Recognition" },
        { num: 5, titleZh: "机器听觉：语音合成", titleEn: "Machine Hearing: Speech Synthesis" },
        { num: 6, titleZh: "语言处理：机器翻译", titleEn: "Language Processing: Machine Translation" },
        { num: 7, titleZh: "人机对战：AlphaGo 的秘密", titleEn: "Human vs AI: AlphaGo’s Secret" },
        { num: 8, titleZh: "人机对战：AI 打游戏", titleEn: "Human vs AI: Game-playing AI" },
        { num: 9, titleZh: "搜索引擎的秘密", titleEn: "Secrets of Search Engines" },
        { num: 10, titleZh: "比你更懂你的推荐算法", titleEn: "Recommendation Algorithms That Know You" },
      ],
      4: [
        { num: 1, titleZh: "和数学家做朋友", titleEn: "Making Friends with Mathematicians" },
        { num: 2, titleZh: "模仿蝙蝠的耳朵", titleEn: "Mimicking the Bat’s Ear" },
        { num: 3, titleZh: "破解蛋白质结构之谜", titleEn: "Cracking Protein Structures" },
        { num: 4, titleZh: "重构材料微观三维结构", titleEn: "Reconstructing Material Microstructures" },
        { num: 5, titleZh: "预测化学反应类型", titleEn: "Predicting Chemical Reaction Types" },
        { num: 6, titleZh: "天文学家的助手", titleEn: "Assistant to Astronomers" },
        { num: 7, titleZh: "人工智能作曲家", titleEn: "AI Composer" },
        { num: 8, titleZh: "检测炭疽芽孢", titleEn: "Detecting Anthrax Spores" },
        { num: 9, titleZh: "开发癌症疫苗", titleEn: "Developing Cancer Vaccines" },
        { num: 10, titleZh: "走向未来", titleEn: "Heading to the Future" },
      ],
    }),
    [],
  );

  const lessons = chapter ? lessonsByChapter[chapter] ?? [] : [];
  const levelLabel = t.levels.find((l) => l.id === level)?.label;
  const chapterLabel = t.chapters.find((c) => c.id === chapter)?.label;
  const lessonLabel = lessons.find((l) => l.num === lesson);
  const selectedPath = [levelLabel, chapterLabel, lessonLabel ? lessonLabel.titleZh : null]
    .filter(Boolean)
    .join(" / ");

  const availableLesson =
    level === "high" &&
    ((chapter === 2 && lesson === 8) || (chapter === 1 && lesson === 6));
  const availablePath =
    level === "high" && chapter && lesson
      ? chapter === 2 && lesson === 8
        ? "/high/ch/2/lesson/8"
        : chapter === 1 && lesson === 6
          ? "/high/ch/1/lesson/6"
          : ""
      : "";

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
            <div className="grid gap-2 sm:grid-cols-2">
              {lessons.map((lsn) => {
                const active = lesson === lsn.num;
                const isAvailable =
                  (chapter === 2 && lsn.num === 8) || (chapter === 1 && lsn.num === 6);
                const buttonClass = [
                  "flex h-full flex-col justify-between rounded-xl border px-3 py-2 text-left text-sm transition",
                  isAvailable
                    ? active
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white hover:border-slate-300"
                    : "border-dashed border-slate-200 bg-slate-50 text-slate-400",
                ].join(" ");

                const title = isZh ? lsn.titleZh : lsn.titleEn;

                if (isAvailable) {
                  return (
                    <Link
                      key={lsn.num}
                      to={
                        chapter === 2 && lsn.num === 8
                          ? "/high/ch/2/lesson/8"
                          : "/high/ch/1/lesson/6"
                      }
                      className={buttonClass}
                      onClick={() => setLesson(lsn.num)}
                    >
                      <span className="text-xs font-semibold text-brand-700">
                        {isZh ? `第 ${lsn.num} 课` : `Lesson ${lsn.num}`}
                      </span>
                      <span className="mt-1 text-sm font-semibold">{title}</span>
                    </Link>
                  );
                }

                return (
                  <div key={lsn.num} className={buttonClass}>
                    <span className="text-xs font-semibold text-slate-400">
                      {isZh ? `第 ${lsn.num} 课` : `Lesson ${lsn.num}`}
                    </span>
                    <span className="mt-1 font-semibold">{title}</span>
                    <span className="mt-1 text-[11px] font-normal text-slate-400">{t.soon}</span>
                  </div>
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

      {availableLesson && availablePath && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          {t.quickLink}{" "}
          <Link to={availablePath} className="font-semibold underline">
            {availablePath}
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
  hint: "Open now: High School → Unit 2 → Lesson 8 (this page) and Unit 1 → Lesson 6 (new).",
  levelPrompt: "Pick a school edition to enter.",
  chapterPrompt: "Select a chapter (10 lessons each).",
  lessonPrompt:
    "Select a lesson. Currently available: Unit 2 Lesson 8 and Unit 1 Lesson 6. Others will arrive soon.",
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
    { id: 1, label: "Unit 1: Introduction to AI" },
    { id: 2, label: "Unit 2: Fundamentals of AI" },
    { id: 3, label: "Unit 3: Applications of AI" },
    { id: 4, label: "Unit 4: Frontiers of AI" },
  ],
};

const zhText = {
  title: "版本导航",
  eyebrow: "从这里开始",
  subtitle: "请选择学段与章节。默认显示中文，可通过右上角切换语言。",
  hint: "已开放：高中版 → 第 2 单元 → 第 8 课（本页内容），以及第 1 单元 → 第 6 课。",
  levelPrompt: "选择学段进入对应内容。",
  chapterPrompt: "选择一个章节（每章 10 课）。",
  lessonPrompt: "选择课次。当前已开放：第 2 单元 第 8 课，以及第 1 单元 第 6 课，其余即将上线。",
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
    { id: 1, label: "第 1 单元 人工智能概述" },
    { id: 2, label: "第 2 单元 人工智能基础" },
    { id: 3, label: "第 3 单元 人工智能应用" },
    { id: 4, label: "第 4 单元 人工智能前沿" },
  ],
};
