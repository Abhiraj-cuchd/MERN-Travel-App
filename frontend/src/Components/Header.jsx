import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoIcon from "../assets/logo2.png";

const Header = () => {
  return (
    <header className="bg-[#009DAE] shadow-lg">
      <div className="flex justify-evenly items-center max-w-6xl mx-auto p-3">
        <div className="flex w-[40px] h-[40px]">
          <img src={logoIcon} alt="logo" className="mr-2 mt-1" />
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap mt-3">
              <span className="text-white">ZYatraa</span>
              {/* <span className="text-slate-700">Assam</span> */}
            </h1>
          </Link>
        </div>
        <form className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/about">
            <li className="hidden sm:inline text-white hover:underline cursor-pointer">
              About Us
            </li>
          </Link>
          <Link to="/secure/admin-login">
            <li className="hidden sm:inline text-white hover:underline cursor-pointer">
              Admin
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
