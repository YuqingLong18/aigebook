import { useMemo, useState } from "react";

type BionicEarCnnToyDemoProps = {
  lang: "en" | "zh";
};

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

type Heatmap = number[][];

function makeHeatmap(rows: number, cols: number, f: (r: number, c: number) => number): Heatmap {
  const grid: Heatmap = [];
  for (let r = 0; r < rows; r++) {
    const row: number[] = [];
    for (let c = 0; c < cols; c++) row.push(f(r, c));
    grid.push(row);
  }
  return grid;
}

function convolve2d(input: Heatmap, kernel: Heatmap) {
  const rows = input.length;
  const cols = input[0]?.length ?? 0;
  const kRows = kernel.length;
  const kCols = kernel[0]?.length ?? 0;
  const padR = Math.floor(kRows / 2);
  const padC = Math.floor(kCols / 2);
  const out = makeHeatmap(rows, cols, (r, c) => {
    let sum = 0;
    for (let kr = 0; kr < kRows; kr++) {
      for (let kc = 0; kc < kCols; kc++) {
        const ir = r + kr - padR;
        const ic = c + kc - padC;
        if (ir < 0 || ic < 0 || ir >= rows || ic >= cols) continue;
        sum += input[ir][ic] * kernel[kr][kc];
      }
    }
    return sum;
  });
  return out;
}

function normalizeGrid(grid: Heatmap) {
  const flat = grid.flat();
  const min = Math.min(...flat);
  const max = Math.max(...flat);
  const range = Math.max(1e-9, max - min);
  return makeHeatmap(grid.length, grid[0]?.length ?? 0, (r, c) => (grid[r][c] - min) / range);
}

export function BionicEarCnnToyDemo({ lang }: BionicEarCnnToyDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：理解 CNN 如何从“看起来很乱”的信号里提取方向信息",
        desc: "这里用一个玩具“谱图”模拟 bionic ear 信号：方向不同 → 纹理/斜率不同。卷积核像“特征探测器”，把模式转成可分类的特征。",
        reset: "重置",
        angle: "真实方向角（°）",
        noise: "噪声强度",
        predicted: "预测方向（°）",
        error: "误差（°）",
        feature: "卷积特征响应",
        input: "输入“谱图”（玩具）",
        note:
          "真实论文中：先做谱分析得到频域特征，再交给 CNN 学习。这里用最小化的模型解释“为什么深度学习能读懂复杂信号”。",
      }
    : {
        goal: "Goal: See how a CNN extracts direction from “messy-looking” signals",
        desc: "This toy spectrogram mimics bionic-ear signals: different directions create different textures/slopes. Convolution kernels act as pattern detectors, turning structure into features.",
        reset: "Reset",
        angle: "True direction (°)",
        noise: "Noise level",
        predicted: "Predicted direction (°)",
        error: "Error (°)",
        feature: "Convolution feature responses",
        input: "Input spectrogram (toy)",
        note:
          "In the paper: spectral features feed a CNN. Here we use a minimal model to explain why deep learning can decode complex signals.",
      };

  const [angle, setAngle] = useState(20);
  const [noise, setNoise] = useState(30);
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setAngle(20);
    setNoise(30);
    setSeed(1);
  };

  const sim = useMemo(() => {
    const rows = 18;
    const cols = 28;
    const theta = (clamp(angle, -60, 60) * Math.PI) / 180;
    const slope = Math.tan(theta) * 0.45;
    const rand = mulberry32(seed * 999 + Math.round(angle) * 37);
    const noiseAmp = clamp(noise, 0, 100) / 100;

    const base = makeHeatmap(rows, cols, (r, c) => {
      const ridgeCenter = cols / 2 + slope * (r - rows / 2);
      const d = (c - ridgeCenter) / 3.2;
      const ridge = Math.exp(-d * d);
      const band = 0.35 + 0.15 * Math.sin((r / rows) * Math.PI * 2);
      const n = (rand() - 0.5) * 2 * noiseAmp;
      return clamp(0.15 + ridge * band + n * 0.35, 0, 1);
    });

    const kernels: { id: string; label: string; k: Heatmap }[] = [
      {
        id: "left",
        label: isZh ? "向左斜（负角）" : "Left-tilt (negative)",
        k: [
          [1, 0, -1],
          [1, 0, -1],
          [1, 0, -1],
        ],
      },
      {
        id: "right",
        label: isZh ? "向右斜（正角）" : "Right-tilt (positive)",
        k: [
          [-1, 0, 1],
          [-1, 0, 1],
          [-1, 0, 1],
        ],
      },
      {
        id: "flat",
        label: isZh ? "水平纹理（接近 0°）" : "Flat texture (near 0°)",
        k: [
          [1, 1, 1],
          [0, 0, 0],
          [-1, -1, -1],
        ],
      },
    ];

    const responses = kernels.map((ker) => {
      const conv = convolve2d(base, ker.k);
      const flat = conv.flat();
      const score = flat.reduce((acc, v) => acc + Math.max(0, v), 0) / flat.length;
      return { id: ker.id, label: ker.label, score, map: normalizeGrid(conv) };
    });

    const best = responses.reduce((acc, r) => (r.score > acc.score ? r : acc), responses[0]);
    const predicted =
      best.id === "left" ? -35 : best.id === "right" ? 35 : 0;
    const err = predicted - angle;

    return { base, responses, predicted, err };
  }, [angle, isZh, noise, seed]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{t.goal}</p>
          <p className="text-xs text-slate-600">{t.desc}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            type="button"
            onClick={() => setSeed((x) => x + 1)}
            aria-label={isZh ? "重新采样噪声" : "Resample noise"}
          >
            {isZh ? "换一组" : "Resample"}
          </button>
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            type="button"
            onClick={reset}
            aria-label={t.reset}
          >
            {t.reset}
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <label className="block text-sm font-semibold text-slate-700">
            {t.angle}
            <input
              type="range"
              min={-60}
              max={60}
              step={1}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{angle}°</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.noise}
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={noise}
              onChange={(e) => setNoise(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{noise}</span>
          </label>

          <div className="grid gap-2 rounded-xl border border-dashed border-slate-200 bg-white p-3 text-sm text-slate-700">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.predicted}</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">{sim.predicted}°</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.error}</p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {sim.err >= 0 ? "+" : ""}
                {sim.err.toFixed(0)}°
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.input}</p>
              <HeatmapGrid grid={sim.base} />
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.feature}</p>
              <div className="mt-2 space-y-2">
                {sim.responses.map((r) => (
                  <div key={r.id} className="rounded-lg bg-white p-2 shadow-sm">
                    <div className="flex items-center justify-between text-[11px] text-slate-700">
                      <span className="font-semibold text-slate-900">{r.label}</span>
                      <span className="rounded-full bg-indigo-50 px-2 py-0.5 font-semibold text-indigo-700">
                        score {r.score.toFixed(2)}
                      </span>
                    </div>
                    <HeatmapGrid grid={r.map} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
            {t.note}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeatmapGrid({ grid }: { grid: Heatmap }) {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  return (
    <div
      className="mt-2 grid gap-[2px] rounded-lg bg-white p-2"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-label="heatmap"
    >
      {grid.flatMap((row, r) =>
        row.map((v, c) => {
          const intensity = clamp(v, 0, 1);
          const bg = `rgba(99, 102, 241, ${0.12 + intensity * 0.78})`;
          return (
            <div
              key={`${r}-${c}`}
              className="aspect-square rounded-[2px]"
              style={{ backgroundColor: bg }}
              aria-hidden="true"
            />
          );
        }),
      )}
      {rows === 0 && <div className="text-xs text-slate-500">—</div>}
    </div>
  );
}

