import React, { useEffect, useState } from "react";
import servicesHomeData from "../../data/servicesHome.json";
import ServicesHomeItem from "./ServicesHomeItem";

function ServicesHome() {
  const [servicesHome, setServicesHome] = useState([]);
  useEffect(() => {
    setServicesHome(servicesHomeData);
  });
  return (
    <div className="max-w-[80%] mx-auto text-[#6c757d] mt-20">
      <p className="text-[1.25rem]">What we offer!</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 ">Our Services</p>
     <div className="grid grid-cols-3 gap-4" data-aos="fade-right">
     {servicesHome.map((serviceHome) => (
        <ServicesHomeItem key={servicesHome.id} serviceHome={serviceHome} />
      ))}
     </div>
    </div>
  );
}

export default ServicesHome;
