import React from "react";
import Verve from "../assets/verve.png";
import Visa from "../assets/visa.png";
import Mastercard from "../assets/Mastercard.png";

const Pricing = () => {
  const items = [
    {
      id: 1,
      name: "Order Summary",
    },

    {
      id: 2,
      name: "Subtotal",
      description: "NGN 6,200.00",
    },

    {
      id: 3,
      name: "Pakage Details",
      description: "Asia (Dstv Cable ",
      describe: "Subscription)",
    },

    {
      id: 4,
      name: "Total (NGN)",
      description: "NGN 6,200.00",
    },
  ];

  return (
    <section className="container px-4">
      <div className="w-full h-screen flex pt-24 justify-center">
        <div className="flex flex-col space-y-6 w-full md:w-[21.625rem]">
          <ul className="w-full divide-y divide-[#979797] bg-white rounded-[0.25rem]">
            {items.map((item) => (
              <li
                className={`flex items-center justify-between px-4 font-roboto text-[#3C4257] text-[0.9375rem] first:text-lg first:text-[#31414B]/[0.82] last:text-[1.1875rem] last:text-[#3C4257] ${
                  item.id === items.length
                    ? "h-[4rem]"
                    : item.id === items.length - 1
                    ? "h-[4rem]"
                    : "h-[3.5rem]"
                }`}
                key={item.id}
              >
                <p>{item.name}</p>
                <p className="text-right">
                  {item.description}{" "}
                  <span className="block">{item.describe}</span>
                </p>
              </li>
            ))}
          </ul>

          <button className="bg-[#1AA7E8] w-full h-[3.25rem] text-center font-roboto text-[0.9375rem] text-white">
            Make Payment
          </button>
          <button className="bg-white border border-[#1AA7E8] block w-full h-[3.25rem] text-center font-roboto text-[0.9375rem] text-[#1AA7E8]">
            BACK
          </button>

          <div className="flex justify-center space-x-4">
            <img src={Verve} alt="verve" />
            <img src={Mastercard} alt="mastercard" />
            <img src={Visa} alt="visa" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
