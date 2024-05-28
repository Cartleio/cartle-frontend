"use client";
import React from "react";
import { CUSTOMERS } from "@/app/components/utils/data";
import Link from "next/link";

const SegmentTable = ({ title }: { title: string }) => {
  return (
    <section className="p-5 border rounded-lg shadow-sm flex flex-col gap-8">
      <div className="text-sm md:text-base lg:text-xl text-[#444748] font-medium flex items-center justify-between">
        <h1>{title}</h1>
        <span className="font-light text-sm">Last 30 days</span>
      </div>

      <div className=" w-full text-center h-60 overflow-auto">
        <table className="min-w-[800px] md:w-full text-gray-700  rounded-sm">
          <thead>
            <tr className="text-center">
              <th className="text-center">Name</th>
              <th className="text-center">Email address</th>
              <th className="text-center">Phone Number</th>
              <th className="text-center">Number of Orders</th>
            </tr>
          </thead>

          <tbody className="text-xs  h-8">
            {CUSTOMERS.map((customer) => (
              <tr key={customer.id}>
                <td className="text-center">
                  <Link href={`/customer_id/${customer.customer_id}`}>
                    {customer.customer_name}
                  </Link>
                </td>
                <td className="text-center">{customer.customer_email}</td>
                <td className="text-center">{customer.customer_phone}</td>
                <td className="text-center">{customer.customer_orders}</td>
                <td className="text-[#FF7600] font-bold">
                  <Link href={`/merchant/${customer.customer_id}`}>
                    see more
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SegmentTable;
