import React from "react";
import ServicesComponent from "../components/services/ServicesComponent";
import Fixed from "../components/AboutComponents/fixedContent/Fixed";
import { useTranslation } from "react-i18next";
function Services() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-image-services  min-h-[100vh] bg-cover"></div>
      <div className="max-w-[80%] mx-auto ">
        <div className="quadrangle">
          <div className="elvin ">
            <p className="text-[#ec0e0e]">{t("Bizim Xidmətlərimiz")} </p>
            <p className="text-[3.5rem] font-bold max-md:text-[3rem]">{t("Ağıllı")} </p>
            <p className="bg-[#ec0e0e] text-white px-4 py-1 font-bold inline-block text-[3.5rem] max-md:text-[2.5rem]">
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
