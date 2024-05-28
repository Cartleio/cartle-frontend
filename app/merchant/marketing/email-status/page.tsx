"use client";
import Layout from "@/app/components/merchant_components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header";
import { CUSTOMERS_EMAIL_DATA } from "@/app/components/utils/data";
import EmailTable from "./EmailTable";

const EmailStatus = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <Layout>
      <Header title="Email Status" />
      <main>
        <EmailTable
          data={CUSTOMERS_EMAIL_DATA}
          lastUpadted="Updated 20 minutes ago"
          tableType="Customers"
        />
      </main>
    </Layout>
  );
};

export default EmailStatus;
