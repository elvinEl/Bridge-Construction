import React from "react";

function ContactInformationItem({ information }) {
  return (
    <div className="col-span-1">
      <p className="text-[17px] font-bold text-black mb-2">{information.title}</p>
      <p>{information.description}</p>
    </div>
  );
}

export default ContactInformationItem;
