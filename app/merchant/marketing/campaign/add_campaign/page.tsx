"use client";
import AddHeader from "@/app/components/merchant_components/AddHeader";
import Layout from "@/app/components/merchant_components/Layout";
import React from "react";

const handleSave = () => {};

//PROPS PASSED FOR THE PRODUCT HEADER
const addHeaderData = {
  title: "Create Campaign",
  text: "",
  return_arrow_url: "/merchant/marketing/campaign",
  loading: false,
  saveFn: handleSave,
};

const AddCampaign = () => {
  return (
    <>
      <Layout>
        <AddHeader {...addHeaderData} />
        <main className="bg-white max-w-5xl mx-auto p-5 rounded-lg border-[0.5px] border-[#979DA0] shadow-sm mt-8 mb-10">
          <div className="flex items-center w-full pb-5">
            <h1 className="font-bold text-xl text-[#444748]">
              Create Campaign
            </h1>
          </div>

          <section className="flex flex-col gap-4">
            {/* CAMPAIGN NAME */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                Campaign Name
              </h1>
              <input
                type="text"
                className="border border-[#B6B6B6] px-3 h-12 rounded-md shadow-sm w-full mt-2 focus:outline-none focus:border-orange-500"
                placeholder="welcome to cartle!"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                Description
              </h1>
              <textarea
                name=""
                className="border border-[#B6B6B6] p-3 h-40 rounded-md shadow-sm w-full mt-2 focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>

            {/* CAMPAIGN REACH */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                Campaign Reach
              </h1>
              <input
                type="text"
                className="border border-[#B6B6B6] px-3 h-12 rounded-md shadow-sm w-full mt-2 focus:outline-none focus:border-orange-500"
                placeholder="600 store visits"
              />
            </div>

            {/* APPS TO BROADCAST */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                Apps to broadcast campaign
              </h1>
              <section className="mt-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="linkedin"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label htmlFor="linkedin" className="flex flex-col leading-4">
                    <span>LinkedIn</span>
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="twitter"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label htmlFor="twitter" className="flex flex-col leading-4">
                    <span>X</span>
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="Instagram"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label
                    htmlFor="Instagram"
                    className="flex flex-col leading-4"
                  >
                    <span>Instagram</span>
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="snapchat"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label htmlFor="snapchat" className="flex flex-col leading-4">
                    <span>Snapchat</span>
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="whatsapp"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label htmlFor="whatsapp" className="flex flex-col leading-4">
                    <span>Whatsapp</span>
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="tik-tok"
                    className="border border-[#B6B6B6] h-4 w-4 rounded-md shadow-sm"
                  />
                  <label htmlFor="tik-tok" className="flex flex-col leading-4">
                    <span>Tik Tok</span>
                  </label>
                </div>
              </section>
            </div>

            {/* PUBLISH TIME */}
            <div>
              <h1 className="font-semibold text-md text-[#444748]">
                Publish Time
              </h1>
              <input
                type="time"
                className="border border-[#B6B6B6] px-3 h-12 rounded-md shadow-sm w-fit mt-2 focus:outline-none focus:border-orange-500"
              />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default AddCampaign;
