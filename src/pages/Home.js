import React from "react";
import AboutHome from "../components/about/AboutHome";
import Certifcate from "../components/certifcates/Certifcate";
import ContactHome from "../components/contact/ContactHome";
import HeroSection from "../components/HeroSection";
import ServicesHome from "../components/services/ServicesHome";
import Partners from "../components/partners/Partners";
import CommentsApi from '../components/comments/CommentsApi'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutHome />
      <ServicesHome />
      <CommentsApi/>
      <Certifcate />
      <Partners />
      <ContactHome />
    </div>
  );
}

export default Home;
