"use client";
import { useState, useEffect } from "react";
import { Footer, ContactForm, Header } from "@/app/components";
import PageLoading from "../merchant/MerchantLoader";

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-[80vh]">
          <PageLoading />
        </div>
      ) : (
        <>
          <Header
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <div className="pt-20">
            <ContactForm />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Contact;
