import { useMemo, useState } from "react";

type TuringMachineDemoProps = {
  lang: "en" | "zh";
};

type State = "start" | "flip1" | "halt";

const initialTape = ["1", "0", "1", "1", "_"];

export function TuringMachineDemo({ lang }: TuringMachineDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：体验图灵机读写与状态转移",
          desc: "简单示例：遇到“1”变成“0”并右移，遇到空白停机。",
          reset: "重置",
          step: "执行一步",
          state: "当前状态",
          head: "读写头位置",
          tape: "纸带",
        }
      : {
          goal: "Goal: See Turing machine read/write + state transitions",
          desc: 'Toy rule: on "1" write "0" and move right; halt on blank.',
          reset: "Reset",
          step: "Step",
          state: "Current state",
          head: "Head position",
          tape: "Tape",
        };

  const [tape, setTape] = useState([...initialTape]);
  const [head, setHead] = useState(0);
  const [state, setState] = useState<State>("start");

  const status = useMemo(() => (state === "halt" ? (lang === "zh" ? "停止" : "Halted") : state), [lang, state]);

  const handleStep = () => {
    if (state === "halt") return;
    const symbol = tape[head] ?? "_";
    if (symbol === "1") {
      const next = [...tape];
      next[head] = "0";
      setTape(next);
      setHead((h) => h + 1);
      setState("flip1");
    } else {
      setState("halt");
    }
  };

  const reset = () => {
    setTape([...initialTape]);
    setHead(0);
    setState("start");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{t.goal}</p>
          <p className="text-xs text-slate-600">{t.desc}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            type="button"
            onClick={handleStep}
          >
            {t.step}
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

      <div className="mt-3 space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
          <span>{t.state}</span>
          <span className="text-slate-900">{status}</span>
        </div>
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
          <span>{t.head}</span>
          <span className="text-slate-900">{head}</span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.tape}</p>
        <div className="flex gap-1 overflow-x-auto rounded-lg border border-slate-200 bg-white p-2 text-xs font-semibold text-slate-900 shadow-inner">
          {tape.map((cell, idx) => (
            <div
              key={`${cell}-${idx}`}
              className={[
                "flex h-10 w-10 items-center justify-center rounded-md border",
                idx === head ? "border-brand-500 bg-brand-50" : "border-slate-200",
              ].join(" ")}
            >
              {cell}
            </div>
          ))}
          {state !== "halt" && head >= tape.length && (
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-brand-500 bg-brand-50">_</div>
          )}
        </div>
      </div>
    </div>
  );
}
