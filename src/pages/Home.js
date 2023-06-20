import React from "react";
import AboutHome from "../components/about/AboutHome";
import Certifcate from "../components/certifcates/Certifcate";
import HeroSection from "../components/helper/HeroSection";
import ServicesHome from "../components/services/ServicesHome";
import Partners from "../components/partners/Partners";
import CommentsApi from "../components/comments/CommentsApi";
import Modal from "../components/Modal";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t("Ana Səhifə")}</title>
      </Helmet>
      <HeroSection />
      <AboutHome />
      <ServicesHome />
      <CommentsApi />
      <Certifcate />
      <Partners />
      <Modal />
    </div>
  );
}

export default Home;
