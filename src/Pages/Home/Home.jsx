import React from 'react';
import Banner from './Banner';
import FeaturedSection from './FeaturedSection';
import About from './About';
import Skill from './skill';
import Projects from './Projects';
import Education from './Education';
import ContactForm from './ContactForm';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
              <About></About>
              <Skill></Skill>
              <Projects></Projects>
              <Education></Education>
              <ContactForm></ContactForm>
              
         
        </div>
    );
};

export default Home;