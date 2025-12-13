import { useMemo, useState } from "react";

type Props = {
  lang: "en" | "zh";
};

type FaceSample = {
  id: string;
  name: string;
  label: string;
  embedding: number[];
};

const samples: FaceSample[] = [
  {
    id: "a",
    name: "Ava",
    label: "样本 A / Ava",
    embedding: [0.2, 0.4, 0.1, 0.7],
  },
  {
    id: "b",
    name: "Bo",
    label: "样本 B / Bo",
    embedding: [0.18, 0.45, 0.12, 0.68],
  },
  {
    id: "c",
    name: "Chen",
    label: "样本 C / Chen",
    embedding: [-0.3, 0.2, -0.4, 0.6],
  },
  {
    id: "d",
    name: "Dana",
    label: "样本 D / Dana",
    embedding: [-0.28, 0.22, -0.35, 0.58],
  },
];

export function FaceVerificationDemo({ lang }: Props) {
  const [probeId, setProbeId] = useState("a");
  const [candidateId, setCandidateId] = useState("b");
  const [threshold, setThreshold] = useState(0.85);
  const isZh = lang === "zh";

  const probe = samples.find((s) => s.id === probeId)!;
  const candidate = samples.find((s) => s.id === candidateId)!;

  const cosine = useMemo(() => {
    const dot = probe.embedding.reduce((acc, v, i) => acc + v * candidate.embedding[i], 0);
    const normA = Math.sqrt(probe.embedding.reduce((acc, v) => acc + v * v, 0));
    const normB = Math.sqrt(candidate.embedding.reduce((acc, v) => acc + v * v, 0));
    return dot / (normA * normB);
  }, [probe.embedding, candidate.embedding]);

  const isMatch = cosine >= threshold;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">
            {isZh ? "人脸验证：嵌入向量 + 阈值" : "Face Verification: Embeddings + Threshold"}
          </h3>
          <p className="text-sm text-slate-600">
            {isZh
              ? "深度模型将人脸映射为嵌入向量，通过余弦相似度与阈值判断是否为同一人。"
              : "Deep models map faces to embedding vectors; cosine similarity plus a threshold decides if two photos belong to the same person."}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <span className="inline-flex h-7 items-center rounded-full bg-emerald-50 px-3 font-semibold text-emerald-700">
            {isZh ? "验证模式" : "Verification mode"}
          </span>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "选择探针人脸" : "Probe face"}</p>
          <div className="mt-2 space-y-2">
            {samples.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setProbeId(s.id)}
                className={[
                  "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                  probeId === s.id
                    ? "border-brand-600 bg-brand-50 text-brand-800"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">
            {isZh ? "选择比对人脸" : "Candidate face"}
          </p>
          <div className="mt-2 space-y-2">
            {samples.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCandidateId(s.id)}
                className={[
                  "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                  candidateId === s.id
                    ? "border-indigo-600 bg-indigo-50 text-indigo-800"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-500">{isZh ? "相似度与阈值" : "Similarity & threshold"}</p>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-slate-600">{isZh ? "阈值" : "Threshold"}</span>
            <span className="font-semibold text-slate-900">{threshold.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.6}
            max={0.95}
            step={0.01}
            value={threshold}
            onChange={(e) => setThreshold(parseFloat(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
          <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">{isZh ? "余弦相似度" : "Cosine similarity"}</span>
              <span className="font-semibold">{cosine.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-slate-600">{isZh ? "结果" : "Result"}</span>
              <span
                className={[
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  isMatch ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700",
                ].join(" ")}
              >
                {isMatch ? (isZh ? "同一人" : "Match") : isZh ? "非同一人" : "Not a match"}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-600">
              {isZh
                ? "阈值越高，安全性越高但误拒率增加。实际系统会结合活体检测。"
                : "Higher thresholds boost security but may reject real users. Real systems combine this with liveness checks."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
