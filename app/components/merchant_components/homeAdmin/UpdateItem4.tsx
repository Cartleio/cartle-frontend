"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import UnCheckedSVG from "./UnCheckedSVG";
import { GoCheckCircleFill } from "react-icons/go";
import { getProducts } from "@/app/redux/feature/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { setTotalUpdates, setUpdate4 } from "@/app/redux/feature/home-slice";

const UpdateItem4 = () => {
  //REDUX DISPATCH INSTANCE
  const dispatch = useDispatch<AppDispatch>();

  //GET CURRENT ACTIVE STORE
  const { activeStoreId } = useSelector((store: any) => store.merchantData);

  useEffect(() => {
    dispatch(getProducts());
  }, [activeStoreId]);

  //GET PRODUCTS FROM REDUX STORE
  const { products } = useSelector((store: any) => store.storeProduct);

  const productsLength = products.length;

  useEffect(() => {
    if (productsLength > 0) {
      dispatch(setUpdate4());
      dispatch(setTotalUpdates());
    }
  }, [products]);

  return (
    <div className={`flex items-center gap-4 mb-4 border-b py-2`}>
      {productsLength > 0 ? (
        <GoCheckCircleFill className="text-orange-500" fontSize={24} />
      ) : (
        <UnCheckedSVG />
      )}
      <div className="flex flex-col md:flex-row md:items-center gap-1 justify-between flex-1">
        <div>
          <h2 className="text-[#444748] font-bold text-sm md:text-base">
            Add your first product
          </h2>
          <p className="text-xs md:text-sm xl:text-base">
            To sell, you need products first. Find products to sell or add your
          </p>
        </div>
        <div>
          <Link
            href={`${productsLength > 0 ? "" : "/merchant/add_product"} `}
            className="border-2 py-[0.5em] rounded-md flex items-center justify-center px-1 cursor-pointer hover:text-[#F9F9F9] hover:bg-orange-500 hover:shadow-md hover:shadow-orange-500 hover:border-orange-500"
          >
            <span className="text-xs md:text-sm font-medium">Add products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem4;
