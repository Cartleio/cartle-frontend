// import React from 'react'

// const Footer = () => {
//   const footerNavs = [
//     {
//         href: 'javascript:void()',
//         name: 'About Us'
//     },
//     {
//         href: 'javascript:void()',
//         name: 'Contact '
//     },
//     {
//         href: 'javascript:void()',
//         name: 'Privacy policy'
//     },
//     {
//         href: 'javascript:void()',
//         name: 'Sitemap'
//     },

//     {
//         href: 'javascript:void()',
//         name: 'Terms of use'
//     }
// ]
//   return (
//     <div className='bg-[#FF7600]  px-4 py-5  md:px-8'>

//          <div className="mx-auto">

//             <div className="flex items-center justify-center">
//                   <div className="bg-white rounded-xl lg:mr-8 shadow-md">
//                         demo
//                   </div>

//                   <div>

//                     <p>Make your sales an easier and more organised task.</p>
//                   </div>
//             </div>
//             <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
//                     {
//                         footerNavs.map((item, idx) => (
//                             <li className=" hover:text-gray-800">
//                                 <a key={idx} href={item.href}>
//                                     { item.name }
//                                 </a>
//                             </li>
//                         ))
//                     }
//                 </ul>
//          </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';

const Footer = () => {
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

  return (
    <div className='bg-[#FF7600] px-4 py-5 md:px-8'>

      <div className="mx-auto">

        <div className="flex items-center justify-center">
          <div className="bg-white rounded-xl lg:mr-8 shadow-md">
            demo
          </div>

          <div>
            <p>Make your sales an easier and more organized task.</p>
          </div>
        </div>

        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li key={idx} className="hover:text-gray-800">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Footer;
