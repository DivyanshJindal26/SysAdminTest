"use client";

import React, { ReactNode, useState } from "react";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

interface Props {
  children: ReactNode;
  variant?: "warning" | "error" | "success";
}

const alert = cva(
  [
    "p-5",
    "flex",
    "flex-row",
    "justify-between",
    "z-10",
    "text-zinc-900",
    "rounded-md",
    "w-full",
    "lg:min-w-[800px]",
    "lg:max-w-[1000px]",
  ],
  {
    variants: {
      variant: {
        warning: ["bg-amber-300/[0.3] "],
        error: ["bg-red-300/[0.3] "],
        success: ["bg-green-300/[0.3] "],
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

const Alert = ({ children, variant }: Props) => {
  const [display, setDisplay] = useState(true);

  return (
    <div className={display ? alert({ variant }) : "hidden"}>
      <div className="flex flex-col w-[calc(100%-24px)]">
        <div className="font-semibold text-lg">
          {variant === "warning"
            ? "Heads up!"
            : variant === "error"
              ? "We messed up!"
              : "Yay!"}
        </div>
        <div className="font-medium">{children}</div>
      </div>
      <X
        className={
          (variant === "warning"
            ? "text-amber-600"
            : variant === "error"
              ? "text-red-700"
              : "text-green-700") + " cursor-pointer"
        }
        onClick={() => {
          setDisplay(false);
        }}
        size={24}
      />
    </div>
  );
};

export default Alert;
