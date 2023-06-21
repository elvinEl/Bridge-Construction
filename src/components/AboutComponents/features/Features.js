import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchFeatures } from "../../../store/features/featuresActions";

function Features() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const featuresRedux = useSelector((state) => state.features.featuresData);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchFeatures({ language }));
  }, [dispatch, i18n.language]);

  return (
    <div className="max-w-[80%] mx-auto text-[#6c757d] mt-20 max-lg:max-w-[90%] max-md:max-w-[95%]">
      <p className="text-[1.25rem]">{t("Xüsusiyyətlərimiz")}</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 max-md:text-[1.8rem]">
     {t("Bizi unikal edən nədir?")}
      </p>
      <div
        className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 "
        data-aos="fade-right"
      >
        {Object.keys(featuresRedux).map((key) => (
          <div className={`about/${featuresRedux[key].general_key}`}>
            <div className="col-span-1">
              <p className=" text-black text-[17px] font-bold mb-2">
                {featuresRedux[key].title}
              </p>
              <p className="line-clamp-4" dangerouslySetInnerHTML={{ __html: featuresRedux[key].description}}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
