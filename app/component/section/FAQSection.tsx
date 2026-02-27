"use client"

import React, { useState, useEffect } from 'react'
import { Plus } from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const headingText = "Got questions? We’ve got"
  const italicText = "answers"
  const words = headingText.split(" ")
  const italicWords = italicText.split(" ")

  const faqs = [
    {
      question: "What services does Awake Agency offer?",
      answer: "We offer a full suite of design and development services including UX Research, Interface Design, Product Design, and full-stack Next.js development."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary, but most standard website designs take 2-4 weeks, while complex web applications can take 8-12 weeks."
    },
    {
      question: "How is pricing structured at Awake Agency?",
      answer: "We offer both project-based pricing and monthly subscription plans like our Starter and Pro tiers to fit your startup's needs."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we provide ongoing maintenance, SEO monitoring, and design updates through our subscription models."
    },
    {
      question: "How often will I receive updates on my project?",
      answer: "Depending on your plan, you will receive updates either daily or every 2 days via our dedicated client dashboard."
    }
  ]

  // Trigger animation
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-24 px-6 w-full">
      {/* Heading */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-[40px] md:text-[50px] font-medium text-white text-center leading-tight max-w-2xl">
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
          <span className="font-instrument-serif italic">
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
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="max-w-7xl mx-auto space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-[20px] overflow-hidden transition-all duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${500 + index * 100}ms` }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-8 text-left hover:bg-white transition-colors"
            >
              <span className="text-[20px] md:text-[24px] font-medium text-gray-300 pr-8">
                {faq.question}
              </span>
              <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                <Plus size={24} className="text-gray-400" />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 border-t border-gray-50' : 'max-h-0'
              }`}
            >
              <div className="p-8 text-gray-500 text-lg leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
