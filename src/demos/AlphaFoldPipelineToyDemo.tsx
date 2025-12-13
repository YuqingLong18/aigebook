import { useMemo, useState } from "react";

type AlphaFoldPipelineToyDemoProps = {
  lang: "en" | "zh";
};

type Mode = "alphafold2" | "alphafold3";

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function AlphaFoldPipelineToyDemo({ lang }: AlphaFoldPipelineToyDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：理解 AlphaFold2/3 如何把“序列 → 结构/相互作用”变成端到端预测任务",
        desc: "用玩具控制项模拟两个关键来源：基因库（同源序列/共变约束）与结构库（模板）。观察它们如何影响“置信度/误差”。",
        reset: "重置",
        mode: "系统版本",
        af2: "AlphaFold2：预测蛋白 3D 结构",
        af3: "AlphaFold3：进一步预测多分子相互作用",
        msa: "同源序列数量（MSA 深度）",
        templates: "结构模板可用",
        recycle: "迭代回收次数（recycling）",
        ligands: "加入配体/离子/核酸（相互作用）",
        confidence: "预测置信度（类比 pLDDT）",
        error: "预测误差（Å，越低越好）",
        takeaway:
          "直觉：MSA 越深、模板越好、迭代越充分 → 约束越强、结构越可靠；AlphaFold3 还把“谁和谁怎么结合”纳入预测。",
      }
    : {
        goal: "Goal: See how AlphaFold2/3 turn “sequence → structure/interactions” into an end-to-end prediction task",
        desc: "Toy controls mimic two key sources: gene databases (homologs/co-variation constraints) and structure databases (templates). See how they affect “confidence/error”.",
        reset: "Reset",
        mode: "System version",
        af2: "AlphaFold2: predict protein 3D structure",
        af3: "AlphaFold3: additionally predict biomolecular interactions",
        msa: "Homolog count (MSA depth)",
        templates: "Templates available",
        recycle: "Recycling steps",
        ligands: "Add ligands/ions/nucleic acids (interactions)",
        confidence: "Confidence (pLDDT-like)",
        error: "Error (Å, lower is better)",
        takeaway:
          "Intuition: deeper MSA + better templates + more recycling → stronger constraints and more reliable structure; AlphaFold3 also predicts how molecules interact.",
      };

  const [mode, setMode] = useState<Mode>("alphafold2");
  const [msa, setMsa] = useState(200);
  const [templates, setTemplates] = useState(true);
  const [recycle, setRecycle] = useState(3);
  const [ligands, setLigands] = useState(true);

  const reset = () => {
    setMode("alphafold2");
    setMsa(200);
    setTemplates(true);
    setRecycle(3);
    setLigands(true);
  };

  const score = useMemo(() => {
    const msaClamped = clamp(msa, 0, 1000);
    const msaGain = Math.log10(1 + msaClamped) / Math.log10(1001);
    const templateGain = templates ? 0.22 : 0;
    const recycleGain = clamp(recycle, 0, 8) * 0.05;

    const baseConfidence = 0.45 + msaGain * 0.4 + templateGain + recycleGain;
    const confidence = clamp(baseConfidence, 0.1, 0.98);

    const baseError = 4.2 - confidence * 3.2;
    const interactionPenalty = mode === "alphafold3" ? (ligands ? 0.25 : 0.75) : 0;
    const error = clamp(baseError + interactionPenalty, 0.6, 6.0);

    const explain = [
      { label: isZh ? "MSA 约束" : "MSA constraints", value: msaGain },
      { label: isZh ? "模板参考" : "Templates", value: templateGain / 0.22 },
      { label: isZh ? "迭代修正" : "Recycling", value: recycleGain / 0.4 },
    ];

    return { confidence, error, explain, msaGain };
  }, [isZh, ligands, mode, msa, recycle, templates]);

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
            <p className="text-sm font-semibold text-slate-700">{t.mode}</p>
            <div className="grid gap-2">
              <ModeButton label={t.af2} active={mode === "alphafold2"} onClick={() => setMode("alphafold2")} />
              <ModeButton label={t.af3} active={mode === "alphafold3"} onClick={() => setMode("alphafold3")} />
            </div>
          </div>

          <label className="block text-sm font-semibold text-slate-700">
            {t.msa}
            <input
              type="range"
              min={0}
              max={1000}
              step={10}
              value={msa}
              onChange={(e) => setMsa(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{msa}</span>
          </label>

          <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            <span>{t.templates}</span>
            <input
              type="checkbox"
              checked={templates}
              onChange={(e) => setTemplates(e.target.checked)}
              className="h-4 w-4 accent-brand-500"
              aria-label={t.templates}
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            {t.recycle}
            <input
              type="range"
              min={0}
              max={8}
              step={1}
              value={recycle}
              onChange={(e) => setRecycle(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{recycle}</span>
          </label>

          {mode === "alphafold3" && (
            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <span>{t.ligands}</span>
              <input
                type="checkbox"
                checked={ligands}
                onChange={(e) => setLigands(e.target.checked)}
                className="h-4 w-4 accent-brand-500"
                aria-label={t.ligands}
              />
            </label>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <MetricCard
              title={t.confidence}
              value={`${Math.round(score.confidence * 100)}`}
              unit="/100"
              hint={isZh ? "越高通常越可靠" : "Higher tends to be more reliable"}
              barPct={score.confidence * 100}
            />
            <MetricCard
              title={t.error}
              value={score.error.toFixed(2)}
              unit="Å"
              hint={isZh ? "越低越接近实验精度" : "Lower approaches experimental precision"}
              barPct={100 - (score.error / 6.0) * 100}
            />
          </div>

          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {isZh ? "约束来源（示意占比）" : "Constraint sources (illustration)"}
            </p>
            <div className="mt-2 space-y-2">
              {score.explain.map((x) => (
                <div key={x.label} className="flex items-center gap-3">
                  <span className="w-28 text-xs font-semibold text-slate-700">{x.label}</span>
                  <div className="h-2 flex-1 rounded-full bg-white">
                    <div className="h-2 rounded-full bg-indigo-500" style={{ width: `${clamp(x.value, 0, 1) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
            {t.takeaway}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModeButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className={[
        "rounded-lg border px-3 py-2 text-left text-xs font-semibold transition",
        active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-300",
      ].join(" ")}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

function MetricCard({
  title,
  value,
  unit,
  hint,
  barPct,
}: {
  title: string;
  value: string;
  unit: string;
  hint: string;
  barPct: number;
}) {
  return (
    <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{title}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">
        {value}
        <span className="ml-1 text-sm font-semibold text-slate-600">{unit}</span>
      </p>
      <p className="mt-1 text-xs text-slate-600">{hint}</p>
      <div className="mt-2 h-2 rounded-full bg-white">
        <div className="h-2 rounded-full bg-brand-500" style={{ width: `${clamp(barPct, 0, 100)}%` }} />
      </div>
    </div>
  );
}

