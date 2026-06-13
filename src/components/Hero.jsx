import React from "react";
import heroImg from "../assets/heroImg.png";
import ActionBTN from "../ui/buttons/ActionBTN";

const Hero = () => {
  return (
    <section className="flex lg:min-h-screen w-full items-center justify-center lg:justify-between px-6 lg:px-20 py-28 lg:py-37">
      <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 items-center justify-items-center">
        {/* Left wala */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center w-full max-w-xl mt-2">
          <h1 className="text-4xl font-normal leading-tight text-slate-800 lg:text-6xl lg:leading-tight">
            Great <span className="font-semibold text-purple-400">Product</span>{" "}
            is{" "}
            <span className="block font-bold text-slate-950 mt-2">
              built by great <span className="text-purple-500">teams</span>
            </span>
          </h1>

          <p className="mt-6 text-base text-gray-500 leading-relaxed max-w-md">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>

          <div className="mt-10 flex flex-col items-center lg:items-start w-full">
            <ActionBTN size="md" variant="brand">
              Let's get started!
            </ActionBTN>
          </div>
        </div>

        {/* Right Part */}
        <div className="hidden lg:flex justify-center lg:justify-end w-full">
          <img
            src={heroImg}
            alt="developer"
            className="w-full max-w-2xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
