import React from 'react'
import Image from 'next/image'
import FirstFeature from '../../assets/firstFeature.png'
import SecondFeature from '../../assets/secondFeature.png'
import FourthFeature from '../../assets/4thImage.png'
import ThirdFeature from '../../assets/thirdImage.png'
import FifthFeature from '../../assets/fifthImage.png'
import LayoutEffect from './LayoutEffect'
export const Features = () => {
  return (
    <section className=" py-12 bg-[transparent] px-3 lg:px-20">

            <div className="grid gap-4 lg:text-center">
                <h2 className="text-3xl sm:text-2xl font-bold leading-[120%] text-black  lg:text-5xl lg:leading-[120%]">
                Discover Why other entrepreneurs like you choose<span className="text-[#FF7600]"> Cartle?</span>
                </h2>
            </div>

            
    <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0 translate-y-6"
        }}
        >
        <section className="">
          <div className="flex flex-col-reverse md:flex-row items-center py-4 px-4 mx-auto max-w-screen-xl xl:gap-1 md:grid md:grid-cols-2  lg:px-20">
            <div className='order-1 md:order-2 sm:order-1 p-4 lg:p-6' >
            <div className=" lg:ml-20 p-4 lg:p-10 rounded-xl mt-4 border border-[#FF7600]  shadow-md" style={{ boxShadow: "0px 4px 6px rgba(255, 107, 58, 0.3), 0px 1px 3px rgba(255, 107, 58, 0.3), 0px 0px 6px rgba(255, 107, 58, 0.3), 0px 0px 3px rgba(255, 107, 58, 0.3)",}}>
    <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-black">Boost Your Online Presence</h2>
    <p className="mb-6 font-light text-gray-500 md:text-lg">Create a fully functional storefront for your business in just 60 seconds. Start selling to everyone around the globe.</p>
</div>
            </div>
          

            <div className="order-2 md:order-1 sm:order-2 mt-4 md:mt-0">
              <Image
                className="max-w-full h-auto lg:max-w-2xl"
                src={FirstFeature}
                alt="NestSite Logo"
                width={600}
              />
            </div>
          </div>
        </section>
        </LayoutEffect>
        <LayoutEffect
            className="duration-1000 delay-300"
            isInviewState={{
                trueState: "opacity-1",
                falseState: "opacity-0 translate-y-6"
            }}
        >
            <section>
              <div className="flex flex-col-reverse md:flex-row items-center py-4 px-4 mx-auto max-w-screen-xl xl:gap-1 md:grid md:grid-cols-2 sm:py-4 lg:px-20">
                <div className="order-1 md:order-1 sm:order-1 mt-0 md:mt-0 p-4 lg:p-10 rounded-xl border border-[#FF7600]"style={{ boxShadow: "0px 4px 6px rgba(255, 107, 58, 0.3), 0px 1px 3px rgba(255, 107, 58, 0.3), 0px 0px 6px rgba(255, 107, 58, 0.3), 0px 0px 3px rgba(255, 107, 58, 0.3)" }}>
                  <h2 className="mb-4 text-2xl  tracking-tight font-extrabold text-black ">Manage Everything in One Place</h2>

                  <p className='text-gray-800 mb-6 md:text-lg'>
                  Manage everything in one place
Automate everything. Track your sales, orders, products, abandoned cart and Inventory. Recieve payments, send receipts and ship products, all from your device.
                </p>
                </div>
                <div className="order-2 md:order-1 sm:order-2 mt-4 md:mt-0">
                <Image
                  className="w-full h-full"
                  src={SecondFeature}
                  alt="NestSite Logo"
                  
                />
                </div>
              </div>
            </section>
            </LayoutEffect>

            <LayoutEffect
              className="duration-1000 delay-300"
              isInviewState={{
                  trueState: "opacity-1",
                  falseState: "opacity-0 translate-y-6"
              }}
          >    
          <section className="">
                    <div className="flex flex-col-reverse md:flex-row items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-1 md:grid md:grid-cols-2  lg:px-20">
                      <div className="order-1 md:order-2 sm:order-1 lg:ml-20 p-4 lg:p-10 rounded-xl mt-4 border border-[#FF7600]"style={{ boxShadow: "0px 4px 6px rgba(255, 107, 58, 0.3), 0px 1px 3px rgba(255, 107, 58, 0.3), 0px 0px 6px rgba(255, 107, 58, 0.3), 0px 0px 3px rgba(255, 107, 58, 0.3)" }}>
                        <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-black">Make your customers loyal</h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg">
                        Make your customers loyal to you - 
                            With a comprehensive database, you
                            can send emails, thank you notes, promotions and discounts to your customers.

                        </p>
                      </div>
                      <div className="order-2 md:order-1 sm:order-2 mt-4 md:mt-0">
                        <Image
                          className="max-w-full h-auto lg:max-w-2xl"
                          src={ThirdFeature}
                          alt="NestSite Logo"
                          width={600}
                        />
                      </div>
                    </div>
                  </section>
          </LayoutEffect>
          <LayoutEffect
              className="duration-1000 delay-300"
              isInviewState={{
                  trueState: "opacity-1",
                  falseState: "opacity-0 translate-y-6"
              }}
          > 
            <section>
            <div className="flex flex-col-reverse md:flex-row items-center py-4 px-4 mx-auto max-w-screen-xl xl:gap-1 md:grid md:grid-cols-2 sm:py-4 lg:px-20">
                <div className="order-1 md:order-1 sm:order-1 mt-0 md:mt-0 p-4 lg:p-10 rounded-xl border border-[#FF7600]"style={{ boxShadow: "0px 4px 6px rgba(255, 107, 58, 0.3), 0px 1px 3px rgba(255, 107, 58, 0.3), 0px 0px 6px rgba(255, 107, 58, 0.3), 0px 0px 3px rgba(255, 107, 58, 0.3)" }}>
                  <h2 className="mb-4 text-xl  tracking-tight font-extrabold text-black ">Custom Theme</h2>

                  <p className='text-gray-800 md:text-lg'>
                  Keep more eyes glued to your store with custom website themes, designed to increase your sales and optimize checkout process.

                  </p>
                </div>
                <div className="order-2 md:order-1 sm:order-2 mt-4 sm:mt-10">
                   <Image
                  className="w-full h-full"
                  src={FourthFeature}
                  alt="NestSite Logo"
                  
                />
                </div>
              </div>
            </section>

              </LayoutEffect>
        <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0 translate-y-6"
        }}
    > 
        <section className="">
          <div className="flex flex-col-reverse md:flex-row items-center py-4 px-4 mx-auto max-w-screen-xl xl:gap-1 md:grid md:grid-cols-2  lg:px-20">
            <div className="order-1 md:order-2 sm:order-1 lg:ml-20 p-4 lg:p-10 rounded-xl mt-4 border border-[#FF7600]"style={{ boxShadow: "0px 4px 6px rgba(255, 107, 58, 0.3), 0px 1px 3px rgba(255, 107, 58, 0.3), 0px 0px 6px rgba(255, 107, 58, 0.3), 0px 0px 3px rgba(255, 107, 58, 0.3)" }}>
              <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-black">Custom App Integration</h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg">Do you want to integrate more tools to your cartle website? We&apos;ve got you covered. You can integrate several apps to your store. Guess what! You can send us a request if you to integrate any app not already in our platform and we will get it done for you.</p>
            </div>
            <div className="order-2 md:order-1 sm:order-2 mt-4 md:mt-0">
              <Image
                className="max-w-full h-auto lg:max-w-2xl"
                src={FifthFeature}
                alt="NestSite Logo"
                width={600}
              />
            </div>
          </div>
        </section>
        </LayoutEffect>

    </section>
  )
}
