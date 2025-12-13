import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { StyleTransferDemo } from "../demos/StyleTransferDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson3_2({ lang }: LessonProps) {
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
    { id: "content-style", label: isZh ? "1. 内容与风格" : "1. Content vs. Style" },
    { id: "cnn", label: isZh ? "2. 卷积网络中的内容与风格" : "2. Content & Style in CNNs" },
    { id: "transfer", label: isZh ? "3. 风格迁移实现" : "3. Style Transfer" },
    { id: "picasso", label: isZh ? "4. 皮卡索隐藏画作" : "4. Picasso Restoration" },
    { id: "art", label: isZh ? "5. AI 与艺术" : "5. AI & Art" },
    { id: "summary", label: isZh ? "本节小结" : "Summary" },
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

        <SectionBlock id="content-style" title={t.csTitle} eyebrow={t.csEyebrow}>
          <InfoCard title={t.csCardTitle}>
            {t.csParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.csSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.csCheckpoint.prompt}
            options={t.csCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="cnn" title={t.cnnTitle} eyebrow={t.cnnEyebrow}>
          <InfoCard title={t.cnnCardTitle}>
            {t.cnnParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.cnnSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.cnnCheckpoint.prompt}
            options={t.cnnCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="transfer" title={t.transferTitle} eyebrow={t.transferEyebrow}>
          <InfoCard title={t.transferCardTitle}>
            {t.transferParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <StyleTransferDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.transferSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.transferCheckpoint.prompt}
            options={t.transferCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="picasso" title={t.picassoTitle} eyebrow={t.picassoEyebrow}>
          <InfoCard title={t.picassoCardTitle}>
            {t.picassoParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.picassoCheckpoint.prompt}
            options={t.picassoCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="art" title={t.artTitle} eyebrow={t.artEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.artPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Differentiate image content vs. style and how CNNs represent them.",
      "Explain neuron activations vs. activation correlations (Gram matrix) for content/style.",
      "Describe iterative style transfer: optimize an image to match both content and style.",
      "Understand the Picasso hidden painting restoration via style transfer.",
      "Debate AI art value and how AI tools shift artistic creation.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "When AI paints",
    introText:
      "CNNs can disentangle what is drawn (content) from how it is drawn (style). Style transfer recombines them, enabling AI “painting masters” and new restoration tools.",
    csTitle: "1. Content and Style",
    csEyebrow: "Two kinds of information",
    csCardTitle: "Objects vs. presentation",
    csParas: [
      "Content: objects and layout (dog, chair, skyline).",
      "Style: colors, textures, strokes, shapes—how content appears.",
      "Images with same content can differ in style; similar style can span different content.",
    ],
    csSteps: [
      "Name examples of same content, different style.",
      "Name examples of same style, different content.",
      "Tie style to artistic traits (color palette, texture).",
    ],
    csCheckpoint: {
      prompt: "Which describes “style”?",
      options: [
        {
          label: "Brush strokes and color palette.",
          correct: true,
          explanation: "Style is presentation, not object identity.",
        },
        {
          label: "The fact that the image shows a cat.",
          correct: false,
          explanation: "That is content.",
        },
      ],
    },
    cnnTitle: "2. Content & Style in CNNs",
    cnnEyebrow: "Where they live",
    cnnCardTitle: "Activations vs. correlations",
    cnnParas: [
      "Deeper-layer activations can reconstruct content but lose stylistic detail.",
      "Style is captured by correlations between feature maps (Gram matrix); deeper layers encode broader style patterns.",
      "Receptive fields grow with depth, so style matrices span larger spatial scales.",
    ],
    cnnSteps: [
      "Explain why deeper activations keep object layout.",
      "Define the style (Gram) matrix as feature-map correlations.",
      "Connect receptive field size to style scale.",
    ],
    cnnCheckpoint: {
      prompt: "The Gram (style) matrix measures…",
      options: [
        {
          label: "Correlations between feature maps in a layer.",
          correct: true,
          explanation: "Style emerges from co-activation patterns.",
        },
        {
          label: "Only the brightest pixel in the image.",
          correct: false,
          explanation: "Brightness alone cannot encode style.",
        },
      ],
    },
    transferTitle: "3. Style Transfer Implementation",
    transferEyebrow: "Content + style loss",
    transferCardTitle: "Optimize a noise image",
    transferParas: [
      "Pick a content image A and style image B; start from noise X.",
      "Use gradient descent so X matches A’s activations (content loss) and B’s Gram matrices (style loss).",
      "Result: content of A rendered in style of B; multiple styles can be mixed by weighting Gram losses.",
    ],
    transferSteps: [
      "State the two losses (content, style) and their targets.",
      "Describe why random init + gradient descent is used.",
      "Note how mixing styles adjusts weights on multiple style images.",
    ],
    transferCheckpoint: {
      prompt: "To emphasize style more, you would…",
      options: [
        {
          label: "Increase the style-loss weight in optimization.",
          correct: true,
          explanation: "Higher style weight drives X to match the style image more strongly.",
        },
        {
          label: "Ignore the style loss entirely.",
          correct: false,
          explanation: "Without style loss you only reproduce content.",
        },
      ],
    },
    picassoTitle: "4. Restoring Picasso’s Hidden Painting",
    picassoEyebrow: "Case study",
    picassoCardTitle: "Content via X-ray, style via reference",
    picassoParas: [
      "X-ray revealed a hidden landscape beneath The Crouching Beggar—content only.",
      "Style transfer used Rusiñol’s painting as style reference to recover era-consistent colors and textures.",
      "Outcome: content preserved, style reconstructed to match period aesthetics.",
    ],
    picassoCheckpoint: {
      prompt: "Why was a period-matched painting used as the style reference?",
      options: [
        {
          label: "To restore plausible colors/brushwork consistent with the hidden piece.",
          correct: true,
          explanation: "Matching era/style preserves authenticity.",
        },
        {
          label: "Because any random style would improve accuracy.",
          correct: false,
          explanation: "Random styles could distort historical fidelity.",
        },
      ],
    },
    artTitle: "5. AI and the Meaning of Art",
    artEyebrow: "Reflection",
    artPoints: [
      "Art = human-only? AI lacks emotion; critics question artistic value.",
      "Pro-AI view: outputs reflect human-trained models; humans curate results, aligning with emotion.",
      "In practice, artists co-create with AI to boost efficiency and explore style.",
    ],
    summaryTitle: "Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Content vs. style: objects vs. presentation.",
      "CNN activations store content; Gram matrices store style.",
      "Style transfer optimizes an image to satisfy both losses; styles can be mixed.",
      "Case study: Picasso restoration demonstrates cultural value.",
      "AI painting reshapes, but does not replace, human creativity.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "区分图像的内容与风格，并理解 CNN 中的对应表示。",
      "理解神经元激活与激活相关矩阵（Gram 矩阵）分别承载内容与风格。",
      "掌握风格迁移优化流程：同时匹配内容损失与风格损失。",
      "理解皮卡索隐藏画作的风格迁移修复思路。",
      "思考 AI 作画的艺术价值与人机共创趋势。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "当 AI 也会“作画”",
    introText:
      "卷积网络能拆解“画了什么”和“怎么画”。风格迁移把两者重组，既能创作，也能修复艺术品，引发对“艺术”定义的讨论。",
    csTitle: "1. 内容与风格",
    csEyebrow: "两类信息",
    csCardTitle: "对象 vs. 呈现方式",
    csParas: ["内容是物体与布局；风格是颜色、纹理、笔触等呈现方式。", "同内容可有不同风格；同风格可对应不同内容。"],
    csSteps: ["举例相同内容不同风格。", "举例相同风格不同内容。", "将风格与色彩/纹理等特征对应。"],
    csCheckpoint: {
      prompt: "下列哪项属于“风格”信息？",
      options: [
        { label: "笔触与配色。", correct: true, explanation: "风格描述呈现方式。" },
        { label: "画的是一只猫。", correct: false, explanation: "这是内容。" },
      ],
    },
    cnnTitle: "2. 卷积网络中的内容与风格",
    cnnEyebrow: "它们存在哪里",
    cnnCardTitle: "激活 vs. 相关",
    cnnParas: [
      "深层激活可重建物体布局，风格细节被弱化。",
      "风格体现在特征图之间的相关性（Gram 矩阵），深层相关覆盖更大空间尺度。",
      "感受野越深越大，风格矩阵描述的纹理跨度越广。",
    ],
    cnnSteps: ["解释深层激活为何保留内容。", "定义风格矩阵：特征图相关。", "联系感受野与风格尺度。"],
    cnnCheckpoint: {
      prompt: "Gram（风格）矩阵衡量的是：",
      options: [
        { label: "特征图之间的相关性。", correct: true, explanation: "风格来自共激活模式。" },
        { label: "图像最亮的一个像素。", correct: false, explanation: "亮度不能代表风格。" },
      ],
    },
    transferTitle: "3. 风格迁移实现",
    transferEyebrow: "内容损失 + 风格损失",
    transferCardTitle: "优化一幅随机图",
    transferParas: [
      "选定内容图 A、风格图 B，从噪声图 X 开始。",
      "用梯度下降让 X 的特征接近 A（内容损失），Gram 矩阵接近 B（风格损失）。",
      "可用多风格加权混合，不同权重产生多样效果。",
    ],
    transferSteps: ["写出两类损失。", "说明为何从噪声开始优化。", "描述多风格加权的作用。"],
    transferCheckpoint: {
      prompt: "想让风格更强，应当：",
      options: [
        { label: "提高风格损失权重。", correct: true, explanation: "更大权重让 X 更贴近风格图。" },
        { label: "直接去掉风格损失。", correct: false, explanation: "没有风格损失就只剩内容。", },
      ],
    },
    picassoTitle: "4. 皮卡索隐藏画作",
    picassoEyebrow: "案例",
    picassoCardTitle: "内容来自 X 光，风格来自参照",
    picassoParas: [
      "X 光揭示了《赤贫的跪者》下的风景，只含内容。",
      "以同期主题的鲁西尼奥尔作品为风格参照，恢复色彩与笔触。",
      "结果：内容保留，风格回到时代风貌。",
    ],
    picassoCheckpoint: {
      prompt: "为何要选同年代的画作作为风格参照？",
      options: [
        { label: "保证色彩与笔触符合原作时代。", correct: true, explanation: "风格匹配才能保持真实性。" },
        { label: "随机风格一定更好。", correct: false, explanation: "随机风格会破坏历史一致性。" },
      ],
    },
    artTitle: "5. AI 与艺术",
    artEyebrow: "思考",
    artPoints: [
      "反方：AI 无情感，作品缺乏艺术性。",
      "正方：模型学习了人类风格，输出经人类筛选，与情感对齐。",
      "现实：AI 已成艺术辅助工具，提高效率、扩展风格探索。",
    ],
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "内容 vs. 风格：物体 vs. 呈现方式。",
      "CNN 激活存内容，特征相关存风格。",
      "风格迁移用内容/风格损失同时优化；可混合多风格。",
      "皮卡索案例展示文化修复价值。",
      "AI 作画促成人机共创，重新思考“艺术”。",
    ],
  },
};
