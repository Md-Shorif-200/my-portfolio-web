import React from 'react';
import { motion } from 'framer-motion'

import icon_1 from '../../assets/images/featured/intro-ft-icon1-2 (1).png'
import icon_2 from '../../assets/images/featured/intro-ft-icon2-2.png'
import icon_3 from '../../assets/images/featured/intro-ft-icon3-2.png'
import icon_4 from '../../assets/images/featured/intro-ft-icon4-2.png'

import shape_1 from '../../assets/images/bg-img/shape2.png'

const FeaturedSection = () => {
    return (
        <div className='bg-[#212228] py-28 px-2 sm:px-6 md:px-8 lg:px-16 relative'>
            <div className="featured_cards  text-[#FEFEFE] grid grid-cols-4 gap-6 mt-6">
                  <div className="card self-start" data-aos='fade-up'>
                        <div className="logo">
                              <img src={icon_1} alt="" className='w-[20%]   mt-4 mb-6' />
                        </div>
                        <h3>dedication</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laborum tempore itaque perferendis minus quas!</p>
                  </div>

                  <div className="card self-start mt-20" data-aos='fade-up'>
                        <div className="logo">
                              <img src={icon_2} alt="" className='w-[20%]   mt-4 mb-6' />
                        </div>
                        <h3>smart work</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laborum tempore itaque perferendis minus quas!</p>
                  </div>

                  <div className="card self-start" data-aos='fade-up'>
                        <div className="logo">
                              <img src={icon_3} alt="" className='w-[15%]   mt-4 mb-6' />
                        </div>
                        <h3>collaboration</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laborum tempore itaque perferendis minus quas!</p>
                  </div>


                  <div className="card self-start mt-20" data-aos='fade-up'>
                        <div className="logo">
                              <img src={icon_4} alt="" className='w-[20%]   mt-4 mb-6' />
                        </div>
                        <h3>technology</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laborum tempore itaque perferendis minus quas!</p>
                  </div>


            </div>

             <motion.img
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'loop', ease: 'easeOut' }}
             src={shape_1} alt="" className='w-[50px] absolute top-1/12   left-[2%]' />
        </div>
    );
};

export default FeaturedSection;