import React from "react";
import AboutHome from "../components/about/AboutHome";
import Certifcate from "../components/certifcates/Certifcate";
import Comments from "../components/comments/Comments";
import ContactHome from "../components/contact/ContactHome";
import HeroSection from "../components/HeroSection";
import Partners from "../components/partners/Partners";
import ServicesHome from "../components/services/ServicesHome";
import Com from '../components/comments/Com'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutHome />
      <Partners/>
      <ServicesHome />
      <Comments />
      <Com/>
      <Certifcate/>
      <ContactHome />
    </div>
  );
}

export default Home;
