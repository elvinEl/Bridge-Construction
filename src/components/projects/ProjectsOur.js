import React, { useEffect, useState } from "react";
import projectsourData from "../../data/projectsOur.json";
import ProjectsOurItem from "./ProjectsOurItem";

function ProjectsOur() {
  const [projectsOur, setProjectsOur] = useState([]);
  useEffect(() => {
    setProjectsOur(projectsourData);
  });

  return (
    <div className=" max-w-[80%] mx-auto">
      <div className="grid grid-cols-3 gap-8" data-aos="fade-up"  data-aos-easing="linear"
     data-aos-duration="700">
        {projectsOur.map((projectOur) => (
          <ProjectsOurItem key={projectOur.id} projectOur={projectOur} />
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <button className="text-white bg-[#343a40] hover:bg-[#23272b] text-[14px] duration-300 px-4 py-1">
          Bütün Xidmətləri Gör
        </button>
      </div>
    </div>
  );
}

export default ProjectsOur;
