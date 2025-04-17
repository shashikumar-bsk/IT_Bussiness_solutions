const Develop = () => {
    return (
      <div className="p-10 flex flex-col items-center">
        {/* Main Section */}
        <div 
          className="bg-[#cccccc] px-10 py-40 rounded-3xl w-full max-w-5xl pl-[51px] overflow-hidden flex flex-col mr-auto md:flex-row items-center"
        >
          {/* Text Section */}
          <div className="space-y-6 text-left md:w-1/2 -mt-[300px]">
            <h1 className="text-3xl text-gray-900 font-bold leading-tight">Data & AI</h1>
            <p className="text-gray-700 text-lg">
              A global logistics provider faced challenges in optimizing large-scale shipping.  
              Issues included delayed deliveries, fluctuating demand, and high costs.  
              Efficient operations were needed to streamline processes and reduce expenses.
            </p>
            <button className="relative flex items-center px-6 py-3 text-white font-semibold bg-orange-500 rounded-full shadow-lg hover:bg-orange-400 transition">
              View More
              <span className="absolute right-0 top-0 h-full w-8 bg-black rounded-r-full"></span>
            </button>
          </div>
  
          {/* Robot Image - Moved Right */}
          <div className="md:w-1/2 lg:justify-end absolute bottom-[-200px] left-[-200px] relative">
            <img
              src="/Data/Robot.png"
              alt="Robot"
              className="w-[420px] h-[480px] object-contain" // Maintains original size
            />
          </div>
        </div>
  
        {/* Cards Section - Now in a Column */}
        <div className="flex flex-col gap-6 pr-[650px] -mt-[700px]  relative w-[1019px] h-[606px] translate-x-[60%]">
          {/* First Card */}
          <div className="bg-white shadow-md rounded-xl p-6 w-full">
            <p className="text-gray-600">
              Consolidated data from disparate sources: GPS trackers, historical delivery logs, weather forecasts, and traffic reports. Built a robust data pipeline using Apache Kafka for real-time ingestion and AWS Redshift for data warehousing.
            </p>
            <div className="mt-4 text-orange-500 font-semibold">
              <a href="#">View Case Study →</a>
            </div>
          </div>
  
          {/* Second Card */}
          <div className="bg-white shadow-md rounded-xl p-6 w-full">
            <p className="text-gray-600">
              Developed a route optimization algorithm using reinforcement learning that dynamically adjusted delivery paths based on real-time data. Incorporated a machine learning model to estimate delivery times, considering traffic, weather, and package weight.
            </p>
            <div className="mt-4 text-orange-500 font-semibold">
              <a href="#">View Case Study →</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Develop;