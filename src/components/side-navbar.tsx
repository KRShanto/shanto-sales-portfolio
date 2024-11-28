// side-navbar.tsx

"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Roboto } from "next/font/google";
import { NavLink as NavLinkType } from "@/types/navlink";
import { useMediaQuery } from "react-responsive";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function SideNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const is1450 = useMediaQuery({ query: "(max-width: 1450px)" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
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

  if (is1450) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1, // Staggered animation for icons
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed left-5 top-0 z-40 flex h-screen items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
        >
          <div className="flex flex-col items-center space-y-4 rounded-full bg-neutral-900 px-3 py-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.name} link={link} variants={iconVariants} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavLink({ link, variants }: { link: NavLinkType; variants: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={variants}>
      <Link
        href={link.href}
        aria-label={link.name}
        className={cn(
          "relative flex h-12 w-12 transform items-center justify-center rounded-full bg-neutral-800 text-2xl text-gray-300 transition-transform hover:scale-125",
          isHovered
            ? "border-2 border-neutral-700"
            : "border-2 border-transparent",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <link.icon
          style={{
            color: link.iconColor,
          }}
        />

        {/* Tooltip */}
        {isHovered && (
          <span
            className={cn(
              "absolute left-full ml-2 w-[12rem] rounded-full border border-neutral-700 bg-neutral-900 px-5 py-1 text-center text-base font-bold text-white opacity-100 transition-opacity duration-200",
              isHovered ? "opacity-100" : "opacity-0",
            )}
            style={roboto.style}
          >
            {link.longName}
          </span>
        )}
      </Link>
    </motion.div>
  );
}
