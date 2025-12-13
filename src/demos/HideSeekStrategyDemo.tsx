import { useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type Strategy = {
  id: string;
  hiderZh: string;
  hiderEn: string;
  seekerZh: string;
  seekerEn: string;
  noteZh: string;
  noteEn: string;
};

const strategies: Strategy[] = [
  {
    id: "wall",
    hiderZh: "用挡板建小围栏，躲角落",
    hiderEn: "Build a wall enclosure; hide in corner",
    seekerZh: "尝试绕行或翻越挡板",
    seekerEn: "Go around or climb over walls",
    noteZh: "最初阶段，隐藏者学会搭建障碍，搜寻者尝试基本突破。",
    noteEn: "Early phase: hiders learn to place walls; seekers attempt basic bypass.",
  },
  {
    id: "stack",
    hiderZh: "锁住道具，防止被用来翻越",
    hiderEn: "Lock tools to prevent climbing",
    seekerZh: "堆叠箱子并跳跃观察",
    seekerEn: "Stack boxes and jump to scout",
    noteZh: "进阶策略：双方利用/限制道具，策略共进化。",
    noteEn: "Advanced: tool use/denial co-evolves on both sides.",
  },
  {
    id: "coop",
    hiderZh: "多蓝方互相遮挡视线，协作防守",
    hiderEn: "Multiple hiders shield each other, cooperative defense",
    seekerZh: "多红方分头搜索并包夹",
    seekerEn: "Multiple seekers split search and flank",
    noteZh: "多智能体合作与对抗，体现策略复杂度提升。",
    noteEn: "Multi-agent cooperation/adversarial play increases strategy complexity.",
  },
];

export function HideSeekStrategyDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [strategy, setStrategy] = useState<Strategy>(strategies[0]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "攻防演进" : "Adversarial Evolution"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "藏猫猫策略共进化" : "Hide-and-Seek Strategy Evolution"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "切换阶段，观察藏/搜双方策略与工具使用的演进。"
              : "Toggle phases to see how hiding/seeking strategies and tool use evolve."}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          OpenAI hide-and-seek
        </span>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="space-y-2">
          {strategies.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStrategy(s)}
              className={[
                "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                strategy.id === s.id
                  ? "border-amber-600 bg-amber-50 text-amber-800"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {isZh ? s.hiderZh : s.hiderEn}
            </button>
          ))}
        </div>

        <div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
            {isZh ? "搜寻者应对" : "Seeker response"}
          </p>
          <p className="font-semibold text-slate-900">
            {isZh ? strategy.seekerZh : strategy.seekerEn}
          </p>
          <p className="mt-2 text-xs text-slate-700">{isZh ? strategy.noteZh : strategy.noteEn}</p>
        </div>
      </div>
    </div>
  );
}
