const Story = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 relative">
            {/* Centered Heading */}
            <h1 className="flex justify-center text-4xl font-bold mb-12">Our Story</h1>

            {/* Container to hold image and text side by side */}
            <div className="flex gap-10 mt-10 items-center">
                {/* Image Section */}
                <div className="w-1/2">
                    <img 
                        src="/Servicepic/Story/Şirket Kültürü Nedir_ Şirket Kültürü Nasıl Oluşturulur_ copy 1.png" 
                        alt="Team working together" 
                        className="h-[600px] w-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-1/2 text-gray-600 text-right max-w-4xl">
                    <p className="text-sw leading-relaxed text-justify">
                        We deliver secure, scalable, and user-centric IT solutions, protecting businesses from threats, enabling growth, enhancing user experiences, and driving innovation for sustainable success. We provide end-to-end digital marketing, web design, and development services, utilizing data-driven strategies and UX/UI excellence to enhance brand reach, engagement, and demand generation. We specialize in designing customer-centric, data-driven, and growth-oriented marketing and software solutions to help businesses improve their brand presence and reach, achieve growth in quality demand generation, nurture their customer journey, improve conversion, sales & revenues, and gain a competitive edge.
                    </p>
                    <p className="text-sw leading-relaxed mt-6 text-justify">
                        We deliver secure, scalable, and user-centric IT solutions, protecting businesses from threats, enabling growth, enhancing user experiences, and driving innovation for sustainable success. We provide end-to-end digital marketing, web design, and development services, utilizing data-driven strategies and UX/UI excellence to enhance brand reach, engagement, and demand generation. We specialize in designing customer-centric, data-driven, and growth-oriented marketing and software solutions to help businesses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Story;