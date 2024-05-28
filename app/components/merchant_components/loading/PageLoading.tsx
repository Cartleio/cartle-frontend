import React from "react";
import "./loader.css";

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center h-full w-full  bg-white fixed top-0 left-0">
      <div className="w-full h-full flex items-center justify-center ">
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
    </div>
  );
};

export default PageLoading;
