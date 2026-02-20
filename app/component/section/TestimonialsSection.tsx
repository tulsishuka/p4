"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* First Section */}
      <section
        ref={sectionRef}
        className="pt-20 pb-12 px-6 max-w-7xl mx-auto overflow-hidden"
      >
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl text-black max-w-2xl md:text-5xl lg:text-5xl mb-16 mx-auto">
          {"What our satisfied customers are saying"
            .split(" ")
            .map((word, i) => (
              <span
                key={i}
                className={`inline-block font-medium transition-all duration-[1100ms] ease-out
                  ${
                    isVisible
                      ? "opacity-100 blur-0 translate-y-0"
                      : "opacity-0 blur-xl translate-y-6"
                  }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {word}&nbsp;
              </span>
            ))}

          <span
            className={`inline-block font-instrument-serif italic transition-all duration-[1100ms] ease-out
              ${
                isVisible
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-xl translate-y-6"
              }`}
            style={{ transitionDelay: `900ms` }}
          >
            about us
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Card */}
          <div
            style={{ transitionDelay: "300ms" }}
            className={`lg:col-span-2 relative h-[500px] rounded-[40px] overflow-hidden group
              transition-all duration-[1100ms] ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <Image
              src="/FifthImage/cutomer.webp"
              alt="Customer Story"
              fill
              className="object-cover brightness-[0.65]"
            />
            <div className="relative h-full flex flex-col justify-between p-10 text-white">
              <p className="text-sm font-medium opacity-60 tracking-widest uppercase">
                Customer Stories
              </p>
              <div>
                <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-8 max-w-2xl">
                  “Awake’s expertise transformed my vision into success!”
                </h2>
                <div className="space-y-1">
                  <p className="text-xl font-bold">Kabir Shah</p>
                  <p className="text-sm opacity-60">Founder of Chipsland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div
            style={{ transitionDelay: "450ms" }}
            className={`bg-[#f2e180] rounded-[40px] p-10 flex flex-col justify-between h-[500px]
              transition-all duration-[1100ms] ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <p className="text-sm font-medium text-gray-800 opacity-60 tracking-widest uppercase">
              Facts & Numbers
            </p>
            <div className="space-y-4">
              <h3 className="text-[100px] leading-none font-medium text-gray-900 tracking-tighter">
                91%
              </h3>
              <p className="text-2xl text-gray-800 leading-snug">
                Clients recommend our design services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="pt-0 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Card */}
          <div
            style={{ transitionDelay: "600ms" }}
            className={`bg-[#1a1a1a] rounded-[32px] p-6 flex flex-col justify-between min-h-[530px]
              transition-all duration-[1100ms] ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <div>
              <p className="text-[12px] font-bold text-gray-500 tracking-widest uppercase mb-8">
                Customer Stories
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-medium leading-tight">
                Their creativity and attention to detail transformed our brand completely!
              </h3>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mt-6">
              <Image
                src="/FifthImage/Figma.webp"
                alt="Brand Billboard"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Card */}
          <div
            style={{ transitionDelay: "750ms" }}
            className={`md:col-span-2 bg-[#1b1d1e0d] rounded-[32px] p-10 md:p-5 flex flex-col justify-between
              transition-all duration-[1100ms] ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <div>
              <p className="text-[12px] font-bold text-gray-400 tracking-widest uppercase mb-12">
                Customer Stories
              </p>
              <h2 className="text-gray-900 text-3xl md:text-5xl font-medium leading-[1.1] max-w-3xl">
                “Awake Design Agency brought our ideas to life with exceptional creativity and precision, exceeding expectations.”
              </h2>
            </div>
            <div className="mt-8">
              <p className="text-lg font-medium text-gray-900">Kabir Shah</p>
              <p className="text-gray-500 font-medium">Founder of Chipsland</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialsSection
