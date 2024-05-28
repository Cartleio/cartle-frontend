"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Delivered", value: 400 },
  { name: "Pending", value: 300 },
  { name: "Paid", value: 300 },
];

const COLORS = ["#FF7600", "#DFE1E2", "#FFF1E6"];

export default function ProductPieChart() {
  return (
    <div className="border border-[#979DA0] rounded-md shadow-sm w-full">
      <div className="flex flex-col gap-4 p-4 w-full">
        <strong className="text-lg lg:text-2xl text-[#444748]">
          Product Status
        </strong>
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
          <ResponsiveContainer width={"100%"} height={300}>
            <PieChart width={800} height={400}>
              <Legend />
              <Pie
                data={data}
                cx={130}
                cy={150}
                innerRadius={80}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                legendType={"circle"}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="text-[#979DA0]">October - November</p>
        </div>
        {/* use filters to change the data from weekly, yearly etc */}
      </div>
    </div>
  );
}
