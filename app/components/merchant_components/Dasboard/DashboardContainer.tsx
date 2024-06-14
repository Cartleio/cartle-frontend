"use client";
import React from "react";
import {
  Layout,
  OverviewChart,
  SideStatusTags,
  OrdersTable,
  NewPie,
} from "@/app/components";
import Header from "@/app/components/merchant_components/Header";

import { SIDEBAR_TAGS_DATA } from "@/app/components/utils/data";

type HeaderData = {
  title: string;
  text: string;
};

const DashboardContainer = () => {
  const HeaderData: HeaderData = {
    title: "Dashboard",
    text: "What’s happening in your store today",
  };

  // const orders = [
  //   {
  //     id: 1,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A. Lape",
  //     invoice_no: "202378690",
  //     current_order_status: "Paid",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "Port Harcourt",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A. Lape",
  //     invoice_no: "202378690",
  //     current_order_status: "delivered",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "Port Harcourt",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A. Lape",
  //     invoice_no: "202378690",
  //     current_order_status: "pending",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "Port Harcourt",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A.",
  //     invoice_no: "202378690",
  //     current_order_status: "Paid",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "london",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A.",
  //     invoice_no: "202378690",
  //     current_order_status: "delivered",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "New york",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A. Lape",
  //     invoice_no: "202378690",
  //     current_order_status: "pending",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "Port Harcourt",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A. Lape",
  //     invoice_no: "202378690",
  //     current_order_status: "pending",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "Port Harcourt",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A. Lape",
  //     invoice_no: "202378690",
  //     current_order_status: "Paid",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "Port Harcourt",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A. Lape",
  //     invoice_no: "202378690",
  //     current_order_status: "pending",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "Port Harcourt",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A. Lape",
  //     invoice_no: "202378690",
  //     current_order_status: "delivered",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "Port Harcourt",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  //   {
  //     id: 11,
  //     text: "2022-05-17T03:24:00",
  //     order_price: "$435.50",
  //     date: "27 Nov 2023",
  //     billing_name: "Shirley A. Lape",
  //     invoice_no: "202378690",
  //     current_order_status: "pending",
  //     email: "Johndoe@yahoo.com",
  //     country: "Nigeria",
  //     product_qty: 5,
  //     state: "Rivers",
  //     city: "Port Harcourt",
  //     Address: "123 Peace Street",
  //     customInformation: "Along The Road",
  //     order_date: "2022-05-17T03:24:00",
  //     customer_id: "23143",
  //     productsOrdered: [
  //       {
  //         title: "Perfume",
  //         productInvoice: "202378690",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "iPhone 15 plus",
  //         productInvoice: "202378691",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //       {
  //         title: "HP Laptop",
  //         productInvoice: "202378692",
  //         product_price: "20,000",
  //         product_status: "In Stock",
  //       },
  //     ],
  //   },
  // ];

  const orders: any[] = [];
  return (
    <>
      <Header {...HeaderData} />
      <div className="bg-white text-black  gap-5 py-5 flex">
        <div className="flex flex-col gap-5 flex-1 w-full">
          <div>
            <OverviewChart />
          </div>

          <div className="flex flex-col lg:flex-row gap-5 w-full xl:hidden">
            {/* mobile status Tags */}
            <section className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <article className="w-[48%] flex gap-1 border border-[#979DA0] items-center p-2 rounded-2xl shadow-sm">
                  <div
                    className={`h-8 w-8 lg:h-14 lg:w-14 text-xl md:text-3xl rounded-full flex items-center justify-center`}
                    style={{
                      backgroundColor: SIDEBAR_TAGS_DATA[0].bgColor,
                    }}
                  >
                    {SIDEBAR_TAGS_DATA[0].icon}
                  </div>
                  <div className="">
                    <h2 className="text-sm text-[#979DA0]">
                      {SIDEBAR_TAGS_DATA[0].label}
                    </h2>
                    <div className="flex items-center gap-2">
                      <h1 className="text-xs font-bold md:text-xl">
                        {SIDEBAR_TAGS_DATA[0].price}
                      </h1>
                      <span className="text-[#979DA0] text-[0.6rem]">
                        {SIDEBAR_TAGS_DATA[0].quote}
                      </span>
                    </div>
                  </div>
                </article>
                <article className="w-[48%] flex gap-1 border border-[#979DA0] items-center p-2 rounded-2xl shadow-sm">
                  <div
                    className={`h-8  w-8  lg:h-14 lg:w-14 text-xl md:text-3xl rounded-full flex items-center justify-center`}
                    style={{
                      backgroundColor: SIDEBAR_TAGS_DATA[1].bgColor,
                    }}
                  >
                    {SIDEBAR_TAGS_DATA[1].icon}
                  </div>
                  <div className="">
                    <h2 className="text-sm text-[#979DA0]">
                      {SIDEBAR_TAGS_DATA[1].label}
                    </h2>
                    <div className="flex items-center gap-2">
                      <h1 className="text-xs font-bold md:text-xl">
                        {SIDEBAR_TAGS_DATA[1].price}
                      </h1>
                      <span className="text-[#979DA0] text-[0.6rem]">
                        {SIDEBAR_TAGS_DATA[1].quote}
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              <div className="flex items-center justify-center">
                <article className="w-[48%] flex gap-1 border border-[#979DA0] items-center p-2 rounded-2xl shadow-sm">
                  <div
                    className={`h-8  w-8  lg:h-14 lg:w-14 text-xl md:text-3xl rounded-full flex items-center justify-center`}
                    style={{
                      backgroundColor: SIDEBAR_TAGS_DATA[2].bgColor,
                    }}
                  >
                    {SIDEBAR_TAGS_DATA[2].icon}
                  </div>
                  <div className="">
                    <h2 className="text-sm text-[#979DA0]">
                      {SIDEBAR_TAGS_DATA[2].label}
                    </h2>
                    <div className="flex items-center gap-2">
                      <h1 className="text-xs font-bold md:text-xl">
                        {SIDEBAR_TAGS_DATA[2].price}
                      </h1>
                      <span className="text-[#979DA0] text-[0.6rem]">
                        {SIDEBAR_TAGS_DATA[2].quote}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            <NewPie />
          </div>

          <OrdersTable
            orders={orders}
            OrderType="recent orders"
            lastUpadted="Updated 20 minutes ago"
          />
        </div>

        <div className="hidden xl:flex flex-col gap-5 w-full xl:w-fit">
          <SideStatusTags />
          <NewPie />
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
