import React from "react";
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className="max-w-[80%] mx-auto">
        <div>
            <img src="" alt="" />
        </div>
        <div className="gap-x-5 flex">
      <NavLink  className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#ec0e0e] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px]' to="/">Ana Səhifə</NavLink>
      <NavLink  className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#ec0e0e] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px]' to="about">Haqqımızda</NavLink>
      <NavLink  className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#ec0e0e] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px]' to="services">Xidmətlərimiz</NavLink>
      <NavLink  className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#ec0e0e] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px]' to="works">Görülən İşlər</NavLink>
      <NavLink  className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#ec0e0e] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px]' to="contact">Əlaqə</NavLink>
        </div>
    </header>
  );
}

export default Header;
