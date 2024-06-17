"use client";
import React from "react";
import {
  Layout,
  OverviewChart,
  SideStatusTags,
  OrdersTable,
  NewPie,
} from "@/app/components";
import TransactionOverview from "./TransactionOverview";
import Trasnsaction from "./Trasnsaction";
import Header from "@/app/components/merchant_components/Header";

import { SIDEBAR_TAGS_DATA } from "@/app/components/utils/data";

type HeaderData = {
  title: string;
  text: string;
};

const SalesContainer = () => {
  const HeaderData: HeaderData = {
    title: "Sales",
    text: "",
  };


  const orders: any[] = [];
  return (
    <>
      <Header {...HeaderData} />
      <div className="bg-white text-black  gap-5 py-5 flex">
        <div className="flex flex-col gap-5 flex-1 w-full">
          <div>
            <TransactionOverview />
          </div>

          <div className="flex flex-col lg:flex-row gap-5 w-full xl:hidden">
            {/* mobile status Tags */}
            <section className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <article className="w-[48%] flex gap-1 border border-[#979DA0] items-center p-2 rounded-2xl shadow-sm">
                  <div
                    className={`h-8 w-8 lg:h-14 lg:w-14 text-xl md:text-3xl rounded-full flex items-center justify-center`}
                    style={{
                      backgroundColor: SIDEBAR_TAGS_DATA[0].bgColor,
                    }}
                  >
                    {SIDEBAR_TAGS_DATA[0].icon}
                  </div>
                  <div className="">
                    <h2 className="text-sm text-[#979DA0]">
                      {SIDEBAR_TAGS_DATA[0].label}
                    </h2>
                    <div className="flex items-center gap-2">
                      <h1 className="text-xs font-bold md:text-xl">
                        {SIDEBAR_TAGS_DATA[0].price}
                      </h1>
                      <span className="text-[#979DA0] text-[0.6rem]">
                        {SIDEBAR_TAGS_DATA[0].quote}
                      </span>
                    </div>
                  </div>
                </article>
                <article className="w-[48%] flex gap-1 border border-[#979DA0] items-center p-2 rounded-2xl shadow-sm">
                  <div
                    className={`h-8  w-8  lg:h-14 lg:w-14 text-xl md:text-3xl rounded-full flex items-center justify-center`}
                    style={{
                      backgroundColor: SIDEBAR_TAGS_DATA[1].bgColor,
                    }}
                  >
                    {SIDEBAR_TAGS_DATA[1].icon}
                  </div>
                  <div className="">
                    <h2 className="text-sm text-[#979DA0]">
                      {SIDEBAR_TAGS_DATA[1].label}
                    </h2>
                    <div className="flex items-center gap-2">
                      <h1 className="text-xs font-bold md:text-xl">
                        {SIDEBAR_TAGS_DATA[1].price}
                      </h1>
                      <span className="text-[#979DA0] text-[0.6rem]">
                        {SIDEBAR_TAGS_DATA[1].quote}
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              <div className="flex items-center justify-center">
                <article className="w-[48%] flex gap-1 border border-[#979DA0] items-center p-2 rounded-2xl shadow-sm">
                  <div
                    className={`h-8  w-8  lg:h-14 lg:w-14 text-xl md:text-3xl rounded-full flex items-center justify-center`}
                    style={{
                      backgroundColor: SIDEBAR_TAGS_DATA[2].bgColor,
                    }}
                  >
                    {SIDEBAR_TAGS_DATA[2].icon}
                  </div>
                  <div className="">
                    <h2 className="text-sm text-[#979DA0]">
                      {SIDEBAR_TAGS_DATA[2].label}
                    </h2>
                    <div className="flex items-center gap-2">
                      <h1 className="text-xs font-bold md:text-xl">
                        {SIDEBAR_TAGS_DATA[2].price}
                      </h1>
                      <span className="text-[#979DA0] text-[0.6rem]">
                        {SIDEBAR_TAGS_DATA[2].quote}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            
          </div>

          <Trasnsaction
            orders={orders}
            OrderType="Transaction History"
            lastUpadted="Updated 20 minutes ago"
          />
        </div>

        <div className="hidden xl:flex flex-col gap-5 w-full xl:w-fit">
          <SideStatusTags />
          
        </div>
      </div>
    </>
  );
};

export default SalesContainer;
