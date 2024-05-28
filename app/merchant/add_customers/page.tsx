"use client";
import CountryStateCity from "@/app/components/CountryStateCity";
import AddHeader from "@/app/components/merchant_components/AddHeader";
import Layout from "@/app/components/merchant_components/Layout";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function AddCustomer() {
  //LOADING STATE STATE
  const [loading, setLoading] = useState(false);

  //GET ACTIVE STORE ID FROM REDUX STORE
  const { activeStoreId } = useSelector((store: any) => store.merchantData);

  //GET TOKEN FROM AUTH STORE
  const { user } = useSelector((state: any) => state.auth);

  type CustomerData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phoneNumber: any;
    country: string;
    city: string;
    state: string;
    marketingEmail: boolean;
    marketingSMS: boolean;
  };

  const router = useRouter();

  //TEMPORARY STATE FOR MANAGING CUSTOMER UPDATE ONCHANGE
  const [customerData, setCustomerData] = useState<CustomerData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneNumber: null,
    country: "",
    city: "",
    state: "",
    marketingEmail: true,
    marketingSMS: true,
  });

  //HANDLE TEMPORARY STATE FOR MANAGING CUSTOMER UPDATE ONCHANGE
  const handleFormUpdate = (e: any) => {
    e.preventDefault();
    if (e.target.name === "phoneNumber") {
      setCustomerData({
        ...customerData,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setCustomerData({
        ...customerData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  //HANDLE SELECTED COUNTRY, STATE AND CITY UPDATES TO THE CUSTOMER DATA
  useEffect(() => {
    setCustomerData({
      ...customerData,
      country: selectedCountry,
      state: selectedState,
      city: selectedCity,
    });
  }, [selectedCountry, selectedState, selectedCity]);

  //HANDLE SELECTED COUNTRY, STATE AND CITY UPDATES
  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
  };

  const handleCityChange = (value: string) => {
    setSelectedCity(value);
  };

  //HANDLE CUSTOMER UPDATE TO THE DATABASE
  const handleSave = async () => {
    try {
      const token = user.token;
      setLoading(true);
      const response = await axios.post(
        `https://cartle-backend-800v.onrender.com/merchant/${activeStoreId}/customers`,
        customerData,
        {
          headers: {
            withCredentials: true,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.status === 201) {
        setLoading(false);
        toast.success("Customer Created Successfully");

        setTimeout(() => {
          router.push("/merchant/customers");
        }, 1500);

        setCustomerData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          phoneNumber: null,
          country: "",
          city: "",
          state: "",
          marketingEmail: true,
          marketingSMS: true,
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Customer creation failed");
    }
  };

  //ADD HEADER DATA(PROPS)
  const addHeaderData = {
    title: "New Customer",
    text: "Manually add your customer’s data",
    return_arrow_url: "/merchant/customers",
    saveFn: handleSave,
    loading: loading,
  };

  return (
    <>
      <ToastContainer />
      <Layout>
        <AddHeader {...addHeaderData} />
        <form className="flex flex-col gap-5 py-8">
          <section className="p-5 border rounded-md shadow-sm flex flex-col gap-8">
            <h1 className="text-sm md:text-base lg:text-xl text-[#444748] font-medium">
              Customer Overview
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* FIRST NAME */}
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={customerData?.firstname}
                  onChange={handleFormUpdate}
                  className="focus:outline-none  border bg-white border-[#E7E7E7] focus:bg-white focus:border-[#FF7600] px-3 h-12 rounded-md"
                  placeholder="John"
                />
              </div>

              {/* LAST NAME */}
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={customerData?.lastname}
                  onChange={handleFormUpdate}
                  className="focus:outline-none bg-white focus:bg-white  border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={customerData?.email}
                  onChange={handleFormUpdate}
                  placeholder="Johndoe@yahoo.com"
                  className="focus:outline-none  bg-white focus:bg-white border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                />
              </div>

              {/* PASSWORD */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={customerData?.password}
                  onChange={handleFormUpdate}
                  className="focus:outline-none  bg-white focus:bg-white border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {/* PHONE */}
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="phoneNumber" className="font-medium">
                  Phone Number
                </label>

                <div className="flex gap-6">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={customerData?.phoneNumber}
                    onChange={handleFormUpdate}
                    className="focus:outline-none  border bg-white focus:bg-white border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md w-[70%] md:flex-1"
                  />
                  <select
                    name="countryCode"
                    id="countryCode"
                    className="w-[30%] md:w-20 bg-white focus:bg-white rounded-md focus:border-[#FF7600] focus:outline-none  border p-2"
                    onChange={handleFormUpdate}
                  >
                    <option value="+234">+234</option>
                    <option value="+233">+233</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CHECKBOX's */}
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="marketingEmail"
                id="marketingEmail"
                className="h-4 w-4 shrink-0"
                checked={customerData?.marketingEmail}
                onChange={() => {
                  setCustomerData({
                    ...customerData,
                    marketingEmail: !customerData?.marketingEmail,
                  });
                }}
              />
              <p
                className="text-[#121212] font-medium text-xs sm:text-sm md:text-base cursor-pointer"
                onClick={() => {
                  setCustomerData({
                    ...customerData,
                    marketingEmail: !customerData?.marketingEmail,
                  });
                }}
              >
                Customer agreed to receive marketing emails
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="marketingSMS"
                id="marketingSMS"
                checked={customerData?.marketingSMS}
                onChange={() => {
                  setCustomerData({
                    ...customerData,
                    marketingSMS: !customerData?.marketingSMS,
                  });
                }}
                className="h-4 w-4 shrink-0"
              />
              <p
                className="text-[#121212] font-medium text-xs sm:text-sm md:text-base cursor-pointer"
                onClick={() => {
                  setCustomerData({
                    ...customerData,
                    marketingSMS: !customerData?.marketingSMS,
                  });
                }}
              >
                Customer agreed to receive marketing information through SMS
              </p>
            </div>

            <p className="text-[#121212] font-medium text-xs sm:text-sm md:text-base">
              Make sure to ask your customers for permission first before
              checking these boxes!
            </p>
          </section>

          <section className="p-5 border rounded-md shadow-sm flex flex-col gap-5">
            <h1 className="text-sm md:text-base lg:text-xl text-[#444748] font-medium">
              Customer Address
            </h1>

            {/* COUNTYSTATEAPP */}
            <CountryStateCity
              selectedCountry={selectedCountry}
              selectedState={selectedState}
              selectedCity={selectedCity}
              onCountryChange={handleCountryChange}
              onStateChange={handleStateChange}
              onCityChange={handleCityChange}
            />

            {/* ADDRESS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="homeAddress" className="font-medium">
                  Home Address
                </label>
                <input
                  type="homeAddress"
                  name="homeAddress"
                  placeholder="Johndoe@yahoo.com"
                  className="focus:outline-none  border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                />
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="addressInformation" className="font-medium">
                    Address Information
                  </label>
                  <input
                    type="addressInformation"
                    name="addressInformation"
                    placeholder="Along The Road"
                    className="focus:outline-none  border border-[#E7E7E7] focus:border-[#FF7600] px-3 h-12 rounded-md"
                  />
                </div>
              </div>
            </div>
          </section>
        </form>
      </Layout>
    </>
  );
}

export default AddCustomer;
