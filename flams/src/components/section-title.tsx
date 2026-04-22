type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-neutral-700 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
