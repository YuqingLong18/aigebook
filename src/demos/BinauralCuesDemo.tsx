import { useMemo, useState } from "react";

type BinauralCuesDemoProps = {
  lang: "en" | "zh";
};

type View = "binaural" | "pinna";

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function BinauralCuesDemo({ lang }: BinauralCuesDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：理解人类定位声音的三类线索：时间差、强度差、耳廓频响",
        desc: "调节方位角/仰角与频率，观察 ITD/ILD 与“耳廓凹口”如何随方向变化。",
        reset: "重置",
        view: "查看",
        binaural: "双耳线索（水平面更强）",
        pinna: "耳廓频响（垂直定位更关键）",
        azimuth: "方位角（左 -90° / 右 +90°）",
        elevation: "仰角（下 -60° / 上 +60°）",
        freq: "频率（Hz）",
        itd: "到达时间差 ITD（ms）",
        ild: "强度差 ILD（dB）",
        lead: "领先耳朵",
        left: "左耳",
        right: "右耳",
        notch: "耳廓“凹口”频率（kHz）",
        note:
          "简化模型：水平面主要靠 ITD/ILD；垂直方向则更多依赖耳廓造成的频率响应差异（大脑通过长期学习进行识别）。",
      }
    : {
        goal: "Goal: Understand three sound-localization cues: ITD, ILD, and pinna frequency response",
        desc: "Adjust azimuth/elevation and frequency to see how ITD/ILD and a pinna “notch” shift with direction.",
        reset: "Reset",
        view: "View",
        binaural: "Binaural cues (strong on horizontal plane)",
        pinna: "Pinna response (key for vertical cues)",
        azimuth: "Azimuth (left -90° / right +90°)",
        elevation: "Elevation (down -60° / up +60°)",
        freq: "Frequency (Hz)",
        itd: "Interaural time difference ITD (ms)",
        ild: "Interaural level difference ILD (dB)",
        lead: "Leading ear",
        left: "Left ear",
        right: "Right ear",
        notch: "Pinna “notch” frequency (kHz)",
        note:
          "Simplified model: ITD/ILD dominate in the horizontal plane; vertical localization relies more on direction-dependent pinna filtering learned by the brain.",
      };

  const [view, setView] = useState<View>("binaural");
  const [azimuth, setAzimuth] = useState(35);
  const [elevation, setElevation] = useState(15);
  const [freq, setFreq] = useState(2000);

  const reset = () => {
    setView("binaural");
    setAzimuth(35);
    setElevation(15);
    setFreq(2000);
  };

  const metrics = useMemo(() => {
    const theta = (clamp(azimuth, -90, 90) * Math.PI) / 180;
    const phi = (clamp(elevation, -60, 60) * Math.PI) / 180;
    const c = 343;
    const earDistance = 0.18;

    const itdSec = (earDistance / c) * Math.sin(theta);
    const itdMs = itdSec * 1000;

    const fkhz = clamp(freq, 200, 8000) / 1000;
    const ildDb = Math.sign(theta) * (Math.abs(Math.sin(theta)) * (fkhz / 2) * 10);

    const notchKhz = 8.0 - 3.2 * Math.sin(phi) - 0.7 * Math.abs(Math.sin(theta));
    const lead = itdMs >= 0 ? "right" : "left";

    return {
      itdMs,
      ildDb,
      lead,
      notchKhz: clamp(notchKhz, 3.5, 10.5),
      theta,
      phi,
    };
  }, [azimuth, elevation, freq]);

  const leadLabel = metrics.lead === "right" ? t.right : t.left;

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
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">{t.view}</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className={[
                  "rounded-lg border px-3 py-2 text-left text-xs font-semibold transition",
                  view === "binaural"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
                onClick={() => setView("binaural")}
                aria-pressed={view === "binaural"}
              >
                {t.binaural}
              </button>
              <button
                type="button"
                className={[
                  "rounded-lg border px-3 py-2 text-left text-xs font-semibold transition",
                  view === "pinna"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
                onClick={() => setView("pinna")}
                aria-pressed={view === "pinna"}
              >
                {t.pinna}
              </button>
            </div>
          </div>

          <label className="block text-sm font-semibold text-slate-700">
            {t.azimuth}
            <input
              type="range"
              min={-90}
              max={90}
              value={azimuth}
              onChange={(e) => setAzimuth(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{azimuth}°</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.elevation}
            <input
              type="range"
              min={-60}
              max={60}
              value={elevation}
              onChange={(e) => setElevation(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{elevation}°</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.freq}
            <input
              type="range"
              min={200}
              max={8000}
              step={50}
              value={freq}
              onChange={(e) => setFreq(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{freq}</span>
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {view === "binaural" ? t.itd : t.notch}
              </p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                {view === "binaural" ? metrics.itdMs.toFixed(2) : metrics.notchKhz.toFixed(2)}
              </p>
              <p className="mt-2 text-xs text-slate-600">
                {view === "binaural" ? (
                  <>
                    {t.lead}: <span className="font-semibold text-slate-900">{leadLabel}</span>
                  </>
                ) : (
                  <>
                    {isZh ? "可理解为耳廓滤波在某一频段形成的凹口。" : "Think of it as a direction-dependent spectral notch."}
                  </>
                )}
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {view === "binaural" ? t.ild : t.freq}
              </p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                {view === "binaural" ? metrics.ildDb.toFixed(1) : (freq / 1000).toFixed(2)}
              </p>
              <p className="mt-2 text-xs text-slate-600">
                {view === "binaural"
                  ? isZh
                    ? "高频更容易产生“遮挡”，ILD 往往更明显。"
                    : "ILD tends to be more noticeable at higher frequencies."
                  : isZh
                    ? "改变仰角会让凹口位置移动，从而提供垂直方向线索。"
                    : "Elevation moves the notch, giving vertical cues."}
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {isZh ? "可视化" : "Visualization"}
            </p>
            {view === "binaural" ? (
              <BinauralViz azimuth={azimuth} freq={freq} />
            ) : (
              <PinnaViz elevation={elevation} azimuth={azimuth} notchKhz={metrics.notchKhz} />
            )}
          </div>

          <div className="mt-3 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
            {t.note}
          </div>
        </div>
      </div>
    </div>
  );
}

function BinauralViz({ azimuth, freq }: { azimuth: number; freq: number }) {
  const theta = (clamp(azimuth, -90, 90) * Math.PI) / 180;
  const direction = Math.sin(theta);
  const left = clamp(0.5 - direction * 0.35, 0.05, 0.95);
  const right = clamp(0.5 + direction * 0.35, 0.05, 0.95);
  const arrowX = clamp(50 + direction * 34, 10, 90);
  const highFreq = freq >= 2000;
  const leftLevel = clamp(0.35 + (highFreq ? (0.6 - right) : 0.2) + (0.5 - right) * 0.4, 0.05, 0.95);
  const rightLevel = clamp(0.35 + (highFreq ? (0.6 - left) : 0.2) + (0.5 - left) * 0.4, 0.05, 0.95);

  return (
    <svg viewBox="0 0 100 56" className="mt-2 h-40 w-full">
      <rect x="2" y="2" width="96" height="52" rx="10" fill="#ffffff" stroke="#e2e8f0" />
      <circle cx="50" cy="28" r="18" fill="#f1f5f9" stroke="#cbd5e1" />
      <circle cx="32" cy="28" r="6" fill="#ffffff" stroke="#94a3b8" />
      <circle cx="68" cy="28" r="6" fill="#ffffff" stroke="#94a3b8" />
      <path d={`M${arrowX} 10 L50 28`} stroke="#0f172a" strokeWidth="2" />
      <circle cx={arrowX} cy="10" r="3" fill="#0f172a" />
      <rect x="18" y="44" width={leftLevel * 30} height="4" rx="2" fill="#6366f1" />
      <rect x="52" y="44" width={rightLevel * 30} height="4" rx="2" fill="#6366f1" />
      <text x="18" y="42" fontSize="6" fill="#64748b">
        L
      </text>
      <text x="78" y="42" fontSize="6" fill="#64748b">
        R
      </text>
    </svg>
  );
}

function PinnaViz({
  elevation,
  azimuth,
  notchKhz,
}: {
  elevation: number;
  azimuth: number;
  notchKhz: number;
}) {
  const notch = clamp(notchKhz, 3.5, 10.5);
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= 24; i++) {
    const f = 1 + (i / 24) * 11;
    const base = 0.78 - 0.08 * Math.cos(f * 0.8) - 0.05 * Math.sin((azimuth / 90) * 1.2);
    const notchDepth = Math.exp(-Math.pow((f - notch) / 0.8, 2)) * 0.35;
    const y = clamp(base + notchDepth, 0.1, 0.95);
    pts.push([10 + (i / 24) * 80, 44 - y * 30]);
  }
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const notchX = 10 + ((notch - 1) / 11) * 80;

  return (
    <svg viewBox="0 0 100 56" className="mt-2 h-40 w-full">
      <rect x="2" y="2" width="96" height="52" rx="10" fill="#ffffff" stroke="#e2e8f0" />
      <text x="8" y="12" fontSize="6" fill="#64748b">
        elevation {elevation}°
      </text>
      <polyline points={line} fill="none" stroke="#0f172a" strokeWidth="2" />
      <line x1={notchX} y1="14" x2={notchX} y2="46" stroke="#6366f1" strokeDasharray="3 2" />
      <circle cx={notchX} cy="14" r="2" fill="#6366f1" />
      <text x={clamp(notchX - 8, 6, 84)} y="52" fontSize="6" fill="#64748b">
        {notch.toFixed(1)}kHz
      </text>
      <text x="10" y="52" fontSize="6" fill="#94a3b8">
        1k
      </text>
      <text x="88" y="52" fontSize="6" fill="#94a3b8">
        12k
      </text>
    </svg>
  );
}

