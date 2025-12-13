import { useMemo, useState } from "react";

type DopplerShiftDemoProps = {
  lang: "en" | "zh";
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function dopplerObservedFrequency(f0: number, vRel: number, c: number) {
  const denom = c - vRel;
  if (denom <= 1e-6) return Infinity;
  return f0 * (c / denom);
}

export function DopplerShiftDemo({ lang }: DopplerShiftDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：掌握多普勒效应——相对运动会改变观测到的频率",
        desc: "调节相对速度（朝向为正）与“耳朵摆动”，观察频率如何上移/下移，并理解蝙蝠如何利用这一线索定位。",
        reset: "重置",
        f0: "原始频率 f0（Hz）",
        v: "相对速度 v（m/s，朝向为正）",
        c: "声速 c（m/s）",
        fObs: "观测频率 f′（Hz）",
        shift: "频移（Hz）",
        ear: "模拟耳廓摆动（产生瞬时速度）",
        amp: "摆动峰值速度（m/s）",
        rate: "摆动频率（Hz）",
        range: "摆动造成的频率范围（Hz）",
        note:
          "简化公式：f′ = f0 · c / (c − v)。当相对速度朝向你（v>0）时，频率升高；远离（v<0）时，频率降低。",
      }
    : {
        goal: "Goal: Learn the Doppler effect—relative motion shifts perceived frequency",
        desc: "Adjust relative velocity (toward is positive) and add “ear oscillation” to see frequency rise/fall, echoing how bats exploit Doppler cues.",
        reset: "Reset",
        f0: "Base frequency f0 (Hz)",
        v: "Relative velocity v (m/s, toward is +)",
        c: "Speed of sound c (m/s)",
        fObs: "Observed frequency f′ (Hz)",
        shift: "Shift (Hz)",
        ear: "Ear oscillation (instant velocity)",
        amp: "Peak velocity (m/s)",
        rate: "Oscillation rate (Hz)",
        range: "Frequency range due to oscillation (Hz)",
        note:
          "Simplified formula: f′ = f0 · c / (c − v). Toward motion (v>0) raises frequency; away (v<0) lowers it.",
      };

  const [f0, setF0] = useState(3000);
  const [vRel, setVRel] = useState(8);
  const [c, setC] = useState(343);
  const [amp, setAmp] = useState(3);
  const [rate, setRate] = useState(12);

  const reset = () => {
    setF0(3000);
    setVRel(8);
    setC(343);
    setAmp(3);
    setRate(12);
  };

  const calc = useMemo(() => {
    const f = clamp(f0, 100, 12000);
    const vv = clamp(vRel, -40, 40);
    const cc = clamp(c, 320, 360);
    const observed = dopplerObservedFrequency(f, vv, cc);
    const shift = observed - f;

    const a = clamp(amp, 0, 15);
    const r = clamp(rate, 0, 25);
    const minF = dopplerObservedFrequency(f, vv - a, cc);
    const maxF = dopplerObservedFrequency(f, vv + a, cc);
    const range = [Math.min(minF, maxF), Math.max(minF, maxF)] as const;

    const samples: number[] = [];
    for (let i = 0; i < 24; i++) {
      const phase = (i / 24) * Math.PI * 2;
      const vInst = vv + a * Math.sin(phase);
      const fInst = dopplerObservedFrequency(f, vInst, cc);
      samples.push(fInst);
    }

    const showRate = r === 0 ? 0 : r;
    return { f, vv, cc, observed, shift, range, samples, a, r: showRate };
  }, [amp, c, f0, rate, vRel]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
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

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.f0}
            <input
              type="range"
              min={100}
              max={12000}
              step={50}
              value={f0}
              onChange={(e) => setF0(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{calc.f}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.v}
            <input
              type="range"
              min={-40}
              max={40}
              step={1}
              value={vRel}
              onChange={(e) => setVRel(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{calc.vv}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.c}
            <input
              type="range"
              min={320}
              max={360}
              step={1}
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{calc.cc}</span>
          </label>

          <div className="mt-2 rounded-xl border border-dashed border-slate-200 bg-white p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.ear}</p>
            <label className="mt-2 block text-sm font-semibold text-slate-700">
              {t.amp}
              <input
                type="range"
                min={0}
                max={15}
                step={0.5}
                value={amp}
                onChange={(e) => setAmp(Number(e.target.value))}
                className="mt-2 w-full accent-brand-500"
              />
              <span className="text-xs text-slate-500">{calc.a.toFixed(1)}</span>
            </label>
            <label className="mt-2 block text-sm font-semibold text-slate-700">
              {t.rate}
              <input
                type="range"
                min={0}
                max={25}
                step={1}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="mt-2 w-full accent-brand-500"
              />
              <span className="text-xs text-slate-500">{calc.r}</span>
            </label>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.fObs}</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                {Number.isFinite(calc.observed) ? calc.observed.toFixed(0) : "∞"}
              </p>
              <p className="mt-2 text-xs text-slate-600">
                {t.shift}:{" "}
                <span className="font-semibold text-slate-900">
                  {Number.isFinite(calc.shift) ? `${calc.shift >= 0 ? "+" : ""}${calc.shift.toFixed(0)}` : "∞"}
                </span>
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.range}</p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {Number.isFinite(calc.range[0]) ? calc.range[0].toFixed(0) : "∞"}{" "}
                <span className="text-slate-500">→</span>{" "}
                {Number.isFinite(calc.range[1]) ? calc.range[1].toFixed(0) : "∞"}
              </p>
              <p className="mt-2 text-xs text-slate-600">
                {isZh
                  ? "耳朵摆动把频率“编码”成随时间变化的特征。"
                  : "Ear motion encodes direction into a time-varying frequency pattern."}
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {isZh ? "一周期内的瞬时频率（示意）" : "Instant frequency across one cycle (illustration)"}
            </p>
            <Sparkline values={calc.samples} />
          </div>

          <div className="mt-3 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
            {t.note}
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline({ values }: { values: number[] }) {
  const finite = values.filter((v) => Number.isFinite(v));
  const min = finite.length ? Math.min(...finite) : 0;
  const max = finite.length ? Math.max(...finite) : 1;
  const range = Math.max(1e-6, max - min);
  const pts = values
    .map((v, i) => {
      const x = 8 + (i / (values.length - 1)) * 84;
      const y = 44 - ((Number.isFinite(v) ? v : max) - min) / range * 28;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 56" className="mt-2 h-36 w-full">
      <rect x="2" y="2" width="96" height="52" rx="10" fill="#ffffff" stroke="#e2e8f0" />
      <polyline points={pts} fill="none" stroke="#6366f1" strokeWidth="2" />
      <text x="8" y="52" fontSize="6" fill="#94a3b8">
        min {min.toFixed(0)}
      </text>
      <text x="70" y="52" fontSize="6" fill="#94a3b8">
        max {max.toFixed(0)}
      </text>
    </svg>
  );
}

