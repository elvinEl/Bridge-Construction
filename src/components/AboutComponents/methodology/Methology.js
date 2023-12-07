import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchMethodology } from "../../../store/methology/methodologyActions";

function Methology() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const methodologyRedux = useSelector((state) => state.methodology.methodologyData);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchMethodology({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="max-w-[80%] mx-auto text-[#6c757d] mt-20 max-lg:max-w-[90%] max-md:max-w-[95%]">
      <p className="text-[1.25rem]"> {t("Necə işləyirik?")}</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 max-md:text-[1.8rem]">
       {t("Bizim metodologiyamız!")}
      </p>
      <div
        className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1"
        data-aos="fade-right"
      >
        {Object.keys(methodologyRedux).map((key) => (
          <div key={key} className={`about/${methodologyRedux[key].general_key}`}>
            <div className="col-span-1 " data-aos="fade-up">
              <img src={methodologyRedux[key].image} alt="" />
              <p className=" text-[#6c757d] text-[1.7rem] mb-2 ">
                {methodologyRedux[key].title}
              </p>
              <p  className="line-clamp-4" dangerouslySetInnerHTML={{
                __html: methodologyRedux[key].description,
              }}>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Methology;
