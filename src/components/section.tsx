import { cn } from "@/lib/utils";
import React from "react";

export default function Section({
  children,
  className,
  id,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: any;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto mt-32 w-[80vw] max-[1300px]:mt-24 max-[900px]:w-[90vw]",
        className,
      )}
      ref={ref}
    >
      {children}
    </section>
  );
}
