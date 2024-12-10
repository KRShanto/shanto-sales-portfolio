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
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";

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
    <Section className="mt-16 flex flex-col-reverse gap-5 md:mt-14 md:flex-row md:p-0">
      <motion.div
        className="relative w-full md:w-1/2"
        initial="hidden"
        animate="visible"
        transition={{ ...spring, delay: 0.2 }}
        variants={variants}
      >
        <h1
          className="text-5xl leading-[4.5rem] md:text-8xl md:leading-[7rem]"
          style={roboto.style}
        >
          Let Your <span className="hero-gradient relative">Landing</span> Page
          Work While You Sleep
        </h1>
        <p
          className="mt-3 text-xl text-gray-400 md:mt-5 md:text-2xl"
          data-aos="fade-up-right"
        >
          Your <b>Business</b> goals deserve better than a Generic Website.
          Businesses that use <b>Landing Pages</b> see 3x more leads. Will yours
          be next?
        </p>

        <div>
          <Link className="mt-6 block w-fit md:mt-10" href="/#pricing">
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

          <p className="relative left-2 mt-2 text-[12px] text-gray-400 md:text-sm">
            50+ people like you already have (Purchased) a landing page.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="mt-5 flex w-full flex-col items-center md:mt-0 md:w-1/2 md:items-end"
        initial="hidden"
        animate="visible"
        transition={{ ...spring, delay: 0.6 }}
        variants={variants}
      >
        <Image
          src={Myself}
          alt="Shanto"
          placeholder="blur"
          className="block rounded-full border-8 border-blue-500 md:hidden"
          width={450}
          height={450}
          data-aos="fade-up"
        />
        <OrbitingCirclesDemo />
        {/* TODO: give a better color and animation */}
        <h2
          className="name-gradient text-center !text-[60px] md:text-start md:!text-[100px]"
          style={kanit.style}
        >
          KR Shanto
        </h2>
        <div className="md:w-[30rem]">
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
