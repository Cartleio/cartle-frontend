"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { ApexOptions } from "apexcharts";
import MerchantLoader from "@/app/merchant/MerchantLoader";

// Dynamically import the ApexCharts component to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Type definitions for ApexCharts series
interface Series {
  name: string;
  data: number[];
}

const TransactionOverview: React.FC = () => {
  // State to hold chart options and series
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
    chart: {
      id: "transaction-overview",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "1 Nov", "2 Nov", "3 Nov", "4 Nov", "5 Nov", "6 Nov", "7 Nov",
        "8 Nov", "9 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov", "14 Nov",
        "15 Nov", "16 Nov", "17 Nov", "18 Nov", "19 Nov", "20 Nov", "21 Nov",
        "22 Nov", "23 Nov", "24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov",
        "29 Nov", "30 Nov",
      ],
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return `$${value.toFixed(2)}`;
        },
      },
    },
    stroke: {
      curve: "smooth" as "smooth", // Explicitly cast to allowed type
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#FF7600"],
        inverseColors: true,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      x: {
        format: "dd MMM",
      },
    },
  });

  const [chartSeries, setChartSeries] = useState<Series[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setChartSeries([
        {
          name: "Gross Sales",
          data: [
            100, 200, 150, 300, 250, 350, 400, 380, 360, 370, 400, 450, 470,
            500, 480, 460, 450, 430, 420, 410, 430, 450, 460, 480, 500, 520,
            540, 560, 580, 600,
          ],
        },
      ]);
      setLoading(false);
    }, 1500); // Simulate a delay for fetching data
  }, []);

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button className="px-4 py-1 bg-gray-200 rounded-md text-sm">
            Gross sales
          </button>
        </div>
        <div className="flex items-center gap-2">
          <MdKeyboardArrowLeft size={24} className="cursor-pointer" />
          <span>November 2023</span>
          <MdKeyboardArrowRight size={24} className="cursor-pointer" />
        </div>
      </div>

      {loading ? (
        // Show loading spinner while data is being loaded
        <div className="flex justify-center items-center h-[350px]">
          loading....
        </div>
      ) : chartSeries[0]?.data.length === 0 ? (
        // Show empty state if there's no data
        <div className="flex justify-center items-center h-[350px]">
          <p className="text-gray-500">No data available</p>
        </div>
      ) : (
        // Show the chart if data is available
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={350}
        />
      )}
    </div>
  );
};

export default TransactionOverview;
