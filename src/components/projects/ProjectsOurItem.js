import React from "react";

function ProjectsOurItem({ projectOur }) {
  return (
    <div className="col-span-1" >
        <p>{projectOur.title}</p>
      <img src={projectOur.img} alt="" />
    </div>
  );
}

export default ProjectsOurItem;
