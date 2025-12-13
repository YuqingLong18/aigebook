import { useEffect, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

export function GanTrainerDemo({ lang }: Props) {
  const isZh = lang === "zh";
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<"balance" | "weakD" | "weakG">("balance");

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 1400);
    return () => clearInterval(id);
  }, []);

  const labels = {
    balance: isZh ? "对抗平衡" : "Balanced training",
    weakD: isZh ? "判别器弱" : "Weak discriminator",
    weakG: isZh ? "生成器弱" : "Weak generator",
  };

  const note =
    mode === "balance"
      ? isZh
        ? "生成器和判别器交替提升，假图逐渐逼真。"
        : "Generator and discriminator leapfrog, fakes become realistic."
      : mode === "weakD"
        ? isZh
          ? "判别器过弱，生成器容易作弊，出现伪影。"
          : "Weak discriminator lets the generator cheat—artifacts slip through."
        : isZh
          ? "生成器过弱，判别器总能识别，训练停滞。"
          : "Weak generator: discriminator always wins and learning stalls.";

  const fakeQuality = mode === "balance" ? "≈ 0.9" : mode === "weakD" ? "≈ 0.6" : "≈ 0.3";
  const discAccuracy = mode === "balance" ? "≈ 0.5" : mode === "weakD" ? "≈ 0.2" : "≈ 0.9";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">GAN</p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "生成对抗：博弈中的平衡" : "Generative Adversarial Play"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "调节生成器/判别器强弱，观察假样本质量与判别准确率的拉锯。"
              : "Toggle generator/discriminator strength to see how fake quality and discriminator accuracy tug-of-war."}
          </p>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {labels[mode]}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <div className="flex-1 rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "训练状态" : "Training state"}</p>
          <div className="mt-2 grid grid-cols-4 gap-2 text-center text-xs font-semibold">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={[
                  "rounded-lg border px-2 py-3 transition",
                  step === i ? "border-brand-600 bg-brand-50 text-brand-800" : "border-slate-200 bg-slate-50",
                ].join(" ")}
              >
                {isZh ? `第 ${i + 1} 轮` : `Step ${i + 1}`}
                <div className="mt-1 text-[11px] font-normal text-slate-600">
                  {i % 2 === 0 ? (isZh ? "判别器学习" : "Train D") : isZh ? "生成器学习" : "Train G"}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-600">
            {isZh
              ? "生成器想骗过判别器；判别器想识破假样本。理想状态是双方实力相当。"
              : "Generator tries to fool; discriminator tries to catch. Best results come when both are strong."}
          </p>
        </div>

        <div className="w-full max-w-sm rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "强弱切换" : "Strength toggle"}</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {(["balance", "weakD", "weakG"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={[
                  "rounded-lg border px-2 py-2 text-sm font-semibold transition",
                  mode === m
                    ? "border-indigo-600 bg-indigo-50 text-indigo-800"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                {labels[m]}
              </button>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs text-slate-500">{isZh ? "假样本质量" : "Fake quality"}</p>
              <p className="text-lg font-semibold text-slate-900">{fakeQuality}</p>
              <p className="text-xs text-slate-600">
                {isZh ? "越接近 1 越像真图。" : "Closer to 1 means more realistic."}
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs text-slate-500">{isZh ? "判别准确率" : "Discriminator accuracy"}</p>
              <p className="text-lg font-semibold text-slate-900">{discAccuracy}</p>
              <p className="text-xs text-slate-600">
                {isZh ? "0.5 表示真假难分。" : "0.5 means indistinguishable."}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-700">{note}</p>
        </div>
      </div>
    </div>
  );
}
