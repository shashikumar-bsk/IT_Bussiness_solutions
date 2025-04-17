import { useState, useEffect } from "react";

const services = [
  { icon: <img src="/Servicepic/Cloud/Sales.png" alt="Salesforce" className="w-12 h-12" />, title: "Risk Compliance" },
  { icon: <img src="/Servicepic/Cloud/Share.png" alt="SharePoint" className="w-12 h-12" />, title: "Digital Forensics" },
  { icon: <img src="/Servicepic/Cloud/Google.png" alt="Google Suite" className="w-12 h-12" />, title: "Managed Detection and Response" },
  { icon: <img src="/Servicepic/Cloud/Atlassian.png" alt="Atlassian" className="w-12 h-12" />, title: "SOC" },
  { icon: <img src="/Servicepic/Cloud/Splunk.png" alt="Splunk" className="w-12 h-12" />, title: "Virtual CISO" },
  { icon: <img src="/Servicepic/Cloud/Slack.png" alt="Slack" className="w-12 h-12" />, title: "Vulnerability Assessment & Penetration Testing" },
  { icon: <img src="/Servicepic/Cloud/Oracal.png" alt="Oracle HCM" className="w-12 h-12" />, title: "IT Security Audits" },
  { icon: <img src="/Servicepic/Cloud/Micro.png" alt="Microsoft" className="w-12 h-12" />, title: "Cybersecurity Consulting" },
  { icon: <img src="/Servicepic/Cloud/Fresh.png" alt="Freshworks" className="w-12 h-12" />, title: "Cybersecurity Consulting" },
];

const randomStyles = [
  { transform: "translateY(-10px)" },
  { transform: "translateY(25px)" },
  { transform: "translateY(-15px)" },
  { transform: "translateY(15px)" },
  { transform: "translateY(10px)" },
  { transform: "translateY(-15px)" },
  { transform: "translateY(17px)" },
  { transform: "translateY(-15px)" },
  { transform: "translateY(-450px)" }
];

const Cloud = () => {
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

  const ServiceItem = ({ service, style }) => (
    <div className="flex flex-col items-center text-center group" style={style}>
      <div className="bg-orange-50 p-4 rounded-lg shadow-md shadow-orange-300 
                      transition-all duration-300 ease-in-out 
                      group-hover:-translate-y-2 group-hover:shadow-orange-500/60">
        {service.icon}
      </div>
      <h3 className="text-sm font-medium text-orange-600 mt-3 max-w-[150px] transition-colors duration-300 group-hover:text-orange-700">
        {service.title}
      </h3>
    </div>
  );

  return (
    <div className="bg-white flex flex-col items-center justify-center mx-auto mt-60" style={{ width: "1300px", height: "600px" }}>
      {/* Header */}
      <div className="w-full text-center md:text-left mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cloud Enablement</h1>
        <div className="w-48 md:w-64 border-b-4 border-dotted border-orange-400 mt-2 mx-auto md:mx-0"></div>
        
      </div>
      <div className="absolute w-[400px]  mt-[1800px]" style={{ top: "100px", left: "900px", zIndex: 1 }}>
          <img src="/Join/Ellipse 20.png" alt="Eclipse" className="w-full h-full object-contain opacity-5 filter grayscale" />
        </div>
      

      {/* Layout */}
      <div className="flex w-full items-center justify-between mt-10">
        {/* Services Grid */}
        <div className={`${isMobile ? "grid grid-cols-2 gap-x-6 gap-y-8" : isTablet ? "grid grid-cols-3 gap-x-6 gap-y-8 w-full" : "grid grid-cols-4 gap-x-14 gap-y-40 w-4/5"} text-center`}>
  {services.map((service, index) => (
    <ServiceItem key={index} service={service} style={randomStyles[index]} />
  ))}
   
</div>


        {/* Image */}
        <div className="w-1/2 flex justify-center items-center ">
        
  <img 
    src="/Servicepic/Cloud/Uploading-amico 1.png" 
    alt="Cloud Enablement" 
    className="w-full h-auto max-w-full object-contain -mt-[300px]" 
  />
  
</div>
</div>
    </div>
  );
};

export default Cloud;
