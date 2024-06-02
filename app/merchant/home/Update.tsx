"use client";
import React from "react";
import { useState } from "react";
import UpdateItem from "./UpdateItem";

type StoreUpdateData = {
  id: number;
  title: string;
  text: string;
  btnData: string;
  border: boolean;
};

const storeUpdateData: StoreUpdateData[] = [
  {
    id: 1,
    title: "Name your store",
    text: "A properly named store is a store already set up for success",
    btnData: "Name Store",
    border: true,
  },
  {
    id: 2,
    title: "Customize your online store",
    text: "Add your logo and choose a theme that highlights your brand",
    btnData: "Customize store",
    border: true,
  },
  {
    id: 3,
    title: "Add a custom domain",
    text: "Let Cartle create a domain just for you",
    btnData: "Add domain",
    border: true,
  },
  {
    id: 4,
    title: "Add your first product",
    text: "To sell, you need products first. Find products to sell or add yours",
    btnData: "Add products",
    border: false,
  },
];
function Update() {
  const [completed, setCompleted] = useState(1);
  return (
    <section className="text-[#979DA0] border rounded-md p-4 md:p-6 mt-5 my-3">
      <h1 className="font-bold text-[#444748] text-base md:text-lg ">
        Complete your store setup
      </h1>
      <h2 className="text-sm md:text-base">
        Use this guide to set your store up for success!
      </h2>
      <div className="flex items-center justify-center gap-3 w-fit">
        <p className="text-[#444748]">
          <span>{completed}</span> / 4 completed
        </p>
        <div className="h-1 w-20 bg-[#DBDBDB] rounded-md">
          {completed === 1 && (
            <div className="bg-primary-500 rounded-md w-2 h-1"></div>
          )}
        </div>
      </div>

      <div className="mt-4">
        {storeUpdateData.map((update) => (
          <UpdateItem key={update.id} {...update} />
        ))}
      </div>
    </section>
  );
}

export default Update;
