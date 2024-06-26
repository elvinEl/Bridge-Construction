import React from "react";
import ScrollToTop from "react-scroll-to-top";
import '../../styles/fixedButtons.css'

function ScrollTopFiexed() {
  return (
    <>
      <div className="fixed z-50">
        <ScrollToTop color="white" className="max-md:w-[45px]  max-md:h-[45px]" smooth />
      </div>
    </>
  );
}

export default ScrollTopFiexed;
