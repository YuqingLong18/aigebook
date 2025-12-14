import { useMemo, useState } from "react";

type AdversarialNoiseDemoProps = {
  lang: "en" | "zh";
};

export function AdversarialNoiseDemo({ lang }: AdversarialNoiseDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：微小扰动如何欺骗模型",
          desc: "调节噪声与对抗贴片，观察模型预测与置信度变化。",
          reset: "重置",
          noise: "噪声强度",
          patch: "添加对抗贴片",
          rotate: "轻微旋转",
          prediction: "模型预测",
          note: "人眼几乎看不出的变化，可能让模型从“猪”变成“飞机”并且信心满满。",
        }
      : {
          goal: "Goal: Tiny perturbations can flip a model",
          desc: "Adjust noise and patches to see how predictions/confidence shift.",
          reset: "Reset",
          noise: "Noise level",
          patch: "Add adversarial patch",
          rotate: "Slight rotation",
          prediction: "Model prediction",
          note: "Changes imperceptible to humans can push a model from “pig” to “plane” with high confidence.",
        };

  const [noise, setNoise] = useState(8);
  const [patch, setPatch] = useState(false);
  const [rotation, setRotation] = useState(0);

  const result = useMemo(() => {
    const baseScore = Math.max(0.05, 0.92 - noise * 0.015 - rotation * 0.003);
    const targetScore = 0.05 + noise * 0.02 + (patch ? 0.28 : 0) + rotation * 0.004;
    const spillScore = 0.03 + (noise > 18 ? 0.04 : 0) + rotation * 0.001;

    const scores = [
      { label: lang === "zh" ? "猫" : "cat", score: baseScore },
      { label: lang === "zh" ? "飞机" : "plane", score: targetScore },
      { label: lang === "zh" ? "交通灯" : "traffic light", score: spillScore },
    ];
    const total = scores.reduce((sum, s) => sum + s.score, 0);
    const probs = scores.map((s) => ({ ...s, prob: Math.round((s.score / total) * 1000) / 10 }));
    const predicted = probs.reduce((best, cur) => (cur.prob > best.prob ? cur : best), probs[0]);
    return { probs, predicted };
  }, [lang, noise, patch, rotation]);

  const reset = () => {
    setNoise(8);
    setPatch(false);
    setRotation(0);
  };

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
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.noise}
            <input
              type="range"
              min={0}
              max={40}
              value={noise}
              onChange={(e) => setNoise(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={40}
              aria-valuenow={noise}
            />
            <span className="text-xs text-slate-500">{noise}</span>
          </label>

          <label className="flex cursor-pointer items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm">
            <span>{t.patch}</span>
            <input
              type="checkbox"
              checked={patch}
              onChange={(e) => setPatch(e.target.checked)}
              className="h-4 w-4 accent-brand-500"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.rotate}
            <input
              type="range"
              min={0}
              max={20}
              value={rotation}
              onChange={(e) => setRotation(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={20}
              aria-valuenow={rotation}
            />
            <span className="text-xs text-slate-500">{rotation.toFixed(0)}°</span>
          </label>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <div className="rounded-lg bg-white px-3 py-2 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.prediction}</p>
            <p className="text-lg font-semibold text-slate-900">
              {result.predicted.label} · {result.predicted.prob}%
            </p>
          </div>
          <div className="space-y-2">
            {result.probs.map((p) => (
              <div key={p.label}>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>{p.label}</span>
                  <span className="text-slate-900">{p.prob}%</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-rose-400 to-amber-500 transition-all"
                    style={{ width: `${Math.min(100, p.prob)}%` }}
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">{t.note}</div>
        </div>
      </div>
    </div>
  );
}
