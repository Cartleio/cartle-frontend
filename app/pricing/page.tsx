"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/home_components/Navbar";
import styles from "../../styles/Home.module.css";
import Title from "./components/Title";
import Item from "./components/Item";
import Footer from "../components/home_components/Footer";
import Plan from "./components/Plan";
import axios from "axios";
import Service from "./components/Service";
import Fee from "./components/Fee";
import StoreLayout from "./components/StoreLayout";
import PageLoading from "../merchant/MerchantLoader";

type PricingType = {
  id: number;
  itemName: string;
  free: string | boolean;
  pro: string | boolean;
  prime: string | boolean;
  temp: string | boolean;
};

const Customers: PricingType[] = [
  {
    id: 1,
    itemName: "Email Service",
    free: "50 custom emails monthly",
    pro: "500 custom emails monthly",
    prime: "Unlimited",
    temp: "Unlimited",
  },
  {
    id: 2,
    itemName: "Thanks for buying email",
    free: true,
    pro: true,
    prime: true,
    temp: true,
  },
  {
    id: 3,
    itemName: "Customer information",
    free: false,
    pro: true,
    prime: true,
    temp: true,
  },
  {
    id: 4,
    itemName: "Delivery Information",
    free: false,
    pro: true,
    prime: true,
    temp: true,
  },
  {
    id: 5,
    itemName: "Chat Box",
    free: false,
    pro: true,
    prime: true,
    temp: true,
  },
];

function Pricing() {
  const [plans, setPlans] = useState<any>();
  const [loading, setLoading] = useState(true);
  const getPlans = async () => {
    try {
      const response = await axios.get(
        "https://cartle-backend-800v.onrender.com/cartle/subscription-plans"
      );
      if (response.status === 200) {
        const modifiedPlan = response.data.plans.map((plan: any) => {
          if (plan?.id === 1) {
            return {
              ...plan,
              mostPopular: false,
              planText: "Quickest way to optimise your store",
            };
          }

          if (plan?.id === 2) {
            return {
              ...plan,
              mostPopular: true,
              planText: "Advanced optimization and improved frequency",
            };
          }

          if (plan?.id === 3) {
            return {
              ...plan,
              mostPopular: false,
              planText: "Advanced optimization and improved ",
            };
          }

          if (plan?.id === 4) {
            return {
              ...plan,
              mostPopular: false,
              planText: "Advanced optimization and improved ",
            };
          }
        });
        setPlans(modifiedPlan);
        setLoading(false);
      }
    } catch (err) {
      setLoading(true);
    }
  };

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <div className={`bg-white w-full font-inter  mx-auto`}>
      <Navbar backgroundColor="bg-white" />

      {loading ? (
        <div className="min-h-[80vh]">
          <PageLoading />
        </div>
      ) : (
        <section className="w-full overflow-x-scroll px-10">
          <div className="mx-auto pt-14 min-w-[900px]">
            <div className="flex flex-col gap-3 justify-center w-full items-center pb-14">
              <h1
                className={`text-3xl md:text-4xl lg:text-6xl text-[#FF7600] ${styles.baskerville}`}
              >
                Ready to grow?
              </h1>
              <p className="text-[#979DA0] text-sm md:text-base">
                Choose a plan tailored to your needs
              </p>
              <div className="flex gap-4">
                <p className="text-sm md:text-base">Monthly</p>
                <div className="h-6 w-12 bg-[#FFF1E680] rounded-xl">
                  <div className="h-6 w-6 bg-[#FF7600] rounded-full"></div>
                </div>
                <p className="text-[#979DA0] text-sm md:text-base">Yearly</p>
              </div>
            </div>

            <div className="grid grid-cols-5">
              <div className="col-start-1 col-span-1"></div>

              {plans?.map((plan: any) => {
                return (
                  <div className="" key={plan?.id}>
                    <Plan
                      mostPopular={plan?.mostPopular}
                      planType={plan?.name}
                      planPrice={`$${plan?.price}`}
                      planText={plan?.planText}
                      subscriptionPlanId={plan?.id}
                    />
                  </div>
                );
              })}
            </div>

            {/* service section - api done*/}
            <Title title="Service" />
            <Service plans={plans} />

            {/* customers section */}
            <Title title="Customer" />
            {Customers.map((Customer) => (
              <Item {...Customer} key={Customer.id} />
            ))}

            {/* fees section -api done */}
            <Title title="Fees" />
            <Fee plans={plans} />

            {/* store Layout section - api done*/}
            <Title title="Store Layout" />
            <StoreLayout plans={plans} />
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default Pricing;
