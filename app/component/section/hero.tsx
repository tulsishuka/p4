"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const headingText = "Crafting digital brands with"
  const italicText = "strategic creativity";
  const words = headingText.split(" ");
  const italicWords = italicText.split(" ");

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-[45%] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at left center, rgba(50,50,50,0.8) 0%, rgba(50,50,50,0) 70%)",
        }}
      />
      <section className="flex flex-col mt-20 items-center text-center pt-24 pb-32 px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <h1
          className="
          text-[42px] sm:text-[56px] md:text-[96px] lg:text-[130px]
          font-normal tracking-[-0.01em]
          max-w-7xl leading-[1] md:leading-[1.05] text-center
        "
        >
          <span className="font-inter-tight font-medium">
            {words.map((word, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-[1000ms] ease-out ${
                  isLoaded
                    ? "blur-0 opacity-100 translate-y-0"
                    : "blur-xl opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </span>

          <span className="font-instrument-serif italic text-indigo-400">
            {italicWords.map((word, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-[1000ms] ease-out ${
                  isLoaded
                    ? "blur-0 opacity-100 translate-y-0"
                    : "blur-xl opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(words.length + i) * 100}ms` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </span>
        </h1>

        {/* Description */}
        <p
          className={`mt-8 sm:mt-10 text-gray-300 max-w-2xl
          text-[15px] sm:text-[16px] md:text-[17px]
          leading-relaxed font-light font-inter-tight transition-all duration-[1000ms]
          ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1200ms" }}
        >
        We design and develop high-impact digital experiences that help modern brands stand out, scale faster, and convert better in today’s competitive landscape.
        </p>

        {/* CTA */}
        <div
          className={`mt-12 sm:mt-14 flex flex-col md:flex-row items-center justify-center gap-10
          transition-all duration-[1000ms]
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "1400ms" }}
        >
          <button className="
            group relative flex items-center justify-center
            bg-indigo-600 hover:bg-white hover:border-indigo-600
            border-2 border-transparent
            w-[240px] sm:w-[260px]
            h-[60px] sm:h-[64px]
            rounded-full transition-all duration-500 ease-in-out
            shadow-xl shadow-indigo-900 overflow-hidden
          ">
            <span className="
              absolute left-8 sm:left-10
              font-medium text-[17px] sm:text-[19px]
              tracking-tight text-white group-hover:text-indigo-600
              transition-all duration-500 ease-in-out
              group-hover:translate-x-[85px]
            ">
              Get Started
            </span>

            <div className="
              absolute right-2
              bg-white group-hover:bg-indigo-600
              w-11 h-11 sm:w-12 sm:h-12
              rounded-full text-black group-hover:text-white
              flex items-center justify-center
              transition-all duration-500 ease-in-out
              group-hover:-translate-x-[192px] z-10
            ">
              <ArrowUpRight
                size={22}
                strokeWidth={2.5}
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            </div>
          </button>

          {/* Social proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-gray-900 overflow-hidden shadow-sm"
                >
                  <Image
                    src={`/HeroImage/av${i}.webp`}
                    alt={`Client ${i}`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-0.5">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
                <Star size={16} className="text-gray-700" strokeWidth={3} />
              </div>
              <p className="text-[12px] sm:text-[13px] text-gray-400 font-medium tracking-tight whitespace-nowrap">
                Trusted by 1000+ clients
              </p>
            </div>
          </div>
        </div>

        {/* Fixed CTA + Scroll Top */}
        <div className="fixed bottom-4 sm:bottom-5 right-4 sm:right-6 z-50 flex items-end gap-3">
          <div className="
            bg-indigo-600 py-2 px-4 rounded-md
            text-[13px] sm:text-[15px] text-white
          ">
            Get This Template
          </div>

          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="
                bg-indigo-700 text-white p-2.5 rounded-lg
                hover:opacity-90 transition-all duration-300
              "
              aria-label="Scroll to top"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Hero;
