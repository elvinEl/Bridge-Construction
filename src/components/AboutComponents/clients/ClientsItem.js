import React from "react";

function ClientsItem({ client }) {
  return (
    <div className="col-span-1 ">
      <div>
        <img className="opacity-60 hover:opacity-100 duration-300" src={client.img} alt="" />
      </div>
    </div>
  );
}

export default ClientsItem;
