"use client";
import React from "react";

function Title({ title }: { title: string }) {
  return (
    <div className="grid grid-cols-5 w-full">
      <div className="bg-[#E7E7E766] py-1 w-full col-start-1 col-span-1 px-4 font-bold text-lg">
        {title}
      </div>
      <div className="bg-[#E7E7E766] py-2 w-full col-start-2 col-span-1 font-bold text-lg"></div>
      <div className="bg-[#E7E7E766]  w-full col-start-3 col-span-1  font-bold text-lg">
        <div className="bg-[#FFF1E680]  py-2 h-full w-full col-start-3 col-span-1  font-bold text-lg"></div>
      </div>
      <div className="bg-[#E7E7E766] py-2 w-full col-start-4 col-span-1 px-4 font-bold text-lg"></div>
      <div className="bg-[#E7E7E766] py-2 w-full col-start-5 col-span-1 px-4 font-bold text-lg"></div>
    </div>
  );
}

export default Title;
