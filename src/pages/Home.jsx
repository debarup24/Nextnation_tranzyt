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

      <section className="relative overflow-hidden py-20">
        {/* Left Top */}
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
