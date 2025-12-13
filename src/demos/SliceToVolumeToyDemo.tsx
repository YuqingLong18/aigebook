import { useMemo, useState } from "react";

type SliceToVolumeToyDemoProps = {
  lang: "en" | "zh";
};

type Material = "fibers" | "particles";
type Axis = "z" | "y" | "x";

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

type Volume = number[][][]; // [z][y][x] in {0,1}

function makeVolume(size: number, material: Material, seed: number): Volume {
  const rand = mulberry32(seed);
  const vol: Volume = [];
  for (let z = 0; z < size; z++) {
    const plane: number[][] = [];
    for (let y = 0; y < size; y++) plane.push(Array.from({ length: size }, () => 0));
    vol.push(plane);
  }

  const set = (x: number, y: number, z: number, v: number) => {
    if (x < 0 || y < 0 || z < 0 || x >= size || y >= size || z >= size) return;
    vol[z][y][x] = v;
  };

  if (material === "fibers") {
    const fibers = 6;
    for (let i = 0; i < fibers; i++) {
      let x = Math.floor(rand() * size);
      let y = Math.floor(rand() * size);
      let z = Math.floor(rand() * size);
      const dx = rand() < 0.5 ? 1 : -1;
      const dy = rand() < 0.5 ? 1 : -1;
      const dz = rand() < 0.5 ? 1 : -1;
      const len = 18 + Math.floor(rand() * 20);
      for (let s = 0; s < len; s++) {
        set(x, y, z, 1);
        if (rand() < 0.55) x += dx;
        if (rand() < 0.55) y += dy;
        if (rand() < 0.55) z += dz;
        x = clamp(x, 0, size - 1);
        y = clamp(y, 0, size - 1);
        z = clamp(z, 0, size - 1);
      }
    }
  } else {
    const spheres = 8;
    for (let i = 0; i < spheres; i++) {
      const cx = 3 + Math.floor(rand() * (size - 6));
      const cy = 3 + Math.floor(rand() * (size - 6));
      const cz = 3 + Math.floor(rand() * (size - 6));
      const r = 2 + Math.floor(rand() * 3);
      for (let z = cz - r; z <= cz + r; z++) {
        for (let y = cy - r; y <= cy + r; y++) {
          for (let x = cx - r; x <= cx + r; x++) {
            const d2 = (x - cx) ** 2 + (y - cy) ** 2 + (z - cz) ** 2;
            if (d2 <= r ** 2) set(x, y, z, 1);
          }
        }
      }
    }
  }

  return vol;
}

function slice2d(vol: Volume, axis: Axis, idx: number) {
  const size = vol.length;
  const i = clamp(idx, 0, size - 1);
  const out: number[][] = [];
  for (let r = 0; r < size; r++) out.push(Array.from({ length: size }, () => 0));

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (axis === "z") out[y][x] = vol[i][y][x];
      if (axis === "y") out[y][x] = vol[y][i][x];
      if (axis === "x") out[y][x] = vol[y][x][i];
    }
  }
  return out;
}

function mismatchRate(a: number[][], b: number[][]) {
  let diff = 0;
  let total = 0;
  for (let y = 0; y < a.length; y++) {
    for (let x = 0; x < a[0].length; x++) {
      total++;
      if (a[y][x] !== b[y][x]) diff++;
    }
  }
  return total === 0 ? 0 : diff / total;
}

export function SliceToVolumeToyDemo({ lang }: SliceToVolumeToyDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：理解“2D 切片 ≠ 完整 3D 形貌”",
        desc: "同一张切片可能来自许多不同的 3D 结构。你只能看到局部 2D，需要模型去“补全”整体 3D 的可能性空间。",
        reset: "重置",
        material: "材料结构（玩具）",
        fibers: "纤维/孔道型",
        particles: "颗粒/团簇型",
        axis: "切片方向",
        index: "切片位置",
        true: "真实 3D 的切片",
        naive: "用这张切片“直接外推”出来的 3D（天真外推）",
        mismatch: "在另一个位置的切片差异率",
        note:
          "SliceGAN 的关键思路：让生成器产出 3D，再把它切片成 2D，交给判别器与真实 2D 切片对比，从而在没有真实 3D 的情况下获得训练信号。",
      }
    : {
        goal: "Goal: Understand why “a 2D slice ≠ the full 3D morphology”",
        desc: "The same slice could come from many different 3D structures. You see only 2D views; a model must fill in plausible 3D possibilities.",
        reset: "Reset",
        material: "Material type (toy)",
        fibers: "Fiber/porous",
        particles: "Particles/clusters",
        axis: "Slice axis",
        index: "Slice index",
        true: "Slices from the true 3D volume",
        naive: "A naive 3D made by extruding one slice",
        mismatch: "Mismatch rate at another slice",
        note:
          "SliceGAN’s key idea: generate 3D, slice it into 2D, and let a discriminator compare those slices to real 2D images—creating training signals without real 3D data.",
      };

  const [material, setMaterial] = useState<Material>("fibers");
  const [axis, setAxis] = useState<Axis>("z");
  const [index, setIndex] = useState(12);
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setMaterial("fibers");
    setAxis("z");
    setIndex(12);
    setSeed(1);
  };

  const sim = useMemo(() => {
    const size = 24;
    const vol = makeVolume(size, material, seed * 1009);
    const idx = clamp(index, 0, size - 1);
    const mid = Math.floor(size / 2);

    const sMain = slice2d(vol, axis, idx);
    const sMidZ = slice2d(vol, "z", mid);
    const sMidY = slice2d(vol, "y", mid);
    const sMidX = slice2d(vol, "x", mid);

    // Naive reconstruction: repeat chosen slice along the chosen axis.
    const naiveVol: Volume = [];
    for (let z = 0; z < size; z++) {
      const plane: number[][] = [];
      for (let y = 0; y < size; y++) plane.push(Array.from({ length: size }, (_, x) => 0));
      naiveVol.push(plane);
    }
    for (let z = 0; z < size; z++) {
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (axis === "z") naiveVol[z][y][x] = sMain[y][x];
          if (axis === "y") naiveVol[z][y][x] = sMain[z][x];
          if (axis === "x") naiveVol[z][y][x] = sMain[z][y];
        }
      }
    }

    const otherIdx = clamp(idx + 5, 0, size - 1);
    const trueOther = slice2d(vol, axis, otherIdx);
    const naiveOther = slice2d(naiveVol, axis, otherIdx);
    const mismatch = mismatchRate(trueOther, naiveOther);

    return {
      size,
      idx,
      otherIdx,
      sMain,
      previews: { z: sMidZ, y: sMidY, x: sMidX },
      trueOther,
      naiveOther,
      mismatch,
    };
  }, [axis, index, material, seed]);

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
            aria-label={isZh ? "换一个 3D 结构" : "New 3D sample"}
          >
            {isZh ? "换样本" : "New"}
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
            {t.material}
            <select
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
              value={material}
              onChange={(e) => setMaterial(e.target.value as Material)}
            >
              <option value="fibers">{t.fibers}</option>
              <option value="particles">{t.particles}</option>
            </select>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.axis}
            <select
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
              value={axis}
              onChange={(e) => setAxis(e.target.value as Axis)}
            >
              <option value="z">Z (XY slice)</option>
              <option value="y">Y (XZ slice)</option>
              <option value="x">X (YZ slice)</option>
            </select>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.index}
            <input
              type="range"
              min={0}
              max={sim.size - 1}
              step={1}
              value={index}
              onChange={(e) => setIndex(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">
              {sim.idx} / {sim.size - 1}
            </span>
          </label>

          <div className="rounded-xl border border-dashed border-slate-200 bg-white p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.mismatch}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{Math.round(sim.mismatch * 100)}%</p>
            <p className="mt-2 text-xs text-slate-600">
              {isZh ? "对比位置：" : "Compare index:"} {sim.otherIdx}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.true}</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <SliceCard title="Z mid" grid={sim.previews.z} />
              <SliceCard title="Y mid" grid={sim.previews.y} />
              <SliceCard title="X mid" grid={sim.previews.x} />
            </div>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {isZh ? "选中的切片" : "Selected slice"}
              </p>
              <SliceGrid grid={sim.sMain} />
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.naive}</p>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold text-slate-600">true @ {sim.otherIdx}</p>
                  <SliceGrid grid={sim.trueOther} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-600">naive @ {sim.otherIdx}</p>
                  <SliceGrid grid={sim.naiveOther} />
                </div>
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

function SliceCard({ title, grid }: { title: string; grid: number[][] }) {
  return (
    <div className="rounded-lg bg-white p-3 shadow-sm">
      <p className="text-[11px] font-semibold text-slate-600">{title}</p>
      <SliceGrid grid={grid} />
    </div>
  );
}

function SliceGrid({ grid }: { grid: number[][] }) {
  const size = grid.length;
  return (
    <div
      className="mt-2 grid gap-[1px] rounded-md bg-slate-100 p-1"
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
      aria-label="slice grid"
    >
      {grid.flatMap((row, y) =>
        row.map((v, x) => (
          <div
            key={`${y}-${x}`}
            className="aspect-square rounded-[1px]"
            style={{ backgroundColor: v ? "#0f172a" : "#ffffff" }}
            aria-hidden="true"
          />
        )),
      )}
    </div>
  );
}

