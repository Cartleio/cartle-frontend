import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { LuMails } from "react-icons/lu";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import style from "../../../styles/Home.module.css";

import Image from 'next/image';
import Logo from '../../assets/cartle white 1.png'

const Footer = () => {

  type SocialIcon = {
    address: string;
    icon: JSX.Element;
  };

  const footerNavs = [
    {
      href: 'javascript:void()',
      name: 'About Us'
    },
    {
      href: 'javascript:void()',
      name: 'Contact '
    },
    {
      href: 'javascript:void()',
      name: 'Privacy policy'
    },
    {
      href: 'javascript:void()',
      name: 'Sitemap'
    },
    {
      href: 'javascript:void()',
      name: 'Terms of use'
    }
  ];

  const socialIcon: SocialIcon[] = [
    { address: "www.facebook.com", icon: <AiOutlineFacebook /> },
    { address: "www.facebook.com", icon: <RiTwitterXFill /> },
    { address: "www.facebook.com", icon: <AiOutlineInstagram /> },
    { address: "www.facebook.com", icon: <AiOutlineWhatsApp /> },
  ];


  return (
    <div className='bg-[#FF7600] px-4 py-5 md:px-8'>

      <div className="mx-auto">

        <div className="flex items-center gap-4 my-8 justify-center">
        <div className="bg-white p-8 rounded-md lg:mr-8 shadow-sm">
            <div className="flex items-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" className='mr-4' fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5685 20.7938C22.8277 23.045 19.9253 24.1677 17.8517 23.9805C15.0197 23.7245 11.9381 22.2224 9.59888 20.568C6.16048 18.136 2.93967 14.3741 1.06287 10.3821C-0.263527 7.56128 -0.561124 4.09312 1.41168 1.52192C2.14128 0.571519 2.93007 0.0639317 4.11567 0.00473173C5.76047 -0.0752683 5.99088 0.865694 6.55568 2.33129C6.97648 3.42729 7.53807 4.54529 7.85167 5.68129C8.43887 7.80129 6.38607 7.8899 6.12687 9.6227C5.96527 10.7155 7.29008 12.181 7.88848 12.9602C9.06128 14.4866 10.4709 15.8031 12.0613 16.8047C12.9717 17.3791 14.4421 18.4142 15.4853 17.843C17.0917 16.963 16.9397 14.2543 19.1861 15.1711C20.3493 15.6447 21.4757 16.3282 22.5861 16.9266C24.3029 17.8498 24.2229 18.8066 23.5685 20.7938C24.0581 19.309 23.0789 22.2786 23.5685 20.7938Z" fill="#FF7600"/>
              </svg>

              <div className='flex flex-col'>
                <span >Tel</span>
                <span className='font-semibold'>310-437-2766</span>
              </div>
            </div>
            <div className="flex items-center mb-4">
            <svg width="18" height="24" viewBox="0 0 18 24" className='mr-4' fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0C4.02975 0 0 4.02975 0 9C0 10.9571 0.641625 12.753 1.70813 14.2238C1.72725 14.259 1.73025 14.2984 1.752 14.3321L7.752 23.3321C8.03025 23.7495 8.499 24 9 24C9.501 24 9.96975 23.7495 10.248 23.3321L16.248 14.3321C16.2701 14.2984 16.2727 14.259 16.2919 14.2238C17.3584 12.753 18 10.9571 18 9C18 4.02975 13.9703 0 9 0ZM9 12C7.34325 12 6 10.6567 6 9C6 7.34325 7.34325 6 9 6C10.6567 6 12 7.34325 12 9C12 10.6567 10.6567 12 9 12Z" fill="#FF7600"/>
              </svg>
              <div className='flex flex-col'>
                <span >Address</span>
                <span className='font-semibold'>Lagos, Nigeria.</span>
              </div>
             
            </div>
            <div className="flex items-center">
            <svg width="20" height="16" viewBox="0 0 20 16" className='mr-4' fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 1V5L10 9L0 5V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1ZM0 7.154V15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16H19C19.2652 16 19.5196 15.8946 19.7071 15.7071C19.8946 15.5196 20 15.2652 20 15V7.154L10 11.154L0 7.154Z" fill="#FF7600"/>
              </svg>
              <div className='flex flex-col'>
                <span >Email</span>
                <span className='font-semibold'>info@thecartle.com</span>
              </div>
              
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h1
                className={`t
                ext-lg text-zinc-700 font-bold ${style.baskerville}`}
              >
                  <Image 
                  className="h-8 lg:h-10 my-8 mt-4 w-auto " 
                  src={Logo} 
                  alt="Cartle Logo"
                  width={160.8} 
                  height={60.9} /> 
              </h1>
              <p className="text-white text-lg">Make your sales an easier and more organised task.</p>
            </div>
            <div className="flex">
              {socialIcon.map(({ icon, address }, index) => (
                <div
                  className="w-10 h-10 mr-4 bg-white text-primary-500 flex items-center justify-center rounded-[50%]"
                  key={index}
                >
                  <a href={address} target="blank" className="text-primary-500">
                    {icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li key={idx} className="hover:text-gray-800">
              <a href={item.href} className='text-white'>{item.name}</a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Footer;
