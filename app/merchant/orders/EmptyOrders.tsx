"use client";
import Link from "next/link";
import React from "react";

const EmptyOrders = () => {
  return (
    <div className="rounded-xl  min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-150px)] flex flex-col items-center justify-center gap-3 py-10 border md:border-none my-10 p-4">
      <img src="/store_img.png" alt="store Logo" className="w-52 md:w-auto" />
      <div className="flex flex-col gap-3 items-center text-center">
        <h1 className="text-[#444748] font-bold text-xl">
          Your orders will show here
        </h1>
        <p className="text-[#979DA0] max-w-xl">
          See who has made payments and which orders are pending. You need to
          put up products for sale to get orders.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/merchant/add_product">
          <button className="border bg-[#FF7900] text-white text-xs md:text-base md:w-48  rounded-lg py-2 font-bold px-3">
            Create an Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyOrders;
