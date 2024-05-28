"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { LuMails } from "react-icons/lu";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import style from "../../../styles/Home.module.css";
import logo from "../../../public/img (1).png";

function Footer(): JSX.Element {
  type LinkDetail = {
    link: string;
    address: string;
  };
  type ContactInfo = {
    info: string;
    icon: JSX.Element;
    infoDetails: string;
  };
  type SocialIcon = {
    address: string;
    icon: JSX.Element;
  };

  const linkDetails: LinkDetail[] = [
    { link: "About us", address: "./about" },
    { link: "Contact", address: "./contact" },
    { link: "Privacy policy", address: "./privacy_policy" },
    { link: "Sitemap", address: "./sitemap" },
    { link: "Terms of Use", address: "./terms_of_Use" },
  ];

  const contactInfo: ContactInfo[] = [
    { info: "Tel", icon: <FiPhoneCall />, infoDetails: "310-437-2766" },
    { info: "Address", icon: <ImLocation2 />, infoDetails: "Lagos, Nigeria" },
    { info: "Email", icon: <LuMails />, infoDetails: "info@cartle.io" },
  ];

  const socialIcon: SocialIcon[] = [
    { address: "www.facebook.com", icon: <AiOutlineFacebook /> },
    { address: "www.facebook.com", icon: <RiTwitterXFill /> },
    { address: "www.facebook.com", icon: <AiOutlineInstagram /> },
    { address: "www.facebook.com", icon: <AiOutlineWhatsApp /> },
  ];

  return (
    <section className="bg-cream-100">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 py-12 justify-items-start lg:justify-items-center lg:gap-0 gap-8">
          <Link
            href={"/"}
            className="flex flex-col item-center justify-start lg:justify-center md:col-start-1 md:col-span-2 lg:col-start-1 lg:col-span-1"
          >
            <img src="/img (1).png" className="w-[30vw] md:w-[10vw]" alt="" />
            <p className="my-2 text-zinc-500 text-lg md:text-xl w-[90%] md:w-[80%]">
              Make your sales an easier and more organised task.
            </p>
          </Link>

          <div>
            <div className="mb-6">
              <h1
                className={`text-lg text-zinc-700 font-bold ${style.baskerville}`}
              >
                Contact us
              </h1>
              <p className="text-zinc-700">Reach out anytime</p>
            </div>
            <div>
              {contactInfo.map(({ icon, info, infoDetails }, index) => (
                <div className="flex" key={index}>
                  <div className="w-10 h-10 mr-4 bg-white text-primary-500 flex items-center justify-center rounded-[50%] ">
                    {icon}
                  </div>
                  <div>
                    <h1>{info}</h1>
                    <p className="text-zinc-700 font-bold">{infoDetails}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h1
                className={`text-lg text-zinc-700 font-bold ${style.baskerville}`}
              >
                Socials
              </h1>
              <p className="text-zinc-700">Reach out anytime</p>
            </div>
            <div className="flex">
              {socialIcon.map(({ icon, address }, index) => (
                <div
                  className="w-10 h-10 mr-4 bg-white text-primary-500 flex items-center justify-center rounded-[50%]"
                  key={index}
                >
                  <a href={address} target="blank" className="text-primary-500">
                    {icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start md:item-center lg:justify-between border-zinc-500 border-t-[1px] my-1 p-3 px-2 md:px-8 gap-8 md:gap-0">
          <div className="grid grid-cols-1 gap-4 md:block">
            {linkDetails.map(({ link, address }, index) => (
              <Link href={address} className="mr-3 md:mr-8" key={index}>
                {link}
              </Link>
            ))}
          </div>
          <p className="justify-self-center">
            &copy; 2023-{new Date().getFullYear()}, All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Footer;
