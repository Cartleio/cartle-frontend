"use client";
import { closeEmailOverlay } from "@/app/redux/feature/overlay-slice";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { EMAIL_OVERLAY_NAV_LINKS } from "../../components/utils/data";

const Overlay = () => {
  const dispatch = useDispatch();
  return (
    <section className="bg-white w-[90%] md:w-[50rem] p-5 rounded-lg">
      <div className="flex items-center justify-between w-full pb-3 md:pb-5">
        <h1 className="font-bold text-lg md:text-2xl">
          Select Email Marketing type
        </h1>
        <IoMdClose
          className="text-xl text-black font-bold"
          onClick={() => dispatch(closeEmailOverlay())}
        />
      </div>

      {EMAIL_OVERLAY_NAV_LINKS.map((EMAIL_OVERLAY_NAV_LINK) => {
        const { id, link, label, text } = EMAIL_OVERLAY_NAV_LINK;
        return (
          <Link
            href={link}
            onClick={() => dispatch(closeEmailOverlay())}
            key={id}
          >
            <article className="flex items-center justify-between border-b py-3 md:py-5">
              <div>
                <h1 className="text-sm md:text-base">{label}</h1>
                <p className="text-[#979DA0] text-sm md:text-base">{text}</p>
              </div>
              <IoIosArrowForward fontSize={25} />
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Overlay;
