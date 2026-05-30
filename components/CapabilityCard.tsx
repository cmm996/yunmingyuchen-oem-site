import type { LucideIcon } from "lucide-react";

type CapabilityCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function CapabilityCard({
  icon: Icon,
  title,
  description
}: CapabilityCardProps) {
  return (
    <article className="rounded-lg border border-white/20 bg-white/80 p-5 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-herb-800">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-herb-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-herb-700">{description}</p>
    </article>
  );
}
