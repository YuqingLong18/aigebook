import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Pair = {
  id: string;
  source: string;
  target: string;
  prob: number;
};

const phrasePairs: Pair[] = [
  { id: "p1", source: "我 / 已经 / 吃饭了", target: "I / have / eaten", prob: 0.86 },
  { id: "p2", source: "银行 / 河岸", target: "bank / riverbank", prob: 0.34 },
  { id: "p3", source: "银行 / 金融", target: "bank / financial", prob: 0.78 },
  { id: "p4", source: "你 / 好", target: "hello", prob: 0.65 },
];

export function SMTAlignmentDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [selected, setSelected] = useState<Pair>(phrasePairs[0]);

  const best = useMemo(() => phrasePairs.reduce((a, b) => (b.prob > a.prob ? b : a), phrasePairs[0]), []);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "统计对齐演示" : "SMT Alignment Demo"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "短语对齐 + 概率选择" : "Phrase Alignment + Probabilities"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "从平行语料中学到的短语对齐及其概率，选择最高概率作为翻译。"
              : "Phrase alignments learned from parallel corpora with probabilities; pick the highest likelihood."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          SMT · Phrase table
        </span>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="space-y-2">
          {phrasePairs.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                selected.id === p.id
                  ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              <span className="font-semibold">{p.source}</span>
              <span className="ml-2 text-slate-500">→</span>
              <span className="ml-2">{p.target}</span>
              <span className="float-right text-xs font-semibold text-slate-700">{p.prob.toFixed(2)}</span>
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "当前选择" : "Current choice"}
          </p>
          <p className="mt-1 text-slate-900">
            {selected.source} → <strong>{selected.target}</strong>
          </p>
          <p className="text-xs text-slate-600">
            {isZh ? "概率" : "Probability"}: {selected.prob.toFixed(2)}
          </p>
          <p className="mt-3 text-xs text-slate-600">
            {isZh
              ? "SMT 从大量双语句对统计出短语表。翻译时挑选概率最高的对齐组合。"
              : "SMT learns a phrase table from parallel sentences; decoding picks the highest-probability alignments."}
          </p>
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? `最高概率示例：${best.source} → ${best.target} (${best.prob.toFixed(2)})`
              : `Max-prob example: ${best.source} → ${best.target} (${best.prob.toFixed(2)})`}
          </p>
        </div>
      </div>
    </div>
  );
}
