import Facebook from "../../public/facebook-logo.png";
import Twitter from "../../public/twitter-logo.png";
import GitHub from "../../public/github-logo.png";
import LinkedIn from "../../public/linkedin-logo.png";
import Email from "../../public/email-logo.png";
import Discord from "../../public/discord-logo.png";
import { PricingModel } from "@/types/pricing";

export const SOCIAL_LINKS = [
  {
    title: "Facebook",
    image: Facebook,
    href: "https://facebook.com",
  },
  {
    title: "Twitter",
    image: Twitter,
    href: "https://twitter.com",
  },
  {
    title: "GitHub",
    image: GitHub,
    href: "https://github.com",
  },
  {
    title: "LinkedIn",
    image: LinkedIn,
    href: "https://linkedin.com",
  },
  {
    title: "Email",
    image: Email,
    // TODO: use custom email
    href: "mailto:krshanto2005@gmail.com",
  },
  {
    title: "Discord",
    image: Discord,
    href: "https://discord.com",
  },
];

export const PRICING_MODEL = [
  {
    name: PricingModel.Basic,
    originalPrice: 999,
    price: 499,
    features: [
      "Single page responsive design",
      "Contact form integration",
      "Basic SEO optimization",
      "Google Analytics integration",
      "Mobile-first approach",
      "1 round of revisions",
      "Basic performance optimization",
      "Cross-browser compatibility",
    ],
    addOns: [{ name: "AI Content Generation", price: 299 }],
  },
  {
    name: PricingModel.Premium,
    originalPrice: 2499,
    price: 1249,
    features: [
      "Multi-page responsive design",
      "Blog post templates",
      "Advanced SEO optimization",
      "Google Analytics and Search Console integration",
      "Mobile-first approach",
      "2 rounds of revisions",
      "Advanced performance optimization",
      "Cross-browser compatibility",
      "Basic security features (SSL, form validation)",
      "Social media sharing integration",
      "Newsletter signup form",
    ],
    addOns: [
      { name: "AI Content Generation", price: 299 },
      { name: "Advanced Analytics Dashboard", price: 499 },
    ],
  },
  {
    name: PricingModel.Custom,
    priceRange: "Custom",
    features: [
      "Custom multi-page responsive design",
      "Advanced functionality (user accounts, dashboards)",
      "AI-powered chatbot integration",
      "Advanced SEO optimization with schema markup",
      "Complete analytics suite integration",
      "Mobile-first and PWA-ready approach",
      "Unlimited revisions",
      "Maximum performance optimization",
      "Cross-browser and cross-device compatibility",
      "Advanced security features (2FA, CAPTCHA)",
      "Social media API integrations",
      "Custom API development and integration",
      "Automated content recommendations",
      "A/B testing setup",
    ],
  },
];
