"use client";

import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

export default function SocialNavbar() {
  return (
    <div className="fixed bottom-2 left-2 z-50">
      <FloatingDock
        items={SOCIAL_LINKS.map((link) => ({
          title: link.title,
          icon: (
            <Image src={link.image} alt={link.title} width={50} height={50} />
          ),
          href: link.href,
        }))}
      />
    </div>
  );
}
