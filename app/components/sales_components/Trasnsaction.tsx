"use client";
import React from "react";
import { getOrderStatus } from "../utils/data";
import Link from "next/link";
import { format } from "date-fns";

const Trasnsaction = ({ orders, OrderType, lastUpadted }: any) => {
    return (
        <>
          <div className="py-8 flex flex-col gap-8">
            <section className="p-5 border rounded-lg shadow-sm flex flex-col gap-8">
              <div className="flex items-center justify-between w-full">
                <strong className="text-lg lg:text-2xl text-[#444748] capitalize">
                  {OrderType}
                </strong>
                <p className="text-[#979DA0] text-xs md:text-sm">{lastUpadted}</p>
              </div>
              {orders.length < 1 ? (
                <p className="text-center text-[#979DA0] text-sm">
                  No {OrderType} yet
                </p>
              ) : (
                <div className=" w-full text-center h-60 overflow-auto">
                  <table className="w-full min-w-[600px] text-gray-700  rounded-sm">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Billing Name</th>
                        <th>Invoice Number</th>
                        <th>Amount</th>
                        {OrderType !== "recent orders" && (
                          <th className="text-center">Number of products</th>
                        )}
    
                        <th>Status</th>
                      </tr>
                    </thead>
    
                    <tbody className="">
                      {orders.map((order: any) => (
                        <tr key={order.id}>
                          <td>
                            {format(new Date(order?.order_date), "dd MMM yyyy")}
                          </td>
                          <td>
                            <Link href={`/customer/${order?.customer_id}`}>
                              {order?.billing_name}
                            </Link>
                          </td>
                          <td>{order?.invoice_no}</td>
                          <td>{order?.order_price}</td>
    
                          {OrderType !== "recent orders" && (
                            <td className="text-center">{order?.product_qty}</td>
                          )}
                          <td>
                            {getOrderStatus(
                              order.current_order_status.toUpperCase()
                            )}
                          </td>
                          <td className="text-orange-500 text-sm">
                            <Link href={`/merchant/orders/${order.id}`}>
                              see more
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
    
            {/* use filters to change the data from weekly, yearly etc */}
          </div>
        </>
      );
    }
    
export default Trasnsaction


 
