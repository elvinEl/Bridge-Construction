import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/helper/Header";
import Footer from "../components/helper/Footer";
import ScrollTop from "../components/scrollTop/ScrollTop";
import ScrollTopFiexed from "../components/fixedButtons/ScrollTopFixed";
function RootLayout() {
  return (
    <div>
      <Header />
      <ScrollTop />
      <main>
        <Outlet />
        <ScrollTopFiexed />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
