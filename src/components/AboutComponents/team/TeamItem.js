import React from "react";

function TeamItem({ team }) {
  return (
    <div className="col-span-1 "  data-aos="fade-up">
      <img src={team.img} alt="" />
      <p className="text-black font-bold mt-3">{team.name}</p>
    </div>
  );
}

export default TeamItem;
