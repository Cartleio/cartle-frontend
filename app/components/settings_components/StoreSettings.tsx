"use client";
import { getStores } from "@/app/redux/feature/storeSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { AppDispatch } from "../../redux/store";
import {
  getStoreDetails,
  toggleDelete,
} from "@/app/redux/feature/settingsSlice";
import SettingsSpinner from "./SettingsSpinner";
import { FaCamera } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const sellingItems: string[] = [
  "Clothes",
  "Home Decor",
  "Skin Care",
  "Bags",
  "Electronics",
  "Haircare",
  "Shoes",
  "Art work",
  "Kitchen appliances",
  "Jewelry",
  "Cosmetics",
  "Other",
];
const goods: string[] = ["Drop shipping", "Amazon", "Self made", "Other"];

const StoreSettings = () => {
  //REDUX USE DISPATCH INSTANCE
  const dispatch = useDispatch<AppDispatch>();

  //GET STORE DETAILS FROM REDUX STORE
  const { storeDetails, deleteStore } = useSelector(
    (state: any) => state.settings
  );

  console.log("storeDetails", storeDetails);

  //GET ACTIVE STORE ID FROM REDUX STORE
  const { activeStoreId } = useSelector((store: any) => store.merchantData);

  //GET TOKEN FROM AUTH STORE
  const { user } = useSelector((state: any) => state.auth);

  //CONTROLS EDIT BUTTONS
  const [editStoreDetails, setEditStoreDetails] = useState(true);
  const [editBillingDetails, setEditBillingDetails] = useState(true);

  //LOADING STATE
  const [loading, setLoading] = useState(false);

  //TEMPORARY STATE TO MANAGE THE STORE UPDATE
  const [storeData, setStoreData] = useState({
    storeImg: storeDetails?.storeImg,
    domainName: storeDetails?.domainName,
    published: storeDetails?.published,
    billingCurrency: storeDetails?.billingCurrency,
    storeCurrency: storeDetails?.storeCurrency,
    timeZone: storeDetails?.timeZone,
    storePhone: storeDetails?.storePhone,
    storeEmail: storeDetails?.storeEmail,
    businessName: storeDetails?.businessName,
    countryRegion: storeDetails?.countryRegion,
    address: storeDetails?.address,
    apartment: storeDetails?.apartment,
    city: storeDetails?.city,
    state: storeDetails?.state,
    postalCode: storeDetails?.postalCode,
  });

  //UPDATE THE STORE DATA WHEN THE DETAILS CHANGES
  useEffect(() => {
    setStoreData((prev) => ({
      ...prev,
      storeImg: storeDetails?.storeImg,
      domainName: storeDetails?.domainName,
      published: storeDetails?.published,
      billingCurrency: storeDetails?.billingCurrency,
      storeCurrency: storeDetails?.storeCurrency,
      timeZone: storeDetails?.timeZone,
      storePhone: storeDetails?.storePhone,
      storeEmail: storeDetails?.storeEmail,
      businessName: storeDetails?.businessName,
      countryRegion: storeDetails?.countryRegion,
      address: storeDetails?.address,
      apartment: storeDetails?.apartment,
      city: storeDetails?.city,
      state: storeDetails?.state,
      postalCode: storeDetails?.postalCode,
    }));
  }, [activeStoreId, storeDetails]);

  //FUNCTION TO HANDLE STORE FORM INPUT ONCHANGE
  const handleStoreSettingsFormUpdate = (e: any) => {
    e.preventDefault();
    if (!e.target.name) {
      setStoreData((prev) => ({
        ...prev,
        published: !storeData.published,
      }));
    }
    if (e.target.name === "storeImg") {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result as string;
          //UPDATING THE STORE WITH THE NEW IMAGE URL
          setStoreData((prev) => ({
            ...prev,
            storeImg: imageUrl,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else if (e.target.name === "name") {
      return;
    } else {
      setStoreData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  //FUNCTION TO HANDLE THE FORM SAVE (MAKES A HTTP REQUEST TO THE SERVER)
  const handleFormSave = async (formtype: String) => {
    const token = user.token;

    try {
      setLoading(true);
      console.log("patch data", storeData);

      const response = await axios.patch(
        `https://cartle-test.onrender.com/stores/details/${activeStoreId}`,
        storeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      setLoading(false);
      toast.success("Store updated successfully");
      setEditBillingDetails(true);
      setEditStoreDetails(true);
      dispatch(getStores());
    } catch (error) {
      setLoading(false);
      console.log("error", (error as any).response.data.error[0].message);
      toast.error((error as any).response.data.error[0].message);
    }
  };

  return (
    <>
      <section className="flex flex-col gap-8">
        {/* STORE DETAILS */}
        <article className="border rounded-md">
          <div className="p-3 flex items-center justify-between border-b">
            <h1 className="text-lg font-bold">Store Profile</h1>

            {editStoreDetails ? (
              <button
                className="text-blue-500 px-[0.3rem]"
                onClick={() => setEditStoreDetails(false)}
              >
                Edit
              </button>
            ) : (
              <button
                className="bg-orange-500 text-white px-[0.3rem] shadow-xl rounded-md flex items-center justify-center"
                onClick={() => handleFormSave("storeDetails")}
              >
                {loading ? (
                  <div className="flex gap-2 items-center">
                    <SettingsSpinner />
                    <span>saving...</span>
                  </div>
                ) : (
                  <span>save</span>
                )}
              </button>
            )}
          </div>

          <div className="p-3">
            {/* STORE LOGO */}
            <div className="w-20 h-20 bg-transparent flex items-center justify-center my-3 rounded-full text-xl relative cursor-pointer">
              <div className="w-full h-full bg-transparent absolute top-1/2 -translate-y-1/2 text-xl flex items-center rounded-full justify-center bg-gradient-to-tr from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.3)]">
                <FaCamera />
              </div>
              <input
                type="file"
                name="storeImg"
                id="storeImg"
                className="appearance-none opacity-0"
                disabled={editStoreDetails}
                onChange={handleStoreSettingsFormUpdate}
              />
              {storeData.storeImg && (
                <div className="w-full h-full bg-transparent absolute top-1/2 -translate-y-1/2 text-xl flex items-center rounded-full justify-center -z-40">
                  <img
                    src={storeData.storeImg}
                    alt={storeDetails?.name}
                    className="w-full h-full object-fit rounded-full"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* STORE NAME */}
              <div>
                <label className="text-md font-bold my-3">Store Name</label>
                <input
                  type="text"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editStoreDetails}
                  onChange={handleStoreSettingsFormUpdate}
                  name="name"
                  value={storeDetails.name || ""}
                />
              </div>
              {/* STORE CONTACT EMAIL */}
              <div>
                <label className="text-md font-bold my-3">
                  Store Contact Email
                </label>
                <input
                  type="email"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editStoreDetails}
                  value={storeData.storeEmail || ""}
                  name="storeEmail"
                  onChange={handleStoreSettingsFormUpdate}
                />
              </div>
              {/* STORE PHONE */}
              <div>
                <label className="text-md font-bold my-3">
                  Store Phone Number
                </label>
                <input
                  type="number"
                  name="storePhone"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editStoreDetails}
                  value={storeData.storePhone || ""}
                  onChange={handleStoreSettingsFormUpdate}
                />
              </div>
              {/* DOMAIN NAME */}
              <div>
                <label className="text-md font-bold my-3">Domain Name</label>
                <input
                  type="text"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editStoreDetails}
                  value={storeData.domainName || ""}
                  name="domainName"
                  onChange={handleStoreSettingsFormUpdate}
                />
              </div>
            </div>
          </div>
        </article>

        {/* BILLING DETAILS*/}
        <article className="border rounded-md">
          <div className="p-3 flex items-center justify-between border-b">
            <h1 className="text-lg font-bold">Billing Information</h1>

            {editBillingDetails ? (
              <button
                className="text-blue-500 px-[0.3rem] "
                onClick={() => setEditBillingDetails(false)}
              >
                Edit
              </button>
            ) : (
              <button
                className="bg-orange-500 text-white px-[0.3rem]  rounded-md flex items-center justify-center shadow-xl"
                onClick={() => handleFormSave("billingDetails")}
              >
                {loading ? (
                  <div className="flex gap-2 items-center">
                    <SettingsSpinner />
                    <span>saving...</span>
                  </div>
                ) : (
                  <span>save</span>
                )}
              </button>
            )}
          </div>

          <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* STORE CURRENCY */}
            <div>
              <label className="text-md font-bold my-3">Store Currency</label>
              <select
                name="storeCurrency"
                value={storeData.storeCurrency || ""}
                disabled={editBillingDetails}
                onChange={handleStoreSettingsFormUpdate}
                className="focus:outline-none border focus:border bg-white focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              >
                <option value="">select Your Store Currency</option>
                <option value="NGN">NGN</option>
                <option value="EURO">EURO</option>
                <option value="DOLLAR">DOLLAR</option>
              </select>
            </div>

            {/* BILLING CURRENCY */}
            <div>
              <label className="text-md font-bold my-3">Billing Currency</label>
              <select
                name="billingCurrency"
                value={storeData.billingCurrency || ""}
                disabled={editBillingDetails}
                onChange={handleStoreSettingsFormUpdate}
                className="focus:outline-none border focus:border bg-white focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              >
                <option value="">Select a billing currency</option>
                <option value="NGN">NGN</option>
                <option value="EURO">EURO</option>
                <option value="DOLLAR">DOLLAR</option>
              </select>
            </div>

            {/* PUBLISHED */}
            <div onClick={handleStoreSettingsFormUpdate} className="">
              <label className="text-md font-bold my-3">Published</label>
              <button
                disabled={editBillingDetails}
                className="appearance-none border flex items-center h-10 w-full px-3 my-2 rounded-md"
              >
                {storeData.published ? "published" : "unpublished"}
              </button>
            </div>

            {/* TIME ZONE */}
            <div>
              <label className="text-md font-bold my-3">Time Zone</label>
              <select
                name="timeZone"
                value={storeData.timeZone || ""}
                disabled={editBillingDetails}
                onChange={handleStoreSettingsFormUpdate}
                className="focus:outline-none border focus:border bg-white focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              >
                <option value="">Select a time Zone</option>
                <option value="GMT-00:02">GMT-00:02</option>
                <option value="WAT-00:02">WAT-00:02</option>
                <option value="GMT-00:02">GMT-00:02</option>
              </select>
            </div>

            {/* BUSINESS NAME */}
            <div>
              <label className="text-md font-bold my-3">Business Name</label>
              <input
                type="text"
                name="businessName"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                disabled={editBillingDetails}
                value={storeData.businessName || ""}
                onChange={handleStoreSettingsFormUpdate}
              />
            </div>

            {/* COUNTRY */}
            <div>
              <label className="text-md font-bold my-3">Country</label>
              <select
                name="countryRegion"
                value={storeData.countryRegion || ""}
                onChange={handleStoreSettingsFormUpdate}
                disabled={editBillingDetails}
                className="focus:outline-none border focus:border bg-white focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              >
                <option value="">Select a Country</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Canada">Canada</option>
                <option value="Ghana">Ghana</option>
              </select>
            </div>

            {/* STATE */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1 ">
                <label className="text-md font-bold my-3 ">State</label>
                <select
                  name="state"
                  value={storeData.state || ""}
                  disabled={editBillingDetails}
                  onChange={handleStoreSettingsFormUpdate}
                  className="focus:outline-none border focus:border bg-white focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                >
                  <option value="">Select a State</option>
                  <option value="Abia">Abia</option>
                  <option value="Imo">Imo</option>
                  <option value="Anambara">Anambara</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="text-md font-bold my-3">City</label>
                <input
                  type="text"
                  onChange={handleStoreSettingsFormUpdate}
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editBillingDetails}
                  value={storeData.city || ""}
                  name="city"
                />
              </div>
            </div>

            {/* CONTACT ADDRESS */}
            <div>
              <label className="text-md font-bold my-3">Contact Address</label>
              <input
                type="text"
                onChange={handleStoreSettingsFormUpdate}
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                disabled={editBillingDetails}
                value={storeData.address || ""}
                name="address"
              />
            </div>

            {/* POSTAL ADDRESS */}
            <div>
              <label className="text-md font-bold my-3">Postal Code</label>
              <input
                type="text"
                onChange={handleStoreSettingsFormUpdate}
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                disabled={editBillingDetails}
                value={storeData.postalCode || ""}
                name="postalCode"
              />
            </div>

            {/* APARTMENT */}
            <div>
              <label className="text-md font-bold my-3">Apartment</label>
              <input
                type="text"
                name="apartment"
                onChange={handleStoreSettingsFormUpdate}
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                disabled={editBillingDetails}
                value={storeData.apartment || ""}
              />
            </div>
          </div>
        </article>

        {/* PRODUCTS DETAILS */}
        <article className="border rounded-md">
          <div className="p-3 flex items-center justify-between border-b">
            <h1 className="text-lg font-bold">Product Details</h1>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-md font-bold my-3">Products to sell</label>
              <div className="flex flex-col gap-1">
                {sellingItems.map((item, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <input
                      type="checkbox"
                      name={item}
                      id=""
                      className="h-5 w-5"
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-md font-bold my-3">
                How will you get these products
              </label>
              <div className="flex flex-col gap-1">
                {goods.map((item, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <input
                      type="checkbox"
                      name={item}
                      id=""
                      className="h-5 w-5"
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* DELETE STORE */}
        <article className="border rounded-md flex flex-col gap-4 sm:flex-row sm:items-center justify-between  p-2">
          <div>
            <h1 className="text-base font-bold">Delete this Store</h1>
            <p>
              Once you delete a store, there is no going back. Please be
              certain.
            </p>
          </div>
          <button
            className="text-red-500 bg-gray-200 p-1 rounded-md inset-4 capitalize border-2 border-gray-600 text-sm flex items-center gap-1 w-fit"
            onClick={() => dispatch(toggleDelete())}
          >
            <RiDeleteBin6Line />
            <span>Delete this store</span>
          </button>
        </article>
      </section>
    </>
  );
};

export default StoreSettings;
