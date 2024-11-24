import React from "react";
import Section from "../section";
import SectionTitle from "../section-title";
import { cn } from "@/lib/utils";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  weight: "600",
  subsets: ["latin"],
});

const reasons = [
  {
    title: "Demonstrate Your Expertise",
    description:
      "A well-crafted portfolio proves your abilites and helps potential clients see the value you can provide.",
  },
  {
    title: "Stand Out from the Competition",
    description:
      "There's competition in everything in life. When you change your mindset aroundit, you'll start winning.",
  },
  {
    title: "Close More Clients",
    description: `An impressive portfolio can build KLT (Know, Like, Trust), will let you charge sky-high prices, and will do the "selling" FOR you.`,
  },
  {
    title: "Increase Your Online Presence",
    description:
      "A portfolio website is the best way to showcase your work and let people know who you are.",
  },
];

const colors = ["#3b82f6", "#22c55e", "#f97316", "#6366f1"];

export default function Why() {
  return (
    <Section id="portfolio">
      <SectionTitle text="Why YOU need a Landing page?" />

      <div className="mx-auto mt-14 grid w-[70rem] grid-cols-1 gap-24 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex gap-2 rounded-lg border p-5"
            style={{
              borderColor: colors[index % colors.length],
            }}
          >
            <span
              className="flex max-h-16 min-w-16 items-center justify-center rounded-full border text-3xl font-bold"
              style={{
                backgroundColor: colors[index % colors.length],
              }}
            >
              {index + 1}
            </span>
            <div>
              <h3
                className="text-3xl text-neutral-600 dark:text-white"
                style={fredoka.style}
              >
                {reason.title}
              </h3>
              <p className="mt-2 text-xl text-neutral-500 dark:text-neutral-300">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
