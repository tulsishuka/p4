import { Check, ArrowUpRight } from 'lucide-react'

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "For companies who need design support. One request at a time",
      price: "$2500",
      bgColor: "bg-[#f6e683]", 
      textColor: "text-gray-900",
      features: [
        "Design Updates Every 2 Days",
        "Mid-level Designer",
        "SEO optimization",
        "Monthly analytics",
        "2x Calls Per Month",
        "License free assets"
      ]
    },
    {
      name: "Pro",
      description: "2x the speed. Great for an MVP, Web App or complex problem",
      price: "$3800",
      bgColor: "bg-[#4b21ff]",
      textColor: "text-white",
      features: [
        "Design Updates Daily",
        "Senior-level Designer",
        "AI Advisory Framework",
        "Full-service Creative Team",
        "4x Calls Per Month",
        "License free assets"
      ]
    }
  ]

  return (
    <section className="py-24 px-6 ">
      {/* 1. Section Header */}
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-16">
        <h2 className="text-[40px] md:text-[50px] font-medium text-white text-center leading-tight">
          Pick the plan that <br />
          fits your <span className="font-instrument-serif italic">start-up</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`${plan.bgColor} ${plan.textColor} rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-4`}
          >
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="bg-black/90 text-white text-[17px] font-medium  px-5 py-2 rounded-full inline-block mb-6">
                  {plan.name}
                </span>
                <p className="text-[17px] font-medium opacity-80 leading-snug mb-12 max-w-[260px]">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-[55px] font-medium leading-none tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="text-xl opacity-60">/month</span>
                </div>
              </div>

            


<button
  className="
    group relative flex items-center justify-center
    bg-white hover:bg-white hover:border-white
    border-2 border-transparent
    w-[160px] sm:w-[200px]
    h-[40px] sm:h-[50px]
    rounded-full transition-all duration-500 ease-in-out
    overflow-hidden
  "
>
  <span
    className="
      absolute left-5 sm:left-6
      font-medium text-[14px] sm:text-[16px]
      tracking-tight text-black group-hover:text-black
      transition-all duration-500 ease-in-out
      group-hover:translate-x-[65px]
    "
  >
    Let's Collaborate
  </span>

  <div
    className="
      absolute right-2
      bg-black group-hover:bg-black
      w-9 h-9 sm:w-10 sm:h-10
      rounded-full text-white group-hover:text-white
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
            <div className="flex-1 border-t md:border-t-0 md:border-l border-black/10 pt-8 md:pt-0 md:pl-8">
              <p className="text-sm font-medium text-white  tracking-widest mb-6">
                Features
              </p>
              <ul className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check size={18} className="mt-1 flex-shrink-0" />
                    <span className="text-[16px] font-medium leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricingSection




