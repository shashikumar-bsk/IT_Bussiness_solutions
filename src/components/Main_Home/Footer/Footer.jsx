import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-orange-400 text-center w-full py-12">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-orange-500 font-bold text-lg md:text-2xl">
          Drive Your Path To Digital Success. <br /> Together, We Build The Future
        </h2>
        <p className="text-gray-700 text-md md:text-lg mt-4">
          Innovate, Secure, and Transform with Us
        </p>
        <button className="mt-6 bg-orange-500 text-white py-3 px-8 rounded-full shadow-md hover:bg-orange-600 transition duration-300">
          <Link to='/contact' >Contact With Us</Link>
        </button>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <FaLinkedin className="text-orange-500 text-3xl cursor-pointer hover:text-orange-600 transition duration-300" />
          <FaInstagram className="text-orange-500 text-3xl cursor-pointer hover:text-orange-600 transition duration-300" />
          <FaFacebook className="text-orange-500 text-3xl cursor-pointer hover:text-orange-600 transition duration-300" />
          <FaTwitter className="text-orange-500 text-3xl cursor-pointer hover:text-orange-600 transition duration-300" />
          <FaWhatsapp className="text-orange-500 text-3xl cursor-pointer hover:text-orange-600 transition duration-300" />
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t-2 border-orange-400  text-gray-500 text-sm pt-4 flex justify-between items-center">
          <p className="ml-4">All Rights Reserved © 2024</p>
          <div className="mr-4 space-x-4">
            <Link to="/terms" className="hover:underline">T&C</Link>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
