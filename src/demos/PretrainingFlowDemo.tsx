import { useMemo, useState } from "react";

const stages = [
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

export function PretrainingFlowDemo() {
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
          <p className="text-sm font-semibold text-slate-900">Goal: layer-wise pre-training</p>
          <p className="text-xs text-slate-600">
            Step through Hinton&apos;s RBM pre-training and fine-tuning sequence.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            onClick={reset}
            type="button"
          >
            Reset
          </button>
          <button
            className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-slate-800"
            onClick={nextStage}
            type="button"
          >
            Next step
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-3">
          <StageTimeline current={stage} />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">{stages[stage].title}</p>
            <p className="mt-1 leading-relaxed">{stages[stage].detail}</p>
            <p className="mt-2 text-xs text-slate-500">
              Each layer learns features from the previous layer, matching the stacked RBM process
              in the book.
            </p>
          </div>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3">
          <label className="block text-sm font-semibold text-slate-700">
            Data volume for fine-tuning
            <input
              type="range"
              min={5}
              max={80}
              value={dataSize}
              onChange={(e) => setDataSize(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">Mini-batches: {dataSize}</span>
          </label>
          <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
            Estimated reconstruction quality after fine-tuning: {quality} / 100
          </div>
          <FeatureStack stage={stage} />
        </div>
      </div>
    </div>
  );
}

type StageTimelineProps = {
  current: number;
};

function StageTimeline({ current }: StageTimelineProps) {
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
            aria-label={`Step ${idx + 1}`}
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
};

function FeatureStack({ stage }: FeatureStackProps) {
  const activeLayers = stage + 1;
  const blocks = Array.from({ length: 3 }, (_, i) => {
    const filled = i < activeLayers;
    return {
      label: i === 0 ? "F1 (edges)" : i === 1 ? "F2 (motifs)" : "F3 (concepts)",
      filled,
      opacity: filled ? 1 : 0.35,
    };
  });

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        Feature abstraction preview
      </p>
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
      <p className="mt-2 text-xs text-slate-500">
        Pre-training forms a deep autoencoder, then all layers unfroze for end-to-end fine-tuning.
      </p>
    </div>
  );
}
