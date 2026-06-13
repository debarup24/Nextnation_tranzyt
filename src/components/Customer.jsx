import React, { useRef } from "react";
import clickOrder from "../assets/clickOrder.png";
import adClipse from "../assets/adClipse.png";
import sampath from "../assets/sampath.png";
import techMate from "../assets/techMate.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Brand_Logos = [
  adClipse,
  clickOrder,
  sampath,
  adClipse,
  techMate,
  clickOrder,
  sampath,
  techMate,
  clickOrder,
  sampath,
  adClipse,
  techMate,
  clickOrder,
];

export default function Customer() {
  const scrollContainerRef = useRef(null);

  // Manual scroll handling logic via the Arrow buttons
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Distance to scroll per click
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="w-full py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Top Header Section --- */}
        {/* Flex layout shifts to column and centers text on screens below 1024px */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 text-center lg:text-left items-center lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            {/* Top accent line decor */}
            <div className="w-14 h-[3px] bg-gradient-to-r from-pink-500 to-purple-600 mb-4" />
            <span className="text-gray-500 text-lg font-normal">
              Meet the People
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
              We are Working With
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="w-11 h-11 rounded-full bg-purple-100 border border-purple-800 text-purple-800 flex items-center justify-center hover:bg-purple-800 hover:text-white transition-all duration-200"
              aria-label="Scroll Left"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-11 h-11 rounded-full bg-purple-100 border border-purple-800 text-purple-800 flex items-center justify-center hover:bg-purple-800 hover:text-white transition-all duration-200"
              aria-label="Scroll Right"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* --- Logo Scrollable Track --- */}
      {/* Cleaned the mapping structure down to cleanly mount pure image items */}
      <div
        ref={scrollContainerRef}
        className="flex items-center h-40 bg-[#F7F7FA] gap-16 overflow-x-auto scrollbar-none py-4 px-12 snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {Brand_Logos.map((logoPath, index) => (
          <div
            key={index}
            className="shrink-0 snap-center flex items-center justify-center min-w-35"
          >
            <img
              src={logoPath}
              alt={`Partner Brand Logo ${index + 1}`}
              className="h-12 w-auto object-contain max-w-45"
            />
          </div>
        ))}
      </div>

      {/* --- Bottom Mobile Controls Section --- */}
      {/* Visible only below 1024px screen break, placed directly underneath the row list */}
      <div className="flex lg:hidden justify-center items-center gap-4 mt-10">
        <button
          onClick={() => handleScroll("left")}
          className="w-12 h-12 rounded-full  bg-purple-100 border border-purple-800 text-purple-900 flex items-center justify-center active:bg-purple-300 transition-all"
          aria-label="Scroll Left Mobile"
        >
          {" "}
          <ArrowLeft />
        </button>

        <button
          onClick={() => handleScroll("right")}
          className="w-12 h-12 rounded-full border border-purple-800 bg-purple-100 text-purple-900 flex items-center justify-center active:bg-purple-300 transition-all"
          aria-label="Scroll Right Mobile"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
