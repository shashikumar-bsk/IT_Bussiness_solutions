import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="p-8">
      <div
        className="bg-[#cccccc] px-10 py-24 rounded-3xl max-w-[1340px] h-[480px] mx-auto relative mt-20 overflow-hidden border-orange-300 border-2"
        style={{ marginLeft: "10px" }}
      >
        <div className="m:1/2 lg:flex lg:flex-row items-center">
          {/* Background Image 1 */}
          <div
            className="absolute w-[400px] h-[465px] -mt-[40px]"
            style={{ top: "20px", left: "90px", zIndex: 1 }}
          >
            <img
              src="/Join/Ellipse 20.png"
              alt="Eclipse"
              className="w-full h-full object-contain opacity-30 filter grayscale"
            />
          </div>

          {/* Background Image 2 */}
          <div
            className="absolute h-[445px] w-[380px] overflow-hidden"
            style={{ top: "40px", left: "120px", zIndex: 2 }}
          >
            <img
              src="/Join/Group 1000004658.png"
              alt="Group"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:flex lg:flex-row items-center relative pl-[600px]">
          <div className="space-y-6">
            {/* Heading with Different Colors */}
            <div className="flex space-x-2">
              <h1 className="text-4xl text-gray-900 font-bold leading-tight">
                Join
              </h1>
              <h1 className="text-4xl text-orange-500 font-bold leading-tight">
                VIGISECURE
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            {/* Button with Navigation */}
            <button
              onClick={() => navigate("/about")}
              className="relative flex items-center px-7 py-3 text-white font-semibold bg-orange-500 rounded-full shadow-lg hover:bg-orange-400 transition"
            >
              Discover New Opportunities
              <span className="absolute right-0 top-0 h-full w-8 bg-black rounded-r-full shadow-[inset_-10px_0px_10px_rgba(0,0,0,0.5)]"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
