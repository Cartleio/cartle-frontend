"use client";
import React from "react";
import styles from "../../../styles/Home.module.css";

function Newsletter() {
  return (
    <section className=" bg-primary-100">
      <div className="py-10 md:py-20 flex flex-col gap-5 md:gap-10 justify-center items-center max-w-[1440px] mx-auto">
        <h1
          className={`text-lg md:text-2xl xl:text-4xl font-semibold ${styles.baskerville} text-[#5B5E60]`}
        >
          Subscribe to our Newsletter
        </h1>

        <div className="flex">
          <input
            type="email"
            className="p-3 md:p-4 text-xs lg:text-xl w-full md:w-[40vw] border-r-0 rounded-l-lg font-bold text-black focus:border-0 focus:outline-none "
            placeholder="Enter E-mail"
          />
          {/* <button className="bg-primary-500 px-[0.75em] py-[0.6em] lg:px-[1em] lg:py-[.8em] rounded-md text-xs lg:text-xl font-semibold text-white ">
            subscribe
          </button> */}
          <button className="bg-primary-500 text-xs lg:text-xl font-bold text-white rounded-r-lg px-[1em] hover:opacity-90 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
