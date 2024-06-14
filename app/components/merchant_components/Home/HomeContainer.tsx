"use client";
import React from "react";
import { Update, Summary, Theme } from "@/app/components/";
import Header from "@/app/components/merchant_components/Header";
import Theme1 from "@/public/Theme1.png";
import Theme2 from "@/public/Theme2.png";
import { useSelector } from "react-redux";

type SummaryData = {
  id: number;
  text: string;
  btn: string;
  border: boolean;
};

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

const themeData = [
  {
    id: 1,
    title: "Layout 1",
    text: "A simple and easy to understand layout for your store",
    fig: Theme1,
  },
  {
    id: 2,
    title: "Layout 2",
    text: "A simple and easy to understand layout for your store",
    fig: Theme2,
  },
];
type HeaderData = {
  title: string;
  text: string;
};
const HomeContainer = () => {
  const { profile } = useSelector((state: any) => state.profile);

  const headerData: HeaderData = {
    title: "Good Day!",
    text: `Welcome to your store,  ${
      profile?.username ? profile?.username : `Merchant`
    }!`,
  };
  return (
    <>
      <div className="hidden md:block">
        <Header {...headerData} />
      </div>
      <div className="flex flex-col gap-4">
        <Update />
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

        <section className="p-6" id="themes">
          <h1 className="font-bold text-[#444748] text-lg ">
            Themes for your store
          </h1>
          <p className="text-[#979DA0] text-sm">
            Amazing themes for your store to choose from
          </p>
          <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-6">
            {themeData.map((theme) => (
              <Theme key={theme.id} {...theme} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeContainer;
