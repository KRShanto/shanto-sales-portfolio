import Testimonial from "@/components/home/testimonial";
import Hero from "../components/home/hero";
import Blog from "@/components/home/blog";
import Portfolio from "@/components/home/portfolio";
import Friends from "@/components/home/friends";
import Pricing from "@/components/home/pricing";
import NewsletterModal from "@/components/home/newsletter-modal";
import Faq from "@/components/home/faq";
import Contact from "@/components/home/contact";
import Footer from "@/components/home/footer";
import Why from "../components/home/why";

export default function Page() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Why />
      <Portfolio />
      <Blog />
      <Friends />
      <NewsletterModal />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
