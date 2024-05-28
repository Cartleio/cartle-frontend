"use client";
import React from "react";

function Service({ plans }: { plans: any }) {
  return (
    <>
      <div className="grid grid-cols-5 w-full ">
        <div className="w-full px-4 py-4">
          <p className="text-sm md:text-base">Number of Products</p>
        </div>
        {plans?.map((plan: any) => (
          <div
            className={`${
              plan.mostPopular && "bg-[#FFF1E680] "
            } py-4 w-full text-center text-sm md:text-base `}
            key={plan?.id}
          >
            {plan?.maxProductsPerStore}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 w-full">
        <div className=" w-full px-4 py-4">
          <p className="text-sm md:text-base">Maximum stores</p>
        </div>

        {plans?.map((plan: any) => (
          <div
            className={`${
              plan.mostPopular && "bg-[#FFF1E680] "
            } py-4 w-full text-center text-sm md:text-base `}
            key={plan?.id}
          >
            {plan?.maxStores}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 w-full">
        <div className=" w-full col-start-1 col-span-1 px-4 py-4">
          <p className="text-sm md:text-base">Custom Domain</p>
        </div>

        {plans?.map((plan: any) => (
          <div
            className={`${
              plan.mostPopular && "bg-[#FFF1E680]"
            } py-4 w-full text-center text-sm md:text-base `}
            key={plan?.id}
          >
            {plan?.allowsCustomDomain ? (
              <div className="w-full flex items-center justify-center">
                <img src="/Check_Mark.png" className="h-4 w-4" alt="true" />
              </div>
            ) : (
              <div className="w-full flex items-center justify-center">
                <img src="/Cross_Mark.png" className="h-4 w-4" alt="true" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Service;
