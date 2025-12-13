import { useMemo, useState } from "react";

type RamanujanMachineToyDemoProps = {
  lang: "en" | "zh";
};

type ConstantId = "pi" | "e" | "sqrt2";

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function constantValue(id: ConstantId) {
  if (id === "pi") return Math.PI;
  if (id === "e") return Math.E;
  return Math.SQRT2;
}

function constantLabel(id: ConstantId) {
  if (id === "pi") return "π";
  if (id === "e") return "e";
  return "√2";
}

function evalContinuedFraction(coeffs: number[]) {
  if (coeffs.length === 0) return { value: NaN, ok: false };
  let v = coeffs[coeffs.length - 1];
  if (!Number.isFinite(v) || v === 0) return { value: NaN, ok: false };
  for (let i = coeffs.length - 2; i >= 0; i--) {
    v = coeffs[i] + 1 / v;
    if (!Number.isFinite(v)) return { value: NaN, ok: false };
  }
  return { value: v, ok: true };
}

function formatCF(coeffs: number[]) {
  if (coeffs.length === 0) return "[]";
  if (coeffs.length === 1) return `[${coeffs[0]}]`;
  return `[${coeffs[0]}; ${coeffs.slice(1).join(", ")}]`;
}

export function RamanujanMachineToyDemo({ lang }: RamanujanMachineToyDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：用“试探 + 过滤”的方式生成常数的候选表达（类比 Ramanujan Machine）",
        desc: "随机生成连分数候选式，比较与目标常数的误差，把误差更小的当作“新猜想候选”。注意：接近不等于证明。",
        reset: "重置",
        constant: "目标常数",
        depth: "连分数长度",
        trials: "每轮尝试次数",
        rounds: "搜索轮数",
        tolerance: "标记为“很接近”的阈值",
        run: "运行搜索",
        best: "当前最佳候选",
        err: "绝对误差",
        close: "接近阈值（可作为猜想线索）",
        notClose: "未达到阈值（仍是候选）",
        list: "Top 候选（误差从小到大）",
        note:
          "Ramanujan Machine 的核心不是“把近似当真理”，而是系统性地产生值得数学家去证明的猜想线索。",
      }
    : {
        goal: "Goal: Generate candidate expressions for constants (an analogy to Ramanujan Machine)",
        desc: "Randomly propose continued fractions, compare the error to the target constant, and keep the best as “conjecture candidates”. Close is not proof.",
        reset: "Reset",
        constant: "Target constant",
        depth: "Continued-fraction length",
        trials: "Trials per round",
        rounds: "Search rounds",
        tolerance: "“Very close” threshold",
        run: "Run search",
        best: "Current best candidate",
        err: "Absolute error",
        close: "Within threshold (a conjecture hint)",
        notClose: "Not within threshold (still a candidate)",
        list: "Top candidates (smallest error first)",
        note:
          "The Ramanujan Machine idea is not “treat approximations as truth”, but to systematically generate leads that are worth proving.",
      };

  const [constant, setConstant] = useState<ConstantId>("pi");
  const [depth, setDepth] = useState(6);
  const [trials, setTrials] = useState(120);
  const [rounds, setRounds] = useState(5);
  const [tolerancePow, setTolerancePow] = useState(4); // 1e-4
  const [runId, setRunId] = useState(0);

  const reset = () => {
    setConstant("pi");
    setDepth(6);
    setTrials(120);
    setRounds(5);
    setTolerancePow(4);
    setRunId(0);
  };

  const sim = useMemo(() => {
    const target = constantValue(constant);
    const tol = Math.pow(10, -tolerancePow);
    const seed = runId + depth * 999 + trials * 7 + rounds * 97 + tolerancePow * 17 + constant.length * 13;
    const rand = mulberry32(seed);

    type Candidate = { coeffs: number[]; value: number; err: number };
    let elites: Candidate[] = [];

    const propose = (base?: Candidate): number[] => {
      const coeffs: number[] = [];
      for (let i = 0; i < depth; i++) {
        const min = i === 0 ? 1 : 1;
        const max = i === 0 ? 6 : 12;
        const raw = base ? base.coeffs[i] : Math.floor(min + rand() * (max - min + 1));
        const mutate = base ? (rand() < 0.35 ? raw + (rand() < 0.5 ? -1 : 1) : raw) : raw;
        const v = Math.max(min, Math.min(max, mutate));
        coeffs.push(v);
      }
      return coeffs;
    };

    for (let r = 0; r < rounds; r++) {
      const candidates: Candidate[] = [];
      for (let i = 0; i < trials; i++) {
        const base = elites.length > 0 && rand() < 0.7 ? elites[Math.floor(rand() * elites.length)] : undefined;
        const coeffs = propose(base);
        const evaluated = evalContinuedFraction(coeffs);
        if (!evaluated.ok) continue;
        const value = evaluated.value;
        const err = Math.abs(value - target);
        candidates.push({ coeffs, value, err });
      }
      candidates.sort((a, b) => a.err - b.err);
      elites = candidates.slice(0, 8);
    }

    const top = elites[0];
    const list = elites.slice(0, 6);
    const isClose = top ? top.err < tol : false;

    return { target, tol, top, list, isClose };
  }, [constant, depth, rounds, runId, tolerancePow, trials]);

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
            {t.constant}
            <select
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
              value={constant}
              onChange={(e) => setConstant(e.target.value as ConstantId)}
            >
              <option value="pi">π</option>
              <option value="e">e</option>
              <option value="sqrt2">√2</option>
            </select>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.depth}
            <input
              type="range"
              min={3}
              max={10}
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{depth}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.trials}
            <input
              type="range"
              min={40}
              max={300}
              step={10}
              value={trials}
              onChange={(e) => setTrials(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{trials}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.rounds}
            <input
              type="range"
              min={1}
              max={10}
              value={rounds}
              onChange={(e) => setRounds(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{rounds}</span>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.tolerance}
            <input
              type="range"
              min={2}
              max={8}
              value={tolerancePow}
              onChange={(e) => setTolerancePow(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">1e-{tolerancePow}</span>
          </label>

          <button
            type="button"
            onClick={() => setRunId((x) => x + 1)}
            className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {t.run}
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.best}</p>
              {sim.top ? (
                <>
                  <p className="mt-2 text-base font-semibold text-slate-900">
                    {constantLabel(constant)} ≈ {sim.top.value.toFixed(10)}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    {t.err}: <span className="font-semibold text-slate-900">{sim.top.err.toExponential(2)}</span>
                  </p>
                  <p className="mt-2 text-xs text-slate-600">
                    {isZh ? "候选连分数" : "Candidate CF"}:{" "}
                    <span className="font-semibold text-slate-900">{formatCF(sim.top.coeffs)}</span>
                  </p>
                  <div
                    className={[
                      "mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                      sim.isClose ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700",
                    ].join(" ")}
                  >
                    {sim.isClose ? t.close : t.notClose}
                  </div>
                </>
              ) : (
                <p className="mt-2 text-xs text-slate-600">{isZh ? "暂无候选" : "No candidate yet"}</p>
              )}
            </div>

            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {isZh ? "目标值" : "Target"}
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">
                {constantLabel(constant)} = {sim.target.toFixed(10)}
              </p>
              <p className="mt-1 text-xs text-slate-600">
                {isZh ? "阈值" : "Threshold"}: <span className="font-semibold text-slate-900">{sim.tol.toExponential(1)}</span>
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.list}</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              {sim.list.map((c) => (
                <div key={formatCF(c.coeffs)} className="rounded-lg bg-white px-3 py-2 text-xs text-slate-700 shadow-sm">
                  <p className="font-semibold text-slate-900">
                    {formatCF(c.coeffs)}{" "}
                    <span className="ml-2 text-[11px] font-semibold text-slate-600">
                      err {c.err.toExponential(2)}
                    </span>
                  </p>
                  <p className="mt-1 text-[11px] text-slate-600">
                    value {c.value.toFixed(10)}
                  </p>
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

