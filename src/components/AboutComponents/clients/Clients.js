import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import clientsData from "../../../data/clients.json";
import ClientsItem from "./ClientsItem";

function Clients() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    setClients(clientsData);
  });
  return (
    <div className="grid grid-cols-2 max-w-[80%] mx-auto mt-20">
      <div>
        <p className=" text-[1.25rem] text-[#6c757d]">Our Clients</p>
        <p className="text-black font-bold text-[2.5rem] mb-8 ">
          Who we work with?
        </p>
        <p data-aos="fade-right" className="text-[#6c757d]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam
          quis, impedit quaerat aperiam aut culpa laudantium asperiores,
          inventore, suscipit quae repellendus! Illum perspiciatis officia ullam
          voluptate minima fugiat doloremque.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4" data-aos="fade-right">
        {clients.map((client) => (
          <ClientsItem client={client} key={client.id} />
        ))}
      </div>
    </div>
  );
}

export default Clients;
