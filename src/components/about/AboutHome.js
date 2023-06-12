import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAbout } from "../../store/about/aboutActions";
function AboutHome() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const aboutRedux = useSelector((state) => state.about.aboutData);
  console.log(aboutRedux);

  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchAbout({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className=" max-w-[80%] mx-auto max-md:max-w-[95%]">
      <div className="mt-12 ">
        {Object.keys(aboutRedux).map((key) => (
          <div className={`about/${aboutRedux[key].general_key}`}>
            <div className="grid grid-cols-2 gap-12  text-[#6c757d] max-md:grid-cols-1">
              <div className="col-span-1" data-aos="fade-right">
                <p className="text-[1.25rem]">About Us</p>
                <p className="text-black font-bold text-[2.5rem] mb-8 ">
                  {aboutRedux[key].home_title}
                </p>
                <p
                  className="mb-8"
                  dangerouslySetInnerHTML={{
                    __html:
                      aboutRedux[key].home_description &&
                      aboutRedux[key].home_description,
                  }}
                ></p>
              </div>
              <div className="col-span-1 flex justify-end max-md:block">
                <div
                  className="max-w-[80%] max-lg:max-w-full"
                  data-aos="fade-left"
                >
                  <img src={aboutRedux[key].home_image} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <NavLink
          to="/about"
          className="text-white bg-[#343a40] hover:bg-[#23272b] text-[14px] duration-300 px-4 py-1"
        >
          Daha Ətraflı
        </NavLink>
      </div>
    </div>
  );
}

export default AboutHome;
