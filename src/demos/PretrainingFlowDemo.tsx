import { useMemo, useState } from "react";

type PretrainingFlowDemoProps = {
  lang: "en" | "zh";
};

export function PretrainingFlowDemo({ lang }: PretrainingFlowDemoProps) {
  const stages =
    lang === "zh"
      ? [
          {
            title: "训练 RBM1（可见层 → F1）",
            detail: "从输入数据学习第一层特征 F1，冻结权重，将更丰富的信号向上传递。",
          },
          {
            title: "训练 RBM2（F1 → F2）",
            detail: "以 F1 为输入学习 F2，捕捉更高层结构。RBM1 冻结以保留已学特征。",
          },
          {
            title: "训练 RBM3（F2 → F3）",
            detail: "再堆叠一层 RBM 得到 F3，形成逐层预训练的深度编码器。",
          },
          {
            title: "微调自编码器",
            detail: "将各层串联并镜像成解码器，解冻所有参数，用少量数据微调以重构输入。",
          },
        ]
      : [
          {
            title: "Train RBM1 (visible -> F1)",
            detail:
              "Learn first-layer features (F1) from input data and freeze the weights to pass richer signals upward.",
          },
          {
            title: "Train RBM2 (F1 -> F2)",
            detail:
              "Use F1 as input, learn F2 to capture higher-level structure. RBM1 stays frozen to preserve learned features.",
          },
          {
            title: "Train RBM3 (F2 -> F3)",
            detail: "Stack another RBM to obtain F3. Now we have a deep, layerwise-pretrained encoder.",
          },
          {
            title: "Fine-tune autoencoder",
            detail:
              "Connect the stacked RBMs, mirror them to form a decoder, unfreeze all parameters, and fine-tune for reconstruction.",
          },
        ];

  const t =
    lang === "zh"
      ? {
          goal: "目标：逐层预训练流程",
          desc: "按步骤体验 Hinton 的 RBM 预训练与微调方案。",
          reset: "重置",
          next: "下一步",
          stepLabel: "步骤",
          dataLabel: "微调时的数据量",
          batches: (v: number) => `小批量数：${v}`,
          quality: (q: number) => `微调后重构质量（估计）：${q} / 100`,
          featurePreview: "特征抽象预览",
          note:
            "每一层都从上一层输出学习特征，符合书中“自下而上堆叠 RBM 再整体微调”的流程。",
          frozenHint: "预训练形成深度自编码器，然后解冻全部层做端到端微调。",
        }
      : {
          goal: "Goal: layer-wise pre-training",
          desc: "Step through Hinton's RBM pre-training and fine-tuning sequence.",
          reset: "Reset",
          next: "Next step",
          stepLabel: "Step",
          dataLabel: "Data volume for fine-tuning",
          batches: (v: number) => `Mini-batches: ${v}`,
          quality: (q: number) => `Estimated reconstruction quality after fine-tuning: ${q} / 100`,
          featurePreview: "Feature abstraction preview",
          note:
            "Each layer learns features from the previous layer, matching the stacked RBM process in the book.",
          frozenHint: "Pre-training forms a deep autoencoder, then all layers unfroze for end-to-end fine-tuning.",
        };
  const [stage, setStage] = useState(0);
  const [dataSize, setDataSize] = useState(30);

  const quality = useMemo(() => {
    const base = 45 + stage * 12;
    const dataBoost = Math.sqrt(dataSize) * 2;
    return Math.min(100, Math.round(base + dataBoost));
  }, [stage, dataSize]);

  const nextStage = () => setStage((s) => (s + 1) % stages.length);

  const reset = () => {
    setStage(0);
    setDataSize(30);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{t.goal}</p>
          <p className="text-xs text-slate-600">{t.desc}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            onClick={reset}
            type="button"
          >
            {t.reset}
          </button>
          <button
            className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-slate-800"
            onClick={nextStage}
            type="button"
          >
            {t.next}
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-3">
          <StageTimeline current={stage} stepLabel={t.stepLabel} stages={stages} />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">{stages[stage].title}</p>
            <p className="mt-1 leading-relaxed">{stages[stage].detail}</p>
            <p className="mt-2 text-xs text-slate-500">
              {t.note}
            </p>
          </div>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.dataLabel}
            <input
              type="range"
              min={5}
              max={80}
              value={dataSize}
              onChange={(e) => setDataSize(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{t.batches(dataSize)}</span>
          </label>
          <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
            {t.quality(quality)}
          </div>
          <FeatureStack stage={stage} label={t.featurePreview} hint={t.frozenHint} lang={lang} />
        </div>
      </div>
    </div>
  );
}

type StageTimelineProps = {
  current: number;
  stepLabel: string;
  stages: { title: string; detail: string }[];
};

function StageTimeline({ current, stepLabel, stages }: StageTimelineProps) {
  return (
    <div className="flex flex-col gap-2">
      {stages.map((stage, idx) => (
        <div
          key={stage.title}
          className={[
            "flex items-center gap-3 rounded-xl border px-3 py-2 text-sm transition",
            idx === current
              ? "border-brand-400 bg-brand-50 font-semibold text-slate-900"
              : "border-slate-200 bg-white text-slate-700",
          ].join(" ")}
        >
          <span
            className={[
              "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold",
              idx === current ? "border-brand-400 text-brand-700" : "border-slate-200 text-slate-500",
            ].join(" ")}
            aria-label={`${stepLabel} ${idx + 1}`}
          >
            {idx + 1}
          </span>
          <div>
            <p>{stage.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

type FeatureStackProps = {
  stage: number;
  label: string;
  hint: string;
  lang: "en" | "zh";
};

function FeatureStack({ stage, label, hint, lang }: FeatureStackProps) {
  const activeLayers = stage + 1;
  const blocks = Array.from({ length: 3 }, (_, i) => {
    const filled = i < activeLayers;
    const labelText =
      lang === "zh"
        ? i === 0
          ? "F1（边缘）"
          : i === 1
            ? "F2（纹理/图案）"
            : "F3（概念）"
        : i === 0
          ? "F1 (edges)"
          : i === 1
            ? "F2 (motifs)"
            : "F3 (concepts)";
    return {
      label: labelText,
      filled,
      opacity: filled ? 1 : 0.35,
    };
  });

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <div className="mt-2 flex gap-2">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="flex-1 rounded-lg bg-gradient-to-br from-sky-100 to-indigo-100 p-3"
            style={{ opacity: block.opacity }}
          >
            <p className="text-xs font-semibold text-slate-700">{block.label}</p>
            <div className="mt-2 h-12 rounded-md bg-white/70 dot-grid" />
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">{hint}</p>
    </div>
  );
}
