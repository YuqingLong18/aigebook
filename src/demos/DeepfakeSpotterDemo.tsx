import { useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Clue = {
  id: string;
  clueZh: string;
  clueEn: string;
  reasonZh: string;
  reasonEn: string;
};

const clues: Clue[] = [
  {
    id: "eyes",
    clueZh: "瞳孔反光不一致",
    clueEn: "Mismatched eye reflections",
    reasonZh: "真实眼睛受光源约束，反光位置对称；伪造常忽略几何一致性。",
    reasonEn: "Real eyes share consistent specular highlights; fakes often miss geometric consistency.",
  },
  {
    id: "ear",
    clueZh: "耳环/耳朵纹理模糊",
    clueEn: "Blurry earrings/ears",
    reasonZh: "GAN 生成侧脸细节薄弱，耳部常出现模糊或形变。",
    reasonEn: "Side-face details are hard; ears and jewelry often blur or warp in fakes.",
  },
  {
    id: "hair",
    clueZh: "发丝与背景融合",
    clueEn: "Hair merges into background",
    reasonZh: "细发丝边缘难模拟，常与背景融为一体或出现断裂。",
    reasonEn: "Fine hair edges are tricky; fakes may melt into background or break apart.",
  },
  {
    id: "sync",
    clueZh: "嘴型与语音不同步",
    clueEn: "Lip sync off",
    reasonZh: "表情驱动不精确，嘴型张合与语音节奏错位。",
    reasonEn: "Expression transfer may drift; lip motion can lag speech rhythm.",
  },
];

export function DeepfakeSpotterDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [selected, setSelected] = useState<string[]>(["eyes", "hair"]);

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const verdict =
    selected.length >= 3
      ? isZh
        ? "高风险：多处细节破绽，需进一步人工核验。"
        : "High risk: multiple artifacts—escalate for human review."
      : selected.length === 2
        ? isZh
          ? "可疑：有若干异常，建议多模态验证。"
          : "Suspicious: some anomalies—use multimodal checks."
        : isZh
          ? "低风险：未发现明显伪造线索，但仍需结合来源核实。"
          : "Lower risk: no strong clues, but verify source.";

  return (
    <div className="rounded-2xl border border-rose-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
            {isZh ? "伪造检测" : "Forgery detection"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "深度伪造线索检查清单" : "Deepfake Clue Checklist"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "勾选在视频/图片中观察到的异常，生成人工核验建议。"
              : "Tick anomalies you observe in a video/image to generate a review recommendation."}
          </p>
        </div>
        <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
          {isZh ? "取证思路" : "Forensics"}
        </span>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="space-y-2">
          {clues.map((c) => (
            <label
              key={c.id}
              className={[
                "flex cursor-pointer items-start gap-2 rounded-lg border px-3 py-2 text-sm transition",
                selected.includes(c.id)
                  ? "border-rose-500 bg-rose-50 text-rose-800"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              <input
                type="checkbox"
                checked={selected.includes(c.id)}
                onChange={() => toggle(c.id)}
                className="mt-1 h-4 w-4 accent-rose-600"
              />
              <div>
                <p className="font-semibold">{isZh ? c.clueZh : c.clueEn}</p>
                <p className="text-xs text-slate-600">{isZh ? c.reasonZh : c.reasonEn}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="md:col-span-2 rounded-xl border border-rose-100 bg-rose-50 p-4 text-sm text-rose-900">
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
            {isZh ? "检测结果" : "Assessment"}
          </p>
          <p className="mt-2 text-base font-semibold">{verdict}</p>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-rose-800">
            <li>
              {isZh
                ? "结合元数据、声纹、来源可信度，避免单一线索误判。"
                : "Combine with metadata, voiceprint, and source credibility—avoid single-clue misjudgment."}
            </li>
            <li>
              {isZh
                ? "检测模型需持续更新，以应对新型伪造手段。"
                : "Detection models must refresh frequently to keep up with new forgery tactics."}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
