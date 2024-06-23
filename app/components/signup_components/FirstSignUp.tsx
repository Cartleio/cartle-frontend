"use client";
import { updateField } from "@/app/redux/feature/registerSlice";
import style from "../../../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function FirstSignUp() {
  const dispatch = useDispatch();
  const regData = useSelector((state: any) => state.register);
  console.log(regData);

  const handleFormUpdate = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  return (
    <>
      <div className="py-4">
        <h1
          className={`text-2xl lg:text-4xl text-primary-500 ${style.baskerville}`}
        >
          Store Information
        </h1>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 md:gap-x-[20px] gap-y-[20px]`}
      >
        <div className="md:col-start-1 md:col-end-2">
          <div>
            <label htmlFor="firstname" className="font-semibold">
              First Name
            </label>
          </div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            value={regData.firstName}
            onChange={handleFormUpdate}
            required
            className="rounded-[10px] required p-2 bg-[#EFF0F1] w-full focus:outline-none focus:border-none my-1"
          />
        </div>
        <div className="md:col-start-1 md:col-end-2">
          <div>
            <label htmlFor="lastname" className="font-semibold">
              First Name
            </label>
          </div>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Nzubechi"
            value={regData.lastName}
            onChange={handleFormUpdate}
            required
            className="rounded-[10px] required p-2 bg-[#EFF0F1] w-full focus:outline-none focus:border-none my-1"
          />
        </div>

        <div className="md:col-start-2 md:col-end-3">
          <div>
            <label htmlFor="storeName" className="font-semibold">
              Store Name
            </label>
          </div>
          <input
            type="text"
            name="storeName"
            id="storeName"
            className="rounded-[10px] p-2 bg-[#EFF0F1] w-full focus:outline-none focus:border-none my-1"
            placeholder="Store Name"
            value={regData.storeName}
            onChange={handleFormUpdate}
          />
        </div>

        <div>
          <div>
            <label htmlFor="storeAddress" className="font-semibold">
              Store Address
            </label>
          </div>
          <input
            type="text"
            name="storeAddress"
            id="storeAddress"
            value={regData.storeAddress}
            onChange={handleFormUpdate}
            className="rounded-[10px] p-2 bg-[#EFF0F1] w-full focus:outline-none focus:border-none my-1"
            placeholder="3 Banga street, Ilorin"
          />
        </div>

        <div>
          <div>
            <label htmlFor="phone" className="font-semibold">
              Phone Number
            </label>
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={regData.phoneNumber}
            onChange={handleFormUpdate}
            required
            id="phone"
            className="rounded-[10px] required p-2 bg-[#EFF0F1] w-full focus:outline-none focus:border-none my-1"
          />
        </div>
      </div>
    </>
  );
}
