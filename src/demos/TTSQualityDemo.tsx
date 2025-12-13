import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Method = {
  id: string;
  titleZh: string;
  titleEn: string;
  smooth: number;
  natural: number;
  flexibility: number;
  noteZh: string;
  noteEn: string;
};

const methods: Method[] = [
  {
    id: "formant",
    titleZh: "共振峰/参数合成",
    titleEn: "Formant/parametric",
    smooth: 7,
    natural: 4,
    flexibility: 5,
    noteZh: "基于声学参数，成本低但机械感强。",
    noteEn: "Uses acoustic parameters; cheap but robotic.",
  },
  {
    id: "concat",
    titleZh: "拼接合成",
    titleEn: "Concatenative",
    smooth: 6,
    natural: 7,
    flexibility: 3,
    noteZh: "录音片段拼接，真实但受库限制。",
    noteEn: "Stitches recorded units; natural yet limited to the corpus.",
  },
  {
    id: "hmm",
    titleZh: "统计（HMM）合成",
    titleEn: "Statistical (HMM)",
    smooth: 6,
    natural: 6,
    flexibility: 7,
    noteZh: "参数由模型生成，灵活但音色偏平。",
    noteEn: "Generates parameters; flexible but often flat-sounding.",
  },
  {
    id: "e2e",
    titleZh: "端到端深度合成",
    titleEn: "End-to-end neural",
    smooth: 9,
    natural: 9,
    flexibility: 9,
    noteZh: "直接生成频谱/波形，最自然、可控性强。",
    noteEn: "Directly produces spectrograms/waveforms; most natural and controllable.",
  },
];

export function TTSQualityDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [method, setMethod] = useState<Method>(methods[0]);

  const bars = useMemo(
    () => [
      { label: isZh ? "流畅度" : "Fluency", value: method.smooth },
      { label: isZh ? "自然度" : "Naturalness", value: method.natural },
      { label: isZh ? "灵活性" : "Flexibility", value: method.flexibility },
    ],
    [method, isZh],
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">TTS</p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "语音合成方法对比" : "Speech Synthesis Methods"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "切换不同技术路线，对比流畅度、自然度与灵活性。"
              : "Switch synthesis approaches and compare fluency, naturalness, and flexibility."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {isZh ? "范式演进" : "Paradigm shift"}
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="space-y-2 rounded-xl border border-slate-200 p-3">
          {methods.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMethod(m)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                method.id === m.id
                  ? "border-indigo-600 bg-indigo-50 text-indigo-800"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {isZh ? m.titleZh : m.titleEn}
            </button>
          ))}
        </div>

        <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "特性评分（概念）" : "Conceptual scores"}
          </p>
          <div className="mt-3 space-y-3">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
                  <span>{b.label}</span>
                  <span>{b.value}/10</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-white">
                  <div
                    className="h-2 rounded-full bg-indigo-500 transition-all"
                    style={{ width: `${b.value * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-900">
            {isZh ? "解析" : "Rationale"}
          </p>
          <p className="text-sm text-slate-700">{isZh ? method.noteZh : method.noteEn}</p>
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? "端到端模型通过大规模数据直接学习发音与韵律，不依赖手工规则。"
              : "End-to-end systems learn pronunciation and prosody directly from data, not handcrafted rules."}
          </p>
        </div>
      </div>
    </div>
  );
}
