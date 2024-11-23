"use client";
import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function SideNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        // Changed from 500 to 700
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check in case the page is already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed left-5 top-1/2 z-50 flex -translate-y-1/2 transform flex-col items-center justify-center space-y-7 rounded-full border border-gray-600 px-1 py-4 backdrop-blur-lg"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.name} link={link} variants={iconVariants} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavLink({
  link,
  variants,
}: {
  link: { name: string; href: string; icon: IconType; iconColor: string };
  variants: any;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={variants}>
      <Link
        href={link.href}
        className="relative flex items-center space-x-2 rounded-full border-gray-200 p-4 text-2xl text-gray-300 transition-all hover:scale-125 hover:border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <link.icon
          style={{
            color: link.iconColor,
          }}
        />

        {/* Tooltip */}
        <span
          className={cn(
            "absolute left-full ml-2 rounded-full px-2 py-1 text-base font-bold text-white opacity-0 transition-opacity duration-300",
            isHovered ? "opacity-100" : "",
          )}
          style={roboto.style}
        >
          {link.name}
        </span>
      </Link>
    </motion.div>
  );
}
