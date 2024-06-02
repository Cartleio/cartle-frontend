"use client";
import React from "react";
import Link from "next/link";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import styles from "../../../styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ForgetPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<string>("");
  const [merchantEmail, setMerchantEmail] = useState({
    email: "",
  });

  const handleResetPassword = async (event: React.FormEvent) => {
    setIsError("");
    event.preventDefault();
    if (!merchantEmail.email) {
      setIsError("Please provide an email address");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "https://cartle-test.onrender.com/merchants/forgot-password",
        merchantEmail
      );
      if (response?.status === 200 || response?.status === 201) {
        setLoading(false);
        setMessage(response?.data?.message);
      }
    } catch (error) {
      setLoading(false);
      if ((error as any).response?.status === 401) {
        setIsError((error as any).response?.data?.message);
        return;
      }
      if ((error as any).response?.status === 500) {
        setIsError((error as any).response?.data?.message);
        return;
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className={`bg-white sm:bg-orange-500 relative py-8 min-h-screen overflow-x-hidden ${styles.avenirFont} text-[#444748] md:flex-col items-center justify-center`}
      >
        {message ? (
          <div
            className={`p-7 bg-white shadow-none sm:shadow-2xl rounded-3xl mx-auto w-[100%] sm:w-[70%]  md:w-[60%] lg:w-[40%] xl:w-[30%]   transition-transform duration-700 ease-in-out  flex flex-col gap-6`}
          >
            <div className="flex flex-col gap-3">
              <Image
                src={"/cartle-logo.png"}
                alt={"Cartle Technologies"}
                width={120}
                height={120}
              />
              <h1 className="text-xl font-semibold text-[#444748]">
                Reset Your Password
              </h1>
            </div>

            <div className="w-full flex items-center">
              <PasswordResponseMsg responseMsg={message} />
            </div>

            <div className="text-sm flex items-center gap-2">
              <Link href={"/"} className="hover:underline">
                Help
              </Link>
              <Link href={"/"} className="hover:underline">
                Privacy
              </Link>
              <Link href={"/"} className="hover:underline">
                Terms
              </Link>
            </div>
          </div>
        ) : (
          <div
            className={`p-7 bg-white shadow-none sm:shadow-2xl rounded-3xl mx-auto w-[100%] sm:w-[70%]  md:w-[60%] lg:w-[40%] xl:w-[30%]   transition-transform duration-700 ease-in-out  flex flex-col gap-6`}
          >
            <div className="flex flex-col gap-3">
              <Image
                src={"/cartle-logo.png"}
                alt={"Cartle Technologies"}
                width={120}
                height={120}
              />
              <h1 className="text-xl font-semibold text-[#444748]">
                Reset Your Password
              </h1>
            </div>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Enter your Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={merchantEmail.email}
                  onChange={(event) =>
                    setMerchantEmail((prev) => {
                      return {
                        ...prev,
                        email: event.target.value,
                      };
                    })
                  }
                  className="w-full hover:outline-none focus:outline-none border focus:border-orange-500 h-10 px-3 rounded-md"
                />
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white h-12 font-bold rounded-md flex items-center justify-center mt-3"
                  onClick={handleResetPassword}
                  disabled={loading}
                >
                  {loading ? <LoadingSpinner /> : <span>Reset Password</span>}
                </button>
                <div className="w-full">
                  {isError && (
                    <span className="text-red-500 text-sm">{isError}</span>
                  )}
                </div>
              </div>
            </form>

            <div className="text-sm flex items-center gap-2">
              <Link href={"/"} className="hover:underline">
                Help
              </Link>
              <Link href={"/"} className="hover:underline">
                Privacy
              </Link>
              <Link href={"/"} className="hover:underline">
                Terms
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default ForgetPassword;

const PasswordResponseMsg = ({ responseMsg }: any) => {
  return (
    <div className="bg-white">
      <p>{responseMsg}</p>
    </div>
  );
};
