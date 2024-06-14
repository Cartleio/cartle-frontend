"use client";
import { HiCheck } from "react-icons/hi";
import style from "../../../styles/Home.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import {
  removeArrayField,
  updateField,
} from "@/app/redux/feature/registerSlice";

const SecondSignUp = () => {
  const dispatch = useDispatch<AppDispatch>();

  const selectedItems = useSelector(
    (state: RootState) => state.register.whatDoYouWantToSell
  );

  const regData = useSelector((state: any) => state.register);
  console.log(regData);

  const sellingItems: string[] = [
    "Clothes",
    "Home Decor",
    "Skin Care",
    "Bags",
    "Electronics",
    "Haircare",
    "Shoes",
    "Art work",
    "Kitchen appliances",
    "Jewelry",
    "Cosmetics",
    "Other",
  ];

  const handleItemClick = (item: string, index: number) => {
    if (selectedItems.includes(item)) {
      dispatch(removeArrayField({ field: "whatDoYouWantToSell", value: item }));
    } else {
      dispatch(updateField({ field: "whatDoYouWantToSell", value: item }));
    }
  };

  return (
    <>
      <div>
        <div className="py-4">
          <h1
            className={`text-2xl lg:text-4xl text-primary-500 ${style.baskerville}`}
          >
            Shop Information
          </h1>
          <p className="mt-2 text-[#B6B6B6]">Pick as many as applies to you</p>
        </div>
      </div>

      <p className="mt-2 font-semibold">What do you want to sell?</p>

      <div className="grid grid-cols-2 md:grid-cols-3 py-5">
        {sellingItems.map((item: string, index: number) => (
          <div
            className="flex cursor-pointer mb-6 w-fit"
            onClick={() => handleItemClick(item, index)}
            key={index}
          >
            <p
              className={`h-5 w-5 border ${
                selectedItems.includes(item)
                  ? "bg-orange-500 border-white"
                  : "border-black"
              } mr-3 rounded-sm flex items-center justify-center`}
            >
              {selectedItems.includes(item) && (
                <HiCheck className="text-white" />
              )}
            </p>
            <span className="text-sm md:text-base">{item}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SecondSignUp;
