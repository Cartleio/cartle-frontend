"use client";
import Header from "@/app/components/merchant_components/Header";
import Layout from "@/app/components/merchant_components/Layout";
import React, { useEffect } from "react";
import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import NewStore from "./NewStore";
import { getCustomers } from "@/app/redux/feature/customersSlice";
import { AppDispatch } from "@/app/redux/store";

const HeaderData = {
  title: "Customers",
  text: "All information on your customers",
};

function CustomerHome() {
  const { activeStoreId } = useSelector((store: any) => store.merchantData);
  const dispatch = useDispatch<AppDispatch>();

  const CUSTOMERS: any[] = [];

  useEffect(() => {
    dispatch(getCustomers());
  }, [activeStoreId]);

  const { customers } = useSelector((store: any) => store.customer);

  console.log(activeStoreId);
  console.log(customers);

  return (
    <>
      <Layout>
        <Header {...HeaderData} />
        <Link
          href="/merchant/add_customers"
          className="w-16 h-16 bg-[#FF7600] rounded-full fixed bottom-10 right-10 z-50"
        >
          <div className="text-3xl text-white flex items-center justify-center h-full w-full">
            <BsPlusLg />
          </div>
        </Link>

        {customers.length > 0 ? (
          <div className="py-8 flex flex-col gap-8">
            <section className="p-5 border rounded-lg shadow-sm flex flex-col gap-8">
              <div className="text-sm md:text-base lg:text-xl text-[#444748] font-medium flex items-center justify-between">
                <h1>Customers</h1>
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
                    {customers.map((customer: any) => {
                      const customer_id = customer.id;
                      return (
                        <tr key={customer.id}>
                          <td className="text-center">
                            <Link href={`/merchant/customers/${customer_id}`}>
                              {customer.firstname
                                ? customer.firstname
                                : `Customer${customer.id}`}
                            </Link>
                          </td>
                          <td className="text-center">{customer.email}</td>
                          <td className="text-center">
                            {customer.phoneNumber
                              ? customer.phoneNumber
                              : "not updated"}
                          </td>
                          <td className="text-center">
                            {customer?.orders ? customer?.orders : 0}
                          </td>
                          <td className="text-[#FF7600] font-bold">
                            <Link href={`/merchant/customers/${customer.id}`}>
                              see more
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            {/* <section className="p-5 border rounded-md shadow-sm flex flex-col gap-8">
              <div className="text-sm md:text-base lg:text-xl text-[#444748] font-medium flex items-center justify-between">
                <h1>New Customers</h1>
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
                    {CUSTOMERS.map((customer) => {
                      const {
                        customer_id,
                        customer_name,
                        customer_email,
                        customer_phone,
                        customer_orders,
                      } = customer;
                      return (
                        <tr key={customer_id}>
                          <td className="text-center">
                            <Link href={`/customer_id/${customer_id}`}>
                              {customer_name}
                            </Link>
                          </td>
                          <td className="text-center">{customer_email}</td>
                          <td className="text-center">{customer_phone}</td>
                          <td className="text-center">{customer_orders}</td>
                          <td className="text-[#FF7600] font-bold">
                            <Link href={`/merchant/${customer_id}`}>
                              see more
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="p-5 border rounded-md shadow-sm flex flex-col gap-8">
              <div className="text-sm md:text-base lg:text-xl text-[#444748] font-medium flex items-center justify-between">
                <h1>Returning Customers</h1>
                <span className="font-light text-sm">Last 30 days</span>
              </div>
              <div className=" w-full text-center h-60 overflow-auto">
                <table className="min-w-[800px] text-gray-700 md:w-full rounded-sm">
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
                        <td className="text-center">
                          {customer.customer_email}
                        </td>
                        <td className="text-center">
                          {customer.customer_phone}
                        </td>
                        <td className="text-center">
                          {customer.customer_orders}
                        </td>
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
            </section> */}
          </div>
        ) : (
          <NewStore />
        )}
      </Layout>
    </>
  );
}

export default CustomerHome;
