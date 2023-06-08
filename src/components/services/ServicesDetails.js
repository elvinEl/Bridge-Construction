import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchServicesById } from "../../store/services/serviceActions";

function ServicesDetails() {
  const { i18n } = useTranslation();
  const { general_key } = useParams();
  const serviceR = useSelector((state) => state.service.serviceData);
  const dispatch = useDispatch();
  const serviceDetailRedux = useSelector(
    (state) => state.serviceDetail.serviceDataDetail
  );

  useEffect(() => {
    let dataS =
      serviceR && serviceR.find((item) => item.general_key == general_key);
    const language = i18n.language;
    dispatch(fetchServicesById({ dataS, language }));
  }, [dispatch, i18n.language, general_key]);

  return (
    <div>
      <p>{serviceDetailRedux.content && serviceDetailRedux.content.title}</p>
      <p>
        {serviceDetailRedux.content && serviceDetailRedux.content.description}
      </p>
    </div>
  );
}

export default ServicesDetails;
