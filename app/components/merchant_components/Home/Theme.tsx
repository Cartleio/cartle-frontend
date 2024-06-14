"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

function Theme({
  title,
  text,
  fig,
}: {
  title: string;
  text: string;
  fig: StaticImageData;
}) {
  return (
    <div className="shadow-md md:shadow-none">
      <div className="bg-[#E7E7E7]">
        <Image src={fig} width={500} alt={title} />
      </div>
      <div className="p-4">
        <figcaption className="text-[#444748] text-lg">{title}</figcaption>
        <figure className="text-[#979DA0]  text-sm md:text-base">{text}</figure>
      </div>
    </div>
  );
}

export default Theme;
