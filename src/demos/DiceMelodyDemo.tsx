import { useMemo, useState } from "react";

type DiceMelodyDemoProps = {
  lang: "en" | "zh";
};

type Method = "dice" | "markov" | "lstm" | "transformer";

const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(arr: readonly T[], rand: () => number) {
  return arr[Math.floor(rand() * arr.length)];
}

export function DiceMelodyDemo({ lang }: DiceMelodyDemoProps) {
  const isZh = lang === "zh";
  const t = isZh
    ? {
        goal: "目标：体验从“掷骰子”到 Markov、LSTM、Transformer 的作曲差异",
        desc: "切换方法、调整随机度，查看旋律的连贯度与重复动机。",
        reset: "重置",
        method: "生成方法",
        randomness: "随机度 / 温度",
        structure: "结构感",
        surprise: "新颖度",
        coherence: "连贯度",
        melody: "旋律片段",
        dice: "掷骰子（莫扎特小游戏）",
        markov: "Markov 链（Illiac Suite）",
        lstm: "LSTM / RNN",
        transformer: "Transformer 大模型",
        note:
          "骰子法靠随机拼接；Markov 根据转移概率续写；LSTM 记住长序列重复动机；Transformer 用注意力把全局结构与细节一起建模，生成更完整的乐段。",
      }
    : {
        goal: "Goal: Compare dice rolls, Markov chains, LSTM, and Transformers for melody generation",
        desc: "Toggle methods and randomness to see how coherence and motifs change.",
        reset: "Reset",
        method: "Method",
        randomness: "Randomness / temperature",
        structure: "Structure",
        surprise: "Surprise",
        coherence: "Coherence",
        melody: "Melody",
        dice: "Dice (Mozart’s game)",
        markov: "Markov chain (Illiac Suite)",
        lstm: "LSTM / RNN",
        transformer: "Transformer",
        note:
          "Dice stitching is random; Markov continues via transition probabilities; LSTMs remember long motifs; Transformers attend globally, yielding more complete sections.",
      };

  const [method, setMethod] = useState<Method>("dice");
  const [temp, setTemp] = useState(45);
  const [seed, setSeed] = useState(7);

  const data = useMemo(() => {
    const rand = mulberry32(seed + temp * 13 + method.length * 17);
    const randomness = temp / 100;
    const length = 16;
    let melody: string[] = [];

    if (method === "dice") {
      const phrases: string[][] = [
        ["C4", "E4", "G4", "C5"],
        ["G4", "F4", "E4", "D4"],
        ["C4", "D4", "E4", "G4"],
        ["E4", "G4", "A4", "G4"],
        ["F4", "E4", "D4", "C4"],
        ["G4", "B4", "C5", "G4"],
        ["A4", "G4", "F4", "E4"],
        ["D4", "F4", "E4", "C4"],
        ["C4", "G4", "E4", "C4"],
        ["B4", "G4", "F4", "D4"],
        ["E4", "C4", "D4", "G4"],
      ];
      for (let i = 0; i < length / 4; i++) {
        const roll = Math.floor(rand() * 11);
        melody = melody.concat(phrases[roll]);
      }
      // add slight shuffle depending on randomness
      if (randomness > 0.5) {
        const idx = Math.floor(rand() * melody.length);
        melody[idx] = pick(notes, rand);
      }
    } else if (method === "markov") {
      const start = pick(notes, rand);
      melody = [start];
      const transitions: Record<string, [string, number][]> = {};
      notes.forEach((n, i) => {
        transitions[n] = [
          [notes[(i + 1) % notes.length], 0.35],
          [notes[Math.max(0, i - 1)], 0.25],
          [notes[(i + 2) % notes.length], 0.15],
          [notes[(i + 5) % notes.length], 0.1],
          [notes[i], 0.15],
        ];
      });
      for (let i = 1; i < length; i++) {
        const prev = melody[i - 1];
        const probs = transitions[prev];
        const roll = rand();
        let accum = 0;
        let chosen = probs[0][0];
        const tempAdj = 1 + randomness * 0.8;
        probs.forEach(([note, base]) => {
          const weight = Math.pow(base, 1 / tempAdj);
          accum += weight;
        });
        let threshold = roll * accum;
        for (const [note, base] of probs) {
          const weight = Math.pow(base, 1 / tempAdj);
          threshold -= weight;
          if (threshold <= 0) {
            chosen = note;
            break;
          }
        }
        melody.push(chosen);
      }
    } else if (method === "lstm") {
      const motif = ["C4", "E4", "G4", "E4"];
      melody = [...motif];
      for (let i = motif.length; i < length; i++) {
        const reuse = rand() > randomness * 0.8;
        if (reuse) {
          melody.push(motif[i % motif.length]);
        } else {
          const hop = pick([0, 2, -2, 4], rand);
          const baseIdx = Math.max(0, Math.min(notes.length - 1, notes.indexOf(motif[i % motif.length]) + hop));
          melody.push(notes[baseIdx]);
        }
      }
    } else {
      // Transformer-ish: intro -> build -> return -> cadence
      const intro = ["C4", "G4", "E4", "C4"];
      const build = ["D4", "F4", "A4", "G4"];
      const returnSeg = ["C4", "E4", "G4", "E4"];
      const cadence = ["D4", "C4", "B4", "C4"];
      const sections = [intro, build, returnSeg, cadence];
      melody = sections.flatMap((seg) =>
        seg.map((n) => (rand() < randomness * 0.3 ? pick(notes, rand) : n)),
      );
      // sprinkle a long-range callback
      melody[7] = melody[0];
      melody[14] = melody[2];
    }

    const coherence =
      method === "dice"
        ? 0.4 - randomness * 0.2
        : method === "markov"
          ? 0.55 + (1 - randomness) * 0.15
          : method === "lstm"
            ? 0.68 + (1 - randomness) * 0.18
            : 0.78 + (1 - randomness) * 0.15;
    const structure =
      method === "dice"
        ? 0.35
        : method === "markov"
          ? 0.55
          : method === "lstm"
            ? 0.7
            : 0.82;
    const surprise = method === "dice" ? 0.75 : method === "markov" ? 0.55 + randomness * 0.2 : method === "lstm" ? 0.5 + randomness * 0.25 : 0.6 + randomness * 0.2;

    return { melody, coherence, structure, surprise };
  }, [method, seed, temp]);

  const reset = () => {
    setMethod("dice");
    setTemp(45);
    setSeed(7);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{t.goal}</p>
          <p className="text-xs text-slate-600">{t.desc}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSeed((x) => x + 1)}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            aria-label={isZh ? "再生成一个旋律" : "Generate new"}
          >
            {isZh ? "新旋律" : "New"}
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

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.method}</p>
          <div className="grid grid-cols-2 gap-2">
            <MethodButton current={method} target="dice" label={t.dice} onSelect={setMethod} />
            <MethodButton current={method} target="markov" label={t.markov} onSelect={setMethod} />
            <MethodButton current={method} target="lstm" label={t.lstm} onSelect={setMethod} />
            <MethodButton current={method} target="transformer" label={t.transformer} onSelect={setMethod} />
          </div>
          <label className="block text-sm font-semibold text-slate-700">
            {t.randomness}
            <input
              type="range"
              min={0}
              max={100}
              value={temp}
              onChange={(e) => setTemp(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{temp}</span>
          </label>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs text-slate-700">
            {t.note}
          </div>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3">
          <MelodyStrip melody={data.melody} label={t.melody} />
          <Metric label={t.coherence} value={data.coherence} tone="emerald" />
          <Metric label={t.structure} value={data.structure} tone="sky" />
          <Metric label={t.surprise} value={data.surprise} tone="amber" />
        </div>
      </div>
    </div>
  );
}

function MethodButton({
  current,
  target,
  label,
  onSelect,
}: {
  current: Method;
  target: Method;
  label: string;
  onSelect: (m: Method) => void;
}) {
  const active = current === target;
  return (
    <button
      type="button"
      onClick={() => onSelect(target)}
      className={[
        "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
        active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-300",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function MelodyStrip({ melody, label }: { melody: string[]; label: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {melody.map((n, idx) => (
          <span
            key={`${n}-${idx}`}
            className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function Metric({ label, value, tone }: { label: string; value: number; tone: "emerald" | "sky" | "amber" }) {
  const color =
    tone === "emerald"
      ? "from-emerald-400 to-sky-500"
      : tone === "sky"
        ? "from-sky-400 to-indigo-500"
        : "from-amber-400 to-orange-500";
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{Math.round(value * 100)}%</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all`}
          style={{ width: `${Math.min(100, Math.max(0, value * 100))}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
