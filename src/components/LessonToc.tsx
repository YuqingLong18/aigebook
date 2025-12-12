import { useState } from "react";

type TocItem = {
  id: string;
  label: string;
};

type LessonTocProps = {
  lang: "en" | "zh";
  items: TocItem[];
};

export function LessonToc({ lang, items }: LessonTocProps) {
  const isZh = lang === "zh";
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={[
        "sticky top-24 hidden h-fit flex-shrink-0 transition-all duration-200 lg:block",
        open ? "w-64" : "w-12",
      ].join(" ")}
    >
      <div
        className={[
          "rounded-2xl border border-slate-200 bg-white/80 text-sm text-slate-700 shadow-soft",
          open ? "p-3" : "p-2",
        ].join(" ")}
      >
        <div className="flex items-center justify-between">
          {open && (
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
              {isZh ? "课内导航" : "Lesson Navigation"}
            </p>
          )}
          <button
            type="button"
            className="rounded-full border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? (isZh ? "收起目录" : "Collapse TOC") : isZh ? "展开目录" : "Expand TOC"}
          >
            {open ? (isZh ? "收起" : "Hide") : isZh ? "展开" : "Show"}
          </button>
        </div>
        {open && (
          <ol className="mt-3 space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  className="block rounded-lg px-2 py-1 transition hover:bg-brand-50 hover:text-brand-700"
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        )}
      </div>
    </aside>
  );
}
