"use client";

import { useEffect } from "react";
import AOS from "aos";
import { ThemeProvider } from "../client/context/ThemeContext";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 100,
    });
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}
