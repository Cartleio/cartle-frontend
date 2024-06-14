"use client";
import React from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

function NewPie() {
  let options = {
    series: [44, 55, 41],
    chart: {
      type: "donut" as const,
    },
    labels: ["Delivered", "pending", "paid"],
    colors: ["#FF7600", "#DFE1E2", "#FFF1E6"],
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
            height: 400,
          },
        },
      },
    ],
  };
  return (
    <div className="w-full ">
      <div className="border  rounded-md shadow-sm w-full">
        <div className="flex flex-col gap-4 p-4 w-full">
          <strong>Product Status</strong>
          <div className="flex flex-col gap-4 items-center justify-center h-full w-full ">
            <ApexCharts
              type={"donut"}
              width={"100%"}
              series={options.series}
              options={options}
            />
            <p className="text-[#979DA0]">October - November</p>
          </div>
          {/* use filters to change the data from weekly, yearly etc */}
        </div>
      </div>
    </div>
  );
}

export default NewPie;
