import React from 'react';
import { FaGraduationCap } from "react-icons/fa6";
import img from '../../assets/images/Education/education-img.jpg'


const Education = () => {
    return (
        <div className='secondary_bg_color grid grid-cols-2  gap-x-6 px-2 sm:px-6 md:px-10 lg:px-16 pb-4 sm:pb-8 md:pb-16'>

            <div className="education_cnt">
            <h1 className='text-4xl capitalize font-semibold my-4 primary_color' data-aos="fade-up">my education</h1>
            <p className='accent_color mt-6 mb-12 capitalize ' data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ullam voluptatem harum dignissimos maiores consectetur. Maiores, fuga qui! Libero, voluptate.</p>

                <div className="study flex gap-x-8 mb-8" data-aos="fade-up" data-aos-delay="200">
                      <div className='w-[70px] h-[70px] text-4xl text-white border border-[#FF014F] hover:bg-[#FF014F] transition-all flex justify-center items-center rounded-lg'>
                                <FaGraduationCap></FaGraduationCap>

                      </div>

                      <div>
                         <h2 className='text-2xl font-semibold capitalize text-white mb-2' >diploma in computer technology</h2>
                         <h2 className='text-2xl font-semibold capitalize text-white mb-2' >chattogram polytechnic institute   <span className='accent_color font-normal'> (2019-2023) </span> </h2>
                      </div>
                </div>

                 <div className="study flex gap-x-8 " data-aos="fade-up"  data-aos-delay="300">
                      <div className='w-[70px] h-[70px] text-4xl text-white border border-[#FF014F] hover:bg-[#FF014F] transition-all flex justify-center items-center rounded-lg'>
                                <FaGraduationCap></FaGraduationCap>

                      </div>

                      <div>
                         <h2 className='text-2xl font-semibold capitalize text-white mb-2' >secondary school cirtificate <span className='accent_color font-normal uppercase'>(ssc)</span> </h2>
                         <h2 className='text-2xl font-semibold capitalize text-white mb-2' >A M high school   <span className='accent_color font-normal'> (2014-2019) </span> </h2>
                      </div>
                </div>
        
            </div>

            <div className="education_img">
                        <img src={img} alt="" className='w-full h-[400px] object-cover rounded-xl' />
            </div>
            
        </div>
    );
};

export default Education;