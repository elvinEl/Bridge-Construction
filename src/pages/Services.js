import React from "react";
import ServicesComponent from "../components/services/ServicesComponent";
import Fixed from "../components/AboutComponents/fixedContent/Fixed";
import { useTranslation } from "react-i18next";
import Helmet from 'react-helmet'
function Services() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t("Xidmətlər")}</title>
      </Helmet>
      <div className="bg-image-services  min-h-[100vh] bg-cover"></div>
      <div className="max-w-[80%] mx-auto ">
        <div className="quadrangle">
          <div className="quadrangle_text">
            <p className="text-[#db4e28]">{t("Bizim Xidmətlərimiz")} </p>
            <p className="text-[3.5rem] font-bold max-md:text-[3rem]">{t("Ağıllı")} </p>
            <p className="bg-[#db4e28] text-white px-4 py-1 font-bold inline-block text-[3.5rem] max-md:text-[2.5rem]">
              {t("Mühəndislik")}
            </p>
          </div>
        </div>
      </div>
      <ServicesComponent />
      <Fixed />
    </div>
  );
}

export default Services;
