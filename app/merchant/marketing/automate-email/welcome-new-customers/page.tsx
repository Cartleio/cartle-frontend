"use client";
import AddHeader from "@/app/components/merchant_components/AddHeader";
import Layout from "@/app/components/merchant_components/Layout";
import React from "react";

const handleSave = () => {};

//PROPS PASSED FOR THE PRODUCT HEADER
const addHeaderData = {
  title: "Welcome New Customers",
  text: "",
  return_arrow_url: "/merchant/marketing/automate-email",
  loading: false,
  saveFn: handleSave,
};

const WelcomeNewCustomers = () => {
  return (
    <>
      <Layout>
        <AddHeader {...addHeaderData} />
        <main className="bg-white max-w-5xl mx-auto p-5 rounded-lg border-[0.5px] border-[#979DA0] shadow-sm mt-8 mb-10">
          <div className="flex items-center w-full pb-5">
            <h1 className="font-bold text-xl text-[#444748]">
              Welcome New Customers
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
                className="border border-[#B6B6B6] px-3 h-12 rounded-md shadow-sm w-full mt-2 focus:outline-none focus:border-orange-500"
                placeholder="welcome to cartle!"
              />
            </div>
            {/* PREVIEW TEXT */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                Preview text
              </h1>
              <textarea
                name=""
                className="border border-[#B6B6B6] p-3 h-40 rounded-md shadow-sm w-full mt-2 focus:outline-none focus:border-orange-500"
              ></textarea>
              <p className="text-sm text-slate-400">
                This text appears in the inbox after the subject line.
              </p>
            </div>

            {/* SENDER NAME */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                From: Sender name
              </h1>
              <input
                type="text"
                className="border border-[#B6B6B6] px-3 h-12 rounded-md shadow-sm w-full mt-2 focus:outline-none focus:border-orange-500"
                placeholder="My store"
              />
            </div>

            {/* SENDER EMAIL */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                From: Sender email
              </h1>
              <input
                type="email"
                className="border border-[#B6B6B6] px-3 h-12 rounded-md shadow-sm w-full mt-2 focus:outline-none focus:border-orange-500"
                placeholder="info@my-store.com"
              />
            </div>

            {/* TRIGGER */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                Trigger: Send Email when the customer...
              </h1>
              <section className="mt-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="contact-form"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label
                    htmlFor="contact-form"
                    className="flex flex-col leading-4"
                  >
                    <span>Contact form</span>
                    <small className="text-xs">
                      Homepage &gt; Contact us Section
                    </small>
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="sign-up-form"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label
                    htmlFor="sign-up-form"
                    className="flex flex-col leading-4"
                  >
                    <span>Sign Up Form</span>
                    <small className="text-xs">Homepage &gt; Sign Up</small>
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="newsletter-form"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label
                    htmlFor="newsletter-form"
                    className="flex flex-col leading-4"
                  >
                    <span>Newsletter Form</span>
                    <small className="text-xs">
                      Landing page &gt; Newsletter CTA
                    </small>
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="abandoned-cart"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label
                    htmlFor="abandoned-cart"
                    className="flex flex-col leading-4"
                  >
                    <span>Abandoned carts</span>
                    <small className="text-xs">Checkout &gt; Cancel CTA</small>
                  </label>
                </div>
              </section>
            </div>

            {/* TIMING */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                Timing: When to send the email
              </h1>
              <section className="mt-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="immediately-cta"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label
                    htmlFor="immediately-cta"
                    className="flex flex-col leading-4"
                  >
                    <span>Immediately after CTA is submitted</span>
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="After"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label htmlFor="After" className="flex flex-col leading-4">
                    <span>After 3 days</span>
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="every"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label htmlFor="every" className="flex flex-col leading-4">
                    <span>Every 3 days</span>
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="other"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label htmlFor="other" className="flex flex-col leading-4">
                    <span>Others</span>
                  </label>
                </div>
              </section>
            </div>

            {/* SEND TIME */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                Send time (WAT)
              </h1>
              <input
                type="time"
                className="border border-[#B6B6B6] px-3 h-12 rounded-md shadow-sm w-fit mt-2 focus:outline-none focus:border-orange-500"
                placeholder="welcome to cartle!"
              />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default WelcomeNewCustomers;
