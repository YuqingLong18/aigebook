import { useMemo, useState } from "react";

type SmilesTokenizerDemoProps = {
  lang: "en" | "zh";
};

type Example = {
  id: string;
  title: { en: string; zh: string };
  smiles: string;
  label: { en: string; zh: string };
};

type Token = {
  text: string;
  kind: "atom" | "bond" | "branch" | "ring" | "sep" | "other";
  hintEn: string;
  hintZh: string;
};

function tokenizeSmiles(smiles: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < smiles.length) {
    const ch = smiles[i];
    if (ch === "[" ) {
      const j = smiles.indexOf("]", i + 1);
      const text = j === -1 ? smiles.slice(i) : smiles.slice(i, j + 1);
      tokens.push({
        text,
        kind: "atom",
        hintEn: "Bracket atom (with annotations like charge).",
        hintZh: "方括号原子（可包含电荷等注释）。",
      });
      i += text.length;
      continue;
    }
    if (ch === ">" && smiles.slice(i, i + 2) === ">>") {
      tokens.push({ text: ">>", kind: "sep", hintEn: "Reactants → products separator.", hintZh: "反应分隔符：反应物 → 生成物。" });
      i += 2;
      continue;
    }
    if (ch === "(" || ch === ")") {
      tokens.push({ text: ch, kind: "branch", hintEn: "Branch (parenthesis).", hintZh: "支链（括号）。" });
      i += 1;
      continue;
    }
    if ("-=#".includes(ch)) {
      tokens.push({ text: ch, kind: "bond", hintEn: "Bond symbol.", hintZh: "键类型符号。" });
      i += 1;
      continue;
    }
    if (/[0-9]/.test(ch)) {
      tokens.push({ text: ch, kind: "ring", hintEn: "Ring closure index.", hintZh: "环闭合编号。" });
      i += 1;
      continue;
    }
    if (/[A-Za-z]/.test(ch)) {
      const two = smiles.slice(i, i + 2);
      const isTwoLetter = ["Cl", "Br", "Si", "Na", "Li", "Al", "Ca", "Fe"].includes(two);
      const text = isTwoLetter ? two : ch;
      tokens.push({ text, kind: "atom", hintEn: "Atom symbol.", hintZh: "原子符号。" });
      i += text.length;
      continue;
    }
    tokens.push({ text: ch, kind: "other", hintEn: "Other character.", hintZh: "其他字符。" });
    i += 1;
  }
  return tokens;
}

export function SmilesTokenizerDemo({ lang }: SmilesTokenizerDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：理解为什么用 SMILES 串行化后，化学反应就“像一句话”",
        desc: "选择一个反应 SMILES，观察 token（原子、键、括号、分隔符等）。这让 NLP 模型（如 BERT）能够处理化学反应分类。",
        reset: "重置",
        example: "示例反应（SMILES）",
        serialized: "序列化输入（加入 CLS）",
        tokens: "Token 视图",
        tokenHint: "Token 解释",
        cls: "CLS（序列整体表示）",
        note:
          "这里的 token 规则是教学用简化版：真实 SMILES 语法更严格，模型也会使用更细致的分词策略。",
      }
    : {
        goal: "Goal: See why SMILES serialization makes reactions look like “sentences”",
        desc: "Pick a reaction SMILES and inspect tokens (atoms, bonds, parentheses, separators). This lets NLP models (like BERT) process reaction classification.",
        reset: "Reset",
        example: "Example reaction (SMILES)",
        serialized: "Serialized input (with CLS)",
        tokens: "Token view",
        tokenHint: "Token explanation",
        cls: "CLS (sequence-level representation)",
        note:
          "This tokenizer is simplified for teaching: real SMILES grammar and tokenization are more detailed.",
      };

  const examples: Example[] = [
    {
      id: "sn1",
      title: { en: "Substitution-like", zh: "取代反应（类比）" },
      label: { en: "Single replacement (toy label)", zh: "置换反应（玩具标签）" },
      smiles: "CCBr>>CCO",
    },
    {
      id: "add",
      title: { en: "Addition-like", zh: "化合反应（类比）" },
      label: { en: "Combination (toy label)", zh: "化合反应（玩具标签）" },
      smiles: "C=C.O>>CCO",
    },
    {
      id: "split",
      title: { en: "Decomposition-like", zh: "分解反应（类比）" },
      label: { en: "Decomposition (toy label)", zh: "分解反应（玩具标签）" },
      smiles: "CC(=O)O>>CC(=O).O",
    },
    {
      id: "swap",
      title: { en: "Exchange-like", zh: "复分解反应（类比）" },
      label: { en: "Double replacement (toy label)", zh: "复分解反应（玩具标签）" },
      smiles: "NaCl.O=C(O)C>>NaO=C(O)C.Cl",
    },
  ];

  const [exampleId, setExampleId] = useState(examples[0].id);
  const [selectedToken, setSelectedToken] = useState<number | null>(null);

  const reset = () => {
    setExampleId(examples[0].id);
    setSelectedToken(null);
  };

  const ex = examples.find((e) => e.id === exampleId) ?? examples[0];
  const serialized = `[CLS] ${ex.smiles}`;

  const tokens = useMemo(() => tokenizeSmiles(ex.smiles), [ex.smiles]);
  const token = selectedToken === null ? null : tokens[selectedToken];

  const colorFor = (kind: Token["kind"]) => {
    if (kind === "atom") return "bg-sky-100 text-sky-800";
    if (kind === "bond") return "bg-amber-100 text-amber-800";
    if (kind === "branch") return "bg-violet-100 text-violet-800";
    if (kind === "sep") return "bg-emerald-100 text-emerald-800";
    if (kind === "ring") return "bg-rose-100 text-rose-800";
    return "bg-slate-100 text-slate-700";
  };

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
            {t.example}
            <select
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
              value={exampleId}
              onChange={(e) => {
                setExampleId(e.target.value);
                setSelectedToken(null);
              }}
            >
              {examples.map((x) => (
                <option key={x.id} value={x.id}>
                  {(isZh ? x.title.zh : x.title.en) + " · " + (isZh ? x.label.zh : x.label.en)}
                </option>
              ))}
            </select>
          </label>

          <div className="rounded-xl border border-dashed border-slate-200 bg-white p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.serialized}</p>
            <p className="mt-2 break-all font-mono text-xs text-slate-800">{serialized}</p>
            <p className="mt-2 text-xs text-slate-600">{t.cls}</p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.tokens}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {tokens.map((tok, idx) => (
                  <button
                    type="button"
                    key={`${tok.text}-${idx}`}
                    className={[
                      "rounded-md px-2 py-1 text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
                      colorFor(tok.kind),
                      selectedToken === idx ? "ring-2 ring-slate-900" : "hover:ring-1 hover:ring-slate-300",
                    ].join(" ")}
                    onClick={() => setSelectedToken(idx)}
                    aria-pressed={selectedToken === idx}
                  >
                    {tok.text}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.tokenHint}</p>
              {token ? (
                <div className="mt-2 space-y-2">
                  <p className="text-base font-semibold text-slate-900">{token.text}</p>
                  <p className="text-sm text-slate-700">{isZh ? token.hintZh : token.hintEn}</p>
                  <p className="text-xs text-slate-600">
                    {isZh ? "类型：" : "Kind:"}{" "}
                    <span className="font-semibold text-slate-900">{token.kind}</span>
                  </p>
                </div>
              ) : (
                <p className="mt-2 text-xs text-slate-600">
                  {isZh ? "点击一个 token 查看解释。" : "Click a token to see an explanation."}
                </p>
              )}
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

