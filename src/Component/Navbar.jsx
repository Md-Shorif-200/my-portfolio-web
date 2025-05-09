import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

      const links = <>
                <li> <NavLink>home</NavLink> </li>
                <li> <NavLink>about me</NavLink> </li>
                <li> <NavLink>skills</NavLink> </li>
                <li> <NavLink>projects</NavLink> </li>
      </>

      const [scrolld,setScrolld] = useState(false)

        useEffect(() => {

          const handleScroll = () => {
             setScrolld(window.scrollY > 50);
          }

           window.addEventListener('scroll',handleScroll);

          //  clean up function
           return () => window.removeEventListener('scroll',handleScroll)
        } , [])




    return (

          <div className={`navbar fixed top-0 w-full z-20 transition-all duration-300 text-white  capitalize   px-2 sm:px-6 md:px-8 lg:px-16
          
          ${scrolld  ? 

          ' bg-[#25262f]  ' 
          :
           ''
            }`}>

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                
                  {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl  primary_color">SHORIF  </a>
        </div>
        <div className="navbar-center  gap-x-16">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
              {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>

        </div>
      </div>

    );
};

export default Navbar;