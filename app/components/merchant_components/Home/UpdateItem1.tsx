"use client";

import React, { useEffect } from "react";
import UnCheckedSVG from "./UnCheckedSVG";
import { GoCheckCircleFill } from "react-icons/go";
import { openStoreCreationOverlay } from "@/app/redux/feature/storeCreationSlice";
import { AppDispatch } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { log } from "console";
import { setTotalUpdates, setUpdate1 } from "@/app/redux/feature/home-slice";

const UpdateItem1 = () => {
  const dispatch = useDispatch<AppDispatch>();

  //ACCESSING STORE DETAILS AND ACTIVE STORE INFORMATION
  const { stores } = useSelector((store: any) => store.merchantData);

  const storeLength = stores.length;

  useEffect(() => {
    console.log("useEffect called for update 1");
    if (storeLength > 0) {
      dispatch(setUpdate1());
      dispatch(setTotalUpdates());
    }
  }, [stores]);

  return (
    <div className={`flex items-center gap-4 mb-4 border-b py-2`}>
      {storeLength > 0 ? (
        <GoCheckCircleFill className="text-orange-500" fontSize={24} />
      ) : (
        <UnCheckedSVG />
      )}
      <div className="flex flex-col md:flex-row md:items-center gap-1 justify-between flex-1">
        <div>
          <h2 className="text-[#444748] font-bold text-sm md:text-base">
            Name your store
          </h2>
          <p className="text-xs md:text-sm xl:text-base">
            A properly named store is a store already set up for success
          </p>
        </div>

        <button
          disabled={storeLength > 0 ? true : false}
          className="border-2 py-[0.5em] rounded-md flex items-center justify-center px-1 cursor-pointer hover:text-[#F9F9F9] hover:bg-orange-500 hover:shadow-md hover:shadow-orange-500 hover:border-orange-500"
          onClick={() => dispatch(openStoreCreationOverlay())}
        >
          <span className="text-xs md:text-sm font-medium">Name Store</span>
        </button>
      </div>
    </div>
  );
};

export default UpdateItem1;
