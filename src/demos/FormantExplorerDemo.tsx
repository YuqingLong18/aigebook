import { useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Vowel = {
  id: string;
  label: string;
  f1: number;
  f2: number;
  descZh: string;
  descEn: string;
};

const vowels: Vowel[] = [
  { id: "a", label: "/a/", f1: 730, f2: 1090, descZh: "张口，舌位居中略前", descEn: "Open mouth, central-front tongue" },
  { id: "i", label: "/i/", f1: 270, f2: 2290, descZh: "小口，舌前高位", descEn: "Close mouth, high-front tongue" },
  { id: "u", label: "/u/", f1: 300, f2: 870, descZh: "小口，舌后高位", descEn: "Close mouth, high-back tongue" },
  { id: "e", label: "/e/", f1: 530, f2: 1840, descZh: "半开，舌前", descEn: "Half-open, front tongue" },
  { id: "o", label: "/o/", f1: 570, f2: 840, descZh: "半开，舌后", descEn: "Half-open, back tongue" },
];

export function FormantExplorerDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [vowel, setVowel] = useState<Vowel>(vowels[0]);
  const [noise, setNoise] = useState(0);

  const f1 = Math.max(200, vowel.f1 + noise);
  const f2 = Math.max(600, vowel.f2 + noise * -1);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "共振峰演示" : "Formant demo"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "口型改变 → 共振峰变化" : "Vocal tract shape → Formants"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "选择元音，查看 F1/F2（声道共振）如何编码语音内容。"
              : "Pick a vowel and see how F1/F2 (vocal-tract resonances) encode speech content."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          F1 / F2
        </span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="space-y-2 rounded-xl border border-slate-200 p-3">
          {vowels.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setVowel(v)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                vowel.id === v.id
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {v.label} · {isZh ? v.descZh : v.descEn}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">
            {isZh ? "声道扰动（噪声/口型变化）" : "Perturbation (noise/shape shift)"}
          </p>
          <input
            type="range"
            min={-150}
            max={150}
            step={10}
            value={noise}
            onChange={(e) => setNoise(parseInt(e.target.value, 10))}
            className="mt-2 w-full accent-indigo-600"
          />
          <p className="mt-2 text-xs text-slate-600">
            {isZh ? "模拟说话人差异或噪声对共振峰的影响。" : "Simulate speaker variability/noise on formants."}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "观察" : "Observation"}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-lg bg-white p-3 text-center shadow-sm">
              <p className="text-xs text-slate-500">F1 (Hz)</p>
              <p className="text-xl font-semibold text-slate-900">{Math.round(f1)}</p>
            </div>
            <div className="rounded-lg bg-white p-3 text-center shadow-sm">
              <p className="text-xs text-slate-500">F2 (Hz)</p>
              <p className="text-xl font-semibold text-slate-900">{Math.round(f2)}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-700">
            {isZh
              ? "F1 反映开口度，F2 反映舌位前后。共振峰模式就是语音内容的“指纹”。"
              : "F1 tracks mouth openness; F2 tracks tongue front/back. Formant patterns are fingerprints of vowel identity."}
          </p>
        </div>
      </div>
    </div>
  );
}
