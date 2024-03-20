"use client";
import React from "react";
import Link from "next/link";

const Nav2 = () => {
  return (
    <div className="flex justify-center space-x-6 py-4 bg-gray-900 text-white">
      <Link href="/arrival" className="hover:text-gray-300">
        New Arrival
      </Link>
      <Link href="/Sneakers" className="hover:text-gray-300">
        Sneakers
      </Link>
      <Link href="/StreetWear" className="hover:text-gray-300">
        StreetWear
      </Link>
      <Link href="/LimitedEdition" className="hover:text-gray-300">
        Limited Edition
      </Link>
      <Link href="/ContactUs" className="hover:text-gray-300">
        Contact Us
      </Link>
      <Link href="/Resell" className="hover:text-gray-300">
        For Reseller
      </Link>
    </div>
  );
};

export default Nav2;
