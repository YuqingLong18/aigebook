import { useMemo, useState } from "react";

type LogicGateCircuitDemoProps = {
  lang: "en" | "zh";
};

export function LogicGateCircuitDemo({ lang }: LogicGateCircuitDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：用逻辑门组合简单电路",
          desc: "设置输入 A、B，查看 AND-OR 组合电路的输出，理解香农的“开关=逻辑”思想。",
          reset: "重置",
          input: "输入",
          output: "输出",
          explain: "解释",
        }
      : {
          goal: "Goal: Combine logic gates into a simple circuit",
          desc: "Set inputs A and B to see the AND-OR combo output—Shannon’s idea: switches = logic.",
          reset: "Reset",
          input: "Inputs",
          output: "Output",
          explain: "Explanation",
        };

  const [a, setA] = useState(1);
  const [b, setB] = useState(0);

  const out = useMemo(() => {
    const and1 = a && b ? 1 : 0;
    const or1 = a || b ? 1 : 0;
    return and1 || or1 ? 1 : 0;
  }, [a, b]);

  const reset = () => {
    setA(1);
    setB(0);
  };

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
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.input}</p>
          <Toggle label="A" value={a} onChange={setA} />
          <Toggle label="B" value={b} onChange={setB} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.output}</p>
          <div className="mt-1 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">{out}</div>
          <p className="mt-2 text-xs text-slate-600">
            {lang === "zh"
              ? "电路：AND(A,B) → OR(结果, A,B)。开关通=1，断=0。"
              : "Circuit: AND(A,B) then OR(with A,B). Switch on=1, off=0."}
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
    <label className="flex cursor-pointer items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm">
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
