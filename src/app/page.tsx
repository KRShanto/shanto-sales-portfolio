import Testimonial from "@/components/home/testimonial";
import Hero from "../components/home/hero";
import Blog from "@/components/home/blog";
import Portfolio from "@/components/home/portfolio";
import Friends from "@/components/home/friends";

export default function Page() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Portfolio />
      <Blog />
      <Friends />
    </>
  );
}
