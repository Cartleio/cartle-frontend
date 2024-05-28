"use client";
import React from "react";

function WindowDisplay(props: any) {
  const { src, alt } = props;
  return (
    <article className="h-20 w-20 md:w-40 md:h-40 bg-white shrink-0 rounded-full">
      <div className="text-5xl text-[#444748] flex items-center justify-center h-full w-full">
        <img src={src} alt={alt} className="object-cover shrink-0" />
      </div>
    </article>
  );
}

export default WindowDisplay;
