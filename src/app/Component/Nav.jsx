"use client";

import Link from "next/link";
import logo from "../Logo/logo.png";

const Nav = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/Logout">
            <h1 className="text-xl font-bold cursor-pointer">User</h1>
          </Link>
        </div>

        <div className="flex justify-center flex-1">
          <Link href="/Home">
            <img src={logo} alt="logo" className="h-8" />
          </Link>
        </div>

        <div>
          <Link href="/Cart">
            <h1 className="text-xl font-bold cursor-pointer">Cart</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
