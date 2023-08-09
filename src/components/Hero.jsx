import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Sphere from "../assets/Hero-Bg.png";

const Hero = () => {
  return (
    <section className="text-white container p-4">
      <div className="flex justify-center items-center py-32 relative">
        <div className="flex flex-col items-center space-y-6">
          <h1 class="w-full md:w-[41.0625rem] text-center text-white text-3xl md:text-[3.125rem] md:leading-[3.75rem] font-normal font-roboto-slab">
            Make payment - Whenever, wherever, with Cyberpay
          </h1>

          <p className="w-full max-w-[28rem] mx-auto text-white/[0.87] text-center font-roboto text-lg tracking-[0.045rem]">
            Don’t get stranded, Discover Various payment option on our platform.
          </p>

          <button className="bg-hero-gradient w-[15rem] md:w-[22.9375rem] h-[3.375rem] flex items-center px-8 justify-between relative z-20">
            <Link className="font-roboto font-medium tracking-[0.1rem]">
              Learn More
            </Link>
            <Link>
              <BsArrowRight />
            </Link>
          </button>
        </div>

        <div className="hidden md:block">
          <img
            src={Sphere}
            alt="Background Image of Sphere"
            className="absolute z-10 w-[62.5rem] right-[3rem] top-[-7rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
