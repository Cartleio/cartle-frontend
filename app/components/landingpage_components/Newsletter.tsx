import React from 'react'

const Newsletter = () => {
  return (
    <section className="bg-[#FFF4E9]">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
     <div className="mx-auto max-w-screen-md sm:text-center">
         <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl text-gray-400">Sign up for our newsletter</h2>
         <p className="mx-auto mb-8 max-w-2xl font-light  md:mb-12 sm:text-xl text-gray-500">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
         <form action="#">
             <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                 <div className="relative w-full">
                     <label  className="hidden mb-2 text-sm font-medium text-gray-900 text-gray-900">Email address</label>
                     <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                     <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.99219 6.09494L9.98919 10.0929L17.9862 6.09494C17.9566 5.58538 17.7333 5.10643 17.362 4.75616C16.9907 4.4059 16.4996 4.21084 15.9892 4.21094H3.98919C3.47877 4.21084 2.98763 4.4059 2.61637 4.75616C2.2451 5.10643 2.02179 5.58538 1.99219 6.09494Z" fill="#FF7600"/>
                        <path d="M17.9922 8.32812L9.99219 12.3281L1.99219 8.32812V14.2101C1.99219 14.7406 2.2029 15.2493 2.57797 15.6243C2.95305 15.9994 3.46175 16.2101 3.99219 16.2101H15.9922C16.5226 16.2101 17.0313 15.9994 17.4064 15.6243C17.7815 15.2493 17.9922 14.7406 17.9922 14.2101V8.32812Z" fill="#FF7600"/>
                        </svg>

                     </div>
                     <input className="block p-3 py-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 bg-white border-gray-200 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required/>
                 </div>
                 <div>
                     <button type="submit" className="py-4 px-5 w-full text-sm font-medium text-center text-white rounded-lg  cursor-pointer  sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-indigo-300 bg-gradient-to-r from-red-500 via-orange-600 to-purple-500 hover:bg-indigo-700 focus:ring-indigo-800"style={{background:"#FF7600"}}>Subscribe</button>
                 </div>
             </div>
         </form>
     </div>
 </div>
</section>
  )
}

export default Newsletter