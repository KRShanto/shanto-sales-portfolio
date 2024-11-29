"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import Section from "../section";
import SectionTitle from "../section-title";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 100,
  damping: 30,
};

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <SectionTitle text="My Portfolio" />

      <div className="flex w-full flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="group/card relative h-[30rem] w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, ...spring }}
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="mt-4 w-full">
                  <Image
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="mt-10 flex items-center justify-end md:mt-20">
                  {project.link ? (
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.link}
                      target="__blank"
                      className="rounded-xl px-4 py-2 text-sm font-bold dark:bg-white dark:text-black"
                    >
                      Visit site
                    </CardItem>
                  ) : (
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                    >
                      Not ready yet
                    </CardItem>
                  )}
                </div>
              </motion.div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </Section>
  );
}

const projects = [
  {
    title: "Bully Buddy",
    description:
      "An AI powered chatbot that behaves like a rude person. It is the opposite of ChatGPT. You can use this for fun",
    image:
      "https://krshanto.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbully-buddy.8cd86a6f.png&w=640&q=75",
    link: "https://bully-buddy.vercel.app/",
  },
  {
    title: "Star Elevator",
    description:
      "Star Elevator is a leading elevator company in Bangladesh. We provide the best quality elevator at an affordable price.",
    image:
      "https://krshanto.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.3f25d552.png&w=640&q=75",
    link: "https://starelevatorltd.com/",
  },
  {
    title: "Meefiil's Portfolio",
    description: "Portfolio website for Meefiil, a Video Editor and SEO Expert",
    image:
      "https://krshanto.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeefiil.96bb9d63.png&w=640&q=75",
    link: "https://meefiil.vercel.app/",
  },
  {
    title: "Musicify",
    description: "",
    image:
      "https://krshanto.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmusicify.d3322cb1.png&w=640&q=75",
    link: null,
  },
  {
    title: "PassMan",
    description:
      "A password manager that uses encryption to store your passwords.",
    image:
      "https://krshanto.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpassman.b535192d.png&w=640&q=75",
    link: "https://passman2023.vercel.app/",
  },
  {
    title: "English AI",
    description:
      "An AI that helps you to learn English. It can also correct your grammar.",
    image:
      "https://krshanto.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenglish.c0171e01.png&w=640&q=75",
    link: null,
  },
];
