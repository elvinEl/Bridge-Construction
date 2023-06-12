import React from "react";

function ContactInformationItem({ information }) {
  return (
    <div className="col-span-1 mt-4">
      <p className="text-[17px] font-bold text-black mb-2 max-md:mb-0">{information.title}</p>
      <p>{information.description}</p>
    </div>
  );
}

export default ContactInformationItem;
