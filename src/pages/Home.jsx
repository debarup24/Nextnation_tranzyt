import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import SimpleCarousel from "../components/ServiceCarousels";
import Ellipse from "../assets/Ellipse.svg";
import AboutUs from "../components/AboutUs";
import Customer from "../components/Customer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* 1. Added relative and overflow-hidden to anchor the background shapes */}
      <section className="relative overflow-hidden py-20">
        {/* Left Top Blob Asset */}
        <img
          src={Ellipse}
          alt=""
          className="
    absolute
   
    top-0
    left-1/3
    translate-y-1/2
    w-24
    h-24
    z-0
    pointer-events-none
  "
        />
        <img
          src={Ellipse}
          alt=""
          className="
    absolute
     bottom-0
    left-16
    -translate-y-1/2
    w-24
    h-24
    z-0
    pointer-events-none
  "
        />

        {/* 2. Wrapped the carousel content in relative z-10 so it layers neatly over the graphics */}
        <div className="relative z-10">
          <ServiceSection />
        </div>
      </section>
      <AboutUs />
      <Customer />
      <Testimonials />
    </div>
  );
};

export default Home;
