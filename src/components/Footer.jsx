// -----------------------------------------------------------------------  WITHOUT PROPERTIES ------------------------------------------------------------

import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiFillHome, AiOutlineSolution, AiOutlineAppstore, AiOutlineTeam, AiOutlineQuestionCircle } from 'react-icons/ai';

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
            <li><a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"><AiFillHome className="mr-2" /> Home</a></li>
            <li><a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"><AiOutlineSolution className="mr-2" /> Services</a></li>
            <li><a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"><AiOutlineAppstore className="mr-2" /> Features</a></li>
            <li><a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"><AiOutlineTeam className="mr-2" /> Collaborators</a></li>
            <li><a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"><AiOutlineQuestionCircle className="mr-2" /> Help</a></li>
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
        </div>
      </div>

      {/* Bottom Text */}
      <div className="bg-gray-900 text-center py-4 mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved | Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
}

// -----------------------------------------------------------------------  WITH PROPERTIES ------------------------------------------------------------

// import React from 'react';
// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { AiFillHome, AiOutlineSolution, AiOutlineAppstore, AiOutlineTeam, AiOutlineQuestionCircle } from 'react-icons/ai';

// export default function Footer({
//   logo = "OurLogo",
//   quickLinks = [
//     { href: "#home", icon: <AiFillHome />, text: "Home" },
//     { href: "#services", icon: <AiOutlineSolution />, text: "Services" },
//     { href: "#features", icon: <AiOutlineAppstore />, text: "Features" },
//     { href: "#collaborators", icon: <AiOutlineTeam />, text: "Collaborators" },
//     { href: "#help", icon: <AiOutlineQuestionCircle />, text: "Help" }
//   ],
//   teamMembers = [
//     { href: "https://drive.google.com/file/d/1fIC3CKETxXfNN36SpSeMarLesOpgnx_X/view?usp=drivesdk", name: "Jayita Bhowmik" },
//     { href: "#keya", name: "Keya Tarafdar" },
//     { href: "https://drive.google.com/file/d/1ewvh3hg01vqpOJO4qVVDPPFE7H-kVQaC/view?usp=drivesdk", name: "Priya Acharjee" },
//     { href: "https://drive.google.com/file/d/1eMZtPVV9EoumPvwrryq_q7l5z6DPBBXM/view?usp=drivesdk", name: "Shreya Kundu" }
//   ],
//   socialLinks = {
//     facebook: "https://facebook.com",
//     instagram: "https://instagram.com",
//     linkedin: "https://linkedin.com"
//   }
// }) {
//   return (
//     <footer className="bg-gradient-to-r from-blue-950 to-cyan-900 text-white py-8 px-6">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
//         {/* About Us */}
//         <div className="flex flex-col items-center text-center">
//           <div className="text-center md:text-left mb-4 md:mb-0">
//             <h1 className="text-2xl font-bold">{logo}</h1>
//           </div>
//           <p className="text-gray-300 mt-4">We are a company dedicated to providing the best services and solutions for our clients. Our mission is to deliver excellence through innovation and commitment.</p>
//         </div>
        
//         {/* Quick Links */}
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             {quickLinks.map((link, index) => (
//               <li key={index}>
//                 <a href={link.href} className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
//                   {link.icon} {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         {/* Our Team */}
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-lg font-semibold mb-4">Our Team</h3>
//           <ul className="space-y-2">
//             {teamMembers.map((member, index) => (
//               <li key={index}>
//                 <a href={member.href} className="text-gray-300 hover:text-blue-400 transition-colors">
//                   {member.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         {/* Get in Touch */}
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
//           <div className="flex space-x-4 mb-4">
//             <a href={socialLinks.facebook} className="text-2xl text-gray-300 hover:text-blue-600 transition-colors">
//               <FaFacebook />
//             </a>
//             <a href={socialLinks.instagram} className="text-2xl text-gray-300 hover:text-pink-500 transition-colors">
//               <FaInstagram />
//             </a>
//             <a href={socialLinks.linkedin} className="text-2xl text-gray-300 hover:text-blue-700 transition-colors">
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="bg-gray-900 text-center py-4 mt-8">
//         <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved | <a href="#" className="hover:underline">Terms & Conditions</a> | <a href="#" className="hover:underline">Privacy Policy</a></p>
//       </div>
//     </footer>
//   );
// }
