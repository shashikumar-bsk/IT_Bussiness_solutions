import { Link } from "react-router-dom";
const NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-white relative z-0">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-extrabold text-[#EE750A]">
          Empowering Businesses
        </h1>
        <h2 className="text-5xl font-semibold text-gray-900">
          with Secure, Scalable, and User-
        </h2>
        <h2 className="text-5xl font-semibold text-gray-900">
          Centric IT Solutions
        </h2>
        <p className="text-gray-700 text-lg">
          Development of mobile applications, Data and AI Solutions, Digital
          Marketing, and web services of any complexity.
        </p>
        <div className="hidden md:flex items-center space-x-10 text-lg pl-30">
          <Link to="/Blank">
            <button className="relative flex items-center justify-center px-20 py-3 text-white font-semibold bg-orange-600 border-2 border-[#000000] rounded-full hover:bg-orange-500 transition duration-300">
              Get Start
              <span className="absolute right-0 top-0 h-full w-10 bg-[#000000] rounded-r-full"></span>
            </button>
          </Link>
        </div>
      </div>

      {/* Right Content - Handshake Image Inside Main Div */}
      <div className="md:w-1/2 flex justify-center ">
        <img src="/Home/Group 1000004344 (1).png" alt="Business Handshake" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default NextPage;
