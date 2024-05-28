"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
function Banner() {
  return (
    <header className={`bg-cream-100`}>
      <div className="w-full grid grid-cols-5 p-[2.5em] text-base max-w-[1440px] mx-auto">
        <div
          className="text-center flex flex-col gap-8 justify-center items-center h-full w-full col-span-5 md:col-span-3 relative 
        "
        >
          <h1
            className={`text-2xl md:text-4xl xl:text-[3.8rem] xl:leading-[4rem] uppercase ${styles.baskerville} text-[#353738] font-semibold`}
          >
            imagine&#44;create and sell with
            <span className="text-primary-500 pl-3">cartle</span>
          </h1>
          <h2 className="text-base lg:text-xl text-[#000609] font-extralight">
            Do the impossible...
          </h2>
          <Link href={"/auth/signup"}>
            <button className="bg-primary-500 px-[0.75em] py-[0.6em] lg:px-[1.5em] lg:py-[1em] rounded-md text-sm lg:text-xl font-semibold text-white">
              Get Started for Free
            </button>
          </Link>
        </div>
        <img
          src="/hero.jpg"
          className="md:col-span-2 w-full object-cover md:block hidden"
          alt=""
        />
      </div>
    </header>
  );
}

export default Banner;
