"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="email"
          placeholder="Email@xyz.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          placeholder="*****"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        {error && <div>{error}</div>}
        <p>
          Already have an account?
          <Link href="/Login">Login to your account</Link>
        </p>
      </form>
    </div>
  );
};

export default page;
