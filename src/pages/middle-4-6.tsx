import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { ReactionTypeClassifierToyDemo } from "../demos/ReactionTypeClassifierToyDemo";
import { SliceToVolumeToyDemo } from "../demos/SliceToVolumeToyDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson4_6({ lang }: LessonProps) {
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
    { id: "vaccine", label: t.vaccineTitle },
    { id: "drug", label: t.drugTitle },
    { id: "microscope", label: t.microTitle },
    { id: "other", label: t.otherTitle },
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

        <SectionBlock id="vaccine" title={t.vaccineTitle} eyebrow={t.vaccineEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.vaccineIntro}</p>
          <NeoantigenFinder lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.vaccineSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.vaccineCheckpoint.prompt}
            options={t.vaccineCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="drug" title={t.drugTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.drugIntro}</p>
          <ReactionTypeClassifierToyDemo lang={lang} />
          <DrugRnnToy lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.drugSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.drugCheckpoint.prompt}
            options={t.drugCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="microscope" title={t.microTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.microIntro}</p>
          <SliceToVolumeToyDemo lang={lang} />
          <MicroscopeEnhancer lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.microSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.microCheckpoint.prompt}
            options={t.microCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="other" title={t.otherTitle} eyebrow={t.otherEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.otherIntro}</p>
          <InfoCard title={t.otherCardTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.otherPoints.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </InfoCard>
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

function NeoantigenFinder({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [msConfidence, setMsConfidence] = useState(0.6);
  const [aiBoost, setAiBoost] = useState(0.2);
  const combined = Math.min(1, msConfidence + aiBoost);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "新抗原发现（示意）" : "Neoantigen discovery (toy)"}
          </p>
          <p className="text-sm text-slate-700">
            {isZh
              ? "调节质谱线索与 AI 预测加成，查看候选新抗原置信度。"
              : "Tune mass-spec evidence and AI boost to see candidate neoantigen confidence."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {isZh ? `置信度 ${Math.round(combined * 100)}%` : `Confidence ${Math.round(combined * 100)}%`}
        </span>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-800">
          {isZh ? "质谱证据" : "Mass-spec evidence"}
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={msConfidence}
            onChange={(e) => setMsConfidence(parseFloat(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
          <p className="mt-1 text-xs text-slate-600">
            {isZh ? "越高说明实验线索越清晰。" : "Higher = clearer experimental signal."}
          </p>
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          {isZh ? "AI 预测加成" : "AI prediction boost"}
          <input
            type="range"
            min={0}
            max={0.5}
            step={0.05}
            value={aiBoost}
            onChange={(e) => setAiBoost(parseFloat(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
          <p className="mt-1 text-xs text-slate-600">
            {isZh ? "AI 模型从质谱序列推测未知肽段，提升发现率。" : "AI infers unknown peptides from spectra, raising recall."}
          </p>
        </label>
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh
          ? "类似 DeepNovo 的模型可从质谱推断肽序列，帮助锁定患者特异的肿瘤新抗原。"
          : "DeepNovo-like models infer peptide sequences from spectra, helping lock patient-specific neoantigens."}
      </p>
    </div>
  );
}

function DrugRnnToy({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [method, setMethod] = useState<"rule" | "rnn">("rnn");
  const metrics = useMemo(
    () =>
      method === "rule"
        ? { time: 120, hit: 0.1 }
        : { time: 35, hit: 0.35 },
    [method],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "新药探索效率" : "New-drug exploration"}
          </p>
          <p className="text-sm text-slate-700">
            {isZh
              ? "对比规则筛选与 RNN 分子生成的耗时与命中率。"
              : "Compare rule-based screening vs. RNN molecule generation for time and hit rate."}
          </p>
        </div>
        <div className="flex gap-2">
          {[
            { key: "rule", label: isZh ? "规则筛选" : "Rule-based" },
            { key: "rnn", label: "RNN" },
          ].map((btn) => (
            <button
              key={btn.key}
              type="button"
              onClick={() => setMethod(btn.key as typeof method)}
              className={[
                "rounded-full border px-3 py-1 text-xs font-semibold transition",
                method === btn.key
                  ? "border-brand-600 bg-brand-50 text-brand-800"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
              ].join(" ")}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <InfoCard title={isZh ? "预计耗时" : "Estimated time"}>
          <p className="text-sm text-slate-800">
            {metrics.time} {isZh ? "天" : "days"}
          </p>
          <p className="text-xs text-slate-600">
            {isZh ? "RNN 生成候选分子后再筛选，可缩短周期。" : "RNN proposes candidates first, shortening cycles."}
          </p>
        </InfoCard>
        <InfoCard title={isZh ? "命中率（符合性质）" : "Hit rate (desired property)"}>
          <p className="text-sm text-slate-800">
            {(metrics.hit * 100).toFixed(0)}%
          </p>
          <p className="text-xs text-slate-600">
            {isZh
              ? "生成-筛选一体让满足目标性质的分子比例提高。"
              : "Generate-then-filter increases proportion meeting targets."}
          </p>
        </InfoCard>
      </div>
    </div>
  );
}

function MicroscopeEnhancer({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [noise, setNoise] = useState(0.6);
  const [aiLevel, setAiLevel] = useState(0.5);
  const clarity = Math.min(1, 1 - noise + aiLevel * 0.8);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "显微增强（示意）" : "Microscope enhancement (toy)"}
          </p>
          <p className="text-sm text-slate-700">
            {isZh
              ? "调节噪声与 AI 增强强度，观察成像清晰度。"
              : "Adjust noise and AI enhancement to see image clarity."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {isZh ? `清晰度 ${Math.round(clarity * 100)}%` : `Clarity ${Math.round(clarity * 100)}%`}
        </span>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-800">
          {isZh ? "原始噪声/低质量" : "Raw noise / low quality"}
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={noise}
            onChange={(e) => setNoise(parseFloat(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
          <p className="mt-1 text-xs text-slate-600">
            {isZh ? "活体成像往往受噪声/光毒性限制。" : "Live imaging often suffers noise and phototoxic limits."}
          </p>
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          {isZh ? "AI 增强力度" : "AI enhancement strength"}
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={aiLevel}
            onChange={(e) => setAiLevel(parseFloat(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
          <p className="mt-1 text-xs text-slate-600">
            {isZh ? "类似 GVTNet 可降噪或从透射光推断荧光。"
              : "GVTNet-like models denoise or infer fluorescence from transmission."}
          </p>
        </label>
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh
          ? "AI 增强需防止细节失真，临床仍需人工核验。"
          : "AI boosts clarity but must avoid artifacts; clinicians still verify."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 AI 在癌症疫苗、新药研发、显微成像中的应用原理",
      "认识 AI 在医学影像、疾病预测、流程优化中的作用与潜力",
    ],
    introTitle: "导入",
    introEyebrow: "AI + 医学",
    intro: "AI 让医疗更精准高效：从免疫治疗到药物设计，从成像增强到诊断与流程优化。",
    introCardTitle: "本节看点",
    introCard: "聚焦癌症疫苗、新药研发、AI 显微镜，并概览影像分析、疾病预测、医疗流程优化。",
    vaccineTitle: "1. AI 辅助癌症疫苗",
    vaccineEyebrow: "新抗原发现",
    vaccineIntro:
      "通过比较癌细胞与正常细胞，寻找突变蛋白片段（新抗原）。AI 模型可从质谱推断未知肽序列（如 DeepNovo），提升个性化疫苗设计效率。",
    vaccineSteps: [
      "理解新抗原＝突变蛋白片段，免疫系统可识别攻击。",
      "质谱提供线索，AI 从中推断肽序列。",
      "个体差异大，AI 提升发现率，助力个性化疫苗。",
    ],
    vaccineCheckpoint: {
      prompt: "AI 在癌症疫苗中的关键作用是？",
      options: [
        { label: "提高新抗原发现的效率和准确度", correct: true, explanation: "AI 解读质谱、推断肽序列，锁定候选新抗原。" },
        { label: "让免疫系统失效", correct: false, explanation: "目标是增强免疫识别。" },
        { label: "与疫苗无关", correct: false, explanation: "核心用于个性化疫苗设计。" },
        { label: "只改变癌细胞颜色", correct: false, explanation: "作用在序列预测与筛选。"},
      ],
    },
    drugTitle: "2. AI 辅助新药研发",
    drugIntro:
      "传统药物研发耗时十余年、花费巨大。RNN 等生成模型可先生成满足目标性质的分子，再筛选合成，压缩时间、提升命中率。",
    drugSteps: [
      "理解生成模型如何输出满足性质的分子序列。",
      "对比规则筛选与生成-筛选一体的效率差异。",
      "联想 AI 在候选筛选、性质预测、合成规划中的角色。",
    ],
    drugCheckpoint: {
      prompt: "RNN 等生成模型在药物研发中的价值是？",
      options: [
        { label: "更快生成满足性质的候选分子", correct: true, explanation: "先生成后筛选，提高命中率并缩短周期。" },
        { label: "完全替代医生看病", correct: false, explanation: "聚焦分子设计，不替代临床。"},
        { label: "只能生成已知分子", correct: false, explanation: "可探索新分子空间。" },
        { label: "让研发更慢", correct: false, explanation: "恰好加速。" },
      ],
    },
    microTitle: "3. AI 增强显微成像",
    microIntro:
      "GVTNet 等模型可对低质显微图去噪、并将透射光图转换为荧光效果，减少昂贵染色或光毒性。Google 也展示了实时定位癌细胞的 AI 显微镜。",
    microSteps: [
      "理解去噪与伪彩/荧光推断的价值。",
      "思考活体成像对低光、低毒性的需求。",
      "提醒：增强需防止失真，临床需核验。",
    ],
    microCheckpoint: {
      prompt: "AI 增强显微镜的主要价值是？",
      options: [
        { label: "在低成本/低光下仍获得高质量图像", correct: true, explanation: "去噪与推断荧光，减少昂贵或有毒操作。" },
        { label: "让显微镜无法成像", correct: false, explanation: "相反是提升。" },
        { label: "只改变图片颜色供娱乐", correct: false, explanation: "目标是科研/诊断。" },
        { label: "完全消除医生角色", correct: false, explanation: "医生仍需验证。" },
      ],
    },
    otherTitle: "4. 其他医疗应用",
    otherEyebrow: "影像、预测、流程",
    otherIntro:
      "AI 已用于影像分析（X 光/CT/MRI 辅助判读）、疾病预测（心血管、糖尿病风险）、疫情趋势监测、院内分诊排班与物资调度等。",
    otherCardTitle: "典型场景",
    otherPoints: [
      "影像：自动标注异常，辅助放射科诊断。",
      "预测：用病历/基因数据评估慢病或传染病风险。",
      "流程：智能分诊、预约、库存与排班优化，提升体验。",
    ],
    summaryTitle: "5. 小结",
    summaryPoints: [
      "AI 在医学从发现新抗原、设计新药到提升成像质量全面发力。",
      "影像、预测、流程优化推动医疗更精准、高效、个性化。",
      "技术需与临床核验和责任划分配合，确保安全可用。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand AI roles in cancer vaccines, drug R&D, and microscope enhancement",
      "Recognize AI’s potential in imaging, prediction/diagnosis, and care workflow optimization",
    ],
    introTitle: "Overview",
    introEyebrow: "AI + Medicine",
    intro: "AI drives precision and efficiency in care—from immunotherapy to drug design, imaging, and workflow.",
    introCardTitle: "What we cover",
    introCard: "Cancer vaccines, drug discovery, AI microscopes; plus imaging analysis, prediction, and process optimization.",
    vaccineTitle: "1. AI-Assisted Cancer Vaccines",
    vaccineEyebrow: "Neoantigen discovery",
    vaccineIntro:
      "Compare cancer vs. normal cells to find mutated peptide fragments (neoantigens). AI (e.g., DeepNovo) infers peptide sequences from mass spec, boosting personalized vaccine design.",
    vaccineSteps: [
      "Neoantigens = mutated peptides that trigger immune attack.",
      "Mass spec offers clues; AI infers peptides from spectra.",
      "Individual variability makes AI-driven discovery valuable.",
    ],
    vaccineCheckpoint: {
      prompt: "Key AI role in cancer vaccines?",
      options: [
        { label: "Improve efficiency/accuracy of neoantigen discovery", correct: true, explanation: "AI reads spectra to pinpoint candidate peptides." },
        { label: "Disable the immune system", correct: false, explanation: "Goal is to enhance recognition." },
        { label: "Unrelated to vaccines", correct: false, explanation: "Central to personalized design." },
        { label: "Only recolors cancer cells", correct: false, explanation: "It predicts sequences, not colors." },
      ],
    },
    drugTitle: "2. AI-Assisted Drug R&D",
    drugIntro:
      "Drug R&D is slow and costly. Generative models (e.g., RNNs) propose molecules with target properties, then filter/synthesize—cutting time and raising hit rates.",
    drugSteps: [
      "See how generators output molecules matching desired properties.",
      "Compare rule-based screening vs generate-then-filter efficiency.",
      "Connect AI roles in candidate filtering, property prediction, synthesis planning.",
    ],
    drugCheckpoint: {
      prompt: "Value of RNN-like generators in drug discovery?",
      options: [
        { label: "Faster generation of property-fitting candidates", correct: true, explanation: "More hits, shorter cycles." },
        { label: "Replace doctors entirely", correct: false, explanation: "Focused on molecules, not clinical care." },
        { label: "Only known molecules", correct: false, explanation: "They explore new space." },
        { label: "Slow R&D down", correct: false, explanation: "They accelerate it." },
      ],
    },
    microTitle: "3. AI-Enhanced Microscopy",
    microIntro:
      "Models like GVTNet denoise low-quality images and infer fluorescence from transmission images, reducing costly staining or phototoxic light. Google showed AI microscopes locating cancer cells in real time.",
    microSteps: [
      "Value of denoising and pseudo-fluorescence inference.",
      "Live imaging needs low light/low toxicity.",
      "Remember: avoid artifacts; humans validate.",
    ],
    microCheckpoint: {
      prompt: "Main value of AI-enhanced microscopes?",
      options: [
        { label: "High-quality images under low-cost/low-light settings", correct: true, explanation: "Denoise/infer fluorescence to reduce costly or harmful steps." },
        { label: "Prevent imaging entirely", correct: false, explanation: "They improve imaging." },
        { label: "Just color for fun", correct: false, explanation: "Built for research/diagnosis." },
        { label: "Remove doctors", correct: false, explanation: "Clinicians still verify." },
      ],
    },
    otherTitle: "4. Other Medical Uses",
    otherEyebrow: "Imaging, prediction, workflow",
    otherIntro:
      "AI aids imaging reads (X-ray/CT/MRI), predicts disease risk (chronic and infectious), monitors outbreaks, and optimizes triage, scheduling, and inventory.",
    otherCardTitle: "Typical scenarios",
    otherPoints: [
      "Imaging: auto-mark abnormalities to assist radiologists.",
      "Prediction: risk from EHR/genomics for chronic or infectious diseases.",
      "Workflow: smart triage, appointments, inventory, and staffing to improve experience.",
    ],
    summaryTitle: "5. Summary",
    summaryPoints: [
      "AI powers medicine end-to-end: neoantigens, drug design, imaging quality.",
      "Imaging, prediction, and workflows move care toward precision, efficiency, and personalization.",
      "Clinical validation and clear responsibility remain key for safe deployment.",
    ],
  },
};
