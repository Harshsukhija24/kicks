"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react"; // Import useSession

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status } = useSession(); // Get session status

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/Home"); // Redirect to home if already authenticated
    }
  }, [status]);

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
        setError("Invalid email or password.");
        console.log(error);
        return;
      }
      router.push("/Home");
    } catch (error) {
      console.log("Error:", error);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white shadow-md rounded-lg px-8 py-6"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Welcome to kicks
        </h1>
        <input
          id="email"
          placeholder="email@xyz.com"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          id="password"
          placeholder="*****"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Login
        </button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <p className="mt-4 text-center">
          New to kicks?{" "}
          <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
            <Link href="/Register">Register</Link>
          </span>
        </p>
        <p className="mt-4 text-center">
          are u owner?{" "}
          <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
            <Link href="/Ownerlogin">login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Page;
