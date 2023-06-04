import React from "react";

function MissonItem({ mission }) {
  return (
    <>
      <div className="grid grid-cols-2 max-w-[80%] gap-12 mx-auto text-[#6c757d]" >
        <div className="col-span-1" data-aos="fade-right" >
          <p className="text-[1.25rem]">{mission.maintitle}</p>
          <p className="text-black font-bold text-[2.5rem] mb-8 ">
            {mission.title}
          </p>
          <p className="mb-8">{mission.description}</p>
          
        </div>
        <div className="col-span-1 flex justify-end" >
          <div className="max-w-full" data-aos="fade-left" >
            <img src={mission.img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MissonItem;
