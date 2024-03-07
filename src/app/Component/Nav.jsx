"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  // Define the URL of the logo image
  const logoUrl =
    "https://www.shutterstock.com/image-photo/ivanofrankivsk-ukraine-09-12-2019-260nw-2362013629.jpg";

  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/Logout">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FontAwesomeIcon icon={faUser} className="text-xl" />
              <span className="text-sm"></span>
            </div>
          </Link>
        </div>

        <div className="flex justify-center flex-1">
          <Link href="/Home">
            {/* Use the correct variable name */}
            <img src={logoUrl} alt="logo" className="h-12" />
          </Link>
        </div>

        <div className="flex items-center">
          <Link href="/Cart">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
