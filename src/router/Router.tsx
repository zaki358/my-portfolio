import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../components/pages/Abou.";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Header } from "../components/templates/Header";
import { Portfolio } from "../components/pages/Portfolio";
import { Skill } from "../components/pages/Skill";

export const Router: React.FC = memo(() => {
  return (
    <Routes>
      {/* <Route path="/" element={<Header />}> */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      {/* </Route> */}
    </Routes>
  );
});
