"use client";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ResetPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMgs, setErrorMgs] = useState<string>("");
  const [password, setpassword] = useState("");
  const [firstVisibility, setFirstVisibility] = useState(false);
  const [secondPassword, setSecondPassword] = useState("");
  const [secondVisibility, setSecondVisibility] = useState(false);
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("resetToken");

  const handleUpdatePassword = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMgs("");
    setLoading(true);
    if (!password || !secondPassword) {
      setErrorMgs("Please enter both the passwords");
      setLoading(false);
      return;
    }
    if (password !== secondPassword) {
      setErrorMgs("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "https://cartle-test.onrender.com/merchants/reset-password",
        {
          password,
          token,
        }
      );
      if (response?.status === 200 || response?.status === 201) {
        setIsError(false);
        setIsSuccess(true);
        toast.success("Password updated successfully");
        setLoading(false);
        setMessage(response?.data?.message);
      }

      if (response?.status === 401) {
        setLoading(false);
        setIsSuccess(false);
        setIsError(true);
        toast.error("Failed to update password");
      }
    } catch (error) {
      setLoading(false);
      setIsSuccess(false);
      setIsError(true);
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className={`bg-white sm:bg-orange-500 relative py-8 min-h-screen overflow-x-hidden ${styles.avenirFont} text-[#444748] md:flex-col items-center justify-center`}
      >
        {isSuccess || isError ? (
          ""
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
              <div className="flex flex-col">
                <label className="mt-5 mb-2 text-sm lg:text-base font-semibold">
                  Enter a new password
                </label>
                <div className="relative">
                  <input
                    type={firstVisibility ? "text" : "password"}
                    className="bg-cream-100 p-2 lg:p-2 rounded focus:outline-0 text-md border lg:text-xl w-full focus:border-orange-500"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <span
                    className="text-md lg:text-xl absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setFirstVisibility(!firstVisibility)}
                  >
                    {firstVisibility ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mt-5 mb-2 text-sm lg:text-base font-semibold">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={secondVisibility ? "text" : "password"}
                    className="bg-cream-100 p-2 lg:p-2 rounded focus:outline-0 text-md border lg:text-xl w-full focus:border-orange-500"
                    value={secondPassword}
                    onChange={(e) => setSecondPassword(e.target.value)}
                  />
                  <span
                    className="text-md lg:text-xl absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setSecondVisibility(!secondVisibility)}
                  >
                    {secondVisibility ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white h-12 font-bold rounded-md flex items-center justify-center mt-3"
                  onClick={handleUpdatePassword}
                  disabled={loading}
                >
                  {loading ? <LoadingSpinner /> : <span>Update Password</span>}
                </button>
              </div>
              {errorMgs && (
                <p className="text-red-500 text-sm py-2">{errorMgs}</p>
              )}
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

        {isSuccess && <SuccessPage message={message} />}
        {isError && (
          <FailurePage setError={setIsError} setisSuccess={setIsSuccess} />
        )}
      </section>
    </>
  );
};

export default ResetPassword;

const SuccessPage = ({ message }: { message: string }) => {
  return (
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
          Congratulations
        </h1>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <span>{message} </span>
          <span className="text-orange-500">
            <Link href={"/auth/login"}>Click here to login</Link>
          </span>
        </div>
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
  );
};

const FailurePage = ({
  setError,
  setisSuccess,
}: {
  setError: any;
  setisSuccess: any;
}) => {
  return (
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

      <div>
        Password reset failed{" "}
        <span className="text-orange-500">
          <button
            onClick={() => {
              setError(false);
              setisSuccess(false);
            }}
          >
            Please try again
          </button>
        </span>
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
  );
};
