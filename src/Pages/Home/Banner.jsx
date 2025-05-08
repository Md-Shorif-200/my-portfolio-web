import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import bg_img_1 from '../../assets/images/bg-img/pexels-leonardo-vazquez-1427877-3591570.jpg'
import bg_img_2 from '../../assets/images/bg-img/IMG_1203-removebg.png'
import shape_1 from '../../assets/images/bg-img/shape1.png'
import shape_2 from '../../assets/images/bg-img/shape2.png'
import shape_3 from '../../assets/images/bg-img/Shape3.png'
import shape_4 from '../../assets/images/bg-img/shape4.png'
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion'


const Banner = () => {
    return (
           <div className="w-full min-h-screen  pl-6 sm:pl-10 md:pl-16 pr-2 sm:pr-4 md:pr-8 mb-14
        
           text-white" style={{backgroundImage : `url(${bg_img_1})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize : "cover"}}
           >
                    <div className='w-full  min-h-screen  md:flex justify-between items-center pt-16'>
                        
            <div className="bg_cnt w-full md:w-[40%] text-center md:text-start">
                  <h3 className='text-lg md:text-xl uppercase primary_color font-semibold mt-10 tracking-[10px]'>hellow  i'm </h3>
                  <h1 className='text-5xl sm:text-6xl md:text-8xl text-white font-bold my-6 md:my-8'>  Shorif <br /> Uddin</h1>
                  <h2 className='text-xl md:text-2xl capitalize mb-6 font-semibold'>a junior <span className='primary_color  text-2xl md:text-4xl'>
                  <Typewriter
          words={['Web developer']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={120}
          deleteSpeed={90}
          delaySpeed={1000}
        />
                     </span></h2>
                  <button className='btn'> download cv</button>
            </div>

            <div className="bg_img w-full md:w-[50%] min-h-screen  flex justify-center items-center relative">
                    <div className="w-[2%]"></div>
                  <motion.div className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[430px] lg:h-[430px] rounded-full bg-[#ffffff10] absolute bottom-10 right-4 sm:right-8 md:right-24 z-10' animate = {{scale : [1,1.1,1]}} transition={{duration : 7,repeat : Infinity,repeatType : 'loop',ease : 'easeOut'}}></motion.div>

                   <img src={bg_img_2} alt="" className='w-[100%]  z-20  ' />

                   <img src={shape_1} alt="" className='w-[50px] hidden md:block absolute right-0 top-16' />
                   <img src={shape_2} alt="" className='w-[50px] hidden md:block absolute bottom-20 right-0' />
                   <img src={shape_4} alt="" className='w-[50px] hidden md:block absolute top-16 left-0' />
                  
            

            </div>
                   <div className="social_icon w-full md:w-[10%] grid justify-end">
                            <div className="facebook w-[50px] h-[50px] flex justify-center items-center rounded-md  mb-8 text-2xl border border-[#80DB66] hover:bg-[#80DB66] transition-all  ">
                                     <FaFacebook></FaFacebook>
                            </div>
                            <div className="linkdin w-[50px] h-[50px] flex justify-center items-center rounded-md  mb-8 text-2xl border border-[#80DB66] hover:bg-[#80DB66] transition-all  ">
                                     <FaLinkedin></FaLinkedin>
                            </div>
                            <div className="github w-[50px] h-[50px] flex justify-center items-center rounded-md  mb-8 text-2xl border border-[#80DB66] hover:bg-[#80DB66] transition-all  ">
                                     <FaGithub></FaGithub>
                            </div>
                            <div className="instagram w-[50px] h-[50px] flex justify-center items-center rounded-md  mb-8 text-2xl border border-[#80DB66] hover:bg-[#80DB66] transition-all  ">
                                     <FaInstagram></FaInstagram>
                            </div>
                   </div>
                    </div>

           </div>
    );
};

export default Banner;



