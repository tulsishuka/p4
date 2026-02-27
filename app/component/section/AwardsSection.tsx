
"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image';

const awards = [
  {
    logo: "/AboutImage/k.svg", 
    title: "Framer Awards",
    description: "Celebrated for cutting-edge interaction design and seamless user experiences.",
    year: "2024",
    highlight: true,
  },
  {
    logo: "/AboutImage/ball.svg", 
    title: "Dribbble Awards",
    description: "Recognized for creative excellence and innovative design solutions",
    year: "2023",
    highlight: false,
  },
  {
    logo: "/AboutImage/w.svg", 
    title: "awwwards Awards",
    description: "Honored with the Best Website Design for creativity, usability, and innovation.",
    year: "2022",
    highlight: false,
  },
];

const AwardsSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  // Trigger animation
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true)
  }, [])

  // Headings
  const heading1 = "Accolades and achievements"
  const heading2 = "celebration our"
  const italicHeading = "design excellence"
  const heading3 = "Innovative solutions for"
  const italicHeading3 = "bold brands"

  const splitWords = (text: string) => text.split(" ")

  return (
    <>
    {/* Awards Section */}
    <section className="py-16 px-4 max-w-7xl mx-auto font-sans">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-2">
          {splitWords(heading1).map((word, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-[1000ms] ease-out ${
                isLoaded ? "blur-0 opacity-100 translate-y-0" : "blur-xl opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h2>

        <p className="text-4xl md:text-5xl font-medium text-gray-900">
          {splitWords(heading2).map((word, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-[1000ms] ease-out ${
                isLoaded ? "blur-0 opacity-100 translate-y-0" : "blur-xl opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(heading1.split(" ").length + i) * 100}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
          <span className="font-instrument-serif italic">
            {splitWords(italicHeading).map((word, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-[1000ms] ease-out ${
                  isLoaded ? "blur-0 opacity-100 translate-y-0" : "blur-xl opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(heading1.split(" ").length + heading2.split(" ").length + i) * 100}ms` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </span>
        </p>
      </div>

      {/* Awards Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div 
            key={index} 
            className={`border border-gray-200 rounded-3xl p-8 flex flex-col justify-between min-h-[400px] shadow-sm hover:shadow-md transition-shadow ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${500 + index * 150}ms` }}
          >
            <div>
              <div className="mb-8">
                <Image 
                  src={award.logo} 
                  alt={award.title} 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{award.title}</p>
              
              <h3 className={`text-2xl leading-snug font-normal text-blue-600 hover:text-blue-600 ${award.highlight }`}>
                {award.description}
              </h3>
            </div>

            <div className="mt-8 text-gray-500 font-medium">
              {award.year}
            </div>
          </div>
        ))}
      </div>
    </section>

   


    <section className="px-4 py-20">
  <div className="bg-indigo-700 shadow-xl shadow-indigo-900/20  max-w-7xl mx-auto rounded-[40px] p-12 md:p-24 text-center  border border-gray-100/50 shadow-sm">
    
    {/* Heading */}
    <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6">
      {splitWords(heading3).map((word, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-[1000ms] ease-out ${
            isLoaded ? "blur-0 opacity-100 translate-y-0" : "blur-xl opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
      <span className="font-instrument-serif italic">
        {splitWords(italicHeading3).map((word, i) => (
          <span
            key={i}
            className={`inline-block transition-all duration-[1000ms] ease-out ${
              isLoaded ? "blur-0 opacity-100 translate-y-0" : "blur-xl opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${(heading3.split(" ").length + i) * 100}ms` }}
          >
            {word}&nbsp;
          </span>
        ))}
      </span>
    </h2>

    {/* Description */}
    <p className={`max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed mb-10 transition-all duration-[1000ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
       style={{ transitionDelay: `${(heading3.split(" ").length + italicHeading3.split(" ").length) * 100 + 200}ms` }}
    >
      Looking to elevate your brand? We craft immersive experiences that captivate, 
      engage, and make your business unforgettable in every interaction.
    </p>

    {/* Centered Button */}
    <div className="flex justify-center mb-0">
      <button
        className="
          group relative flex items-center justify-center 
          bg-black hover:bg-black hover:border-white
          border-2 border-transparent
          w-[180px] sm:w-[200px]
          h-[40px] sm:h-[50px]
          rounded-full transition-all duration-500 ease-in-out
          overflow-hidden block mx-auto
        "
      >
        <span
          className="
            absolute left-5 sm:left-6
            font-medium text-[14px] sm:text-[16px]
            tracking-tight text-white/90 group-hover:text-white
            transition-all duration-500 ease-in-out
            group-hover:translate-x-[65px]
          "
        >
          Let's Collaborate
        </span>

        <div
          className="
            absolute right-2
            bg-white group-hover:bg-white
            w-9 h-9 sm:w-10 sm:h-10
            rounded-full text-black group-hover:text-black
            flex items-center justify-center
            transition-all duration-500 ease-in-out
            group-hover:-translate-x-[140px] z-10
          "
        >
          <ArrowUpRight
            size={18}
            strokeWidth={2}
            className="transition-transform duration-500 group-hover:rotate-45"
          />
        </div>
      </button>
    </div>
  </div>
</section>

   
   </>
  );
};

export default AwardsSection;
