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
        "mx-auto w-[80vw] md:mt-32 md:max-[1300px]:mt-24",
        className,
      )}
      ref={ref}
    >
      {children}
    </section>
  );
}
