"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

const page = () => {
  const [email, setEmail] = useState(""); // Changed SetEmail to setEmail for consistency
  const [password, setPassword] = useState(""); // Changed SetPassword to setPassword for consistency
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(response);
      if (response?.error) {
        setError("Invalid email or password."); // Changed "invaild" to "Invalid email or password."
        console.log(error);
        return;
      }
      router.push("/Home"); // Changed "/Home" to "/home" for consistency
    } catch (error) {
      console.log("Error:", error); // Changed "error:" to "Error:"
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {" "}
      {/* Added styling for vertical and horizontal centering */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white shadow-md rounded-lg px-8 py-6"
      >
        {" "}
        {/* Added styling for form */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Welcome to Kicks
        </h1>{" "}
        {/* Added styling for heading */}
        <input
          id="email"
          placeholder="email@xyz.com"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" // Added styling for input fields
        />
        <input
          id="password"
          placeholder="*****"
          type="password" // Changed type from "text" to "password" for security
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" // Added styling for input fields
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Login
        </button>{" "}
        {/* Added styling for button */}
        {error && <div className="text-red-500 mt-2">{error}</div>}{" "}
        {/* Added styling for error message */}
        <p className="mt-4 text-center">
          New to Kicks?{" "}
          <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
            <Link href="/Register">Register</Link>
          </span>{" "}
          {/* Changed anchor tag to span with styling */}
        </p>
      </form>
    </div>
  );
};

export default page;
