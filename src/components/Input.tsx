import React from "react";
import { InputProps } from "../utils/types";

const Input: React.FC<InputProps> = ({
  label,
  inputType,
  inputName,
  inputPlaceholder,
  customStyles,
  inputValue,
  inputAction,
}: InputProps) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <input
        type={inputType}
        name={inputName}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputAction}
        style={customStyles}
      />
    </>
  );
};

export default Input;
