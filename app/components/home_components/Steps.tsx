"use client";
import React from "react";
import styles from "../../../styles/Home.module.css";

const growData: AccordionItem[] = [
  {
    title: "Think of a business idea",
    content:
      "Think of a new way to make money and select the best one for you.",
  },
  {
    title: "Take this business online ",
    content:
      "Introduce this business to your social media platforms and tell your friends. Bring your business to Cartle",
  },
  {
    title: "Bring your business to Cartle",
    content:
      "Bring your business to cartle no matter what platform you had been using previously.",
  },
  {
    title: "Create a website for your business",
    content:
      "Explore our list of templates and design a website for your business of your dreams.",
  },
  {
    title: "Advertise your store",
    content:
      "Post your business link on all social platforms. Boost your sales by telling people about it.",
  },
  {
    title: "Manage your sales and orders ",
    content:
      "Monitor which products sell out faster and who has ordered what very easily.",
  },
];

interface AccordionItem {
  title: string;
  content: string;
}
function Steps() {
  return (
    <section className="bg-primary-500 ">
      <div className="flex gap-10 text-cream-100 py-20 w-full max-w-[1440px] mx-auto">
        <div className="w-[85%] flex gap-10 items-start mx-auto">
          <ul className="flex flex-col gap-5">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <li className="flex flex-col items-center gap-5" key={index}>
                <div className="h-8 w-8 rounded-full bg-white"></div>
                <div className="w-1 h-10 md:h-20 bg-white"></div>
              </li>
            ))}
            <div className="h-8 w-8  rounded-full bg-white"></div>
          </ul>

          <ul className="w-full flex flex-col gap-5 text-white">
            {growData.map(({ title, content }, index) => (
              <li className="flex flex-col gap-5" key={index}>
                <h3
                  className={` ${styles.baskerville} text-base md:text-2xl xl:text-4xl h-8 flex items-center font-semibold`}
                >
                  {title}
                </h3>
                <p
                  className={`text-xs md:text-base xl:text-lg max-w-lg h-10 md:h-20 flex items-center `}
                >
                  {content}
                </p>
              </li>
            ))}
          </ul>

          <div className="md:flex flex-col justify-center items-center h-full hidden">
            <div
              className={`text-[12.5rem] lg:text-[16.5rem] ${styles.baskerville} rotate-180 uppercase text-center leading-none`}
              style={{ writingMode: "vertical-lr" }}
            >
              Grow!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
