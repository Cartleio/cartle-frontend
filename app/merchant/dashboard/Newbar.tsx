"use client";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import React from "react";

function Newbar({ data }: any) {
  type SeriesData = { name: string; data: number[] };
  const options = {
    chart: {
      width: "100%",
      height: 180,
    },
    series: [
      {
        name: "Net Profit",
        data: data,
      },
    ] as SeriesData[],

    colors: ["#FF7600"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
        borderRadius: 10,
        borderRadiusApplication: "end" as const,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "21 Nov",
        "22 Nov",
        "23 Nov",
        "24 Nov",
        "25 Nov",
        "26 Nov",
        "27 Nov",
      ],
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "",
      },
    },
    fill: {
      opacity: 1,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
            height: 260,
          },
          plotOptions: {
            bar: {
              borderRadius: 5,
              borderRadiusApplication: "end" as const,
            },
          },
        },
      },
    ],
  };

  return (
    <div className="w-full lg:w-[95%] border-5 border-red-600">
      <ApexCharts
        type={"bar"}
        width={"100%"}
        height={330}
        series={options.series}
        options={options}
      />
    </div>
  );
}

export default Newbar;
