

const Acee = () => {
  return (
    <div className="break-inside-avoid p-10 rounded-lg">
      {/* First Section */}
      <div className="bg-[#20425D] text-white px-10 py-20 rounded-3xl w-[1340px] h-[681px] mx-auto mt-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="space-y-6 -mt-[400px]">
            <h1 className="text-4xl font-bold leading-tight w-[540px] lg:w-[640px]">
              Accelerate Your Business Growth with Vigisecure
            </h1>
            <p className="text-gray-300 w-[579px] h-[48px]">
              Delivering exceptional experiences, mobile optimization, and innovative solutions for sustained growth and digital transformation.
            </p>
            <button  
             className="bg-orange-500 text-white px-6 py-3 rounded-3xl text-lg font-semibold w-[250px] h-[50px] mt-6">
              View More
            </button>
          </div>
          <div className="lg:w-1/2 mt-20 pl-[250px]">
            <img
              src="/Home2/Premium PSD _ Handsome man with laptop copy 1.png"
              alt="Man with laptop"
              className="w-[396px] h-[520px] object-cover"
            />
          </div>
        </div>
        
        {/* Second Section (Aligned Cards in a Line, Shifted Further Left) */}
        <div className="absolute left-[37%] transform -translate-x-1/2 bottom-[-180px] flex justify-center items-center gap-10 w-full">
          {["Developer", "Design", "Analyst"].map((role, index) => (
            <div
              key={index}
              className="w-[280px] h-[353px] border border shadow-lg shadow-black/50 bg-white text-black p-8 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={`/Home2/${role}.jpeg`}
                    alt={role}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold">{role}</h2>
              <p className="text-gray-600 mt-3 text-lg">
                {role === "Developer" &&
                  "We build scalable architectures, write clean, stable code, and seamlessly integrate with customer technologies."}
                {role === "Design" &&
                  "We align your corporate identity with platform guidelines, creating intuitive and user-friendly interfaces."}
                {role === "Analyst" &&
                  "We create technical specifications tailored to customer business processes, technologies, and user needs."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acee;
