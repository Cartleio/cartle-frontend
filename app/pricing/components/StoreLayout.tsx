"use client";
import React from "react";

function Service({ plans }: { plans: any }) {
  return (
    <>
      <div className="grid grid-cols-5 w-full">
        <div className=" w-full px-4 py-4">
          <p className="text-sm md:text-base">Themes</p>
        </div>

        {plans?.map((plan: any) => (
          <div
            className={`${
              plan.mostPopular && "bg-[#FFF1E680] "
            } py-4 w-full text-center text-sm md:text-base `}
            key={plan?.id}
          >
            {plan?.maxStoreThemes}
          </div>
        ))}
      </div>
    </>
  );
}

export default Service;
