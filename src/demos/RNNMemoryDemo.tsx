import { useMemo, useState } from "react";

type RNNMemoryDemoProps = {
  lang: "en" | "zh";
};

const sentences = [
  ["我", "喜欢", "学习"],
  ["我", "不", "喜欢", "学习"],
  ["Learning", "is", "fun"],
  ["Learning", "is", "not", "fun"],
];

export function RNNMemoryDemo({ lang }: RNNMemoryDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：观察循环连接如何积累序列语义",
          desc: "逐词前进，查看隐藏状态的正负倾向（情感示意）。",
          reset: "重置",
          next: "下一词",
          state: "隐藏状态",
          sentiment: "当前倾向",
          pos: "正向",
          neg: "负向",
        }
      : {
          goal: "Goal: See RNN memory accumulate sequence meaning",
          desc: "Step through words to watch hidden state tilt positive/negative (toy sentiment).",
          reset: "Reset",
          next: "Next word",
          state: "Hidden state",
          sentiment: "Current polarity",
          pos: "Positive",
          neg: "Negative",
        };

  const [idx, setIdx] = useState(0);
  const [seq, setSeq] = useState(0);

  const currentSentence = sentences[seq];

  const hidden = useMemo(() => {
    let h = 0;
    for (let i = 0; i <= idx && i < currentSentence.length; i++) {
      const word = currentSentence[i];
      if (["喜欢", "like", "fun"].includes(word)) h += 0.6;
      if (["不", "not"].includes(word)) h -= 0.8;
    }
    return Math.max(-1, Math.min(1, Number(h.toFixed(2))));
  }, [currentSentence, idx]);

  const sentimentLabel = hidden >= 0 ? t.pos : t.neg;

  const nextWord = () => {
    if (idx < currentSentence.length - 1) {
      setIdx((prev) => prev + 1);
    }
  };

  const reset = () => {
    setIdx(0);
    setSeq((prev) => (prev + 1) % sentences.length);
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
            type="button"
            onClick={nextWord}
          >
            {t.next}
          </button>
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            type="button"
            onClick={reset}
            aria-label={t.reset}
          >
            {t.reset}
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
        <div className="flex flex-wrap gap-2">
          {currentSentence.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className={[
                "rounded-full px-3 py-1 text-xs font-semibold",
                i <= idx ? "bg-slate-900 text-white" : "bg-white text-slate-700 shadow-sm",
              ].join(" ")}
            >
              {word}
            </span>
          ))}
        </div>
        <div className="rounded-lg bg-white px-3 py-2 shadow-sm">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-slate-600">
            <span>{t.state}</span>
            <span className={hidden >= 0 ? "text-emerald-700" : "text-rose-700"}>{sentimentLabel}</span>
          </div>
          <div className="mt-1 h-2 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-400 via-slate-200 to-emerald-400 transition-all"
              style={{ width: `${(hidden + 1) * 50}%` }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
