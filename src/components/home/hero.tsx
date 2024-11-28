"use client";

import { Roboto_Slab, Kanit } from "next/font/google";
import Myself from "../../../public/myself/Shanto1.png";
import Image from "next/image";
import Section from "../section";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";

const roboto = Roboto_Slab({
  weight: "600",
  subsets: ["latin"],
});
const kanit = Kanit({
  weight: "700",
  subsets: ["latin"],
});

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <Section className="mt-14 flex gap-5">
      <motion.div
        className="relative w-1/2"
        initial="hidden"
        animate="visible"
        transition={{ ...spring, delay: 0.2 }}
        variants={variants}
      >
        <h1 className="text-8xl leading-[7rem]" style={roboto.style}>
          Let Your <span className="hero-gradient relative">Landing</span> Page
          Work While You Sleep
        </h1>
        <p className="mt-5 text-2xl text-gray-400" data-aos="fade-up-right">
          Your <b>Business</b> goals deserve better than a Generic Website.
          Businesses that use <b>Landing Pages</b> see 3x more leads. Will yours
          be next?
        </p>

        <div>
          <Link className="mt-10 block w-fit" href="/#pricing">
            <AnimatedGradientText>
              <motion.span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text px-6 text-2xl text-transparent`,
                )}
                transition={{ ...spring, delay: 0.4 }}
                variants={variants}
              >
                Get Started
              </motion.span>
              <ChevronRight className="ml-1 size-5 text-violet-600 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </Link>

          <p className="relative left-2 mt-2 text-sm text-gray-400">
            50+ people like you already have (Purchased) a landing page.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex w-1/2 flex-col items-end"
        initial="hidden"
        animate="visible"
        transition={{ ...spring, delay: 0.6 }}
        variants={variants}
      >
        <Image
          src={Myself}
          alt="Shanto"
          placeholder="blur"
          className="rounded-full border-8 border-blue-500"
          width={450}
          height={450}
          data-aos="fade-up"
        />
        {/* TODO: give a better color and animation */}
        <h2 className="name-gradient" style={kanit.style}>
          KR Shanto
        </h2>
        <div className="w-[30rem]">
          <TextGenerateEffect
            words={
              "I helped 50+ people to generate leads with a landing page. Most of them are happy with my service."
            }
          />
        </div>
      </motion.div>
    </Section>
  );
}
