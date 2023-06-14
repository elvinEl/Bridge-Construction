import React, { useEffect, useState } from "react";
import featuresData from "../../../data/features.json";
import FeaturesItem from "./FeaturesItem";
function Features() {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    setFeatures(featuresData);
  });
  return (
    <div className="max-w-[80%] mx-auto text-[#6c757d] mt-20 max-lg:max-w-[90%] max-md:max-w-[95%]">
        <p className="text-[1.25rem]">Our Features</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 ">What makes us unique?</p>
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 " data-aos="fade-right">
    {features.map((feature)=>(
      <FeaturesItem feature={feature} key={feature.id}/>
    ))}
      </div>
    
    </div>
  );
}

export default Features;
