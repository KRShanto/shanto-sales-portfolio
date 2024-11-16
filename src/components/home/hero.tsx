"use client";

import { Roboto_Slab, Kanit } from "next/font/google";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Myself from "../../../public/myself/Shanto1.png";
import Image from "next/image";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { BackgroundLines } from "../ui/background-lines";

const roboto = Roboto_Slab({
  weight: "600",
  subsets: ["latin"],
});
const kanit = Kanit({
  weight: "700",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="mt-14 flex gap-5">
      <div className="relative w-1/2">
        <h1 className="text-8xl leading-[7rem]" style={roboto.style}>
          A <span className="hero-gradient relative">Landing</span> page helps
          you generate your Leads.
        </h1>
        <p className="mt-5 text-2xl text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem20
        </p>

        <div>
          <HoverBorderGradient
            containerClassName="rounded-full mt-10"
            as="button"
            className="flex items-center space-x-2 bg-white text-lg text-black dark:bg-black dark:text-white"
          >
            Get Started
          </HoverBorderGradient>
          <p className="relative left-2 text-sm text-gray-400">
            50+ people like you already have (Purchased) a landing page.
          </p>
        </div>
      </div>
      <div className="flex w-1/2 flex-col items-end">
        <Image
          src={Myself}
          alt="Shanto"
          placeholder="blur"
          className="rounded-full border-8 border-blue-500"
          width={450}
          height={450}
        />
        {/* TODO: give a better color and animation */}
        <h2 className="name-gradient" style={kanit.style}>
          KR Shanto
        </h2>
        <p className="w-[30rem] text-xl text-gray-400">
          I helped 50+ people to generate leads with a landing page. Most of
          them are happy with my service.
        </p>
      </div>
    </div>
  );
}
