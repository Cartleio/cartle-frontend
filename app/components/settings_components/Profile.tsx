"use client";
import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { AppDispatch } from "../../redux/store";
import SettingsSpinner from "./SettingsSpinner";
import { FaCamera } from "react-icons/fa";
import { getProfile } from "@/app/redux/feature/profileSlice";

const Profile = () => {
  //REDUX USE DISPATCH INSTANCE
  const dispatch = useDispatch<AppDispatch>();

  //GET THE USER INFORMATION
  const { profile } = useSelector((state: any) => state.profile);

  //GET TOKEN FROM AUTH STORE
  const { user } = useSelector((state: any) => state.auth);

  // CONTROLS EDIT BUTTONS
  const [editProfileDetails, setEditProfileDetails] = useState(true);

  //LOADING STATE
  const [loading, setLoading] = useState(false);

  //TEMPORARY STATE TO MANAGE THE PROFILE UPDATE
  const [merchantProfile, setMerchantProfile] = useState({
    username: profile?.username,
    profilePhoto: profile?.profilePhoto,
    phoneNumber: profile?.phoneNumber,
    secondaryEmail: profile?.secondaryEmail,
    address: profile?.address,
    countryRegion: profile?.countryRegion,
    instagramURL: profile?.instagramURL,
    facebookURL: profile?.facebookURL,
    twitterURL: profile?.twitterURL,
    tiktokURL: profile?.tiktokURL,
  });

  // FUNCTION TO HANDLE PROFILE FORM INPUT ONCHANGE
  const handleProfileSettingsFormUpdate = (e: any) => {
    e.preventDefault();
    if (e.target.name === "profilePhoto") {
      //THE CODE BLOCK BELOW CONVERTS THE IMAGE TO A 64BIT URL FOR UPLOAD TO THE SERVER
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result as string;
          //UPLOAD TO THE DATABASE
          setMerchantProfile((prev) => ({
            ...prev,
            profilePhoto: imageUrl,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setMerchantProfile((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // FUNCTION TO HANDLE THE FORM SAVE (MAKES A HTTP REQUEST TO THE SERVER)
  const handleFormSave = async () => {
    try {
      setLoading(true);
      const token = user.token;
      const response = await axios.put(
        `https://cartle-test-1.onrender.com/merchant/profile`,
        merchantProfile,
        {
          headers: {
            withCredentials: true,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.status === 200) {
        setLoading(false);
        toast.success("Profile updated successfully");
        setEditProfileDetails(true);
        // DISPATCH GET PROFILE: THIS INVALIDATES THE PROFILE STATE
        dispatch(getProfile());
      }
    } catch (error) {
      setLoading(false);
      if (error) {
        toast.error("Profile update failed");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="flex flex-col gap-8">
        {/* STORE DETAILS */}
        <article className="border rounded-md">
          <div className="p-3 flex items-center justify-between border-b">
            <h1 className="text-lg font-bold">Store Profile</h1>
            {/* EDIT BUTTON */}
            {editProfileDetails ? (
              <button
                className="text-blue-500 px-[0.3rem]"
                onClick={() => setEditProfileDetails(false)}
              >
                Edit
              </button>
            ) : (
              <button
                className="bg-orange-500 text-white px-[0.3rem] shadow-xl rounded-md flex items-center justify-center"
                onClick={() => handleFormSave()}
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
            {/* PROFILE IMAGE */}
            <div className="w-20 h-20 bg-transparent flex items-center justify-center my-3 rounded-full text-xl relative cursor-pointer">
              <div className="w-full h-full bg-transparent absolute top-1/2 -translate-y-1/2 text-xl flex items-center rounded-full justify-center bg-gradient-to-tr from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)]">
                <FaCamera />
              </div>
              <input
                type="file"
                name="profilePhoto"
                id="profilePhoto"
                className="appearance-none opacity-0"
                disabled={editProfileDetails}
                onChange={handleProfileSettingsFormUpdate}
              />
              {merchantProfile.profilePhoto && (
                <div className="w-full h-full bg-transparent absolute top-1/2 -translate-y-1/2 text-xl flex items-center rounded-full justify-center -z-40">
                  <img
                    src={merchantProfile.profilePhoto}
                    alt={merchantProfile.username}
                    className="w-full h-full object-fit rounded-full"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* MERCHANT NAME */}
              <div>
                <label className="text-md font-bold my-3">Username</label>
                <input
                  type="text"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editProfileDetails}
                  onChange={handleProfileSettingsFormUpdate}
                  name="username"
                  value={merchantProfile.username}
                />
              </div>

              {/* MERCHANT SECONDARY EMAIL */}
              <div>
                <label className="text-md font-bold my-3">
                  Secondary Email
                </label>
                <input
                  type="email"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editProfileDetails}
                  value={merchantProfile.secondaryEmail}
                  name="secondaryEmail"
                  onChange={handleProfileSettingsFormUpdate}
                />
              </div>

              {/* MERCHANT PHONE Number*/}
              <div>
                <label className="text-md font-bold my-3">
                  Merchant Phone Number
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editProfileDetails}
                  value={merchantProfile.phoneNumber}
                  onChange={handleProfileSettingsFormUpdate}
                />
              </div>

              {/*MERCHANT ADDRESS*/}
              <div>
                <label className="text-md font-bold my-3">Address</label>
                <input
                  type="text"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editProfileDetails}
                  value={merchantProfile.address}
                  name="address"
                  onChange={handleProfileSettingsFormUpdate}
                />
              </div>

              {/* COUNTRY */}
              <div>
                <label className="text-md font-bold my-3">Country</label>
                <select
                  name="countryRegion"
                  value={merchantProfile.countryRegion}
                  onChange={handleProfileSettingsFormUpdate}
                  disabled={editProfileDetails}
                  className="focus:outline-none border focus:border bg-white focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                >
                  <option value="Nigeria">Nigeria</option>
                  <option value="Canada">Canada</option>
                  <option value="Ghana">Ghana</option>
                </select>
              </div>

              {/*INSTAGRAM URL*/}
              <div>
                <label className="text-md font-bold my-3">Instagram Url</label>
                <input
                  type="text"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editProfileDetails}
                  value={merchantProfile.instagramURL}
                  name="instagramURL"
                  onChange={handleProfileSettingsFormUpdate}
                />
              </div>

              {/*FACEBOOK URL*/}
              <div>
                <label className="text-md font-bold my-3">Facebook URL</label>
                <input
                  type="text"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editProfileDetails}
                  value={merchantProfile.facebookURL}
                  name="facebookURL"
                  onChange={handleProfileSettingsFormUpdate}
                />
              </div>

              {/*Twitter URL*/}
              <div>
                <label className="text-md font-bold my-3">Twitter URL</label>
                <input
                  type="text"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editProfileDetails}
                  value={merchantProfile.twitterURL}
                  name="twitterURL"
                  onChange={handleProfileSettingsFormUpdate}
                />
              </div>

              {/*INSTAGRAM URL*/}
              <div>
                <label className="text-md font-bold my-3">Tiktok URL</label>
                <input
                  type="text"
                  className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
                  disabled={editProfileDetails}
                  value={merchantProfile.tiktokURL}
                  name="tiktokURL"
                  onChange={handleProfileSettingsFormUpdate}
                />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Profile;
