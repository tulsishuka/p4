/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Services = () => {
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

  const normalText = "Where innovation meets";
  const italicText = "aesthetics";

  return (
    <main className="relative flex flex-col items-center min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 bg-white">
      
      {/* Heading */}
      <h1
        ref={headingRef}
        className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-black font-medium font-inter-tight text-center mb-10 sm:mb-12"
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
      </h1>

      {/* Services */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-12 sm:mb-16 w-full max-w-6xl justify-center">
        {[
          { src: "/AboutImage/brand.svg", title: "Brand Strategy", color: "bg-purple-100", text: "#ba81ee" },
          { src: "/AboutImage/digitalmarketing.svg", title: "Digital Marketing", color: "bg-blue-100", text: "#70b5ff" },
          { src: "/AboutImage/uiux.svg", title: "UI/UX Design", color: "bg-orange-100", text: "#ffaf68" },
          { src: "/AboutImage/analitics.svg", title: "Analytics & Reporting", color: "bg-green-100", text: "#79d45e" },
          { src: "/AboutImage/webdevp.svg", title: "Web Development", color: "bg-pink-100", text: "#f4889a" },
        ].map((service, idx) => (
          <div
            key={idx}
            className={`w-full md:w-[200px] lg:w-[220px] xl:w-[240px] h-[160px] sm:h-[170px] md:h-[190px] lg:h-[200px] p-4 sm:p-5 md:p-6 rounded-2xl ${service.color} flex flex-col justify-between transition-transform hover:scale-105`}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10">
              <Image src={service.src} alt={service.title} width={36} height={36} />
            </div>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold leading-snug"
              style={{ color: service.text }}
            >
              {service.title.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#1b1d1e] text-white px-6 sm:px-10 md:px-14 py-8 sm:py-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 w-full max-w-7xl mx-auto">
        <div className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#fff] leading-tight text-center md:text-left">
          <p className="font-medium">See Our Work in Action.</p>
          <p>Start Your Creative Journey with Us!</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {["Let’s Collaborate", "View Portfolio"].map((btnText, idx) => (
            <button
              key={idx}
              className="group relative flex items-center justify-center 
                         bg-white text-black 
                         hover:bg-black hover:text-white 
                         border-2 border-white 
                         w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[44px] sm:h-[48px] md:h-[50px] lg:h-[54px] rounded-full 
                         transition-all duration-500 ease-in-out overflow-hidden"
            >
              <span className="absolute left-3 sm:left-4 md:left-5 lg:left-6 font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] transition-all duration-500 ease-in-out group-hover:translate-x-[50px] sm:group-hover:translate-x-[60px] md:group-hover:translate-x-[70px] lg:group-hover:translate-x-[80px]">
                {btnText}
              </span>

              <div className="absolute right-1 sm:right-2 bg-black text-white 
                              group-hover:bg-white group-hover:text-black
                              w-8 h-8 sm:w-9 sm:h-9 rounded-full 
                              flex items-center justify-center 
                              transition-all duration-500 ease-in-out group-hover:-translate-x-[140px] sm:group-hover:-translate-x-[150px] md:group-hover:-translate-x-[160px] lg:group-hover:-translate-x-[170px] z-10">
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
