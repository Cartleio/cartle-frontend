"use client";
import React from "react";
import Layout from "../../components/merchant_components/Layout";
import Header from "../../components/merchant_components/Header";
import Link from "next/link";

type HeaderData = {
  title: string;
  text: string;
};
function Customers() {
  const HeaderData: HeaderData = {
    title: "Customers",
    text: "All information on your customers",
  };
  return (
    <Layout>
      <Header {...HeaderData} />
      <div className=" rounded-xl my-10 min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-150px)] flex flex-col items-center justify-center gap-3 py-10 text-center border">
        <img src="/store_img.png" alt="" className="w-52 md:w-auto" />
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-[#444748] font-bold  text-base md:text-xl">
            You don’t have any customers yet
          </h1>
          <p className="text-[#979DA0] text-sm md:text-base">
            All you need to know about your customers in one place
          </p>
        </div>
        <div className="flex gap-4">
          <button className="border border-[#FF7900] text-[#FF7900] px-3 text-sm md:text-base md:w-48 rounded-lg py-2 font-bold">
            Go to categories
          </button>

          <Link href="/merchant/add_customers">
            <button className="border bg-[#FF7900] text-white px-3 text-sm md:text-base md:w-48  rounded-lg py-2 font-bold">
              Add Customers
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Customers;
