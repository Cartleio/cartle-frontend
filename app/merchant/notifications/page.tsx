"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "@/app/components/merchant_components/Header";
import Layout from "@/app/components/merchant_components/Layout";


interface Notification {
    id: number;
    title: string;
    content: string;
    merchantId: number;
    createdAt: string;
    updatedAt: string;
  }

type HeaderData = {
    title: string;
    text: string;
  };

const Page = () => {
        const [notifications, setNotifications] = useState<Notification[]>([]);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);
  
    const HeaderData: HeaderData = {
        title: "Notifications",
        text: "Notifications for you",
      };

      useEffect(() => {
        const fetchNotifications = async () => {
          try {
            const response = await axios.get('https://cartle-backend-800v.onrender.com/merchants/notify/all');
            setNotifications(response.data.notifications);
            setLoading(false);
          } catch (err) {
            setError('Failed to fetch notifications');
            setLoading(false);
          }
        };
    
        fetchNotifications();
      }, []);
    
      if (loading) return <div className="text-center mt-5">Loading...</div>;
      if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;
    
  return (
    <Layout>
        <div className="w-full">
        <Header {...HeaderData} />

        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Notifications</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notifications.map((notification) => (
                <div key={notification.id} className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">{notification.title}</h2>
                    <p className="text-gray-700">{notification.content}</p>
                    <p className="text-gray-500 text-sm">Created At: {new Date(notification.createdAt).toLocaleString()}</p>
                </div>
                ))}
            </div>
         </div>
        </div>
    </Layout>
  )
}

export default Page