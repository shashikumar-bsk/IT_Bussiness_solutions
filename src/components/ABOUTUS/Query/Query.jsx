import Footer from '../../Main_Home/Footer/Footer';

import { useState, useEffect } from 'react';

const Query = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div className="flex items-center justify-between py-5 px-8 bg-[#E1E2E4] rounded-3xl max-w-[800px] mx-auto relative overflow-hidden mt-5 h-[300px]">
      {/* Text Section - Left Side */}
      <div className="w-1/2 text-gray-600 text-left">
        <h1 className="text-3xl font-bold mb-5">Have Any Question About Us ?</h1>
        <p className="leading-relaxed text-justify text-xl">Don’t hesitate to contact us</p>
      </div>

      {/* Button - Right Side */}
      <button className="relative flex items-center justify-center px-10 py-3 text-white font-semibold bg-orange-600 border-2 border-[#000000] rounded-full hover:bg-orange-500 transition duration-300 hover:border-[#000000]">
        Get Started
      </button>
      <img 
        src="public/ABOUTUS/We/Ellipse 30 (1).png" 
        alt="Eclipse 2" 
        className="absolute bottom-0 left-0 max-w-xs sm:max-w-sm opacity-30 grayscale pointer-events-none z-0"
      />
    </div>
    <div className='mt-10'>
        <Footer />
    </div>
    </>
  );
};

export default Query;
 