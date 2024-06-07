import React from "react";
import "../components/merchant_components/loading/loader.css";

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white top-0 left-0">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PageLoading;
