"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function AOSanimate({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
}
