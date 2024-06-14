"use client";
import { SIDEBAR_TAGS_DATA } from "@/app/components/utils/data";
import React from "react";

function SideStatusTags() {
  return (
    <div className=" grid grid-cols-2 justify-items-center md:flex md:flex-col gap-3 md:gap-4">
      {SIDEBAR_TAGS_DATA.map((item, index) => (
        <div
          className="flex gap-1 md:4 border  items-center p-3 lg:p-4 rounded-2xl shadow-sm"
          key={index}
        >
          <div
            className={`h-10 w-10 lg:h-14 lg:w-14 text-xl md:text-3xl rounded-full flex items-center justify-center`}
            style={{
              backgroundColor: item.bgColor,
            }}
          >
            {item.icon}
          </div>
          <div className="">
            <h2 className="text-md text-[#979DA0]">{item.label}</h2>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold md:text-xl">{item.price}</h1>
              <span className="text-[#979DA0] text-xs">{item.quote}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideStatusTags;
