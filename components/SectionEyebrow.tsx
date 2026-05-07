import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  icon: LucideIcon;
  variant?: "light" | "dark";
  className?: string;
};

const variantClass = {
  light: "border-slate-200 bg-white text-slate-600",
  dark: "border-cyan-200/20 bg-white/8 text-cyan-100",
};

export function SectionEyebrow({
  children,
  icon: Icon,
  variant = "light",
  className = "",
}: SectionEyebrowProps) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${variantClass[variant]} ${className}`}
    >
      <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
      {children}
    </div>
  );
}
