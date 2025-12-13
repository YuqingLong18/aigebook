import { useMemo, useState } from "react";

type Architecture = "mlp" | "cnn" | "rnn" | "ae";

type ArchitectureExplorerDemoProps = {
  lang: "en" | "zh";
};

const ARCHES: Architecture[] = ["mlp", "cnn", "rnn", "ae"];

export function ArchitectureExplorerDemo({ lang }: ArchitectureExplorerDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：匹配任务与典型网络结构",
          desc: "选择一种结构，查看特点与适用场景。",
          reset: "重置",
          pick: "选择结构",
          traits: "结构特点",
          tasks: "典型任务",
        }
      : {
          goal: "Goal: Match tasks with typical neural structures",
          desc: "Pick an architecture to see its traits and best-fit tasks.",
          reset: "Reset",
          pick: "Choose architecture",
          traits: "Key traits",
          tasks: "Typical tasks",
        };

  const [arch, setArch] = useState<Architecture>("mlp");

  const info = useMemo(() => {
    const common = {
      mlp: {
        title: "MLP (Fully Connected)",
        traitsZh: ["层层全连接，表达通用", "可用 BP 训练任意深度"],
        tasksZh: ["表格分类/回归", "小型特征工程任务"],
        traitsEn: ["Dense connections, general-purpose", "Trainable with BP at arbitrary depth"],
        tasksEn: ["Tabular classification/regression", "Feature-engineered small tasks"],
      },
      cnn: {
        title: "CNN (卷积网络)",
        traitsZh: ["局部连接+权重共享", "可提取空间局部特征"],
        tasksZh: ["图像/视频识别", "局部纹理检测"],
        traitsEn: ["Local connections + weight sharing", "Extracts spatial/local features"],
        tasksEn: ["Image/video recognition", "Local texture detection"],
      },
      rnn: {
        title: "RNN (循环网络)",
        traitsZh: ["时间递归，具记忆性", "序列顺序敏感"],
        tasksZh: ["时间序列预测", "语言建模与翻译"],
        traitsEn: ["Temporal recurrence with memory", "Sensitive to order in sequences"],
        tasksEn: ["Time-series forecasting", "Language modeling/translation"],
      },
      ae: {
        title: "AE (自编码器)",
        traitsZh: ["瓶颈压缩，重构输入", "可提取紧凑特征"],
        tasksZh: ["降维/去噪", "生成式特征学习"],
        traitsEn: ["Bottleneck compression, reconstruct input", "Learns compact features"],
        tasksEn: ["Dimensionality reduction/denoising", "Generative feature learning"],
      },
    };
    return common[arch];
  }, [arch]);

  const reset = () => setArch("mlp");

  const isZh = lang === "zh";

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
        <div className="grid grid-cols-2 gap-2">
          {ARCHES.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setArch(key)}
              className={[
                "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                arch === key
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {key === "mlp" && (isZh ? "多层感知机" : "MLP")}
              {key === "cnn" && (isZh ? "卷积网络" : "CNN")}
              {key === "rnn" && (isZh ? "循环网络" : "RNN")}
              {key === "ae" && (isZh ? "自编码器" : "Autoencoder")}
            </button>
          ))}
        </div>

        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {info.title}
          </p>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{t.traits}</p>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm">
              {(isZh ? info.traitsZh : info.traitsEn).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{t.tasks}</p>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm">
              {(isZh ? info.tasksZh : info.tasksEn).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
