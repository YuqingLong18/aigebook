import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { DiceMelodyDemo } from "../demos/DiceMelodyDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson4_7({ lang }: LessonProps) {
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
    { id: "pressure", label: isZh ? "1. 作曲的压力" : "1. Composers Under Pressure" },
    { id: "illiac", label: isZh ? "2. 第一首 AI 曲" : "2. The First AI-Composed Piece" },
    { id: "development", label: isZh ? "3. AI 作曲技术发展" : "3. Development of AI Composition" },
    { id: "magenta", label: isZh ? "4. Magenta：AI 与艺术" : "4. Magenta: AI and the Arts" },
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

        <SectionBlock id="pressure" title={t.pressureTitle} eyebrow={t.pressureEyebrow}>
          <InfoCard title={t.pressureCardTitle}>
            {t.pressureParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <DiceMelodyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.pressureSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.pressureCheckpoint.prompt}
            options={t.pressureCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="illiac" title={t.illiacTitle} eyebrow={t.illiacEyebrow}>
          <InfoCard title={t.illiacCardTitle}>
            {t.illiacParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.illiacSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.illiacCheckpoint.prompt}
            options={t.illiacCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="development" title={t.devTitle} eyebrow={t.devEyebrow}>
          <InfoCard title={t.devSymbolicTitle}>
            {t.devSymbolicParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.devStatTitle}>
            {t.devStatParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.devNeuralTitle}>
            {t.devNeuralParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.devTransformerTitle}>
            {t.devTransformerParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.devSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.devCheckpoint.prompt}
            options={t.devCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="magenta" title={t.magentaTitle} eyebrow={t.magentaEyebrow}>
          <InfoCard title={t.magentaCardTitle}>
            {t.magentaParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.magentaSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.magentaCheckpoint.prompt}
            options={t.magentaCheckpoint.options}
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
      "Understand composition challenges and early aids like Mozart’s “musical dice game” and how The Illiac Suite was generated.",
      "Recognize symbolic and statistical learning approaches to composition and their limits.",
      "Learn how deep learning (RNN, LSTM, Transformer) improves coherence and fluency of generated music.",
      "Explore recent AI music systems such as MusicLM and Suno and their impact on creativity.",
      "Learn about Google’s Magenta project and reflect on AI’s potential in artistic creation.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "From inspiration to learned patterns",
    introText:
      "Composing is creative and demanding. From dice-based randomness to Markov chains to deep networks, AI has steadily learned human composition patterns and can now generate melodies that align with human aesthetics.",

    pressureTitle: "1. Composers Under Pressure",
    pressureEyebrow: "Dice for inspiration",
    pressureCardTitle: "Mozart’s musical dice game",
    pressureParas: [
      "To spark ideas, composers created dice-based composition aids. Mozart’s musical dice game selected 176 short measures arranged in an 11×16 matrix; rolling dice picked measures to stitch into a minuet.",
      "This random recombination could in theory yield over 4.5 trillion different pieces—showing how even great composers sought tools to overcome creative pressure.",
    ],
    pressureSteps: [
      "Relate the dice game to “random selection within rules.”",
      "Observe how motif repetition appears (or not) when randomness changes.",
      "Connect the toy melody to the idea that tools can unlock inspiration.",
    ],
    pressureCheckpoint: {
      prompt: "What does Mozart’s dice game illustrate?",
      options: [
        {
          label: "Randomly recombining prepared measures can generate many melodies and relieve creative pressure.",
          correct: true,
          explanation: "It uses dice to choose from 176 measures, producing huge variety.",
        },
        {
          label: "Composers never needed any aid to create music.",
          correct: false,
          explanation: "The game exists precisely because composition is challenging.",
        },
      ],
    },

    illiacTitle: "2. The First AI-Composed Piece",
    illiacEyebrow: "Markov chains on ILLIAC I",
    illiacCardTitle: "The Illiac Suite (1956)",
    illiacParas: [
      "Lejaren Hiller and Leonard Isaacson used the ILLIAC I computer to generate The Illiac Suite with Markov chains: each note is a state, transitions encode composition rules, and random sampling follows those probabilities.",
      "By tweaking transition probabilities, the style changes—demonstrating data-driven control of musical flow.",
    ],
    illiacSteps: [
      "Explain a Markov chain as “next note depends on the current state with some probability.”",
      "Connect transition tuning to style changes.",
      "Note the historical link: AI’s birth year (1956) also saw the first computer-generated piece.",
    ],
    illiacCheckpoint: {
      prompt: "How did The Illiac Suite generate notes?",
      options: [
        {
          label: "By sampling next notes via Markov-chain transition probabilities.",
          correct: true,
          explanation: "Each note is a state; probabilities define the next note.",
        },
        {
          label: "By manually entering an entire fixed score with no randomness.",
          correct: false,
          explanation: "The method relied on probabilistic transitions, not fixed scores.",
        },
      ],
    },

    devTitle: "3. Development of AI Composition",
    devEyebrow: "From rules to deep nets",
    devSymbolicTitle: "1) Symbolic methods",
    devSymbolicParas: [
      "Treat music as language: notes are words, music theory provides grammar. Experts encode rules so computers can assemble pieces paragraph-style.",
    ],
    devStatTitle: "2) Statistical machine learning",
    devStatParas: [
      "Markov chains, HMMs, and early neural models learn transition probabilities from corpora, generating sequences by iteratively sampling the next note.",
    ],
    devNeuralTitle: "3) Neural networks",
    devNeuralParas: [
      "RNNs and LSTMs remember longer contexts, capturing dependencies so generated music sounds more natural and fluent than shallow probabilistic models.",
    ],
    devTransformerTitle: "4) Transformer-based large music models",
    devTransformerParas: [
      "Attention mechanisms capture long-range structure and scale to huge datasets. Models like MusicLM (trained on 200k–300k hours) and Suno generate full songs with sections and vocals.",
    ],
    devSteps: [
      "Contrast symbolic “rule assembly” with data-driven learning.",
      "Explain why LSTMs help coherence compared to plain Markov chains.",
      "Note how Transformers capture long-range song structure and whole sections.",
    ],
    devCheckpoint: {
      prompt: "Why do Transformers suit modern music generation?",
      options: [
        {
          label: "Attention handles long-range dependencies, enabling coherent, full-length pieces after large-scale training.",
          correct: true,
          explanation: "They model distant relations and scale with big datasets (e.g., MusicLM, Suno).",
        },
        {
          label: "They only generate single isolated notes without context.",
          correct: false,
          explanation: "Transformers excel at global structure, not isolated notes.",
        },
      ],
    },

    magentaTitle: "4. Magenta: AI and the Arts",
    magentaEyebrow: "Creative tools",
    magentaCardTitle: "Google’s Magenta project",
    magentaParas: [
      "Launched in 2016 to explore AI in music and art, Magenta builds deep-learning tools for composition and cross-modal creation: melodies from text, sketches to notes, turning birdsong or wind into musical clips.",
    ],
    magentaSteps: [
      "Identify how Magenta mixes technology with artistic practice.",
      "Relate cross-modal tools (text to melody, sketch to notes) to creativity expansion.",
      "Consider how AI can inspire while humans guide artistic judgment.",
    ],
    magentaCheckpoint: {
      prompt: "What is a key feature of Magenta’s approach?",
      options: [
        {
          label: "Using machine learning to generate and transform music (e.g., text/sketch to melody) as creative tools.",
          correct: true,
          explanation: "Magenta explores AI as an artistic collaborator across modalities.",
        },
        {
          label: "Limiting AI to only one fixed melody with no interaction.",
          correct: false,
          explanation: "Magenta is about flexible, creative tooling, not fixed outputs.",
        },
      ],
    },

    summaryTitle: "Section Summary",
    summaryEyebrow: "From dice to deep nets",
    summaryPoints: [
      "Composition is hard; aids like Mozart’s dice game show the need for tools.",
      "The Illiac Suite used Markov chains, marking the first computer-generated piece.",
      "Symbolic rules gave way to statistical learning, then to RNN/LSTM coherence.",
      "Transformer-based large models (MusicLM, Suno) generate full, fluid songs.",
      "Magenta exemplifies AI as a creative partner across music and other arts.",
    ],
    summaryCheckpoint: {
      prompt: "How has AI composition progressed overall?",
      options: [
        {
          label: "From rule-based and probabilistic methods to deep, attention-based models that generate coherent, structured music.",
          correct: true,
          explanation: "The trajectory moves from dice/Markov to LSTM/Transformer for fluency and structure.",
        },
        {
          label: "It has not changed at all since the 1950s.",
          correct: false,
          explanation: "The section highlights major progress across generations of methods.",
        },
      ],
    },
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解作曲的复杂性，了解莫扎特“音乐骰子游戏”和《Illiac 组曲》的生成方式。",
      "认识符号方法与统计学习在作曲中的应用及局限。",
      "了解深度学习（RNN、LSTM、Transformer）如何提升生成音乐的连贯性与流畅性。",
      "探究 MusicLM、Suno 等近年 AI 音乐系统及其对创作的影响。",
      "了解 Google Magenta 项目，思考 AI 在艺术创作中的潜力。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "从灵感到学习模式",
    introText:
      "作曲创造性强且耗费心力。从骰子随机到 Markov 链，再到深度网络，AI 逐步学会人类的作曲模式，能生成符合人类审美的旋律。",

    pressureTitle: "1. 作曲的压力",
    pressureEyebrow: "用骰子找灵感",
    pressureCardTitle: "莫扎特的音乐骰子游戏",
    pressureParas: [
      "为激发灵感，作曲家设计了基于骰子的作曲方法。莫扎特将 176 个小节组成 11×16 矩阵，掷两枚骰子决定选哪个小节拼成小步舞曲。",
      "这种随机重组理论上可产生超过 4.5 万亿种乐曲，说明即便大师也需要工具缓解创作压力。",
    ],
    pressureSteps: [
      "把骰子法理解为“规则内的随机组合”。",
      "观察随机度变化时动机是否被重复或打散。",
      "联系生成旋律，理解辅助工具如何激发灵感。",
    ],
    pressureCheckpoint: {
      prompt: "音乐骰子游戏体现了什么？",
      options: [
        {
          label: "在规则内随机拼接乐句，可产生大量旋律，缓解创作压力。",
          correct: true,
          explanation: "骰子决定从 176 乐句中挑选，组合数极大。",
        },
        {
          label: "作曲从不需要任何辅助方法。",
          correct: false,
          explanation: "正因为作曲难，才需要此类辅助。",
        },
      ],
    },

    illiacTitle: "2. 第一首 AI 曲",
    illiacEyebrow: "ILLIAC I 上的 Markov 链",
    illiacCardTitle: "《Illiac 组曲》（1956）",
    illiacParas: [
      "Hiller 与 Isaacson 在 ILLIAC I 上用 Markov 链生成《Illiac 组曲》：每个音符是一个状态，转移概率编码作曲规则，按概率随机选择下一个音符。",
      "调整转移概率即可改变风格，体现数据驱动的流动控制。",
    ],
    illiacSteps: [
      "把 Markov 链理解为“当前状态决定下个音符的概率”。",
      "连接转移概率的调整与风格变化。",
      "注意历史节点：1956 年是 AI 诞生，也是第一首计算机音乐诞生。",
    ],
    illiacCheckpoint: {
      prompt: "《Illiac 组曲》如何生成音符？",
      options: [
        {
          label: "通过 Markov 链的转移概率随机采样下一个音符。",
          correct: true,
          explanation: "音符视作状态，概率决定续写。",
        },
        {
          label: "完全手工输入固定乐谱，不涉及随机性。",
          correct: false,
          explanation: "方法依赖概率转移，而非固定谱子。",
        },
      ],
    },

    devTitle: "3. AI 作曲技术发展",
    devEyebrow: "从规则到深度网络",
    devSymbolicTitle: "1) 符号方法",
    devSymbolicParas: ["把音乐看作语言：音符是单词，理论是语法，作曲规则编码后按“段落”组合成曲子。"],
    devStatTitle: "2) 统计机器学习",
    devStatParas: ["Markov 链、HMM、早期神经网络学习大规模乐谱的转移概率，迭代采样生成任意长度序列。"],
    devNeuralTitle: "3) 神经网络",
    devNeuralParas: ["RNN、LSTM 能记忆更长上下文，捕捉前后依赖，让生成音乐比浅层概率模型更自然流畅。"],
    devTransformerTitle: "4) 基于 Transformer 的大音乐模型",
    devTransformerParas: [
      "注意力机制捕捉长程结构，能在大规模数据上训练。MusicLM（20–30 万小时数据）、Suno 能生成含分段与人声的完整歌曲。",
    ],
    devSteps: [
      "对比符号“规则拼装”与数据驱动学习。",
      "解释 LSTM 相比单纯 Markov 提升连贯性的原因。",
      "指出 Transformer 能捕捉长程结构、生成完整段落。",
    ],
    devCheckpoint: {
      prompt: "为什么 Transformer 适合现代 AI 作曲？",
      options: [
        {
          label: "注意力可建模长程依赖，配合大规模训练生成连贯完整的作品。",
          correct: true,
          explanation: "能建模远距离关系，适合 MusicLM、Suno 这类大模型。",
        },
        {
          label: "只能生成单个孤立音符，无法考虑上下文。",
          correct: false,
          explanation: "Transformer 的优势恰在全局结构建模。",
        },
      ],
    },

    magentaTitle: "4. Magenta：AI 与艺术",
    magentaEyebrow: "创意工具",
    magentaCardTitle: "Google Magenta 项目",
    magentaParas: [
      "2016 年启动，探索 AI 在音乐/艺术中的应用，基于深度学习提供作曲与跨模态工具：从文本生旋律、草图转音符、把鸟鸣或风声转为乐片。",
    ],
    magentaSteps: [
      "说明 Magenta 如何把技术与艺术实践结合。",
      "将文本/草图→旋律等跨模态工具与“拓展创意”联系起来。",
      "思考 AI 提供灵感、人类把关审美的合作方式。",
    ],
    magentaCheckpoint: {
      prompt: "Magenta 的核心特点之一是？",
      options: [
        {
          label: "用机器学习生成、转换音乐（如文本/草图转旋律），作为创作工具。",
          correct: true,
          explanation: "Magenta 致力于跨模态、灵活的创意辅助。",
        },
        {
          label: "只输出一首固定旋律，没有互动。",
          correct: false,
          explanation: "它强调工具性与多样性，而非固定结果。",
        },
      ],
    },

    summaryTitle: "本节小结",
    summaryEyebrow: "从骰子到深度网络",
    summaryPoints: [
      "作曲难，莫扎特的骰子游戏体现对辅助工具的需求。",
      "《Illiac 组曲》用 Markov 链生成，开启计算机作曲先河。",
      "符号规则之后，统计学习、RNN/LSTM 提升连贯性与流畅度。",
      "基于 Transformer 的大模型（MusicLM、Suno）能生成完整流畅的歌曲。",
      "Magenta 展示 AI 作为创作伙伴在音乐与其他艺术中的潜力。",
    ],
    summaryCheckpoint: {
      prompt: "AI 作曲的发展总体趋势是？",
      options: [
        {
          label: "从规则/概率到深度、注意力模型，生成更连贯、有结构的音乐。",
          correct: true,
          explanation: "趋势是从骰子/Markov 走向 LSTM/Transformer。",
        },
        {
          label: "从未发生变化，仍停留在 1950 年代的方法。",
          correct: false,
          explanation: "文本强调方法的多次跃迁与提升。",
        },
      ],
    },
  },
};
