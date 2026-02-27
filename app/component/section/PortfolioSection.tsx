
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "FlowBank",
      tags: ["UX Research", "Interface Design"],
      img: "/FifthImage/online1.webp",
      alt: "FlowBank App UI",
    },
    {
      id: 2,
      title: "Academy.co",
      tags: ["Product Design", "Interaction Design"],
      img: "/FifthImage/online2.webp",
      alt: "Academy Dashboard UI",
    },
    {
      id: 3,
      title: "Genome",
      tags: ["UX Research", "Interface Design"],
      img: "/FifthImage/online3.webp",
      alt: "Genome Scientific UI",
    },
    {
      id: 4,
      title: "Hotto",
      tags: ["Brand Identity", "Web Design"],
      img: "/FifthImage/online4.webp",
      alt: "Hotto Website UI",
    },
  ];

  /* Hero-style animation state */
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

  const normalText = "How we transformed a small business’s";
  const italicText = "online presence";

  return (
    <section className="w-full py-20 px-6 ">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-16">
        <h2
          ref={headingRef}
          className="text-[40px] md:text-[50px] font-medium text-white text-center leading-[1.1]"
        >
          {normalText.split(" ").map((word, i) => (
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

          <br />

          <span className="italic font-instrument-serif">
            {italicText.split(" ").map((word, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-[1400ms] ease-out ${
                  isVisible
                    ? "opacity-100 blur-0 translate-y-0"
                    : "opacity-0 blur-xl translate-y-4"
                }`}
                style={{
                  transitionDelay: `${
                    (normalText.split(" ").length + i) * 130
                  }ms`,
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <a
            key={project.id}
            href="https://www.framer.com/@wrap-pixel/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {/* Image Card */}
            <div className="relative rounded-[28px] overflow-hidden aspect-[1.4/1]">
              <Image
                src={project.img}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gray overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

              {/* Arrow */}
              <div
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center
                           opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                           transition-all duration-500"
              >
                <ArrowUpRight className="text-black font-bold" size={25} />
              </div>
            </div>

            {/* Text */}
            <div className="mt-5 flex flex-col gap-3">
              <h3 className="text-2xl text-black font-medium transition-colors duration-300 group-hover:text-blue-600">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-1.5 border border-gray-200 rounded-full text-[13px] font-medium text-gray-500 hover:bg-black hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
