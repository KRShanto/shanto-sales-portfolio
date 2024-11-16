import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export default function Blog() {
  return (
    <div className="mt-32">
      <HeroParallax products={products} />;
    </div>
  );
}

export const products = [
  {
    title: "Building a Portfolio That Shines: Essential Tips and Tricks",
    link: "https://www.krshanto.blog/blog/post/building-a-portfolio-that-shines:-essential-tips-and-tricks",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/kr-blog-prod.appspot.com/o/images%2FPortfolio%20that%20shines.png?alt=media&token=95a49aba-2116-4e65-a5bc-b3ddc76de74b",
  },
  {
    title: "Why a Website is Essential for Freelancers: A Comprehensive Guide",
    link: "https://www.krshanto.blog/blog/post/why-a-website-is-essential-for-freelancers:-a-comprehensive-guide",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/kr-blog-prod.appspot.com/o/images%2FWebsite%20is%20Essential%20for%20Freelancers.png?alt=media&token=5993935d-6b36-41c3-b8b3-2aff75201a3d",
  },
  {
    title: "Building a Modern Website in 2024: Step-by-Step Guide",
    link: "https://www.krshanto.blog/blog/post/building-a-modern-website-in-2024:-step-by-step-guide",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/kr-blog-prod.appspot.com/o/images%2FBuild%20Website%20in%202024.png?alt=media&token=743fe7ea-c28f-463c-9bfc-318fcdf8f702",
  },

  {
    title: "Boost Business Productivity with Python Automation",
    link: "https://www.krshanto.blog/blog/post/boost-business-productivity-with-python-automation",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/kr-blog-prod.appspot.com/o/images%2FPython%20Automation.png?alt=media&token=58dd36ea-2733-422e-8940-1aba39c31dd4",
  },
  {
    title: "Top 5 Frontend Development Tools You Need in 2024",
    link: "https://www.krshanto.blog/blog/post/top-5-frontend-development-tools-you-need-in-2024",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/kr-blog-prod.appspot.com/o/images%2FTop%205%20Frontend%20Tools.png?alt=media&token=cc54d548-11c3-45f2-a154-7841af6541de",
  },
  {
    title: "How to use ChatGPT to improve Content Creation and SEO",
    link: "https://www.krshanto.blog/blog/post/how-to-use-chatgpt-to-improve-content-creation-and-seo",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/kr-blog-prod.appspot.com/o/images%2FChatgpt%20for%20seo%20%26%20content%20creation.png?alt=media&token=588d3ced-e09b-4f06-9ace-acb8c460c044",
  },

  {
    title:
      "Understanding the Difference Between Web Design and Web Development",
    link: "https://www.krshanto.blog/blog/post/understanding-the-difference-between-web-design-and-web-development",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/kr-blog-prod.appspot.com/o/images%2FWeb%20Design%20vs%20Web%20Development.png?alt=media&token=3d8d49b9-0f83-4407-960c-f9c638cefc0c",
  },
  {
    title: "Top 5 mistakes Web Developers should watch out for",
    link: "https://www.krshanto.blog/blog/post/top-5-mistakes-web-developers-should-watch-out-for",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/kr-blog-prod.appspot.com/o/images%2F5%20mistakes%20web%20developers%20make.png?alt=media&token=3b16a938-12e4-4f40-a56e-6588b7a4ac5c",
  },
  {
    title: "Top 10 Ways to Make Your Website Faster",
    link: "https://www.krshanto.blog/blog/post/top-10-ways-to-make-your-website-faster",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/kr-blog-prod.appspot.com/o/images%2F10%20ways%20to%20make%20website%20faster.png?alt=media&token=f65144b7-1df4-4713-82e4-67546ede358b",
  },
  {
    title: "Top 5 Website Builders to Watch in 2025",
    link: "https://www.krshanto.blog/blog/post/top-5-website-builders-to-watch-in-2025",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/kr-blog-prod.appspot.com/o/images%2FTop%205%20Website%20Builders%20of%202024.png?alt=media&token=dc2258ad-9193-4fde-bb46-d951cfabae6e",
  },
];
