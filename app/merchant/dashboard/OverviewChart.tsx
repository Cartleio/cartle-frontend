"use client";
import React, { useState } from "react";
import Barchart from "./BarChart";
import Newbar from "./Newbar";

function OverviewChart() {
  const today = { tag: "today", data: [17, 9, 14, 7, 9, 25, 8] };
  const weekly = { tag: "weekly", data: [17, 9, 10, 7, 30, 20, 8] };
  const monthly = { tag: "monthly", data: [10, 8, 17, 31, 30, 25, 8] };
  const yearly = { tag: "yearly", data: [17, 9, 14, 7, 9, 25, 8] };

  const [barData, setBarData] = useState(today);

  return (
    <div className="border border-[#979DA0] rounded-md shadow-sm lg:flex-1 overflow-x-auto">
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
              <span
                className={`text-[0.7rem] md:text-base text-black border-b-2 ${
                  barData.tag === "today" ? "border-[#FF7600]" : "border-white"
                }  cursor-pointer`}
                onClick={() => setBarData(today)}
              >
                Today
              </span>
              <span
                className={`text-[0.7rem] md:text-base text-black border-b-2 ${
                  barData.tag === "weekly" ? "border-[#FF7600]" : "border-white"
                }  cursor-pointer`}
                onClick={() => setBarData(weekly)}
              >
                Weekly
              </span>
              <span
                className={`text-[0.7rem] md:text-base text-black border-b-2 ${
                  barData.tag === "monthly"
                    ? "border-[#FF7600]"
                    : "border-white"
                }  cursor-pointer`}
                onClick={() => setBarData(monthly)}
              >
                Monthly
              </span>
              <span
                className={`text-[0.7rem] md:text-base text-black border-b-2 ${
                  barData.tag === "yearly" ? "border-[#FF7600]" : "border-white"
                }  cursor-pointer`}
                onClick={() => setBarData(yearly)}
              >
                Yearly
              </span>
            </div>
          </div>

          <div className=" flex bg-[#FFF1E680] w-fit items-center text-[#979DA0] rounded-xl">
            <div className="  text-[#979DA0] md:py-2 py-1 md:px-3  px-2 rounded-md md:rounded-xl text-sm md:text-base">
              Revenue
            </div>
            <div className="bg-[#FF7600] text-white rounded-md md:rounded-xl md:py-2 py-1 md:px-3 px-2  text-sm md:text-base">
              Visitors
            </div>
            <div className=" text-[#979DA0] rounded-md md:rounded-xl md:py-2 py-1 md:px-3 px-2  text-sm md:text-base">
              Orders
            </div>
          </div>
        </div>

        <div className="w-full">{<Newbar data={barData.data} />}</div>
        {/* use filters to change the data from weekly, yearly etc */}
      </div>
    </div>
  );
}

export default OverviewChart;
