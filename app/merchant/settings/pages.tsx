"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Header from "@/app/components/merchant_components/Header";
import Layout from "@/app/components/merchant_components/Layout";
import { AppDispatch } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";
type HeaderData = {
  title: string;
  text: string;
};

type MerchantProfile = {
  username: string;
  profilePhoto: string;
  phoneNumber: string;
  secondaryEmail: string;
  address: string;
  countryRegion: string;
  instagramURL: string;
  facebookURL: string;
  twitterURL: string;
  tiktokURL: string;
};

const Settings: React.FC = () => {


    //USE DISPATCH INSTANCE
    const dispatch = useDispatch<AppDispatch>();

    //GET ACTIVE STORE ID FROM REDUX STORE
    const { activeStoreId } = useSelector((store: any) => store.merchantData);
  
  const { user } = useSelector((state: any) => state.auth);


  const [profile, setProfile] = useState<MerchantProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const headerData: HeaderData = {
    title: "Profile Settings",
    text: "Profile",
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const token = user.token;
      try {
        const response = await axios.get('https://cartle-backend-800v.onrender.com/merchants/',
        {
          headers: {
            withCredentials: true,
            Authorization: `Bearer ${token}`,
          },
        }
        );
        setProfile(response.data.merchant);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch profile data');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile!,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.put('https://cartle-backend-800v.onrender.com/merchants/', profile);
      setMessage('Profile updated successfully');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;

  return (
    <Layout>
      <div className="w-full">
        <Header {...headerData} />
        {message && <div className="text-center mt-5 text-green-500">{message}</div>}
        <form className="max-w-xl mx-auto mt-8" onSubmit={handleSubmit}>
          {profile && Object.keys(profile).map((key) => (
            <div key={key} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type="text"
                name={key}
                id={key}
                value={profile[key as keyof MerchantProfile]}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Settings;