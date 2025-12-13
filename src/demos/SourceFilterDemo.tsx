import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

const excitations = [
  { id: "voiced", zh: "有声音脉冲", en: "Voiced pulses", pitch: 180 },
  { id: "unvoiced", zh: "无声音噪声", en: "Unvoiced noise", pitch: 0 },
];

const tracts = [
  { id: "front", zh: "前舌音 /i/", en: "Front /i/", f1: 300, f2: 2300 },
  { id: "back", zh: "后舌音 /u/", en: "Back /u/", f1: 350, f2: 900 },
  { id: "open", zh: "开口音 /a/", en: "Open /a/", f1: 750, f2: 1100 },
];

export function SourceFilterDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [excitation, setExcitation] = useState(excitations[0]);
  const [tract, setTract] = useState(tracts[0]);

  const summary = useMemo(() => {
    if (excitation.id === "unvoiced") {
      return isZh
        ? "选择了无声噪声激励，适用于 /s/ 等清辅音；声道决定噪声频带。"
        : "Unvoiced noise excitation suits consonants like /s/; the tract shapes the noise bands.";
    }
    return isZh
      ? `激励基频 ${excitation.pitch} Hz，声道共振 (${tract.f1}/${tract.f2}) 形成元音特征。`
      : `Excitation pitch ${excitation.pitch} Hz; tract resonances (${tract.f1}/${tract.f2}) yield the vowel shape.`;
  }, [excitation, tract, isZh]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "声源-声道模型" : "Source–Filter Model"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "调节激励与声道，合成语音特征" : "Tune excitation and tract to synthesize speech cues"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "经典 TTS 先选激励（声源），再由声道共振调制输出。"
              : "Classic TTS picks an excitation (source) then shapes it with tract resonances (filter)."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {isZh ? "传统范式" : "Classic paradigm"}
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="space-y-2 rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "声源" : "Source"}</p>
          {excitations.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => setExcitation(e)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                excitation.id === e.id
                  ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {isZh ? e.zh : e.en}
            </button>
          ))}
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "声道滤波" : "Vocal tract"}</p>
          {tracts.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTract(t)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                tract.id === t.id
                  ? "border-indigo-500 bg-indigo-50 text-indigo-800"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {isZh ? t.zh : t.en} · F1 {t.f1} / F2 {t.f2} Hz
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "合成结果（概念）" : "Synthesis (conceptual)"}
          </p>
          <p className="mt-2 text-slate-900">
            {excitation.id === "unvoiced"
              ? isZh
                ? "气流噪声 → 声道滤波 → 清辅音样式"
                : "Noise airflow → tract filter → unvoiced consonant"
              : isZh
                ? "脉冲声源 → 声道共振 → 元音音色"
                : "Pulse source → tract resonances → vowel timbre"}
          </p>
          <p className="mt-2 text-slate-700">{summary}</p>
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? "端到端模型跳过显式声源/声道建模，直接从文本生成波形。"
              : "End-to-end TTS skips explicit source/tract modeling, generating waveforms directly."}
          </p>
        </div>
      </div>
    </div>
  );
}
