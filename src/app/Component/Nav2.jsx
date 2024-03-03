"use client";
import React from 'react'
import Link from 'next/link'

const Nav2 = () => {
  return (
    <div className="flex justify-center space-x-6 py-4 bg-gray-900 text-white">
      <Link href="/Home" className="hover:text-gray-300">New Arrival</Link>
      <Link href="/Men" className="hover:text-gray-300">Men</Link>
      <Link href="/Women" className="hover:text-gray-300">Women</Link>
      <Link href="/LimitedEdition" className="hover:text-gray-300">Limited Edition</Link>
      <Link href="/ContactUs" className="hover:text-gray-300">Contact Us</Link>
      <Link href="/Resell" className="hover:text-gray-300">For Reseller</Link>
      <Link href="/Size" className="hover:text-gray-300">Size Chart</Link>
    </div>
  )
}

export default Nav2
