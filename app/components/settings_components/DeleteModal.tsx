"use client";
import React, { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import {
  activeStore,
  addStore,
  getStores,
  makeFirstActive,
} from "@/app/redux/feature/storeSlice";
import {
  toggleDelete,
  toggleSettings,
} from "@/app/redux/feature/settingsSlice";
import { AppDispatch } from "../../redux/store";

const DeleteModal = () => {
  const [storeName, setStoreName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [errorMsg, setErrorMsg] = useState("");

  //GET ACTIVESTOREID AND THE STORES ARRAY FROM REDUX STORE
  const { activeStoreId, stores } = useSelector(
    (store: any) => store.merchantData
  );

  //GET STORE DETAILS FROM REDUX STORE
  const { storeDetails, deleteStore } = useSelector(
    (state: any) => state.settings
  );

  //GET TOKEN FROM AUTH STORE
  const { user } = useSelector((state: any) => state.auth);

  //THIS FUNCTION CALLS THE DELETE FUNCTION
  const handleDelete = async (e: any) => {
    e.preventDefault();
    const token = user.token;
    try {
      setLoading(true);
      const response = await axios.delete(
        `https://cartle-test.onrender.com/merchant/delete-store/${activeStoreId}`,
        {
          headers: {
            withCredentials: true,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.status === 200) {
        setLoading(false);
        dispatch(getStores());
        dispatch(makeFirstActive());
        toast.success("Store deleted successfully");
        dispatch(toggleSettings());
        dispatch(toggleDelete());
      }
    } catch (error) {
      setLoading(false);
      if (error) {
        toast.error("Store deleting failed");
      }
    }
  };

  return (
    <main className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] z-[9999999999]">
      <section className="h-full w-full flex items-center justify-center">
        {stores.length < 2 ? (
          <div
            className={`p-7 bg-white shadow-none sm:shadow-2xl rounded-3xl mx-auto w-[70%]  md:w-[60%] lg:w-[40%] xl:w-[30%]   transition-transform duration-700 ease-in-out  flex flex-col gap-3`}
          >
            <h1 className="text-lg font-bold">
              You must have at least one store
            </h1>
            <div className="flex items-center gap-2">
              <MdOutlineErrorOutline className="text-xl text-red-500" />
              <h1>Store cannot Be deleted</h1>
            </div>

            <p
              className="flex-1 bg-orange-500 text-white py-2 font-bold rounded-md flex items-center justify-center mt-3 cursor-pointer"
              // HIDE DELETE MODAL
              onClick={() => dispatch(toggleDelete())}
            >
              Return to Store
            </p>
          </div>
        ) : (
          <div
            className={`p-7 bg-white shadow-none sm:shadow-2xl rounded-3xl mx-auto w-[70%]  md:w-[60%] lg:w-[40%] xl:w-[30%]   transition-transform duration-700 ease-in-out  flex flex-col gap-6`}
          >
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col items-center justify-between">
                  <h1 className="text-lg font-bold">{storeDetails?.name}</h1>
                  <h1>Are you sure you want to delete this store? </h1>
                </div>
              </div>

              <div className="w-full flex gap-10">
                {loading ? (
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white h-10 font-bold rounded-md flex items-center gap-2 justify-center mt-3"
                  >
                    <LoadingSpinner />
                    <span>Deleting...</span>
                  </button>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="flex-1 bg-orange-500 text-white h-10 font-bold rounded-md flex items-center justify-center mt-3"
                      // CALL THE DELETE FUNCTION
                      onClick={(e) => handleDelete(e)}
                    >
                      yes
                    </button>

                    <button
                      type="submit"
                      className="flex-1 bg-orange-500 text-white h-10 font-bold rounded-md flex items-center justify-center mt-3"
                      // HIDE DELETE MODAL
                      onClick={() => dispatch(toggleDelete())}
                    >
                      No
                    </button>
                  </>
                )}
              </div>
              <div>
                {errorMsg && <p className="text-red-500">{errorMsg}</p>}
              </div>
            </form>
          </div>
        )}
      </section>
    </main>
  );
};

export default DeleteModal;
