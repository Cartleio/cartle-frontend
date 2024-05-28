"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "21 Nov",
    pv: "70",
  },
  {
    name: "22 Nov",
    pv: "50",
  },
  {
    name: "23 Nov",
    pv: "60",
  },
  {
    name: "24 Nov",
    pv: "40",
  },
  {
    name: "25 Nov",
    pv: "70",
  },
  {
    name: "26 Nov",
    pv: "20",
  },
  {
    name: "27 Nov",
    pv: "60",
  },
  {
    name: "28 Nov",
    pv: "60",
  },
  {
    name: "29 Nov",
    pv: "60",
  },
];
function Barchart() {
  return (
    <div className="h-64 w-full -z-[99999999999]">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" tickLine={false} axisLine={true} />
          <YAxis tickLine={false} />
          <Tooltip />
          <Bar
            dataKey="pv"
            fill="#FF7600"
            activeBar={<Rectangle fill="#FF7600" stroke="#FF7600" />}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barchart;
