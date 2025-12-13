import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

export type CheckpointStatus = "idle" | "correct" | "incorrect";

type HelperText = {
  selectPrompt: string;
  readyPrompt: string;
};

type ProgressUI = {
  submitLabel: string;
  helperText: HelperText;
  progressLabel: string;
};

type Progress = {
  current: number;
  total: number;
  label: string;
};

type ContextValue = {
  register: (id?: string) => string;
  unregister: (id: string) => void;
  setStatus: (id: string, status: CheckpointStatus) => void;
  progress: Progress;
  ui: ProgressUI;
};

type LessonCheckpointProviderProps = {
  children: ReactNode;
  lang?: "en" | "zh";
  progressLabel?: string;
  submitLabel?: string;
  helperText?: Partial<HelperText>;
};

const defaultsByLang: Record<NonNullable<LessonCheckpointProviderProps["lang"]>, ProgressUI> = {
  en: {
    submitLabel: "Submit",
    helperText: { selectPrompt: "Select an option", readyPrompt: "Ready to submit" },
    progressLabel: "Quizzes passed this lesson",
  },
  zh: {
    submitLabel: "提交",
    helperText: { selectPrompt: "请选择一个选项", readyPrompt: "准备提交" },
    progressLabel: "本课已通过测验",
  },
};

const CheckpointProgressContext = createContext<ContextValue | null>(null);

export function LessonCheckpointProvider({
  children,
  lang = "en",
  progressLabel,
  submitLabel,
  helperText,
}: LessonCheckpointProviderProps) {
  const defaults = defaultsByLang[lang] ?? defaultsByLang.en;

  const ui = useMemo<ProgressUI>(
    () => ({
      submitLabel: submitLabel ?? defaults.submitLabel,
      helperText: {
        selectPrompt: helperText?.selectPrompt ?? defaults.helperText.selectPrompt,
        readyPrompt: helperText?.readyPrompt ?? defaults.helperText.readyPrompt,
      },
      progressLabel: progressLabel ?? defaults.progressLabel,
    }),
    [
      defaults.helperText.readyPrompt,
      defaults.helperText.selectPrompt,
      defaults.progressLabel,
      defaults.submitLabel,
      helperText?.readyPrompt,
      helperText?.selectPrompt,
      progressLabel,
      submitLabel,
    ],
  );

  const idCounter = useRef(0);
  const [statuses, setStatuses] = useState<Record<string, CheckpointStatus>>({});

  const register = useCallback((id?: string) => {
    const finalId = id ?? `checkpoint-${idCounter.current++}`;
    setStatuses((prev) => {
      if (finalId in prev) return prev;
      return { ...prev, [finalId]: "idle" };
    });
    return finalId;
  }, []);

  const unregister = useCallback((id: string) => {
    setStatuses((prev) => {
      if (!(id in prev)) return prev;
      const { [id]: _removed, ...rest } = prev;
      return rest;
    });
  }, []);

  const setStatus = useCallback((id: string, status: CheckpointStatus) => {
    setStatuses((prev) => {
      if (!(id in prev) || prev[id] === status) return prev;
      return { ...prev, [id]: status };
    });
  }, []);

  const progress = useMemo<Progress>(() => {
    const total = Object.keys(statuses).length;
    const current = Object.values(statuses).filter((state) => state === "correct").length;
    return { current, total, label: ui.progressLabel };
  }, [statuses, ui.progressLabel]);

  const value = useMemo<ContextValue>(
    () => ({
      register,
      unregister,
      setStatus,
      progress,
      ui,
    }),
    [progress, register, unregister, ui],
  );

  return <CheckpointProgressContext.Provider value={value}>{children}</CheckpointProgressContext.Provider>;
}

export function useCheckpointProgressContext() {
  return useContext(CheckpointProgressContext);
}
