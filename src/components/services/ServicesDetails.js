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
  const serviceDetailPartners = serviceDetailRedux.partners;
  console.log(serviceDetailPartners);
  useEffect(() => {
    let dataS =
      serviceR && serviceR.find((item) => item.general_key == general_key);
    const language = i18n.language;
    dispatch(fetchServicesById({ dataS, language }));
  }, [dispatch, i18n.language, general_key]);

  return (
    <div className="pt-20 max-w-[80%] mx-auto">
      <p>{serviceDetailRedux.content && serviceDetailRedux.content.title}</p>
      <p
        dangerouslySetInnerHTML={{
          __html:
            serviceDetailRedux.content &&
            serviceDetailRedux.content.description,
        }}
      ></p>
      <div>
        {Object.keys(serviceDetailPartners).map((key) => (
          <div>
            <p>{serviceDetailPartners[key].name}</p>
            <img src={serviceDetailPartners[key].image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesDetails;
