import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Option = {
  id: string;
  titleZh: string;
  titleEn: string;
  content?: boolean;
};

const contentOptions: Option[] = [
  { id: "city", titleZh: "城市天际线", titleEn: "City skyline", content: true },
  { id: "forest", titleZh: "森林小径", titleEn: "Forest path", content: true },
  { id: "portrait", titleZh: "人物肖像", titleEn: "Portrait", content: true },
];

const styleOptions: Option[] = [
  { id: "vangogh", titleZh: "梵高 · 星夜", titleEn: "Van Gogh · Starry Night" },
  { id: "munch", titleZh: "蒙克 · 吶喊", titleEn: "Munch · The Scream" },
  { id: "turner", titleZh: "特纳 · 海景", titleEn: "Turner · Seascape" },
  { id: "ink", titleZh: "水墨 · 留白", titleEn: "Ink wash · Minimal" },
];

export function StyleTransferDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [contentId, setContentId] = useState("city");
  const [styleId, setStyleId] = useState("vangogh");
  const [styleWeight, setStyleWeight] = useState(0.6);

  const caption = useMemo(() => {
    const c = contentOptions.find((o) => o.id === contentId)!;
    const s = styleOptions.find((o) => o.id === styleId)!;
    return isZh
      ? `内容：${c.titleZh}；风格：${s.titleZh}；风格占比 ${Math.round(styleWeight * 100)}%。`
      : `Content: ${c.titleEn}; Style: ${s.titleEn}; Style weight ${Math.round(styleWeight * 100)}%.`;
  }, [contentId, styleId, styleWeight, isZh]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "风格迁移演示" : "Style Transfer Demo"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "内容 + 风格 = 新图像" : "Content + Style → New Image"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "选择内容与风格，调整风格权重，查看合成描述。"
              : "Pick content and style, tune the style weight, and see the synthesized description."}
          </p>
        </div>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          CNN · Gram Matrix
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="space-y-2 rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "内容图像" : "Content image"}</p>
          {contentOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setContentId(opt.id)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                contentId === opt.id
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {isZh ? opt.titleZh : opt.titleEn}
            </button>
          ))}
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "风格图像" : "Style image"}</p>
          {styleOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setStyleId(opt.id)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                styleId === opt.id
                  ? "border-indigo-600 bg-indigo-50 text-indigo-800"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {isZh ? opt.titleZh : opt.titleEn}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "风格权重" : "Style weight"}</p>
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>{isZh ? "更强调内容" : "More content"}</span>
            <span className="font-semibold text-slate-900">{Math.round(styleWeight * 100)}%</span>
            <span>{isZh ? "更强调风格" : "More style"}</span>
          </div>
          <input
            type="range"
            min={0.2}
            max={0.8}
            step={0.05}
            value={styleWeight}
            onChange={(e) => setStyleWeight(parseFloat(e.target.value))}
            className="mt-2 w-full accent-indigo-600"
          />
          <div className="mt-3 rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
            <p>{caption}</p>
            <p className="mt-2">
              {isZh
                ? "卷积层激活代表内容；激活相关矩阵代表风格。优化随机图像，使二者同时匹配。"
                : "Conv activations carry content; Gram matrices carry style. Optimize a noise image to match both."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
