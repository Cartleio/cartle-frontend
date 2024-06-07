"use client";
import React, { useEffect } from "react";
import {
  closeSubModal,
  wantToSubscribe,
} from "@/app/redux/feature/subscriptionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

interface ApiResponse {
  message: string;
  // Add other properties if present in the response data
}

type PlanProps = {
  mostPopular: boolean;
  planType: string;
  planText: string;
  planPrice: string;
  subscriptionPlanId: number;
};
function Plan(props: PlanProps): JSX.Element {
  //USE ROUTER INSTANCE
  const router = useRouter();

  //DESTRUCTURE PROPS
  const { mostPopular, planType, planText, planPrice, subscriptionPlanId } =
    props;

  //DISPATCH INSTANCE
  const dispatch = useDispatch();

  //USER
  const { user } = useSelector((state: any) => state.auth);
  const merchantData = useSelector((state: any) => state.auth);

  //SUBSCRIBTION URL
  const planUrl = "https://cartle-test-1.onrender.com//merchant/subscribe";

  //GET SUBSCRIPTION DETAILS
  const { subModal, temporaryId } = useSelector(
    (store: any) => store.subscription
  );

  //HANDLES SUBSCRIPTION PLAN
  const handleSubscription = async (subscriptionPlanId: number) => {
    dispatch(wantToSubscribe(subscriptionPlanId));
    if (!user) {
      router.push("/auth/login");
    } else {
      const planId = subscriptionPlanId;
      const token = user.token;
      try {
        dispatch(closeSubModal());
        const response: AxiosResponse = await axios.post(
          planUrl,
          { planId },
          {
            headers: {
              withCredentials: true,
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error("subscription failed, try again");
          console.error("Axios error details:", error.response?.status);
          if (error.response?.status === 403) {
            toast.error("subscription failed, try again");
          }
        }
      }
    }
  };

  return (
    <>
      <div
        className={`h-4 ${
          mostPopular
            ? "bg-[#FF7600] text-sm text-white flex items-center justify-center"
            : "bg-white"
        } rounded-tl-xl rounded-tr-xl py-3`}
      >
        {mostPopular && <span>Most popular</span>}
      </div>

      <div
        className={`${
          mostPopular && "bg-[#FFF1E680]"
        } flex flex-col gap-3 px-2 lg:px-4 xl:px-6 py-8 lg:py-14`}
      >
        <h1 className="text-xl lg:text-3xl font-bold capitalize">{planType}</h1>
        <p className="text-[#979DA0] text-xs md:text-base h-14">{planText}</p>
        <div className="flex items-center gap-2 font-semibold">
          <h2 className="font-bold text-xl md:text-3xl">{planPrice}</h2>
          <sub className="text-sm md:text-base text-[#979DA0]">/mo</sub>
        </div>
        <button
          className={`border ${
            mostPopular
              ? "border-[#FF7600] text-white bg-[#FF7600]"
              : "border-[#979DA0] text-[#979DA0] "
          }  font-bold p-[0.75em] text-xs md:text-base rounded-xl`}
          onClick={() => handleSubscription(subscriptionPlanId)}
        >
          Get Started
        </button>
      </div>
    </>
  );
}

export default Plan;
