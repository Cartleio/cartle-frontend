"use client";
import React from "react";

import Expansion from "../../components/Expansion";
import styles from "../../../styles/Home.module.css";
interface AccordionItem {
  title: string;
  content: string;
}

const accordionDommyData: AccordionItem[] = [
  {
    title: "Can I Get Help If I'm Stuck",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe quam sapiente eligendi, labore voluptatibus praesentium sit id sedducimus. Ea eveniet porro unde, veniam voluptates a voluptatem quaeratfacilis.",
  },
  {
    title: "How do I use Cartle?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe quam sapiente eligendi, labore voluptatibus praesentium sit id sedducimus. Ea eveniet porro unde, veniam voluptates a voluptatem quaeratfacilis.",
  },
  {
    title: "How do I recover my account?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe quam sapiente eligendi, labore voluptatibus praesentium sit id sedducimus. Ea eveniet porro unde, veniam voluptates a voluptatem quaeratfacilis.",
  },
  {
    title: "How do I add products to my store? ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe quam sapiente eligendi, labore voluptatibus praesentium sit id sedducimus. Ea eveniet porro unde, veniam voluptates a voluptatem quaeratfacilis.",
  },
  {
    title: "How do I communicate with clients?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe quam sapiente eligendi, labore voluptatibus praesentium sit id sedducimus. Ea eveniet porro unde, veniam voluptates a voluptatem quaeratfacilis.",
  },
];
function FAQ() {
  return (
    <section className="bg-[#F5F5F6]">
      <div className="grid grid-cols-3 py-20 px-10 items-center max-w-[1440px] mx-auto w-[100%]">
        <div className="flex items-center justify-center col-span-3 md:col-span-1 pb-5 md:pb-0">
          <h1 className={`  w-fit text-zinc-500 text-center relative`}>
            <div className="absolute -top-7 right-0 translate-x-[90%]">
              <img src="/ques_icon.png" alt="" width={60} />
            </div>
            <p
              className={`text-4xl md:text-5xl xl:text-7xl ${styles.baskerville} font-semibold`}
            >
              FAQ
            </p>
          </h1>
        </div>

        <ul className="col-span-3 md:col-span-2 flex flex-col gap-2 w-full">
          {accordionDommyData.map((item, index) => (
            <li key={index}>
              <Expansion title={item.title} content={item.content} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FAQ;
