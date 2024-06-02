"use client";
import React from "react";
import OrdersTable from "../dashboard/OrdersTable";

const orders = [
  {
    id: 1,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    product_qty: 5,
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    order_date: "2022-05-17T03:24:00",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  
  {
    id: 11,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "pending",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    product_qty: 5,
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    order_date: "2022-05-17T03:24:00",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
];

const pendingOrders = orders.filter(
  (order) => order.current_order_status === "pending"
);

const paidOrders = orders.filter(
  (order) => order.current_order_status === "Paid"
);

const deliveredOrders = orders.filter(
  (order) => order.current_order_status === "delivered"
);

const OrderList = () => {
  return (
    <>
      <OrdersTable
        orders={orders}
        OrderType="recent orders"
        lastUpadted="Updated 20 minutes ago"
      />

      <OrdersTable
        orders={pendingOrders}
        OrderType="pending orders"
        lastUpadted="Updated 20 minutes ago"
      />
      
      <OrdersTable
        orders={paidOrders}
        OrderType="paid orders"
        lastUpadted="Updated 20 minutes ago"
      />
      <OrdersTable
        orders={deliveredOrders}
        OrderType="Delivered orders"
        lastUpadted="Updated 20 minutes ago"
      />
    </>
  );
};

export default OrderList;
