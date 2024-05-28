"use client";
import React from "react";
import Link from "next/link";
type SummaryData = {
  id: number;
  text: string;
  btn: string;
  border: boolean;
};
function Summary(summary: SummaryData) {
  const { text, btn, border } = summary;
  return (
    <div
      className={`flex items-center justify-between mb-2 ${
        border && "border-b"
      } py-2 gap-2`}
    >
      <div className="flex-1 flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#FF7600" />
        </svg>
        <p className="text-[#444748] text-xs xl:text-base">{text}</p>
      </div>
      <div className="w-fit text-[#FF7600] text-xs md:text-sm">
        <Link href={`/merchant/${btn.toLowerCase()}`}>See {btn}</Link>
      </div>
    </div>
  );
}

export default Summary;
