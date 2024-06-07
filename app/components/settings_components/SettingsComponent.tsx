"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../../styles/Home.module.css";
import Plan from "./Plan";
import Shipping from "./Shipping";
import StoreSettings from "./StoreSettings";
import Payments from "./Payments";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
import DeleteModal from "./DeleteModal";
import { ToastContainer } from "react-toastify";

const settingNavLinks = [
  {
    label: "store Details",
    id: 1,
  },
  {
    label: "plan",
    id: 2,
  },
  {
    label: "shipping and Delivery",
    id: 3,
  },
  {
    label: "payments",
    id: 4,
  },
  {
    label: "profile",
    id: 5,
  },
];

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState("store Details");

  //GET STORE DETAILS FROM REDUX STORE
  const { deleteStore } = useSelector((state: any) => state.settings);

  return (
    <>
      <ToastContainer />
      <main>
        <section className="max-w-[900px] mx-auto pb-10 min-h-screen">
          <div className="flex w-full flex-col sm:flex-row md:items-center sm:justify-center gap-2 md:gap-10 my-3 md:my-8">
            {settingNavLinks.map((link) => (
              <div
                key={link.id}
                className="w-fit cursor-pointer"
                onClick={() => setActiveTab(link.label)}
              >
                <h1
                  className={`font-bold text-xs md:text-base w-full capitalize px-2 py-1 ${
                    activeTab === link.label &&
                    "bg-orange-500 text-white rounded-xl"
                  }`}
                >
                  {link.label}
                </h1>
              </div>
            ))}
          </div>

          {/* PLAN */}
          {activeTab === "plan" && <Plan />}

          {/* SHIPPING AND DELIVERY */}
          {activeTab === "shipping and Delivery" && <Shipping />}

          {/* PAYMENTS */}
          {activeTab === "payments" && <Payments />}

          {/* STORE SETTINGS */}
          {activeTab === "store Details" && <StoreSettings />}

          {/* PROFILE SETTINGS */}
          {activeTab === "profile" && <Profile />}
        </section>
      </main>
      {deleteStore && <DeleteModal />}
    </>
  );
};

export default SettingsComponent;
