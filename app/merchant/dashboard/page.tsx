import React from "react";
import { Layout, DashboardContainer } from "@/app/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Where the world sells",
};

export default function Dashboard() {
  return (
    <Layout>
      <DashboardContainer />
    </Layout>
  );
}
