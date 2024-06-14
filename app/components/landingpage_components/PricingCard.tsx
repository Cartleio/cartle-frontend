"use client";
import React, { useState } from "react";

interface PricingData {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  mostPopular?: boolean;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  link,
}) => (
  <div className="inline-block px-3">
    <div className="minWidth-70 p-4 md:p-8 space-y-3 border-2 mr-2 border-indigo-400 dark:border-indigo-300 rounded-xl">
      <span className="inline-block text-blue-500 dark:text-blue-400">
        {icon}
      </span>
      <h1 className="text-xl md:text-xl font-semibold text-gray-700 capitalize dark:text-gray-800">
        {title}
      </h1>
      <p className="text-lg md:text-base text-gray-700 dark:text-gray-500">
        {description}
      </p>
      <a
        href={link}
        className="inline-flex p-2 text-indigo-500 capitalize text-sm md:text-base transition-colors duration-300 transform bg-indigo-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-indigo-600 dark:hover:text-indigo-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-8 md:h-8 text-indigo"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </a>
    </div>
  </div>
);

const PricingCard: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pricingData: PricingData[] = [
    {
      title: "Free",
      description: "Quickest way to optimise your store",
      price: "$0",
      duration: "$5",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
    {
      title: "Pro",
      description: "Quickest way to optimise your store",
      price: "$14.99",
      duration: "$20",
      features: [
        "All Basic features",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7",
      ],
      mostPopular: true,
    },
    {
      title: "Prime",
      description: "Quickest way to optimise your store",
      duration: "$50",
      price: "$29.99",
      features: [
        "All Pro features",
        "Feature 6",
        "Feature 7",
        "Feature 8",
        "Feature 9",
      ],
    },
  ];

  const selectPlan = (index: number) => {
    setSelectedPlan(index);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-50 text-black bg-white">
        <div className="flex justify-center items-center container mx-auto py-10 px-10 sm:px-6 lg:px-8">
          <div className=" space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {pricingData.map((tier, index) => (
              <div
                key={index}
                className={`p-6 border-0 px-10 rounded-3xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg pricing-cards hover:bg-[#FF7600] hover:text-white hover:cursor-pointer`}
              >
                {tier.mostPopular && (
                  <div
                    className="absolute top-0 left-0 text-white py-1 px-2 rounded-tr-lg rounded-bl-lg -mt-1 -ml-1"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#E6763F",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                {selectedPlan === index && (
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9383 0.102783C19.631 0.102783 22.1036 2.45829 22.1036 5.96186V14.0488C22.1036 17.5415 19.631 19.897 15.9383 19.897H6.49431C2.80166 19.897 0.318115 17.5415 0.318115 14.0488V5.96186C0.318115 2.45829 2.80166 0.102783 6.49431 0.102783H15.9383ZM15.764 7.03075C15.3937 6.69425 14.7837 6.69425 14.4133 7.03075L9.91463 11.1182L8.0084 9.38626C7.63804 9.04976 7.02805 9.04976 6.6577 9.38626C6.28734 9.72276 6.28734 10.2671 6.6577 10.6135L9.25017 12.9591C9.43535 13.1274 9.67499 13.2065 9.91463 13.2065C10.1652 13.2065 10.4048 13.1274 10.59 12.9591L15.764 8.25799C16.1344 7.92149 16.1344 7.37715 15.764 7.03075Z"
                      fill="white"
                    />
                  </svg>
                )}
                <h3 className="text-l font-semibold mb-2 text-center mt-2 text">
                  {tier.title}
                </h3>
                <h1
                  className="text-4xl font-extrabold mb-4 text-center"
                  style={{ fontWeight: 700 }}
                >
                  {tier.price}
                </h1>
                <div
                  className="text-center duration"
                  style={{
                    background: "inherit",
                  }}
                >
                  <del>{tier.duration}</del>
                </div>
                <hr className=" my-5" />
                <p className=" mb-4 text-center">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4815 0.33667C17.8366 0.33667 20.0833 2.69218 20.0833 6.19575V14.2827C20.0833 17.7754 17.8366 20.1309 14.4815 20.1309H5.90072C2.5456 20.1309 0.289062 17.7754 0.289062 14.2827V6.19575C0.289062 2.69218 2.5456 0.33667 5.90072 0.33667H14.4815ZM14.3231 7.26464C13.9866 6.92814 13.4324 6.92814 13.0959 7.26464L9.0084 11.3521L7.27641 9.62014C6.93991 9.28364 6.38567 9.28364 6.04917 9.62014C5.71267 9.95665 5.71267 10.501 6.04917 10.8474L8.40468 13.193C8.57293 13.3612 8.79067 13.4404 9.0084 13.4404C9.23604 13.4404 9.45377 13.3612 9.62202 13.193L14.3231 8.49188C14.6596 8.15537 14.6596 7.61103 14.3231 7.26464Z"
                          fill="#515151"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => selectPlan(index)}
                  className={`w-full mt-6 py-3 px-4 rounded-md  text-[#FF7600] shadow-xl hover:bg-indigo-600 border border-indigo-200 hover:text-white bg-white ${
                    selectedPlan === index
                      ? "opacity-70 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={selectedPlan === index}
                >
                  <a href="/auth/signup">
                    {selectedPlan === index ? "Selected" : "Get Started"}
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
