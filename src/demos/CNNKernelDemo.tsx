import { useMemo, useState } from "react";

type CNNKernelDemoProps = {
  lang: "en" | "zh";
};

const inputGrid = [
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 1, 0, 1],
  [0, 0, 1, 1],
];

export function CNNKernelDemo({ lang }: CNNKernelDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：观察卷积核的局部感受野与共享",
          desc: "选择卷积核，查看 2D 局部加权的输出特征图。",
          reset: "重置",
          kernel: "卷积核",
          output: "输出特征图",
          note: "卷积核在各位置共享，滑动时提取局部模式；相比全连接，参数更少且关注局部。用 0 填充边界。",
        }
      : {
          goal: "Goal: See local receptive fields and weight sharing",
          desc: "Pick a kernel to view the 2D weighted output map.",
          reset: "Reset",
          kernel: "Kernel",
          output: "Output feature map",
          note: "The same kernel slides everywhere to extract local patterns with fewer parameters than full connections. Zero-padding applied at borders.",
        };

  const kernels = useMemo(
    () => ({
      edge: [
        [1, -1, 1],
        [-1, 1, -1],
        [1, -1, 1],
      ],
      blur: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ],
      sharpen: [
        [0, -1, 0],
        [-1, 5, -1],
        [0, -1, 0],
      ],
    }),
    [],
  );

  const [selected, setSelected] = useState<"edge" | "blur" | "sharpen">("edge");

  const output = useMemo(() => {
    const k = kernels[selected];
    const out: number[][] = [];
    for (let i = 0; i < inputGrid.length; i++) {
      out[i] = [];
      for (let j = 0; j < inputGrid[0].length; j++) {
        let sum = 0;
        for (let ki = 0; ki < 3; ki++) {
          for (let kj = 0; kj < 3; kj++) {
            const x = i + ki - 1;
            const y = j + kj - 1;
            const val = inputGrid[x]?.[y] ?? 0;
            sum += val * k[ki][kj];
          }
        }
        out[i][j] = Math.round(sum * 10) / 10;
      }
    }
    return out;
  }, [kernels, selected]);

  const reset = () => setSelected("edge");

  const label = (key: "edge" | "blur" | "sharpen") =>
    key === "edge" ? (lang === "zh" ? "边缘" : "Edge") : key === "blur" ? (lang === "zh" ? "平滑" : "Blur") : lang === "zh" ? "锐化" : "Sharpen";

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
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.kernel}</p>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(kernels) as Array<"edge" | "blur" | "sharpen">).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                className={[
                  "rounded-xl border px-3 py-2 text-sm font-semibold transition",
                  selected === key
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                {label(key)}
              </button>
            ))}
          </div>
          <Grid title="Input (feature map)" data={inputGrid} />
        </div>

        <div className="space-y-2">
          <Grid title={`${t.kernel}: ${label(selected)}`} data={kernels[selected]} />
          <Grid title={t.output} data={output} />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
      </div>
    </div>
  );
}

function Grid({ title, data }: { title: string; data: number[][] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">{title}</p>
      <div className="mt-1 grid grid-cols-4 gap-1">
        {data.map((row, i) =>
          row.map((val, j) => (
            <div
              key={`${i}-${j}`}
              className="flex items-center justify-center rounded-md border border-slate-200 bg-white px-2 py-2 text-xs font-semibold text-slate-800"
            >
              {val}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
