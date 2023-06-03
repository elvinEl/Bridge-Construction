import React, { useEffect, useState } from "react";
import projectsData from "../../data/projectshome.json";
import ProjectsHomeItem from "./ProjectsHomeItem";

function ProjectsHome() {
  const [projectsHome, setProjectsHome] = useState([]);
  useEffect(() => {
    setProjectsHome(projectsData);
  });
  return (
    <div>
      {projectsHome.map((projectHome) => (
        <ProjectsHomeItem key={projectHome.id} projectHome={projectHome} />
      ))}
    </div>
  );
}

export default ProjectsHome;
