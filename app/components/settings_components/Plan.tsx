"use client";
import React from "react";
import styles from "../../../styles/Home.module.css";
import { useSelector } from "react-redux";
import { getPlanName } from "../utils/data";
import Link from "next/link";

const Plan = () => {
  const {
    profile,
    failed,
    isLoading: profileLoading,
  } = useSelector((state: any) => state.profile);

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-lg font-bold capitalize">
          {getPlanName(profile?.subscriptionPlanId)} plan
        </h1>
        <Link href={"/pricing"}>
          <h1 className={`text-orange-500 font-semibold cursor-pointer`}>
            upgrade Cartle plan
          </h1>
        </Link>
      </div>

      <section className="flex flex-col gap-8">
        {/* CARD DETAILS */}
        <article className="border rounded-md">
          <div className="p-3 flex items-center justify-between border-b">
            <h1 className="text-lg font-bold">Card details</h1>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-md font-bold my-3">Card Number</label>
              <input
                type="number"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>

            <div>
              <label className="text-md font-bold my-3">Card Name</label>
              <input
                type="text"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>

            <div>
              <label className="text-md font-bold my-3">Expiration date</label>
              <input
                type="text"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>

            <div>
              <label className="text-md font-bold my-3">Contact Address</label>
              <input
                type="text"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>
          </div>
        </article>

        {/* BILLING DETAILS*/}
        <article className="border rounded-md">
          <div className="p-3 flex items-center justify-between border-b">
            <h1 className="text-lg font-bold">Billing Information</h1>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="p-3 grid grid-cols-2 gap-4">
            <div>
              <label className="text-md font-bold my-3">Currency</label>
              <input
                type="number"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>

            <div>
              <label className="text-md font-bold my-3">Billing Address</label>
              <input
                type="text"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Plan;
