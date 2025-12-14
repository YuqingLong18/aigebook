import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { GalaxyYoloDemo } from "../demos/GalaxyYoloDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson4_4({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Try again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };

  const t = content[lang];
  const toc = [
    { id: "learning-objectives", label: t.learningObjectivesTitle },
    { id: "intro", label: t.introTitle },
    { id: "history", label: t.historyTitle },
    { id: "monitor", label: t.monitorTitle },
    { id: "planning", label: t.planTitle },
    { id: "mining", label: t.miningTitle },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.intro}</p>
          <InfoCard title={t.introCardTitle}>
            <p className="text-sm text-slate-700">{t.introCard}</p>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.historyIntro}</p>
          <AstronomyTimeline lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.historySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.historyCheckpoint.prompt}
            options={t.historyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="monitor" title={t.monitorTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.monitorIntro}</p>
          <TelescopeMonitor lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.monitorSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.monitorCheckpoint.prompt}
            options={t.monitorCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="planning" title={t.planTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.planIntro}</p>
          <SitePlanner lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.planSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.planCheckpoint.prompt}
            options={t.planCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="mining" title={t.miningTitle} eyebrow={t.miningEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.miningIntro}</p>
          <GalaxyYoloDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.miningSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.miningCheckpoint.prompt}
            options={t.miningCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

function AstronomyTimeline({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const items = useMemo(
    () => [
      { year: "古代", text: isZh ? "裸眼观星：甘石星经、Hipparchus 星表奠基。" : "Ancient naked-eye: Gan Shi star manual, Hipparchus catalog." },
      { year: "1609", text: isZh ? "伽利略改进望远镜，发现月球山脉与环形山。" : "Galileo refines telescope; sees lunar mountains and craters." },
      {
        year: "20 世纪",
        text: isZh ? "射电/红外/紫外望远镜诞生，望远镜口径不断增大。" : "Radio/IR/UV telescopes; ever-larger apertures.",
      },
      {
        year: "如今",
        text: isZh ? "HST、JWST、FAST 等进入“天文大数据”时代，需 AI 处理海量数据。" : "HST, JWST, FAST → astronomy big data era needing AI.",
      },
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "天文学简史" : "Astronomy snapshot"}
      </p>
      <div className="mt-3 grid gap-2 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.year} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-800">
            <p className="text-xs font-semibold text-brand-600">{item.year}</p>
            <p className="mt-1">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "口径越大、波段越多 → 数据量与复杂度飙升，需要 AI 辅助。" : "Bigger apertures and more bands → explosive data/complexity needing AI."}
      </p>
    </div>
  );
}

function TelescopeMonitor({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [shift, setShift] = useState(0.2);
  const [threshold, setThreshold] = useState(0.5);

  const status = shift > threshold ? (isZh ? "异常" : "Anomaly") : isZh ? "正常" : "Normal";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "状态监测（VAE 异常检测示意）" : "Status monitor (VAE anomaly intuition)"}
          </p>
          <p className="text-sm text-slate-700">
            {isZh
              ? "调整观测数据在 2D 空间的偏移与报警阈值，感受如何早期发现故障或射频干扰。"
              : "Adjust data shift and alert threshold to see how anomalies (fault/RFI) are flagged early."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{status}</span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {isZh ? "数据偏移（异常程度）" : "Data shift (anomaly strength)"}
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={shift}
              onChange={(e) => setShift(parseFloat(e.target.value))}
              className="mt-2 w-full accent-brand-600"
            />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {isZh ? "告警阈值" : "Alert threshold"}
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={threshold}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
              className="mt-2 w-full accent-brand-600"
            />
          </label>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "二维嵌入（示意）" : "2D embedding (toy)"}
          </p>
          <div className="relative mt-3 h-40 rounded-lg border border-dashed border-slate-200 bg-white">
            <div
              className="absolute h-3 w-3 rounded-full"
              style={{
                left: `${20 + shift * 60}%`,
                top: `${45 - shift * 30}%`,
                backgroundColor: shift > threshold ? "#fb7185" : "#10b981",
              }}
              aria-hidden
            />
            <div className="absolute bottom-2 right-2 rounded-full bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white">
              {isZh ? "设备/信号点" : "Data point"}
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? "VAE 将观测映射到低维；偏移超阈值 → 可能是设备故障或射频干扰。"
              : "VAE maps observations to 2D; shift beyond threshold → possible fault or RFI."}
          </p>
        </div>
      </div>
    </div>
  );
}

function SitePlanner({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [sky, setSky] = useState(0.7);
  const [weather, setWeather] = useState(0.6);
  const [interference, setInterference] = useState(0.2);

  const score = useMemo(() => {
    const cleanSky = sky * 0.4;
    const stableWeather = weather * 0.35;
    const lowNoise = (1 - interference) * 0.25;
    return Math.round((cleanSky + stableWeather + lowNoise) * 100) / 100;
  }, [sky, weather, interference]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "台址与观测规划" : "Site & schedule planning"}
          </p>
          <p className="text-sm text-slate-700">
            {isZh
              ? "调整晴朗度、天气稳定度、干扰强度，查看综合评分。AI 可综合多因素做出最优选址与观测计划。"
              : "Tune clear sky, weather stability, and interference to see a composite score—AI can weigh many factors to plan sites and schedules."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {isZh ? `综合评分 ${score}` : `Score ${score}`}
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <label className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-800">
          {isZh ? "晴朗度/光污染低" : "Clear sky / low light pollution"}
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={sky}
            onChange={(e) => setSky(parseFloat(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
          <p className="mt-1 text-xs text-slate-600">
            {isZh ? "越高越利于观测。" : "Higher helps observations."}
          </p>
        </label>
        <label className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-800">
          {isZh ? "天气稳定度" : "Weather stability"}
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={weather}
            onChange={(e) => setWeather(parseFloat(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
          <p className="mt-1 text-xs text-slate-600">
            {isZh ? "越稳定越能获得连续数据。" : "Stability means fewer observation gaps."}
          </p>
        </label>
        <label className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-800">
          {isZh ? "人造干扰强度" : "Man-made interference"}
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={interference}
            onChange={(e) => setInterference(parseFloat(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
          <p className="mt-1 text-xs text-slate-600">
            {isZh ? "越低越好，可通过 AI 检测/滤除。" : "Lower is better; AI can help detect/filter it."}
          </p>
        </label>
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh
          ? "AI 可同时考虑地理、天气、轨道位置、目标窗口等多因素，生成最优台址与观测时程。"
          : "AI can juggle geography, weather, orbits, target windows, and more to propose optimal sites and schedules."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解天文学发展与大数据挑战，以及 AI 介入的必要性",
      "认识 AI 在望远镜监测、选址规划、信息挖掘中的应用",
    ],
    introTitle: "导入",
    introEyebrow: "仰望星空",
    intro: "从甘石星经到 FAST、JWST，人类不断拓宽观测手段，也带来了“天文量级”的数据。AI 成为揭示宇宙奥秘的新钥匙。",
    introCardTitle: "关键问题",
    introCard: "望远镜越大、波段越多，数据越庞大，传统分析吃力；AI 可高效筛选、监测、挖掘。",
    historyTitle: "1. 天文学发展与挑战",
    historyEyebrow: "从裸眼到天眼",
    historyIntro:
      "古人凭肉眼刻星图；伽利略用望远镜开天窗；现代多波段巨型/太空望远镜进入大数据时代，HST 年产 10TB 数据，传统分析难以应对。",
    historySteps: [
      "回顾古代星图与伽利略望远镜的突破。",
      "了解多波段、巨型与太空望远镜的兴起。",
      "思考数据爆发为何需要 AI 帮忙。",
    ],
    historyCheckpoint: {
      prompt: "为何现代天文观测需要 AI 介入？",
      options: [
        { label: "数据量巨大，传统分析效率/准确度不足", correct: true, explanation: "HST/FAST 等产生海量数据，AI 提升处理效率与发现率。" },
        { label: "望远镜无法捕获任何数据", correct: false, explanation: "望远镜能观测，但需要 AI 解析。" },
        { label: "天文学不再需要观测", correct: false, explanation: "观测仍核心，AI 辅助解析与发现。" },
        { label: "AI 只是为了美化图片", correct: false, explanation: "核心在监测、检测、挖掘，而非单纯美化。" },
      ],
    },
    monitorTitle: "2. 监测望远镜状态",
    monitorIntro:
      "VAE 等网络可把观测映射到低维，偏移即提示设备故障或 RFI；卷积网络还能自动检测射频干扰，保障深空观测。",
    monitorSteps: [
      "理解异常检测：数据分布偏移 → 可能故障/RFI。",
      "调整阈值，平衡漏报与误报。",
      "联系实际：FAST 等射电台需持续滤除人造干扰。",
    ],
    monitorCheckpoint: {
      prompt: "使用神经网络监测射电望远镜的目的是什么？",
      options: [
        { label: "及时发现故障或射频干扰", correct: true, explanation: "嵌入/卷积网络帮助早期发现异常，避免观测受阻。" },
        { label: "让望远镜变小", correct: false, explanation: "体积不变，核心是监测数据异常。" },
        { label: "只为生成艺术图片", correct: false, explanation: "目标在可靠观测，而非艺术输出。" },
        { label: "因为人类无法看任何数据", correct: false, explanation: "人类能看，但 AI 加快且更稳定。"},
      ],
    },
    planTitle: "3. 选址与观测规划",
    planIntro:
      "AI 可综合地理、气象、光污染与观测窗口，评估台址并给出最佳观测时间/角度，就像一名智能助手。",
    planSteps: [
      "考虑晴朗度、干扰、天气等多因素。",
      "理解 AI 如何平衡约束生成观测方案。",
      "联系例子：北半球/南半球双台覆盖全天空。",
    ],
    planCheckpoint: {
      prompt: "AI 辅助选址/规划的优势是？",
      options: [
        { label: "可同时权衡多种复杂因素给出最优方案", correct: true, explanation: "AI 能综合天气、地理、目标窗口等自动优化。" },
        { label: "完全不需要考虑天气", correct: false, explanation: "天气仍是关键输入。" },
        { label: "只能处理一个因素", correct: false, explanation: "优势在多因素综合。" },
        { label: "让观测永远不需要设备", correct: false, explanation: "设备仍是基础，AI 辅助决策。" },
      ],
    },
    miningTitle: "4. 天文信息挖掘",
    miningEyebrow: "识别与发现",
    miningIntro:
      "深度网络可在海量星空图中自动定位/分类星体，提升发现效率；已助力发现超短周期行星等新天体。",
    miningSteps: [
      "体验网格检测定位天体的思路。",
      "感受阈值/NMS 对漏检/误检的影响。",
      "联系案例：AI 发现超短周期小行星。"
    ],
    miningCheckpoint: {
      prompt: "AI 在天文图像挖掘中的作用主要是？",
      options: [
        { label: "自动定位、分类并加速新体发现", correct: true, explanation: "深度模型批量标注天体并挖掘新现象。" },
        { label: "让望远镜不再需要成像", correct: false, explanation: "仍需成像，AI做解析。" },
        { label: "只负责删除数据", correct: false, explanation: "目标是挖掘，不是随意删除。" },
        { label: "阻止科学家看到结果", correct: false, explanation: "相反，帮助更快看到有价值结果。" },
      ],
    },
    summaryTitle: "5. 小结",
    summaryPoints: [
      "天文学进入大数据时代，AI 关键在监测、规划、挖掘。",
      "异常检测守护设备与数据质量；多因素规划提升观测效率。",
      "深度学习加速新天体发现，未来将助力理解黑洞、暗物质等奥秘。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand astronomy’s evolution, big-data challenge, and why AI is needed",
      "Recognize AI uses in telescope monitoring, site planning, and data mining",
    ],
    introTitle: "Overview",
    introEyebrow: "Eyes on the sky",
    intro: "From ancient star charts to FAST and JWST, better instruments bring “astronomical” data volumes. AI is a new key to decode them.",
    introCardTitle: "Key question",
    introCard: "Bigger, multi-band telescopes create massive data; classic analysis struggles. AI improves monitoring, filtering, and discovery.",
    historyTitle: "1. Astronomy’s growth and its challenge",
    historyEyebrow: "Naked eye → space telescopes",
    historyIntro:
      "Ancients carved star maps; Galileo’s telescope opened a window; modern multi-band giants and space scopes push us into a big-data era (HST ~10 TB/year), overwhelming manual analysis.",
    historySteps: [
      "Recall early star charts and Galileo’s telescope breakthrough.",
      "Note the rise of multi-band, giant, and space telescopes.",
      "Consider why data explosion calls for AI.",
    ],
    historyCheckpoint: {
      prompt: "Why does modern astronomy need AI?",
      options: [
        { label: "Data are huge; classic analysis is too slow/inaccurate", correct: true, explanation: "HST/FAST-scale data need AI to process and discover." },
        { label: "Telescopes can’t capture any data", correct: false, explanation: "They can—AI helps interpret it." },
        { label: "Astronomy no longer needs observation", correct: false, explanation: "Observation is core; AI aids interpretation." },
        { label: "AI is only for pretty pictures", correct: false, explanation: "Focus is monitoring, detection, mining—not just visuals." },
      ],
    },
    monitorTitle: "2. Monitoring telescope health",
    monitorIntro:
      "VAEs map observations to low dimensions—shifts hint faults or RFI; conv nets can spot radio interference to keep deep-space observation clean.",
    monitorSteps: [
      "See anomaly detection: distribution shift → possible fault/RFI.",
      "Adjust thresholds to balance misses vs false alarms.",
      "Relate to practice: FAST and other radio arrays fight human-made noise.",
    ],
    monitorCheckpoint: {
      prompt: "Why use neural nets to monitor radio telescopes?",
      options: [
        { label: "To flag faults or RFI early", correct: true, explanation: "Embeddings/CNNs surface anomalies before data are ruined." },
        { label: "To shrink the telescope", correct: false, explanation: "Size stays; monitoring improves reliability." },
        { label: "Only to make art", correct: false, explanation: "Goal is reliable observation." },
        { label: "Because humans can’t view data at all", correct: false, explanation: "Humans can, but AI is faster and steadier." },
      ],
    },
    planTitle: "3. Site selection & scheduling",
    planIntro:
      "AI weighs geography, weather, light pollution, target windows, etc., to score sites and propose optimal times/angles—like a smart assistant.",
    planSteps: [
      "Consider clear skies, interference, weather, and more.",
      "See how AI balances constraints to plan observations.",
      "Example: paired hemispheric observatories cover the full sky.",
    ],
    planCheckpoint: {
      prompt: "Advantage of AI-assisted site/schedule planning?",
      options: [
        { label: "It balances many factors to suggest optimal plans", correct: true, explanation: "AI optimizes across weather, geography, windows, interference." },
        { label: "Weather no longer matters", correct: false, explanation: "Weather remains a key input." },
        { label: "It handles only one factor", correct: false, explanation: "Its strength is multi-factor optimization." },
        { label: "It removes the need for instruments", correct: false, explanation: "Instruments are still essential." },
      ],
    },
    miningTitle: "4. Mining astronomical data",
    miningEyebrow: "Detect & discover",
    miningIntro:
      "Deep nets auto-locate/classify celestial objects in huge images, speeding discovery; they’ve helped find ultra-short-period planets.",
    miningSteps: [
      "Try grid-based detection on sky patches.",
      "See how thresholds/NMS affect misses/dupes.",
      "Connect to real cases: AI found ultra-short-period exoplanets."
    ],
    miningCheckpoint: {
      prompt: "Main role of AI in astronomical image mining?",
      options: [
        { label: "Automatically locate/classify and speed discoveries", correct: true, explanation: "Deep models tag objects and surface new phenomena faster." },
        { label: "Make imaging unnecessary", correct: false, explanation: "Images are still required; AI parses them." },
        { label: "Only deletes data", correct: false, explanation: "Goal is to extract value, not discard." },
        { label: "Hide results from scientists", correct: false, explanation: "Opposite—AI surfaces results sooner." },
      ],
    },
    summaryTitle: "5. Summary",
    summaryPoints: [
      "Astronomy’s big-data era makes AI vital for monitoring, planning, and mining.",
      "Anomaly detection protects instruments/data; multi-factor planning boosts efficiency.",
      "Deep learning accelerates new object discovery; future use will probe black holes, dark matter, and more.",
    ],
  },
};
