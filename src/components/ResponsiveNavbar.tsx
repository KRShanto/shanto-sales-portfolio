"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "../../public/icon.png";
import { AlignJustify, X } from "lucide-react";

export default function ResponsiveNavbar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="sticky top-0 z-50 mx-auto flex w-[100vw] flex-col bg-transparent px-4 py-3 backdrop-blur-3xl md:hidden">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </Link>
        <div>
          {openNav ? (
            <button
              onClick={() => setOpenNav(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-200 hover:text-gray-300 dark:bg-gray-800"
            >
              <X size={30} />
            </button>
          ) : (
            <button
              onClick={() => setOpenNav(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-200 hover:text-gray-300 dark:bg-gray-800"
            >
              <AlignJustify size={30} />
            </button>
          )}
        </div>
      </div>

      {/* Links */}
      {openNav && (
        <ul className="flex flex-col items-center space-x-10 space-y-2 text-lg font-semibold text-gray-400">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="!ml-0">
              <Link href={link.href} className="hover:text-gray-100">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
