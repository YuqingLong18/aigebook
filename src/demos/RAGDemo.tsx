import { useMemo, useState } from "react";

type RAGDemoProps = {
  lang: "en" | "zh";
};

export function RAGDemo({ lang }: RAGDemoProps) {
  const t =
    lang === "zh"
      ? {
          goal: "目标：检索增强生成 (RAG) 如何降低幻觉",
          desc: "切换检索开关，查看事实准确率与响应。",
          reset: "重置",
          retrieval: "启用检索",
          accuracy: "事实准确率（模拟）",
          response: "模型回复",
          off: "模型凭记忆：可能过时或杜撰。",
          on: "模型引用最新材料：回答更可信。",
          note:
            "RAG 通过外部知识库检索最新材料，既减少幻觉也减轻模型记忆负担。",
        }
      : {
          goal: "Goal: See Retrieval-Augmented Generation reduce hallucination",
          desc: "Toggle retrieval to view factual accuracy and responses.",
          reset: "Reset",
          retrieval: "Enable retrieval",
          accuracy: "Factual accuracy (simulated)",
          response: "Model reply",
          off: "Model relies on memory: may be outdated or hallucinate.",
          on: "Model cites fresh sources: answer is more trustworthy.",
          note:
            "RAG pulls from external knowledge to cut hallucinations and ease the model’s memory load.",
        };

  const [enabled, setEnabled] = useState(true);

  const accuracy = useMemo(() => (enabled ? 92 : 68), [enabled]);
  const answer = enabled ? t.on : t.off;

  const reset = () => setEnabled(true);

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
          <label className="flex cursor-pointer items-center justify-between">
            <span className="font-semibold">{t.retrieval}</span>
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
              className="h-4 w-4 accent-brand-500"
            />
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <Metric value={accuracy} label={t.accuracy} />
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-600">{t.response}</p>
          <div className="mt-1 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            {answer}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-3 text-sm text-slate-700">
        {t.note}
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value}%</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
          style={{ width: `${value}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
