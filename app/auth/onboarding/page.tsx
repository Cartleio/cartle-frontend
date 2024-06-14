"use client";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/app/redux/feature/auth-slice";

const Onboarding = () => {
  const dispatch = useDispatch();
  const regData = useSelector((state: any) => state.register);
  const user = useSelector((state: any) => state.auth);
  const [errorMgs, setErrorMgs] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  console.log(regData);
  console.log(user);

  const router = useRouter();

  const createStore = async () => {
    const token = user.token;
    try {
      const response = await axios.post(
        "https://cartle-test-1.onrender.com/stores/",
        {
          name: regData.storeName,
          address: regData.storeAddress,
          whatDoYouWantToSell: regData.whatDoYouWantToSell,
          storePhone: regData.phoneNumber,
          email: regData.email,
          howWillYouGetTheGoods: regData.howWillYouGetTheGoods,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      toast.success("Store created successfully");
      router.push("/merchant/home");
    } catch (error) {
      setLoading(false);
      if (
        (error as any).response.status === 400 ||
        (error as any).response.status === 404
      ) {
        router.push("/auth/login");
        return;
      }
      router.push("/auth/login");
    }
  };

  const updateMerchantInfo = async () => {
    try {
      setLoading(true);
      const token = user.token;
      const response = await axios.put(
        `https://cartle-test-1.onrender.com/merchant/`,
        {
          address: regData.storeAddress,
          phoneNumber: Number(regData.phoneNumber) || null,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        createStore();
      }
    } catch (error) {
      createStore();
    }
  };

  const loginMerchant = async () => {
    setErrorMgs("");
    if (!regData.email || !regData.password) {
      setErrorMgs("Please fill all the fields");
      return;
    }
    try {
      const response = await axios.post(
        `https://cartle-test-1.onrender.com/merchants/login`,
        {
          email: regData.email,
          password: regData.password,
        }
      );
      const merchantData = response?.data;
      console.log(merchantData);
      dispatch(login({ ...merchantData }));
      updateMerchantInfo();
    } catch (error) {
      console.log(error);
      if ((error as any).message === "Network Error") {
        toast.error("Network Error, Please Try again");
        router.push("/auth/login");
        return;
      }
      toast.error("Something went wrong, Please Try again");
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    loginMerchant();
  }, []);

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
            <div className="w-full">
              <h1 className="text-xl font-semibold text-[#444748] mb-10">
                Please wait while we set up your store
              </h1>
              <div className="w-full flex items-center justify-center">
                <span className="loader"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Onboarding;
