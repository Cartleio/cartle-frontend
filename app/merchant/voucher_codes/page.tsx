"use client";
import AddHeader from "@/app/components/merchant_components/AddHeader";
import Layout from "@/app/components/merchant_components/Layout";
import { getVouchers } from "@/app/redux//feature/voucherSlice";
import { AppDispatch } from "@/app/redux/store";
import axios from "axios";
import { previousDay } from "date-fns";
import React, { useEffect, useState } from "react";
import { MdOutlinePercent } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

let voucher_codes = require("voucher-code-generator");

function DiscountAuction() {
  const [voucherCode, setVoucherCode] = useState("");
  const [isEnd_date, setIsEnd_date] = useState(false);
  const [loading, setLoading] = useState(false);

  //USE DISPATCH INSTANCE
  const dispatch = useDispatch<AppDispatch>();

  //GET ACTIVE STORE ID FROM REDUX STORE
  const { activeStoreId } = useSelector((store: any) => store.merchantData);

  const fetchVoucher = async () => {
    dispatch(getVouchers());
  };

  useEffect(() => {
    fetchVoucher();
  }, [activeStoreId]);

  //GET VOUCHER DETAILS
  const { vouchers } = useSelector((store: any) => store.vouchers);

  const generateVoucher = () => {
    const voucherCode = voucher_codes.generate({
      length: 10,
      prefix: "cartle-",
    });
    setVoucherCode(voucherCode);
  };

  const [voucherData, setVoucherData] = useState({
    storeId: activeStoreId,
    voucherCode: "",
    discountType: "",
    minimumQuantity: "",
    discountPercentage: "",
    startDate: "",
    startTime: "",
    endDate: "",
    isLimitedUse: false,
    totalNoOfUse: 0,
  });

  //RESETS TOTAL NO OF USE TO ZERO IF THE USECOUNT IS FALSE
  useEffect(() => {
    if (!voucherData.isLimitedUse) {
      setVoucherData({
        ...voucherData,
        totalNoOfUse: 0,
      });
    }
  }, [voucherData.isLimitedUse]);

  const [date, setDate] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.name === "minimumQuantity" ||
      e.target.name === "discountPercentage" ||
      e.target.name === "totalNoOfUse"
    ) {
      setVoucherData({
        ...voucherData,
        [e.target.name]: parseInt(e.target.value),
      });
    } else if (e.target.name === "startDate") {
      setDate(e.target.value);
    } else if (e.target.name === "startTime") {
      setVoucherData({
        ...voucherData,
        startDate: `${date}T${e.target.value}:00Z`,
        startTime: `${date}T${e.target.value}:00Z`,
      });
    } else if (e.target.name === "endDate") {
      setVoucherData({
        ...voucherData,
        endDate: `${date}T23:59:59Z`,
      });
    } else {
      setVoucherData({
        ...voucherData,
        [e.target.name]: e.target.value,
      });
    }
  };

  //GET TOKEN FROM AUTH STORE
  const { user } = useSelector((state: any) => state.auth);

  const handleSave = async () => {
    try {
      const token = user.token;
      setLoading(true);
      const response = await axios.post(
        `https://cartle-backend-800v.onrender.com/stores/${activeStoreId}/vouchers`,
        voucherData,
        {
          headers: {
            withCredentials: true,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.status === 201) {
        setLoading(false);
        toast.success("Voucher Created Successfully");
        dispatch(getVouchers());
        setVoucherData({
          storeId: activeStoreId,
          voucherCode: "",
          discountType: "",
          minimumQuantity: "",
          discountPercentage: "",
          startDate: "",
          startTime: "",
          endDate: "",
          isLimitedUse: false,
          totalNoOfUse: 0,
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Voucher creation failed");
    }
  };

  const addHeaderData = {
    title: "Create Voucher Discount",
    text: "",
    return_arrow_url: "/merchant/discount",
    saveFn: handleSave,
    loading: loading,
  };

  function transformTimestamp(timestamp: string) {
    const isoDate = new Date(timestamp);

    // Extracting components
    const year = isoDate.getFullYear();
    const month = isoDate.getMonth() + 1; // Month is zero-based
    const day = isoDate.getDate();
    const hours = isoDate.getHours();
    const minutes = isoDate.getMinutes();
    const seconds = isoDate.getSeconds();

    // Formatting the date and time
    const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <Layout>
      <main>
        <AddHeader {...addHeaderData} />
        <div className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-10">
          <section className="col-span-1 lg:col-span-2 flex flex-col gap-10">
            <div className="shadow-md border border-gray-400 rounded-md p-6">
              <h1 className="text-black font-bold">Voucher details</h1>

              {/* VOUCHER CODE */}
              <div className="flex flex-col gap-3 my-3">
                <h1>Enter Voucher code or Generate Code</h1>
                <div className="flex gap-3 w-full">
                  <input
                    type="text"
                    name="voucherCode"
                    id="voucherCode"
                    className="border border-gray-400 rounded-md w-full h-12 px-2 focus:outline-none focus:border-orange-600"
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={generateVoucher}
                    className="bg-[#FF7900] text-white px-3 text-sm md:text-base md:w-48  rounded-lg py-2 font-bold"
                  >
                    Generate
                  </button>
                </div>
                <p className="text-[#717678] text-base">
                  {voucherCode && <span>{voucherCode}</span>}
                </p>
                <p className="text-[#717678] text-base">
                  Customers must enter this code at checkout
                </p>
              </div>

              {/* PRODUCT TYPE */}
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">Type of discount</h1>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    className="h-4 w-4"
                    name="discountType"
                    id="product_discount"
                    value="product"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="product_discount">Product Discount</label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    className="h-4 w-4"
                    name="discountType"
                    id="order_discount"
                    value="order"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="order_discount">Order Discount</label>
                </div>
              </div>
            </div>

            {/* VOLUME */}
            <div className="shadow-md border border-gray-400 rounded-md p-6">
              <h1 className="text-black font-bold">Volume</h1>
              <div className="grid grid-cols-2 gap-5">
                {/* MINIMUM QYT */}
                <div className="flex flex-col gap-3 my-3">
                  <h1>Minimum Quantity</h1>
                  <div className="flex gap-3 w-full">
                    <input
                      type="number"
                      name="minimumQuantity"
                      id="minimumQuantity"
                      className="border appearance-none border-gray-400 rounded-md w-full h-12 px-2 focus:outline-none focus:border-orange-600"
                      placeholder="4"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* DISCOUNT PERCENTAGE */}
                <div className="flex flex-col gap-3 my-3">
                  <h1>Discount Percentage</h1>
                  <div className="flex gap-3 w-full relative">
                    <input
                      type="number"
                      name="discountPercentage"
                      id="discountPercentage"
                      onChange={handleInputChange}
                      className="border border-gray-400 rounded-md w-full h-12 px-2 focus:outline-none focus:border-orange-600"
                      placeholder="30"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      <MdOutlinePercent className="text-gray-400 text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-md border border-gray-400 rounded-md p-6 flex flex-col gap-2">
              <h1 className="text-black font-bold">Maximum discount uses</h1>

              {/* TOTAL NO OF USE */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 h-8">
                <div className="flex gap-3 w-full">
                  <div className="h-5 w-5">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      name="isLimitedUse"
                      id="isLimitedUse"
                      checked={voucherData.isLimitedUse}
                      onChange={() => {
                        setVoucherData({
                          ...voucherData,
                          isLimitedUse: !voucherData.isLimitedUse,
                        });
                      }}
                    />
                  </div>

                  <label
                    htmlFor="isLimitedUse"
                    className="text-[#717678] text-sm md:text-base"
                  >
                    Limit number of times this discount can be used in total
                  </label>
                </div>

                {voucherData.isLimitedUse && (
                  <div className="flex flex-col gap-3 my-3 w-fit">
                    <div className="flex gap-3 w-full">
                      <input
                        type="text"
                        name="totalNoOfUse"
                        id="totalNoOfUse"
                        className="border border-gray-400 rounded-md w-14 h-8 px-2 focus:outline-none focus:border-orange-600"
                        placeholder="4"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    name="limit_number_of_uses_per_customer"
                    id="limit_number_of_uses_per_customer"
                  />
                  <label
                    htmlFor="limit_number_of_uses_per_customer"
                    className="text-[#717678] text-base"
                  >
                    Limit number of uses per customer
                  </label>
                </div>
              </div>
            </div>
            {/* ACTIVE DATES */}
            <div className="shadow-md border border-gray-400 rounded-md p-6">
              <h1 className="text-black font-bold">Active dates</h1>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-3 my-3">
                  <h1>Start date & Time</h1>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-3 w-fit">
                      <input
                        type="date"
                        name="startDate"
                        id="startDate"
                        onChange={handleInputChange}
                        className="border border-gray-400 rounded-md w-full h-12 px-2 focus:outline-none focus:border-orange-600"
                      />
                    </div>

                    <div className="flex gap-3 w-fit">
                      <input
                        type="time"
                        name="startTime"
                        onChange={handleInputChange}
                        id="startTime"
                        className="border border-gray-400 rounded-md w-full h-12 px-2 focus:outline-none focus:border-orange-600"
                      />
                    </div>
                  </div>
                </div>

                {isEnd_date && (
                  <div className="flex flex-col gap-3 my-3">
                    <h1>End date</h1>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-3 w-fit">
                        <input
                          type="date"
                          name="endDate"
                          id="endDate"
                          onChange={handleInputChange}
                          className="border border-gray-400 rounded-md w-full h-12 px-2 focus:outline-none focus:border-orange-600"
                          placeholder="2024-01-02"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-red-500"
                  name="end_date"
                  id="end_date"
                  checked={isEnd_date}
                  onChange={() => {
                    setIsEnd_date(!isEnd_date);
                  }}
                />
                <label htmlFor="end_date" className="text-[#717678] text-base">
                  Set end date
                </label>
              </div>
            </div>
          </section>

          <section className="col-span-1">
            <div className="shadow-md border border-gray-400 rounded-md">
              <article className="p-4 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h1 className="text-black font-bold">Status</h1>
                  {vouchers.length < 1 ? (
                    <p className="text-[#717678]">
                      No Discount Vouchers available
                    </p>
                  ) : (
                    <p className="text-[#717678]">
                      {vouchers.length} discounts created
                    </p>
                  )}
                </div>
              </article>

              {vouchers.length > 0 && (
                <>
                  {vouchers.map((voucher: any) => {
                    const {
                      voucherCode,
                      discountPercentage,
                      discountType,
                      minimumQuantity,
                      startDate,
                      startTime,
                      totalNoOfUse,
                      endDate,
                    } = voucher;
                    return (
                      <article
                        className="border-t border-[#B6B6B6] p-4 flex flex-col gap-3"
                        key={voucher.voucherCode}
                      >
                        <h1 className="text-black font-bold">
                          Discount voucher
                        </h1>

                        <ul>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-black shrink-0"></div>
                            <p className="text-[#717678] capitalize">
                              <span className="text-black font-semibold capitalize">
                                Discount Type:
                              </span>{" "}
                              {discountType} discount
                            </p>
                          </li>

                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-black shrink-0"></div>
                            <p className="text-[#717678]">
                              <span className="text-black font-semibold">
                                Discount code:
                              </span>{" "}
                              {voucherCode}
                            </p>
                          </li>

                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-black shrink-0"></div>
                            <p className="text-[#717678]">
                              <span className="text-black font-semibold">
                                Percentage Discount:
                              </span>{" "}
                              {discountPercentage}%
                            </p>
                          </li>

                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-black shrink-0"></div>
                            <p className="text-[#717678]">
                              <span className="text-black font-semibold">
                                Minimum Quantity of product to purchase:
                              </span>{" "}
                              {minimumQuantity}
                            </p>
                          </li>

                          {totalNoOfUse ? (
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-black shrink-0"></div>
                              <p className="text-[#717678]">
                                <span className="text-black font-semibold">
                                  Usage limits:
                                </span>{" "}
                                {totalNoOfUse} products
                              </p>
                            </li>
                          ) : (
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-black shrink-0"></div>
                              <p className="text-[#717678]">
                                <span className="text-black font-semibold">
                                  {" "}
                                  No usage limits
                                </span>
                              </p>
                            </li>
                          )}

                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-black shrink-0"></div>
                            <p className="text-[#717678]">
                              <span className="text-black font-semibold">
                                start Date & Time:
                              </span>{" "}
                              {transformTimestamp(startDate)}
                            </p>
                          </li>

                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-black shrink-0"></div>
                            <p className="text-[#717678]">
                              <span className="text-black font-semibold">
                                End Date & Time:
                              </span>{" "}
                              {transformTimestamp(endDate)}
                            </p>
                          </li>
                        </ul>
                      </article>
                    );
                  })}
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default DiscountAuction;
