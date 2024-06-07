"use client";
import { toggleSettings } from "@/app/redux/feature/settingsSlice";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import styles from "../../../styles/Home.module.css";
import { openEmailOverlay } from "@/app/redux/feature/overlay-slice";

const Header = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  return (
    <div className="text-[#979DA0] flex-row flex items-center h-auto md:h-20 w-full justify-between">
      <div className="w-fit flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60"
          fill="none"
          className="h-10 w-10 cursor-pointer"
          onClick={() => dispatch(openEmailOverlay())}
        >
          <path
            d="M47.5 30H12.5"
            stroke="#121212"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 47.5L12.5 30L30 12.5"
            stroke="#121212"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1
          className={`text-[#0B0B0B] text-2xl lg:text-3xl ${styles.baskerville}`}
        >
          {title}
        </h1>
      </div>

      <div className="md:flex flex-1 items-center justify-end hidden">
        <div className="md:w-[70%] xl:w-[70%] flex items-center justify-end gap-6">
          <div className="relative h-10 flex-1">
            <input
              type="text"
              placeholder="Search"
              className="border border-[#B6B6B6] w-full px-3 hover:outline-none focus:outline-none rounded-md h-full"
            />
            <CiSearch
              fontSize={24}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="flex items-center w-18 gap-2 justify-end">
            <div className="relative">
              <div className="bg-orange-600 h-2 w-2 rounded-full absolute top-1 right-1"></div>
              <IoIosNotificationsOutline fontSize={28} className="text-black" />
            </div>
            <IoSettingsOutline
              fontSize={26}
              className="text-black"
              onClick={() => dispatch(toggleSettings())}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
