const Us = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      {/* Top Right Eclipse - Placeholder div for now */}
      <div className="absolute top-[10px] right-[100px] w-64 h-64 bg-gray-100 rounded-full opacity-40 -z-10 translate-x-1/4">
      <img src="/Join/Ellipse 20.png" alt="Eclipse" className="w-full h-full object-contain br" />
      </div>
      
      {/* Bottom Left Eclipse - Placeholder div for now */}
      <div className="absolute  bottom-[150px] left-[100px] w-64 h-64 bg-gray-100 rounded-full opacity-40 -z-10 -translate-x-1/4">
      <img src="/Join/Ellipse 20.png" alt="Eclipse" className="w-full h-full object-contain br" />
    
      </div>
      
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">
          <span className="text-gray-800">About </span>
          <span className="text-orange-500">Us</span>
        </h2>
      </div>
      
      {/* Content Container */}
      <div className="flex flex-col items-center">
        {/* Image with rounded corners */}
        <div className="mb-8 w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/ABOUTUS/Us/Rectangle 25.png" 
            alt="Team working together" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Text content */}
        <div className="text-gray-600 text-center max-w-4xl mb-8">
          <p>
            We deliver secure, scalable, and user-centric IT solutions, protecting businesses from threats, enabling growth, enhancing 
            user experiences, and driving innovation for sustainable success. We provide end-to-end digital marketing, web design, 
            and development services, utilizing data-driven strategies and UX/UI excellence to enhance brand reach, engagement, 
            and demand generation.
          </p>
        </div>
        
        {/* Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Us;