"use client";
import React, { useEffect } from "react";
import Header from "@/app/components/merchant_components/Header";
import Layout from "@/app/components/merchant_components/Layout";
import { AppDispatch } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";
import SettingsComponent from "@/app/components/settings_components/SettingsComponent";
import { getStoreDetails } from "@/app/redux/feature/settingsSlice";
import MerchantLoader from "@/app/merchant/MerchantLoader";
import SalesContainer from "@/app/components/sales_components/SalesContainer";
type HeaderData = {
  title: string;
  text: string;
};


const Sales: React.FC = () => {
  const headerData: HeaderData = {
    title: "Sales",
    text: "",
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getStoreDetails());
  }, []);

  const { isLoading } = useSelector((state: any) => state.settings);

  return (
    <Layout>
      <div className="w-full">
        
        {isLoading ? <MerchantLoader /> : <SalesContainer />}
      </div>
    </Layout>
  );
};

export default Sales;
