"use client";
import { HeroHighlight } from "@/components/ui/bg-highlight";

export default function Page() {
  return (
    <div>
      <HeroHighlightDemo />
    </div>
  );
}

export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="h-screen">
      <h1>Hello world</h1>
    </HeroHighlight>
  );
}
