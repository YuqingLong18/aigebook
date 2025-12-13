import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { SliceGanTrainingToyDemo } from "../demos/SliceGanTrainingToyDemo";
import { SliceToVolumeToyDemo } from "../demos/SliceToVolumeToyDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson4_4({ lang }: LessonProps) {
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
    { id: "importance", label: isZh ? "1. 微观结构的重要性" : "1. Importance of Microscopic Structure" },
    { id: "reconstruction", label: isZh ? "2. 微观结构的 3D 重建" : "2. 3D Reconstruction" },
    { id: "slicegan", label: isZh ? "3. SliceGAN 重建" : "3. SliceGAN Reconstruction" },
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

        <SectionBlock id="importance" title={t.impTitle} eyebrow={t.impEyebrow}>
          <InfoCard title={t.impCardTitle}>
            {t.impParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {t.impExamples.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.impSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.impCheckpoint.prompt}
            options={t.impCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="reconstruction" title={t.recTitle} eyebrow={t.recEyebrow}>
          <InfoCard title={t.recCardTitle}>
            {t.recParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <SliceToVolumeToyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.recSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.recCheckpoint.prompt}
            options={t.recCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="slicegan" title={t.sgTitle} eyebrow={t.sgEyebrow}>
          <InfoCard title={t.sgGanTitle}>
            {t.sgGanParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.sgModelTitle}>
            {t.sgModelParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <SliceGanTrainingToyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.sgSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.sgCheckpoint.prompt}
            options={t.sgCheckpoint.options}
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
      "Understand the importance of microscopic structure of materials and its decisive influence on material properties.",
      "Grasp the challenges of analyzing 3D structure of materials, recognize the limitations of 2D slices, and understand the difficulty in directly obtaining complete 3D morphology.",
      "Learn the basic principles of SliceGAN and understand how GANs can use 2D slice data to infer complete 3D structure of materials.",
      "Understand SliceGAN’s training method: slice generated 3D volumes and randomly sample local regions as training signals even without real 3D data.",
      "Learn about the application prospects of AI in materials science and the potential value of SliceGAN in new material design, microstructure optimization, and material fatigue prediction.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "From 2D slices to 3D microstructure",
    introText:
      "Microscopic structure is crucial for material properties, but researchers often only observe 2D slices under microscopes. SliceGAN uses AI to reconstruct plausible 3D microstructure from 2D images, offering a new tool for materials science.",

    impTitle: "1. Importance of Microscopic Structure",
    impEyebrow: "Properties follow structure",
    impCardTitle: "Micron-scale organization matters",
    impParas: [
      "Material properties are determined not only by chemical composition but also by microscopic structure: arrangement and organization of structural units on micron or smaller scales, shaping physical, chemical, and mechanical properties.",
      "Example intuition: carbon atoms form different microstructures—planar layers yield soft graphite; mesh-like structure yields hard, transparent diamond.",
    ],
    impExamples: [
      "Filter membranes: different microstructures produce very different filtration effects; fibrous structures can adsorb particles and resist clogging (Figure 4-23).",
      "Gold nanoparticles: special microstructures lead to biocompatibility and optical properties (Figure 4-24).",
      "Metal fatigue: microscopic structural changes lead to cracks and failure risk; monitoring microstructure helps prevent accidents (Figure 4-25).",
    ],
    impSteps: [
      "State what “microscopic structure” means in this section.",
      "Give one example where microstructure changes the function dramatically.",
      "Explain why observing microstructure helps predict failure (fatigue).",
    ],
    impCheckpoint: {
      prompt: "Why can two materials with the same composition behave very differently?",
      options: [
        {
          label: "Because their microscopic structures (arrangements) can differ, changing properties.",
          correct: true,
          explanation: "The section emphasizes microstructure as a decisive factor beyond composition.",
        },
        {
          label: "Because microstructure never affects properties.",
          correct: false,
          explanation: "Microstructure is described as crucial for physical/mechanical properties.",
        },
      ],
    },

    recTitle: "2. 3D Reconstruction of Microscopic Structure",
    recEyebrow: "2D is incomplete",
    recCardTitle: "Why 2D slices are limiting",
    recParas: [
      "Under microscopes, we typically observe 2D slices, but microstructure is inherently 3D. A 2D slice cannot fully reflect the overall structure.",
      "Analogy: looking at a city map without building heights—you miss the full 3D layout. Reconstructing 3D from 2D helps analyze properties and design manufacturing processes for targeted performance.",
    ],
    recSteps: [
      "Pick a slice axis and location; note what you can and cannot know from one slice.",
      "Compare another slice location to see how 3D structure varies.",
      "Explain why we need models to infer 3D structure from 2D observations.",
    ],
    recCheckpoint: {
      prompt: "A key challenge in 3D microstructure analysis is that…",
      options: [
        {
          label: "We usually only observe 2D slices and lack direct access to full 3D morphology.",
          correct: true,
          explanation: "The text emphasizes the dimensional mismatch between observation (2D) and reality (3D).",
        },
        {
          label: "Microscopes can directly capture complete 3D structures effortlessly.",
          correct: false,
          explanation: "The section says directly obtaining complete 3D is technically challenging.",
        },
      ],
    },

    sgTitle: "3. 3D Reconstruction with SliceGAN",
    sgEyebrow: "GAN + slicing trick",
    sgGanTitle: "1) Review: GAN models",
    sgGanParas: [
      "In GANs (Figure 4-26), the generator (G) generates images and the discriminator (D) judges whether images are realistic. They train together: G improves realism, D improves discrimination, and eventually G produces images D cannot distinguish from real.",
    ],
    sgModelTitle: "2) SliceGAN model and learning process",
    sgModelParas: [
      "SliceGAN (Figure 4-27) uses a generator to generate 3D structures and a discriminator to judge realism. The key challenge is that real 3D data is often unavailable.",
      "Clever solution: slice the generated 3D volume into 2D images, and have the discriminator compare those slices with real 2D images—indirectly providing training signals for 3D generation.",
      "SliceGAN further uses random sampling: instead of evaluating whole images, the discriminator learns from randomly sampled local regions, capturing fine details and improving reconstruction accuracy.",
      "Learning steps (Figure 4-28): sample regions from real 2D images as positive samples; slice generated 3D and sample regions as negative samples; train D and G so generated slices increasingly resemble real images. Results (Figure 4-29) show generated slices closely match textures; if structures are anisotropic, scans in multiple directions are needed.",
    ],
    sgSteps: [
      "Explain the “dimensional mismatch” problem and SliceGAN’s slicing workaround.",
      "Describe what D sees (2D patches), even though G outputs 3D volumes.",
      "Explain why random local patches help capture fine textures.",
    ],
    sgCheckpoint: {
      prompt: "In SliceGAN, how can the discriminator be trained without real 3D samples?",
      options: [
        {
          label: "By comparing 2D slices of generated 3D volumes to real 2D microscope images.",
          correct: true,
          explanation: "SliceGAN obtains training signals by slicing generated 3D into 2D and comparing with real 2D slices.",
        },
        {
          label: "By directly comparing generated 3D to real 3D volumes that are always available.",
          correct: false,
          explanation: "The section states real 3D microstructure data is often unavailable.",
        },
      ],
    },

    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Microscopic structure largely determines material properties (beyond composition).",
      "In practice we mostly observe 2D slices, but the structure is inherently 3D, so 2D is insufficient.",
      "SliceGAN reconstructs 3D by training a 3D generator through 2D slice comparisons, solving the lack-of-3D-data challenge.",
      "Random local patch sampling helps the discriminator learn fine textures and improves reconstruction quality.",
      "Applying AI to scientific problems requires domain-specific design—there is no one-size-fits-all method.",
    ],
    summaryCheckpoint: {
      prompt: "Why does SliceGAN use random local patch sampling during training?",
      options: [
        {
          label: "To help the model capture fine microstructure details more effectively.",
          correct: true,
          explanation: "The text states random sampling lets the discriminator learn fine details and improves accuracy.",
        },
        {
          label: "To avoid comparing with real 2D images entirely.",
          correct: false,
          explanation: "SliceGAN still relies on comparing generated slices to real 2D images.",
        },
      ],
    },
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解材料微观结构的重要性以及它对材料性能的决定性影响。",
      "掌握材料 3D 微观结构分析的挑战，认识 2D 切片的局限，并理解直接获得完整 3D 形貌的技术困难。",
      "学习 SliceGAN 的基本原理，理解 GAN 如何利用 2D 切片数据推断材料的完整 3D 微观结构。",
      "理解 SliceGAN 的训练方法：把生成的 3D 结构切片并随机采样局部区域，使得在缺乏真实 3D 数据时仍能有效学习。",
      "了解 AI 在材料科学中的应用前景，认识 SliceGAN 在新材料设计、微结构优化与材料疲劳预测中的潜在价值。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "从 2D 切片到 3D 微结构",
    introText:
      "材料的微观结构对性能至关重要，但研究中往往只能通过显微镜观察 2D 切片而无法直接获取完整 3D 信息。SliceGAN 借助 AI 从 2D 图像推断 3D 微观结构，为材料科学研究提供新工具。",

    impTitle: "1. 微观结构的重要性",
    impEyebrow: "结构决定性能",
    impCardTitle: "微米尺度的组织方式",
    impParas: [
      "材料的性质不仅取决于化学成分，也取决于微观结构。微观结构是指微米或更小尺度上结构单元的排列与组织方式，决定材料的物理、化学与力学性质。",
      "直观例子：碳原子不同排列会形成不同微结构——平面层状形成柔软黑色的石墨；网状结构形成坚硬透明的金刚石。",
    ],
    impExamples: [
      "滤膜：即使材料相同，不同微结构也会导致截然不同的过滤效果；纤维结构可吸附颗粒并适合粗过滤（图 4-23）。",
      "金纳米颗粒：特殊微结构带来生物相容性与独特光学性质（图 4-24）。",
      "金属疲劳：微观结构变化会引发裂纹并增加失效风险；监测微观变化可用于预防事故（图 4-25）。",
    ],
    impSteps: [
      "用本节语言解释“微观结构”是什么。",
      "举一个“微观结构改变 → 功能/性能改变”的例子。",
      "说明为什么观察微观结构能帮助预测疲劳失效风险。",
    ],
    impCheckpoint: {
      prompt: "为什么化学成分相同的材料也可能表现完全不同？",
      options: [
        {
          label: "因为微观结构（排列组织）不同，会改变材料性能。",
          correct: true,
          explanation: "本节强调微观结构对性能具有决定性影响。",
        },
        {
          label: "因为微观结构从不影响性能。",
          correct: false,
          explanation: "微观结构被描述为决定物理/力学等性质的重要因素。",
        },
      ],
    },

    recTitle: "2. 微观结构的 3D 重建",
    recEyebrow: "2D 视角的限制",
    recCardTitle: "为什么 2D 切片不够",
    recParas: [
      "通过显微镜我们通常只能观察到材料的 2D 切片，但材料微观结构本质上是三维的，2D 切片无法完整反映整体结构。",
      "类比：只看城市平面地图而不知道楼高，就无法掌握城市的完整形态。对材料而言，从 2D 图像重建 3D 结构有助于分析性质，并设计新的工艺以获得特定性能。",
    ],
    recSteps: [
      "选择切片方向与位置，说明单张切片能告诉你什么/不能告诉你什么。",
      "对比另一个位置的切片，观察 3D 结构的变化。",
      "总结为何需要模型从 2D 观测推断 3D 形貌。",
    ],
    recCheckpoint: {
      prompt: "材料 3D 微结构分析的核心挑战之一是…",
      options: [
        {
          label: "我们通常只能观察 2D 切片，难以直接获得完整 3D 形貌。",
          correct: true,
          explanation: "文本强调观测维度（2D）与真实结构（3D）的不匹配。",
        },
        {
          label: "显微镜可以轻松直接给出完整 3D 结构。",
          correct: false,
          explanation: "本节指出直接获取完整 3D 信息存在显著技术困难。",
        },
      ],
    },

    sgTitle: "3. SliceGAN 重建",
    sgEyebrow: "GAN + 切片技巧",
    sgGanTitle: "1) 回顾：GAN 模型",
    sgGanParas: [
      "在 GAN（图 4-26）中，生成器 G 负责生成图像，判别器 D 判断图像是否真实。两者对抗训练：G 逐步生成更逼真的样本，D 逐步提升分辨能力，最终 G 生成的图像足以“骗过” D。",
    ],
    sgModelTitle: "2) SliceGAN 模型与学习过程",
    sgModelParas: [
      "SliceGAN（图 4-27）让生成器生成材料的 3D 结构，判别器判断生成结构是否合理。关键难点是：现实中往往缺乏真实 3D 数据。",
      "巧妙做法：把生成的 3D 结构切成 2D 图像，让判别器把这些切片与真实 2D 显微图像对比，从而间接获得训练信号。",
      "为了更好学习细节，SliceGAN 在训练中加入随机采样：判别器不看整张图，而是随机抽取局部区域学习，帮助捕捉微结构纹理并提升重建精度。",
      "学习步骤（图 4-28）：从真实 2D 图像随机采样正样本；对生成的 3D 结构切片并采样负样本；训练 D 与 G，使生成切片越来越像真实图像。实验结果（图 4-29）显示生成切片与真实纹理高度相似；若结构各向异性强，需要多方向扫描。",
    ],
    sgSteps: [
      "解释“维度不匹配”问题与 SliceGAN 的切片解决方案。",
      "说明判别器看到的是 2D patch，但生成器输出的是 3D 体。",
      "说明为什么随机局部 patch 有助于学习微结构细节。",
    ],
    sgCheckpoint: {
      prompt: "SliceGAN 在没有真实 3D 样本时，判别器如何获得训练信号？",
      options: [
        {
          label: "把生成的 3D 体切成 2D，与真实 2D 切片对比。",
          correct: true,
          explanation: "SliceGAN 通过比较“生成切片”与“真实 2D 图像”来间接训练 3D 生成。",
        },
        {
          label: "直接与大量真实 3D 体数据对比。",
          correct: false,
          explanation: "本节指出真实 3D 结构数据通常缺乏，正因此需要切片技巧。",
        },
      ],
    },

    summaryTitle: "本节小结",
    summaryEyebrow: "关键要点",
    summaryPoints: [
      "材料微观结构在很大程度上决定材料性能（不仅是化学成分）。",
      "研究中往往只能观察 2D 切片，但结构本质是 3D，2D 信息不足。",
      "SliceGAN 通过“生成 3D → 切成 2D → 与真实 2D 对比”的方式训练，在缺乏真实 3D 数据时仍能重建 3D 微结构。",
      "随机局部 patch 采样让判别器更好学习纹理细节，提高重建质量。",
      "AI 解决具体科学问题需要结合领域知识进行针对性设计，没有通用万能解法。",
    ],
    summaryCheckpoint: {
      prompt: "为什么 SliceGAN 训练时要随机采样局部 patch？",
      options: [
        {
          label: "帮助模型更有效捕捉微结构细节纹理，提高重建精度。",
          correct: true,
          explanation: "文本强调随机采样能学习细节并提升重建准确性。",
        },
        {
          label: "为了完全避免与真实 2D 图像对比。",
          correct: false,
          explanation: "SliceGAN 仍依赖与真实 2D 切片的对比来获得训练信号。",
        },
      ],
    },
  },
} as const;

