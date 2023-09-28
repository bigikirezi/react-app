// src/components/NavBar.tsx
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <>
      <div className=" bg-teal-900 p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-white text-3xl font-bold">Ecommerce App</h1>

          <ul className="flex space-x-4 float-right">
            <li className="font-bold px-3 py-2 float-left text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
