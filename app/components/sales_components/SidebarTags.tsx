"use client";
import React, { useState, useEffect } from "react";
import { SIDEBAR_TAGS_DATA2 } from "../utils/data";
import axios from "axios";

function SidebarTags() {
  // State to store dedicated account details
  const [dedicatedAccount, setDedicatedAccount] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
  });

  // Function to get user email from local storage
  const getUserEmailFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const userString = localStorage.getItem("user");
      const user = userString ? JSON.parse(userString) : null;
      return user ? user.email : null;
    }
    return null;
  };

  // Function to fetch dedicated account details from Paystack API
  const fetchDedicatedAccountDetails = async (email:string) => {
    try {
      const response = await axios.get(
        `https://api.paystack.co/customer/${email}`,
        {
          headers: {
            Authorization: `Bearer sk_test_f12a495ebb307f13522700424fcb01a7512312d0`,
          },
        }
      );

      const accountDetails = response.data.data.dedicated_account;
      setDedicatedAccount({
        bankName: accountDetails.bank.name,
        accountNumber: accountDetails.account_number,
        accountName: accountDetails.account_name,
      });
    } catch (error) {
      console.error("Error fetching dedicated account details:", error);
    }
  };

  useEffect(() => {
    // Fetch the user email from local storage and fetch the account details
    const email = getUserEmailFromLocalStorage();
    if (email) {
      fetchDedicatedAccountDetails(email);
    }
  }, []);

  return (
    <div className="grid grid-cols-2 justify-items-center md:flex md:flex-col gap-3 md:gap-4">
      {SIDEBAR_TAGS_DATA2.map((item, index) => (
        <div
          className="flex gap-1 md:gap-4 border items-center p-3 lg:p-4 rounded-2xl shadow-sm"
          key={index}
        >
          <div
            className="h-10 w-10 lg:h-14 lg:w-14 text-xl md:text-3xl rounded-full flex items-center justify-center"
            style={{ backgroundColor: item.bgColor }}
          >
            {item.icon}
          </div>
          <div>
            <h2 className="text-md text-[#979DA0]">{item.label}</h2>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold md:text-xl">{item.price}</h1>
              <span className="text-[#979DA0] text-xs">{item.quote}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Display the dedicated account details */}
      <div className="flex flex-col gap-2 p-3 lg:p-4 border rounded-2xl shadow-sm">
        <h2 className="text-md text-[#979DA0]">Dedicated Account Details</h2>
        <div className="text-sm">
          <strong>Bank Name:</strong> {dedicatedAccount.bankName || "Loading..."}
        </div>
        <div className="text-sm">
          <strong>Account Number:</strong> {dedicatedAccount.accountNumber || "Loading..."}
        </div>
        <div className="text-sm">
          <strong>Account Name:</strong> {dedicatedAccount.accountName || "Loading..."}
        </div>
      </div>
    </div>
  );
}

export default SidebarTags;
