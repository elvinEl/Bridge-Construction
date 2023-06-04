import React from "react";

function FeaturesItem({ feature }) {
  return (
    <div className="col-span-1">
      <p className=" text-black text-[17px] font-bold mb-2">{feature.title}</p>
      <p>{feature.description}</p>
    </div>
  );
}

export default FeaturesItem;
