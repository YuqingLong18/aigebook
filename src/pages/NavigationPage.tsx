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

type ChapterInfo = {
  id: number;
  labelZh: string;
  labelEn: string;
  lessons: LessonInfo[];
};

export function NavigationPage({ lang }: NavigationPageProps) {
  const isZh = lang === "zh";
  const t = isZh ? zhText : enText;
  const [level, setLevel] = useState<LevelId | null>(null);
  const [chapter, setChapter] = useState<number | null>(null);
  const [lesson, setLesson] = useState<number | null>(null);

  const highChapters: ChapterInfo[] = useMemo(
    () => [
      {
        id: 1,
        labelZh: "第 1 单元 人工智能概述",
        labelEn: "Unit 1: Introduction to AI",
        lessons: [
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
      },
      {
        id: 2,
        labelZh: "第 2 单元 人工智能基础",
        labelEn: "Unit 2: Fundamentals of AI",
        lessons: [
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
      },
      {
        id: 3,
        labelZh: "第 3 单元 人工智能应用",
        labelEn: "Unit 3: Applications of AI",
        lessons: [
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
      },
      {
        id: 4,
        labelZh: "第 4 单元 人工智能前沿",
        labelEn: "Unit 4: Frontiers of AI",
        lessons: [
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
      },
    ],
    [],
  );

  const primaryChapters: ChapterInfo[] = useMemo(
    () => [
      {
        id: 1,
        labelZh: "第 1 单元 从梦想到现实",
        labelEn: "Unit 1: From Dream to Reality",
        lessons: [
          { num: 1, titleZh: "僧师的故事", titleEn: "Story of the Monk Master" },
          { num: 2, titleZh: "加扎利的音乐团", titleEn: "Ghazali's Music Band" },
          { num: 3, titleZh: "电影中的人工智能", titleEn: "AI in Movies" },
          { num: 4, titleZh: "什么是人工智能", titleEn: "What is Artificial Intelligence" },
        ],
      },
      {
        id: 2,
        labelZh: "第 2 单元 身边的人工智能",
        labelEn: "Unit 2: AI Around Us",
        lessons: [
          { num: 1, titleZh: "高铁检票员", titleEn: "High-speed Rail Ticket Checker" },
          { num: 2, titleZh: "电子交警", titleEn: "Electronic Traffic Officer" },
          { num: 3, titleZh: "美颜相机", titleEn: "Beauty Camera" },
          { num: 4, titleZh: "扫地机器人", titleEn: "Robot Vacuum" },
          { num: 5, titleZh: "自动驾驶", titleEn: "Autonomous Driving" },
          { num: 6, titleZh: "推荐系统", titleEn: "Recommendation Systems" },
        ],
      },
      {
        id: 3,
        labelZh: "第 3 单元 人工智能前沿",
        labelEn: "Unit 3: AI Frontiers",
        lessons: [
          { num: 1, titleZh: "AI 画家", titleEn: "AI Painter" },
          { num: 2, titleZh: "AI 作曲", titleEn: "AI Composer" },
          { num: 3, titleZh: "AI 诗人", titleEn: "AI Poet" },
          { num: 4, titleZh: "AlphaGo 的故事", titleEn: "Story of AlphaGo" },
          { num: 5, titleZh: "OpenAI 和它的 ChatGPT", titleEn: "OpenAI and ChatGPT" },
          { num: 6, titleZh: "Sora 的故事", titleEn: "Story of Sora" },
          { num: 7, titleZh: "AI 天气预报员", titleEn: "AI Weather Forecaster" },
        ],
      },
      {
        id: 4,
        labelZh: "第 4 单元 人工智能起源",
        labelEn: "Unit 4: Origins of AI",
        lessons: [
          { num: 1, titleZh: "亚里士多德的故事", titleEn: "Story of Aristotle" },
          { num: 2, titleZh: "布尔的故事", titleEn: "Story of Boole" },
          { num: 3, titleZh: "图灵和图灵机", titleEn: "Turing and the Turing Machine" },
          { num: 4, titleZh: "计算机的诞生", titleEn: "Birth of the Computer" },
          { num: 5, titleZh: "机器智能的最初设想", titleEn: "Early Notions of Machine Intelligence" },
          { num: 6, titleZh: "达特茅斯会议", titleEn: "Dartmouth Conference" },
        ],
      },
      {
        id: 5,
        labelZh: "第 5 单元 人工智能发展",
        labelEn: "Unit 5: AI Development",
        lessons: [
          { num: 1, titleZh: "吴文俊的故事", titleEn: "Story of Wu Wenjun" },
          { num: 2, titleZh: "费根鲍姆和专家系统", titleEn: "Feigenbaum and Expert Systems" },
          { num: 3, titleZh: "深蓝：成就巅峰", titleEn: "Deep Blue: Reaching the Peak" },
          { num: 4, titleZh: "深度学习兴起", titleEn: "Rise of Deep Learning" },
          { num: 5, titleZh: "大模型时代", titleEn: "Era of Large Models" },
          { num: 6, titleZh: "走向未来", titleEn: "Heading to the Future" },
        ],
      },
      {
        id: 6,
        labelZh: "第 6 单元 人工智能基础",
        labelEn: "Unit 6: AI Fundamentals",
        lessons: [
          { num: 1, titleZh: "认识计算机", titleEn: "Know the Computer" },
          { num: 2, titleZh: "认识计算机程序", titleEn: "Know Computer Programs" },
          { num: 3, titleZh: "什么是算法", titleEn: "What is an Algorithm" },
          { num: 4, titleZh: "知识与智能", titleEn: "Knowledge and Intelligence" },
          { num: 5, titleZh: "不会学习的机器不是好机器", titleEn: "A Machine that Cannot Learn is Not a Good Machine" },
        ],
      },
      {
        id: 7,
        labelZh: "第 7 单元 深度学习时代",
        labelEn: "Unit 7: Era of Deep Learning",
        lessons: [
          { num: 1, titleZh: "皮茨和他的神经元模型", titleEn: "Pitts and His Neuron Model" },
          { num: 2, titleZh: "感知器：会学习的神经网络", titleEn: "Perceptron: A Learning Neural Network" },
          { num: 3, titleZh: "杰弗里·辛顿的故事", titleEn: "Story of Geoffrey Hinton" },
          { num: 4, titleZh: "李飞飞与 ImageNet 数据集", titleEn: "Fei-Fei Li and ImageNet Dataset" },
          { num: 5, titleZh: "GPU：从游戏到人工智能", titleEn: "GPU: From Gaming to AI" },
          { num: 6, titleZh: "解析 AlphaGo", titleEn: "Analyzing AlphaGo" },
          { num: 7, titleZh: "探索大语言模型", titleEn: "Exploring Large Language Models" },
          { num: 8, titleZh: "深度学习挑战：难以理解的智能", titleEn: "Deep Learning Challenge: Hard-to-Explain Intelligence" },
          { num: 9, titleZh: "深度学习挑战：对抗样本", titleEn: "Deep Learning Challenge: Adversarial Examples" },
          { num: 10, titleZh: "深度学习挑战：超级智能体", titleEn: "Deep Learning Challenge: Super Intelligent Agents" },
        ],
      },
    ],
    [],
  );

  const middleChapters: ChapterInfo[] = useMemo(
    () => [
      {
        id: 1,
        labelZh: "第 1 单元 人工智能的概念",
        labelEn: "Unit 1: Concept of AI",
        lessons: [
          { num: 1, titleZh: "智能机器的梦想", titleEn: "Dream of Intelligent Machines" },
          { num: 2, titleZh: "什么是人工智能", titleEn: "What is Artificial Intelligence" },
          { num: 3, titleZh: "机器的眼睛", titleEn: "Eyes of the Machine" },
          { num: 4, titleZh: "机器的耳朵", titleEn: "Ears of the Machine" },
          { num: 5, titleZh: "机器的嘴巴", titleEn: "Mouth of the Machine" },
          { num: 6, titleZh: "机器的手和脚", titleEn: "Hands and Feet of the Machine" },
        ],
      },
      {
        id: 2,
        labelZh: "第 2 单元 人工智能的诞生",
        labelEn: "Unit 2: Birth of AI",
        lessons: [
          { num: 1, titleZh: "人类智能的起源", titleEn: "Origin of Human Intelligence" },
          { num: 2, titleZh: "人类思维规律的总结", titleEn: "Summaries of Human Thought" },
          { num: 3, titleZh: "计算机的诞生", titleEn: "Birth of the Computer" },
          { num: 4, titleZh: "伟大的图灵", titleEn: "Great Turing" },
          { num: 5, titleZh: "达特茅斯会议", titleEn: "Dartmouth Conference" },
        ],
      },
      {
        id: 3,
        labelZh: "第 3 单元 人工智能发展史",
        labelEn: "Unit 3: AI Development History",
        lessons: [
          { num: 1, titleZh: "梦想与失落", titleEn: "Dreams and Setbacks" },
          { num: 2, titleZh: "深度学习时代", titleEn: "Era of Deep Learning" },
          { num: 3, titleZh: "大模型时代", titleEn: "Era of Large Models" },
          { num: 4, titleZh: "交叉与融合", titleEn: "Crossovers and Integration" },
          { num: 5, titleZh: "走向未来", titleEn: "Heading to the Future" },
        ],
      },
      {
        id: 4,
        labelZh: "第 4 单元 人工智能前沿",
        labelEn: "Unit 4: AI Frontiers",
        lessons: [
          { num: 1, titleZh: "人工智能与游戏", titleEn: "AI and Games" },
          { num: 2, titleZh: "人工智能与语言", titleEn: "AI and Language" },
          { num: 3, titleZh: "人工智能与艺术", titleEn: "AI and Art" },
          { num: 4, titleZh: "人工智能与天文学", titleEn: "AI and Astronomy" },
          { num: 5, titleZh: "人工智能与生物学", titleEn: "AI and Biology" },
          { num: 6, titleZh: "人工智能与医学", titleEn: "AI and Medicine" },
        ],
      },
      {
        id: 5,
        labelZh: "第 5 单元 人工智能伦理",
        labelEn: "Unit 5: AI Ethics",
        lessons: [
          { num: 1, titleZh: "机器人三定律", titleEn: "Three Laws of Robotics" },
          { num: 2, titleZh: "信息伪造", titleEn: "Information Forgery" },
          { num: 3, titleZh: "信息泄露", titleEn: "Information Leakage" },
          { num: 4, titleZh: "信息茧房", titleEn: "Information Cocoon" },
          { num: 5, titleZh: "人工智能与社会公平", titleEn: "AI and Social Fairness" },
          { num: 6, titleZh: "法律责任", titleEn: "Legal Responsibility" },
        ],
      },
      {
        id: 6,
        labelZh: "第 6 单元 人工智能基础方法",
        labelEn: "Unit 6: Fundamental AI Methods",
        lessons: [
          { num: 1, titleZh: "基于知识的智能", titleEn: "Knowledge-based Intelligence" },
          { num: 2, titleZh: "基于学习的智能", titleEn: "Learning-based Intelligence" },
          { num: 3, titleZh: "监督学习与无监督学习", titleEn: "Supervised & Unsupervised Learning" },
          { num: 4, titleZh: "强化学习", titleEn: "Reinforcement Learning" },
          { num: 5, titleZh: "机器学习的流派", titleEn: "Schools of Machine Learning" },
        ],
      },
      {
        id: 7,
        labelZh: "第 7 单元 深度学习方法",
        labelEn: "Unit 7: Deep Learning Methods",
        lessons: [
          { num: 1, titleZh: "人类神经系统", titleEn: "Human Nervous System" },
          { num: 2, titleZh: "人工神经网络的开端", titleEn: "Beginnings of Neural Networks" },
          { num: 3, titleZh: "人工神经网络发展史", titleEn: "History of Neural Networks" },
          { num: 4, titleZh: "深度学习的开端", titleEn: "Beginnings of Deep Learning" },
          { num: 5, titleZh: "深度学习基本原理", titleEn: "Deep Learning Principles" },
          { num: 6, titleZh: "深度学习的挑战：对抗样本", titleEn: "Deep Learning Challenge: Adversarial Samples" },
          { num: 7, titleZh: "深度学习的挑战：可解释性", titleEn: "Deep Learning Challenge: Interpretability" },
        ],
      },
    ],
    [],
  );

  const chapters: ChapterInfo[] = useMemo(() => {
    if (level === "high") return highChapters;
    if (level === "primary") return primaryChapters;
    if (level === "middle") return middleChapters;
    return [];
  }, [highChapters, level, middleChapters, primaryChapters]);

  const lessons = chapter ? chapters.find((c) => c.id === chapter)?.lessons ?? [] : [];
  const levelLabel = t.levels.find((l) => l.id === level)?.label;
  const chapterLabel = chapters.find((c) => c.id === chapter)
    ? isZh
      ? chapters.find((c) => c.id === chapter)?.labelZh
      : chapters.find((c) => c.id === chapter)?.labelEn
    : undefined;
  const lessonLabel = lessons.find((l) => l.num === lesson);
  const selectedPath = [levelLabel, chapterLabel, lessonLabel ? lessonLabel.titleZh : null]
    .filter(Boolean)
    .join(" / ");

  const highOpenLessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const availableLesson =
    (level === "high" &&
      ((chapter === 2 && lesson && highOpenLessons.includes(lesson)) ||
        (chapter === 1 && lesson && [1, 2, 3, 4, 5, 6].includes(lesson)))) ||
    (level === "primary" && chapter === 5 && lesson === 6) ||
    (level === "middle" && chapter === 7 && lesson === 7);

  const availablePath =
    level === "high" && chapter && lesson
      ? chapter === 2 && lesson
        ? `/high/ch/2/lesson/${lesson}`
        : chapter === 1 && lesson
          ? `/high/ch/1/lesson/${lesson}`
          : ""
      : level === "primary" && chapter === 5 && lesson === 6
        ? "/primary/unit/5/lesson/6"
        : level === "middle" && chapter === 7 && lesson === 7
          ? "/middle/unit/7/lesson/7"
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

        {level && chapters.length === 0 && (
          <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
            {t.levelComing}
          </div>
        )}

        {(level === "high" || level === "primary" || level === "middle") && chapters.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {t.chapterPrompt}
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {chapters.map((chap) => {
                const active = chapter === chap.id;
                const lessonCount = chap.lessons.length;
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
                    <p className="text-sm font-semibold text-slate-900">
                      {isZh ? chap.labelZh : chap.labelEn}
                    </p>
                    <p className="text-xs text-slate-500">
                      {isZh ? `共 ${lessonCount} 课` : `${lessonCount} lessons`}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {(level === "high" || level === "primary" || level === "middle") && chapter && (
          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {t.lessonPrompt}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {lessons.map((lsn) => {
                const active = lesson === lsn.num;
                const isAvailable =
                  (level === "high" &&
                    chapter === 2 &&
                    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as number[]).includes(lsn.num)) ||
                  (level === "high" && chapter === 1 && [1, 2, 3, 4, 5, 6].includes(lsn.num)) ||
                  (level === "primary" && chapter === 5 && lsn.num === 6) ||
                  (level === "middle" && chapter === 7 && lsn.num === 7);
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
                        level === "high" && chapter === 2
                          ? `/high/ch/2/lesson/${lsn.num}`
                          : level === "high" && chapter === 1 && lsn.num === 6
                            ? "/high/ch/1/lesson/6"
                            : level === "primary" && chapter === 5 && lsn.num === 6
                              ? "/primary/unit/5/lesson/6"
                              : "/middle/unit/7/lesson/7"
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
  hint: "Open now: High → Unit 1 Lessons 1–6 and Unit 2 Lessons 1–7, 8, 9, 10. Primary and Middle units are listed for reference.",
  levelPrompt: "Pick a school edition to enter.",
  chapterPrompt: "Select a unit/chapter.",
  lessonPrompt:
    "Select a lesson. Currently available: High Unit 1 Lessons 1–6 and Unit 2 Lessons 1–7, 8, 9, 10. Others will arrive soon.",
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
  hint: "已开放：高中版 第 1 单元 第 1-6 课；第 2 单元 第 1-7、8、9、10 课。小学版、初中版已列出目录。",
  levelPrompt: "选择学段进入对应内容。",
  chapterPrompt: "选择一个单元。",
  lessonPrompt: "选择课次。当前已开放：高中 第 1 单元 第 1-6 课；第 2 单元 第 1-7、8、9、10 课，其余即将上线。",
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
