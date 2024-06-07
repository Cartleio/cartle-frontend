"use client";
import React from "react";
import Link from "next/link";

import { formatPriceInDollar } from "@/app/components/utils/data";

// LIMITING THE NUMBER OF STRING TO DISPLAY ON THE PRODUCT CARD
function truncateTextWithStringMethod(text: string, maxLength: number) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

function Product(product: any): JSX.Element {
  const product_id = product.id;
  return (
    <Link
      href={`/merchant/products/${product_id}`}
      className="my-4 shadow-md border rounded-sm relative"
    >
      <img src={product.productImages[0]} className="w-full h-auto" alt="" />
      <div className="absolute top-3 right-3">
        <div className="flex items-center gap-1">
          {/* {product?.rating.map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))} */}
        </div>
      </div>
      <div className="p-2 flex flex-col gap-2 md:p-4">
        <h1 className="text-xs font-semibold">
          {truncateTextWithStringMethod(product?.title, 20)}
        </h1>
        <h1 className="text-xs">
          {truncateTextWithStringMethod(product?.description, 50)}
        </h1>
        <h2 className="text-xs">{formatPriceInDollar(product?.price)}</h2>
        <p className="text-xs">{product?.qty_sold}</p>
      </div>
    </Link>
  );
}

export default Product;
