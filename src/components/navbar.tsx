import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/icon.png";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="mx-auto hidden w-[80vw] items-center justify-between py-5 md:flex">
      {/* Logo */}
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </Link>

      {/* Links */}
      <div className="flex space-x-10 text-lg font-semibold text-gray-400">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="nav-link hover:text-gray-100"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
