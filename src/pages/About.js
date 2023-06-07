import React from "react";
import Clients from "../components/AboutComponents/clients/Clients";
import Features from "../components/AboutComponents/features/Features";
import Methology from "../components/AboutComponents/methodology/Methology";
import Misson from "../components/AboutComponents/missions/Misson";
import Team from "../components/AboutComponents/team/Team";
import Certifcate from '../components/certifcates/Certifcate'
import Fixed from '../components/AboutComponents/fixedContent/Fixed'

function About() {
  return (
    <div>
      <div className="bg-image-about  min-h-[100vh] bg-cover"></div>
      <div className="quadrangle">
        <div className="elvin ">
          <p className="text-[#ec0e0e]">About Us</p>
          <p className="text-[3.5rem] font-bold">Masonic</p>
          <p className="bg-[#ec0e0e] text-white px-4 py-1 font-bold inline-block text-[3.5rem]">
          Creative Architect
          </p>
        </div>
      </div>
      <Misson />
      <Methology />
      <Features />
      <Clients />
      <Team/>
      <Certifcate/>
      <Fixed/>
    </div>
  );
}

export default About;
