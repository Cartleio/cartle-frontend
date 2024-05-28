"use client";
import React from "react";
import Layout from "../../components/merchant_components/Layout";
import Header from "@/app/components/merchant_components/Header";
import Update from "./Update";
import Summary from "./Summary";
import Theme from "./Theme";
import type { Metadata } from "next";
import HeaderMobile from "@/app/components/merchant_components/HeaderMobile";
import { useSelector } from "react-redux";

// export const metadata: Metadata = {
//   title: "Merchant",
//   description: "Explore Your Store",
// };
function Home() {
  const user = useSelector((state: any) => state.auth.user);

  const { profile } = useSelector((state: any) => state.profile);

  type HeaderData = {
    title: string;
    text: string;
  };

  type StoreUpdateData = {
    id: number;
    title: string;
    text: string;
    btnData: string;
    border: boolean;
  };

  type SummaryData = {
    id: number;
    text: string;
    btn: string;
    border: boolean;
  };

  const headerData: HeaderData = {
    title: "Good Day!",
    text: `Welcome to your store,  ${
      profile?.username ? profile?.username : `Merchant`
    }!`,
  };

  const storeUpdateData: StoreUpdateData[] = [
    {
      id: 1,
      title: "Name your store",
      text: "A properly named store is a store already set up for success",
      btnData: "Name Store",
      border: true,
    },
    {
      id: 2,
      title: "Customize your online store",
      text: "Add your logo and choose a theme that highlights your brand",
      btnData: "Customize store",
      border: true,
    },
    {
      id: 3,
      title: "Add a custom domain",
      text: "Let Cartle create a domain just for you",
      btnData: "Add domain",
      border: true,
    },
    {
      id: 4,
      title: "Add your first product",
      text: "To sell, you need products first. Find products to sell or add yours",
      btnData: "Add products",
      border: false,
    },
  ];

  const summaryData: SummaryData[] = [
    {
      id: 1,
      text: "6 orders have yet to be delivered",
      btn: "Orders",
      border: true,
    },
    {
      id: 2,
      text: "Your top products are T shirts",
      btn: "Products",
      border: true,
    },
    {
      id: 3,
      text: "50+ orders have payments that need to be verified",
      btn: "Orders",
      border: true,
    },
    {
      id: 4,
      text: "50+ orders have payments that need to be verified",
      btn: "Orders",
      border: false,
    },
  ];

  return (
    <Layout>
      <div className="hidden md:block">
        <Header {...headerData} />
      </div>

      <div className="flex flex-col gap-4">
        <section className="text-[#979DA0] border rounded-md p-4 md:p-6 mt-5 my-3">
          <h1 className="font-bold text-[#444748] text-base md:text-lg ">
            Complete your store setup
          </h1>
          <h2 className="text-sm md:text-base">
            Use this guide to set your store up for success!
          </h2>
          <div className="flex items-center justify-center gap-3 w-fit">
            <p className="text-[#444748]">
              <span>0</span> / 4 completed
            </p>
            <div className="h-1 w-20 bg-[#DBDBDB] rounded-md">
              <div className="bg-primary-500 rounded-md w-2 h-1"></div>
            </div>
          </div>

          <div className="mt-4">
            {storeUpdateData.map((update) => (
              <Update key={update.id} {...update} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-start-1 lg:col-span-2 border p-6 rounded-lg">
            <h1 className="font-bold text-[#444748] text-lg ">Store Summary</h1>
            {summaryData.map((summary) => (
              <Summary key={summary.id} {...summary} />
            ))}
          </div>
          <div className="lg:col-start-3 lg:col-span-1 border p-6 rounded-lg flex flex-col items-center h-40 md:h-auto">
            <div className="w-full font-bold text-[#444748] text-lg ">
              <h1>Updates</h1>
            </div>
            <p className=" flex-1 w-full flex items-center justify-center text-sm xl:text-lg font-semibold text-[#797E80] xl:p-14 text-center">
              Updates on your store will be here
            </p>
          </div>
        </section>

        <section className="p-6">
          <h1 className="font-bold text-[#444748] text-lg ">
            Themes for your store
          </h1>
          <p className="text-[#979DA0] text-sm">
            Amazing themes for your store to choose from
          </p>
          <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-6">
            {[1, 2, 3, 4, 5, 6].map((theme) => (
              <Theme key={theme} layoutType={theme} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
