import React from "react";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import LoadingSpinner from "@/app/components/LoadingSpinner";

type AddHeaderProps = {
  return_arrow_url: string;
  title: string;
  text?: string;
  loading: boolean;
  saveFn: () => void;
};

function AddHeader(props: AddHeaderProps): JSX.Element {
  return (
    <div className="text-[#979DA0] md:flex-row flex-col gap-3 flex item-center h-auto md:h-20 w-full ">
      <div className="w-fit flex  items-center gap-2 order-2 md:order-1">
        <div className="flex items-center gap-2">
          <Link
            href={props.return_arrow_url}
            className="hidden md:inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              fill="none"
              className="h-10 w-10 cursor-pointer"
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
          </Link>

          <div>
            <h1
              className={`text-[#0B0B0B] text-2xl lg:text-3xl ${styles.baskerville}`}
            >
              {props.title}
            </h1>
            {props.text && <p>{props?.text}</p>}
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-between md:justify-end order-1 md:order-2">
        <Link href={props.return_arrow_url} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            fill="none"
            className="h-10 w-10 cursor-pointer"
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
        </Link>
        <div className="w-[90%] xl:w-[70%] flex items-center justify-end gap-6">
          <button className="bg-[#979DA0] text-white px-3  py-2 rounded-md">
            Discard
          </button>

          <button
            className="bg-[#DFE1E2] hover:bg-[#979DA0] text-white px-3  py-2 rounded-md flex items-center gap-2"
            onClick={props.saveFn}
          >
            {props.loading && <LoadingSpinner />} <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddHeader;
