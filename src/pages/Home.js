import React from "react";
import AboutHome from "../components/about/AboutHome";
import Certifcate from "../components/certifcates/Certifcate";
import Comments from "../components/comments/Comments";
import ContactHome from "../components/contact/ContactHome";
import HeroSection from "../components/HeroSection";
import ServicesHome from "../components/services/ServicesHome";
import Partners from "../components/partners/Partners";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutHome />
      <ServicesHome />
      <Comments />
      <Certifcate />
      <Partners />
      <ContactHome />
    </div>
  );
}

export default Home;
