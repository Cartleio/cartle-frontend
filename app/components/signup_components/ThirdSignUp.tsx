"use client";
import { HiCheck } from "react-icons/hi";
import { useState } from "react";
import style from "../../../styles/Home.module.css";
type FormDataType = {
  firstName: string;
  storeName: string;
  storeAddress: string;
  phoneNumber: number | undefined;
  sellingItems: string[];
  goods: string[];
};

const ThirdSignUp = ({
  formData,
  setFormData,
  checkboxs2,
  setboxCondition2,
  goods,
}: any) => {
  const setGoodsCheck = (index: number): void => {
    setboxCondition2((previousCheckBoxes: boolean[]) => {
      const newCheckBoxes = [...previousCheckBoxes];
      newCheckBoxes[index] = !newCheckBoxes[index];
      return newCheckBoxes;
    });
  };

  const handleItemClick2 = (item: string, index: number): void => {
    setGoodsCheck(index);
    if (formData.goods.includes(item)) {
      setFormData({
        ...formData,
        goods: formData.goods.filter((f: string) => f !== item),
      });
    } else {
      setFormData({
        ...formData,
        goods: [...formData.goods, item],
      });
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

      <p className="mt-2 font-semibold">how will you get these goods?</p>

      <div className=" grid grid-cols-2 md:grid-cols-3 py-5">
        {goods.map((item: string, index: number) => (
          <div
            className="flex cursor-pointer mb-6 w-fit"
            onClick={() => handleItemClick2(item, index)}
            key={index}
          >
            <p
              className={`h-5 w-5 border ${
                checkboxs2[index]
                  ? "bg-orange-500 border-white"
                  : "border-black"
              } mr-3 rounded-sm flex items-center justify-center`}
            >
              {checkboxs2[index] && <HiCheck className="text-white" />}
            </p>
            <span className="text-sm md:text-base">{item}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThirdSignUp;
