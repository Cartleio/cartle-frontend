"use client";
import Layout from "@/app/components/merchant_components/Layout";
import Header from "../header";
import SegmentTable from "./SegmentTable";
import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";

const Segment = () => {
  return (
    <Layout>
      <Header title="Segments" />
      <section className="flex flex-col gap-8 mt-8">
        <SegmentTable title="Returned Carts" />
        <SegmentTable title="New Customers" />
        <SegmentTable title="Returning Customers" />
      </section>

      <Link
        href=""
        className="w-16 h-16 bg-[#FF7600] rounded-full fixed bottom-10 right-10 z-50"
      >
        <div className="text-3xl text-white flex items-center justify-center h-full w-full">
          <BsPlusLg />
        </div>
      </Link>
    </Layout>
  );
};

export default Segment;
