import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Candidate = {
  id: string;
  text: string;
  acoustic: number;
  language: number;
};

const candidates: Candidate[] = [
  { id: "fishbone", text: "被鱼刺卡住", acoustic: 0.55, language: 0.9 },
  { id: "fishpond", text: "鱼塘", acoustic: 0.65, language: 0.2 },
  { id: "sharkfin", text: "鱼翅", acoustic: 0.5, language: 0.25 },
  { id: "wishbone", text: "愿望骨", acoustic: 0.35, language: 0.05 },
];

export function ASRDecoderDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [weight, setWeight] = useState(0.6);

  const scored = useMemo(() => {
    return candidates
      .map((c) => ({
        ...c,
        score: c.acoustic * (1 - weight) + c.language * weight,
      }))
      .sort((a, b) => b.score - a.score);
  }, [weight]);

  const top = scored[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">ASR</p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "声学模型 + 语言模型 融合" : "Acoustic + Language Fusion"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "调整语言模型权重，观察解码结果如何变化。"
              : "Tune the language-model weight and see how decoding changes."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          End-to-end ↔ HMM
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">
            {isZh ? "语言模型权重" : "Language model weight"}
          </p>
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>{isZh ? "全靠声学" : "Acoustic only"}</span>
            <span className="font-semibold text-slate-900">{Math.round(weight * 100)}%</span>
            <span>{isZh ? "语言强约束" : "Language heavy"}</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            className="mt-2 w-full accent-indigo-600"
          />
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? "传统 HMM 会显式插入语言模型；端到端模型把语言知识学进同一个网络。"
              : "Classic HMMs combine an explicit LM; end-to-end models internalize language in one network."}
          </p>
        </div>

        <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-600">{isZh ? "候选与分数" : "Candidates & scores"}</p>
          <div className="mt-2 space-y-2">
            {scored.map((c) => (
              <div
                key={c.id}
                className={[
                  "flex items-center justify-between rounded-lg border px-3 py-2 text-sm",
                  c.id === top.id ? "border-emerald-500 bg-white shadow-sm" : "border-slate-200 bg-white",
                ].join(" ")}
              >
                <div>
                  <p className="font-semibold text-slate-900">{c.text}</p>
                  <p className="text-xs text-slate-600">
                    {isZh
                      ? `声学 ${c.acoustic.toFixed(2)} · 语言 ${c.language.toFixed(2)}`
                      : `Acoustic ${c.acoustic.toFixed(2)} · Language ${c.language.toFixed(2)}`}
                  </p>
                </div>
                <span className="text-sm font-semibold text-slate-900">{c.score.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-700">
            {isZh
              ? "最优候选："
              : "Top candidate:"}{" "}
            <span className="font-semibold">{top.text}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
