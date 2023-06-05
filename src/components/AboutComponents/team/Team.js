import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import teamData from "../../../data/team.json";
import TeamItem from "./TeamItem";

function Team() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    setTeams(teamData);
  });
  return (
    <div className="max-w-[80%] mx-auto mt-20 text-[#6c757d]">
      <div className="flex justify-center items-center flex-col">
        <p className="text-[1.25rem]">Our Team</p>
        <p className="text-black font-bold text-[2.5rem] mb-8 ">
          Our genius experts!
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {teams.map((team) => (
          <TeamItem team={team} key={team.id} />
        ))}
      </div>
    </div>
  );
}

export default Team;
