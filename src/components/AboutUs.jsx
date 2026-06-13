import React from "react";
import VideoImg from "../assets/VideoImg.png";
import Ellipse from "../assets/Ellipse.svg";
import { Play, PlayCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* BG handle */}
      <img
        src={Ellipse}
        alt=""
        className="absolute -bottom-16 -right-16 w-64 h-64 md:w-[450px] md:h-[450px] opacity-90 pointer-events-none z-0 object-contain"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col text-left max-w-2xl">
            <div className="w-16 h-[3px] bg-linear-to-r from-pink-500 to-purple-600 mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Leading companies trust us
              <span className="block mt-2 text-slate-900">
                to develop software
              </span>
            </h2>

            <p className="mt-6 text-base text-gray-500 leading-relaxed font-normal">
              We{" "}
              <span className="text-pink-500 font-medium">
                add development capacity
              </span>{" "}
              to tech teams. Our value isn't limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.
            </p>

            <div className="mt-8">
              <a
                href="#more-info"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-800 hover:text-purple-950 transition-colors duration-200 group"
              >
                See more Informations
                <svg
                  className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl aspect-4/3 md:aspect-16/10 lg:aspect-4/3 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                src={VideoImg}
                alt="Development team working together"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-800 text-white shadow-xl transform transition-transform duration-300 group-hover:scale-110"
                  aria-label="Play Video Presentation"
                >
                  <Play />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
