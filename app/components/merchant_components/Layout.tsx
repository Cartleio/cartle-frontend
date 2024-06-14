"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoClose, IoLogOutOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINK } from "../utils/data";
import HeaderMobile from "./HeaderMobile";
import { AiOutlineClose } from "react-icons/ai";
import { IoStorefrontSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { AppDispatch } from "../../redux/store";
import { FiPlus } from "react-icons/fi";
import CreateStore from "./CreateStore";
import {
  openStoreCreationOverlay,
  closeStoreCreationOverlay,
  creationFailure,
  creationSuccess,
  startCreation,
} from "@/app/redux/feature/storeCreationSlice";
import {
  addStore,
  activeStore,
  getStores,
  makeFirstActive,
  clearStore,
} from "@/app/redux/feature/storeSlice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { login, logout } from "@/app/redux/feature/auth-slice";
import { getStoreDetails } from "@/app/redux/feature/settingsSlice";
import { getProfile } from "@/app/redux/feature/profileSlice";
import LoadingSpinner from "../LoadingSpinner";
import { closeSubModal } from "@/app/redux/feature/subscriptionSlice";
import { getPlanName } from "../utils/data";
import Overlay from "@/app/merchant/marketing/Overlay";
import SettingsComponent from "../settings_components/SettingsComponent";

function Layout({ children }: { children: React.ReactNode }) {
  //SIDEBAR OPEN AND CLOSE STATE
  const [open, setOpen] = useState(false);

  //PATHNAME INSTANCE FOR SETTING ACTIVE STATES
  const pathname = usePathname();

  //ROUTER INSTANCE
  const router = useRouter();

  //REDUX DISPATCH INSTANCE
  const dispatch = useDispatch<AppDispatch>();

  //GET THE USER INFORMATION
  const {
    profile,
    failed,
    isLoading: profileLoading,
  } = useSelector((state: any) => state.profile);
  const { user } = useSelector((state: any) => state.auth);

  //ROUTE PROTECTION IF THE USER IS NOT LOGGED IN
  // useEffect(() => {
  //   if (!user) {
  //     router.push("/auth/login");
  //   }
  // }, [user, router]);

  //ACCESSING STORE CREATION STATE
  const { isCreateStoreActive } = useSelector(
    (state: any) => state.storeCreation
  );

  //ACCESSING STORE DETAILS AND ACTIVE STORE INFORMATION
  const { stores, isLoading, activeStoreId } = useSelector(
    (store: any) => store.merchantData
  );

  //GET SUBSCRIPTION DETAILS
  const { subModal, temporaryId } = useSelector(
    (store: any) => store.subscription
  );

  // GET PROFILE INFORMATION
  useEffect(() => {
    dispatch(getProfile());
  }, [user]);

  // GET STORES FOR DISPLAY ON THE MERCHANT PAGE
  useEffect(() => {
    dispatch(getStores());
  }, [user]);

  //FETCH STORE DETAILS
  useEffect(() => {
    dispatch(getStoreDetails());
  }, [activeStoreId]);

  //ACCESSING SETTINGS MODAL & STORE INFORMATION
  const { storeDetails, storeData } = useSelector(
    (state: any) => state.settings
  );

  //UPGRADE PLAN
  const planUrl = "https://cartle-test-1.onrender.com/subscriptions/";
  const upgradePlan = () => {
    const planId = parseInt(temporaryId);
    const token = user.token;
    try {
      toast.success("subscription failed, try again");
      const response = axios.post(
        planUrl,
        { planId },
        {
          headers: {
            withCredentials: true,
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error("subscription failed, try again");
        console.error("Axios error details:", error.response);
      }
    }
  };

  //EMAIL MARKETING OVERLAY STATE
  const { email_overlay } = useSelector((state: any) => state.overlay);

  return (
    <>
      <ToastContainer />

      <div
        className={`flex flex-col font-inter h-screen max-w-[1440px] mx-auto md:flex-row`}
      >
        {/* SIDEBAR */}
        <nav
          className={`fixed ${
            open ? "left-0 shadow-2xl" : "left-[-100%]"
          } transition-all duration-700 w-40 lg:w-60  md:top-0 md:left-0 h-screen overflow-y-auto z-[9999999999] bg-white`}
        >
          <div className="w-full min-h-screen flex flex-col items-end justify-around border-r-[1px] border-cream-100 text-[#444748] py-5 gap-2 bg-white ">
            {/* LOGO */}
            <div className="self-center h-20 hidden md:block">
              <>
                {storeDetails?.storeImg ? (
                  <div className="w-full h-full bg-transparent text-xl flex items-center rounded-full justify-center">
                    <img
                      src={storeDetails?.storeImg}
                      alt={storeDetails?.name}
                      className="w-full h-full object-fit rounded-full"
                    />
                  </div>
                ) : (
                  <p className="p-2 text-gray-400 bg-[#D9D9D926]">Store logo</p>
                )}
              </>
            </div>

            {/* TOGGLE MENU */}
            <div
              className="self-start ml-6 text-black block md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <AiOutlineClose fontSize={20} />
            </div>

            {/* NAVLINKS*/}
            <ul className="flex flex-col item-center w-[85%] gap-2 flex-1">
              {NAVIGATION_LINK.map((link, index) => {
                const isActive =
                  Array.isArray(link.subPath) &&
                  link.subPath.some((sub) => sub.includes(pathname));
                return (
                  <li
                    className={`p-2 ${
                      pathname === link.path || isActive
                        ? "bg-primary-500 shadow-md hover:shadow-md shadow-orange-500 text-white"
                        : ""
                    }  font-semibold w-full flex items-center  hover:bg-orange-100 hover:shadow-lg hover:font-bold rounded-l-md transition-[background] ease-linear `}
                    key={index}
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      href={link.path}
                      className="flex items-center gap-3 w-full"
                    >
                      {link.icon}
                      <p className="text-sm">{link.label}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* STORE LIST */}
            <div className="flex flex-col item-center w-[85%] gap-2 my-8">
              <div className="flex items-center justify-between w-full pr-5">
                <h1 className="text-gray-400 font-bold">Stores</h1>

                <div
                  className="parent"
                  onClick={() => dispatch(openStoreCreationOverlay())}
                >
                  <FiPlus className="text-xl cursor-pointer" />
                  <div className="hidden-element text-[0.6rem] w-20 rounded-sm shadow-md -top-5 -left-[150%] flex items-center justify-center">
                    <span>create a store</span>
                  </div>
                </div>
              </div>

              <ul className="flex flex-col gap-2">
                {stores.length < 1 ? (
                  <p className="text-gray-400 text-sm">No Stores Found</p>
                ) : (
                  <>
                    {stores?.map((store: any) => {
                      return (
                        <li
                          key={store.id}
                          onClick={() => {
                            dispatch(activeStore(store.id));
                          }}
                          className={`text-xs lg:text-sm cursor-pointer p-2 ${
                            activeStoreId === store.id
                              ? "bg-primary-500 text-white shadow-md hover:shadow-md shadow-orange-500"
                              : ""
                          } hover:bg-orange-100 font-bold hover:shadow-lg hover:text-[#444748] hover:font-bold rounded-l-md transition-[background] ease-linear flex items-center gap-2`}
                        >
                          <IoStorefrontSharp />
                          <p className="">{store.name}</p>
                        </li>
                      );
                    })}
                  </>
                )}
              </ul>
            </div>

            {/* USER PROFILE */}
            <div className="w-[100%] flex flex-col items-center h-30">
              <div className="p-2 flex flex-col items-center gap-2">
                <img
                  src={`${profile?.profilePhoto || "/user_avatar.png"}`}
                  alt={profile?.username}
                  className="rounded-full h-10 w-10"
                />

                {/* USERNAME */}
                {profile?.id && (
                  <p className="text-sm text-center">
                    {profile?.username
                      ? profile?.username
                      : `Merchant${profile?.id}`}
                  </p>
                )}
              </div>

              <button
                className="flex items-center gap-2 p-2"
                onClick={() => {
                  dispatch(logout());
                  dispatch(clearStore());
                  router.push("/auth/login");
                }}
              >
                <IoLogOutOutline />
                <p className="text-sm">Logout</p>
              </button>
            </div>
          </div>
        </nav>

        {/* OUTLET WRAPPER */}
        <div className="ml-0 md:ml-40 lg:ml-60 flex-1 px-6 py-0 md:p-6">
          <nav className="block md:hidden">
            <HeaderMobile setOpen={setOpen} open={open} />
          </nav>
          <div onClick={() => setOpen(false)}>{children}</div>
        </div>

        {/* CREATE STORE OVERLAY */}
        {isCreateStoreActive && <CreateStore />}

        {/* EMAIL MARKETING OVERLAY*/}
        <section
          className={` ${
            email_overlay ? "block" : "hidden"
          } w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] z-[9999999999] flex items-center justify-center`}
        >
          <Overlay />
        </section>
      </div>

      {/* CONTINUE TO SUBSCRIBE MODAL */}
      {subModal && (
        <div className="w-96 fixed right-2 bottom-2 bg-slate-200 shadow-2xl p-3 rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold">
                you are on {getPlanName(profile?.subscriptionPlanId)} plan
              </p>

              <span
                onClick={() => dispatch(closeSubModal())}
                className="cursor-pointer"
              >
                <IoClose />
              </span>
            </div>

            <p>Continue your subscription to {getPlanName(temporaryId)} plan</p>
            <button
              className="bg-orange-500 text-white py-1 px-2 rounded-lg w-fit"
              onClick={upgradePlan}
            >
              upgrade plan
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
