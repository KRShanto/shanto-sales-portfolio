"use client";

import React from "react";
import Section from "../section";
import SectionTitle from "../section-title";
import { cn } from "@/lib/utils";
import { Fredoka } from "next/font/google";
import { motion } from "framer-motion";
import Expertise from "../../../public/expertise.png";
import Standout from "../../../public/standout.png";
import CloseMore from "../../../public/close-client.png";
import Increase from "../../../public/online-presence.png";
import Image from "next/image";
import WhyCard from "../ui/why-card";

const reasons = [
  {
    title: "Demonstrate Your Expertise",
    description:
      "A well-crafted portfolio proves your abilites and helps potential clients see the value you can provide.",
    image: Expertise,
  },
  {
    title: "Stand Out from the Competition",
    description:
      "There's competition in everything in life. When you change your mindset aroundit, you'll start winning.",
    image: Standout,
  },
  {
    title: "Close More Clients",
    description: `An impressive portfolio can build KLT (Know, Like, Trust), will let you charge sky-high prices, and will do the "selling" FOR you.`,
    image: CloseMore,
  },
  {
    title: "Increase Your Online Presence",
    description:
      "A portfolio website is the best way to showcase your work and let people know who you are.",
    image: Increase,
  },
];

const colors = ["#3b82f6", "#22c55e", "#f97316", "#6366f1"];

export default function Why() {
  return (
    <Section id="why">
      <SectionTitle text="Why YOU need a Landing page?" />
      <div className="mx-auto mt-14 grid w-[70rem] grid-cols-1 gap-24 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <WhyCard
            key={index}
            index={index}
            title={reason.title}
            description={reason.description}
            image={reason.image}
            colors={colors}
          />
        ))}
      </div>
    </Section>
  );
}
