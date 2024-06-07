"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Header from "@/app/components/merchant_components/Header";
import Layout from "@/app/components/merchant_components/Layout";
import { AppDispatch } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import SettingsComponent from "@/app/components/settings_components/SettingsComponent";
import { getStoreDetails } from "@/app/redux/feature/settingsSlice";
import MerchantLoader from "@/app/merchant/MerchantLoader";
type HeaderData = {
  title: string;
  text: string;
};

type MerchantProfile = {
  username: string;
  profilePhoto: string;
  phoneNumber: string;
  secondaryEmail: string;
  address: string;
  countryRegion: string;
  instagramURL: string;
  facebookURL: string;
  twitterURL: string;
  tiktokURL: string;
};

const Settings: React.FC = () => {
  const headerData: HeaderData = {
    title: "Merchant Settings",
    text: "Edit your Details",
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getStoreDetails());
  }, []);

  const { isLoading } = useSelector((state: any) => state.settings);

  return (
    <Layout>
      <div className="w-full">
        <Header {...headerData} />
        {isLoading ? <MerchantLoader /> : <SettingsComponent />}
      </div>
    </Layout>
  );
};

export default Settings;
