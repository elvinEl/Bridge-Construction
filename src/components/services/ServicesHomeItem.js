import React from "react";

function ServicesHomeItem({ serviceHome }) {
  return (
    <div className="col-span-1" >
      <p className="font-bold text-black text-[17px] mb-2" >{serviceHome.title}</p>
      <p>{serviceHome.description}</p>
    </div>
  );
}

export default ServicesHomeItem;
