import React from "react";

function ProjectsHomeItem({ projectHome }) {
  return (
    <div className="max-w-[80%] mx-auto text-[#6c757d]">
      <p className="text-[1.25rem]">{projectHome.maintitle}</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 ">
        {projectHome.title}
      </p>
    </div>
  );
}

export default ProjectsHomeItem;
