import { useMemo, useState } from "react";

type ProteinFoldHierarchyDemoProps = {
  lang: "en" | "zh";
};

type Level = "primary" | "secondary" | "tertiary" | "quaternary";

type Pattern = "mixed" | "hydrophobic-core" | "alternating";

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

type FoldId = "extended" | "compact" | "twoChain";

type FoldScore = {
  id: FoldId;
  label: string;
  energy: number;
  contacts: number;
  description: string;
};

export function ProteinFoldHierarchyDemo({ lang }: ProteinFoldHierarchyDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：把“序列 → 结构 → 功能”的关系看成可解释的层级",
        desc: "选择不同的序列模式与环境（温度/条件），观察哪种折叠形态更稳定（更低能量）。这对应 Anfinsen 的观点：序列决定最稳定的天然构象。",
        reset: "重置",
        level: "结构层级",
        primary: "一级结构：氨基酸序列",
        secondary: "二级结构：局部折叠（α 螺旋/β 折叠）",
        tertiary: "三级结构：整体三维折叠（最稳定形态）",
        quaternary: "四级结构：多条链的组合",
        pattern: "序列模式（玩具）",
        mixed: "混合",
        core: "疏水核更明显",
        alternating: "疏水/亲水交替",
        env: "环境强度（越大越“苛刻”）",
        sequence: "一级结构（H=疏水，P=亲水）",
        folds: "候选构象（玩具能量）",
        stable: "预测最稳定（最低能量）",
        note:
          "这是极简玩具：真实蛋白质折叠依赖复杂的物理化学作用与环境条件。这里仅用“疏水聚集更稳定”的直觉来解释层级与 Anfinsen 理论。",
      }
    : {
        goal: "Goal: Treat “sequence → structure → function” as an interpretable hierarchy",
        desc: "Pick a sequence pattern and environment severity to see which fold is most stable (lowest energy). This mirrors Anfinsen’s idea: the sequence determines the most stable native conformation.",
        reset: "Reset",
        level: "Structure level",
        primary: "Primary: amino-acid sequence",
        secondary: "Secondary: local motifs (α-helix / β-sheet)",
        tertiary: "Tertiary: global 3D fold (most stable)",
        quaternary: "Quaternary: multi-chain assembly",
        pattern: "Sequence pattern (toy)",
        mixed: "Mixed",
        core: "Stronger hydrophobic core",
        alternating: "Alternating H/P",
        env: "Environment severity (higher = harsher)",
        sequence: "Primary structure (H=hydrophobic, P=polar)",
        folds: "Candidate folds (toy energy)",
        stable: "Predicted most stable (lowest energy)",
        note:
          "This is a tiny toy model: real folding depends on complex physics/chemistry and conditions. We use only the intuition “hydrophobic packing tends to stabilize” to explain the hierarchy and Anfinsen’s theory.",
      };

  const [level, setLevel] = useState<Level>("primary");
  const [pattern, setPattern] = useState<Pattern>("hydrophobic-core");
  const [env, setEnv] = useState(35);
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setLevel("primary");
    setPattern("hydrophobic-core");
    setEnv(35);
    setSeed(1);
  };

  const sim = useMemo(() => {
    const rand = mulberry32(seed * 999 + env * 17);
    const length = 18;

    const seq: ("H" | "P")[] = [];
    for (let i = 0; i < length; i++) {
      const u = rand();
      if (pattern === "mixed") seq.push(u < 0.5 ? "H" : "P");
      if (pattern === "alternating") seq.push(i % 2 === 0 ? "H" : "P");
      if (pattern === "hydrophobic-core") seq.push(u < 0.62 ? "H" : "P");
    }

    // Toy “contacts” per fold; stable folds benefit from H-H contacts but are penalized by harsh environments.
    const envSeverity = clamp(env, 0, 100) / 100;
    const hCount = seq.filter((x) => x === "H").length;
    const hpTransitions = seq.reduce((acc, s, i) => (i === 0 ? acc : acc + (s !== seq[i - 1] ? 1 : 0)), 0);

    const foldScores: FoldScore[] = [
      {
        id: "extended",
        label: isZh ? "拉直（更易暴露）" : "Extended (more exposed)",
        contacts: Math.floor(hCount * 0.5),
        energy: 2.2 * envSeverity + 1.8 - hCount * 0.05 + hpTransitions * 0.01,
        description: isZh ? "结构松散，疏水残基更暴露，通常不稳定。" : "Loose structure; hydrophobics stay exposed—often unstable.",
      },
      {
        id: "compact",
        label: isZh ? "紧凑折叠（疏水核）" : "Compact (hydrophobic core)",
        contacts: Math.floor(hCount * 1.35),
        energy: 0.7 + envSeverity * 1.6 - hCount * 0.12 - (pattern === "hydrophobic-core" ? 0.2 : 0),
        description: isZh ? "把疏水残基尽量“埋进内部”，常对应更低能量。" : "Packs hydrophobics inward, often lowering energy.",
      },
      {
        id: "twoChain",
        label: isZh ? "双链装配（四级）" : "Two-chain assembly (quaternary)",
        contacts: Math.floor(hCount * 1.1),
        energy: 0.95 + envSeverity * 1.35 - hCount * 0.1 + (pattern === "alternating" ? 0.08 : 0),
        description: isZh ? "两条链协作形成界面，可能提升稳定性与功能。" : "Two chains form an interface that can stabilize and enable function.",
      },
    ];

    foldScores.sort((a, b) => a.energy - b.energy);
    const best = foldScores[0];

    const secondaryHint =
      hpTransitions <= 6
        ? isZh
          ? "更可能形成较长的局部结构段（例如螺旋/折叠片段）。"
          : "More likely to form longer local motifs (e.g., helix/sheet segments)."
        : isZh
          ? "局部结构更碎片化，可能更难稳定。"
          : "Local motifs may be fragmented and harder to stabilize.";

    return { seq, foldScores, best, hCount, hpTransitions, secondaryHint };
  }, [env, isZh, pattern, seed]);

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
            aria-label={isZh ? "换一条序列" : "New sequence"}
          >
            {isZh ? "换序列" : "New"}
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
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">{t.level}</p>
            <div className="grid gap-2">
              <LevelButton label={t.primary} active={level === "primary"} onClick={() => setLevel("primary")} />
              <LevelButton
                label={t.secondary}
                active={level === "secondary"}
                onClick={() => setLevel("secondary")}
              />
              <LevelButton
                label={t.tertiary}
                active={level === "tertiary"}
                onClick={() => setLevel("tertiary")}
              />
              <LevelButton
                label={t.quaternary}
                active={level === "quaternary"}
                onClick={() => setLevel("quaternary")}
              />
            </div>
          </div>

          <label className="block text-sm font-semibold text-slate-700">
            {t.pattern}
            <select
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
              value={pattern}
              onChange={(e) => setPattern(e.target.value as Pattern)}
            >
              <option value="mixed">{t.mixed}</option>
              <option value="hydrophobic-core">{t.core}</option>
              <option value="alternating">{t.alternating}</option>
            </select>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.env}
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={env}
              onChange={(e) => setEnv(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{env}</span>
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.sequence}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {sim.seq.map((aa, idx) => (
                <span
                  key={idx}
                  className={[
                    "rounded-md px-2 py-1 text-xs font-bold",
                    aa === "H" ? "bg-amber-100 text-amber-800" : "bg-sky-100 text-sky-800",
                  ].join(" ")}
                >
                  {aa}
                </span>
              ))}
            </div>
            <div className="mt-2 text-xs text-slate-600">
              H: <span className="font-semibold text-slate-900">{sim.hCount}</span> · transitions:{" "}
              <span className="font-semibold text-slate-900">{sim.hpTransitions}</span>
            </div>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.folds}</p>
              <div className="mt-2 space-y-2">
                {sim.foldScores.map((f) => (
                  <div
                    key={f.id}
                    className={[
                      "rounded-lg border px-3 py-2 text-xs shadow-sm",
                      f.id === sim.best.id ? "border-emerald-200 bg-emerald-50" : "border-slate-200 bg-white",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">{f.label}</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                        E {f.energy.toFixed(2)}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-600">
                      {isZh ? "疏水接触（示意）" : "H-H contacts (toy)"}:{" "}
                      <strong className="text-slate-900">{f.contacts}</strong>
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.stable}</p>
              <p className="mt-2 text-base font-semibold text-slate-900">{sim.best.label}</p>
              <p className="mt-2 text-sm text-slate-700">
                {level === "secondary" ? sim.secondaryHint : null}
                {level === "primary"
                  ? isZh
                    ? "一级结构就是“序列本身”。"
                    : "Primary structure is the sequence itself."
                  : level === "tertiary"
                    ? isZh
                      ? "三级结构强调“最低能量的整体折叠”。"
                      : "Tertiary structure focuses on the lowest-energy global fold."
                    : level === "quaternary"
                      ? isZh
                        ? "四级结构强调多条链的装配与相互作用。"
                        : "Quaternary structure highlights multi-chain assembly and interactions."
                      : null}
              </p>
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

function LevelButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-lg border px-3 py-2 text-left text-xs font-semibold transition",
        active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-300",
      ].join(" ")}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
