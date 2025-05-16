import React from 'react';

import img from '../../assets/images/bg-img/IMG_1203-removebg-preview.png'

const About = () => {
    return (
        <div className='secondary_bg_color  lg:grid items-end grid-cols-2 gap-x-6 px-2 sm:px-6 md:px-8 lg:px-16 py-20' id='about'>

             <div className="about_img w-full   relative flex justify-center" >
                                         <div className="shape w-[80%] mx-autom sm:mx-0 sm:w-[90%] md:w-[80%] lg:w-[75%] h-[70%]    absolute bottom-0 right-10 z-10" data-aos="fade-right"></div>

                                           <div className="shape_2 w-[80px] h-[80px]  md:w-[100px] md:h-[100px] absolute bg-[#FF014F] top-2/5 left-0 xl:left-1/12 z-40" data-aos="fade-right" data-aos-delay="500">
                                              
                                           </div>

                                           <div className="shape_3 w-[100px] h-[100px] md:w-[150px] md:h-[150px]  border-3 border-[#FF014F] absolute right-0 top-1/4 z-0" data-aos="fade-right" data-aos-delay="400">

                                           </div>

                                           <div className="shape_4 w-[30px] h-[50px] md:w-[50px] md:h-[80px] absolute bg-[#FF014F] right-1/6 -bottom-1/12 z-40" >
                                              
                                           </div>

                                           <img src={img} alt="" className=' w-[80%] z-20 relative ' data-aos="fade-right" />
                                  </div>

            <div className="about_cnt px-2 sm:px-4  md:px-6 lg:px-8">
                 <h2 className='text-2xl text-white uppercase primary_color font-semibold tracking-[7px] mt-16'>about me</h2>
                 <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold capitalize my-6 text-white'>i develop system that works </h1>
                 <p className='accent_color capitalize text-base sm:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit enim nisi sapiente dignissimos modi facere dolorum nostrum quae commodi pariatur!</p>
                
                <hr className='text-gray-500 my-8' />

                  <div className='accent_color capitalize sm:text-lg md:text-xl'>
                       <div className="name mb-2 sm:mb-4">
                             <ul className='grid grid-cols-2'>
                                <li>name</li>
                                <li>md shorif uddin</li>
                             </ul>
                       </div>

                          <div className="age mb-2 sm:mb-4">
                             <ul className='grid grid-cols-2'>
                                <li>age</li>
                                <li>22 years </li>
                             </ul>
                       </div>


                          <div className="phone mb-2 sm:mb-4">
                             <ul className='grid grid-cols-2'>
                                <li>phone</li>
                                <li>01972144240</li>
                             </ul>
                       </div>


                          {/* <div className="email mb-2 sm:mb-4">
                             <ul className='grid grid-cols-2'>
                                <li>email</li>
                                <li className='lowercase'>mdshorifuddin463@gmail.com</li>
                             </ul>
                       </div> */}

                       <div className="Nationality mb-2 sm:mb-4">
                             <ul className='grid grid-cols-2'>
                                <li>Nationality</li>
                                <li>bangladeshi</li>
                             </ul>
                       </div>





                  </div>

            </div>
        </div>
    );
};

export default About;