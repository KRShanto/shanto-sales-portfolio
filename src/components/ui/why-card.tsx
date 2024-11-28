"use client";
import React from "react";
import Section from "../section";
import SectionTitle from "../section-title";
import { cn } from "@/lib/utils";
import { Fredoka } from "next/font/google";
import Expertise from "../../../public/expertise.png";
import Standout from "../../../public/standout.png";
import CloseMore from "../../../public/close-client.png";
import Increase from "../../../public/online-presence.png";
import Image, { StaticImageData } from "next/image";
import { CardContainer, CardBody, CardItem } from "./3d-card";

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
    <CardContainer containerClassName="my-8">
      <CardBody className="w-full">
        <CardItem
          className="relative gap-2 rounded-lg border p-5"
          translateZ={50}
          style={{
            borderColor: colors[index % colors.length],
            backgroundColor: "black",
            cursor: "default",
          }}
        >
          <CardItem
            as="span"
            className="absolute -top-8 left-0 flex h-20 w-20 items-center justify-center rounded-full border-2 border-neutral-300 text-5xl font-bold"
            translateZ={30}
            style={{
              backgroundColor: colors[index % colors.length],
            }}
          >
            {index + 1}
          </CardItem>
          <div>
            <h3
              className="mt-5 text-3xl text-neutral-600 dark:text-white"
              style={fredoka.style}
            >
              {title}
            </h3>
            {/* @ts-ignore */}
            <CardItem
              as={Image}
              src={image}
              alt={title}
              width={200}
              height={200}
              className="mx-auto"
              translateZ={20}
            ></CardItem>
            <p className="mt-2 text-xl text-neutral-500 dark:text-neutral-300">
              {description}
            </p>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
