"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <div>{children}</div>
    </Provider>
  );
};

export default ReduxProvider;
