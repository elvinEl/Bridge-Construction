import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchProjects } from "../../store/projects/projectsActions";

function ProjectsHome() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [sliceElement] = useState(3);
  const projectRedux = useSelector((state) => state.project.projectData);
  console.log(projectRedux);
  // const slice = projectRedux.slice(0, sliceElement);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchProjects({ language }));
  }, [dispatch, i18n.language]);

  return (
    <div className=" max-w-[80%] mx-auto max-md:max-w-[95%]">
      <p className="text-[1.25rem] text-[#6c757d]">What we've done!</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 ">Our Projects</p>
      <div
        className="grid grid-cols-3 gap-8 max-md:grid-cols-1"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="700"
      >
        {/* {Object.keys(slice).map((item) => (
          <Link to={`projects${projectRedux[item].general_key}`}></Link>
        ))} */}
      </div>
      <div className="flex justify-end mt-8">
        <button className="text-white bg-[#343a40] hover:bg-[#23272b] text-[14px] duration-300 px-4 py-1 max-md:px-1 max-md:py-[0.5rem]">
          Bütün Xidmətləri Gör
        </button>
      </div>
    </div>
  );
}

export default ProjectsHome;
