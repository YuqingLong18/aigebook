import { useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Attack = {
  id: string;
  titleZh: string;
  titleEn: string;
  riskZh: string;
  riskEn: string;
  defensesZh: string[];
  defensesEn: string[];
};

const attacks: Attack[] = [
  {
    id: "photo",
    titleZh: "照片攻击",
    titleEn: "Photo replay",
    riskZh: "使用打印照或屏幕照片欺骗摄像头，静态但常见。",
    riskEn: "Printed or on-screen photos; static but common in unattended kiosks.",
    defensesZh: ["活体检测：眨眼/摇头", "红外/深度摄像头", "纹理分析与反射检查"],
    defensesEn: ["Liveness: blink/turn prompts", "IR/depth cameras", "Texture/reflectance checks"],
  },
  {
    id: "video",
    titleZh: "视频伪造",
    titleEn: "Video forgery",
    riskZh: "深度伪造实时播放，可模拟动作与表情。",
    riskEn: "Deepfake videos with live playback, matching actions and expressions.",
    defensesZh: ["随机动作指令", "时间一致性检测", "光学流异常检测"],
    defensesEn: ["Randomized prompts", "Temporal consistency checks", "Optical-flow anomaly detection"],
  },
  {
    id: "adv",
    titleZh: "对抗眼镜/妆容",
    titleEn: "Adversarial glasses/makeup",
    riskZh: "利用对抗样本迷惑嵌入向量，造成身份误判。",
    riskEn: "Adversarial patterns push embeddings to wrong identities.",
    defensesZh: ["对抗鲁棒训练", "多模态验证（刷卡+刷脸）", "阈值自适应与人工复核"],
    defensesEn: ["Adversarially robust training", "Multimodal factors (badge + face)", "Adaptive thresholds + human review"],
  },
];

export function SpoofingRiskDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [selected, setSelected] = useState<Attack>(attacks[0]);

  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
            {isZh ? "安全演示" : "Security Demo"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "人脸识别攻击与防护" : "Face Recognition Attacks & Defenses"}
          </h3>
          <p className="text-sm text-slate-700">
            {isZh
              ? "选择一种攻击方式，查看风险与对应防护思路。"
              : "Pick an attack type to see risks and matching defenses."}
          </p>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-700">
          {isZh ? "隐私与安全" : "Privacy & Security"}
        </span>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="space-y-2">
          {attacks.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setSelected(a)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                selected.id === a.id
                  ? "border-amber-500 bg-white text-amber-800 shadow-sm"
                  : "border-amber-200 bg-amber-50 hover:border-amber-300",
              ].join(" ")}
            >
              {isZh ? a.titleZh : a.titleEn}
            </button>
          ))}
        </div>

        <div className="md:col-span-2 rounded-xl border border-white bg-white p-4 shadow-inner">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
            {isZh ? "风险描述" : "Risk"}
          </p>
          <p className="mt-1 text-sm text-slate-800">{isZh ? selected.riskZh : selected.riskEn}</p>

          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            {isZh ? "防护策略" : "Mitigations"}
          </p>
          <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-slate-800">
            {(isZh ? selected.defensesZh : selected.defensesEn).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-600">
            {isZh
              ? "提示：实际系统常将阈值、活体检测、多因素认证组合，以平衡体验与安全。"
              : "Note: Production systems mix thresholds, liveness, and multi-factor checks to balance UX and safety."}
          </p>
        </div>
      </div>
    </div>
  );
}
