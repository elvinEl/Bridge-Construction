import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";

function Header() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  const clickHandle = (e) => {
    showNavbar(!showNavbar);
  };
  return (
    <header className="relative max-w-[80%] mx-auto z-50">
      <div className="pt-2 absolute">
        <div className="container1">
        <div>
          <img src="" alt="" />
        </div>
        <nav ref={navRef} className="gap-x-5 flex">
          <NavLink
            onClick={clickHandle}
            className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#ec0e0e] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px] max-md:hover:text-white'
            to="/"
          >
            Ana Səhifə
          </NavLink>
          <NavLink
            onClick={clickHandle}
            className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#ec0e0e] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px] max-md:hover:text-white'
            to="about"
          >
            Haqqımızda
          </NavLink>
          <NavLink
            onClick={clickHandle}
            className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#ec0e0e] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px] max-md:hover:text-white'
            to="services"
          >
            Xidmətlərimiz
          </NavLink>
          <NavLink
            onClick={clickHandle}
            className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#ec0e0e] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px] max-md:hover:text-white'
            to="contact"
          >
            Əlaqə
          </NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        </div>
       
      </div>
    </header>
  );
}

export default Header;
