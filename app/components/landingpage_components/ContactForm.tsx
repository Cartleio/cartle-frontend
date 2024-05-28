import React from 'react';
import Image from 'next/image';
import ContactImg from '../../assets/contactImage.png';

const ContactForm = () => {
  return (
   <div className="mt-20">
     <div className="flex flex-col md:flex-row lg:m-20 mt-20 items-center rounded-md shadow-lg justify-center items-center h-screen ">
     <div className="w-full md:w-1/2 h-full">
        {/* Left side with image */}
       <div className="h-full relative">
          <Image
             className="object-cover w-full h-full rounded-l-md"
            src={ContactImg}
            alt="Contact Image"
            layout="fill"
          />
        </div>
      </div>
        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-4">
        {/* Right side with form */}
        <form className="w-full">
          <div className="mb-4 px-6">
            <div className="mb-6">
              <h2 className="block text-gray-700 text-xl lg:text-4xl mb-2" >
                      Get in touch...
              </h2>
              <p className='text-gray-500'>
              At Cartle, we believe in 24/7 all round assistance. Get in touch. Answer all your questions. Get the help you need.
              </p>
              </div>
            <div className='py-4'>
            <label htmlFor="name" className='text-black font-bold'>First Name</label>
              <input
                className=" appearance-none bg-[#FFFBF6] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                id="name"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className='py-4'>
            <label htmlFor="name" className='text-black font-bold'>Last Name</label>
              <input
                className=" appearance-none bg-[#FFFBF6] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                id="name"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700  font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className=" appearance-none bg-[#FFFBF6] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Enquiry
              </label>
              <textarea
                className=" appearance-none bg-[#FFFBF6] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                id="message"
                rows={8}
                placeholder="Enter your message"
              ></textarea>
            </div>
            </div>
          </form>
         
        </div>
        
      </div>
      <div className="flex justify-center my-20">
            <button
              className="bg-[#FF7600] shadow px-10 py-5 text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Submit your Response
            </button>
          </div>
   </div>

   
  );
};

export default ContactForm;
