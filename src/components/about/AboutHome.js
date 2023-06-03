import React, { useEffect, useState } from "react";
import aboutData from "../../data/abouthome.json";
import AboutHomeItem from "./AboutHomeItem";

function AboutHome() {
  const [aboutsHome, setAboutsHome] = useState([]);
  useEffect(() => {
    setAboutsHome(aboutData);
  });
  return (
    <div className="mt-12">
      {aboutsHome.map((aboutHome) => (
        <AboutHomeItem aboutHome={aboutHome} key={aboutHome.id} />
      ))}
    </div>
  );
}

export default AboutHome;
