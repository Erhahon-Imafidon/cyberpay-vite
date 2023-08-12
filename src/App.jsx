import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./page/Home";
import Integration from "./page/Integration";
import Pricing from "./page/Pricing";
import Documentation from "./page/Documentation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
