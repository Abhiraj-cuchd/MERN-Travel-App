import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-extrabold my-7">Admin Login</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-orange-500 p-2 rounded-lg shadow-sm text-xl text-white  hover:opacity-95 disabled:opacity-80">
          Login
        </button>
      </form>
      <div className="">
        <p className="text-center">
          Don't have an account?
          <span className="text-orange-500 font-bold">
            {" "}
            Ask Owner for Registration{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
