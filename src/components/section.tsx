import { cn } from "@/lib/utils";
import React from "react";

export default function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mt-32", className)}>
      {children}
    </section>
  );
}
