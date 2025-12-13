import { useMemo, useState } from "react";

type SliceGanTrainingToyDemoProps = {
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

type Grid = number[][];

function makeGrid(size: number, f: (y: number, x: number) => number): Grid {
  const g: Grid = [];
  for (let y = 0; y < size; y++) {
    const row: number[] = [];
    for (let x = 0; x < size; x++) row.push(f(y, x));
    g.push(row);
  }
  return g;
}

function patchStats(grid: Grid, x0: number, y0: number, w: number) {
  let sum = 0;
  let sum2 = 0;
  let n = 0;
  for (let y = y0; y < y0 + w; y++) {
    for (let x = x0; x < x0 + w; x++) {
      const v = grid[y]?.[x] ?? 0;
      sum += v;
      sum2 += v * v;
      n++;
    }
  }
  const mean = n ? sum / n : 0;
  const varr = n ? sum2 / n - mean * mean : 0;
  return { mean, var: Math.max(0, varr) };
}

export function SliceGanTrainingToyDemo({ lang }: SliceGanTrainingToyDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：理解 SliceGAN 训练的关键：把 3D 切成 2D，再用随机小块给判别器做对比",
        desc: "这里用玩具 2D 纹理模拟“真实切片”。生成器从噪声开始，逐步学习让随机 patch 的统计更像真实切片。",
        reset: "重置",
        step: "训练步数",
        patch: "随机 patch 大小",
        resample: "重新采样 patch",
        takeStep: "训练一步",
        mix: "生成器“贴近真实”的比例",
        discLoss: "判别器差异（越低越像）",
        real: "真实切片（玩具）",
        fake: "生成切片（玩具）",
        note:
          "真实 SliceGAN 的生成器输出的是 3D 体；训练时把它切成 2D，并随机采样局部区域，让判别器学到细节纹理，从而逼近真实材料的微观结构。",
      }
    : {
        goal: "Goal: Grasp SliceGAN’s key trick—slice 3D into 2D and train with random patches",
        desc: "This toy uses a 2D texture as “real slices”. The generator starts from noise and learns so random patch statistics resemble real patches.",
        reset: "Reset",
        step: "Training steps",
        patch: "Random patch size",
        resample: "Resample patches",
        takeStep: "Take one step",
        mix: "Generator closeness to real",
        discLoss: "Discriminator gap (lower = closer)",
        real: "Real slice (toy)",
        fake: "Generated slice (toy)",
        note:
          "In real SliceGAN, the generator outputs 3D volumes. Training slices them to 2D and samples local regions so the discriminator learns fine textures and pushes the generator toward realistic microstructure.",
      };

  const [steps, setSteps] = useState(6);
  const [patchSize, setPatchSize] = useState(6);
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSteps(6);
    setPatchSize(6);
    setSeed(1);
  };

  const sim = useMemo(() => {
    const size = 28;
    const rand = mulberry32(seed * 1009);
    const real = makeGrid(size, (y, x) => {
      const waves = 0.45 + 0.25 * Math.sin((x / size) * Math.PI * 4) + 0.15 * Math.cos((y / size) * Math.PI * 3);
      const speckle = (rand() - 0.5) * 0.22;
      const v = clamp(waves + speckle, 0, 1);
      return v;
    });

    const genRand = mulberry32(seed * 1009 + 77);
    const noise = makeGrid(size, () => clamp(genRand(), 0, 1));

    const mix = clamp(steps, 0, 20) / 20;
    const fake = makeGrid(size, (y, x) => clamp((1 - mix) * noise[y][x] + mix * real[y][x], 0, 1));

    const p = clamp(Math.round(patchSize), 3, 10);
    const patches = 10;
    const picks: { x: number; y: number }[] = [];
    for (let i = 0; i < patches; i++) {
      picks.push({
        x: Math.floor(rand() * (size - p)),
        y: Math.floor(rand() * (size - p)),
      });
    }

    const losses = picks.map((pt) => {
      const r = patchStats(real, pt.x, pt.y, p);
      const f = patchStats(fake, pt.x, pt.y, p);
      return Math.abs(r.mean - f.mean) + 0.6 * Math.abs(Math.sqrt(r.var) - Math.sqrt(f.var));
    });

    const discLoss = losses.reduce((acc, v) => acc + v, 0) / Math.max(1, losses.length);
    return { size, real, fake, p, picks, mix, discLoss };
  }, [patchSize, seed, steps]);

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
            aria-label={t.resample}
          >
            {t.resample}
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
            {t.step}
            <input
              type="range"
              min={0}
              max={20}
              step={1}
              value={steps}
              onChange={(e) => setSteps(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{steps}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.patch}
            <input
              type="range"
              min={3}
              max={10}
              step={1}
              value={patchSize}
              onChange={(e) => setPatchSize(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{sim.p}×{sim.p}</span>
          </label>

          <button
            type="button"
            onClick={() => setSteps((s) => clamp(s + 1, 0, 20))}
            className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {t.takeStep}
          </button>

          <div className="rounded-xl border border-dashed border-slate-200 bg-white p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.mix}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{Math.round(sim.mix * 100)}%</p>
            <p className="mt-2 text-xs text-slate-600">
              {t.discLoss}: <span className="font-semibold text-slate-900">{sim.discLoss.toFixed(3)}</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.real}</p>
              <PatchGrid grid={sim.real} picks={sim.picks} patch={sim.p} highlight="#10b981" />
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.fake}</p>
              <PatchGrid grid={sim.fake} picks={sim.picks} patch={sim.p} highlight="#6366f1" />
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

function PatchGrid({
  grid,
  picks,
  patch,
  highlight,
}: {
  grid: Grid;
  picks: { x: number; y: number }[];
  patch: number;
  highlight: string;
}) {
  const size = grid.length;
  const key = (x: number, y: number) => `${x},${y}`;
  const highlighted = new Set<string>();
  for (const p of picks) highlighted.add(key(p.x, p.y));

  return (
    <div className="relative mt-2">
      <div
        className="grid gap-[1px] rounded-md bg-slate-100 p-1"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
        aria-label="texture grid"
      >
        {grid.flatMap((row, y) =>
          row.map((v, x) => (
            <div
              key={`${y}-${x}`}
              className="aspect-square rounded-[1px]"
              style={{ backgroundColor: `rgba(15, 23, 42, ${clamp(v, 0, 1)})` }}
              aria-hidden="true"
            />
          )),
        )}
      </div>

      {picks.slice(0, 3).map((p, i) => (
        <div
          key={`${p.x}-${p.y}-${i}`}
          className="pointer-events-none absolute rounded-md"
          style={{
            left: `${(p.x / size) * 100}%`,
            top: `${(p.y / size) * 100}%`,
            width: `${(patch / size) * 100}%`,
            height: `${(patch / size) * 100}%`,
            border: `2px solid ${highlight}`,
            boxShadow: "0 0 0 1px rgba(255,255,255,0.6) inset",
          }}
        />
      ))}
    </div>
  );
}

