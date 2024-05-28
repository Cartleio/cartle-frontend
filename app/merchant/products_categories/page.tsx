"use client";
import React, { useState } from "react";
import Layout from "../../components/merchant_components/Layout";
import Header from "@/app/components/merchant_components/Header";
import { getOrderStatus } from "@/app/components/utils/data";
import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";

type inventory = {
  id: string;
  product_id: string;
  product_name: string;
  product_category: string;
  product_price: string;
  product_qty: number;
  product_status: string;
}[];

type HeaderData = {
  title: string;
  text: string;
};
function Products() {
  const HeaderData: HeaderData = {
    title: "Categories",
    text: "Items that are in your store",
  };

  const SellingItem = ["Electronics", "Clothes", "Skin Care", "Perfume"];
  const Inventory = [
    {
      id: "1",
      product_id: "22446",
      product_name: "T-Shirt",
      product_category: "Clothes",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "IN_STOCK",
    },
    {
      id: "2",
      product_id: "61223",
      product_name: "HP Laptop",
      product_category: "Electronics",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "OUT_OF_STOCK",
    },
    {
      id: "3",
      product_id: "76854",
      product_name: "iPhone 15 Plus",
      product_category: "Electronics",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "IN_STOCK",
    },
    {
      id: "4",
      product_id: "76894",
      product_name: "Glycolic Acid",
      product_category: "Skin Care",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "IN_STOCK",
    },
    {
      id: "5",
      product_id: "22334",
      product_name: "Jeans",
      product_category: "Clothes",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "OUT_OF_STOCK",
    },
    {
      id: "6",
      product_id: "77889",
      product_name: "Victoria’s Secret",
      product_category: "Perfume",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "OUT_OF_STOCK",
    },
    {
      id: "7",
      product_id: "22446",
      product_name: "T - Shirt",
      product_category: "Clothes",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "IN_STOCK",
    },
    {
      id: "8",
      product_id: "61223",
      product_name: "HP Laptop",
      product_category: "Electronics",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "OUT_OF_STOCK",
    },
    {
      id: "9",
      product_id: "76854",
      product_name: "iPhone 15 Plus",
      product_category: "Electronics",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "IN_STOCK",
    },
    {
      id: "10",
      product_id: "76894",
      product_name: "Glycolic Acid",
      product_category: "Skin Care",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "OUT_OF_STOCK",
    },
    {
      id: "11",
      product_id: "22334",
      product_name: "Jeans",
      product_category: "Clothes",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "IN_STOCK",
    },
    {
      id: "12",
      product_id: "77889",
      product_name: "Victoria’s Secret",
      product_category: "Perfume",
      product_price: "$435.50",
      product_qty: 22446,
      product_status: "IN_STOCK",
    },
  ];
  const [inventory, setInventory] = useState<inventory>(Inventory);
  const [isActive, setIsActive] = useState("all");

  //Sort algorithm
  const sortInvent = (item: string) => {
    if (item === "all") {
      setInventory(Inventory);
    } else if (item === "IN_STOCK") {
      const newInventory = Inventory.filter((prev) => {
        return prev.product_status === item;
      });
      setInventory(newInventory);
    } else if (item === "OUT_OF_STOCK") {
      const newInventory = Inventory.filter((prev) => {
        return prev.product_status === item;
      });
      setInventory(newInventory);
    } else {
      const newInventory = Inventory.filter((prev) => {
        return prev.product_category === item;
      });
      setInventory(newInventory);
    }
    setIsActive(item);
  };

  return (
    <Layout>
      <Header {...HeaderData} />
      <Link
        href="/merchant/add_product"
        className="w-14 h-14 md:w-16 md:h-16 bg-[#FF7600] rounded-full fixed bottom-10 right-10 z-50"
      >
        <div className="text-xl md:text-3xl text-white flex items-center justify-center h-full w-full">
          <BsPlusLg />
        </div>
      </Link>

      <section className="w-full overflow-x-auto">
        <div className="bg-white text-black  gap-5 py-5 flex flex-col min-w-[550px] w-full">
          <div className=" flex bg-[#FFF1E680] w-fit items-center text-[#979DA0] rounded-xl text-xs lg:text-base">
            <div
              className={`${
                isActive === "all" && "bg-[#FF7600] text-white"
              }  py-2 px-3 rounded-xl cursor-pointer text-xs md:text-base`}
              onClick={() => sortInvent("all")}
            >
              All
            </div>
            <div
              className={`${
                isActive === "IN_STOCK" && "bg-[#FF7600] text-white"
              } py-2 px-3 cursor-pointer  rounded-xl text-xs md:text-base`}
              onClick={() => sortInvent("IN_STOCK")}
            >
              In Stock
            </div>
            <div
              className={`${
                isActive === "OUT_OF_STOCK" && "bg-[#FF7600] text-white"
              } py-2 px-3 cursor-pointer  rounded-xl text-xs md:text-base`}
              onClick={() => sortInvent("OUT_OF_STOCK")}
            >
              Out of Stock
            </div>
            {SellingItem.map((item, index) => (
              <div
                className={`${
                  isActive === item && "bg-[#FF7600] text-white"
                } py-2 px-3 cursor-pointer  rounded-xl text-xs md:text-base`}
                key={index}
                onClick={() => sortInvent(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-3 w-full">
            <table className="w-full text-gray-700  rounded-sm ">
              <thead>
                <tr>
                  <th className="text-xs md:text-base">Product ID</th>
                  <th className="text-xs md:text-base">Product Name</th>
                  <th className="text-xs md:text-base">Category</th>
                  <th className="text-xs md:text-base">Price</th>
                  <th className="text-xs md:text-base">Quantity</th>
                  <th className="text-xs md:text-base">Status</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td className="text-xs md:text-base">
                      <Link href={`/product/${item.product_id}`}>
                        {item.product_id}
                      </Link>
                    </td>
                    <td className="text-xs md:text-base">
                      <Link href={`/product/${item.product_id}`}>
                        {item.product_name}
                      </Link>
                    </td>
                    <td className="text-xs md:text-base">
                      {item.product_category}
                    </td>
                    <td className="text-xs md:text-base">
                      {item.product_price}
                    </td>
                    <td className="text-xs md:text-base">{item.product_qty}</td>
                    <td className="text-xs md:text-base">
                      {getOrderStatus(item.product_status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Products;
