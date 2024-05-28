import React from "react";

const InputForm = ({ label, type, disabled, value }) => {
  return (
    <div>
      <label className="text-md font-bold my-3">{label}</label>
      <input
        type={type}
        className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default InputForm;
