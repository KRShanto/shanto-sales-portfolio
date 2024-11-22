"use client";

import { Roboto_Slab, Kanit } from "next/font/google";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Myself from "../../../public/myself/Shanto1.png";
import Image from "next/image";
import Section from "../section";
import LetterPullup from "../ui/letter-pullup";
import GradualSpacing from "../ui/gradual-spacing";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    <Section className="mt-14 flex gap-5">
      <div className="relative w-1/2">
        <h1 className="text-8xl leading-[7rem]" style={roboto.style}>
          A <span className="hero-gradient relative">Landing</span> page helps
          you generate your Leads.
        </h1>
        <p className="mt-5 text-2xl text-gray-400">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div>
          <Link className="mt-10 block w-fit" href="/#pricing">
            <AnimatedGradientText>
              <span
                className={cn(
                  `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text px-6 text-2xl text-transparent`,
                )}
              >
                Get Started
              </span>
              <ChevronRight className="ml-1 size-5 text-violet-600 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </Link>

          <p className="relative left-2 mt-2 text-sm text-gray-400">
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
    </Section>
  );
}
