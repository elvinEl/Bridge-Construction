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
    <div>
      {Object.keys(servicesRedux).map((key) => (
        <Link to={`services/${servicesRedux[key].general_key}`}>
          <p className="font-bold text-black text-[17px] mb-2">
            {servicesRedux[key].title}
          </p>
          <p
            className="text-[#6c757d]"
            dangerouslySetInnerHTML={{ __html: servicesRedux[key].description }}
          ></p>
        </Link>
      ))}
    </div>
  );
}

export default ServicesComponent;
