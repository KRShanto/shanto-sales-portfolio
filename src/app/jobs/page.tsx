import { Metadata } from "next";
import { Kanit } from "next/font/google";
import { StaticImageData } from "next/image";
import TestingGif from "../../../public/testing.gif";
import JobCard from "@/components/jobs/JobCard";
import { JobListing } from "@/types/jobs";

export const metadata: Metadata = {
  title: "KR Shanto | Job Opportunities",
  description:
    "Looking for job opportunities? Browse through the listings below and don't hesitate to apply!",
};

const kanit = Kanit({
  weight: "700",
  subsets: ["latin"],
});

const listings: JobListing[] = [
  {
    title: "Frontend Tester (React & Next.js)",
    href: "/jobs/frontend-tester",
    description:
      "We're looking for a frontend tester to help us test our React and Next.js projects. You'll be responsible for testing the functionality of our web applications and ensuring that they meet our quality standards.",
    company: "Levant IT Solutions",
    location: "Remote",
    type: "Full-time",
    image: TestingGif,
  },
];

export default function Page() {
  return (
    <div className="mx-auto h-screen w-[90vw]">
      <section>
        <h1
          className="name-gradient text-center md:text-[100px]"
          style={kanit.style}
        >
          Job Opportunities
        </h1>
        <p className="mx-auto w-[60%] text-center text-2xl leading-10 text-gray-300">
          Here you&apos;ll find opportunities to work with me directly or with
          my companies. Whether you&#39;re looking for individual projects or
          full-time roles, you&lsquo;ll find a variety of opportunities here.
          Browse through the listings below and don&apos;t hesitate to apply!
        </p>
      </section>

      <section>
        <div className="mt-40 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Reduced gap from gap-10 to gap-6 */}
          {listings.map((listing, index) => (
            <JobCard key={index} listing={listing} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
