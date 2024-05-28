"use client";
import Link from "next/link";
import { useState } from "react";
import FirstSignUp from "../../components/signup_components/FirstSignUp";
import SecondSignUp from "../../components/signup_components/SecondSignUp";
import ThirdSignUp from "../../components/signup_components/ThirdSignUp";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import styles from "../../../styles/Home.module.css";
import Spinner from "../../components/LoadingSpinner";

type FormDataType = {
  firstName: string;
  storeName: string;
  storeAddress: string;
  phoneNumber: number | undefined;
  sellingItems: string[];
  goods: string[];
};

export default function SignUp(): JSX.Element {
  const [signupIndex, setSignupIndex] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    storeName: "",
    storeAddress: "",
    phoneNumber: undefined,
    sellingItems: [],
    goods: [],
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNextStage = (e: any) => {
    e.stopPropagation();
    setSignupIndex(signupIndex + 1);
  };

  const handlePrevStage = (e: any) => {
    e.stopPropagation();
    setSignupIndex(signupIndex - 1);
  };

  // second signup screen check handler
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
  const [checkboxs, setboxCondition] = useState<boolean[]>(
    Array(sellingItems.length).fill(false)
  );

  //third signup screen check handler
  const goods: string[] = ["Drop shipping", "Amazon", "Self made", "Other"];

  const [checkboxs2, setboxCondition2] = useState<boolean[]>(
    Array(goods.length).fill(false)
  );

  const handleSubmit = (e: any) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormData({
        firstName: "",
        storeName: "",
        storeAddress: "",
        phoneNumber: undefined,
        sellingItems: [""],
        goods: [""],
      });
      setboxCondition(Array(sellingItems.length).fill(false));
      setboxCondition2(Array(goods.length).fill(false));
    }, 3000);
  };

  return (
    <section
      className={`bg-white md:bg-orange-500 relative py-3 md:py-8 min-h-screen font-inter`}
    >
      <div className="p-4 md:p-12 bg-white md:shadow-2xl md:rounded-3xl mx-auto w-[100%] md:w-[90%] lg:w-[70%] xl:w-[45%] relative">
        <div className="hidden md:grid grid-cols-3 gap-x-[20px] h-1/5 justify-center items-center min-h-[5vh]">
          <p
            className={`h-[8px] w-full col-start-1 col-end-2 rounded-[2.5px] ${
              signupIndex >= 1 ? "bg-[#FF7600]" : "bg-[#EFF0F1]"
            }`}
          ></p>
          <p
            className={`h-[8px] w-full col-start-2 col-end-3 rounded-[2.5px] ${
              signupIndex >= 2 ? "bg-[#FF7600]" : "bg-[#EFF0F1]"
            }`}
          ></p>

          <p
            className={`h-[8px] w-full col-start-3 col-end-4 rounded-[2.5px] ${
              signupIndex >= 3 ? "bg-[#FF7600]" : "bg-[#EFF0F1]"
            }`}
          ></p>
        </div>

        <div className="h-[5px] bg-[#EFF0F1] grid grid-cols-3 rounded-[2.5px] gap-0 md:hidden">
          <p
            className={`h-full  col-start-1 col-end-2  ${
              signupIndex >= 1 ? "bg-[#FF7600]" : "bg-[#EFF0F1]"
            }`}
          ></p>
          <p
            className={`h-full  col-start-2 col-end-3 ${
              signupIndex >= 2 ? "bg-[#FF7600]" : "bg-[#EFF0F1]"
            }`}
          ></p>
          <p
            className={`h-full  col-start-3 col-end-4 ${
              signupIndex >= 3 ? "bg-[#FF7600]" : "bg-[#EFF0F1]"
            }`}
          ></p>
        </div>

        <div className="min-h-[75vh] md:min-h-[40vh] lg:min-h-[60vh]">
          {signupIndex === 1 && (
            <FirstSignUp formData={formData} setFormData={setFormData} />
          )}
          {signupIndex === 2 && (
            <SecondSignUp
              formData={formData}
              checkboxs={checkboxs}
              sellingItems={sellingItems}
              setboxCondition={setboxCondition}
              setFormData={setFormData}
            />
          )}
          {signupIndex === 3 && (
            <ThirdSignUp
              formData={formData}
              setFormData={setFormData}
              checkboxs2={checkboxs2}
              setboxCondition2={setboxCondition2}
              goods={goods}
            />
          )}
        </div>

        <div className=" w-full min-h-[10vh]">
          <div className="flex items-center justify-between w-full">
            {signupIndex > 1 && (
              <div className="flex items-center  w-fit py-5 rounded-[10px] text-[#FF7600] cursor-pointer">
                <button
                  className="py-[8px] px-[8px] w-fit md:w-[100px] flex items-center justify-between rounded-[10px]"
                  onClick={handlePrevStage}
                >
                  <span>
                    <HiArrowNarrowLeft />
                  </span>
                  <p className="hidden md:block">previous</p>
                </button>
              </div>
            )}

            {signupIndex < 3 && (
              <div
                className={`flex items-center ${
                  signupIndex < 3 ? "justify-end w-full" : "w-fit"
                }   py-5  text-white cursor-pointer`}
              >
                <div className="px-5 flex items-center gap-5 w-fit">
                  <Link href={"/auth/account"}>
                    <button>
                      <p className="text-[#FF7600] text-sm md:text-base">
                        Skip All
                      </p>
                    </button>
                  </Link>

                  <button onClick={() => setSignupIndex(signupIndex + 1)}>
                    <p className="text-[#FF7600] text-sm md:text-base">Skip</p>
                  </button>
                </div>

                <div className="w-fit">
                  <button
                    className="md:py-[8px] md:px-[20px] py-[2px] px-[10px] w-fit md:w-[100px] lg:w-[250px]  h-[40px] md:h-[50px] bg-[#FF7600] flex items-center justify-between rounded-[10px] gap-4 md:gap-0 transition-all ease-linear duration-1000"
                    onClick={handleNextStage}
                  >
                    <p className="text-sm md:text-base">Next</p>
                    <span>
                      <HiArrowNarrowRight />
                    </span>
                  </button>
                </div>
              </div>
            )}

            {signupIndex === 3 && (
              <Link
                href={"/auth/account"}
                className="flex items-center w-fit  py-5 rounded-[10px] text-white cursor-pointer"
              >
                <button
                  className={`${
                    isLoading
                      ? "py-2 px-2 w-fit h-fit"
                      : "py-[8px] px-[20px] md:w-[250px] md:h-[50px]"
                  }  bg-[#FF7600] flex items-center justify-between rounded-[10px] transition-all ease-linear duration-1000 `}
                  onClick={handleSubmit}
                >
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <div className="flex items-center justify-between w-full gap-4 text-sm md:text-base">
                      <p>Continue to store</p>
                      <span>
                        <HiArrowNarrowRight />
                      </span>
                    </div>
                  )}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
