import React, { useEffect} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbout } from "../../../store/about/aboutActions";

function Misson() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const aboutRedux = useSelector((state) => state.about.aboutData);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchAbout({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="mt-12 max-w-[80%] mx-auto max-md:max-w-[95%]">
      {Object.keys(aboutRedux).map((key) => (
        <div className={`about/${aboutRedux[key].general_key}`}>
          <div className="grid grid-cols-2 gap-12  text-[#6c757d] max-md:grid-cols-1">
            <div className="col-span-1" data-aos="fade-right">
              <p className="text-[1.25rem]">About Us</p>
              <p className="text-black font-bold text-[2.5rem] mb-8 ">
                {aboutRedux[key].title}
              </p>
              <p
                className="mb-8"
                dangerouslySetInnerHTML={{
                  __html:
                    aboutRedux[key].description && aboutRedux[key].description,
                }}
              ></p>
            </div>
            <div className="col-span-1 flex justify-end max-md:block">
              <div
                className="max-w-[80%] max-lg:max-w-full"
                data-aos="fade-left"
              >
                <img src={aboutRedux[key].image} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Misson;
