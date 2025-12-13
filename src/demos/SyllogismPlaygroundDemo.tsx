import { useState } from "react";

type SyllogismPlaygroundDemoProps = {
  lang: "en" | "zh";
};

export function SyllogismPlaygroundDemo({ lang }: SyllogismPlaygroundDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：体验三段论的形式与前提真值",
          desc: "输入大前提与小前提，查看形式是否有效，并提醒前提真假需单独核实。",
          reset: "重置",
          major: "大前提",
          minor: "小前提",
          conclusion: "结论",
          validity: "推理形式",
          valid: "形式有效：若前提为真，则结论必真。",
          invalid: "形式无效：结论不一定成立。",
          reminder: "注意：三段论保证形式正确，不保证前提为真。",
        }
      : {
          goal: "Goal: Try syllogism form vs. premise truth",
          desc: "Enter major/minor premises and see if the structure is valid; premise truth is checked separately.",
          reset: "Reset",
          major: "Major premise",
          minor: "Minor premise",
          conclusion: "Conclusion",
          validity: "Inference form",
          valid: "Valid form: if premises are true, conclusion must be true.",
          invalid: "Invalid form: conclusion may not follow.",
          reminder: "Note: syllogism secures form, not premise truth.",
        };

  const [major, setMajor] = useState("All humans are mortal.");
  const [minor, setMinor] = useState("Socrates is human.");
  const [conclusion, setConclusion] = useState("Socrates is mortal.");

  const isValid = major.toLowerCase().includes("all") && minor.toLowerCase().includes(" is ");

  const reset = () => {
    setMajor("All humans are mortal.");
    setMinor("Socrates is human.");
    setConclusion("Socrates is mortal.");
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

      <div className="mt-3 space-y-2">
        <Input label={t.major} value={major} onChange={setMajor} />
        <Input label={t.minor} value={minor} onChange={setMinor} />
        <Input label={t.conclusion} value={conclusion} onChange={setConclusion} />
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.validity}</p>
        <p
          className={[
            "mt-1 inline-flex rounded-full px-3 py-1 text-xs font-bold",
            isValid ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700",
          ].join(" ")}
        >
          {isValid ? t.valid : t.invalid}
        </p>
        <p className="mt-2 text-xs text-slate-600">{t.reminder}</p>
      </div>
    </div>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
};

function Input({ label, value, onChange }: InputProps) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
      />
    </label>
  );
}
