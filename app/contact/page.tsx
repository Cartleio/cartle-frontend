"use client";
import Link from "next/link";
import { useState,useEffect } from 'react';
import { HiCheck } from "react-icons/hi2";
import Footer from "../components/landingpage_components/Footer";
import styles from "../../styles/Home.module.css";
import ContactForm from "../components/landingpage_components/ContactForm";
import PageLoading from "../merchant/MerchantLoader";
import Header from "../components/landingpage_components/Header";
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
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
          <div className="pt-20">
            <ContactForm/>
          </div>
          <Footer/>
    </>
      )}
    </>
  );
};

export default Contact;
