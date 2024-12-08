"use client";

import React from "react";
import Section from "../section";
import SectionTitle from "../section-title";
import { Tabs } from "../ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { useSelectPricing } from "@/hooks/useSelectPricing";
import Question from "@/../public/animations/Question.json";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { PRICING_MODEL } from "@/lib/constants";
import { Textarea } from "../ui/textarea";
import Growth from "@/../public/animations/Growth.json";
import IconCloud from "../ui/icon-cloud";
import LabelInputContainer from "../LabelInputContainer";
import SubmitButton from "../SubmitButton";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const tabs = [
  {
    title: "Personal Information",
    value: "personal",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-600 bg-[#0c0c0c] p-6 md:p-10">
        <Personal />
      </div>
    ),
  },
  {
    title: "Business Information",
    value: "business",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-600 bg-[#0c0c0c] p-6 md:p-10">
        <Business />
      </div>
    ),
  },
  {
    title: "Website",
    value: "website",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-600 bg-[#0c0c0c] p-6 md:p-10">
        <Website />
      </div>
    ),
  },
  {
    title: "Conclusions",
    value: "conclusions",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-600 bg-[#0c0c0c] p-6 md:p-10">
        <Conclusion />
      </div>
    ),
  },
];

const slugs = [
  "html",
  "css",
  "javascript",
  "figma",
  "nodejs",
  "firebase",
  "github",
  "react",
  "tailwindcss",
  "typescript",
  "python",
  "nextjs",
  "mongodb",
  "mysql",
  "postgresql",
  "sqlite",
  "django",
  "php",
  "laravel",
  "wordpress",
  "rust",
  "aws",
  "prisma",
  "apollo",
  "asana",
  "slack",
  "discord",
  "trello",
  "jira",
  "webflow",
  "framer",
];

export default function Contact() {
  return (
    <Section id="contact">
      <SectionTitle text="Contact me" />

      <div className="flex w-full flex-col gap-20 md:flex-row md:p-0">
        <div className="h-[36rem] w-full md:h-[33rem] md:w-1/2">
          <Tabs contentClassName="overflow-auto" tabs={tabs} />
        </div>
        <div className="flex w-full items-center justify-center md:w-1/2">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </Section>
  );
}

function Personal() {
  return (
    <>
      <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <LabelInputContainer>
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" placeholder="Tyler" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" placeholder="Durden" type="text" />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="country">Country</Label>
        <Input id="country" placeholder="projectmayhem@fc.com" type="email" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="linkedin">LinkedIn URL</Label>
        <Input id="linkedin" placeholder="projectmayhem@fc.com" type="email" />
      </LabelInputContainer>
      <SubmitButton>Next page &rarr;</SubmitButton>
    </>
  );
}

function Business() {
  return (
    <>
      <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <LabelInputContainer>
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="Project Mayhem" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="position">Position</Label>
          <Input id="position" placeholder="CEO" type="text" />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="hello@world.com" type="email" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="country">Headquarter Country</Label>
        <Input id="country" placeholder="United States" type="email" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="linkedin">LinkedIn URL</Label>
        <Input
          id="linkedin"
          placeholder="https://linkedin.com/in/username"
          type="text"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="anyurl">Any other URL</Label>
        <Input id="anyurl" placeholder="https://example.com" type="text" />
      </LabelInputContainer>
      <div className="flex justify-between">
        <SubmitButton className="w-[10rem]">&larr; Previous page</SubmitButton>
        <SubmitButton className="w-[10rem]">Next page &rarr;</SubmitButton>
      </div>
    </>
  );
}

function Website() {
  const { pricingModel, discount, additionalFeatures } = useSelectPricing();

  return (
    <>
      {/* Selected website */}
      {pricingModel ? (
        <div>
          <div
            className="flex justify-between rounded-lg border p-5"
            style={roboto.style}
          >
            <div>
              <div>
                <p className="font-semibold text-gray-400">You have selected</p>
                <p className="text-2xl font-bold text-gray-200">
                  {pricingModel}
                </p>
              </div>

              <div className="mt-5 flex justify-between font-semibold text-gray-400">
                <p>Discount</p>
                <p className="text-green-500">{discount * 100 + 50}%</p>
              </div>
              <div className="flex items-center justify-between font-semibold text-gray-400">
                <p>Total</p>
                <p className="hero-gradient text-lg font-bold">
                  $
                  {additionalFeatures.reduce(
                    (acc, feature) => acc + feature.price,
                    0,
                  ) +
                    PRICING_MODEL.filter(
                      (plan) => plan.name === pricingModel,
                    )[0].price!}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-400">
                Additional features:
              </h3>
              <ul className="ml-5 list-disc text-gray-200">
                {additionalFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-300">
                    {feature.name} - ${feature.price}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <LabelInputContainer>
              <Label htmlFor="additional-info">Additional Information</Label>
              <Textarea id="additional-info" placeholder="" />
            </LabelInputContainer>
          </div>
        </div>
      ) : (
        <div>
          <Lottie
            animationData={Question}
            loop
            autoplay
            style={{ width: 300, margin: "0 auto" }}
          />

          <h3 className="text-center text-2xl font-semibold text-gray-300">
            You haven&apos;t selected a website service yet
          </h3>

          <Link
            href="#pricing"
            className="mx-auto mt-5 block w-fit transform rounded-md bg-white p-2 px-5 text-black transition duration-300 ease-in-out active:scale-95"
            style={roboto.style}
          >
            Select a service
          </Link>
        </div>
      )}
    </>
  );
}

function Conclusion() {
  const { pricingModel, discount, additionalFeatures } = useSelectPricing();

  return (
    <>
      <div className="">
        <h2 className="text-3xl font-semibold text-white">
          Thank You for Reaching Out, Tyler!
        </h2>
        <p className="mt-4 text-gray-400">
          I appreciate you taking the time to contact me. Based on the
          information you&apos;ve provided, here is a summary of your
          selections:
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-300">
            Your Selection:
          </h3>
          <ul className="mt-2 list-inside list-disc text-gray-400">
            <li>
              <strong>Website Type:</strong> {pricingModel}
            </li>
            <li>
              <strong>Features:</strong>{" "}
              {additionalFeatures.map((f) => f.name).join(", ")}
            </li>
            <li>
              <strong>Total Price:</strong> $
              {pricingModel
                ? additionalFeatures.reduce(
                    (acc, feature) => acc + feature.price,
                    0,
                  ) +
                  PRICING_MODEL.filter((plan) => plan.name === pricingModel)[0]
                    .price!
                : 0}
            </li>
          </ul>
        </div>

        <p className="mt-4 text-gray-400">
          Me and my team at <strong>Levant IT Solutions</strong> will review
          your information and get back to you within 24 hours to discuss the
          next steps. If you have any immediate questions, feel free to email me
          at <strong>krshanto@gmail.com</strong>.
        </p>

        <div className="mt-6">
          <SubmitButton className="w-full">Submit &rarr;</SubmitButton>
        </div>
      </div>
    </>
  );
}
