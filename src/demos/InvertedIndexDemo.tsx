import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Doc = {
  id: string;
  text: string;
  keywords: string[];
};

const docs: Doc[] = [
  { id: "d1", text: "Google 创始人拉里·佩奇与谢尔盖·布林", keywords: ["Google", "创始人"] },
  { id: "d2", text: "伯纳斯-李发明了万维网", keywords: ["万维网", "发明"] },
  { id: "d3", text: "百度是中国的搜索引擎公司", keywords: ["百度", "搜索", "公司"] },
  { id: "d4", text: "佩奇和布林在斯坦福相识", keywords: ["佩奇", "布林", "斯坦福"] },
];

export function InvertedIndexDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [query, setQuery] = useState("Google 创始人");

  const terms = useMemo(() => query.split(/\s+/).filter(Boolean), [query]);

  const matches = useMemo(() => {
    const lowered = terms;
    return docs.filter((d) => lowered.every((t) => d.keywords.some((k) => k.includes(t))));
  }, [terms]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "倒排索引" : "Inverted Index"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "关键词 → 文档" : "Keywords → Documents"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "输入关键词，查看倒排索引如何快速定位文档。"
              : "Enter keywords to see how an inverted index finds documents quickly."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          Search core
        </span>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "查询" : "Query"}</p>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder={isZh ? "例如：Google 创始人" : "e.g., Google founder"}
          />
          <p className="mt-2 text-xs text-slate-600">
            {isZh ? "以空格分隔关键词，执行交集查询。" : "Space-separated terms; intersection search."}
          </p>
        </div>

        <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "命中文档" : "Matched documents"}
          </p>
          {matches.length === 0 ? (
            <p className="mt-2 text-sm text-slate-700">{isZh ? "未命中" : "No matches"}</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {matches.map((d) => (
                <li key={d.id} className="rounded-lg bg-white p-3 text-sm shadow-sm">
                  <p className="font-semibold text-slate-900">{d.id}</p>
                  <p className="text-slate-700">{d.text}</p>
                  <p className="text-xs text-slate-500">
                    {isZh ? "关键词" : "Keywords"}: {d.keywords.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
