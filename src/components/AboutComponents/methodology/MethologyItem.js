import React from "react";

function MethologyItem({ methology }) {
  return (
    <div className="col-span-1" >
      <p className="font-bold text-[#EC0E0E] text-[3.5rem]">{methology.number}</p>
      <p className=" text-[#6c757d] text-[1.7rem] mb-2" >{methology.title}</p>
      <p>{methology.description}</p>
    </div>
  );
}

export default MethologyItem;
