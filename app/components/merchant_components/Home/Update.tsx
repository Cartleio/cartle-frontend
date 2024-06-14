"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { AppDispatch } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateItem1,
  UpdateItem2,
  UpdateItem3,
  UpdateItem4,
} from "@/app/components";

function Update() {
  const { totalUpdates } = useSelector((state: any) => state.homeUpdate);
  const [updateValue, setUpdateValue] = useState(0);

  useEffect(() => {
    const totalWidth = 80;
    const updateWidth = (totalUpdates / 4) * totalWidth;
    setUpdateValue(updateWidth);
  }, [totalUpdates]);

  return (
    <section className="text-[#979DA0] border rounded-md p-4 md:p-6 mt-5 my-3">
      <h1 className="font-bold text-[#444748] text-base md:text-lg ">
        Complete your store setup
      </h1>
      <h2 className="text-sm md:text-base">
        Use this guide to set your store up for success!
      </h2>
      <div className="flex items-center justify-center gap-3 w-fit">
        <p className="text-[#444748]">
          <span>{totalUpdates}</span> / 4 completed
        </p>
        <div className="h-1 w-20 bg-[#DBDBDB] rounded-md">
          <div
            style={{ width: `${updateValue}px` }}
            className={`bg-primary-500 rounded-md h-1`}
          ></div>
        </div>
      </div>

      <div className="mt-4">
        <UpdateItem1 />
        <UpdateItem2 />
        <UpdateItem3 />
        <UpdateItem4 />
      </div>
    </section>
  );
}

export default Update;
