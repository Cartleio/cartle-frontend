"use client";
import Header from "@/app/components/merchant_components/Header";
import Layout from "@/app/components/merchant_components/Layout";
import { BsPlusLg } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import WindowDisplay from "./WindowDisplay";
import Product from "./Product";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/app/redux/feature/productSlice";
import { AppDispatch } from "../../redux/store";
import NewStore from "./NewStore";

type WindowImage = {
  id: number;
  src: string;
  alt: string;
};
type HeaderData = {
  title: string;
  text: string;
};
function Products() {
  
  const HeaderData: HeaderData = {
    title: "Products",
    text: "Items that are in your store",
  };

  const windowimg: WindowImage[] = [
    { id: 1, src: "/product_img-1 (1).png", alt: "Window1" },
    { id: 2, src: "/product_img-1 (2).png", alt: "Window2" },
    { id: 3, src: "/product_img-1 (3).png", alt: "Window3" },
    { id: 41, src: "/product_img-1 (4).png", alt: "Window4" },
    { id: 38, src: "/product_img-1 (3).png", alt: "Window3" },
    { id: 40, src: "/product_img-1 (4).png", alt: "Window4" },
    { id: 36, src: "/product_img-1 (3).png", alt: "Window3" },
    { id: 49, src: "/product_img-1 (4).png", alt: "Window4" },
    { id: 32, src: "/product_img-1 (3).png", alt: "Window3" },
    { id: 47, src: "/product_img-1 (4).png", alt: "Window4" },
  ];

  //REDUX DISPATCH INSTANCE
  const dispatch = useDispatch<AppDispatch>();

  //GET CURRENT ACTIVE STORE
  const { activeStoreId } = useSelector((store: any) => store.merchantData);

  //DISPATCH AN ASYNC REQUEST TO GET PRODUCTS ONCE THE COMPONENT MOUNTS
  useEffect(() => {
    dispatch(getProducts());
  }, [activeStoreId]);

  //GET PRODUCTS FROM REDUX STORE
  const { products } = useSelector((store: any) => store.storeProduct);

  //UPLOADING A STORE WINDOW
  const handleStoreWindowUploadToCloudinary = () => {};

  const [videoSrc, setVideoSrc] = useState<any>("");

  const upload = (e: any) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setVideoSrc(fileReader.result);
    };
  };

  return (
    <Layout>
      <div className="w-full">
        <Header {...HeaderData} />

        {products.length > 0 ? (
          <>
            <Link
              href="/merchant/add_product"
              className="w-16 h-16 bg-[#FF7600] rounded-full fixed bottom-10 right-10 z-50"
            >
              <div className="text-3xl text-white flex items-center justify-center h-full w-full">
                <BsPlusLg />
              </div>
            </Link>
            {/*

            <section className="p-3 md:p-6 bg-white md:bg-[#F5F5F6]">
              <h1 className="text-[#444748] font-bold py-2 md:py-4">
                Store Window
              </h1>

              <div className="flex gap-3 border border-red-600 max-w-2xl overflow-x-scroll py-10">
                <article className="inline-block relative h-20 w-20 md:w-40 md:h-40 bg-white rounded-full border border-[#444748] shrink-0">
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="text-2xl md:text-5xl text-[#444748] flex items-center justify-center h-full w-full">
                      <BsPlusLg />
                    </div>
                  </div>
                  <input
                    type="file"
                    accept="video/*"
                    name="video"
                    id="upload"
                    className="focus:outline-none active:outline-none px-2 opacity-0 rounded-md w-full h-full"
                    onChange={upload}
                  />
                </article>

                <article className="h-20 w-20 md:w-40 md:h-40 bg-white shrink-0 rounded-full">
                  <video width="1000px" height="1000px" autoPlay controls>
                    <source src={videoSrc} id="src" />
                  </video>
                </article>

                {windowimg.map((item) => (
                  <WindowDisplay key={item.id} {...item} />
                ))}
              </div>
            </section> */}
            <section className="my-6 w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-[#444748] font-bold py-4">Product List</h1>
                <Link href="/merchant/products_categories">
                  <p className="text-[#FF7600]">See Categories</p>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product: any) => (
                  <Product key={product.id} {...product} />
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            <NewStore />
          </>
        )}
      </div>

      {/* Add btn */}
    </Layout>
  );
}

export default Products;
