import React, { useEffect, useState } from "react";
import aboutData from "../../data/abouthome.json";
import AboutHomeItem from "./AboutHomeItem";

function AboutHome() {
  const [aboutsHome, setAboutsHome] = useState([]);
  useEffect(() => {
    setAboutsHome(aboutData);
  });
  return (
    <div className=" max-w-[80%] mx-auto max-md:max-w-[95%]">
    <div className="mt-12 ">
      {aboutsHome.map((aboutHome) => (
        <AboutHomeItem aboutHome={aboutHome} key={aboutHome.id} />
      ))}
    </div>
    <div className="flex justify-end mt-8">
        <button className="text-white bg-[#343a40] hover:bg-[#23272b] text-[14px] duration-300 px-4 py-1">
          Bütün Lahiyələri Gör
        </button>
      </div>

    </div>
  );
}

export default AboutHome;
