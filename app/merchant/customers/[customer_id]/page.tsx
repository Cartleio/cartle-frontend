"use client";
import AddHeader from "@/app/components/merchant_components/AddHeader";
import Layout from "@/app/components/merchant_components/Layout";
import { CUSTOMERS } from "@/app/components/utils/data";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Newbar from "../../../components/merchant_components/Dasboard/Newbar";

type Params = {
  params: {
    customer_id: string;
  };
};
const Customer = ({ params: { customer_id } }: Params) => {
  const customerData = CUSTOMERS.find(
    (customer) => customer.customer_id === customer_id
  );

  const router = useRouter();

  const handleSave = () => {
    router.push("/merchant/customers");
  };

  const addHeaderData = {
    title: "Customer Database",
    text: "",
    return_arrow_url: "/merchant/customers",
    saveFn: handleSave,
    loading: false,
  };

  const customerHistory = [
    "John has made 100 orders",
    "John’s favorite product is your jeans",
    "John has returned 1 product",
    "John is a constant returning customer",
  ];

  return (
    <>
      <Layout>
        <AddHeader {...addHeaderData} />
        <main className="pb-10">
          <form className="flex flex-col gap-5 py-8">
            <section className="p-5 border rounded-md shadow-sm flex flex-col gap-8">
              <h1 className="text-sm md:text-base lg:text-xl text-[#444748] font-medium">
                Customer Overview
              </h1>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={customerData?.customer_name}
                    className="focus:outline-none bg-[#E7E7E7] border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                    placeholder="John"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="focus:outline-none bg-[#E7E7E7] border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={customerData?.customer_email}
                    placeholder="Johndoe@yahoo.com"
                    className="focus:outline-none bg-[#E7E7E7] border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="phoneNumber" className="font-medium">
                    Phone Number
                  </label>

                  <div className="flex gap-6">
                    <input
                      type="text"
                      name="phoneNumber"
                      className="focus:outline-none bg-[#E7E7E7] border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md w-[70%] md:flex-1"
                      placeholder="123-456-7890"
                      value={customerData?.customer_phone}
                    />
                    <select
                      name="countryCode"
                      id="countryCode"
                      className="w-[30%] md:w-20  rounded-md focus:border-[#FF7600] focus:outline-none bg-[#E7E7E7] border p-2"
                    >
                      <option value="+234">+234</option>
                      <option value="+233">+233</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <label
                  htmlFor="email_for_marketing"
                  className="text-[#121212] font-medium text-sm md:text-base"
                >
                  Amadi receives marketing emails
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <label
                  htmlFor="sms"
                  className="text-[#121212] font-medium text-sm md:text-base"
                >
                  John does not receive marketing information through SMS
                </label>
              </div>
            </section>
            <section className="p-5 border rounded-md shadow-sm flex flex-col gap-5">
              <h1 className="text-sm md:text-base lg:text-xl text-[#444748] font-medium">
                Customer Address
              </h1>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="country" className="font-medium">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="focus:outline-none bg-[#E7E7E7] border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                    placeholder="Nigeria"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="State" className="font-medium">
                    State
                  </label>
                  <select
                    name="state"
                    id="state"
                    className="focus:outline-none bg-[#E7E7E7] border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                    placeholder="Rivers"
                  >
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="Rivers">Rivers</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="State" className="font-medium">
                    City
                  </label>
                  <select
                    name="state"
                    id="state"
                    className="focus:outline-none bg-[#E7E7E7] border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                    placeholder="Rivers"
                  >
                    <option value="surulere">Surulere</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="homeAddress" className="font-medium">
                    Home Address
                  </label>
                  <input
                    type="homeAddress"
                    name="homeAddress"
                    placeholder="Johndoe@yahoo.com"
                    className="focus:outline-none bg-[#E7E7E7] border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="addressInformation" className="font-medium">
                    Address Information
                  </label>
                  <input
                    type="addressInformation"
                    name="addressInformation"
                    placeholder="Along The Road"
                    className="focus:outline-none bg-[#E7E7E7] border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                  />
                </div>
              </div>
            </section>
          </form>
          {/* <div className="w-[60%]">
            <Newbar />
          </div> */}
          <div className="">
            {customerHistory.map((C, index) => (
              <div
                className="flex gap-2 items-center w-fit border-b py-3"
                key={index}
              >
                <div className="bg-orange-500 h-2 w-2 rounded-full"></div>
                <p>{C}</p>
              </div>
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Customer;
