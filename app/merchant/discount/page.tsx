"use client";
import Header from "@/app/components/merchant_components/Header";
import Layout from "@/app/components/merchant_components/Layout";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import Link from "next/link";

type HeaderData = {
  title: string;
  text: string;
};
function Discount() {
  const [toggleOverLay, setToggleOverLay] = useState(false);

  const HeaderData: HeaderData = {
    title: "Discount",
    text: "Discounts added to your products",
  };

  return (
    <Layout>
      <div className="relative">
        <Header {...HeaderData} />
        
        <div className=" rounded-xl my-10 min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-150px)] flex flex-col items-center justify-center gap-3 py-10 px-3 text-center border ">
          <img src="/store_img.png" alt="" className="w-52 md:w-auto" />
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-[#444748] font-bold  text-base md:text-xl">
              Want to add discounts to your products?
            </h1>
            <p className="text-[#979DA0] text-sm md:text-base">
              Manage and create discounts that you can apply to your products
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setToggleOverLay(true)}
              className="border bg-[#FF7900] text-white px-3 text-sm md:text-base md:w-48  rounded-lg py-2 font-bold"
            >
              Create discounts
            </button>
          </div>
        </div>

        {/* overlay */}
        <section
          className={`min-h-screen absolute ${
            toggleOverLay ? "block" : "hidden"
          } top-0 left-0 bg-white w-full`}
        >
          <div className="flex items-center justify-between w-full py-10">
            <h1 className="font-bold text-2xl">Select discount type</h1>
            <IoMdClose
              className="text-xl text-black font-bold"
              onClick={() => setToggleOverLay(false)}
            />
          </div>

          <article className="flex items-center justify-between border-b py-5">
            <div>
              <h1>Auction products</h1>
              <p className="text-[#979DA0]">
                Put some products up for sale to the highest bidder
              </p>
            </div>
            <div className="w-fit">
              <IoIosArrowForward fontSize={25} />
            </div>
          </article>

          <Link href={"/merchant/voucher_codes"}>
            <article className="flex items-center justify-between border-b py-5">
              <div>
                <h1>Voucher codes</h1>
                <p className="text-[#979DA0]">
                  Add codes to products that can reduce the customer’s price on
                  checkout
                </p>
              </div>
              <IoIosArrowForward fontSize={25} />
            </article>
          </Link>
        </section>
      </div>
    </Layout>
  );
}

export default Discount;
