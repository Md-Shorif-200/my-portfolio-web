// src/components/AosInitializer.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 120,    
    });
  }, []);

  return null;
};

export default AosInitializer;
