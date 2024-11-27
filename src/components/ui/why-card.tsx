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
import Image, { StaticImageData } from "next/image";

const fredoka = Fredoka({
  weight: "600",
  subsets: ["latin"],
});

export default function WhyCard({
  index,
  title,
  description,
  image,
  colors,
}: {
  index: number;
  title: string;
  description: string;
  image: StaticImageData;
  colors: string[];
}) {
  return (
    <motion.div
      className="gap-2 rounded-lg border p-5"
      style={{
        borderColor: colors[index % colors.length],
        perspective: 1000,
        backgroundColor: "black",
        cursor: "default",
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        rotateX: 10,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        cursor: "default",
      }}
      whileTap={{ scale: 0.95, rotateY: -10, rotateX: -10 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.transform = `rotateY(${(x - rect.width / 2) / 20}deg) rotateX(${-(y - rect.height / 2) / 20}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotateY(0deg) rotateX(0deg)`;
      }}
    >
      <span
        className="absolute -top-8 left-0 flex h-20 w-20 items-center justify-center rounded-full border-2 border-neutral-300 text-5xl font-bold"
        style={{
          backgroundColor: colors[index % colors.length],
        }}
      >
        {index + 1}
      </span>
      <div>
        <h3
          className="mt-5 text-3xl text-neutral-600 dark:text-white"
          style={fredoka.style}
        >
          {title}
        </h3>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="mx-auto"
        />
        <p className="mt-2 text-xl text-neutral-500 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
