import React from "react";
import { cva } from "class-variance-authority";

const button = cva(
  [
    "font-medium",
    "rounded-full",
    "py-2.5",
    "px-8",
    "min-w-24",
    "w-fit",
    "min-h-12",
    "flex",
    "justify-center",
    "items-center",
    "gap-2.5",
    "uppercase",
    "pointer",
    "transition",
  ],
  {
    variants: {
      variant: {
        gradient: [
          "bg-gradient-to-br",
          "from-pink-500",
          "to-amber-500",
          "text-zinc-100",
          "hover:scale-105",
          "shadow-xl",
          "shadow-zinc-900/[0.2]",
        ],
        black: [
          "bg-zinc-900",
          "text-zinc-100",
          "hover:bg-zinc-800",
          "shadow-xl",
          "shadow-zinc-900/[0.2]",
        ],
        outline: [
          "bg-transparent",
          "text-zinc-900",
          "border",
          "text-lg",
          "font-normal",
          "border-zinc-900",
        ],
        transparent: [
          "bg-transparent",
          "text-zinc-100",
          "border",
          "text-lg",
          "font-normal",
          "border-zinc-100",
        ],
        disabled: [
          "bg-zinc-400",
          "text-zinc-100",
          "border-zinc-100",
          "cursor-not-allowed",
        ],
      },
    },
    defaultVariants: {
      variant: "gradient",
    },
  },
);

interface Props {
  variant?: "gradient" | "black" | "outline" | "transparent" | "disabled";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({ variant, className, children, disabled, onClick }: Props) => {
  return (
    <button
      className={`${button({ variant: disabled ? "disabled" : variant })} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
