import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";

const RoutesProvider = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },   
        
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      }
    ],
  },
]);

export default RoutesProvider;
