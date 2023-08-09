import React from "react";
import DSTV from "../assets/dstv-logo.png";
import GOTV from "../assets/gotv.png";
import STAR from "../assets/startimes-logo.png";
import IROKO from "../assets/iroko.png";
import DAAR from "../assets/daar.png";
import ACTV from "../assets/actv.png";

const Cable = () => {
  const Products = [
    {
      id: 1,
      icon: DSTV,
      name: "Dstv",
      color: "#FF565E",
      description: "DSTV LOGO",
    },

    {
      id: 2,
      icon: GOTV,
      name: "Gotv",
      color: "#FFC542",
      description: "GOTV LOGO",
    },

    {
      id: 3,
      icon: STAR,
      color: "#FF974A",
    },

    {
      id: 4,
      icon: IROKO,
      color: "#3DD598",
    },

    {
      id: 5,
      icon: DAAR,
      color: "#0062FF",
    },

    {
      id: 6,
      icon: ACTV,
      color: "#0EA2D7",
    },
  ];
  return (
    <section className="container p-4 ">
      <ul className="flex flex-wrap justify-center lg:justify-start xl:justify-evenly items-center w-full gap-8">
        {Products.map((item) => {
          const { id, name, icon, color, description } = item;
          return (
            <li
              key={id}
              className={`w-[11.875rem] h-[10.8125rem] rounded-[0.1875rem] flex flex-col justify-center items-center p-4`}
              style={{ background: color }}
            >
              <div className="bg-white w-24 h-24 rounded-full flex flex-col justify-center items-center">
                <img src={icon} alt={description} />
              </div>
              <p className="mt-1 text-white text-xl font-roboto-slab">{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Cable;
