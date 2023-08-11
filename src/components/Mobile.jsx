import React from "react";
import Phone from "../assets/Phone.png";
import Screen from "../assets/Screen.png";
import Google from "../assets/Google Play Badge.png";
import Apple from "../assets/App Store Badge.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Mobile = () => {
  return (
    <section className="container px-4 pb-40 pt-20 mt-10">
      <div className="relative flex flex-col items-center justify-center md:flex-row md:justify-between pt-14 pb-8  px-4 md:px-24 bg-white rounded-lg w-full">
        <div className="flex flex-col items-center md:items-start w-full max-w-[31.75rem] space-y-4 px-4 md:px-0">
          <h2 className="text-[#2C84C7] font-manrope text-3xl md:text-4xl text-center md:text-left font-extrabold leading-[3.375rem]">
            Download Our Mobile App
          </h2>

          <p className="font-manrope text-center md:text-left text-base md:text-lg font-medium leading-8 text-[#0D0A27] w-full max-w-[28.75rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
            egestas odio cras
          </p>

          <Link className="flex items-center space-x-2 py-4 text-[#3D8CD6]">
            <p className="font-red-hat-display text-xl font-bold leading-[1.875rem]">
              Get started
            </p>
            <span className="font-bold">
              <BsArrowRight />
            </span>
          </Link>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <Link to="/" className="w-[12rem]">
              <img src={Google} alt="Google badge" />
            </Link>
            <Link to="/" className="w-[12rem]">
              <img src={Apple} alt="Google badge" />
            </Link>
          </div>
        </div>

        <div className="hidden md:block absolute w-[20rem] h-[40rem] right-0 shadow-4xl">
          <img src={Phone} alt="Image of i-phone" className=" w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Mobile;
