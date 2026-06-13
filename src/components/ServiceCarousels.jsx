import React, { useState, useEffect, useRef } from "react";
import { SERVICES_DATA } from "../data/MockData";

export default function ServiceCarousels() {
  const originalLength = SERVICES_DATA.length;

  const extendedCards = [
    SERVICES_DATA[originalLength - 2],
    SERVICES_DATA[originalLength - 1],
    ...SERVICES_DATA,
    SERVICES_DATA[0],
    SERVICES_DATA[1],
  ];

  const [currentIndex, setCurrentIndex] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollContainerRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleWheel = (e) => {
    e.preventDefault();

    if (isScrollingRef.current || !isTransitioning) return;
    isScrollingRef.current = true;

    if (e.deltaY > 0 || e.deltaX > 0) {
      handleNext();
    } else {
      handlePrev();
    }

    //delay
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= originalLength + 2) {
      setIsTransitioning(false);
      setCurrentIndex(2);
    } else if (currentIndex <= 1) {
      setIsTransitioning(false);
      setCurrentIndex(originalLength + 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const activeDotIndex = (currentIndex - 2 + originalLength) % originalLength;
  const activeHumanIndex = activeDotIndex + 1;
  const progressPercentage = (activeHumanIndex / originalLength) * 100;

  return (
    <div className="w-full mx-auto px-1 py-12 select-none relative">
      {/* Outer Cont. */}
      <div className="overflow-hidden relative w-full py-6">
        <div
          ref={containerRef}
          onTransitionEnd={handleTransitionEnd}
          onWheel={handleWheel}
          className="flex max-w-80 gap-6 justify-center mx-auto cursor-ew-resize touch-pan-y"
          style={{
            transform: `translateX(calc(-${(currentIndex - 2) * 100}% - ${(currentIndex - 2) * 24}px))`,
            transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {extendedCards.map((card, index) => {
            const isMiddle = index === currentIndex + 2;

            return (
              <div
                key={`${card.id}-${index}`}
                ref={scrollContainerRef}
                className={` shrink-0 bg-white rounded-xl shadow-sm border-2 transition-all duration-500 overflow-hidden flex flex-col p-6 min-h-55 ${
                  isMiddle
                    ? " w-82 md:w-84 border-red-800 scale-105 shadow-md"
                    : "w-80 border-gray-100"
                }`}
              >
                {/* Card */}
                <div className="flex flex-col grow text-left">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-full bg-orange-50 border border-red-600 flex items-center justify-center ">
                      <img src={card.image} className="w-12 h-12" />
                    </div>
                  </div>
                  <h3
                    className={` ${isMiddle ? "text-red-800" : "text-gray-900"} text-gray-900 font-semibold text-base mb-2 `}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* dot & bar */}

      <div className="flex justify-center items-center gap-2">
        {SERVICES_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 2)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeDotIndex === index ? "w-6 bg-red-800" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute right-0 flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-700 min-w-6 text-right">
          {activeHumanIndex}/{originalLength}
        </span>

        <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-800 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
