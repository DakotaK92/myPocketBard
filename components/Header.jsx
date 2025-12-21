"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200 bg-white transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
        <Image
          src="/assets/pb-horizontal-logo.webp"
          alt="myPocketBard logo"
          width={scrolled ? 140 : 180}
          height={40}
          priority
          className="transition-all duration-300"
        />

        <nav className="hidden xl:flex gap-6 text-black justify-center items-center">
          <button
            className="hover:border border-gray-300 px-4 py-2 rounded-md transition-colors duration-300"
            onClick={() => scrollTo("features")}
          >
            Features
          </button>
          <button
            className="hover:border border-gray-300 px-4 py-2 rounded-md transition-colors duration-300"
            onClick={() => scrollTo("price")}
          >
            Price
          </button>
          <button
            className="hover:border border-gray-300 px-4 py-2 rounded-md transition-colors duration-300"
            onClick={() => scrollTo("questions")}
          >
            FAQs
          </button>
        </nav>


        {/* Mobile navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
