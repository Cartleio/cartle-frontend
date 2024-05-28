"use client";
import Header from "@/app/components/merchant_components/Header";
import Layout from "@/app/components/merchant_components/Layout";
import { openEmailOverlay } from "@/app/redux/feature/overlay-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type HeaderData = {
  title: string;
  text: string;
};

const headerData: HeaderData = {
  title: "Marketing",
  text: "Scale your business!",
};

function Marketing() {
  const dispatch = useDispatch();
  return (
    <Layout>
      <div className="">
        <Header {...headerData} />
        <div className=" rounded-xl my-10 min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-150px)] flex flex-col items-center justify-center gap-3 py-10 px-3 text-center border ">
          <img src="/store_img.png" alt="" className="w-52 md:w-auto" />
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-[#444748] font-bold  text-base md:text-xl">
              Select discount type
            </h1>
            <p className="text-[#979DA0] text-sm md:text-base">
              Explore our various options to scale your business
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="border border-[#FF7900] bg-white hover:bg-[#FF7900] hover:text-white text-[#FF7900] text-xs md:text-base md:w-48  rounded-lg py-2 font-bold px-3"
              onClick={() => dispatch(openEmailOverlay())}
            >
              Email Marketing
            </button>

            {/* <Link href="/merchant/add_product"> */}
            <button className="border border-[#FF7900] bg-white text-[#FF7900] hover:bg-[#FF7900] hover:text-white text-xs md:text-base md:w-48  rounded-lg py-2 font-bold px-3">
              Ad Campaign
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Marketing;
