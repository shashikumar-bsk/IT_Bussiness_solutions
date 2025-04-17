import { IoSearch } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Service dropdown menu content
  const serviceDropdownContent = (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[1300px]  bg-white shadow-lg z-50 py-3 border-t -mt-10 border-gray-200"
         onMouseEnter={() => handleMouseEnter('services')}
         onMouseLeave={handleMouseLeave}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-4">
          {/* Software Development */}
          <div className="p-3 rounded-lg border border-gray-100 bg-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-md mr-2">
                <img src="/icons/software-dev.svg" alt="" className="w-5 h-5" />
              </div>
              <button className="font-semibold text-gray-800 text-sm">Software Development</button>
            </div>
            <ul className="space-y-1 pl-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Web Applications Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Mobile Applications Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> E-commerce Sites Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> UX6 Software Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> CRM Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Custom Software Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> IoT (Internet of Things)</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> RPA</a></li>
            </ul>
          </div>

          {/* Cybersecurity */}
          <div className="p-3 rounded-lg border border-gray-100 bg-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-md mr-2">
                <img src="/icons/cybersecurity.svg" alt="" className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Cybersecurity</h3>
            </div>
            <ul className="space-y-1 pl-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Vulnerability Assessment & Penetration Testing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> SOC</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Virtual CISO</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Cybersecurity Consulting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Risk Compliance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Digital Forensics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> IT Security Audits</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Managed Detection and Response</a></li>
            </ul>
          </div>

          {/* Cloud Enablement */}
          <div className="p-3 rounded-lg border border-gray-100 bg-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-md mr-2">
                <img src="/icons/cloud.svg" alt="" className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Cloud Enablement</h3>
            </div>
            <ul className="space-y-1 pl-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Cloud Consulting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Cloud Native Apps</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Cloud Migration Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Cloud Security Posture</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Cloud Monitoring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Amazon Cloud Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Disaster Recovery and Backup Solutions</a></li>
            </ul>
          </div>

          {/* Data & AI */}
          <div className="p-3 rounded-lg border border-gray-100 bg-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-md mr-2">
                <img src="/icons/data-ai.svg" alt="" className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Data & AI</h3>
            </div>
            <ul className="space-y-1 pl-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> ChatGPT Integration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Data Management</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Data Visualization</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Machine Learning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Big Data Processing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Custom Solutions for Every Industry</a></li>
            </ul>
          </div>
        </div>

        {/* Additional services row */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {/* Digital Marketing */}
          <div className="p-3 rounded-lg border border-gray-100 bg-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-md mr-2">
                <img src="/icons/digital-marketing.svg" alt="" className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Digital Marketing</h3>
            </div>
            <ul className="space-y-1 pl-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Social Media Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Search Engine Marketing & Optimization</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Content Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Paid Advertising</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Email Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Marketing Automation</a></li>
            </ul>
          </div>

          {/* SAAS */}
          <div className="p-3 rounded-lg border border-gray-100 bg-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-md mr-2">
                <img src="/icons/saas.svg" alt="" className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">SAAS</h3>
            </div>
            <ul className="space-y-1 pl-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Salesforce</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> SharePoint</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Google Suite</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Atlassian</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Oracle HCM</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Paperworks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Microsoft</a></li>
            </ul>
          </div>

          {/* Legal Registration */}
          <div className="p-3 rounded-lg border border-gray-100 bg-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-md mr-2">
                <img src="/icons/legal.svg" alt="" className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Legal Registration</h3>
            </div>
            <ul className="space-y-1 pl-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Company Registration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Trademark Registration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Copyright Registration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> FSSAI Registration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> MSME/Udyam Registration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Digital Signature Certificate (DSC)</a></li>
            </ul>
          </div>

          {/* GIS Mapping */}
          <div className="p-3 rounded-lg border border-gray-100 bg-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-md mr-2">
                <img src="/icons/gis.svg" alt="" className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">GIS Mapping</h3>
            </div>
            <ul className="space-y-1 pl-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> GIS Mapping & Data Conversion</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Photogrammetry</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Surveys</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> DTM & CTM</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Aerial Triangulation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500 flex items-center text-xs"><span className="mr-1">→</span> Scanning & Digitization</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const navigate = useNavigate();

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-5 py-5 bg-white shadow bg-gray-100 border-b border-gray-300 p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          <button onClick={()=>{navigate("/")}} >
          <img
            src="/NavBarFigmaLogo/MAIN BLACK FONTS 1@2x.png"
            alt="Logo"
            width="120"
            className="ml-4"
          /></button>
        </div>

        {/* Menu & Buttons aligned from the middle */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="hidden md:flex items-center space-x-10 text-lg pl-30">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/Blank"
                className={`text-gray-900 hover:text-orange-500 text-lg pb-6 ${
                  activeDropdown === 'services' ? 'text-orange-500' : ''
                }`}
              >
                Services
              </Link>
            </div>
            <a
              href="#clients"
              className="text-gray-900 hover:text-orange-500 text-lg"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              Industries
            </a>
            <a
              href="#development"
              className="text-gray-900 hover:text-orange-500 text-lg"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              Products
            </a>
            <a
              href="#data-ai"
              className="text-gray-900 hover:text-orange-500 text-lg"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              Resources
            </a>
          </div>
          {/* Search, Contact Us & More Button */}
          <button className="text-gray-600 hover:text-gray-900 transition pl-10">
            <IoSearch className="text-4xl" />
          </button>
          <button className="px-8 py-3 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-100 transition-colors text-lg">
            Contact Us
          </button>
          <button>
            <CiCircleMore className="text-gray-600 hover:text-gray-900 transition text-5xl" />
          </button>
        </div>
      </nav>

      {/* Dropdown menus */}
      {activeDropdown === 'services' && serviceDropdownContent}
      {/* Add similar dropdown content for other menu items if needed */}
    </div>
  );
};

export default Navbar;