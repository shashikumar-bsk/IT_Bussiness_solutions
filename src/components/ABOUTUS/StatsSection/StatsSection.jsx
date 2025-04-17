

const StatsSection = () => {
  const stats = [
    { number: "1500+", title: "Completed Projects" },
    { number: "900+", title: "Happy Clients" },
    { number: "1400+", title: "Project Delivered" },
    { number: "890+", title: "Winning Awards" }
  ];

  return (
    <div className="relative w-full bg-gray-100 py-16 px-4 overflow-hidden mt-60">
      {/* Background decorative elements */}
      <img 
        src="/ABOUTUS/We/Ellipse 30.png" 
        alt="Eclipse 1" 
        className="absolute top-0 right-0 max-w-xs sm:max-w-sm opacity-30 grayscale pointer-events-none z-0"
      />
      <img 
        src="public/ABOUTUS/We/Ellipse 30 (1).png" 
        alt="Eclipse 2" 
        className="absolute bottom-0 left-0 max-w-xs sm:max-w-sm opacity-30 grayscale pointer-events-none z-0"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gray-800">We strive to understand </span>
          <span className="text-orange-500">user expectations</span>
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div 
                className="rounded-3xl p-6 flex flex-col items-center" 
                style={{
                  border: '4px solid',
                  borderImageSource: 'linear-gradient(122.78deg, rgba(238, 117, 10, 0.3) 6.19%, rgba(32, 66, 93, 0.66) 97.4%)',
                  borderImageSlice: '1',
                }}
              >
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-700">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
