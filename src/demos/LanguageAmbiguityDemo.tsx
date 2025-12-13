import { useState } from "react";

type Props = {
  lang: "en" | "zh";
};

const contexts = [
  {
    id: "river",
    sentenceEn: "He sat on the bank and watched the sunset.",
    sentenceZh: "他坐在河岸上看日落。",
    meaningEn: "bank = riverbank",
    meaningZh: "bank 表示河岸",
  },
  {
    id: "finance",
    sentenceEn: "She deposited her paycheck at the bank.",
    sentenceZh: "她把工资存到了银行。",
    meaningEn: "bank = financial institution",
    meaningZh: "bank 表示金融机构",
  },
  {
    id: "zhhao",
    sentenceEn: "这个人很好，我们是好朋友。",
    sentenceZh: "这个人很棒，我们是好朋友。",
    meaningEn: "好 = good/kind",
    meaningZh: "“好”表示友好/好人",
  },
  {
    id: "zhen",
    sentenceEn: "天气好冷。",
    sentenceZh: "天气好冷。",
    meaningEn: "好 = very (intensifier)",
    meaningZh: "“好”表示程度（很）",
  },
];

export function LanguageAmbiguityDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [selected, setSelected] = useState(contexts[0]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "多义词演示" : "Ambiguity Demo"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "上下文决定含义" : "Context Disambiguates Meaning"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "选择句子，观察同一词在不同上下文中的含义。机器翻译需要先消歧。"
              : "Pick a sentence to see how the same word changes meaning. MT must resolve this first."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {isZh ? "抽象·模糊" : "Abstraction & Ambiguity"}
        </span>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="space-y-2">
          {contexts.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelected(c)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                selected.id === c.id
                  ? "border-indigo-600 bg-indigo-50 text-indigo-800"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {isZh ? c.sentenceZh : c.sentenceEn}
            </button>
          ))}
        </div>

        <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "解析" : "Interpretation"}
          </p>
          <p className="mt-1 font-semibold text-slate-900">
            {isZh ? selected.sentenceZh : selected.sentenceEn}
          </p>
          <p className="mt-2 text-slate-700">{isZh ? selected.meaningZh : selected.meaningEn}</p>
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? "机器翻译必须利用上下文消歧，否则容易误译。"
              : "MT systems rely on context to disambiguate; without it, mistranslations happen."}
          </p>
        </div>
      </div>
    </div>
  );
}
