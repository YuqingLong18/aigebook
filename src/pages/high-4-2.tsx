import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { BinauralCuesDemo } from "../demos/BinauralCuesDemo";
import { BionicEarCnnToyDemo } from "../demos/BionicEarCnnToyDemo";
import { DopplerShiftDemo } from "../demos/DopplerShiftDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson4_2({ lang }: LessonProps) {
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
    { id: "daily-life", label: isZh ? "1. 日常生活中的声源定位" : "1. Sound Localization in Daily Life" },
    { id: "bat", label: isZh ? "2. 蝙蝠的声源定位" : "2. Bat Sound Localization" },
    { id: "doppler", label: isZh ? "3. 多普勒效应" : "3. Doppler Effect" },
    { id: "bionic-ears", label: isZh ? "4. 仿生耳" : "4. Bionic Ears" },
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

        <SectionBlock id="daily-life" title={t.dailyTitle} eyebrow={t.dailyEyebrow}>
          <InfoCard title={t.dailyCardTitle}>
            {t.dailyParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <BinauralCuesDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.dailySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.dailyCheckpoint.prompt}
            options={t.dailyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="bat" title={t.batTitle} eyebrow={t.batEyebrow}>
          <InfoCard title={t.batCardTitle}>
            {t.batParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.batSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.batCheckpoint.prompt}
            options={t.batCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="doppler" title={t.dopplerTitle} eyebrow={t.dopplerEyebrow}>
          <InfoCard title={t.dopplerCardTitle}>
            {t.dopplerParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <DopplerShiftDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.dopplerSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.dopplerCheckpoint.prompt}
            options={t.dopplerCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="bionic-ears" title={t.bionicTitle} eyebrow={t.bionicEyebrow}>
          <InfoCard title={t.bionicStructureTitle}>
            {t.bionicStructureParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.bionicAiTitle}>
            {t.bionicAiParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <BionicEarCnnToyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.bionicSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.bionicCheckpoint.prompt}
            options={t.bionicCheckpoint.options}
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
      "Understand the physiological mechanisms behind human sound localization, including the role of binaural hearing and pinna frequency response in directional perception.",
      "Learn the biological mechanisms of sound localization in bats, and understand how the unique structure and movement of their ears, as well as the Doppler effect, contribute to localization accuracy.",
      "Grasp the basic principle of the Doppler effect, understand how sound wave frequencies change with motion, and analyze how bats utilize this effect for precise sound localization.",
      "Understand the basic structure and working principle of bionic ear devices, and learn how mimicking bat ear movements can generate Doppler effects for high-precision sound localization.",
      "Understand how deep learning is applied in bionic ears, learn how convolutional neural networks (CNNs) extract directional information from complex sound signals, and compare their localization accuracy with traditional methods and biological systems (bats and humans).",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Bionics + deep learning",
    introText:
      "Bats rely on highly sensitive ears to fly and hunt in the dark. Inspired by this, scientists designed bionic ears that mimic bat pinnae. Because captured signals are highly complex, deep learning is used to learn directional information from large datasets.",

    dailyTitle: "1. Sound Localization in Daily Life",
    dailyEyebrow: "Two ears + pinna",
    dailyCardTitle: "How humans localize sound",
    dailyParas: [
      "Humans can localize sounds (e.g., an airplane overhead). One key reason is that we have two ears. If the sound source is above and to the right, sound reaches the right ear first and produces a greater pressure there. Time and pressure differences vary with direction, enabling high precision on the horizontal plane.",
      "Additionally, our pinnae (outer ears) are not symmetrical. Sound from different directions produces different frequency responses after passing through the pinna into the ear canal. The brain learns these patterns and uses them for direction estimation—especially important for vertical localization.",
      "Thanks to time difference, pressure difference, and frequency response differences, humans can achieve localization accuracy of about 2° horizontally and 3.5° vertically.",
    ],
    dailySteps: [
      "Adjust azimuth to see ITD/ILD change (horizontal cues).",
      "Adjust elevation to see the pinna-dependent spectral notch shift (vertical cue).",
      "Summarize which cue is strongest on the horizontal plane vs vertical direction.",
    ],
    dailyCheckpoint: {
      prompt: "Which cue is especially important for vertical sound localization?",
      options: [
        {
          label: "Pinna frequency response differences learned by the brain.",
          correct: true,
          explanation: "The text highlights pinna frequency response as especially important for vertical localization.",
        },
        {
          label: "Only the time difference between two ears.",
          correct: false,
          explanation: "Time difference helps mainly on the horizontal plane; vertical cues rely more on pinna filtering.",
        },
      ],
    },

    batTitle: "2. Bat Sound Localization",
    batEyebrow: "Ultrasound echoes",
    batCardTitle: "Why bats are so precise",
    batParas: [
      "Bats are nocturnal. Despite limited vision, they navigate and hunt precisely in complete darkness by analyzing ultrasonic echoes. They emit ultrasound pulses and receive echoes with their ears, determining size, texture, distance, and direction of obstacles or prey.",
      "Their precision relates to unique ear structures: large pinnae and often a tragus that enhances echo processing.",
      "Bats can move their pinnae flexibly. Horseshoe bats can deform ears by about 20% within 100 ms. This movement creates relative velocity and thus Doppler effects, supporting more precise localization. Studies report about 1.6° horizontal and 3° vertical accuracy.",
    ],
    batSteps: [
      "Identify the three pieces: ultrasound emission, echo reception, and interpretation.",
      "Connect ear structure (pinna/tragus) to stronger echo processing.",
      "Explain how ear motion introduces relative velocity for Doppler cues.",
    ],
    batCheckpoint: {
      prompt: "Why does ear movement help bats localize sound more precisely?",
      options: [
        {
          label: "It creates relative velocity that produces Doppler frequency shifts carrying directional information.",
          correct: true,
          explanation: "The text says ear motion creates Doppler effects that help determine position and status of objects.",
        },
        {
          label: "It makes sound travel faster in air.",
          correct: false,
          explanation: "Speed of sound is approximately constant; motion changes the observed frequency.",
        },
      ],
    },

    dopplerTitle: "3. Doppler Effect",
    dopplerEyebrow: "Frequency changes with motion",
    dopplerCardTitle: "Approaching vs leaving",
    dopplerParas: [
      "If you stand near an approaching train, the whistle sounds sharper; after it passes, it sounds deeper. This frequency change with relative velocity is the Doppler effect (Christian Doppler, 1842).",
      "As sound travels at a constant speed in air, when the source moves toward you the wavelength shortens and frequency increases; when moving away the wavelength lengthens and frequency decreases.",
      "The same effect occurs when bats move their ears. Different ear positions have different relative velocities, causing different frequency shifts. By analyzing these shifts, bats can determine the location and motion of the sound source.",
    ],
    dopplerSteps: [
      "Set v>0 (toward) and observe frequency increase; set v<0 and see it decrease.",
      "Add ear oscillation to see time-varying frequency shifts.",
      "State how “shift patterns” can encode direction/motion information.",
    ],
    dopplerCheckpoint: {
      prompt: "When the sound source moves toward you, what happens to the observed frequency?",
      options: [
        {
          label: "Frequency increases (pitch sounds sharper).",
          correct: true,
          explanation: "Approaching motion shortens wavelength and increases frequency.",
        },
        {
          label: "Frequency decreases (pitch sounds deeper).",
          correct: false,
          explanation: "That corresponds to the source moving away.",
        },
      ],
    },

    bionicTitle: "4. Bionic Ears",
    bionicEyebrow: "Mimic + CNN decoding",
    bionicStructureTitle: "Structure and operation",
    bionicStructureParas: [
      "A 2021 Nature Machine Intelligence paper reported a bionic ear achieving sound localization accuracy beyond real bat ears.",
      "The device replicates a bat-like artificial pinna and uses a motor to drive rapid oscillations. A string connects the motor to the pinna to cause periodic vibration, simulating bat ear motion. A microphone below the pinna captures signals like an ear canal.",
      "Vibration generates Doppler effects on the pinna, producing frequency shifts that carry directional information. If decoded, the sound source direction can be determined.",
    ],
    bionicAiTitle: "AI-based sound localization",
    bionicAiParas: [
      "Signals captured by the bionic ear can be chaotic and hard to interpret directly. Researchers introduced deep learning and trained a convolutional neural network (CNN) to automatically extract directional information.",
      "Captured signals undergo spectral analysis to extract frequency-domain features, then feed into the CNN. Through layered computation, the CNN predicts the source angle.",
      "Experiments showed that with only one bionic ear, the system combined with deep learning achieved localization accuracy around 0.5°, surpassing humans (2°–3°) and even bats (1°–3°).",
    ],
    bionicSteps: [
      "Explain why oscillation creates Doppler frequency shifts that contain direction cues.",
      "Link spectral analysis to a “spectrogram-like” input for CNNs.",
      "Compare reported accuracy numbers: humans vs bats vs bionic ear + CNN.",
    ],
    bionicCheckpoint: {
      prompt: "Why was deep learning introduced for the bionic ear system?",
      options: [
        {
          label: "Because the captured sound signals are complex and hard to decode manually; CNNs can learn directional features from data.",
          correct: true,
          explanation: "The text says signals are messy and CNNs learn to extract directional information after spectral analysis.",
        },
        {
          label: "Because Doppler effects remove all noise automatically.",
          correct: false,
          explanation: "Doppler effects encode cues, but decoding still requires learning or algorithms.",
        },
      ],
    },

    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Humans localize sound via time difference, pressure difference, and pinna frequency response differences; pinna cues are especially important for vertical localization.",
      "Bats emit ultrasound pulses and analyze echoes; unique ear structure and ear motion support high-precision localization.",
      "The Doppler effect explains frequency change with relative motion and provides additional directional/motion cues.",
      "Bionic ears mimic bat pinna structure and movement to generate Doppler-coded signals; deep learning (CNNs) can decode messy signals for high-precision localization.",
      "This application shows a new paradigm: instead of traditional signal processing, machines can learn directional information from complex data using deep learning.",
    ],
    summaryCheckpoint: {
      prompt: "The bionic ear research suggests that for complex data, a strong alternative to traditional tools is…",
      options: [
        {
          label: "Using machine learning to learn directional information from data.",
          correct: true,
          explanation: "The summary explicitly states learning-based decoding replaces traditional signal processing in this context.",
        },
        {
          label: "Avoiding any spectral analysis.",
          correct: false,
          explanation: "The described pipeline includes spectral analysis before feeding into CNNs.",
        },
      ],
    },
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解人类声源定位的生理机制，包括双耳听觉与耳廓频率响应在方向感知中的作用。",
      "了解蝙蝠声源定位的生物学机制，理解其独特耳廓结构与耳朵运动，以及多普勒效应如何提升定位精度。",
      "掌握多普勒效应的基本原理，理解声音频率随相对运动而变化，并分析蝙蝠如何利用这一效应实现精确定位。",
      "理解仿生耳装置的基本结构与工作原理，了解模仿蝙蝠耳朵运动如何产生多普勒效应以实现高精度声源定位。",
      "理解深度学习如何用于仿生耳，了解 CNN 如何从复杂声音信号中提取方向信息，并比较其定位精度与传统方法及生物系统（蝙蝠/人类）。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "仿生 + 深度学习",
    introText:
      "本节介绍 AI 在仿生学中的应用：让机器模仿蝙蝠在黑暗中定位声音的能力。仿生耳采集到的信号非常复杂，因此研究者用深度学习在大规模数据上训练模型，让机器学会从复杂信号中提取方向信息。",

    dailyTitle: "1. 日常生活中的声源定位",
    dailyEyebrow: "双耳 + 耳廓",
    dailyCardTitle: "人类如何定位声音",
    dailyParas: [
      "人类能够定位声音。例如飞机从头顶飞过时，你可以判断它的方向。原因之一是我们有两只耳朵：若声源在右上方，声音先到达右耳，并在右耳产生更大声压。两耳之间的时间差与声压差会随方向变化，尤其有助于水平面上的高精度定位。",
      "此外，人类耳廓（外耳）并不完全对称。不同方向的声音经过耳廓进入耳道后，会产生不同的频率响应。大脑通过长期学习识别这些差异，从而判断声源方向——这一机制对垂直方向定位尤其重要。",
      "综合时间差、声压差与耳廓频响差异，人类水平定位精度约 2°，垂直定位精度约 3.5°。",
    ],
    dailySteps: [
      "调节方位角，观察 ITD/ILD 的变化（水平线索）。",
      "调节仰角，观察耳廓频响“凹口”随方向移动（垂直线索）。",
      "总结：水平面主要靠什么？垂直方向主要靠什么？",
    ],
    dailyCheckpoint: {
      prompt: "垂直方向的声源定位尤其依赖哪类线索？",
      options: [
        {
          label: "耳廓造成的频率响应差异（大脑通过学习识别）。",
          correct: true,
          explanation: "文本强调：耳廓频率响应差异对垂直定位尤其重要。",
        },
        {
          label: "仅靠两耳到达时间差。",
          correct: false,
          explanation: "时间差更擅长提供水平面方向线索；垂直定位更依赖耳廓滤波差异。",
        },
      ],
    },

    batTitle: "2. 蝙蝠的声源定位",
    batEyebrow: "超声回波",
    batCardTitle: "蝙蝠为何如此精准",
    batParas: [
      "蝙蝠多在夜间活动，视觉有限，却能在完全黑暗中精准飞行与捕食。这源于它们分析与处理超声回波的能力：发射超声脉冲并接收回波，从而判断障碍物或猎物的大小、纹理、距离与方向。",
      "蝙蝠的精准与独特耳结构有关：通常有很大的耳廓，许多种类还有耳屏（tragus），可增强回波接收与处理。",
      "蝙蝠还能灵活移动耳廓。例如马蹄蝠能在 100ms 内让耳朵变形约 20%。这种运动带来相对速度，产生多普勒效应，从而更精确地判断障碍物位置与状态。研究显示蝙蝠水平定位精度约 1.6°，垂直约 3°。",
    ],
    batSteps: [
      "概括三步：发射超声 → 接收回波 → 分析得到方向/距离等信息。",
      "把耳廓/耳屏结构与回波处理能力联系起来。",
      "说明耳朵运动如何引入相对速度，产生多普勒线索。",
    ],
    batCheckpoint: {
      prompt: "为什么耳朵运动能帮助蝙蝠更精确定位？",
      options: [
        {
          label: "耳朵运动产生相对速度，从而产生多普勒频移，携带方向信息。",
          correct: true,
          explanation: "文本指出：耳朵运动引入相对速度产生多普勒效应，帮助更精确确定位置与状态。",
        },
        {
          label: "因为它让空气中的声速变快。",
          correct: false,
          explanation: "声速在空气中近似恒定；运动主要影响观测到的频率。",
        },
      ],
    },

    dopplerTitle: "3. 多普勒效应",
    dopplerEyebrow: "频率随相对运动改变",
    dopplerCardTitle: "靠近更尖、远离更低",
    dopplerParas: [
      "当火车靠近你时，汽笛声会变尖；经过并远离后，声音变低沉。这种频率随相对速度变化的现象称为多普勒效应（Christian Doppler，1842）。",
      "原理是：声波在空气中以恒定速度传播。声源向你运动时波长缩短、频率升高；远离时波长变长、频率降低。",
      "蝙蝠移动耳朵也会产生同样效应。耳朵不同位置相对速度不同，导致不同大小的频移。通过分析频移，蝙蝠能更准确判断声源位置与运动。",
    ],
    dopplerSteps: [
      "设置 v>0（朝向）观察频率升高；设置 v<0（远离）观察频率降低。",
      "加入耳朵摆动，看到频率随时间变化的“频移模式”。",
      "说明这种模式如何携带方向/运动信息。",
    ],
    dopplerCheckpoint: {
      prompt: "当声源向你靠近时，观测到的频率如何变化？",
      options: [
        {
          label: "频率升高（听起来更尖）。",
          correct: true,
          explanation: "靠近导致波长缩短、频率升高。",
        },
        {
          label: "频率降低（听起来更低）。",
          correct: false,
          explanation: "远离才会导致频率降低。",
        },
      ],
    },

    bionicTitle: "4. 仿生耳",
    bionicEyebrow: "模仿 + CNN 解码",
    bionicStructureTitle: "结构与运行方式",
    bionicStructureParas: [
      "2021 年 Nature Machine Intelligence 报道了一种仿生耳装置，其声源定位精度甚至超过真实蝙蝠耳。",
      "该装置复制了蝙蝠式人工耳廓，并用电机驱动快速振荡。电机通过细绳牵动耳廓产生周期性振动，模拟蝙蝠耳朵运动；耳廓下方安装麦克风，类似人类耳道采集信号。",
      "振动会在耳廓上产生多普勒效应，引发频移，这些频移携带方向信息；若能解码即可确定声源方向。",
    ],
    bionicAiTitle: "基于 AI 的声源定位",
    bionicAiParas: [
      "仿生耳捕获的信号往往非常复杂、难以直接解读。研究者引入深度学习，训练 CNN 自动从复杂信号中提取方向信息。",
      "具体流程是：先对信号做谱分析得到频域特征，再输入 CNN。通过分层计算，CNN 提取与方向相关的特征并预测声源角度。",
      "实验显示：即使只有一个仿生耳，结合深度学习也能达到约 0.5° 的定位精度，超过人类（2°–3°）甚至蝙蝠（1°–3°）。",
    ],
    bionicSteps: [
      "解释耳廓振荡如何产生多普勒频移并编码方向信息。",
      "把谱分析理解为把信号转成可供 CNN 学习的频域表示。",
      "对比精度：人类 vs 蝙蝠 vs 仿生耳 + CNN。",
    ],
    bionicCheckpoint: {
      prompt: "为什么仿生耳系统需要引入深度学习？",
      options: [
        {
          label: "因为信号复杂难以人工解码，CNN 能从数据中学习方向特征。",
          correct: true,
          explanation: "文本指出：信号“很乱”，CNN 通过学习自动提取方向信息。",
        },
        {
          label: "因为多普勒效应会自动消除所有噪声。",
          correct: false,
          explanation: "多普勒效应提供线索，但解码仍需要学习或算法。",
        },
      ],
    },

    summaryTitle: "本节小结",
    summaryEyebrow: "关键要点",
    summaryPoints: [
      "人类利用两耳时间差、声压差与耳廓频响差异定位声音；耳廓线索对垂直定位尤其重要。",
      "蝙蝠通过发射超声并分析回波定位；独特耳结构与耳朵运动带来更高精度。",
      "多普勒效应解释了相对运动导致的频率变化，为定位提供额外线索。",
      "仿生耳通过模仿蝙蝠耳廓结构与运动生成多普勒编码信号；CNN 等深度学习方法可从复杂信号中解码方向，实现高精度定位。",
      "该研究提示：面对复杂数据，机器学习可成为替代传统信号处理的“新范式”。",
    ],
    summaryCheckpoint: {
      prompt: "仿生耳研究给出的启示是：当数据十分复杂时，一个强有力的替代方案是…",
      options: [
        {
          label: "用机器学习从数据中学习提取方向信息。",
          correct: true,
          explanation: "小结强调：不依赖传统信号处理，而用学习方法提取方向信息。",
        },
        {
          label: "完全不做谱分析。",
          correct: false,
          explanation: "文本描述的流程中包含谱分析，再输入 CNN。",
        },
      ],
    },
  },
} as const;

