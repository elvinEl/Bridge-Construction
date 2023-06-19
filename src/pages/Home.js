import React from "react";
import AboutHome from "../components/about/AboutHome";
import Certifcate from "../components/certifcates/Certifcate";
import HeroSection from "../components/HeroSection";
import ServicesHome from "../components/services/ServicesHome";
import Partners from "../components/partners/Partners";
import CommentsApi from "../components/comments/CommentsApi";
import Modal from "../components/Modal";
function Home() {
  return (
    <div>
      <HeroSection />
      <AboutHome />
      <ServicesHome />
      <CommentsApi />
      <Certifcate />
      <Partners />
      <Modal/>
    </div>
  );
}

export default Home;
