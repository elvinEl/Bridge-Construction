import React from "react";
import Features from "../components/AboutComponents/features/Features";
import Methology from "../components/AboutComponents/methodology/Methology";
import Misson from "../components/AboutComponents/missions/Misson";

function About() {
  return (
    <div>
      <div className="bg-image-about  min-h-[100vh] bg-cover"></div>
      <div className="quadrangle">
        <div className="elvin ">
          <p className="text-[#ec0e0e]">About Us</p>
          <p className="text-[3.5rem] font-bold">Masonic</p>
          <p className="bg-[#ec0e0e] text-white px-4 py-1 font-bold inline-block text-[3.5rem]">Creative Architect</p>
        </div>
      </div>
      <Misson />
      <Methology />
      <Features />
    </div>
  );
}

export default About;