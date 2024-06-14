"use client";
import React, { useEffect, useState } from "react";
import { Footer, Header, About, AdSupport } from "@/app/components";
import PageLoading from "../merchant/MerchantLoader";

function Page() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
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
          <Header
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <div className="pt-10">
            <About />
          </div>
          <AdSupport />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Page;
