import { useMemo, useState } from "react";

type RFIDetectionDemoProps = {
  lang: "en" | "zh";
};

type Grid = number[][];

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

function makeGrid(rows: number, cols: number, f: (r: number, c: number) => number): Grid {
  const g: Grid = [];
  for (let r = 0; r < rows; r++) {
    const row: number[] = [];
    for (let c = 0; c < cols; c++) row.push(f(r, c));
    g.push(row);
  }
  return g;
}

function smooth3x3(grid: Grid) {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  const out = makeGrid(rows, cols, (r, c) => {
    let sum = 0;
    let n = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const rr = r + dr;
        const cc = c + dc;
        if (rr < 0 || cc < 0 || rr >= rows || cc >= cols) continue;
        sum += grid[rr][cc];
        n++;
      }
    }
    return sum / Math.max(1, n);
  });
  return out;
}

function metricF1(gt: boolean[][], pred: boolean[][]) {
  let tp = 0;
  let fp = 0;
  let fn = 0;
  for (let r = 0; r < gt.length; r++) {
    for (let c = 0; c < gt[0].length; c++) {
      const g = gt[r][c];
      const p = pred[r][c];
      if (p && g) tp++;
      else if (p && !g) fp++;
      else if (!p && g) fn++;
    }
  }
  const precision = tp + fp === 0 ? 0 : tp / (tp + fp);
  const recall = tp + fn === 0 ? 0 : tp / (tp + fn);
  const f1 = precision + recall === 0 ? 0 : (2 * precision * recall) / (precision + recall);
  return { precision, recall, f1, tp, fp, fn };
}

export function RFIDetectionDemo({ lang }: RFIDetectionDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：理解 CNN 如何在“频率-时间图”上检测射频干扰（RFI）并做像素级标注",
        desc: "把观测数据想成一张图：强干扰常呈现条纹/块状结构。调节干扰强度与阈值，观察“检测、误检、漏检”的权衡（对应文本中的黄色/白色/红色区域）。",
        reset: "重置",
        interference: "干扰强度",
        density: "干扰密度",
        threshold: "判定阈值",
        metrics: "检测指标（玩具）",
        precision: "精确率",
        recall: "召回率",
        f1: "F1",
        legend: "图例",
        yellow: "黄色：正确检测的干扰（TP）",
        white: "白色：误检（FP）",
        red: "红色：漏检（FN）",
        gray: "灰蓝：正常信号/背景",
        note:
          "类比“全卷积网络”：编码阶段扩大感受野提取高级特征，解码阶段恢复输出并融合细节信息，从而实现像素级干扰标注。",
      }
    : {
        goal: "Goal: See how a CNN detects radio-frequency interference (RFI) on a time–frequency map with pixel-level masks",
        desc: "Treat the observation as an image: strong interference often forms stripes/blobs. Adjust interference and threshold to see the trade-off between correct detections, false positives, and misses.",
        reset: "Reset",
        interference: "Interference strength",
        density: "Interference density",
        threshold: "Decision threshold",
        metrics: "Metrics (toy)",
        precision: "Precision",
        recall: "Recall",
        f1: "F1",
        legend: "Legend",
        yellow: "Yellow: correct interference (TP)",
        white: "White: false positives (FP)",
        red: "Red: missed interference (FN)",
        gray: "Blue-gray: normal signal/background",
        note:
          "Analogy to a fully convolutional network: an encoder expands receptive fields to extract higher-level features; a decoder reconstructs the mask while reusing detailed features for pixel-level labeling.",
      };

  const [strength, setStrength] = useState(70);
  const [density, setDensity] = useState(45);
  const [threshold, setThreshold] = useState(55);
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setStrength(70);
    setDensity(45);
    setThreshold(55);
    setSeed(1);
  };

  const sim = useMemo(() => {
    const rows = 22;
    const cols = 40;
    const rand = mulberry32(seed * 1009 + strength * 7 + density * 13);
    const s = clamp(strength, 0, 100) / 100;
    const d = clamp(density, 0, 100) / 100;

    const bg = makeGrid(rows, cols, () => {
      const base = 0.18 + 0.08 * rand();
      const speckle = (rand() - 0.5) * 0.08;
      return clamp(base + speckle, 0, 1);
    });

    // Ground-truth RFI mask: mix vertical stripes and diagonal streaks.
    const gt: boolean[][] = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
    const stripes = Math.max(1, Math.round(2 + d * 6));
    for (let k = 0; k < stripes; k++) {
      const c0 = Math.floor(rand() * cols);
      const w = 1 + Math.floor(rand() * 2);
      for (let r = 0; r < rows; r++) {
        for (let dc = 0; dc < w; dc++) {
          if (rand() < 0.85 * d) gt[r][clamp(c0 + dc, 0, cols - 1)] = true;
        }
      }
    }
    const streaks = Math.max(1, Math.round(1 + d * 4));
    for (let k = 0; k < streaks; k++) {
      const r0 = Math.floor(rand() * rows);
      const c0 = Math.floor(rand() * cols);
      const len = 10 + Math.floor(rand() * 18);
      const dr = rand() < 0.5 ? 1 : -1;
      const dc = rand() < 0.5 ? 1 : -1;
      let rr = r0;
      let cc = c0;
      for (let i = 0; i < len; i++) {
        if (rr >= 0 && rr < rows && cc >= 0 && cc < cols) {
          gt[rr][cc] = rand() < 0.92 * d;
          if (rand() < 0.4) gt[rr][clamp(cc + 1, 0, cols - 1)] = true;
        }
        rr += dr;
        cc += dc;
      }
    }

    const obs = makeGrid(rows, cols, (r, c) => {
      const rfi = gt[r][c] ? 0.55 + 0.4 * s + (rand() - 0.5) * 0.1 : 0;
      return clamp(bg[r][c] + rfi, 0, 1);
    });

    // Toy “CNN”: smoothing + local contrast to mimic segmentation.
    const sm = smooth3x3(obs);
    const score = makeGrid(rows, cols, (r, c) => clamp((obs[r][c] - sm[r][c]) * 3.2 + obs[r][c] * 0.9, 0, 1));
    const thr = clamp(threshold, 0, 100) / 100;
    const pred: boolean[][] = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) pred[r][c] = score[r][c] > thr;

    const metrics = metricF1(gt, pred);
    return { rows, cols, gt, pred, obs, metrics, thr };
  }, [density, seed, strength, threshold]);

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
            aria-label={isZh ? "换一组观测" : "New sample"}
          >
            {isZh ? "换一组" : "New"}
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
            {t.interference}
            <input
              type="range"
              min={0}
              max={100}
              value={strength}
              onChange={(e) => setStrength(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{strength}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.density}
            <input
              type="range"
              min={0}
              max={100}
              value={density}
              onChange={(e) => setDensity(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{density}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.threshold}
            <input
              type="range"
              min={0}
              max={100}
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{threshold}</span>
          </label>

          <div className="rounded-xl border border-dashed border-slate-200 bg-white p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.metrics}</p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-slate-50 px-2 py-2">
                <p className="text-[11px] font-semibold text-slate-600">{t.precision}</p>
                <p className="text-sm font-semibold text-slate-900">{sim.metrics.precision.toFixed(2)}</p>
              </div>
              <div className="rounded-lg bg-slate-50 px-2 py-2">
                <p className="text-[11px] font-semibold text-slate-600">{t.recall}</p>
                <p className="text-sm font-semibold text-slate-900">{sim.metrics.recall.toFixed(2)}</p>
              </div>
              <div className="rounded-lg bg-slate-50 px-2 py-2">
                <p className="text-[11px] font-semibold text-slate-600">{t.f1}</p>
                <p className="text-sm font-semibold text-slate-900">{sim.metrics.f1.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {isZh ? "频率-时间图（叠加检测结果）" : "Time–frequency map (overlayed mask)"}
            </p>
            <RfiOverlay obs={sim.obs} gt={sim.gt} pred={sim.pred} />
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.legend}</p>
              <ul className="mt-2 space-y-1">
                <li>{t.yellow}</li>
                <li>{t.white}</li>
                <li>{t.red}</li>
                <li>{t.gray}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
              {t.note}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RfiOverlay({ obs, gt, pred }: { obs: Grid; gt: boolean[][]; pred: boolean[][] }) {
  const rows = obs.length;
  const cols = obs[0]?.length ?? 0;
  const cell = 10;
  const w = cols * cell;
  const h = rows * cell;
  return (
    <div className="mt-2 overflow-auto rounded-lg bg-white p-2">
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="block">
        {obs.flatMap((row, r) =>
          row.map((v, c) => {
            const base = Math.round(220 - v * 160);
            const fill = `rgb(${base}, ${base + 5}, ${base + 20})`;
            const g = gt[r][c];
            const p = pred[r][c];
            const overlay = p && g ? "rgba(250, 204, 21, 0.9)" : p && !g ? "rgba(255,255,255,0.85)" : !p && g ? "rgba(244, 63, 94, 0.8)" : null;
            return (
              <g key={`${r}-${c}`}>
                <rect x={c * cell} y={r * cell} width={cell} height={cell} fill={fill} />
                {overlay && <rect x={c * cell} y={r * cell} width={cell} height={cell} fill={overlay} />}
              </g>
            );
          }),
        )}
      </svg>
    </div>
  );
}

