"use client";
import Layout from "@/app/components/merchant_components/Layout";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../header";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import Link from "next/link";

const AutomateEmail = () => {
  const user = useSelector((state: any) => state.user);
  const { email_overlay } = useSelector((state: any) => state.overlay);

  return (
    <Layout>
      <Header title="Email Automation" />
      <section className="bg-white w-full p-5 rounded-lg border-[0.5px] border-[#979DA0] shadow-sm mt-8">
        <div className="flex items-center w-full pb-3 md:pb-5">
          <h1 className="font-bold text-lg md:text-2xl text-[#444748]">
            Create automated emails
          </h1>
        </div>

        <Link href={"/merchant/marketing/automate-email/welcome-new-customers"}>
          <article className="flex items-center justify-between border-b py-3 md:py-5">
            <div>
              <h1 className="font-semibold text-sm md:text-base text-[#444748]">
                Welcome New Customers
              </h1>
              <p className="text-[#979DA0] text-sm md:text-base">
                Customize a welcome message for every new customer that visits
                your store
              </p>
            </div>
            <IoIosArrowForward fontSize={25} />
          </article>
        </Link>

        <Link href={""}>
          <article className="flex items-center justify-between border-b py-3 md:py-5">
            <div>
              <h1 className="font-semibold text-sm md:text-base text-[#444748]">
                Abandoned Carts
              </h1>
              <p className="text-[#979DA0] text-sm md:text-base ">
                Customize a message for customers that add products to their
                carts but don’t checkout
              </p>
            </div>
            <IoIosArrowForward fontSize={25} />
          </article>
        </Link>

        <Link href={"/merchant/marketing/automate-email/newsletter"}>
          <article className="flex items-center justify-between border-b py-3 md:py-5">
            <div>
              <h1 className="font-semibold text-sm md:text-base text-[#444748]">
                Newsletters
              </h1>
              <p className="text-[#979DA0] text-sm md:text-base">
                Customize a message to share news about updates in your store
              </p>
            </div>
            <IoIosArrowForward fontSize={25} />
          </article>
        </Link>

        <Link href={""}>
          <article className="flex items-center justify-between  py-3 md:py-5">
            <div>
              <h1 className="font-semibold text-sm md:text-base text-[#444748]">
                Awards
              </h1>
              <p className="text-[#979DA0] text-sm md:text-base">
                Customize a message for your top customers
              </p>
            </div>
            <IoIosArrowForward fontSize={25} />
          </article>
        </Link>
      </section>
    </Layout>
  );
};

export default AutomateEmail;
