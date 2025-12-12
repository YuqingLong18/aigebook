type ComingSoonProps = {
  lang: "en" | "zh";
  title?: string;
};

export function ComingSoon({ lang, title }: ComingSoonProps) {
  const t =
    lang === "zh"
      ? {
          defaultTitle: "内容即将上线",
          body: "我们正在制作这一课的互动内容，敬请期待。",
          back: "返回导航",
        }
      : {
          defaultTitle: "Coming soon",
          body: "We are preparing this lesson's interactive content. Stay tuned.",
          back: "Back to navigation",
        };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-600">
        {title ?? t.defaultTitle}
      </p>
      <h2 className="mt-1 text-2xl font-semibold text-slate-900">
        {title ?? t.defaultTitle}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.body}</p>
    </div>
  );
}
