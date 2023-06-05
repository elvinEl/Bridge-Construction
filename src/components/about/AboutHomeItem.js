import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

function AboutHomeItem({ aboutHome }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-12  text-[#6c757d]" >
        <div className="col-span-1" data-aos="fade-right" >
          <p className="text-[1.25rem]">{aboutHome.maintitle}</p>
          <p className="text-black font-bold text-[2.5rem] mb-8 ">
            {aboutHome.title}
          </p>
          <p className="mb-8">{aboutHome.description}</p>
          <p className="gap-4 flex items-center">
            {aboutHome.name} <AiFillCaretRight /> <span>{aboutHome.job}</span>
          </p>
        </div>
        <div className="col-span-1 flex justify-end" >
          <div className="max-w-[80%]" data-aos="fade-left" >
            <img src={aboutHome.img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHomeItem;
