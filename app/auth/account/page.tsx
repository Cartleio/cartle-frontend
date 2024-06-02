"use client";
import { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineAttachEmail, MdOutlineArrowRightAlt } from "react-icons/md";

function CreateAccount() {
  //THIS STATE HANDLES THE MODAL ANIMATION
  const [accountModal, setAccountModal] = useState<string>(
    "translate-x-[-105vw]"
  );

  //THIS FUNCTION HANDLES THE MODAL ANIMATION
  useEffect(() => {
    setTimeout(() => {
      setAccountModal("translate-x-0");
    }, 200);
  }, []);

  const googleSignIn = async () => {
    const response = await fetch(
      "https://cartle-test.onrender.com/merchants/google"
    );
    console.log(response);
  };

  return (
    <section
      className={`bg-white sm:bg-orange-500 relative py-8 min-h-screen overflow-x-hidden ${styles.avenirFont} text-[#444748] md:flex items-center justify-center`}
    >
      <div
        className={`p-7 bg-white shadow-none sm:shadow-2xl rounded-3xl mx-auto w-[100%] sm:w-[70%]  md:w-[65%] lg:w-[40%] xl:w-[30%] h-fit md:min-h-[50vh] ${accountModal} transition-transform duration-700 ease-in-out  flex flex-col gap-6`}
      >
        <div>
          <img src="/cartle-logo.png" className="h-10 mb-6" alt="" />
          <h1 className="text-xl font-semibold text-[#444748]">
            Create an account with Cartle
          </h1>
          <p className="text-[#444748]">Few clicks away from your store</p>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href={"/auth/register"}
            className="bg-[#E7E7E7] py-3 w-full rounded-md flex items-center justify-center gap-2 font-semibold cursor-pointer"
          >
            <MdOutlineAttachEmail />
            <span>Sign up with email</span>
          </Link>
          <Link
            href={"https://cartle-test.onrender.com/merchants/google"}
            className="bg-[#E7E7E7] py-3 w-full rounded-md flex items-center justify-center gap-2 font-semibold cursor-pointer"
          >
            <FcGoogle className="text-xl" />
            <span>Sign up with Google</span>
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          <div className="h-[0.8px] flex-1 bg-slate-400"></div>
          <span>or</span>
          <div className="h-[0.8px] flex-1 bg-slate-400"></div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="inline-flex items-center gap-1">
            Already have a Cartle account? {""}
            <Link
              href={"/auth/login"}
              className="text-orange-500 flex items-center"
            >
              log in <MdOutlineArrowRightAlt />
            </Link>
          </p>
        </div>
        <div>
          <p className="text-sm">
            By proceeding, you agree to the{" "}
            <Link href={"/terms"} className="text-orange-500">
              {" "}
              Terms and Conditions{" "}
            </Link>
            and{" "}
            <Link href={"/privacy"} className="text-orange-500">
              {" "}
              Privacy Policy
            </Link>
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
    </section>
  );
}

export default CreateAccount;
