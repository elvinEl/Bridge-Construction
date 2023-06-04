import React, { useEffect, useState } from "react";
import missonData from "../../../data/misson.json";
import MissonItem from "./MissonItem";

function Misson() {
  const [missions, setMissons] = useState([]);
  useEffect(() => {
    setMissons(missonData);
  });
  return (
    <div className="mt-12">
      {missions.map((mission) => (
        <MissonItem mission={mission} key={mission.id} />
      ))}
    </div>
  );
}

export default Misson;
