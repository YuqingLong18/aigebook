import { useMemo, useState } from "react";

type CounterexampleFinderDemoProps = {
  lang: "en" | "zh";
};

type Mode = "bruteforce" | "guided";

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Sample = {
  split: number;
  f: number;
};

function bound(n: number) {
  return Math.sqrt(Math.max(1, n - 1)) + 1;
}

function syntheticF(n: number, split: number) {
  const base = bound(n);
  const clusterShape = Math.abs(split - 0.5); // closer to 0.5 => two clusters
  const delta = (clusterShape - 0.18) * 2.2;
  const nEffect = n >= 19 ? -0.28 : 0.05;
  return base + delta + nEffect;
}

export function CounterexampleFinderDemo({ lang }: CounterexampleFinderDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：体验“反例”搜索如何让猜想更快被验证/证伪",
        desc: "用“生成 → 计算 → 筛选危险样本 → 更新生成器”的循环，去寻找 f 低于下界的反例（对应文本中的 AutoGraphiX 思路）。",
        reset: "重置",
        nLabel: "节点数 n",
        modeLabel: "搜索方式",
        brute: "暴力随机",
        guided: "学习引导（保留更危险样本）",
        iters: "迭代轮数",
        batch: "每轮生成样本数",
        keep: "每轮保留危险样本数",
        bound: "猜想下界",
        best: "当前最危险样本",
        found: "发现反例",
        notFound: "未发现反例",
        split: "两团程度（0=一团，1=两团）",
        note:
          "证伪只需要一个反例；机器可以把搜索重点放在“更可能违反猜想”的区域，从而显著减少无效尝试。",
      }
    : {
        goal: "Goal: Feel how counterexample search can validate/disprove conjectures faster",
        desc: "Run a loop of “generate → evaluate → keep dangerous samples → update generator” to hunt for an f below the bound (mirroring the AutoGraphiX idea).",
        reset: "Reset",
        nLabel: "Graph size n",
        modeLabel: "Search mode",
        brute: "Brute random",
        guided: "ML-guided (keep most dangerous)",
        iters: "Iterations",
        batch: "Samples per iteration",
        keep: "Dangerous samples kept",
        bound: "Conjecture bound",
        best: "Most dangerous sample",
        found: "Counterexample found",
        notFound: "No counterexample found",
        split: "Two-cluster tendency (0=one, 1=two)",
        note:
          "Disproof needs only one counterexample. A guided generator focuses search on regions that are more likely to violate the conjecture, cutting wasted trials.",
      };

  const [n, setN] = useState(19);
  const [mode, setMode] = useState<Mode>("guided");
  const [iters, setIters] = useState(6);
  const [batch, setBatch] = useState(40);
  const [keep, setKeep] = useState(6);

  const reset = () => {
    setN(19);
    setMode("guided");
    setIters(6);
    setBatch(40);
    setKeep(6);
  };

  const sim = useMemo(() => {
    const seed = n * 1009 + iters * 97 + batch * 7 + keep * 11 + (mode === "guided" ? 3 : 1);
    const rand = mulberry32(seed);

    let mean = 0.2;
    let spread = 0.35;
    const history: { iter: number; best: Sample; kept: Sample[]; mean: number }[] = [];

    const clip01 = (x: number) => Math.max(0, Math.min(1, x));

    for (let iter = 1; iter <= iters; iter++) {
      const samples: Sample[] = [];
      for (let i = 0; i < batch; i++) {
        const u = rand();
        const v = rand();
        const g = Math.sqrt(-2 * Math.log(Math.max(1e-9, u))) * Math.cos(2 * Math.PI * v);
        const split = clip01(mean + g * spread);
        const f = syntheticF(n, split);
        samples.push({ split, f });
      }
      samples.sort((a, b) => a.f - b.f);
      const kept = samples.slice(0, Math.max(1, Math.min(keep, batch)));
      const best = kept[0];
      history.push({ iter, best, kept, mean });

      if (mode === "guided") {
        const nextMean = kept.reduce((acc, s) => acc + s.split, 0) / kept.length;
        mean = 0.75 * mean + 0.25 * nextMean;
        spread = Math.max(0.08, spread * 0.82);
      } else {
        mean = 0.2;
        spread = 0.35;
      }
    }

    const bestOverall = history.reduce(
      (acc, h) => (h.best.f < acc.f ? h.best : acc),
      history[0]?.best ?? { split: 0.5, f: syntheticF(n, 0.5) },
    );
    const conjectureBound = bound(n);
    const violates = bestOverall.f < conjectureBound;

    return { history, bestOverall, conjectureBound, violates };
  }, [batch, iters, keep, mode, n]);

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
            {t.nLabel}
            <input
              type="range"
              min={10}
              max={30}
              step={1}
              value={n}
              onChange={(e) => setN(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{n}</span>
          </label>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">{t.modeLabel}</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className={[
                  "rounded-lg border px-3 py-2 text-left text-xs font-semibold transition",
                  mode === "bruteforce"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
                onClick={() => setMode("bruteforce")}
                aria-pressed={mode === "bruteforce"}
              >
                {t.brute}
              </button>
              <button
                type="button"
                className={[
                  "rounded-lg border px-3 py-2 text-left text-xs font-semibold transition",
                  mode === "guided"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
                onClick={() => setMode("guided")}
                aria-pressed={mode === "guided"}
              >
                {t.guided}
              </button>
            </div>
          </div>

          <label className="block text-sm font-semibold text-slate-700">
            {t.iters}
            <input
              type="range"
              min={1}
              max={10}
              value={iters}
              onChange={(e) => setIters(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{iters}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.batch}
            <input
              type="range"
              min={10}
              max={80}
              step={5}
              value={batch}
              onChange={(e) => setBatch(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{batch}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.keep}
            <input
              type="range"
              min={1}
              max={20}
              value={keep}
              onChange={(e) => setKeep(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{keep}</span>
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.bound}</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">{sim.conjectureBound.toFixed(3)}</p>
              <p className="mt-2 text-xs text-slate-600">
                {isZh ? "若找到 f < 下界，则证伪。" : "If we find f < bound, the conjecture is disproved."}
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.best}</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">{sim.bestOverall.f.toFixed(3)}</p>
              <p className="mt-2 text-xs text-slate-600">
                {t.split}: <span className="font-semibold text-slate-900">{sim.bestOverall.split.toFixed(2)}</span>
              </p>
              <div
                className={[
                  "mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                  sim.violates ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700",
                ].join(" ")}
              >
                {sim.violates ? t.found : t.notFound}
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {isZh ? "每轮最危险样本" : "Best-of-iteration trajectory"}
            </p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              {sim.history.map((h) => (
                <div key={h.iter} className="rounded-lg bg-white px-3 py-2 text-xs text-slate-700 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">
                      {isZh ? `第 ${h.iter} 轮` : `Iter ${h.iter}`}
                    </span>
                    <span
                      className={[
                        "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                        h.best.f < sim.conjectureBound ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600",
                      ].join(" ")}
                    >
                      f={h.best.f.toFixed(3)}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-slate-600">
                    <span>
                      {t.split}: <strong className="text-slate-900">{h.best.split.toFixed(2)}</strong>
                    </span>
                    <span>
                      {isZh ? "生成均值" : "Generator mean"}:{" "}
                      <strong className="text-slate-900">{h.mean.toFixed(2)}</strong>
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full bg-brand-500"
                      style={{ width: `${Math.max(4, Math.min(100, h.best.split * 100))}%` }}
                    />
                  </div>
                </div>
              ))}
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

