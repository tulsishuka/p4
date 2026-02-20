// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Moon, Menu, X } from "lucide-react";
// import Image from "next/image";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "About us", href: "#" },
//     { name: "Services", href: "#" },
//     { name: "Work", href: "#" },
//     { name: "Team", href: "#" },
//     { name: "Pricing", href: "#" },
//     { name: "Awards", href: "#" },
//     { name: "Contact", href: "#" },
//   ];

//   return (
//     <nav
//       className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
//       transition-all duration-300 ease-in-out
//       rounded-full w-[95%] max-w-[1300px]
//       px-6 lg:px-8
//       ${
//         scrolled
//           ? "py-2 bg-white/80 backdrop-blur-md shadow-md border border-gray-100"
//           : "py-3 bg-transparent"
//       }`}
//     >
//       <div className="mx-auto flex items-center justify-between">

//         {/* Logo */}
//         {/* <Image src="HeroImage/logo.svg" alt="Logo" width={120} height={80} /> */}
//         <h1 className="text-xl text-black ">GlowAura</h1>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex items-center gap-2 bg-[#F1F1F1]/90 rounded-full px-1.5 py-1.5 shadow-sm">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="px-5 py-2 text-[15px] font-medium text-[#555] hover:text-black rounded-full hover:bg-white/80 transition"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Right Actions */}
//         <div className="flex items-center gap-2">
//           <button className="hidden sm:block bg-white text-black px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition">
//             Sign In
//           </button>

//           <button className="hidden sm:block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
//             Sign Up
//           </button>

//           <button className="p-2 text-black hover:bg-gray-100 rounded-full transition">
//             <Moon size={20} fill="currentColor" />
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="lg:hidden p-2 rounded-full  hover:bg-gray-800 transition"
//           >
//             {open ? <X size={22} /> : <Menu size={22} className="text-gray-900" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-lg p-4 space-y-2">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={() => setOpen(false)}
//               className="block px-4 py-2 text-[15px] font-semibold text-[#555] hover:text-black hover:bg-gray-100 rounded-lg transition"
//             >
//               {link.name}
//             </Link>
//           ))}

//           <div className="flex flex-col gap-2 pt-3">
//             <button className=" bg-white text-black py-2 text-center  rounded-md border border-black hover:bg-black hover:text-white transition">
//               Sign In
//             </button>
//             <button className=" bg-black text-white py-2 text-center rounded-md hover:bg-gray-800 transition">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Work", href: "#" },
    { name: "Team", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Awards", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
      transition-all duration-300 ease-in-out
      rounded-full w-[95%] max-w-[1300px]
      px-6 lg:px-8
      ${
        scrolled
          ? "py-2 bg-gray-900/90 backdrop-blur-md shadow-md border border-gray-800"
          : "py-3 bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl text-white font-bold">GlowAura</h1>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 bg-gray-800/80 rounded-full px-1.5 py-1.5 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-[15px] font-medium text-gray-300 hover:text-white rounded-full hover:bg-gray-700/70 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:block bg-gray-700 text-white px-4 py-2 rounded-full border border-gray-500 hover:bg-white hover:text-gray-900 transition">
            Sign In
          </button>

          <button className="hidden sm:block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
            Sign Up
          </button>

          <button className="p-2 text-gray-300 hover:bg-gray-700 rounded-full transition">
            <Moon size={20} fill="currentColor" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full hover:bg-gray-700 transition"
          >
            {open ? <X size={22} className="text-white" /> : <Menu size={22} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden mt-4 bg-gray-900 rounded-2xl shadow-lg p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-[15px] font-semibold text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-2 pt-3">
            <button className="bg-gray-700 text-white py-2 text-center rounded-md border border-gray-500 hover:bg-white hover:text-gray-900 transition">
              Sign In
            </button>
            <button className="bg-indigo-600 text-white py-2 text-center rounded-md hover:bg-indigo-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
