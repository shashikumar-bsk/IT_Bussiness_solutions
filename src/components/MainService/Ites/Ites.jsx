import { useState, useEffect } from 'react';

const services = [
  { icon: <img src="/Servicepic/ITES/BPO (1).png" alt="BPO & BPS" className="w-12 h-12" />, title: "BPO & BPS", color: "text-orange-500" },
  { icon: <img src="/Servicepic/ITES/Fraud.png" alt="Fraud Risk Management" className="w-12 h-12" />, title: "Fraud Risk Management", color: "text-orange-500" },
  { icon: <img src="/Servicepic/ITES/Doc.png" alt="Document Processing" className="w-12 h-12" />, title: "Document Processing", color: "text-orange-500" },

  { icon: <img src="/Servicepic/ITES/KYC.png" alt="KYC Verification" className="w-12 h-12" />, title: "KYC Verification", color: "text-orange-500" },
  { icon: <img src="/Servicepic/ITES/BackGround.png" alt="Background Checks" className="w-12 h-12" />, title: "Background Checks", color: "text-orange-500" },
  { icon: <img src="/Servicepic/ITES/Customer.png" alt="Customer Support" className="w-12 h-12" />, title: "Customer Support", color: "text-orange-500" },
  { icon: <img src="/Servicepic/ITES/Vetting.png" alt="Vetting" className="w-12 h-12" />, title: "Vetting", color: "text-orange-500" },
];

const Ites = () => {
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

  const ServiceItem = ({ service, style }) => (
    <div className="flex flex-col items-center text-center mb-4 group" style={style}>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out group-hover:scale-105">
        {service.icon}
      </div>
      <h3 className="text-xs sm:text-sm font-medium text-black max-w-[120px] md:max-w-[150px] group-hover:text-gray-600 mt-2">
        {service.title}
      </h3>
    </div>
  );

  const randomStyles = [
    { transform: 'translateY(-10px)' },
    { transform: 'translateY(-10px)' },
    { transform: 'translateY(-30px)' },
    
    { transform: 'translateY(80px)' },
    { transform: 'translateY(-5px)' },
    { transform: 'translateY(7px)' },
    { transform: 'translateY(-15px)' },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-10 bg-[#E1E2E4] rounded-3xl max-w-[1340px] mx-auto relative overflow-hidden mt-5 h-[650px]">
      <div className="relative mb-8 md:mb-16 pl-[200px]">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">ITES</h1>
        <div className="w-[80px]  border-b-4 border-dotted border-orange-400"></div>
      </div>

      <div className="relative flex w-half pr-20">
        <div className="w-1/2 flex items-center justify-center mt-10">
          <img src="/Servicepic/ITES/BPO (8).png" alt="Cyber Image" className="w-full h-auto md:scale-95 transform -translate-x-5 -mt-20" />
        </div>
        <div className="absolute w-[400px] h-[465px] -mt-[200px]" style={{ top: "100px", left: "150px", zIndex: 1 }}>
          <img src="/Join/Ellipse 20.png" alt="Eclipse" className="w-full h-full object-contain opacity-5 filter grayscale" />
        </div>

        <div className="w-1/2 grid grid-cols-4 gap-x-6 gap-y-2">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} style={randomStyles[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ites;