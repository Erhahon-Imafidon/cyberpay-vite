import React from "react";
import DSTV from "../assets/dstv-2.png";

const Integration = () => {
  return (
    <section className="container px-4 py-24 min-h-screen flex items-center">
      <div className=" text-white flex flex-col items-center md:items-start md:flex-row md:justify-evenly w-full md:w-10/12 ">
        {/* ITEM 1  */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <div className="bg-[#1AA7E8] h-[18.875rem] w-[20.72975rem] rounded-[5.237px] flex items-center justify-center">
            <div className="bg-white w-[16.22369rem] h-[16.22369rem] rounded-full flex justify-center items-center">
              <img src={DSTV} alt="dstv logo" />
            </div>
          </div>
          <div className="py-1 border-b-[5px] border-[#0C76B2] text-center md:text-left font-roboto-slab text-xl">
            <p>Product Description</p>
          </div>

          <p className="text-center md:text-left font-roboto leading-[1.4375rem] w-full max-w-[24.9375rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lacus
            sagittis velit erat odio habitasse. At euismod ac sit augue quis
            posuere elit. Enim rutrum tristique nunc gravida at. In turpis enim
            eu nunc quis. Dictumst lorem sollicitudin volutpat neque.
          </p>
        </div>

        {/* ITEM 2  */}
        <div className="">
          <p className="font-roboto-slab text-sm">CABLE SUBSCRITPION</p>
        </div>
      </div>
    </section>
  );
};

export default Integration;
