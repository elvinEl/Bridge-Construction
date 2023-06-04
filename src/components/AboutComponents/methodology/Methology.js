import React, { useEffect, useState } from "react";
import methologyData from "../../../data/methology.json";
import MethologyItem from "./MethologyItem";

function Methology() {
  const [methologys, setMethologys] = useState([]);
  useEffect(() => {
    setMethologys(methologyData);
  });
  return (
    <div className="max-w-[80%] mx-auto text-[#6c757d] mt-20">
      <p className="text-[1.25rem]">How We Work?</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 ">Our Methodology!</p>
      <div className="grid grid-cols-3 gap-4" data-aos="fade-right">
        {methologys.map((methology) => (
          <MethologyItem methology={methology} key={methology.id} />
        ))}
      </div>
    </div>
  );
}

export default Methology;
