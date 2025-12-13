import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

const srcWords = ["I", "love", "machine", "translation"];
const tgtWords = ["我", "热爱", "机器", "翻译"];

const attentionWeights = [
  [0.7, 0.2, 0.05, 0.05],
  [0.05, 0.75, 0.1, 0.1],
  [0.05, 0.1, 0.7, 0.15],
  [0.05, 0.1, 0.15, 0.7],
];

export function AttentionTranslationDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [step, setStep] = useState(0);
  const weights = attentionWeights[step];

  const maxIdx = useMemo(() => weights.indexOf(Math.max(...weights)), [weights]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "注意力机制" : "Attention Mechanism"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "逐词对齐：译词关注源词" : "Word-by-word focus"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "点击目标词，查看它在翻译时关注的源词权重。"
              : "Click a target word to see which source words it attends to during translation."}
          </p>
        </div>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">NMT</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tgtWords.map((w, idx) => (
          <button
            key={w}
            type="button"
            onClick={() => setStep(idx)}
            className={[
              "rounded-full border px-3 py-1 text-sm font-semibold transition",
              step === idx
                ? "border-indigo-600 bg-indigo-50 text-indigo-800"
                : "border-slate-200 bg-white hover:border-slate-300",
            ].join(" ")}
          >
            {w}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-2">
        {srcWords.map((w, i) => (
          <div key={w} className="flex items-center gap-3">
            <div className="w-16 text-right text-sm font-semibold text-slate-800">{w}</div>
            <div className="h-3 flex-1 rounded-full bg-slate-100">
              <div
                className={[
                  "h-3 rounded-full transition-all",
                  i === maxIdx ? "bg-indigo-600" : "bg-indigo-300",
                ].join(" ")}
                style={{ width: `${Math.round(weights[i] * 100)}%` }}
              />
            </div>
            <div className="w-12 text-sm font-semibold text-slate-700">{Math.round(weights[i] * 100)}%</div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-slate-600">
        {isZh
          ? "注意力让解码器在生成某个译词时重点关注对应源词，实现长程依赖与对齐。"
          : "Attention lets the decoder focus on relevant source words for each target token, handling alignment and long-range context."}
      </p>
    </div>
  );
}
