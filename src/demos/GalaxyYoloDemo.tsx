import { useMemo, useState } from "react";

type GalaxyYoloDemoProps = {
  lang: "en" | "zh";
};

type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  score: number;
};

type LabeledBox = Box & { kind: "tp" | "fp"; match?: number };

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function iou(a: Box, b: Box) {
  const x1 = Math.max(a.x, b.x);
  const y1 = Math.max(a.y, b.y);
  const x2 = Math.min(a.x + a.w, b.x + b.w);
  const y2 = Math.min(a.y + a.h, b.y + b.h);
  const inter = Math.max(0, x2 - x1) * Math.max(0, y2 - y1);
  const union = a.w * a.h + b.w * b.h - inter;
  return union === 0 ? 0 : inter / union;
}

function nms(boxes: Box[], threshold: number) {
  const sorted = [...boxes].sort((a, b) => b.score - a.score);
  const kept: Box[] = [];
  sorted.forEach((box) => {
    const overlaps = kept.some((k) => iou(k, box) > threshold);
    if (!overlaps) kept.push(box);
  });
  return kept;
}

export function GalaxyYoloDemo({ lang }: GalaxyYoloDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：体验 YOLO 式网格检测如何定位并分类多星系",
        desc: "把天区切成网格，模型同时输出位置与类别。调节阈值、NMS、噪声，观察漏检/重叠框变化。",
        reset: "重置",
        threshold: "置信度阈值",
        nms: "NMS IoU 阈值",
        noise: "噪声/遮挡",
        metrics: "检测指标（玩具）",
        precision: "精确率",
        recall: "召回率",
        legend: "图例",
        gt: "蓝色虚线：真实星系",
        tp: "绿色：正确检测（TP）",
        fp: "橙色：误检/重复（FP）",
        note:
          "YOLO 将整幅图分成网格，一次前向同时预测框与类别；NMS (非极大值抑制) 用 IoU 去除重复框。",
      }
    : {
        goal: "Goal: See how YOLO-style grid detection localizes and classifies galaxies",
        desc: "Split the sky patch into grids; the model predicts boxes and classes in one pass. Tune threshold, NMS, and noise to see misses/overlaps.",
        reset: "Reset",
        threshold: "Confidence threshold",
        nms: "NMS IoU threshold",
        noise: "Noise/occlusion",
        metrics: "Metrics (toy)",
        precision: "Precision",
        recall: "Recall",
        legend: "Legend",
        gt: "Blue dashed: ground-truth galaxies",
        tp: "Green: correct detection (TP)",
        fp: "Orange: false/duplicate (FP)",
        note:
          "YOLO divides the image into grids and predicts boxes + classes in one pass; non-maximum suppression (NMS) removes overlapping duplicates using IoU.",
      };

  const [threshold, setThreshold] = useState(55);
  const [nmsThr, setNmsThr] = useState(45);
  const [noise, setNoise] = useState(35);
  const [seed, setSeed] = useState(3);

  const reset = () => {
    setThreshold(55);
    setNmsThr(45);
    setNoise(35);
    setSeed(3);
  };

  const sim = useMemo(() => {
    const rand = mulberry32(seed * 997 + noise * 13);
    const width = 420;
    const height = 260;
    const galaxies: Box[] = [];
    const num = 5 + Math.floor(rand() * 2);
    for (let i = 0; i < num; i++) {
      const w = 60 + rand() * 40;
      const h = 40 + rand() * 30;
      galaxies.push({
        x: rand() * (width - w - 10) + 5,
        y: rand() * (height - h - 10) + 5,
        w,
        h,
        score: 1,
      });
    }

    const preds: Box[] = [];
    galaxies.forEach((g, idx) => {
      const jitter = noise / 100;
      const shift = (rand() - 0.5) * 35 * jitter;
      const scale = 1 + (rand() - 0.5) * 0.4 * jitter;
      const conf = clamp(0.7 + (rand() - 0.5) * 0.35 - jitter * 0.2, 0.05, 0.99);
      preds.push({
        x: g.x + shift,
        y: g.y + shift,
        w: g.w * scale,
        h: g.h * scale,
        score: conf,
      });
      // occasional second box around same galaxy to illustrate duplicate detection
      if (rand() < 0.35 + jitter * 0.4) {
        preds.push({
          x: g.x + (rand() - 0.5) * 24,
          y: g.y + (rand() - 0.5) * 24,
          w: g.w * (0.8 + rand() * 0.5),
          h: g.h * (0.8 + rand() * 0.5),
          score: clamp(conf - 0.15 * rand(), 0.05, 0.9),
        });
      }
    });
    // spurious detections
    const spurious = Math.round(2 + noise * 0.06);
    for (let i = 0; i < spurious; i++) {
      preds.push({
        x: rand() * (width - 60),
        y: rand() * (height - 60),
        w: 40 + rand() * 80,
        h: 30 + rand() * 60,
        score: clamp(0.25 + rand() * 0.6 - noise * 0.003, 0.05, 0.9),
      });
    }

    const thr = threshold / 100;
    const filtered = preds.filter((p) => p.score >= thr);
    const kept = nms(filtered, nmsThr / 100);

    const matchedGt = new Set<number>();
    const labeled: LabeledBox[] = kept.map((b) => {
      let bestIdx = -1;
      let bestIoU = 0;
      galaxies.forEach((g, idx) => {
        const val = iou(g, b);
        if (val > bestIoU) {
          bestIoU = val;
          bestIdx = idx;
        }
      });
      if (bestIoU >= 0.5 && !matchedGt.has(bestIdx)) {
        matchedGt.add(bestIdx);
        return { ...b, kind: "tp", match: bestIdx };
      }
      return { ...b, kind: "fp" };
    });

    const tp = labeled.filter((b) => b.kind === "tp").length;
    const fp = labeled.filter((b) => b.kind === "fp").length;
    const fn = galaxies.length - tp;
    const precision = tp + fp === 0 ? 0 : tp / (tp + fp);
    const recall = tp + fn === 0 ? 0 : tp / (tp + fn);
    const f1 = precision + recall === 0 ? 0 : (2 * precision * recall) / (precision + recall);

    return { width, height, galaxies, labeled, precision, recall, f1 };
  }, [nmsThr, noise, seed, threshold]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{t.goal}</p>
          <p className="text-xs text-slate-600">{t.desc}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSeed((s) => s + 1)}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            aria-label={isZh ? "换一片天区" : "New sky"}
          >
            {isZh ? "换一片" : "New"}
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
          <Slider label={t.threshold} value={threshold} onChange={setThreshold} />
          <Slider label={t.nms} value={nmsThr} onChange={setNmsThr} />
          <Slider label={t.noise} value={noise} onChange={setNoise} />

          <div className="rounded-xl border border-dashed border-slate-200 bg-white p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.metrics}</p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              <Metric label={t.precision} value={sim.precision} />
              <Metric label={t.recall} value={sim.recall} />
              <Metric label="F1" value={sim.f1} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "天区图（叠加 YOLO 预测）" : "Sky patch with YOLO-style predictions"}
          </p>
          <SkyView width={sim.width} height={sim.height} galaxies={sim.galaxies} boxes={sim.labeled} />

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.legend}</p>
              <ul className="mt-2 space-y-1">
                <li>{t.gt}</li>
                <li>{t.tp}</li>
                <li>{t.fp}</li>
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

function Slider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (val: number) => void;
}) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-brand-500"
      />
      <span className="text-xs text-slate-500">{value}</span>
    </label>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-slate-50 px-2 py-2">
      <p className="text-[11px] font-semibold text-slate-600">{label}</p>
      <p className="text-sm font-semibold text-slate-900">{value.toFixed(2)}</p>
    </div>
  );
}

function SkyView({
  width,
  height,
  galaxies,
  boxes,
}: {
  width: number;
  height: number;
  galaxies: Box[];
  boxes: LabeledBox[];
}) {
  return (
    <div className="mt-2 overflow-auto rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3">
      <svg width={width} height={height} className="block">
        <rect width={width} height={height} fill="#0f172a" rx={12} />
        <defs>
          <radialGradient id="star" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 120 }).map((_, i) => {
          const x = (i * 47) % width;
          const y = (i * 83 + 17) % height;
          const r = (i % 7) * 0.25 + 0.6;
          return <circle key={i} cx={x} cy={y} r={r} fill="url(#star)" opacity={0.7} />;
        })}

        {galaxies.map((g, idx) => (
          <g key={`gt-${idx}`}>
            <rect
              x={g.x}
              y={g.y}
              width={g.w}
              height={g.h}
              fill="none"
              stroke="#60a5fa"
              strokeDasharray="6 4"
              strokeWidth={2}
            />
            <circle cx={g.x + g.w / 2} cy={g.y + g.h / 2} r={6} fill="#93c5fd" opacity={0.7} />
          </g>
        ))}

        {boxes.map((b, idx) => (
          <g key={`pred-${idx}`}>
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              fill="none"
              stroke={b.kind === "tp" ? "#34d399" : "#fb923c"}
              strokeWidth={2}
              opacity={0.95}
            />
            <text
              x={b.x + 4}
              y={b.y + 14}
              fontSize={10}
              fontWeight={700}
              fill={b.kind === "tp" ? "#065f46" : "#7c2d12"}
            >
              {b.kind === "tp" ? "Galaxy" : "FP"} · {Math.round(b.score * 100)}%
            </text>
          </g>
        ))}

        {/* faint grid to hint YOLO cells */}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`vg-${i}`}
            x1={(i + 1) * (width / 7)}
            x2={(i + 1) * (width / 7)}
            y1={0}
            y2={height}
            stroke="rgba(255,255,255,0.08)"
          />
        ))}
        {Array.from({ length: 3 }).map((_, i) => (
          <line
            key={`hg-${i}`}
            y1={(i + 1) * (height / 4)}
            y2={(i + 1) * (height / 4)}
            x1={0}
            x2={width}
            stroke="rgba(255,255,255,0.08)"
          />
        ))}
      </svg>
    </div>
  );
}
