import React from "react";
import Hero from "../components/Hero";
import Cable from "../components/Cable";
import Merchant from "../components/Merchant";
import Mobile from "../components/Mobile";

const Home = () => {
  return (
    <main className="bg-page-gradient">
      <Hero />
      <Cable />
      <Merchant />
      <Mobile />
    </main>
  );
};

export default Home;
