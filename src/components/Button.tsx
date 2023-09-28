import React from "react";
import { ButtonProps } from "../utils/types";

const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonType,
  buttonAction,
}: ButtonProps) => {
  return (
    <>
      <button
        type={buttonType}
        className="w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center border bg-teal-600 hover:bg-teal-500 focus:border-teal-600 text-white"
        onClick={buttonAction}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
