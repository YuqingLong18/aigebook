import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Tag = "tech" | "fashion" | "fitness" | "travel" | "finance";

const items: { id: string; title: string; tags: Tag[] }[] = [
  { id: "i1", title: "智能手机测评", tags: ["tech"] },
  { id: "i2", title: "运动手表", tags: ["tech", "fitness"] },
  { id: "i3", title: "瑜伽裤新品", tags: ["fashion", "fitness"] },
  { id: "i4", title: "巴厘岛旅行攻略", tags: ["travel"] },
  { id: "i5", title: "理财基础指南", tags: ["finance"] },
  { id: "i6", title: "女士春季连衣裙", tags: ["fashion"] },
  { id: "i7", title: "徒步登山包", tags: ["travel", "fitness"] },
];

export function RecoSimilarityDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [prefs, setPrefs] = useState<Tag[]>(["tech", "fitness"]);

  const toggle = (tag: Tag) => {
    setPrefs((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const ranked = useMemo(() => {
    return items
      .map((item) => {
        const overlap = item.tags.filter((t) => prefs.includes(t)).length;
        return { ...item, score: overlap / item.tags.length };
      })
      .sort((a, b) => b.score - a.score);
  }, [prefs]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "相似度推荐" : "Similarity Recommendation"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "选择兴趣标签，查看推荐排序" : "Pick interests to see ranked recommendations"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "基于标签重叠度计算相似度，分数越高越靠前。"
              : "Similarity = tag overlap; higher scores rank higher."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {isZh ? "协同/嵌入理念" : "Similarity core"}
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="space-y-2 rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "兴趣标签" : "Interest tags"}</p>
          {(["tech", "fashion", "fitness", "travel", "finance"] as Tag[]).map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggle(tag)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                prefs.includes(tag)
                  ? "border-indigo-600 bg-indigo-50 text-indigo-800"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {isZh
                ? tag === "tech"
                  ? "科技"
                  : tag === "fashion"
                    ? "时尚"
                    : tag === "fitness"
                      ? "运动"
                      : tag === "travel"
                        ? "旅行"
                        : "理财"
                : tag}
            </button>
          ))}
        </div>

        <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "推荐列表" : "Recommendations"}
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            {ranked.map((item) => (
              <li key={item.id} className="rounded-lg bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">{item.title}</span>
                  <span className="text-xs font-semibold text-slate-700">{(item.score * 100).toFixed(0)}%</span>
                </div>
                <p className="text-xs text-slate-600">
                  {isZh ? "标签" : "Tags"}: {item.tags.join(", ")}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-700">
            {isZh
              ? "实际系统常用嵌入向量/协同过滤计算相似度，逻辑与此示例一致。"
              : "Real systems use embeddings/collaborative filtering to compute similarity; logic matches this demo."}
          </p>
        </div>
      </div>
    </div>
  );
}
