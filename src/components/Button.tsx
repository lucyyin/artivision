import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
};

const sizeToClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-9 px-4 text-sm",
  lg: "h-10 px-5 text-base",
};

const variantToClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--primary)] text-white hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]",
  secondary:
    "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[color-mix(in oklch, var(--muted), black 3%)]",
  danger:
    "bg-[var(--destructive)] text-white hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--destructive)]",
  ghost:
    "bg-transparent text-[var(--foreground)] hover:bg-[color-mix(in oklch, var(--muted), transparent 80%)]",
};

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md ${sizeToClasses[size]} ${variantToClasses[variant]} shadow-sm transition-colors ${className}`}
      {...props}
    />
  );
}


