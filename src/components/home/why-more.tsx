"use client";

import React from "react";
import Section from "../section";
import SectionTitle from "../section-title";
import { cn } from "@/lib/utils";
import { Fredoka } from "next/font/google";
import { motion } from "framer-motion";

const fredoka = Fredoka({
  weight: "600",
  subsets: ["latin"],
});

const reasons = [
  {
    title: "Generate Leads",
    description:
      "Effectively capture visitor information through forms and calls-to-action, transforming casual visitors into potential clients.",
  },
  {
    title: "Showcase Your Work",
    description:
      "Display your portfolio in an organized manner, allowing potential clients to quickly assess your skills and experience.",
  },
  {
    title: "Increase Online Visibility",
    description:
      "Enhance your presence on search engines, making it easier for clients to find your services and boosting traffic to your site.",
  },
  {
    title: "Build Trust and Credibility",
    description:
      "Utilize testimonials and case studies to convey expertise and reliability, fostering a connection with potential clients.",
  },
];

const colors = ["#ec4899", "#ef4444", "#10b981", "#06b6d4"];

export default function WhyMore() {
  return (
    <Section id="landing-page-can">
      <SectionTitle text="A Landing Page Can" />

      <div className="mx-auto mt-14 grid w-[70rem] grid-cols-1 gap-24 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="flex gap-2 rounded-lg border p-5"
            style={{
              borderColor: colors[index % colors.length],
              perspective: 1000,
              backgroundColor: "black",
              cursor: "default",
            }}
            whileHover={{
              scale: 1.1,
              rotateY: 15,
              rotateX: 15,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
              cursor: "default",
            }}
            whileTap={{ scale: 0.9, rotateY: -15, rotateX: -15 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.transform = `rotateY(${(x - rect.width / 2) / 15}deg) rotateX(${-(y - rect.height / 2) / 15}deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotateY(0deg) rotateX(0deg)`;
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
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
