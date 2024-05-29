import React from 'react'

const AdSupport = () => {
  return (
    <>
      <section className="flex items-center justify-center  py-12  lg:px-20 ">
          <section className="m-2    max-w-screen-xl bg-gradient-to-r from-[#FF7600]  to-[#D94719] text-white">
          <div className="py-8 px-4  max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold leading-tight  ">
              Sell More With Cartle
              </h2>
              <p className="mb-6 font-light  md:text-lg">
              We have all the tools you need. Whether you want to sell just down the street or around the world. We got you covered!

              </p>
              
              <div className="mt-4 inline-flex w-full bg-white py-2 px-6 rounded-lg shadow-lg mt-6 sm:w-auto">
                        <a href="/auth/register" className="inline-flex items-center justify-center w-full py-2 px-4 text-[#FF7600] font-medium duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg hover:shadow-none bg-tertiary">
                            Get started for free
                        </a>
                    </div>
            </div>
          </div>
        </section>
      </section>
   
    </>
  )
}

export default AdSupport