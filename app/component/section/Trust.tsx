// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const Trust = () => {
//   const brands = [
//     "/TrustImage/brand1.svg",
//     "/TrustImage/brand2.svg",
//     "/TrustImage/brand3.svg",
//     "/TrustImage/brand4.svg",
//   ];

//   return (
//     <div className="w-full bg-white pb-24 overflow-hidden">
     
//       <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 mb-16 flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
        
//         <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-gray-200 to-gray-300" />
        
//         <span className="text-[#888] text-[12px]  sm:text-[50px] md:text-[13px] font-medium font-inter-tight tracking-[0.1em] whitespace-nowrap text-center">
//             Loved by 1000+ big and small brands around the worlds
//         </span>
        
//         {/* Right Decorative Line */}
//         <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-gray-200 to-gray-300" />
//       </div>
      
//       {/* Infinite Marquee */}
//       <div className="flex overflow-hidden relative px-4 sm:px-6">
//         <motion.div 
//           className="flex gap-16 sm:gap-20 md:gap-28 items-center pr-16 sm:pr-20 md:pr-28"
//           animate={{ x: [0, "-50%"] }}
//           transition={{ 
//             duration: 50, 
//             repeat: Infinity, 
//             ease: "linear" 
//           }}
//         >
//           {[...brands, ...brands, ...brands, ...brands].map((src, idx) => (
//             <div key={idx} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
//               <Image 
//                 src={src} 
//                 width={120} 
//                 height={40} 
//                 alt={`Partner brand ${idx}`} 
//                 className="h-6 sm:h-8 md:h-9 w-auto object-contain"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Trust;


"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Trust = () => {
  const brands = [
    "/TrustImage/brand1.svg",
    "/TrustImage/brand2.svg",
    "/TrustImage/brand3.svg",
    "/TrustImage/brand4.svg",
  ];

  return (
    <div className="w-full bg-gray-900 pb-24 overflow-hidden relative">
      
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 mb-16 flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
        
        {/* Left Gradient Line */}
        <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-gray-700 to-gray-600" />
        
        {/* Center Text */}
        <span className="text-gray-300 text-[12px] sm:text-[14px] md:text-[16px] font-medium font-inter-tight tracking-[0.05em] text-center whitespace-nowrap">
          Loved by 1000+ big and small brands around the world
        </span>
        
        {/* Right Gradient Line */}
        <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-gray-700 to-gray-600" />
      </div>
      
      {/* Infinite Marquee */}
      <div className="flex overflow-hidden relative px-4 sm:px-6">
        <motion.div 
          className="flex gap-16 sm:gap-20 md:gap-28 items-center pr-16 sm:pr-20 md:pr-28"
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...brands, ...brands, ...brands, ...brands].map((src, idx) => (
            <div key={idx} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
              <Image 
                src={src} 
                width={120} 
                height={40} 
                alt={`Partner brand ${idx}`} 
                className="h-6 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Trust;
