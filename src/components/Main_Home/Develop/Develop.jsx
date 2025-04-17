const Develop = () => {
    return (
      <div className="p-10">
        {/* Main Section */}
        <div className="bg-[#cccccc] px-10 py-24 rounded-3xl max-w-[1340px] mx-auto relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center relative">
            {/* Text Section */}
            <div className="space-y-6 lg:w-1/2">
              <h1 className="text-4xl text-gray-900 font-bold leading-tight">
                Development
              </h1>
              <p className="text-gray-700 text-lg">
                A large retail chain with over 100 stores across multiple regions required a centralized system to manage inventory, track sales, and optimize supply chain operations.
              </p>
              <button className="relative flex items-center px-6 py-3 text-white font-semibold bg-orange-500 rounded-full shadow-lg hover:bg-orange-400 transition">
                View More
                <span className="absolute right-0 top-0 h-full w-8 bg-black rounded-r-full"></span>
              </button>
            </div>
  
            {/* Image Section */}
            <div className="lg:w-1/2 flex  lg:justify-end absolute bottom-[-100px] pl-[50px] right-10 z-0">
              <img
                src="/Develop/Group 1000004429.png"
                alt="Development"
                className="w-[500px]  object-cover "
              />
            </div>
          </div>
        </div>
  
        {/* Cards Section - Positioned Half Inside and Half Outside */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center mt-[-80px] relative z-10">
          {/* Mobile Development Card */}
          <div className="bg-white shadow-md rounded-xl p-6 w-[420px] relative">
            <div className="flex justify-center mb-4">
              <img src="/Develop/Black.png" alt="Mobile Dev" className="w-12" />
            </div>
            <h2 className="text-xl font-bold text-center">Mobile Application Development</h2>
            <p className="text-gray-600 mt-3 text-center">
              Designing, building, and optimizing mobile applications for Android and iOS, ensuring performance, usability, and engaging user experiences.
            </p>
            <div className="text-center mt-4">
              <a href="#" className="text-orange-500 font-semibold">View Case Study →</a>
            </div>
          </div>
  
          {/* Web Development Card */}
          <div className="bg-white shadow-md rounded-xl p-6 w-[420px] relative z-20">
            <div className="flex justify-center mb-4">
              <img src="/Develop/Blank.png" alt="Web Dev" className="w-12" />
            </div>
            <h2 className="text-xl font-bold text-center">Web Application Development</h2>
            <p className="text-gray-600 mt-3 text-center">
              Designing and maintaining interactive, user-friendly web solutions with modern frameworks, databases, and technologies.
            </p>
            <div className="text-center mt-4">
              <a href="#" className="text-orange-500 font-semibold">View Case Study →</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Develop;