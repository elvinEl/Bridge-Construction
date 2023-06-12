import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchServices } from "../../store/services/serviceActions";

function ServicesComponent() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const servicesRedux = useSelector((state) => state.service.serviceData);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchServices({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="max-w-[80%] mx-auto  mt-20 max-md:max-w-[95%]">
      <p className="text-[1.25rem] text-[#6c757d]">What we offer!</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 ">Our Services</p>
      <div
        className="grid grid-cols-3 gap-4 max-md:grid-cols-1"
        data-aos="fade-right"
      >
        {Object.keys(servicesRedux).map((key) => (
          <Link to={`${servicesRedux[key].general_key}`}>
            <img src={servicesRedux[key].image} alt="" />
            <p className="font-bold text-black text-[17px] mb-2 line-clamp-3">
              {servicesRedux[key].title}
            </p>
            <p
              className="text-[#6c757d] line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: servicesRedux[key].description,
              }}
            ></p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServicesComponent;
