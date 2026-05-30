type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark"
}: SectionHeadingProps) {
  const titleClass = tone === "light" ? "text-white" : "text-herb-900";
  const descriptionClass = tone === "light" ? "text-herb-50" : "text-herb-700";

  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-10 max-w-3xl text-center"
          : "mb-8 max-w-3xl text-left"
      }
    >
      <p className="mb-3 text-sm font-semibold text-gold-500">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
