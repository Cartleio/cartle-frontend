"use client";
import Layout from "@/app/components/merchant_components/Layout";
import React from "react";
import Header from "../header";
import CampaignTable from "./CampaignTable";
import { CAMPAIGN_DATA } from "@/app/components/utils/data";
import Link from "next/link";

const Campaign = () => {
  return (
    <Layout>
      <Header title="Campaign" />
      <main className="mb-10">
        <CampaignTable
          lastUpadted="Updated 20 minutes ago"
          tableType="Campaigns"
          data={CAMPAIGN_DATA}
        />
        <div className=" w-full text-center overflow-auto">
          <Link href={"/merchant/marketing/campaign/add_campaign"}>
            <button className="border bg-[#FF7900] text-white text-xs md:text-base md:w-48  rounded-lg py-2 font-bold px-3">
              Create Campaign
            </button>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Campaign;
