import React from "react";
import DSTV from "../assets/dstv-2.png";
import { LiaAngleDownSolid } from "react-icons/lia";

const Integration = () => {
  const items = [
    {
      name: "Packages",
      contents: "ASIA",
    },
    {
      name: "PackDstv Smart Card Numberges",
      contents: "3838 3883 8838 8862",
      icon: <LiaAngleDownSolid />,
    },
    {
      name: "Amount",
      contents: "6,200",
    },
  ];

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
        <div className="space-y-6 mt-12 md:mt-0">
          <div className="space-y-3 text-center md:text-left">
            <p className="font-roboto-slab text-sm">CABLE SUBSCRITPION</p>
            <h2 className="font-roboto-slab text-[1.75rem] leading-8">
              Dstv Cable Subscription
            </h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            {items.map((item, i) => (
              <div key={i} className="relative">
                <label
                  htmlFor="name"
                  className="font-roboto-slab leading-[0.8125rem]"
                >
                  {item.name}
                </label>
                <input
                  type="text"
                  id="name"
                  value={item.contents}
                  className="text-[#252B33] text-[0.9375rem] tracking-[0.01338rem] flex items-center px-4 focus:ring-0 w-full md:w-[22.8125rem] h-[3.1875rem] rounded-[0.25rem] border border-[#CDCDCD] mt-1"
                />

                <span className="text-[#8C8C8C] absolute top-[43px] right-[15px]">
                  {item.icon}
                </span>
              </div>
            ))}
            <button className="w-full block md:w-[22.8125rem] h-[3.1875rem] bg-[#1AA7E8] text-[0.9375rem] text-center font-roboto-slab">
              PROCEED
            </button>

            <button className="w-full block md:w-[22.8125rem] h-[3.1875rem] bg-white border border-[#1AA7E8] text-[#1AA7E8] text-[0.9375rem] text-center font-roboto-slab">
              BACK TO PACKAGES
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Integration;
