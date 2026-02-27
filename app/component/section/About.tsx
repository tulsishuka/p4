
"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Counter = ({ value, label }: { value: number; label: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-8 sm:py-10">
      <div className="flex items-start gap-2 text-white">
        <span className="text-4xl sm:text-6xl md:text-8xl font-medium mt-2">
          +
        </span>
        <motion.span className="text-6xl sm:text-8xl md:text-[9rem] font-medium tracking-tight leading-none text-white">
          {rounded}
        </motion.span>
      </div>
      <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 font-medium tracking-wide text-center max-w-xs">
        {label}
      </p>
    </div>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);

  const headingText =
    "Blending creativity, innovation, and strategy to craft experiences that truly matter.";

  return (
    <section className="bg-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-tight font-medium text-white max-w-7xl leading-snug sm:leading-snug md:leading-tight lg:leading-tight tracking-tight"
        >
          {headingText.split(" ").map((word, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-[1400ms] ease-out ${
                isVisible
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-xl translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h2>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-6 mt-8 sm:mt-10 md:mt-12 text-3xl sm:text-4xl md:text-5xl font-instrument-serif italic">

          <div className="
            flex items-center gap-1 sm:gap-2
            px-2 sm:px-6 md:px-8
            py-1.5 sm:py-2
            rounded-full
            bg-purple-800 text-purple-300
            font-instrument-serif italic
            text-base sm:text-lg md:text-3xl lg:text-5xl
            whitespace-nowrap
          ">
            <Image
              src="/AboutImage/creativity.svg"
              width={28}
              height={28}
              alt="Creativity"
              className="sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            Creativity
          </div>

          <div className="
            flex items-center gap-2 sm:gap-3
            px-3 sm:px-5 md:px-6
            py-2 sm:py-3
            rounded-full
            bg-blue-900 text-blue-300
            font-instrument-serif italic
            text-base sm:text-lg md:text-3xl lg:text-5xl
            whitespace-nowrap
          ">
            <Image
              src="/AboutImage/innovation.svg"
              width={32}
              height={32}
              alt="Innovation"
              className="sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            Innovation
          </div>

          <div className="
            flex items-center gap-2 sm:gap-3
            px-3 sm:px-5 md:px-6
            py-2 sm:py-3
            rounded-full
            bg-orange-900 text-orange-300
            font-instrument-serif italic
            text-base sm:text-lg md:text-3xl lg:text-5xl
            whitespace-nowrap
          ">
            <Image
              src="/AboutImage/strategy.svg"
              width={32}
              height={32}
              alt="Strategy"
              className="sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            Strategy
          </div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700 mt-10 sm:mt-12 md:mt-16 w-full">
          <Counter value={40} label="Total Projects Completed" />
          <Counter value={15} label="Years of Experience" />
          <Counter value={12} label="Design Awards" />
        </div>

      </div>
    </section>
  );
};

export default About;
