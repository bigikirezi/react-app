import { CSSProperties, MouseEventHandler, ChangeEvent } from "react";

export interface InputProps {
  label: string;
  inputType: string;
  inputName: string;
  inputPlaceholder: string;
  customStyles?: CSSProperties;
  inputValue: string;
  inputAction: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  buttonType?: "submit" | "button" | "reset";
  buttonText: string;
  buttonAction: MouseEventHandler<HTMLButtonElement>;
  customStyles?: CSSProperties;
}

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  stock: number;
  rating: number;
  discountPercentage: number;
}

export interface ProductCardProps {
  product: Product;
}

export interface CustomError {
  message: string;
}
