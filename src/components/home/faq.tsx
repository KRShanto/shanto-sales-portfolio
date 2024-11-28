import React from "react";
import Section from "../section";
import { Accordion, Content, Tab, Trigger } from "../ui/accordion";
import SectionTitle from "../section-title";

// TODO: Improve this data
const questions = [
  {
    question: "What is a landing page, and how can it help my business?",
    answer:
      "A landing page is a dedicated web page designed to encourage visitors to take a specific action. It helps generate leads by directing traffic towards a focused call-to-action, making it easier for potential customers to engage with my offerings.",
  },
  {
    question: "What services do you offer for landing page development?",
    answer:
      "I offer a variety of services, including responsive design, contact form integration, basic SEO optimization, and Google Analytics setup, all tailored to help you achieve your business goals.",
  },
  {
    question: "How much does it cost to create a landing page?",
    answer:
      "My basic landing page package starts at $999. This includes essential features. If you have specific needs, I can provide a customized quote for more complex projects.",
  },
  {
    // TODO: imporve the answer
    question: "Do you provide revisions for landing pages?",
    answer:
      "Yes, I provide one round of revisions with my basic landing page package to ensure you are completely satisfied with the final product.",
  },
  {
    question: "What add-ons are available for my landing pages?",
    answer:
      "I offer several add-ons to enhance your landing page, like AI content generation for $299 and an advanced analytics dashboard for $499, which can significantly boost your page's performance.",
  },
  {
    question: "Can I see examples of my previous work?",
    answer:
      "Absolutely! You can check out my portfolio, which includes successful projects like Bully Buddy and Star Elevator, showcasing my diverse capabilities.",
  },
  {
    question: "How long does it take for me to develop a landing page?",
    answer:
      "The timeline can vary based on the complexity of your project, but I always strive for timely delivery without compromising on quality.",
  },
  {
    question: "Are my websites mobile-friendly?",
    answer:
      "Yes, all of my websites are designed with a mobile-first approach to ensure optimal performance on all devices.",
  },
  {
    question:
      "Do you offer ongoing support after the landing page is launched?",
    answer:
      "Yes, I provide ongoing support and maintenance options to help you manage and optimize your landing page after it's live.",
  },
  {
    question: "What is your approach to SEO for landing pages?",
    answer:
      "I include basic SEO optimization in my landing page services, and I can provide additional, more advanced SEO services if needed to enhance your visibility online.",
  },
];

export default function Faq() {
  return (
    <Section id="questions">
      <SectionTitle text="Frequently Asked Questions" />

      <Accordion className="mx-auto hidden w-[50rem] md:block">
        {questions.map((e, i) => {
          return (
            <Tab
              key={i}
              className="my-2 rounded-lg border border-border backdrop-blur-sm"
            >
              <Trigger>{e.question}</Trigger>
              <Content className="text-lg">{e.answer}</Content>
            </Tab>
          );
        })}
      </Accordion>
    </Section>
  );
}
