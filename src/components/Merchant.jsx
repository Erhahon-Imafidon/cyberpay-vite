import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import DasboardImage from "../assets/Dashboard.png";

const Merchant = () => {
  return (
    <section className="container px-4">
      <div className="flex flex-col items-center justify-center py-20">
        <div className="space-y-4 text-white w-full max-w-[44.25rem]">
          <h1 className="font-manrope text-3xl md:text-[2.8125rem] font-medium text-center md:text-left leading-[3.7125rem] tracking-[-0.02813rem]">
            Monitor your activity as a Merchant & Make decision
          </h1>
          <p className="text-xl text-center md:text-left font-roboto">
            Know how your busines is faring and set thing back to order
          </p>

          <button className="bg-hero-gradient w-[15rem] md:w-[18.125rem] h-[4rem] flex items-center px-8 justify-between relative z-20 shadow-3xl mx-auto md:mx-0">
            <Link className="font-roboto font-medium tracking-[0.1rem]">
              Learn More
            </Link>
            <Link>
              <BsArrowRight />
            </Link>
          </button>
        </div>

        <img
          src={DasboardImage}
          alt="Image of Dashboard"
          className="w-full max-w-[43.29056rem] mt-16 md:mr-4"
        />
      </div>
    </section>
  );
};

export default Merchant;
