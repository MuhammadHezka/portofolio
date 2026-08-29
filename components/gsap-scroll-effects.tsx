"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export function GsapScrollEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, scale: 1.05, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%"
            }
          }
        );
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
