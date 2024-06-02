"use client";
import React, { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { IoClose } from "react-icons/io5";
import {
  IsCreateStoreActive,
  creationFailure,
} from "@/app/redux/feature/storeCreationSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { activeStore, addStore } from "@/app/redux/feature/storeSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const CreateStore = () => {
  const [storeName, setStoreName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const { user } = useSelector((state: any) => state.auth);

  const handleCreateStore = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const token = user.token;

    if (!storeName) {
      setLoading(false);
      setErrorMsg("Please enter a store name");
      return;
    }
    const name = storeName;
    try {
      const response = await axios.post(
        "https://cartle-test.onrender.com/stores/",
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      if (response.status === 201 || response.status === 200) {
        setLoading(false);
        dispatch(IsCreateStoreActive());
        toast.success("Store created successfully");
        const store = response.data.store;
        dispatch(addStore(store));
        dispatch(activeStore(store.id));
      }
    } catch (error) {
      setLoading(false);
      toast.error("store creation failed");
      if (
        (error as any).response.status === 400 ||
        (error as any).response.status === 404
      ) {
        dispatch(creationFailure("store creation failed"));
        setLoading(false);
        toast.error("store creation failed");
        toast.error((error as any).response?.data?.error);
      }
    }
  };

  return (
    <main className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] z-[9999999999]">
      <ToastContainer />
      <section className="h-full w-full flex items-center justify-center">
        <div
          className={`p-7 bg-white shadow-none sm:shadow-2xl rounded-3xl mx-auto w-[70%]  md:w-[60%] lg:w-[40%] xl:w-[30%]   transition-transform duration-700 ease-in-out  flex flex-col gap-6`}
        >
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="name">Enter store name</label>
                <div onClick={() => dispatch(IsCreateStoreActive())}>
                  <IoClose fontSize={24} className="cursor-pointer" />
                </div>
              </div>

              <input
                type="name"
                name="name"
                id="name"
                value={storeName}
                onChange={(event) => setStoreName(event.target.value)}
                className="w-full hover:outline-none focus:outline-none border focus:border-orange-500 h-10 px-3 rounded-md"
              />
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white h-12 font-bold rounded-md flex items-center justify-center mt-3"
                onClick={handleCreateStore}
              >
                {loading ? <LoadingSpinner /> : <span>Create a store</span>}
              </button>
            </div>
            <div>{errorMsg && <p className="text-red-500">{errorMsg}</p>}</div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CreateStore;
