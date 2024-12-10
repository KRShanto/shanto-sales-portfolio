import { cn } from "@/lib/utils";
import BottomGradient from "./BottomGradient";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function SubmitButton({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group/btn relative block h-10 w-full rounded-full bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
        className,
      )}
      type="submit"
      {...props}
    >
      {children}
      <BottomGradient />
    </button>
  );
}
