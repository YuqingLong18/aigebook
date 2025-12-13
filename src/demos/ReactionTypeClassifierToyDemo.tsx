import { useMemo, useState } from "react";

type ReactionTypeClassifierToyDemoProps = {
  lang: "en" | "zh";
};

type ReactionType = "combination" | "decomposition" | "single" | "double";

type Example = {
  id: string;
  title: { en: string; zh: string };
  type: ReactionType;
  smiles: string;
};

type Token = {
  text: string;
};

function tokenize(smiles: string): Token[] {
  const tokens: Token[] = [];
  for (let i = 0; i < smiles.length; i++) {
    if (smiles[i] === ">" && smiles.slice(i, i + 2) === ">>") {
      tokens.push({ text: ">>" });
      i += 1;
      continue;
    }
    const ch = smiles[i];
    const two = smiles.slice(i, i + 2);
    const isTwoLetter = ["Cl", "Br", "Si", "Na", "Li", "Al", "Ca", "Fe"].includes(two);
    if (/[A-Za-z]/.test(ch) && isTwoLetter) {
      tokens.push({ text: two });
      i += 1;
      continue;
    }
    tokens.push({ text: ch });
  }
  return tokens.filter((t) => t.text.trim().length > 0);
}

function ngrams(tokens: string[], n: number) {
  const grams: string[] = [];
  for (let i = 0; i + n <= tokens.length; i++) grams.push(tokens.slice(i, i + n).join(""));
  return grams;
}

function cosine(a: Map<string, number>, b: Map<string, number>) {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (const v of a.values()) na += v * v;
  for (const v of b.values()) nb += v * v;
  for (const [k, v] of a.entries()) dot += v * (b.get(k) ?? 0);
  const denom = Math.sqrt(na) * Math.sqrt(nb);
  return denom === 0 ? 0 : dot / denom;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function featurize(tokens: string[]) {
  const feats = new Map<string, number>();
  const add = (k: string, w: number) => feats.set(k, (feats.get(k) ?? 0) + w);
  for (const tok of tokens) add(`t:${tok}`, 1);
  for (const g of ngrams(tokens, 2)) add(`g2:${g}`, 1.2);
  for (const g of ngrams(tokens, 3)) add(`g3:${g}`, 0.9);
  return feats;
}

export function ReactionTypeClassifierToyDemo({ lang }: ReactionTypeClassifierToyDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：理解“把反应当作序列分类”的基本套路（类比 BERT 分类）",
        desc: "真实研究中会用 BERT 从大量反应数据中学习表示。这里用玩具“向量相似度”模拟：把 SMILES 转成 token → 聚合成整体表示 → 分类。",
        reset: "重置",
        pick: "选择输入反应",
        input: "输入序列（含 CLS）",
        predicted: "预测类型",
        scores: "与各类型原型的相似度（玩具）",
        important: "模型更“关注”的 token（玩具解释）",
        cls: "CLS：用于代表整条序列的向量",
        note:
          "教学用：我们用字符/片段 n-gram 来模拟“上下文表示”。BERT 的关键优势是能双向利用上下文，并在大规模数据上预训练得到更强的表示。",
        types: {
          combination: "化合（Combination）",
          decomposition: "分解（Decomposition）",
          single: "置换（Single replacement）",
          double: "复分解（Double replacement）",
        },
      }
    : {
        goal: "Goal: Understand the basic pipeline of “sequence → classification” (an analogy to BERT)",
        desc: "Real work uses BERT to learn representations from massive reaction datasets. Here we mimic it with a toy similarity model: tokenize SMILES → aggregate to a sequence vector → classify.",
        reset: "Reset",
        pick: "Pick an input reaction",
        input: "Input sequence (with CLS)",
        predicted: "Predicted type",
        scores: "Similarity to type prototypes (toy)",
        important: "Tokens the model “attends” to (toy explanation)",
        cls: "CLS: a vector meant to represent the whole sequence",
        note:
          "For teaching: we use character/substring n-grams to mimic “contextual representation”. BERT’s key advantage is bidirectional context and large-scale pretraining for stronger embeddings.",
        types: {
          combination: "Combination",
          decomposition: "Decomposition",
          single: "Single replacement",
          double: "Double replacement",
        },
      };

  const examples: Example[] = [
    { id: "ex1", title: { en: "Substitution-like", zh: "取代反应（类比）" }, type: "single", smiles: "CCBr>>CCO" },
    { id: "ex2", title: { en: "Addition-like", zh: "化合反应（类比）" }, type: "combination", smiles: "C=C.O>>CCO" },
    { id: "ex3", title: { en: "Decomposition-like", zh: "分解反应（类比）" }, type: "decomposition", smiles: "CC(=O)O>>CC(=O).O" },
    { id: "ex4", title: { en: "Exchange-like", zh: "复分解反应（类比）" }, type: "double", smiles: "NaCl.O=C(O)C>>NaO=C(O)C.Cl" },
  ];

  const [exampleId, setExampleId] = useState(examples[0].id);

  const reset = () => setExampleId(examples[0].id);

  const ex = examples.find((e) => e.id === exampleId) ?? examples[0];
  const serialized = `[CLS] ${ex.smiles}`;

  const sim = useMemo(() => {
    const tokens = tokenize(ex.smiles).map((x) => x.text);
    const vec = featurize(tokens);

    const prototypes: Record<ReactionType, string[]> = {
      combination: ["C", "=", ".", ">>", "C", "C", "O"],
      decomposition: ["(", ")", "=", "O", ">>", ".", "O"],
      single: ["Br", "Cl", ">>", "O"],
      double: ["Na", "Cl", ".", ">>", ".", "Na"],
    };

    const scores = (Object.keys(prototypes) as ReactionType[]).map((k) => {
      const pvec = featurize(prototypes[k]);
      const score = cosine(vec, pvec);
      return { type: k, score };
    });
    scores.sort((a, b) => b.score - a.score);
    const predicted = scores[0]?.type ?? "combination";

    // Toy “importance”: remove a token and see score drop for predicted class.
    const importances = tokens.map((tok, idx) => {
      const removed = tokens.slice(0, idx).concat(tokens.slice(idx + 1));
      const rvec = featurize(removed);
      const pvec = featurize(prototypes[predicted]);
      const base = cosine(vec, pvec);
      const drop = base - cosine(rvec, pvec);
      return { tok, idx, drop };
    });
    importances.sort((a, b) => b.drop - a.drop);
    const top = importances.slice(0, 8);

    return { tokens, scores, predicted, top };
  }, [ex.smiles]);

  const predictedLabel = t.types[sim.predicted];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
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

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.pick}
            <select
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
              value={exampleId}
              onChange={(e) => setExampleId(e.target.value)}
            >
              {examples.map((x) => (
                <option key={x.id} value={x.id}>
                  {(isZh ? x.title.zh : x.title.en) + " · " + t.types[x.type]}
                </option>
              ))}
            </select>
          </label>

          <div className="rounded-xl border border-dashed border-slate-200 bg-white p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.input}</p>
            <p className="mt-2 break-all font-mono text-xs text-slate-800">{serialized}</p>
            <p className="mt-2 text-xs text-slate-600">{t.cls}</p>
          </div>

          <div className="rounded-xl border border-dashed border-slate-200 bg-white p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.predicted}</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{predictedLabel}</p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.scores}</p>
              <div className="mt-2 space-y-2">
                {sim.scores.map((s) => (
                  <div key={s.type} className="rounded-lg bg-white px-3 py-2 text-xs text-slate-700 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">{t.types[s.type]}</span>
                      <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">
                        {s.score.toFixed(3)}
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-indigo-500" style={{ width: `${clamp(s.score * 100, 0, 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.important}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sim.top.map((x) => (
                  <span key={`${x.tok}-${x.idx}`} className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-800">
                    {x.tok}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-600">
                {isZh ? "这些 token 对“该类别相似度”贡献更大。" : "These tokens contribute more to the predicted-class similarity."}
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
            {t.note}
          </div>
        </div>
      </div>
    </div>
  );
}
