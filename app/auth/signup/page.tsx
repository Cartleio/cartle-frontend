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

export default function SignUp(): JSX.Element {
  const [signupIndex, setSignupIndex] = useState<number>(1);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNextStage = (e: any) => {
    e.stopPropagation();
    setSignupIndex(signupIndex + 1);
  };

  const handlePrevStage = (e: any) => {
    e.stopPropagation();
    setSignupIndex(signupIndex - 1);
  };

  const createAccount = (e: any) => {
    setIsLoading(true);
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
          {signupIndex === 1 && <FirstSignUp />}
          {signupIndex === 2 && <SecondSignUp />}
          {signupIndex === 3 && <ThirdSignUp />}
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
                  onClick={createAccount}
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
