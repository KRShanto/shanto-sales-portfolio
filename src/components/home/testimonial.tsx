import React from "react";
import Aamir from "../../../public/testimonial/aamir.jpg";
import Jafar from "../../../public/testimonial/jafar.png";
import Mashur from "../../../public/testimonial/mashur.jpg";
import Nayem from "../../../public/testimonial/nayem.png";
import Rasel from "../../../public/testimonial/rasel.png";
import Samir from "../../../public/testimonial/samir.png";
import Tamim from "../../../public/testimonial/tamim.png";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import LevantIt from "../../../public/companies/levantit.png";
import ShortFlows from "../../../public/companies/shortflows.png";
import StarElevator from "../../../public/companies/starelevator.png";
import FSM from "../../../public/companies/fsm.png";
import Fiverr from "../../../public/companies/fiverr.png";
import Section from "../section";

const testimonials = [
  {
    name: "Aamir Mohammed Zobayer",
    title: "Founder & CEO",
    image: Aamir,
    description:
      "I am very happy to work with them. They are very professional and skilled. They have completed my project on time. I will work with them again.",
  },
  {
    name: "Jafar Iqbal",
    title: "Founder & CEO",
    image: Jafar,
    description:
      "I am very happy to work with them. They are very professional and skilled. They have completed my project on time. I will work with them again.",
  },
  {
    name: "Mashur Rana",
    title: "Founder & CEO",
    image: Mashur,
    description:
      "I am very happy to work with them. They are very professional and skilled. They have completed my project on time. I will work with them again.",
  },
  {
    name: "Nayem Uddin",
    title: "Founder & CEO",
    image: Nayem,
    description:
      "I am very happy to work with them. They are very professional and skilled. They have completed my project on time. I will work with them again.",
  },
  {
    name: "Rasel Ahmed",
    title: "Founder & CEO",
    image: Rasel,
    description:
      "I am very happy to work with them. They are very professional and skilled. They have completed my project on time. I will work with them again.",
  },
  {
    name: "Samir Ahmed",
    title: "Founder & CEO",
    image: Samir,
    description:
      "I am very happy to work with them. They are very professional and skilled. They have completed my project on time. I will work with them again.",
  },
  {
    name: "Tamim Ahmed",
    title: "Founder & CEO",
    image: Tamim,
    description:
      "I am very happy to work with them. They are very professional and skilled. They have completed my project on time. I will work with them again.",
  },
];

const companies = [
  {
    name: "Levant IT Solutions",
    image: LevantIt,
  },
  {
    name: "ShortFlows",
    image: ShortFlows,
  },
  {
    name: "Star Elevator",
    image: StarElevator,
  },
  {
    name: "FSM BD",
    image: FSM,
  },
  {
    name: "Fiverr",
    image: Fiverr,
  },
];

export default function Testimonial() {
  return (
    <Section className="flex items-center">
      <AnimatedTestimonials
        testimonials={testimonials.map((testimonial) => ({
          quote: testimonial.description,
          name: testimonial.name,
          designation: testimonial.title,
          src: testimonial.image,
        }))}
        autoplay
      />

      <InfiniteMovingCards items={companies} direction="right" speed="fast" />
    </Section>
  );
}
