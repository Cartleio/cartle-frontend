"use client";
import Layout from "@/app/components/merchant_components/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import styles from "../../../../../styles/Home.module.css";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { IoIosSend } from "react-icons/io";

const Newsletter = () => {
  //ACCESSING STORE DETAILS AND ACTIVE STORE INFORMATION
  const { activeStoreId } = useSelector((store: any) => store.merchantData);

  //SEND NEWSLETTER EMAIL LOADING STATE
  const [loading, setLoading] = useState(false);

  //NEWSLETTER EMAIL DATA STATE
  const [emailData, setEmailData] = useState({
    emailSubject: "",
    emailText: "",
    emailHtml: "",
  });

  //NEWSLETTER EMAIL DATA UPDATE
  const handleFormUpdate = (e: any) => {
    setEmailData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  //UPDATES THE EMAIL HTML ONCE THE EMAILTEXT IS UPDATED
  useEffect(() => {
    setEmailData({
      ...emailData,
      emailHtml: `<p>${emailData.emailText}</p>`,
    });
  }, [emailData.emailText]);

  //GETS THE USER INFORMATION: PROVIDES US ACCESS TO THE TOKEN
  const { user } = useSelector((state: any) => state.auth);

  //SEND NEWSLETTER EMAIL URL
  const url = `https://cartle-backend-800v.onrender.com/merchant/send-newsletter/${activeStoreId}`;

  //SEND NEWSLETTER EMAIL REQUEST FUNCTION
  const handleSend = async () => {
    try {
      setLoading(true);
      const token = user.token;
      const response = await axios.post(url, emailData, {
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${token}`,
        },
      });

      if (response?.status === 200) {
        setLoading(false);
        toast.success("Newsletter Sent Successfully");
        setEmailData({
          emailSubject: "",
          emailText: "",
          emailHtml: "",
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Newsletter not sent");
    }
  };

  return (
    <Layout>
      <ToastContainer />

      <div className="text-[#979DA0] md:flex-row flex-col gap-3 flex item-center h-auto md:h-20 w-full ">
        <div className="w-fit flex  items-center gap-2 order-2 md:order-1">
          <div className="flex items-center gap-2">
            <Link
              href={"/merchant/marketing/automate-email"}
              className="hidden md:inline-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                fill="none"
                className="h-10 w-10 cursor-pointer"
              >
                <path
                  d="M47.5 30H12.5"
                  stroke="#121212"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 47.5L12.5 30L30 12.5"
                  stroke="#121212"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            <div>
              <h1
                className={`text-[#0B0B0B] text-2xl lg:text-3xl ${styles.baskerville}`}
              >
                Newsletter
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between md:justify-end order-1 md:order-2">
          <Link
            href={"/merchant/marketing/automate-email"}
            className="md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              fill="none"
              className="h-10 w-10 cursor-pointer"
            >
              <path
                d="M47.5 30H12.5"
                stroke="#121212"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 47.5L12.5 30L30 12.5"
                stroke="#121212"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="w-[90%] xl:w-[70%] flex items-center justify-end gap-6">
            <button className="bg-[#979DA0] text-white px-3  py-2 rounded-md">
              Draft
            </button>

            <button
              className="bg-[#DFE1E2] hover:bg-[#979DA0] text-white px-3  py-2 rounded-md flex items-center gap-2"
              onClick={handleSend}
            >
              {loading ? (
                <LoadingSpinner />
              ) : (
                <div className="flex items-center gap-2">
                  <span>Send</span>
                  <IoIosSend />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      <main className="bg-white max-w-5xl mx-auto p-5 rounded-lg border-[0.5px] border-[#979DA0] shadow-sm mt-8 mb-10">
        <div className="flex items-center w-full pb-5">
          <h1 className="font-bold text-xl text-[#444748]">
            Update your Customers
          </h1>
        </div>

        <section className="flex flex-col gap-4">
          {/* EMAIL SUBJECT */}
          <div>
            <h1 className="font-semibold text-md text-[#444748]">
              Email Subject
            </h1>
            <input
              type="text"
              name="emailSubject"
              value={emailData.emailSubject}
              onChange={handleFormUpdate}
              className="border border-[#B6B6B6] px-3 h-12 rounded-md shadow-sm w-full mt-2 focus:outline-none focus:border-orange-500"
              placeholder="welcome to cartle!"
            />
          </div>

          {/* EMAIL MESSAGE */}
          <div>
            <h1 className="font-semibold text-md text-[#444748]">Message</h1>
            <textarea
              name="emailText"
              value={emailData.emailText}
              onChange={handleFormUpdate}
              className="border border-[#B6B6B6] p-3 h-40 rounded-md shadow-sm w-full mt-2 focus:outline-none focus:border-orange-500"
            ></textarea>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Newsletter;
