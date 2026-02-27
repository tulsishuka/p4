"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

const TeamSection = () => {
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const team = [
    { id: 1, name: "Logan Dang", role: "WordPress Developer", img: "/FifthImage/creative1.webp" },
    { id: 2, name: "Ana Belić", role: "Social Media Specialist", img: "/FifthImage/creative2.webp" },
    { id: 3, name: "Brian Hanley", role: "Product Designer", img: "/FifthImage/creative3.webp" },
    { id: 4, name: "Darko Stanković", role: "UI Designer", img: "/FifthImage/creative4.webp" }
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6 w-full overflow-hidden">
      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-4xl text-white max-w-xl md:text-5xl lg:text-5xl mb-16 mx-auto">
        {"Meet the creative minds behind"
          .split(" ")
          .map((word, i) => (
            <span
              key={i}
              className={`inline-block font-medium transition-all duration-[1000ms] ease-out
                ${isVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-xl translate-y-6"}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
        <span
          className={`inline-block font-instrument-serif italic transition-all duration-[1000ms] ease-out
            ${isVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-xl translate-y-6"}`}
          style={{ transitionDelay: `900ms` }}
        >
          our success
        </span>
      </h1>

       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {team.map((member) => (
          <div key={member.id} className="flex flex-col items-center group">

            {/* Image */}
            <div className="relative w-75 h-65 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-90 lg:h-90 mb-6 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-contain transition-all duration-500 group-hover:grayscale"
                priority
              />
            </div>

            {/* Name and Role */}
            <div className="text-center">
              <h4 className="text-[18px] sm:text-[20px] md:text-[17px] font-medium text-gray-900 leading-tight">
                {member.name}
              </h4>
              <p className="text-gray-500 text-[14px] sm:text-[15px] md:text-[16px] mt-1">
                {member.role}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-400 mt-4">
              {/* Twitter Icon */}
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2707 0.586914H18.0819L11.9402 7.60649L19.1654 17.1586H13.5081L9.07712 11.3653L4.00705 17.1586H1.19412L7.76329 9.65033L0.832092 0.586914H6.63302L10.6383 5.88219L15.2707 0.586914ZM14.284 15.4759H15.8418L5.78659 2.18119H4.11498L14.284 15.4759Z" fill="currentColor"></path>
              </svg>
              {/* LinkedIn Icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_675)">
                  <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_675">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
