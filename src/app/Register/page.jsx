"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!name || !email || !password) {
        throw new Error("All fields are necessary.");
      }

      const resUserExists = await fetch("api/userExits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!resUserExists.ok) {
        throw new Error("Error checking user existence");
      }

      const { user } = await resUserExists.json();

      if (user) {
        throw new Error("User already exists.");
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      const form = e.target;
      form.reset();
      router.push("/Login");
    } catch (error) {
      console.error("Registration failed:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg px-8 py-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            id="email"
            placeholder="Email@xyz.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            id="password"
            placeholder="*****"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Register
          </button>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/Login">
              <span className="text-blue-500 hover:text-blue-700">
                Login to your account
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
