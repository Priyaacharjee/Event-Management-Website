// -----------------------------------------------------------------------  WITHOUT PROPERTIES ------------------------------------------------------------

import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiFillHome, AiOutlineSolution, AiOutlineAppstore, AiOutlineTeam, AiOutlineQuestionCircle, AiFillEdit,  AiFillVideoCamera } from 'react-icons/ai';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-cyan-900  text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* About Us */}
        <div className="flex flex-col items-center text-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">OurLogo</h1>
          </div>
          <p className="text-gray-300 mt-4">We are a company dedicated to providing the best services and solutions for our clients. Our mission is to deliver excellence through innovation and commitment.</p>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-4 ml-[-30px]">Quick Links</h3>
          <ul className="space-y-2">
          <li>
              <Link 
                to="header" 
                smooth={true} 
                duration={500} 
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <AiFillHome className="mr-2" /> Header
              </Link>
            </li>
            <li>
              <Link 
                to="services" 
                smooth={true} 
                duration={500} 
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <AiOutlineSolution className="mr-2" /> Services
              </Link>
            </li>
            <li>
              <Link 
                to="features" 
                smooth={true} 
                duration={500} 
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <AiOutlineAppstore className="mr-2" /> Features
              </Link>
            </li>
            <li>
              <Link 
                to="collaborators" 
                smooth={true} 
                duration={500} 
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <AiOutlineTeam className="mr-2" /> Collaborators
              </Link>
            </li>
            <li>
              <Link 
                to="analytics" 
                smooth={true} 
                duration={500} 
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <AiFillEdit className="mr-2" /> Analytics
              </Link>
            </li>
            <li>
              <Link 
                to="help" 
                smooth={true} 
                duration={500} 
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <AiOutlineQuestionCircle className="mr-2" /> Help
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Our Team */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-4">Our Team</h3>
          <ul className="space-y-2">
            <li><a href="https://drive.google.com/file/d/1fIC3CKETxXfNN36SpSeMarLesOpgnx_X/view?usp=drivesdk" className="text-gray-300 hover:text-blue-400 transition-colors">Jayita Bhowmik</a></li>
            <li><a href="#2" className="text-gray-300 hover:text-blue-400 transition-colors">Keya Tarafdar</a></li>
            <li><a href="https://drive.google.com/file/d/1ewvh3hg01vqpOJO4qVVDPPFE7H-kVQaC/view?usp=drivesdk" className="text-gray-300 hover:text-blue-400 transition-colors">Priya Acharjee</a></li>
            <li><a href="https://drive.google.com/file/d/1eMZtPVV9EoumPvwrryq_q7l5z6DPBBXM/view?usp=drivesdk" className="text-gray-300 hover:text-blue-400 transition-colors">Shreya Kundu</a></li>
          </ul>
        </div>
        
        {/* Get in Touch */}
        <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" className="text-2xl text-gray-300 hover:text-blue-600 transition-colors"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-2xl text-gray-300 hover:text-pink-500 transition-colors"><FaInstagram /></a>
              <a href="https://linkedin.com" className="text-2xl text-gray-300 hover:text-blue-700 transition-colors"><FaLinkedin /></a>
            </div>
            <div> <Link 
                to="gallery" 
                smooth={true} 
                duration={500} 
                className="flex items-center text-pink-500 text-2xl hover:text-blue-400 transition-colors cursor-pointer"
              >
                <AiFillVideoCamera  className="mr-2" /> Our Gallery
              </Link></div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="bg-gray-900 text-center py-4 mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved | Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
}

