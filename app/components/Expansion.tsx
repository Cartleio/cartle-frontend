"use client";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import Image from "next/image";
import Styles from "../../styles/Home.module.css";

type ExpansionProps = {
  title: string;
  content: string;
};
const Expansion: React.FC<ExpansionProps> = ({ title, content }) => {
  const [opened, setOpened] = useState(false);

  return (
    <li className="border border-zinc-300 rounded">
      <button
        onClick={() => setOpened(!opened)}
        className={`p-4 text-sm md:text-xl lg:text-2xl  flex justify-between items-center w-full rounded cursor-pointer`}
      >
        <span>{title}</span>
        <HiChevronDown
          className={`text-xl md:text-3xl ${
            opened ? "rotate-180" : "rotate-0"
          } transition-[rotation] ease-in-out duration-1000`}
        />
      </button>
      <p
        className={`bg-white px-4  ${
          opened ? "h-auto py-3" : "h-0 p-0"
        } transition-height ease-in-out duration-300 overflow-hidden text-zinc-500 text-xs md:text-base`}
      >
        {content}
      </p>
    </li>
  );
};

export default Expansion;
