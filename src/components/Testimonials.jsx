import React, { useState } from "react";
import { TESTIMONIAL_DATA } from "../data/MockData";

export default function Testimonials() {
  const [items, setItems] = useState(TESTIMONIAL_DATA);

  const CENTER_INDEX = 2;
  const activeUser = items[CENTER_INDEX];

  const handleNext = () => {
    setItems((prevItems) => {
      const updated = [...prevItems];
      const first = updated.shift();
      updated.push(first);
      return updated;
    });
  };

  const handlePrev = () => {
    setItems((prevItems) => {
      const updated = [...prevItems];
      const last = updated.pop();
      updated.unshift(last);
      return updated;
    });
  };

  const handleCardClick = (clickedIndex) => {
    const shiftCount = clickedIndex - CENTER_INDEX;
    if (shiftCount === 0) return;

    setItems((prevItems) => {
      const updated = [...prevItems];
      if (shiftCount > 0) {
        // Shift left multiple times
        for (let i = 0; i < shiftCount; i++) {
          const first = updated.shift();
          updated.push(first);
        }
      } else {
        for (let i = 0; i < Math.abs(shiftCount); i++) {
          const last = updated.pop();
          updated.unshift(last);
        }
      }
      return updated;
    });
  };

  return (
    <section className="w-full py-20 bg-white overflow-hidden text-center select-none">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-16">
          <div className="w-14 h-[3px] bg-gradient-to-r from-pink-500 to-purple-600 mb-4" />
          <span className="text-gray-500 text-lg font-normal">
            Why customers love
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
            working with us
          </h2>
        </div>

        <div className="grid grid-cols-12 items-center gap-2 max-w-4xl mx-auto min-h-[160px] relative">
          <div className="col-span-2 md:col-span-1 flex justify-start z-10">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-purple-800 text-purple-800 flex items-center justify-center hover:bg-purple-800 hover:text-white transition-all duration-200 shadow-sm"
              aria-label="Previous Testimonial"
            >
              ←
            </button>
          </div>

          <div className="col-span-8 md:col-span-10 flex justify-center px-4 md:px-8">
            <div className="max-w-md w-full relative">
              <span className="absolute -top-6 -left-6 text-pink-500 text-4xl font-serif font-bold opacity-80 select-none">
                “
              </span>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed transition-all duration-300 ease-in-out">
                {activeUser?.description}
              </p>
              <span className="absolute -bottom-10 -right-6 text-pink-500 text-4xl font-serif font-bold opacity-80 select-none">
                ”
              </span>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-end z-10">
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-purple-800 text-purple-800 flex items-center justify-center hover:bg-purple-800 hover:text-white transition-all duration-200 shadow-sm"
              aria-label="Next Testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div className="flex md:flex-nowrap items-end justify-center gap-6 md:gap-10 mt-20 max-w-5xl mx-auto">
          {items.map((user, index) => {
            const isActive = index === CENTER_INDEX;

            return (
              <div
                key={user.id}
                onClick={() => handleCardClick(index)}
                className="flex flex-col items-center cursor-pointer transition-all duration-500 w-[140px] shrink-0"
              >
                <div className="relative mb-4 flex justify-center items-center">
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 to-purple-500 blur-[2px] p-[3px] -m-[3px] animate-pulse" />
                  )}
                  <img
                    src={user.image}
                    alt={user.name}
                    className={`rounded-full object-cover bg-slate-100 transition-all duration-500 border-2
                      ${
                        isActive
                          ? "w-20 h-20 border-purple-600 scale-110 shadow-md"
                          : "w-16 h-16 border-transparent opacity-40 hover:opacity-60 scale-95"
                      }`}
                  />
                </div>

                <div className="flex items-center justify-center gap-0.5 mb-2 h-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <svg
                      key={starIdx}
                      className={`w-3.5 h-3.5 ${starIdx < user.stars ? "text-amber-400 fill-current" : "text-gray-200"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <h3
                  className={`text-sm font-bold transition-all duration-300 tracking-tight whitespace-nowrap
                  ${isActive ? "text-purple-900 font-extrabold scale-105" : "text-gray-700/80 font-semibold"}`}
                >
                  {user.name}
                </h3>

                <p
                  className={`text-xs mt-0.5 whitespace-nowrap transition-colors duration-300
                  ${isActive ? "text-slate-900 font-medium" : "text-gray-400"}`}
                >
                  {user.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
