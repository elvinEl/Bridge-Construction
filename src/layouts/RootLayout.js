import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/helper/Header";
import Footer from "../components/helper/Footer";
function RootLayout() {
  return (
    <div >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
