import Link from "next/link";
import React from "react";
import UnCheckedSVG from "./UnCheckedSVG";
import { GoCheckCircleFill } from "react-icons/go";

const UpdateItem2 = () => {
  return (
    <div className={`flex items-center gap-4 mb-4 border-b py-2`}>
      {/* <GoCheckCircleFill className="text-orange-500" fontSize={24} /> */}
      <UnCheckedSVG />

      <div className="flex flex-col md:flex-row md:items-center gap-1 justify-between flex-1">
        <div>
          <h2 className="text-[#444748] font-bold text-sm md:text-base">
            Customize your online store
          </h2>
          <p className="text-xs md:text-sm xl:text-base">
            Add your logo and choose a theme that highlights your brand
          </p>
        </div>
        <div>
          <a
            href="#themes"
            className="border-2 py-[0.5em] rounded-md flex items-center justify-center px-1 cursor-pointer hover:text-[#F9F9F9] hover:bg-orange-500 hover:shadow-md hover:shadow-orange-500 hover:border-orange-500"
          >
            <span className="text-xs md:text-sm font-medium">
              Customize store
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem2;
