import { useState, useEffect, useMemo } from "react";

const Digital = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = useMemo(
    () => [
      { img: "/Servicepic/Digital/Social.png", title: "Social Media Marketing" },
      { img: "/Servicepic/Digital/Search.png", title: "Search Engine Marketing & Optimization" },
      { img: "/Servicepic/Digital/Content.png", title: "Content Marketing" },
      { img: "/Servicepic/Digital/Paid.png", title: "Paid Advertising" },
      { img: "/Servicepic/Digital/Email.png", title: "Email Marketing" },
      { img: "/Servicepic/Digital/Market.png", title: "Marketing Automation" },
      { img: "/Servicepic/Digital/Visualization.png", title: "Visualization" },
    ],
    []
  );

  const randomStyles = useMemo(
    () => [
      { transform: "translateY(-10px)" },
      { transform: "translateY(25px)" },
      { transform: "translateY(-15px)" },
      { transform: "translateY(15px)" },
      { transform: "translateY(-15px)" },
      { transform: "translateY(17px)" },
      { transform: "translateY(-15px)" },
    ],
    []
  );

  const ServiceItem = ({ img, title, style }) => (
    <div className="flex flex-col items-center text-center group" style={style}>
      <div className="bg-orange-50 p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-105 group-hover:shadow-orange-500/60">
        <img src={img} alt={title} className="w-12 h-12" />
      </div>
      <h3 className="text-sm font-medium text-orange-600 mt-3 max-w-[150px] transition-colors duration-300 group-hover:text-orange-700">
        {title}
      </h3>
    </div>
  );

  return (
    <div className="bg-white flex flex-col items-center justify-center mx-auto mt-10 max-w-[1300px] h-[600px]">
      {/* Header */}
      <div className="w-full text-center md:text-left mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Digital Marketing</h1>
        <div className="w-[300px] border-b-4 border-dotted border-orange-400 mt-2 mx-auto md:mx-0"></div>
      </div>

      {/* Background Image */}
      <div className="absolute w-[400px] opacity-5 filter grayscale mt-[3500px]" style={{ top: "100px", left: "900px", zIndex: 1 }}>
        <img src="/Join/Ellipse 20.png" alt="Eclipse" className="w-full h-full object-contain" />
      </div>

      {/* Layout */}
      <div className="flex w-full items-center justify-between mt-10">
        {/* Services Grid */}
        <div className={`${isMobile ? "grid grid-cols-2 gap-x-6 gap-y-8" : isTablet ? "grid grid-cols-3 gap-x-6 gap-y-8 w-full" : "grid grid-cols-4 gap-x-14 gap-y-40 w-4/5"} text-center`}>
          {services.map((service, index) => (
            <ServiceItem key={index} img={service.img} title={service.title} style={randomStyles[index]} />
          ))}
        </div>

        {/* Right Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img src="/Servicepic/Digital/Digital lifestyle-amico 1.png" alt="Cloud Enablement" className="w-full h-auto max-w-full object-contain -mt-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Digital;
