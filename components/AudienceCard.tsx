import type { LucideIcon } from "lucide-react";

type AudienceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function AudienceCard({
  icon: Icon,
  title,
  description
}: AudienceCardProps) {
  return (
    <article className="rounded-lg border border-herb-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-herb-100 text-herb-700">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-herb-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-herb-700">{description}</p>
    </article>
  );
}
