import { useState, useEffect } from 'react';

const services = [
  {
    icon: <img src="/Servicepic/Software/Web Application.png" alt="web app" className="w-12 h-12" />,
    title: "Web Application Development",
    color: "text-orange-500",
  },
  {
    icon: <img src="/Servicepic/Software/Mobile.png" alt="mobile" className="w-12 h-12" />,
    title: "Mobile Application Development",
    color: "text-orange-500",
  },
  {
    icon: <img src="/Servicepic/Software/Ecom.png" alt="Ecom" className="w-12 h-12" />,
    title: "Ecommerce Sites Development",
    color: "text-orange-500",
  },
  {
    icon: <img src="/Servicepic/Software/LMS.png" alt="LMS" className="w-12 h-12" />,
    title: "LMS Software Development",
    color: "text-orange-500",
  },
  {
    icon: <img src="/Servicepic/Software/CRM Dev.png" alt="CRM" className="w-12 h-12" />,
    title: "CRM Development",
    color: "text-orange-500",
  },
  {
    icon: <img src="/Servicepic/Software/Custom.png" alt="Custom" className="w-12 h-12" />,
    title: "Custom Software Development",
    color: "text-orange-500",
  },
  {
    icon: <img src="/Servicepic/Software/IOT.png" alt="IoT" className="w-12 h-12" />,
    title: "IoT (Internet Of Things)",
    color: "text-orange-500",
  },
  {
    icon: <img src="/Servicepic/Software/RPA.png" alt="RPA" className="w-12 h-12" />,
    title: "RPA",
    color: "text-orange-500",
  },
];

const Software = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Render service item
  const ServiceItem = ({ service }) => (
    <div className="flex flex-col items-center text-center mb-8 group">
      <div className="bg-orange-50 p-4 md:p-6 rounded-lg mb-3 shadow-lg shadow-orange-300/50 
                    transition-all duration-300 ease-in-out 
                    group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-orange-300/60">
        {service.icon}
      </div>
      <h3 className="text-xs sm:text-sm font-medium text-orange-500 max-w-[120px] md:max-w-[150px]
                   transition-colors duration-300 group-hover:text-orange-600">
        {service.title}
      </h3>
    </div>
  );

  return (
    <div className="py-8 md:py-12 px-4 md:px-8 bg-white">
      {/* Header */}
      <div className="relative mb-8 md:mb-16 pl-0 md:pl-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Software Development
        </h1>
        <div className="w-[250px] md:w-[380px] border-b-4 border-dotted border-orange-400"></div>
      </div>

      {/* Services and Image Section */}
      {isMobile ? (
        // Mobile layout - stacked
        <div className="flex flex-col">
          {/* Image */}
          <div className="mb-8">
            <img 
              src="/Servicepic/Software/Development-pana 1.png" 
              alt="Software Development" 
              className="w-full h-auto" 
            />
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <ServiceItem key={index} service={service} />
            ))}
          </div>
        </div>
      ) : (
        // Tablet and Desktop layout
        <div className={`flex flex-col ${isTablet ? 'md:flex-col' : 'md:flex-row'} md:pl-12`}>
          {/* Services Grid */}
          <div className={`${isTablet ? 'w-full mb-8' : 'w-full md:w-1/2'} relative pr-0 md:pr-4`}>
            {isTablet ? (
              // Tablet layout - 4x2 grid
              <div className="grid grid-cols-4 gap-4">
                {services.map((service, index) => (
                  <ServiceItem key={index} service={service} />
                ))}
              </div>
            ) : (
              // Desktop layout - custom positioning
              <>
                {/* Top Row - 3 services */}
                <div className="flex flex-wrap md:flex-nowrap justify-between mb-8 md:mb-16">
                  <ServiceItem service={services[0]} />
                  <ServiceItem service={services[1]} />
                  <ServiceItem service={services[2]} />
                </div>
                
                {/* Middle Row - Right positioned service */}
                <div className="flex justify-end mb-8 md:mb-16">
                  <ServiceItem service={services[3]} />
                </div>
                
                {/* Bottom Row */}
                <div className="flex flex-wrap md:flex-nowrap justify-between mb-8 md:mb-16">
                  <ServiceItem service={services[4]} />
                  <ServiceItem service={services[5]} />
                  <ServiceItem service={services[6]} />
                </div>
                
                {/* Last Row - Positioned service (adjusted for responsiveness) */}
                <div className="flex justify-end -mt-[450px]   pr-[400px]">
                  <ServiceItem service={services[7]} />
                </div>
              </>
            )}
          </div>
          
          {/* Image */}
          <div className={`${isTablet ? 'w-full' : 'w-full md:w-1/2'} flex items-center`}>
            <img 
              src="/Servicepic/Software/Development-pana 1.png" 
              alt="Software Development" 
              className="w-full h-auto md:scale-100 lg:scale-110 origin-center" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Software;