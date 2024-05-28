"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setTimeout } from "timers";

type verifyStatus = "verifying" | "success" | "error";

type Params = {
  params: {
    token: string;
  };
};

const VerificationPage = ({ params: { token } }: Params) => {
  const [verificationStatus, setVerificationStatus] =
    useState<verifyStatus>("verifying");
  const router = useRouter();

  useEffect(() => {
    setVerificationStatus("verifying");
    const verifyUser = async () => {
      try {
        const response = await axios.get(`/merchant/auth/verify/${token}`);
        if (response.status === 200) {
          setVerificationStatus("success");
          router.push("/auth/login");
        }
      } catch (error) {
        console.error("Error during verification:", error);
        // Update the verification status to 'error'
        setVerificationStatus("error");
      }
    };
    verifyUser();
  }, [token]);

  useEffect(() => {
    setVerificationStatus("verifying");
    const timer = setTimeout(() => {
      setVerificationStatus("success");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        className={`bg-white sm:bg-orange-500 relative py-8 min-h-screen overflow-x-hidden text-[#444748] md:flex-col items-center justify-center`}
      >
        <div className="flex justify-center p-10">
          {verificationStatus === "verifying" && (
            <div
              className={`p-7 bg-white shadow-none sm:shadow-2xl rounded-3xl mx-auto w-[100%] sm:w-[70%]  md:w-[60%] lg:w-[40%] xl:w-[30%]  transition-transform duration-700 ease-in-out  flex flex-col gap-6`}
            >
              <div className="flex flex-col gap-3">
                <Image
                  src={"/cartle-logo.png"}
                  alt={"Cartle Technologies"}
                  width={120}
                  height={120}
                />
              </div>

              <div className="flex items-center">
                <p>Please wait while we verify Your Email...</p>
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
          )}

          {verificationStatus === "success" && (
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
                  Verification successful
                </h1>
              </div>

              <div className="">
                <p>
                  <Link href="/auth/login" className="text-orange-500">
                    click here
                  </Link>{" "}
                  to login
                </p>
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
          )}

          {verificationStatus === "error" && (
            <div className="flex flex-col items-center">
              <p>verification failed</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default VerificationPage;
