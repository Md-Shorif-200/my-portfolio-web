import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';



const Navbar = () => {

const navItems = [
  { to: 'home', label: 'Home', spy: false },
  { to: 'about', label: 'About Me', spy: true },
  { to: 'skills', label: 'Skills', spy: true },
  { to: 'projects', label: 'Projects', spy: true },
  { to: 'contact', label: 'Contact', spy: true },
];

const links = (
  <>
    {navItems.map((item, index) => (
      <li
        key={index}
        className="transition duration-300 hover:scale-105 hover:text-[#F05454]"
      >
        <Link
          to={item.to}
          smooth={true}
          offset={-80}
          duration={700}
          spy={item.spy} // ✅ home এর জন্য spy: false
          activeClass={
            item.spy
              ? 'text-[#F05454] font-bold border-b-2 border-[#F05454]'
              : ''
          }
          className="cursor-pointer px-2 py-1 transition-all duration-300"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </>
);



  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Handle navbar scroll shadow/background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div
      className={`navbar fixed top-0 w-full z-50 transition-all duration-300 capitalize text-white px-2 sm:px-6 md:px-8 lg:px-16
        ${scrolled ? 'bg-[#25262f]' : ''}`}

      
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl primary_color">SHORIF</a>
      </div>

      <div className="navbar-center gap-x-16">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        {/* 🌙 Dark Mode Toggle */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={() => setIsDark(!isDark)}
            checked={isDark}
          />
          {/* light icon */}
          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M5.64 17.66A9 9 0 0012 21a9 9 0 000-18 9 9 0 00-6.36 15.66z" />
          </svg>
          {/* dark icon */}
          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M21.64 13.65a1 1 0 00-1.14-.49 7 7 0 01-8.65-8.65 1 1 0 00-.49-1.14 1 1 0 00-1.11.21 9 9 0 1011.18 11.18 1 1 0 00.21-1.11z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
