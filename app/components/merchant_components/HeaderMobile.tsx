import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleSettings } from "@/app/redux/feature/settingsSlice";

export default function HeaderMobile({ setOpen, open }: any) {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" flex items-center justify-between bg-white py-2">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <HiOutlineMenu className="text-3xl" />
        </div>
        <div className="p-2 flex gap-2 items-center">
          <CiSearch fontSize={28} className="font-bold" />
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
    </>
  );
}
