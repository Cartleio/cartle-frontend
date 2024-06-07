"use client";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/app/redux/feature/auth-slice";

const Onboarding = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [merchant, setMerchant] = useState({
    username: "",
  });

  const handleOnboarding = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!merchant.username) {
      setError("Please provide a username");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.put(
        "https://cartle-test-1.onrender.com//merchant/profile",
        merchant
        // {
        //   withCredentials: true,
        // }
      );
      if (response.status === 200) {
        setLoading(false);
        toast.success("Username updated Successfully");
        router.push("/merchant/home");
        const merchant = response?.data?.merchant;
        dispatch(login({ ...merchant }));
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className={`bg-white sm:bg-orange-500 relative py-8 min-h-screen overflow-x-hidden text-[#444748] md:flex-col items-center justify-center`}
      >
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
            <h1 className="text-xl font-semibold text-[#444748]"></h1>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="">What would you like to be called?</label>
              <input
                type="username"
                name="username"
                id="username"
                value={merchant.username}
                onChange={(event) =>
                  setMerchant((prev) => {
                    return {
                      ...prev,
                      username: event.target.value,
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
                onClick={handleOnboarding}
                // disabled={loading}
              >
                {loading ? <LoadingSpinner /> : <span>Submit Name</span>}
              </button>
              {error && <p className="text-red-500 py-2">{error}</p>}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Onboarding;
