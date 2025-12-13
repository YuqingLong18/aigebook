import { useMemo, useState } from "react";

type MultimodalFusionDemoProps = {
  lang: "en" | "zh";
};

const mods = ["text", "image", "audio", "video"] as const;
type Mod = (typeof mods)[number];

export function MultimodalFusionDemo({ lang }: MultimodalFusionDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：多模态融合带来的感知增益",
          desc: "选择输入模态，查看可执行的能力与应用示例。",
          reset: "重置",
          abilities: "能力",
          apps: "应用示例",
        }
      : {
          goal: "Goal: Perception boost from multimodal fusion",
          desc: "Pick input modalities to see unlocked abilities and applications.",
          reset: "Reset",
          abilities: "Abilities",
          apps: "Example uses",
        };

  const [selected, setSelected] = useState<Mod[]>(["text", "image"]);

  const toggle = (m: Mod) => {
    setSelected((prev) => (prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]));
  };

  const info = useMemo(() => {
    const hasImage = selected.includes("image");
    const hasAudio = selected.includes("audio");
    const hasVideo = selected.includes("video");
    const abilities: string[] = [];
    const apps: string[] = [];

    if (hasImage) {
      abilities.push(lang === "zh" ? "视觉理解" : "Visual understanding");
      apps.push(lang === "zh" ? "看图答题、几何解题" : "Image Q&A, geometry solutions");
    }
    if (hasAudio) {
      abilities.push(lang === "zh" ? "听觉理解" : "Audio comprehension");
      apps.push(lang === "zh" ? "语音助手、听诊分析" : "Voice assistant, auscultation aid");
    }
    if (hasVideo) {
      abilities.push(lang === "zh" ? "时空感知" : "Spatiotemporal perception");
      apps.push(lang === "zh" ? "场景理解、动作规划" : "Scene understanding, action planning");
    }
    if (selected.includes("text")) {
      abilities.push(lang === "zh" ? "语言推理" : "Language reasoning");
      apps.push(lang === "zh" ? "代码生成、文本问答" : "Code generation, text QA");
    }

    if (abilities.length === 0) {
      abilities.push(lang === "zh" ? "无输入，能力受限" : "No inputs, limited ability");
    }

    return { abilities: Array.from(new Set(abilities)), apps: Array.from(new Set(apps)) };
  }, [lang, selected]);

  const reset = () => setSelected(["text", "image"]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
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

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-2">
          {mods.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => toggle(m)}
              className={[
                "rounded-xl border px-3 py-2 text-sm font-semibold transition",
                selected.includes(m)
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {label(m, lang)}
            </button>
          ))}
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">{t.abilities}</p>
          <ul className="list-disc space-y-1 pl-4">
            {info.abilities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">{t.apps}</p>
          <ul className="list-disc space-y-1 pl-4">
            {info.apps.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function label(m: Mod, lang: "en" | "zh") {
  if (m === "text") return lang === "zh" ? "文本" : "Text";
  if (m === "image") return lang === "zh" ? "图像" : "Image";
  if (m === "audio") return lang === "zh" ? "音频" : "Audio";
  return lang === "zh" ? "视频" : "Video";
}
