import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../store/services/serviceActions";
import { Link,NavLink } from "react-router-dom";

function ServicesHome() {
  const { t, i18n } = useTranslation();
  const [sliceElement] = useState(3);
  const dispatch = useDispatch();
  const servicesRedux = useSelector((state) => state.service.serviceData);
  const slice = servicesRedux.slice(0, sliceElement);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchServices({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="max-w-[80%] mx-auto  mt-20 max-md:max-w-[95%]">
      <p className="text-[1.25rem] text-[#6c757d] max-md:text-[1.25rem]">{t("Nə təklif edirik!")} </p>
      <p className="text-black font-bold text-[2.5rem] mb-8 max-md:text-[1.8rem]">{t("Xidmətlərimiz")}</p>
      <div
        className="grid grid-cols-3 gap-4 max-md:grid-cols-1"
        data-aos="fade-right"
      >
        {Object.keys(slice).map((key) => (
          <Link to={`services/${servicesRedux[key].general_key}`}>
            <img src={servicesRedux[key].image} alt="" />
            <p className="font-bold text-black text-[17px] mb-2 max-md:text-[16px]">{servicesRedux[key].title}</p>
            <p className="text-[#6c757d] line-clamp-3 max-md:text-[15px]" dangerouslySetInnerHTML={{__html:servicesRedux[key].description}}></p>
          </Link>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <NavLink to='/services' className="text-white bg-[#343a40] hover:bg-[#23272b] text-[14px] duration-300 px-4 py-1 max-md:px-1 max-md:py-[0.5rem]">{t("Daha Ətraflı")} </NavLink>
      </div>
    </div>
  );
}

export default ServicesHome;
