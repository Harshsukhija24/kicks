"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav2 = () => {
  return (
    <div className="flex justify-center space-x-6 py-4 text-black">
      <div className="flex flex-col items-center">
        <Link href="/Home">
          <Image
            src="https://i.pinimg.com/564x/58/7a/95/587a956a8aa431b277d3c901e463e1e4.jpg"
            width={50000}
            height={5000}
            className=" border-none w-40 h-30 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
        </Link>
        <div className="flex items-center   space-x-6">
          <Link
            href="/arrival"
            className=" hover:text-sky-600   hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black"
          >
            New Arrival
          </Link>

          <Link
            href="/Sneakers"
            className=" hover:text-sky-600   hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black"
          >
            Sneakers
          </Link>
          <Link
            href="/StreetWear"
            className=" hover:text-sky-600   hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black"
          >
            StreetWear
          </Link>
          <Link
            href="/LimitedEdition"
            className=" hover:text-sky-600   hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black"
          >
            Limited Edition
          </Link>

          <Link
            href="/Resell"
            className=" hover:text-sky-600   hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black"
          >
            For Reseller
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
