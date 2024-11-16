"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../../public/icon.png";

export default function Nabar() {
  return (
    <nav className="flex items-center justify-between py-5">
      {/* Logo */}
      <Image
        src={Logo}
        alt="Logo"
        width={60}
        height={60}
        className="rounded-full"
      />

      {/* Links */}
      <div className="flex space-x-10 text-lg font-semibold text-gray-400">
        <Link href="#" className="nav-link hover:text-gray-100">
          Home
        </Link>
        <Link href="#why" className="nav-link hover:text-gray-100">
          Why
        </Link>
        <Link href="#learn" className="nav-link hover:text-gray-100">
          {" "}
          Learn
        </Link>
        <Link href="#portfolio" className="nav-link hover:text-gray-100">
          Portfolio
        </Link>
        <Link href="#contact" className="nav-link hover:text-gray-100">
          Contact
        </Link>
      </div>
    </nav>
  );
}
