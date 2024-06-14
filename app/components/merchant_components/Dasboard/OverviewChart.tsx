"use client";
import React, { useState } from "react";
import Newbar from "./Newbar";

function OverviewChart() {
  const data = {
    today: {
      revenue: [70000, 9000, 14000, 7000, 9000, 25000, 80000],
      visitors: [20, 15, 18, 25, 30, 22, 19],
      orders: [5, 8, 12, 7, 10, 15, 6],
      categories: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm"],
    },
    weekly: {
      revenue: [70000, 9500, 14000, 7000, 9000, 25000, 80000],
      visitors: [25, 20, 15, 30, 35, 28, 22],
      orders: [10, 15, 20, 12, 18, 25, 10],
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    monthly: {
      revenue: [17000, 90000, 14000, 7000, 9000, 25000, 80000],
      visitors: [30, 28, 25, 35, 40, 32, 28],
      orders: [15, 20, 25, 18, 22, 30, 14],
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yearly: {
      revenue: [17000, 60000, 14000, 7000, 9000, 25000, 80000],
      visitors: [35, 30, 28, 40, 45, 38, 33],
      orders: [20, 25, 30, 22, 28, 35, 18],
      categories: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    },
  };

  const [selectedTime, setSelectedTime] = useState("today");
  const [selectedCategory, setSelectedCategory] = useState("orders");

  return (
    <div className="border rounded-md shadow-sm lg:flex-1 overflow-x-auto">
      <div className="flex flex-col gap-4 pb-0 p-4 md:pb-4">
        <strong className="hidden md:block text-lg lg:text-2xl text-[#444748]">
          Overview Statistic
        </strong>
        <div className="flex items-start md:items-center justify-between flex-col gap-3 md:flex-row">
          <div className="flex flex-row items-center justify-between text-sm gap-2 text-[#979DA0] w-full">
            <strong className="block md:hidden text-xs text-[#444748]">
              Overview Statistic
            </strong>
            <div className="flex flex-row items-center text-sm gap-2 text-[#979DA0]">
              {["today", "weekly", "monthly", "yearly"].map((period) => (
                <span
                  key={period}
                  className={`text-[0.7rem] md:text-base text-black border-b-2 ${
                    selectedTime === period
                      ? "border-[#FF7600]"
                      : "border-white"
                  } cursor-pointer`}
                  onClick={() => setSelectedTime(period)}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex bg-[#FFF1E680] w-fit items-center text-[#979DA0] rounded-xl">
            {["orders", "revenue", "visitors"].map((category) => (
              <div
                key={category}
                className={`${
                  selectedCategory === category
                    ? "bg-[#FF7600] text-white"
                    : "text-[#979DA0]"
                } md:py-2 py-1 md:px-3 px-2 rounded-md md:rounded-xl text-sm md:text-base cursor-pointer`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          {
            <Newbar
              data={(data as any)[selectedTime][selectedCategory]}
              categories={(data as any)[selectedTime].categories}
              seriesName={
                selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)
              }
            />
          }
        </div>
      </div>
    </div>
  );
}

export default OverviewChart;
