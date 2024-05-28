"use client";
import { HiCheck } from "react-icons/hi";
import style from "../../../styles/Home.module.css";

const SecondSignUp = ({
  formData,
  setFormData,
  checkboxs,
  setboxCondition,
  sellingItems,
}: any) => {
  const setSellingItemsCheck = (index: number) => {
    setboxCondition((previousCheckBoxes: boolean[]) => {
      let newCheckBoxes = [...previousCheckBoxes];
      newCheckBoxes[index] = !newCheckBoxes[index];
      return newCheckBoxes;
    });
  };

  const handleItemClick = (item: string, index: number) => {
    setSellingItemsCheck(index);
    if (formData.sellingItems.includes(item)) {
      setFormData({
        ...formData,
        sellingItems: formData.sellingItems.filter((f: string) => f !== item),
      });
    } else {
      setFormData({
        ...formData,
        sellingItems: [...formData.sellingItems, item],
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
                checkboxs[index] ? "bg-orange-500 border-white" : "border-black"
              } mr-3 rounded-sm flex items-center justify-center`}
            >
              {checkboxs[index] && <HiCheck className="text-white" />}
            </p>
            <span className="text-sm md:text-base">{item}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SecondSignUp;
