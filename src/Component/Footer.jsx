import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="secondary_bg_color text-[#1F1F39] py-8 px-4 text-center">
          <hr className="text-black pb-10" />
      {/* Top text */}
      <h2 className="text-xl font-semibold mb-3 primary_color">
        LET'S BUILD SOMETHING <br />
        OUT OF THE WORLD <span className="text-lg">😉</span>
      </h2>

      {/* Social Icons */}
   <div className="social_icons">
                                        <ul className='flex gap-x-3 sm:gap-x-4 md:gap-x-6 justify-center my-6'>
                                             <li className='border border-[#FF014F]' data-aos="flip-up"><a href="" className=' '>    <FaFacebook></FaFacebook>  </a></li>
                                             <li className='border border-[#FF014F]' data-aos="flip-up"><a href="" className=' '>   <FaLinkedin></FaLinkedin>  </a></li>
                                             <li className='border border-[#FF014F]' data-aos="flip-up"><a href="" className=' '>  <FaGithub></FaGithub>   </a></li>
                                             <li className='border border-[#FF014F]' data-aos="flip-up"><a href="" className=' '>     <FaInstagram></FaInstagram> </a></li>
                                        </ul>
                                    </div>

      {/* Copyright */}
      <p className="text-sm text-gray-600">
        Copyright © {new Date().getFullYear()} Themeforest. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
