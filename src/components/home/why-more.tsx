"use client";

import React from "react";
import Section from "../section";
import SectionTitle from "../section-title";
import { cn } from "@/lib/utils";
import { Fredoka } from "next/font/google";
import { motion } from "framer-motion";
import Leads from "../../../public/leads.png";
import Showcase from "../../../public/showcase.png";
import Visibility from "../../../public/visibility.png";
import Trust from "../../../public/trust.png";
import WhyCard from "../ui/why-card";

const fredoka = Fredoka({
  weight: "600",
  subsets: ["latin"],
});

const reasons = [
  {
    title: "Generate Leads",
    description:
      "Effectively capture visitor information through forms and calls-to-action, transforming casual visitors into potential clients.",
    image: Leads,
  },
  {
    title: "Showcase Your Work",
    description:
      "Display your portfolio in an organized manner, allowing potential clients to quickly assess your skills and experience.",
    image: Showcase,
  },
  {
    title: "Increase Online Visibility",
    description:
      "Enhance your presence on search engines, making it easier for clients to find your services and boosting traffic to your site.",
    image: Visibility,
  },
  {
    title: "Build Trust and Credibility",
    description:
      "Utilize testimonials and case studies to convey expertise and reliability, fostering a connection with potential clients.",
    image: Trust,
  },
];

const colors = ["#ec4899", "#ef4444", "#10b981", "#06b6d4"];

export default function WhyMore() {
  return (
    <Section id="landing-page-can">
      <SectionTitle text="A Landing Page Can" />

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
