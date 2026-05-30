import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ActionButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
};

export function ActionButton({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowRight
}: ActionButtonProps) {
  const styles = {
    primary:
      "bg-herb-700 text-white shadow-lift hover:bg-herb-800 border-herb-700",
    secondary:
      "bg-gold-300 text-herb-900 shadow-lift hover:bg-gold-100 border-gold-300",
    ghost:
      "bg-white/70 text-herb-800 hover:bg-white border-herb-200"
  };

  return (
    <a
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
      <Icon aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
