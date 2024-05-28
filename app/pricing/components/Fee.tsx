"use client";
import React from "react";

function Fee({ plans }: { plans: any }) {
  return (
    <>
      <div className="grid grid-cols-5 w-full">
        <div className=" w-full col-start-1 col-span-1 px-4 py-4">
          <p className="text-sm md:text-base">Transaction Fee</p>
        </div>

        {plans?.map((plan: any) => (
          <div
            key={plan?.id}
            className={`${
              plan.mostPopular && "bg-[#FFF1E680] "
            } py-4 w-full text-center text-sm md:text-base `}
          >
            {`${plan?.transactionFeePercent}%`}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 w-full">
        <div className=" w-full col-start-1 col-span-1 px-4 py-4">
          <p className="text-sm md:text-base">Commission</p>
        </div>

        {plans?.map((plan: any) => (
          <div
            key={plan?.id}
            className={`${
              plan.mostPopular && "bg-[#FFF1E680] "
            } py-4 w-full text-center text-sm md:text-base `}
          >
            {`${plan?.productCommission}%`}
          </div>
        ))}
      </div>
    </>
  );
}

export default Fee;
