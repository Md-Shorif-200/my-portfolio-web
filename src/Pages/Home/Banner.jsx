import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import bg_img_1 from '../../assets/images/bg-img/pexels-leonardo-vazquez-1427877-3591570.jpg'
import bg_img_2 from '../../assets/images/bg-img/IMG_1203-removebg-preview.png'
import shape_1 from '../../assets/images/bg-img/shape1.png'
import shape_2 from '../../assets/images/bg-img/shape2.png'
import shape_3 from '../../assets/images/bg-img/Shape3.png'
import shape_4 from '../../assets/images/bg-img/shape4.png'
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion'


const Banner = () => {
         return (
              <div className=' banner w-full min-h-screen px-2 sm:px-6 md:px-10 lg:px-16 pt-24 primary_bg_color  flex flex-col md:flex-row justify-between items-center gap-x-6 '>
                       <div className="banner_cnt w-full md:w-[60%]" data-aos='fade-right'>
                              <h3 className='text-xs sm:text-sm md:text-base accent_color uppercase tracking-[10px]'>hellow i'am </h3>
                              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize font-bold text-white my-4'>md <span className='primary_color'>shorif uddin</span> </h1>
                              <h2 className='text-base sm:text-xl md:text-2xl lg:text-3xl capitalize font-semibold text-white '>a junior
                                        <span className=' ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
                                        <Typewriter
          words={['Web developer']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={40}
          deleteSpeed={40}
          delaySpeed={800}
        />
                                        </span>
                              
                                   
                            </h2>

                              <div className="cv">
                                    <button className="secondary_btn mt-8">download cv</button>
                              </div>

                              <div className="social_links">
                              <h3 className=' text-xs sm:text-sm md:text-base accent_color uppercase mt-10 mb-6  tracking-[3px] '>find with me </h3>
                                 
                                 <div className="social_icons">
                                     <ul className='flex gap-x-3 sm:gap-x-4 md:gap-x-6'>
                                          <li className=''><a href="" className=' '>    <FaFacebook></FaFacebook>  </a></li>
                                          <li className=''><a href="" className=' '>   <FaLinkedin></FaLinkedin>  </a></li>
                                          <li className=''><a href="" className=' '>  <FaGithub></FaGithub>   </a></li>
                                          <li className=''><a href="" className=' '>     <FaInstagram></FaInstagram> </a></li>
                                     </ul>
                                 </div>

                              </div>
                             
                       </div>
                       <div className="banner_img w-full md:w-[40%]  relative">
                              <div className="shape w-full sm:w-[90%] h-[70%]   secondary_bg_color absolute bottom-0 sm:right-0 z-10"></div>
                                <img src={bg_img_2} alt="" className='z-20 relative' />
                       </div>
              </div>
         )
};

export default Banner;




//     return (
//            <div className="w-full min-h-screen  pl-6 sm:pl-10 lg:pl-16 pr-2 sm:pr-4 md:pr-8 
        
//            text-white" style={{backgroundImage : `url(${bg_img_1})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize : "cover"}}
//            >
//                     <div className='w-full  min-h-screen  md:flex justify-between items-center pt-16' >
                        
//             <div className="bg_cnt w-full md:w-[40%] text-center md:text-start" data-aos='fade-right'>
//                   <h3 className='text-lg lg:text-xl uppercase primary_color font-semibold mt-10 tracking-[10px]'>hellow  i'm </h3>
//                   <h1 className='text-5xl sm:text-6xl md:text-7xl text-white font-bold my-6 md:my-8'>  Shorif <br /> Uddin</h1>
//                   <h2 className='text-xl lg:text-2xl capitalize mb-6 font-semibold'>a junior <span className='primary_color  text-2xl lg:text-4xl'>
//                   <Typewriter
//           words={['Web developer']}
//           loop={true}
//           cursor
//           cursorStyle="_"
//           typeSpeed={120}
//           deleteSpeed={90}
//           delaySpeed={1000}
//         />
//                      </span></h2>
//                   <button className='primary_btn'> download cv</button>
//             </div>

//             <div className="bg_img w-full md:w-[50%] md:min-h-screen  flex justify-center items-start md:items-center relative z-0">
//                     <div className="w-[2%] md:w-0"></div>
//                     <motion.div
//   className=" w-[60vw] h-[60vw] sm:w-[60vw] sm:h-[60vw] md:w-[30vw] md:h-[30vw] 
//              rounded-full bg-[#ffffff10] absolute    top-1/4 md:top-1/2 lg:top-1/4  md:-translate-y-1/2 lg:-translate-y-0 left-1/2
//     -translate-x-1/2 z-10"
//   animate={{ scale: [1, 1.1, 1] }}
//   transition={{ duration: 7, repeat: Infinity, repeatType: 'loop', ease: 'easeOut' }}
// ></motion.div>


//                    <img src={bg_img_2} alt="" className='w-[100%]  z-20   ' />

//                    <img src={shape_1} alt="" className='w-[50px] hidden md:block absolute right-0 top-16' />
//                    <img src={shape_2} alt="" className='w-[50px] hidden md:block absolute bottom-20 right-0' />
//                    <img src={shape_4} alt="" className='w-[50px] hidden md:block absolute top-16 left-0' />
                  
            

//             </div>
//                    <div className="social_icon w-full md:w-[10%] flex flex-row md:flex-col justify-center items-center md:justify-end gap-x-6 mt-8 md:mt-0">
//                             <div className="facebook w-[50px] h-[50px] flex justify-center items-center rounded-md  mb-8 md:mb-4 lg:mb-8 text-2xl border border-[#80DB66] hover:bg-[#80DB66] transition-all  ">
//                                      <FaFacebook></FaFacebook>
//                             </div>
//                             <div className="linkdin w-[50px] h-[50px] flex justify-center items-center rounded-md  mb-8 md:mb-4 lg:mb-8 text-2xl border border-[#80DB66] hover:bg-[#80DB66] transition-all  ">
//                                      <FaLinkedin></FaLinkedin>
//                             </div>
//                             <div className="github w-[50px] h-[50px] flex justify-center items-center rounded-md  mb-8 md:mb-4 lg:mb-8 text-2xl border border-[#80DB66] hover:bg-[#80DB66] transition-all  ">
//                                      <FaGithub></FaGithub>
//                             </div>
//                             <div className="instagram w-[50px] h-[50px] flex justify-center items-center rounded-md  mb-8 md:mb-4 lg:mb-8 text-2xl border border-[#80DB66] hover:bg-[#80DB66] transition-all  ">
//                                      <FaInstagram></FaInstagram>
//                             </div>
//                    </div>
//                     </div>

//            </div>
//     );