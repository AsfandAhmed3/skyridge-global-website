type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <span className="text-xs uppercase tracking-[0.4em] text-primary">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold leading-tight text-text-main md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-6 text-text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
