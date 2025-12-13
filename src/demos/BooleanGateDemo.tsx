import { useMemo, useState } from "react";

type BooleanGateDemoProps = {
  lang: "en" | "zh";
};

type Gate = "and" | "or" | "xor" | "not";

export function BooleanGateDemo({ lang }: BooleanGateDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：体验布尔代数的基本逻辑门",
          desc: "选择逻辑门并设置输入，查看输出与真值表示例。",
          reset: "重置",
          gate: "逻辑门",
          input: "输入",
          output: "输出",
        }
      : {
          goal: "Goal: Explore basic Boolean logic gates",
          desc: "Pick a gate and set inputs to view outputs and a truth-table example.",
          reset: "Reset",
          gate: "Gate",
          input: "Input",
          output: "Output",
        };

  const [gate, setGate] = useState<Gate>("and");
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);

  const result = useMemo(() => {
    switch (gate) {
      case "and":
        return a && b ? 1 : 0;
      case "or":
        return a || b ? 1 : 0;
      case "xor":
        return a !== b ? 1 : 0;
      case "not":
        return a ? 0 : 1;
      default:
        return 0;
    }
  }, [a, b, gate]);

  const reset = () => {
    setGate("and");
    setA(1);
    setB(0);
  };

  const gateLabel = (g: Gate) =>
    g === "and" ? "AND" : g === "or" ? "OR" : g === "xor" ? "XOR" : lang === "zh" ? "NOT（单输入）" : "NOT (single input)";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
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

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.gate}</p>
          <div className="grid grid-cols-2 gap-2">
            {(["and", "or", "xor", "not"] as Gate[]).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGate(g)}
                className={[
                  "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                  gate === g ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                {gateLabel(g)}
              </button>
            ))}
          </div>

          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.input}</p>
          <div className="flex items-center gap-3">
            <Toggle label="A" value={a} onChange={setA} />
            {gate !== "not" && <Toggle label="B" value={b} onChange={setB} />}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.output}</p>
          <div className="mt-1 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {result}
          </div>
          <p className="mt-2 text-xs text-slate-600">
            {lang === "zh" ? "示例：p + q 代表“p 或 q”，p × q 代表“p 且 q”" : "Example: p + q means “p OR q”, p × q means “p AND q”"}
          </p>
        </div>
      </div>
    </div>
  );
}

type ToggleProps = {
  label: string;
  value: number;
  onChange: (val: number) => void;
};

function Toggle({ label, value, onChange }: ToggleProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
      <span className="text-sm font-semibold text-slate-800">{label}</span>
      <input
        type="checkbox"
        checked={value === 1}
        onChange={(e) => onChange(e.target.checked ? 1 : 0)}
        className="h-4 w-4 accent-brand-500"
      />
    </label>
  );
}
