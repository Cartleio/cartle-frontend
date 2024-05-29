"use client";
import React, { useEffect, useState } from "react";
import Footer from "../components/landingpage_components/Footer";
import PageLoading from "../merchant/MerchantLoader";
import Header from "../components/landingpage_components/Header";
import AdSupport from "../components/landingpage_components/AdSupport";
import PricingTable from "../components/landingpage_components/PricingTable";

function Pricing() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="bg-white w-full font-inter mx-auto">
      {loading ? (
        <div className="min-h-[80vh]">
          <PageLoading />
        </div>
      ) : (
        <div className="bg-[#FFFFFF]">
          <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          <div className="pt-10">
            <PricingTable />
          </div>
          <AdSupport />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Pricing;
