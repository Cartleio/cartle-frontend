"use client";
import React from "react";

function Theme({ layoutType }: { layoutType: number }) {
  return (
    <div className="shadow-md md:shadow-none">
      <div className="bg-[#E7E7E7] h-56">
        {/* theme image should go here */}
      </div>
      <div className="p-4">
        <figcaption className="text-[#444748] text-lg">
          {/* Smarthub {layoutType} */}Smarthub
        </figcaption>
        <figure className="text-[#979DA0]  text-sm md:text-base">
          A simple and easy to understand layout for your store
        </figure>
      </div>
    </div>
  );
}

export default Theme;
