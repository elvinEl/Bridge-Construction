import React from "react";
import Features from "../components/AboutComponents/features/Features";
import Methology from "../components/AboutComponents/methodology/Methology";
import Misson from "../components/AboutComponents/missions/Misson";
// import Team from "../components/AboutComponents/team/Team";
// import Certifcate from "../components/certifcates/Certifcate";
import Fixed from "../components/AboutComponents/fixedContent/Fixed";
import Partners from "../components/partners/Partners";
import { useTranslation } from "react-i18next";
import Helmet from "react-helmet";
function About() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t("Haqqımızda")}</title>
      </Helmet>
      <div className="bg-image-about  min-h-[100vh] bg-cover"></div>
      <div className="quadrangle">
        <div className="quadrangle_text">
          <p className="text-[#db4e28]">{t("Haqqımızda")}</p>
          <p className="text-[3.5rem] font-bold  max-md:text-[3rem]">
            {t("Yaradıcı")}{" "}
          </p>
          <p className="bg-[#db4e28] text-white px-4 py-1 font-bold inline-block text-[2.5rem] max-md:text-[2.5rem]">
            {t("Memarlıq")}
          </p>
        </div>
      </div>
      <Misson />
      <Methology />
      <Features />
      <Partners />
      {/* <Team /> */}
      {/* <Certifcate /> */}
      <Fixed />
    </div>
  );
}

export default About;
