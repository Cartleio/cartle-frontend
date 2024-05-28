"use client";
import React from "react";

function Item(item: {
  itemName: string;
  free: string | boolean;
  pro: string | boolean;
  prime: string | boolean;
  temp: string | boolean;
}): JSX.Element {
  const { itemName, free, pro, prime, temp } = item;

  return (
    <div className="grid grid-cols-5 w-full">
      <div className=" w-full col-start-1 col-span-1 px-4 py-4">
        <p className="text-sm md:text-base">{itemName}</p>
      </div>
      <div className=" py-4 w-full col-start-2 col-span-1 text-center text-sm md:text-base">
        {typeof free === "string" ? (
          free
        ) : typeof free === "boolean" && free === true ? (
          <div className="w-full flex items-center justify-center">
            <img src="/Check_Mark.png" className="h-4 w-4" alt="true" />
          </div>
        ) : (
          <div className="w-full flex items-center justify-center">
            <img src="/Cross_Mark.png" className="h-4 w-4" alt="true" />
          </div>
        )}
      </div>

      <div className="  w-full col-start-3 col-span-1">
        <div className="bg-[#FFF1E680]  py-4 h-full w-full col-start-3 col-span-1 text-center text-sm md:text-base">
          {typeof pro === "string" ? (
            pro
          ) : typeof pro === "boolean" && pro === true ? (
            <div className="w-full flex items-center justify-center">
              <img src="/Check_Mark.png" className="h-4 w-4" alt="true" />
            </div>
          ) : (
            <div className="w-full flex items-center justify-center">
              <img src="/Cross_Mark.png" className="h-4 w-4" alt="true" />
            </div>
          )}
        </div>
      </div>
      <div className=" py-4 w-full col-start-4 col-span-1 px-4 text-center text-sm md:text-base">
        {typeof prime === "string" ? (
          prime
        ) : typeof prime === "boolean" && prime === true ? (
          <div className="w-full flex items-center justify-center">
            <img src="/Check_Mark.png" className="h-4 w-4" alt="true" />
          </div>
        ) : (
          <div className="w-full flex items-center justify-center">
            <img src="/Cross_Mark.png" className="h-4 w-4" alt="true" />
          </div>
        )}
      </div>

      <div className=" py-4 w-full col-start-5 col-span-1 px-4 text-center text-sm md:text-base">
        {typeof temp === "string" ? (
          temp
        ) : typeof temp === "boolean" && temp === true ? (
          <div className="w-full flex items-center justify-center">
            <img src="/Check_Mark.png" className="h-4 w-4" alt="true" />
          </div>
        ) : (
          <div className="w-full flex items-center justify-center">
            <img src="/Cross_Mark.png" className="h-4 w-4" alt="true" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
