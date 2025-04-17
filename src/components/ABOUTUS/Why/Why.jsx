const Why = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 relative">
             <img 
        src="/ABOUTUS/We/Ellipse 30.png" 
        alt="Eclipse 1" 
        className="absolute top-0 -right-[240px] max-w-xs sm:max-w-sm opacity-80 grayscale pointer-events-none z-0"
      />
            
            {/* Centered Heading with two h1 tags in one line */}
            <div className="flex justify-center items-center gap-x-4 mb-12">
                <h1 className="text-4xl font-bold">Why choose</h1>
                <h1 className="text-4xl font-bold text-orange-400">Vigisecure?</h1>
            </div>
            <div className="flex justify-between gap-6">
           
                {/* Card 1 */}
                <div className="w-1/3 bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src="/Servicepic/Why/Owenship.png" alt="Security" className="w-20 h-20 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4">Ownership</h2>
                    <p className="text-gray-600">We take full responsibility for our actions. We apologize for  our mistakes and work with more sincerity and dedication to delight our customers.</p>
                </div>

                {/* Card 2 */}
                <div className="w-1/3 bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src="/Servicepic/Why/Think.png" alt="Security" className="w-20 h-20 mx-auto mb-4" />
                
                    <h2 className="text-2xl font-bold mb-4">Think Smarter and Bigger</h2>
                    <p className="text-gray-600">We constantly strive for improvement and growth. We embrace change, adopt it, and find solutions to improve ourselves.</p>
                </div>

                {/* Card 3 */}
                <div className="w-1/3 bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src="/Servicepic/Why/Group 59.png" alt="Security" className="w-20 h-20 mx-auto mb-4" />
                
                    <h2 className="text-2xl font-bold mb-4">Work Ethic</h2>
                    <p className="text-gray-600">We are proactive, organized, result-driven, and prompt because we expect high performance from ourselves. Consequently, we regularly invest in training to create a highly skilled and efficient talent pool.</p>
                </div>
            </div>
        
        </div>
    );
};

export default Why;
