import { useMemo, useState } from "react";

type SelfAttentionDemoProps = {
  lang: "en" | "zh";
};

const sentence = ["Do", "you", "eat", "apples", "?"];

export function SelfAttentionDemo({ lang }: SelfAttentionDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：体验自注意力的语义“对齐”",
          desc: "选择一个词，查看它关注的上下文词语以及权重。",
          reset: "重置",
          pick: "选择词语",
          focus: "关注权重",
          note:
            "自注意力为每个词计算与其他词的相关性并加权汇总，帮助在上下文中澄清语义（如判断“apple”是水果还是品牌）。",
        }
      : {
          goal: "Goal: See self-attention align word meaning",
          desc: "Pick a word to view attention weights over the context.",
          reset: "Reset",
          pick: "Pick a token",
          focus: "Attention weights",
          note:
            "Self-attention scores relevance between tokens and reweighs context, clarifying meaning (e.g., “apple” as fruit vs. brand).",
        };

  const [active, setActive] = useState(3);

  const weights = useMemo(() => {
    if (active === 3) return [0.1, 0.1, 0.45, 0.25, 0.1]; // apples attends to eat
    if (active === 2) return [0.05, 0.1, 0.2, 0.55, 0.1]; // eat attends to apples
    return [0.15, 0.2, 0.25, 0.25, 0.15];
  }, [active]);

  const reset = () => setActive(3);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{t.goal}</p>
          <p className="text-xs text-slate-600">{t.desc}</p>
        </div>
        <button
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          type="button"
          onClick={reset}
          aria-label={t.reset}
        >
          {t.reset}
        </button>
      </div>

      <div className="mt-3 space-y-3">
        <div className="flex flex-wrap gap-2">
          {sentence.map((word, idx) => (
            <button
              key={word + idx}
              type="button"
              onClick={() => setActive(idx)}
              className={[
                "rounded-full px-3 py-1 text-xs font-semibold transition",
                idx === active
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200",
              ].join(" ")}
            >
              {word}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.focus}</p>
          <div className="mt-2 space-y-2">
            {sentence.map((word, idx) => (
              <div key={word + idx}>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>{word}</span>
                  <span className="text-slate-900">{Math.round(weights[idx] * 100)}%</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-sky-500 transition-all"
                    style={{ width: `${weights[idx] * 100}%` }}
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
      </div>
    </div>
  );
}
