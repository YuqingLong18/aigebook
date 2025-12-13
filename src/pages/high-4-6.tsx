import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { GalaxyYoloDemo } from "../demos/GalaxyYoloDemo";
import { RFIDetectionDemo } from "../demos/RFIDetectionDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson4_6({ lang }: LessonProps) {
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
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "开篇理解" : "Opening Idea" },
    { id: "observe", label: isZh ? "1. 仰望星空" : "1. Observing the Vast Sky" },
    { id: "data", label: isZh ? "2. 天文数据爆炸" : "2. Data Explosion" },
    { id: "rfi", label: isZh ? "3. 射频干扰检测" : "3. Detecting Radio Frequency Interference" },
    { id: "yolo", label: isZh ? "4. 星系定位与分类" : "4. Galaxy Localization & Classification" },
    { id: "summary", label: isZh ? "本节小结" : "Section Summary" },
  ];

  return (
    <div className="flex gap-6">
      <LessonToc lang={lang} items={toc} />

      <div className="flex-1 space-y-6">
        <SectionBlock id="learning-objectives" title={t.learningObjectivesTitle}>
          <ul className="grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
            {t.learningObjectives.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="intro" title={t.introTitle} eyebrow={t.introEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.introText}</p>
        </SectionBlock>

        <SectionBlock id="observe" title={t.observeTitle} eyebrow={t.observeEyebrow}>
          <InfoCard title={t.historyTitle}>
            {t.historyParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.observeSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.observeCheckpoint.prompt}
            options={t.observeCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="data" title={t.dataTitle} eyebrow={t.dataEyebrow}>
          <InfoCard title={t.dataCardTitle}>
            {t.dataParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.dataSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.dataCheckpoint.prompt}
            options={t.dataCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="rfi" title={t.rfiTitle} eyebrow={t.rfiEyebrow}>
          <InfoCard title={t.rfiCardTitle}>
            {t.rfiParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <RFIDetectionDemo lang={lang} />
          <InfoCard title={t.rfiModelTitle}>
            {t.rfiModelParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.rfiSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.rfiCheckpoint.prompt}
            options={t.rfiCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="yolo" title={t.yoloTitle} eyebrow={t.yoloEyebrow}>
          <InfoCard title={t.yoloCardTitle}>
            {t.yoloParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
              {t.yoloStepsList.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ol>
          </InfoCard>
          <InfoCard title={t.yoloUseTitle}>
            {t.yoloUseParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GalaxyYoloDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.yoloSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.yoloCheckpoint.prompt}
            options={t.yoloCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.summaryCheckpoint.prompt}
            options={t.summaryCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand how astronomical observation evolved from naked-eye viewing to modern optical, radio, infrared, and space telescopes.",
      "Recognize the explosive growth of astronomical data and why it exceeds human and traditional computing capacity.",
      "Learn how AI detects radio frequency interference and how fully convolutional networks label RFI in telescope data.",
      "Understand galaxy localization and classification with YOLO-style object detection and its role in automatic galaxy identification.",
      "Explore how AI will keep boosting observation capabilities and uncovering unknown phenomena in the universe.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "AI as an astronomer’s assistant",
    introText:
      "Modern telescopes collect immense multi-band data. Deep learning helps astronomers sift real cosmic signals from noise, detect interference, and automatically localize galaxies—turning data deluge into discovery.",

    observeTitle: "1. Observing the Vast Starry Sky",
    observeEyebrow: "From naked eye to space telescopes",
    historyTitle: "Milestones in seeing farther",
    historyParas: [
      "Early observers used the naked eye to record celestial positions. Telescopes—first refracting (Galileo) then reflecting (Newton, 1668)—greatly widened our view. Today segmented-mirror giants like the 10 m Keck I/II push optical limits.",
      "Observation now spans radio to gamma rays. China’s 500 m FAST (“China Sky Eye”) covers 50–3000 MHz for pulsars, gravitational waves, and interstellar molecules; ALMA’s 66 antennas combine for high-resolution millimeter/submillimeter imaging.",
      "Space telescopes avoid atmospheric turbulence. Hubble (1990) revolutionized deep, clear imaging; James Webb (2021 launch) delivers far deeper infrared sensitivity and released its first stunning full-color image in July 2022.",
    ],
    observeSteps: [
      "Trace the shift: naked eye → refractor → reflector → segmented giants.",
      "Note why observing multiple bands (radio/IR/UV/X-ray) matters for different targets.",
      "Explain why launching telescopes to space improves clarity (no atmosphere).",
    ],
    observeCheckpoint: {
      prompt: "Why launch telescopes like Hubble and James Webb into space?",
      options: [
        {
          label: "To avoid atmospheric turbulence/light pollution and capture clearer, deeper data.",
          correct: true,
          explanation: "Space telescopes bypass the atmosphere, gaining stability and sensitivity.",
        },
        {
          label: "Because ground telescopes cannot have large apertures.",
          correct: false,
          explanation: "Ground telescopes can be huge (e.g., FAST, Keck); space solves distortion, not size.",
        },
      ],
    },

    dataTitle: "2. The “Explosion” of Astronomical Data",
    dataEyebrow: "Big data astronomy",
    dataCardTitle: "Data scale outpaces eyes and old methods",
    dataParas: [
      "FAST alone can collect ~150 TB of data per day—tens of thousands of HD movies’ worth. Hubble images contain countless faint galaxies buried in starlight.",
      "Humans and traditional pipelines cannot manually sift this flood. Deep learning learns patterns from massive datasets, now indispensable for spectrum analysis, nova detection, and galaxy classification.",
    ],
    dataSteps: [
      "Estimate why 150 TB/day overwhelms manual inspection.",
      "Connect data growth to the need for automated pattern learning.",
      "List AI-heavy tasks: spectrum analysis, nova detection, galaxy classification.",
    ],
    dataCheckpoint: {
      prompt: "What makes AI attractive for modern astronomy?",
      options: [
        {
          label: "It learns patterns from massive data volumes that exceed human/manual handling.",
          correct: true,
          explanation: "AI scales with data; humans cannot inspect tens of terabytes daily.",
        },
        {
          label: "Astronomical data volumes are tiny so manual inspection is easy.",
          correct: false,
          explanation: "The section stresses explosive data growth that is impossible to inspect by hand.",
        },
      ],
    },

    rfiTitle: "3. Detecting Radio Frequency Interference",
    rfiEyebrow: "Filtering human-made noise",
    rfiCardTitle: "Interference threatens faint cosmic signals",
    rfiParas: [
      "Human communications and satellites emit radio waves that overlap telescope bands, corrupting observations. A passing satellite can imprint strong streaks that drown out weak sources.",
      "A 2019 MNRAS study used a fully convolutional network to flag RFI in real time. Yellow marks correct detections, white false alarms, red misses—showing pixel-level labeling power.",
    ],
    rfiModelTitle: "How the fully convolutional network works",
    rfiModelParas: [
      "Input data become amplitude/phase spectra processed by encoder layers (left to right) that expand the receptive field and extract high-level features.",
      "Decoder layers (right to left) fuse features from matching encoder layers, preserving detail while reconstructing pixel-level masks—helping keep both local detail and global context.",
    ],
    rfiSteps: [
      "Describe why RFI overlaps telescope bands and why it is hard to remove manually.",
      "Relate the yellow/white/red regions to TP/FP/FN in segmentation outputs.",
      "Connect encoder–decoder design to the need for detail + global context.",
    ],
    rfiCheckpoint: {
      prompt: "In the CNN RFI detector, why pass encoder features to decoder layers?",
      options: [
        {
          label: "To retain local detail while reconstructing pixel-level masks.",
          correct: true,
          explanation: "Skip connections fuse detail with global features for accurate labeling.",
        },
        {
          label: "Only to increase parameter count without affecting outputs.",
          correct: false,
          explanation: "The design preserves detail and context; it is not just parameter inflation.",
        },
      ],
    },

    yoloTitle: "4. Galaxy Localization and Classification",
    yoloEyebrow: "YOLO in space",
    yoloCardTitle: "What YOLO does",
    yoloParas: [
      "YOLO (“You Only Look Once”) divides the image into grid cells, predicting bounding boxes and classes in a single pass rather than scanning object by object.",
    ],
    yoloStepsList: [
      "Divide the image into grid cells that each check their area.",
      "Predict bounding-box centers/sizes to outline objects.",
      "Predict the object category for each grid.",
      "Use the most reliable boxes (e.g., via NMS) to avoid duplicates.",
    ],
    yoloUseTitle: "Application to galaxies",
    yoloUseParas: [
      "A 2018 Astronomy and Computing paper showed YOLO can rapidly find galaxies in Hubble images and label types such as spiral, elliptical, or irregular.",
    ],
    yoloSteps: [
      "Point out where YOLO’s grid concept appears on the sky patch.",
      "Adjust NMS/threshold to see duplicate boxes removed or missed.",
      "Link “one pass” detection to speed in dense astronomical scenes.",
    ],
    yoloCheckpoint: {
      prompt: "What makes YOLO fast for galaxy detection?",
      options: [
        {
          label: "It predicts all boxes and classes in one pass over the whole image.",
          correct: true,
          explanation: "YOLO avoids sliding window scans, enabling quick multi-object detection.",
        },
        {
          label: "It processes one object at a time with many separate passes.",
          correct: false,
          explanation: "Traditional step-by-step scans are slower; YOLO is single-pass.",
        },
      ],
    },

    summaryTitle: "Section Summary",
    summaryEyebrow: "From telescopes to AI pipelines",
    summaryPoints: [
      "Astronomical observation evolved from naked-eye to multi-band giants and space telescopes like Hubble and JWST.",
      "Data from instruments like FAST reach hundreds of terabytes per day, demanding automated analysis.",
      "Fully convolutional networks can segment radio frequency interference in real time, keeping cosmic signals clean.",
      "YOLO-style detectors localize and classify galaxies efficiently, accelerating sky surveys.",
      "AI’s role will keep expanding, sharpening observation and revealing new cosmic phenomena.",
    ],
    summaryCheckpoint: {
      prompt: "Why is AI becoming a “powerful assistant” for astronomers?",
      options: [
        {
          label: "It scales to the huge data volumes and can separate signals, interference, and objects automatically.",
          correct: true,
          explanation: "Deep models handle massive data, denoise, and detect galaxies faster than manual work.",
        },
        {
          label: "Astronomy data is small enough that AI is unnecessary.",
          correct: false,
          explanation: "The section highlights explosive data growth that humans cannot process alone.",
        },
      ],
    },
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解天文观测从肉眼到现代光学、射电、红外及空间望远镜的演进。",
      "认识天文数据的爆炸式增长及其对人类与传统计算方法的挑战。",
      "了解人工智能检测射频干扰的思路，掌握全卷积网络在射频干扰标注中的作用。",
      "理解 YOLO 在星系定位与分类中的作用，掌握其“一次前向、多目标检测”的核心机制。",
      "思考人工智能如何进一步提升观测精度、探索未知宇宙现象。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "AI 成为天文学助手",
    introText:
      "先进望远镜采集的多波段数据极其庞大。深度学习帮助天文学家从海量数据中筛出真实信号、检测干扰、自动定位星系，把“数据洪流”转化为发现。",

    observeTitle: "1. 仰望星空",
    observeEyebrow: "从肉眼到太空望远镜",
    historyTitle: "拓展视野的里程碑",
    historyParas: [
      "早期只能肉眼观测并记录天体位置；望远镜诞生后视野大幅扩展。最初是折射望远镜（伽利略），1668 年牛顿造出第一台实用反射望远镜，如今 10 米级分段镜（Keck I/II）不断突破光学极限。",
      "观测范围从可见光延展到射电/毫米/红外/紫外/X 射线/伽马射线。中国 500 米 FAST（“中国天眼”）覆盖 50–3000 MHz，探索脉冲星、引力波、星际分子；ALMA 66 口径阵列协同提升分辨率。",
      "空间望远镜规避大气扰动。哈勃（1990）带来深空高清影像；韦布（2021 发射）凭借更强红外灵敏度看向更远、更暗的宇宙，2022 年发布首张全彩图震撼世界。",
    ],
    observeSteps: [
      "梳理“肉眼 → 折射 → 反射 → 分段镜”的演进。",
      "说明为何要覆盖射电/红外/紫外/X 射线等多波段。",
      "解释把望远镜送上太空能带来怎样的清晰度提升。",
    ],
    observeCheckpoint: {
      prompt: "把望远镜送入太空的主要原因是？",
      options: [
        {
          label: "避免大气扰动和光污染，获取更清晰、更深的观测数据。",
          correct: true,
          explanation: "太空环境稳定、无大气扰动，成像更清晰。",
        },
        {
          label: "因为地面无法建造大口径望远镜。",
          correct: false,
          explanation: "地面可建造巨型口径（如 FAST、Keck），太空主要为规避大气影响。",
        },
      ],
    },

    dataTitle: "2. 天文数据爆炸",
    dataEyebrow: "大数据天文学",
    dataCardTitle: "规模远超人工处理",
    dataParas: [
      "FAST 一天可采集约 150 TB 数据，相当于数万部高清电影；哈勃影像中包含大量埋在恒星背景中的微弱星系。",
      "人工与传统流程难以应对。深度学习能从海量数据中学习模式，已成为光谱分析、新星检测、星系分类等任务的必备工具。",
    ],
    dataSteps: [
      "估算 150 TB/天为何无法人工逐一查看。",
      "把数据增长与“需要自动学习模式”联系起来。",
      "列举 AI 重度参与的天文任务：光谱分析、新星检测、星系分类。",
    ],
    dataCheckpoint: {
      prompt: "为什么天文学越来越依赖 AI？",
      options: [
        {
          label: "因为数据量巨大，AI 能从中学习模式，自动筛选信号与目标。",
          correct: true,
          explanation: "AI 能扩展处理能力，人工无法查看几十 TB 数据。",
        },
        {
          label: "因为天文数据很少，人工足够。",
          correct: false,
          explanation: "文本强调数据爆炸，人工难以应对。",
        },
      ],
    },

    rfiTitle: "3. 检测射频干扰",
    rfiEyebrow: "在人为噪声中找信号",
    rfiCardTitle: "干扰与深空信号重叠",
    rfiParas: [
      "地面通信、卫星等发出的电磁波与射电观测频段重叠，会在数据里留下强烈条纹/斑块，掩盖微弱天体信号。",
      "2019 年《皇家天文学会月刊》提出用全卷积网络实时标注 RFI：黄色为正确检测，白色为误检，红色为漏检，显示像素级分割能力。",
    ],
    rfiModelTitle: "全卷积网络的思路",
    rfiModelParas: [
      "输入转为幅度/相位谱，编码器从左到右扩大感受野，提取高级特征。",
      "解码器从右到左重建输出，并接收对应编码层的特征，兼顾局部细节与全局信息，得到像素级标注。",
    ],
    rfiSteps: [
      "说明 RFI 为什么与观测频段重叠、人工难以剔除。",
      "把黄/白/红区域与 TP/FP/FN 对应起来。",
      "联系编码-解码结构与“既要细节又要全局”的需求。",
    ],
    rfiCheckpoint: {
      prompt: "在 RFI 检测网络中，解码层接收编码层特征的目的是什么？",
      options: [
        {
          label: "保留局部细节并结合全局特征，实现像素级标注。",
          correct: true,
          explanation: "跳接帮助融合细节与上下文，输出精确掩码。",
        },
        {
          label: "只是为了增加参数量，与输出无关。",
          correct: false,
          explanation: "跳接的核心是保细节、保上下文，而非堆参数。",
        },
      ],
    },

    yoloTitle: "4. 星系定位与分类",
    yoloEyebrow: "YOLO 进星空",
    yoloCardTitle: "YOLO 做什么",
    yoloParas: ["YOLO（You Only Look Once）把整图分网格，一次前向同时预测边框与类别，而不是逐目标扫描。"],
    yoloStepsList: ["把图像划分为网格单元，各自检查区域内的目标。", "预测边框中心与尺寸勾勒目标。", "预测对象类别。", "用最可靠的框（如 NMS）避免重复。"],
    yoloUseTitle: "在天文中的应用",
    yoloUseParas: ["2018 年《天文与计算》论文展示：YOLO 能在哈勃影像中快速找到多个星系，并标注螺旋、椭圆或不规则等类型。"],
    yoloSteps: [
      "指出天区图上网格的含义，与 YOLO 输出对应。",
      "调节 NMS/阈值，观察重复框被抑制或目标被漏检。",
      "联系“一次前向”与在密集星空中加速检测的优势。",
    ],
    yoloCheckpoint: {
      prompt: "YOLO 在星系检测中高效的关键是？",
      options: [
        {
          label: "一次前向就同时输出所有框与类别。",
          correct: true,
          explanation: "YOLO 不做滑窗逐一扫描，速度更快。",
        },
        {
          label: "必须逐个目标分多次扫描。",
          correct: false,
          explanation: "逐目标扫描正是 YOLO 要避免的慢路径。",
        },
      ],
    },

    summaryTitle: "本节小结",
    summaryEyebrow: "从望远镜到 AI 流水线",
    summaryPoints: [
      "天文观测从肉眼发展到多波段巨型望远镜与太空望远镜（哈勃、韦布）。",
      "FAST 等设备每天可产生百 TB 级数据，必须依赖自动分析。",
      "全卷积网络能实时分割射频干扰，保持信号纯净。",
      "YOLO 式检测高效定位并分类星系，加速天区巡天。",
      "AI 将继续提升观测精度，帮助探索未知宇宙。",
    ],
    summaryCheckpoint: {
      prompt: "AI 成为“天文学家的助手”的根本原因是？",
      options: [
        {
          label: "能处理巨量数据，自动区分信号、干扰和目标。",
          correct: true,
          explanation: "深度模型扩展处理能力，远超人工速度与精度。",
        },
        {
          label: "因为天文数据很少，AI 只是锦上添花。",
          correct: false,
          explanation: "文本强调数据爆炸，人工无法独立完成。",
        },
      ],
    },
  },
};
