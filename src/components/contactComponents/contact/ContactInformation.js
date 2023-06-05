import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import informationsData from "../../../data/contactinformation.json";
import ContactInformationItem from "./ContactInformationItem";
function ContactInformation() {
  const [informations, setInformations] = useState([]);
  useEffect(() => {
    setInformations(informationsData);
  });
  return (
    <div className="max-w-[80%] mx-auto text-[#6c757d] mt-20">
      <p className="text-[1.25rem]">Stay tuned!</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 ">We are available 24/7!</p>
      <div className="grid grid-cols-3" data-aos="fade-right">
        {informations.map((information) => (
          <ContactInformationItem
            information={information}
            key={information.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactInformation;
