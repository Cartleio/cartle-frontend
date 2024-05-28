"use client";
import React from "react";
import { getEmailStatus } from "../../../components/utils/data";
import Link from "next/link";

function EmailTable({ data, tableType, lastUpadted }: any) {
  return (
    <div className="py-8 flex flex-col gap-8">
      <section className="p-5 border rounded-lg shadow-sm flex flex-col gap-8">
        <div className="flex items-center justify-between w-full">
          <strong className="text-lg lg:text-2xl text-[#444748] capitalize">
            {tableType}
          </strong>
          <p className="text-[#979DA0] text-xs md:text-sm">{lastUpadted}</p>
        </div>

        <div className=" w-full text-center h-60 overflow-auto">
          <table className="w-full min-w-[600px] text-gray-700  rounded-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email address</th>
                <th>Phone Number</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="">
              {data.map((mail: any) => (
                <tr key={mail.id}>
                  <td>
                    <Link href={`/merchant/customers/${mail.id}`}>
                      {mail?.customer_name}
                    </Link>
                  </td>
                  <td>{mail?.customer_email}</td>
                  <td>{mail?.customer_phone}</td>

                  <td>{getEmailStatus(mail.email_status.toUpperCase())}</td>
                  {/* <td className="text-orange-500 text-sm">
                    <Link href={`/merchant/orders/${order.id}`}>see more</Link>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* use filters to change the data from weekly, yearly etc */}
    </div>
  );
}

export default EmailTable;
