"use client";
import Link from "next/link";
import { useState } from 'react';
import { HiCheck } from "react-icons/hi2";
import Footer from "../components/landingpage_components/Footer";
import styles from "../../styles/Home.module.css";
import ContactForm from "../components/landingpage_components/ContactForm";
import Header from "../components/landingpage_components/Header";
const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>

    <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
          <div className="pt-20">
            <ContactForm/>
          </div>
          <Footer/>
    </>
  );
};

export default Contact;
