import React from 'react';
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import Logo from '../assets/RIVVI_Logo_1080x1080-05.png'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <a href='https://rivvi.com'><img src={Logo} alt='/' className='max-w-[250px] max-h-[250px]'/></a>
        <p className=''>Transforming businesses with autonomous payroll, flexible pay options, and seamless money management for happier employees and higher efficiency.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <a href='/'><FaFacebookSquare size={30} /></a>
            <a href='/'><FaInstagram size={30} /></a>
            <a href='/'><FaTwitterSquare size={30} /></a>
            <a href='https://github.com/Pravesh-mansharamani/rivvi-chatbot'><FaGithubSquare size={30} /></a>
            <a href='https://www.linkedin.com/company/rivvi/'><FaLinkedin size={30} /></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Analytics</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Marketing</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Commerce</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Pricing</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Documentation</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Guides</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm hover:text-[#5271ff]'>About</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Blog</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Jobs</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Press</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Claim</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Policy</li>
            <li className='py-2 text-sm hover:text-[#5271ff]'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;