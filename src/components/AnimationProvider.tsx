"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import PureCounter from "@srexi/purecounterjs";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Load and initialize PureCounter
    import("@srexi/purecounterjs").then((module) => {
      new module.default(); // Initialize PureCounter
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const targetWidth = bar.getAttribute("data-width");
            if (targetWidth) {
              bar.style.transition = "width 1s ease";
              bar.style.width = targetWidth;

              // Show .pct after bar finishes animating
              const pct = bar.parentElement?.querySelector(
                ".pct"
              ) as HTMLElement;
              if (pct) {
                pct.classList.add("hidden"); // ensure it's hidden
                setTimeout(() => {
                  pct.classList.remove("hidden");
                }, 1000); // match animation duration
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const bars = document.querySelectorAll("[data-bar]");
    bars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect(); //! cleanup
  }, []);

  return <>{children}</>;
}
