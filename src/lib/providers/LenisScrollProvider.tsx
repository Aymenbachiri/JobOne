"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function LenisScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: unknown) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return null;
}
