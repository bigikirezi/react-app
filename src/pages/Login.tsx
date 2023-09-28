import React, { useState, ChangeEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";
import { useSignIn, useAuthUser } from "react-auth-kit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const API = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = useSignIn();
  const auth = useAuthUser();
  const user = auth();

  const LoginUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const data = await API.get(`/users?email=${email}&password=${password}`);

      if (data.data[0].email === email && data.data[0].password === password) {
        const token = "kevin";
        if (data.status === 200) {
          if (
            signIn({
              token: token,
              expiresIn: 60 * 60,
              tokenType: "Bearer",
              authState: data.data,
            })
          ) {
            toast.success("user logged", user?.name);
            navigate("/products");
          } else {
            toast.error("Error occurred");
          }
        }
      } else {
        toast.error("invalid email & password");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Log in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div className="">
                <Input
                  inputType="email"
                  inputName="email"
                  inputPlaceholder="Email"
                  label="Email"
                  inputValue={email}
                  inputAction={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
              <div className="">
                <Input
                  inputType="password"
                  inputValue={password}
                  inputAction={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  inputName="password"
                  inputPlaceholder="Password"
                  label="Password"
                />
              </div>
              <div className="">
                <Button
                  buttonType="submit"
                  buttonText="Login"
                  buttonAction={LoginUser}
                />
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <NavLink
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
