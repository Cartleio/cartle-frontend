"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../../styles/Home.module.css";
import Plan from "./Plan";
import Shipping from "./Shipping";
import StoreSettings from "./StoreSettings";
import Payments from "./Payments";
import { useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "@/app/redux/feature/settingsSlice";
import Profile from "./Profile";
import DeleteModal from "./DeleteModal";

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

const Settings = () => {
  const { settingsModal } = useSelector((state: any) => state.settings);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("store Details");

  //GET STORE DETAILS FROM REDUX STORE
  const { storeDetails, deleteStore } = useSelector(
    (state: any) => state.settings
  );

  return (
    <>
      <main
        className={`h-screen overflow-y-scroll bg-white w-full fixed top-0 left-0 z-[9999999999] ${
          settingsModal ? "translate-y-0" : "translate-y-[100%]"
        } transition-all duration-150 px-5 md:px-10  ease-in-out`}
      >
        <nav className="py-3 md:py-10 max-w-[900px] mx-auto">
          <div className="flex items-center justify-between">
            <h1 className={`${styles.baskerville} text-xl md:text-4xl`}>
              Settings
            </h1>
            <button onClick={() => dispatch(toggleSettings())}>
              <AiOutlineClose className="text-md md:text-3xl font-bold" />
            </button>
          </div>
        </nav>

        <section className="max-w-[900px] mx-auto pb-10 min-h-screen">
          <div className="flex w-full flex-col sm:flex-row md:items-center sm:justify-center gap-2 md:gap-10 my-3 md:my-8">
            {settingNavLinks.map((link) => (
              <div
                key={link.id}
                className="w-fit cursor-pointer"
                onClick={() => setActiveTab(link.label)}
              >
                <h1 className="font-bold text-xs md:text-base w-full capitalize">
                  {link.label}
                </h1>
                <div
                  className={`h-[0.15rem] ${
                    activeTab === link.label ? "bg-primary-500" : ""
                  } w-full `}
                ></div>
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

export default Settings;
