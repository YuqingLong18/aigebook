import { useState } from "react";

type Props = {
  lang: "en" | "zh";
};

export function InfoCocoonRiskDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [personalization, setPersonalization] = useState(0.7);

  const diversity = Math.max(0, 1 - personalization);
  const risk =
    personalization > 0.75
      ? isZh
        ? "高风险：信息视野缩窄，易形成回音室。"
        : "High risk: narrowed exposure, echo chamber likely."
      : personalization < 0.4
        ? isZh
          ? "低风险：多样信息，但相关性可能下降。"
          : "Low risk: diverse info, though relevance may drop."
        : isZh
          ? "中等：保持一定多样性与相关性。"
          : "Medium: some balance of diversity and relevance.";

  return (
    <div className="rounded-2xl border border-rose-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
            {isZh ? "信息茧房风险" : "Information Cocoon Risk"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "个性化程度 vs. 信息多样性" : "Personalization vs. Diversity"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "调节个性化强度，观察多样性与风险提示。"
              : "Adjust personalization strength to see diversity and risk hints."}
          </p>
        </div>
        <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
          {isZh ? "伦理" : "Ethics"}
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-rose-100 p-3">
          <p className="text-xs font-semibold text-slate-500">
            {isZh ? "个性化强度" : "Personalization strength"}
          </p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={personalization}
            onChange={(e) => setPersonalization(parseFloat(e.target.value))}
            className="mt-2 w-full accent-rose-600"
          />
          <p className="mt-2 text-sm font-semibold text-slate-900">{Math.round(personalization * 100)}%</p>
          <p className="text-xs text-slate-600">
            {isZh ? "越高越贴合兴趣，也越易陷入单一视角。" : "Higher = more tailored, but risk of narrow viewpoint."}
          </p>
        </div>

        <div className="md:col-span-2 rounded-xl border border-rose-100 bg-rose-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
            {isZh ? "评估" : "Assessment"}
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-white p-3 shadow-sm">
              <p className="text-xs text-slate-500">{isZh ? "相关性" : "Relevance"}</p>
              <p className="text-2xl font-semibold text-slate-900">{Math.round(personalization * 100)}%</p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm">
              <p className="text-xs text-slate-500">{isZh ? "多样性" : "Diversity"}</p>
              <p className="text-2xl font-semibold text-slate-900">{Math.round(diversity * 100)}%</p>
            </div>
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-900">{risk}</p>
          <p className="mt-2 text-xs text-slate-700">
            {isZh
              ? "解决思路：引入多样性指标、透明度、用户自选开关，避免过度个性化。"
              : "Mitigate via diversity constraints, transparency, user controls to avoid over-personalization."}
          </p>
        </div>
      </div>
    </div>
  );
}
