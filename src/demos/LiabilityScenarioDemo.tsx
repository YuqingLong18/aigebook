import { useMemo, useState } from "react";

type Scenario = "assist" | "pilot" | "full";

type LiabilityScenarioDemoProps = {
  lang: "en" | "zh";
};

export function LiabilityScenarioDemo({ lang }: LiabilityScenarioDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：自动驾驶事故责任思考",
          desc: "选择自动化级别，查看可能的责任主体提示。",
          reset: "重置",
          scenario: "自动化级别",
          parties: "可能相关方",
          note:
            "越高阶自动化，制造商/开发者责任越突出；辅助驾驶强调驾驶员注意义务；法规仍在演进。",
        }
      : {
          goal: "Goal: Responsibility in self-driving incidents",
          desc: "Pick automation level to see likely responsible parties.",
          reset: "Reset",
          scenario: "Automation level",
          parties: "Likely parties",
          note:
            "Higher autonomy shifts more responsibility to makers/developers; assistive modes still demand driver vigilance; laws are evolving.",
        };

  const [scenario, setScenario] = useState<Scenario>("assist");

  const detail = useMemo(() => {
    if (scenario === "assist") {
      return lang === "zh"
        ? ["驾驶员需全程注意", "厂商需明确系统限制"]
        : ["Driver must stay alert", "Maker must state system limits"];
    }
    if (scenario === "pilot") {
      return lang === "zh"
        ? ["驾驶员与系统共同监控", "软件/硬件供应商承担部分责任"]
        : ["Driver + system co-monitor", "Software/hardware suppliers share responsibility"];
    }
    return lang === "zh"
      ? ["制造商/开发者承担主要责任", "道路/基础设施管理可能相关"]
      : ["Maker/developer bear primary responsibility", "Road/infrastructure managers may be involved"];
  }, [lang, scenario]);

  const reset = () => setScenario("assist");

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
        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.scenario}</p>
          {[
            { key: "assist", label: lang === "zh" ? "辅助驾驶" : "Assist" },
            { key: "pilot", label: lang === "zh" ? "高级自动驾驶" : "High automation" },
            { key: "full", label: lang === "zh" ? "完全自动驾驶" : "Full automation" },
          ].map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setScenario(opt.key as Scenario)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm font-semibold transition",
                scenario === opt.key ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.parties}</p>
          <ul className="mt-1 list-disc space-y-1 pl-4">
            {detail.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <div className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-[11px] text-amber-800">{t.note}</div>
        </div>
      </div>
    </div>
  );
}
